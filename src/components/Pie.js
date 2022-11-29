import { PieChart } from "react-minimal-pie-chart";

export default function Pie() {
  const data = [{ title: "100% 수료", value: 30, color: "#F6CB44" }];

  return (
    <PieChart
      data={data}
      label={({ dataEntry }) => dataEntry.title + "\n" + dataEntry.value + "%"}
      labelStyle={{ fontSize: "2px" }}
      lineWidth={20}
      radius={10}
      animate
      reveal={30}
      background="Gainsboro"
      lengthAngle={360}
      rounded
      labelPosition={0}
    />
  );
}
