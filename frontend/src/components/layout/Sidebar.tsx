"use client";

import { motion } from "framer-motion";
import { Home, Users, Settings, BarChart, FileText, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
    { icon: Home, label: "Overview", href: "/dashboard" },
    { icon: Users, label: "Patients", href: "/dashboard/patients" },
    { icon: FileText, label: "Records", href: "/dashboard/records" },
    { icon: BarChart, label: "Analytics", href: "/dashboard/analytics" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            {/* Mobile Toggle */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar Container */}
            <motion.aside
                initial={{ x: -300 }}
                animate={{ x: isOpen ? 0 : -300 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={cn(
                    "fixed inset-y-0 left-0 z-40 w-64 glass-sidebar border-r border-white/10",
                    "bg-[#0f172a]/80 backdrop-blur-xl shadow-2xl", // Deep dark blue background
                    "lg:translate-x-0 lg:static" // Always visible on large screens
                )}
            >
                <div className="flex flex-col h-full bg-gradient-to-b from-white/5 to-transparent">
                    {/* Logo Area */}
                    <div className="h-20 flex items-center px-8 border-b border-white/10">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 mr-3" />
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Fallonava
                        </span>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-8 space-y-2">
                        {menuItems.map((item, index) => (
                            <Link key={item.href} href={item.href}>
                                <motion.div
                                    whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center px-4 py-3 rounded-xl cursor-pointer text-gray-400 hover:text-white transition-colors group"
                                >
                                    <item.icon className="w-5 h-5 mr-3 text-gray-500 group-hover:text-blue-400 transition-colors" />
                                    <span className="font-medium">{item.label}</span>
                                </motion.div>
                            </Link>
                        ))}
                    </nav>

                    {/* User Profile Snippet */}
                    <div className="p-4 border-t border-white/10 bg-black/20">
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-400" />
                            <div className="ml-3">
                                <p className="text-sm font-medium text-white">Dr. Alfaith</p>
                                <p className="text-xs text-gray-500">Administrator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.aside>
        </>
    );
}
