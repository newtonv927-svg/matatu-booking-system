import {

  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip

} from "recharts";

const data = [

  {
    month:"Jan",
    bookings:50
  },

  {
    month:"Feb",
    bookings:90
  },

  {
    month:"Mar",
    bookings:120
  }

];

function Analytics(){

  return(

    <BarChart width={500} height={300} data={data}>

      <XAxis dataKey="month" />

      <YAxis />

      <Tooltip />

      <Bar dataKey="bookings" fill="#1e3a8a" />

    </BarChart>

  );

}

export default Analytics;