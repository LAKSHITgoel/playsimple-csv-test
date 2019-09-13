import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Legend,
  Tooltip,
  CartesianGrid
} from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#eb2f96",
  "#bae637",
  "#ff7875",
  "#73d13d",
  "#722ed1"
];

const Chart = props => {
  console.log(props.groups);
  return (
    <div className="chart-container">
      <LineChart width={1300} height={800} data={props.chartData}>
        {props.groups &&
          props.groups.map((filter, i) => (
            <Line
              type="monotone"
              dataKey={filter}
              key={"_" + i}
              stroke={COLORS[i]}
            />
          ))}
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <Legend verticalAlign="top" height={36}/>
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Chart;
