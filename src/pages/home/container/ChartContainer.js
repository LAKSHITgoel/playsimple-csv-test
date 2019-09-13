import React from "react";
import { connect } from "react-redux";
import Filter from "../components/Filter";
import Chart from "../components/Chart";

const ChartContainer = props => {
  return (
    <div>
      <Filter />
      <Chart {...props} />
    </div>
  );
};

const mapStateToProps = state => ({
  chartData: state.home.chartData,
  groups: state.home.groups
});

export default connect(
  mapStateToProps,
  {}
)(ChartContainer);
