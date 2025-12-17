<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function stats()
    {
        // specific real data logic
        $userCount = User::count();
        
        // Mock data for other metrics (simulating DB queries)
        $revenue = 45231.89; 
        $activeSessions = 12;
        $totalOrders = 345;

        return response()->json([
            'stats' => [
                [
                    'title' => 'Total Revenue',
                    'value' => '$' . number_format($revenue, 2),
                    'description' => '+20.1% from last month'
                ],
                [
                    'title' => 'Registered Users',
                    'value' => $userCount,
                    'description' => '+180 from last month'
                ],
                [
                    'title' => 'Active Sessions',
                    'value' => $activeSessions,
                    'description' => '+12% since last hour'
                ],
                [
                    'title' => 'Total Orders',
                    'value' => $totalOrders,
                    'description' => '+5% from yesterday'
                ]
            ]
        ]);
    }
}
