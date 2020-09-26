import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';



const Chart = ({data}) => (
    <ResponsiveContainer width='100%' aspect={4.0/3.0}>
      <LineChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 10, right: 20, left: 5, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#4e2abd" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="fb" stroke="#3ecf74" />
        <Line type="monotone" dataKey="li" stroke="#ebe721" />
        <Line type="monotone" dataKey="tw" stroke="#c34ede" />
      </LineChart>
      </ResponsiveContainer>
    );
  

    export default Chart;

