import './chart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart() {
    const data = [
        {
          name: 'Jan',
          "Active User": 4000,
        },
        {
            name: 'Feb',
            "Active User": 5000,
          },
          {
            name: 'Mar',
            "Active User": 8000,
          },
          {
            name: 'Apr',
            "Active User": 10000,
          },
          {
            name: 'May',
            "Active User": 7000,
          },
          {
            name: 'Jun',
            "Active User": 5800,
          },
          {
            name: 'Jul',
            "Active User": 6200,
          },
          {
            name: 'Aug',
            "Active User": 4200,
          },
          {
            name: 'Sep',
            "Active User": 5100,
          },
          {
            name: 'Oct',
            "Active User": 6300,
          },
          {
            name: 'Nov',
            "Active User": 2300,
          },
          {
            name: 'Dec',
            "Active User": 10100,
          },

      ];
    return (
        <div className="chart">
            <h3 className="chartTitle">Active Users Last Few Months</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey="Active User" stroke="#5550bd"/>
                    <Tooltip/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
