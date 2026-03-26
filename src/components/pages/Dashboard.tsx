'use client';

import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingBag, Eye, ArrowUpRight, MoreHorizontal } from 'lucide-react';

const stats = [
  { label: 'Revenue', value: '$45,231', change: '+12.5%', up: true, icon: DollarSign },
  { label: 'Customers', value: '2,345', change: '+8.2%', up: true, icon: Users },
  { label: 'Orders', value: '1,234', change: '-2.1%', up: false, icon: ShoppingBag },
  { label: 'Page Views', value: '89.2K', change: '+18.7%', up: true, icon: Eye },
];

const recentOrders = [
  { id: '#3210', customer: 'Olivia Martin', email: 'olivia@email.com', amount: '$316.00', status: 'Completed' },
  { id: '#3209', customer: 'Ava Johnson', email: 'ava@email.com', amount: '$242.00', status: 'Processing' },
  { id: '#3208', customer: 'Michael Chen', email: 'michael@email.com', amount: '$837.00', status: 'Completed' },
  { id: '#3207', customer: 'Lisa Anderson', email: 'lisa@email.com', amount: '$129.00', status: 'Pending' },
  { id: '#3206', customer: 'Robert Kim', email: 'robert@email.com', amount: '$564.00', status: 'Completed' },
];

const chartBars = [35, 55, 40, 70, 50, 80, 60, 90, 45, 75, 65, 85];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function Dashboard() {
  return (
    <div style={{ fontFamily: 'var(--t-font-body)' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: 'var(--t-font-heading)' }}>Dashboard</h1>
          <p className="text-sm mt-1" style={{ color: 'var(--t-muted-fg)' }}>Welcome back, here&apos;s what&apos;s happening.</p>
        </div>
        <button
          className="px-4 py-2 text-sm font-medium transition-colors hover:opacity-90"
          style={{
            backgroundColor: 'var(--t-primary)',
            color: 'var(--t-primary-fg)',
            borderRadius: 'var(--t-radius)',
          }}
        >
          Download Report
        </button>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map(stat => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="p-4"
              style={{
                backgroundColor: 'var(--t-card)',
                border: `var(--t-border-width) solid var(--t-border)`,
                borderRadius: 'var(--t-radius)',
                boxShadow: 'var(--t-shadow)',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium" style={{ color: 'var(--t-muted-fg)' }}>{stat.label}</span>
                <Icon size={16} style={{ color: 'var(--t-muted-fg)' }} />
              </div>
              <div className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--t-font-heading)' }}>{stat.value}</div>
              <div className="flex items-center gap-1">
                {stat.up ? <TrendingUp size={14} style={{ color: 'var(--t-success)' }} /> : <TrendingDown size={14} style={{ color: 'var(--t-destructive)' }} />}
                <span className="text-xs font-medium" style={{ color: stat.up ? 'var(--t-success)' : 'var(--t-destructive)' }}>
                  {stat.change}
                </span>
                <span className="text-xs" style={{ color: 'var(--t-muted-fg)' }}>vs last month</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Chart */}
        <div
          className="lg:col-span-2 p-4"
          style={{
            backgroundColor: 'var(--t-card)',
            border: `var(--t-border-width) solid var(--t-border)`,
            borderRadius: 'var(--t-radius)',
            boxShadow: 'var(--t-shadow)',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-semibold" style={{ fontFamily: 'var(--t-font-heading)' }}>Revenue Overview</h2>
              <p className="text-xs mt-0.5" style={{ color: 'var(--t-muted-fg)' }}>Monthly revenue for 2024</p>
            </div>
            <button className="p-1"><MoreHorizontal size={16} style={{ color: 'var(--t-muted-fg)' }} /></button>
          </div>
          <div className="flex items-end gap-2 h-48">
            {chartBars.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full transition-all hover:opacity-80"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i === chartBars.length - 2 ? 'var(--t-primary)' : 'var(--t-muted)',
                    borderRadius: 'calc(var(--t-radius) * 0.5) calc(var(--t-radius) * 0.5) 0 0',
                  }}
                />
                <span className="text-[9px]" style={{ color: 'var(--t-muted-fg)' }}>{months[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <div
          className="p-4"
          style={{
            backgroundColor: 'var(--t-card)',
            border: `var(--t-border-width) solid var(--t-border)`,
            borderRadius: 'var(--t-radius)',
            boxShadow: 'var(--t-shadow)',
          }}
        >
          <h2 className="text-base font-semibold mb-4" style={{ fontFamily: 'var(--t-font-heading)' }}>Recent Activity</h2>
          <div className="space-y-4">
            {[
              { text: 'New order received', detail: '#3210 - $316.00', time: '2m ago', color: 'var(--t-success)' },
              { text: 'Payment confirmed', detail: '#3209 - $242.00', time: '15m ago', color: 'var(--t-primary)' },
              { text: 'New customer signup', detail: 'olivia@email.com', time: '1h ago', color: 'var(--t-accent)' },
              { text: 'Order shipped', detail: '#3205 - $89.00', time: '2h ago', color: 'var(--t-primary)' },
              { text: 'Refund processed', detail: '#3198 - $45.00', time: '5h ago', color: 'var(--t-destructive)' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: item.color }} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{item.text}</p>
                  <p className="text-xs" style={{ color: 'var(--t-muted-fg)' }}>{item.detail}</p>
                </div>
                <span className="text-[10px] whitespace-nowrap" style={{ color: 'var(--t-muted-fg)' }}>{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Orders table */}
      <div
        className="mt-4 overflow-hidden"
        style={{
          backgroundColor: 'var(--t-card)',
          border: `var(--t-border-width) solid var(--t-border)`,
          borderRadius: 'var(--t-radius)',
          boxShadow: 'var(--t-shadow)',
        }}
      >
        <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: 'var(--t-border)' }}>
          <h2 className="text-base font-semibold" style={{ fontFamily: 'var(--t-font-heading)' }}>Recent Orders</h2>
          <button className="flex items-center gap-1 text-xs font-medium" style={{ color: 'var(--t-primary)' }}>
            View All <ArrowUpRight size={12} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: `1px solid var(--t-border)` }}>
                {['Order', 'Customer', 'Amount', 'Status'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold" style={{ color: 'var(--t-muted-fg)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(order => (
                <tr key={order.id} style={{ borderBottom: `1px solid var(--t-border)` }}>
                  <td className="px-4 py-3 font-medium">{order.id}</td>
                  <td className="px-4 py-3">
                    <div>{order.customer}</div>
                    <div className="text-xs" style={{ color: 'var(--t-muted-fg)' }}>{order.email}</div>
                  </td>
                  <td className="px-4 py-3 font-medium">{order.amount}</td>
                  <td className="px-4 py-3">
                    <span
                      className="px-2 py-0.5 text-xs font-medium"
                      style={{
                        backgroundColor: order.status === 'Completed' ? 'var(--t-success)' : order.status === 'Processing' ? 'var(--t-primary)' : 'var(--t-accent)',
                        color: '#fff',
                        borderRadius: 'var(--t-radius)',
                      }}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
