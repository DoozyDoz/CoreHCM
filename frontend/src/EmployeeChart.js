import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

function EmployeeChart({ data }) {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="employees" stroke="#8884d8" />
    </LineChart>
  );
}

export default EmployeeChart
