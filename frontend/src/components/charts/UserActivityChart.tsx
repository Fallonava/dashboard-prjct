"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
    { name: "Mon", total: Math.floor(Math.random() * 50) + 10 },
    { name: "Tue", total: Math.floor(Math.random() * 50) + 10 },
    { name: "Wed", total: Math.floor(Math.random() * 50) + 10 },
    { name: "Thu", total: Math.floor(Math.random() * 50) + 10 },
    { name: "Fri", total: Math.floor(Math.random() * 50) + 10 },
    { name: "Sat", total: Math.floor(Math.random() * 50) + 10 },
    { name: "Sun", total: Math.floor(Math.random() * 50) + 10 },
];

export function UserActivityChart() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <Tooltip
                    cursor={{ fill: 'rgba(255,255,255,0.1)' }}
                    contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid #333', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} className="fill-blue-500" />
            </BarChart>
        </ResponsiveContainer>
    );
}
