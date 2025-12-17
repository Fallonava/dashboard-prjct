"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useSWR from 'swr';
import axios from '@/lib/axios';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export default function DashboardPage() {
    const { data, error, isLoading } = useSWR('/dashboard-stats', fetcher);

    if (isLoading) return <div className="p-8 text-white">Loading stats...</div>;
    if (error) return <div className="p-8 text-red-500">Failed to load stats. Please log in.</div>;

    const stats = data?.stats || [];

    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat: any, i: number) => (
                    <Card key={i} className="glass-card bg-white/5 border-white/5">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-gray-400">{stat.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-white">{stat.value}</div>
                            <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Main Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="col-span-2 glass-card bg-white/5 border-white/5 h-[400px]">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center h-full text-gray-500">
                        Chart Placeholder (Chart.js / Recharts)
                    </CardContent>
                </Card>
                <Card className="col-span-1 glass-card bg-white/5 border-white/5 h-[400px]">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                                    <div className="text-sm text-gray-300">New user registered</div>
                                    <div className="ml-auto text-xs text-gray-500">2m ago</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex gap-4">
                <Button variant="default">Primary Action</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="glass">Glass Button</Button>
                <Button variant="gradient">Gradient Button</Button>
            </div>
        </div>
    );
}
