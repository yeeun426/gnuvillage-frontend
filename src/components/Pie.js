import { PieChart } from "react-minimal-pie-chart";

export default function Pie(props) {
  const data = [{ title: "수료율", value: props.value, color: "#F6CB44" }];

  return (
    <PieChart
      data={data}
      label={({ dataEntry }) => dataEntry.title + "\n" + dataEntry.value + "%"}
      labelStyle={{ fontSize: "2px" }}
      lineWidth={20}
      radius={10}
      animate
      reveal={props.value}
      background="Gainsboro"
      lengthAngle={360}
      rounded
      labelPosition={0}
    />
  );
}
