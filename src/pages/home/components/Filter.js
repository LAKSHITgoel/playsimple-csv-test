import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Select, Row, Col, Button } from "antd";
import { setFilter, applyFilter } from "../../../store/action/homeActions";

const { Option } = Select;

const Filter = props => {
  const onChange = (val, name) => {
    props.setFilter(val, name);
  };

  const filterData = groups => {
    const { data } = props;
    const newData = data.map(obj => {
      let dataObj = {};
      dataObj.date = obj.date;
      groups.map(filter => {
        dataObj[`${filter}`] = obj[`${filter}`];
      });
      return dataObj;
    });
    return newData;
  };

  const onApply = () => {
    let cat1Name = props.active.cat1.map(i => props.cat1[i]);
    let cat2Name = props.active.cat2.map(i => props.cat2[i]);
    let groups = [];
    for (let i = 0; i < cat1Name.length; i++) {
      for (let j = 0; j < cat2Name.length; j++) {
        let str = `${cat1Name[i]}|${cat2Name[j]}`;
        groups.push(str);
      }
    }
    let chartData = filterData(groups);

    props.applyFilter({ chartData, groups });
  };

  return (
    <Row type="flex" style={{ justifyContent: "space-around" }}>
      <Col>
        <span>
          Vehicles :
          <Select
            mode="tags"
            style={{ width: 300 }}
            name="cat1"
            onChange={val => onChange(val, "cat1")}
            value={props.active.cat1}
            placeholder="Select a filter"
          >
            {props.cat1 &&
              props.cat1.map((v, i) => <Option key={i}>{v}</Option>)}
          </Select>
        </span>
      </Col>
      <Col>
        <span>
          Others :
          <Select
            mode="tags"
            style={{ width: 300 }}
            name="cat2"
            onChange={val => onChange(val, "cat2")}
            value={props.active.cat2}
            placeholder="Select a filter"
          >
            {props.cat2 &&
              props.cat2.map((v, i) => <Option key={i}>{v}</Option>)}
          </Select>
        </span>
      </Col>
      <Col>
        <Button onClick={onApply} type="primary">
          Apply
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => ({
  cat1: state.home.cat1,
  cat2: state.home.cat2,
  active: state.home.active,
  data: state.home.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setFilter, applyFilter }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
