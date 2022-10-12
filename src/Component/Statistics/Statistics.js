import React, { useEffect, useState } from 'react';
import './Statistics.css'
import { LineChart, Line, YAxis, CartesianGrid, XAxis } from 'recharts';
import { useLoaderData } from 'react-router-dom';
const Statistics = () => {
    const chartData = useLoaderData()

    const[width,setWidth]= useState(0);
    const widthHandle = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
      widthHandle();
      window.addEventListener('resize',widthHandle);
      return ()=> window.removeEventListener('resize',widthHandle)
    }, [])
   
    console.log(width)
    return (
        <div className='mx-auto lg:w-[50%] mt-8'>
            <LineChart width={width<700?width-100:500} height={300} data={chartData.data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="total" stroke="#8884d8" />

            </LineChart>

        </div>
    );
};

export default Statistics;