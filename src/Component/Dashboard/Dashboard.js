import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='charts mt-8'>
            <div>
                <h1 className='text-3xl text-center font-bold'>Investment vs Revenue</h1>
                <AreaChart className='m-5' width={650}
                    height={400}
                    data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />

                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />


                </AreaChart>

            </div>

            <div>
            <h1 className='text-3xl text-center font-bold'>Investment vs Revenue</h1>
                <BarChart className='m-5'
                    width={650}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>

            <div>
            <h1 className='text-3xl text-center font-bold mb-2'>Month Wise Sell</h1>
            <LineChart
          width={650}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
          
        </LineChart>
            </div>


        </div>

    );
};

export default Dashboard;
