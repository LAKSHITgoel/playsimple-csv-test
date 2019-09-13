import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCSVdata } from "../../store/action/homeActions";
import ChartContainer from "./container/ChartContainer";

class Home extends React.Component {
  formatData = csv => {
    let cat1 = [],
      cat2 = [];
    let fileString = csv;
    let lines = fileString.split("\n").map(line => line.split(","));
    let keys = lines.slice(0, 1)[0];
    keys = keys.slice(1, keys.length);
    keys.map(col => {
      let a = col.split("|");
      if (!cat1.includes(a[0])) cat1.push(a[0]);
      else if (!cat2.includes(a[1])) cat2.push(a[1]);
      return a;
    });
    keys.unshift("date");
    let dataKeys = lines.slice(1, lines.length);
    let data = dataKeys.map((arr, i) => {
      let obj = {};
      arr.map((value, j) => {
        obj[`${keys[j]}`] = value;
      });
      return obj;
    });

    this.props.setCSVdata({
      data,
      cat1,
      cat2
    });
  };

  onChange = e => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      this.formatData(reader.result);
    };
    reader.progress = () => {
      console.log("progress", reader);
    };
    reader.onerror = () => {
      console.log(reader.error);
    };
  };

  render() {
    return (
      <div>
        <form>
          <input type="file" onChange={this.onChange} />
        </form>
        <ChartContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setCSVdata }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
