import React from "react";
import {
    FiHome, FiPieChart, FiUsers, FiSettings, FiActivity, FiSearch, FiBell, FiMenu
} from "react-icons/fi";
import { motion } from "motion/react";

const Sidebar = () => (
    <aside className="w-20 lg:w-64 bg-white/10 backdrop-blur-xl border-r border-white/20 flex flex-col items-center lg:items-start py-8 transition-all z-50">
        <div className="mb-10 px-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shrink-0">
                <FiActivity className="text-white text-xl" />
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 hidden lg:block">
                Nexus
            </h1>
        </div>

        <nav className="w-full flex-1 space-y-2 px-3">
            {[
                { icon: FiHome, label: "Dashboard", active: true },
                { icon: FiPieChart, label: "Analytics", active: false },
                { icon: FiUsers, label: "Customers", active: false },
                { icon: FiSettings, label: "Settings", active: false },
            ].map((item, idx) => (
                <button
                    key={idx}
                    className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all cursor-pointer group ${item.active
                            ? "bg-blue-500/20 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                        }`}
                >
                    <item.icon className="text-xl shrink-0" />
                    <span className="font-medium hidden lg:block">{item.label}</span>
                    {item.active && (
                        <motion.div
                            layoutId="nav-glow"
                            className="absolute left-0 w-1 h-8 bg-blue-500 rounded-r-full lg:hidden"
                        />
                    )}
                </button>
            ))}
        </nav>

        <div className="px-6 py-4 mt-auto hidden lg:block">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/20 blur-2xl rounded-full -mr-10 -mt-10" />
                <h4 className="font-semibold text-white mb-1">Pro Plan</h4>
                <p className="text-xs text-gray-400 mb-3">Get advanced analytics</p>
                <button className="w-full py-2 text-xs font-bold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg shadow-blue-500/25 transition-all cursor-pointer">
                    Upgrade Now
                </button>
            </div>
        </div>
    </aside>
);

const Header = () => (
    <header className="h-20 px-8 flex items-center justify-between bg-zinc-950/50 backdrop-blur-md sticky top-0 z-40 border-b border-white/5">
        <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-gray-400 hover:text-white">
                <FiMenu size={24} />
            </button>
            <div className="relative group hidden sm:block">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all w-64"
                />
            </div>
        </div>

        <div className="flex items-center gap-6">
            <button className="relative text-gray-400 hover:text-white transition-colors">
                <FiBell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-white/10">
                <div className="text-right hidden md:block">
                    <p className="text-sm font-semibold text-white">Alex Morgan</p>
                    <p className="text-xs text-gray-500">Admin</p>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white/10 ring-2 ring-transparent group-hover:ring-blue-500/50 transition-all cursor-pointer"
                />
            </div>
        </div>
    </header>
);

const StatsCard = ({ title, value, change, isPositive, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group"
    >
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-400 font-medium text-sm">{title}</h3>
            <div className={`p-2 rounded-lg ${isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                <FiActivity className="text-lg" />
            </div>
        </div>
        <div className="flex items-end gap-3">
            <span className="text-3xl font-bold text-white tracking-tight">{value}</span>
            <span className={`text-xs font-medium px-2 py-1 rounded-full mb-1 ${isPositive ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                }`}>
                {isPositive ? '+' : ''}{change}%
            </span>
        </div>
    </motion.div>
);

const CustomBarChart = () => (
    <div className="flex items-end justify-between h-48 gap-2 mt-4">
        {[40, 70, 45, 90, 65, 85, 50, 75, 60].map((h, i) => (
            <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                className="w-full bg-gradient-to-t from-blue-600/50 to-purple-500/50 rounded-t-lg relative group hover:from-blue-500 hover:to-purple-400 cursor-pointer"
            >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    ${h}k
                </div>
            </motion.div>
        ))}
    </div>
);

const ActivityTable = () => (
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="text-gray-400 text-sm border-b border-white/10">
                    <th className="py-4 font-medium pl-4">Customer</th>
                    <th className="py-4 font-medium">Status</th>
                    <th className="py-4 font-medium">Date</th>
                    <th className="py-4 font-medium text-right pr-4">Amount</th>
                </tr>
            </thead>
            <tbody className="text-sm">
                {[
                    { name: "Sarah Smith", status: "Completed", date: "Oct 24, 2025", amount: "$350.00" },
                    { name: "Adrian Doe", status: "Pending", date: "Oct 23, 2025", amount: "$120.50" },
                    { name: "Max Power", status: "Processing", date: "Oct 23, 2025", amount: "$850.00" },
                    { name: "Tech Corp", status: "Completed", date: "Oct 21, 2025", amount: "$2,400.00" },
                ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                        <td className="py-4 pl-4 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center font-bold text-xs text-white">
                                {row.name[0]}
                            </div>
                            <span className="text-white font-medium">{row.name}</span>
                        </td>
                        <td className="py-4">
                            <span className={`px-2 py-1 rounded-md text-xs font-medium ${row.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                                    row.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                                        'bg-blue-500/20 text-blue-400'
                                }`}>
                                {row.status}
                            </span>
                        </td>
                        <td className="py-4 text-gray-400">{row.date}</td>
                        <td className="py-4 text-right pr-4 text-white font-medium">{row.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const Just = () => {
    return (
        <div className="flex min-h-screen bg-zinc-950 text-white font-sans selection:bg-blue-500/30">
            {/* Background Gradients */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
            </div>

            <Sidebar />

            <div className="flex-1 flex flex-col min-w-0 relative z-10 h-screen overflow-y-auto">
                <Header />

                <main className="p-8 space-y-8">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                Dashboard Overview
                            </h2>
                            <p className="text-gray-400 mt-1">Welcome back, here's what's happening today.</p>
                        </div>
                        <button className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            Download Report
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatsCard title="Total Revenue" value="$45,231.89" change="20.1" isPositive={true} index={0} />
                        <StatsCard title="Active Users" value="2,345" change="15.2" isPositive={true} index={1} />
                        <StatsCard title="Bounce Rate" value="42.3%" change="4.1" isPositive={false} index={2} />
                        <StatsCard title="New Orders" value="156" change="12.5" isPositive={true} index={3} />
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-semibold text-white">Revenue Analytics</h3>
                                <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-sm text-gray-300 outline-none">
                                    <option>This Week</option>
                                    <option>This Month</option>
                                </select>
                            </div>
                            <div className="h-48 border-b border-white/5 relative">
                                {/* Grid lines */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                    {[0, 1, 2, 3].map(i => (
                                        <div key={i} className="w-full h-px bg-white/5" />
                                    ))}
                                </div>
                                <CustomBarChart />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col"
                        >
                            <h3 className="text-lg font-semibold text-white mb-4">Storage Usage</h3>
                            <div className="flex-1 flex flex-col items-center justify-center relative">
                                <svg className="w-40 h-40 transform -rotate-90">
                                    <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/10" />
                                    <motion.circle
                                        cx="80" cy="80" r="70"
                                        stroke="url(#gradient)"
                                        strokeWidth="12"
                                        fill="transparent"
                                        strokeDasharray="440"
                                        strokeLinecap="round"
                                        initial={{ strokeDashoffset: 440 }}
                                        animate={{ strokeDashoffset: 140 }}
                                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                    />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#3b82f6" />
                                            <stop offset="100%" stopColor="#a855f7" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-3xl font-bold text-white">68%</span>
                                    <span className="text-xs text-gray-400">Used</span>
                                </div>
                            </div>
                            <div className="mt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Documents</span>
                                    <span className="text-white font-medium">124 GB</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Media</span>
                                    <span className="text-white font-medium">45 GB</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Recent Transactions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
                    >
                        <div className="p-6 border-b border-white/10 flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-white">Recent Transactions</h3>
                            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">View All</button>
                        </div>
                        <ActivityTable />
                    </motion.div>
                </main>
            </div>
        </div>
    );
};

export default Just;
