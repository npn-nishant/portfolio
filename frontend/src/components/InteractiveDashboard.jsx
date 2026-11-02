import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Users, 
  DollarSign, 
  Filter, 
  Sparkles,
  BarChart2,
  Calendar,
  Layers
} from 'lucide-react';

export default function InteractiveDashboard() {
  const [timeframe, setTimeframe] = useState('6M'); // '6M' or '30D'
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [hoveredSegment, setHoveredSegment] = useState(null);

  const metricsData = {
    '6M': {
      revenue: '$120,450',
      revenueChange: '+12.4%',
      revenuePositive: true,
      conversion: '4.82%',
      conversionChange: '+1.18%',
      conversionPositive: true,
      activeUsers: '12,540',
      usersChange: '+16.2%',
      usersPositive: true,
      costPerLead: '$18.20',
      cplChange: '-14.3%',
      cplPositive: true, // Lower cost is good!
      trendData: [
        { label: 'Apr', revenue: 68, users: '8.4K', conv: '4.1%' },
        { label: 'May', revenue: 76, users: '9.2K', conv: '4.3%' },
        { label: 'Jun', revenue: 72, users: '8.9K', conv: '4.2%' },
        { label: 'Jul', revenue: 94, users: '10.8K', conv: '4.6%' },
        { label: 'Aug', revenue: 108, users: '11.6K', conv: '4.7%' },
        { label: 'Sep', revenue: 120, users: '12.5K', conv: '4.8%' },
      ],
      channels: [
        { name: 'Direct Traffic', pct: 42, color: 'bg-cyan-400' },
        { name: 'Paid Search (SEM)', pct: 28, color: 'bg-indigo-500' },
        { name: 'Organic / Social', pct: 18, color: 'bg-purple-500' },
        { name: 'Email Campaigns', pct: 12, color: 'bg-emerald-400' },
      ],
      segments: [
        { name: 'New Customers', pct: 45, color: '#22d3ee', fill: 'text-cyan-400' },
        { name: 'Repeat / Retained', pct: 32, color: '#6366f1', fill: 'text-indigo-400' },
        { name: 'Enterprise Partner', pct: 15, color: '#a855f7', fill: 'text-purple-400' },
        { name: 'Referral / Other', pct: 8, color: '#34d399', fill: 'text-emerald-400' },
      ],
    },
    '30D': {
      revenue: '$34,800',
      revenueChange: '+8.6%',
      revenuePositive: true,
      conversion: '5.14%',
      conversionChange: '+0.92%',
      conversionPositive: true,
      activeUsers: '4,120',
      usersChange: '+11.4%',
      usersPositive: true,
      costPerLead: '$16.40',
      cplChange: '-18.1%',
      cplPositive: true,
      trendData: [
        { label: 'W1', revenue: 22, users: '3.2K', conv: '4.7%' },
        { label: 'W2', revenue: 27, users: '3.6K', conv: '4.9%' },
        { label: 'W3', revenue: 31, users: '3.9K', conv: '5.0%' },
        { label: 'W4', revenue: 35, users: '4.1K', conv: '5.1%' },
      ],
      channels: [
        { name: 'Direct Traffic', pct: 45, color: 'bg-cyan-400' },
        { name: 'Paid Search (SEM)', pct: 26, color: 'bg-indigo-500' },
        { name: 'Organic / Social', pct: 17, color: 'bg-purple-500' },
        { name: 'Email Campaigns', pct: 12, color: 'bg-emerald-400' },
      ],
      segments: [
        { name: 'New Customers', pct: 48, color: '#22d3ee', fill: 'text-cyan-400' },
        { name: 'Repeat / Retained', pct: 30, color: '#6366f1', fill: 'text-indigo-400' },
        { name: 'Enterprise Partner', pct: 14, color: '#a855f7', fill: 'text-purple-400' },
        { name: 'Referral / Other', pct: 8, color: '#34d399', fill: 'text-emerald-400' },
      ],
    },
  };

  const current = metricsData[timeframe];
  const maxRevenue = Math.max(...current.trendData.map((d) => d.revenue));

  // Compute SVG Points for the line chart
  const svgWidth = 460;
  const svgHeight = 110;
  const paddingX = 35;
  const paddingY = 15;
  const stepX = (svgWidth - paddingX * 2) / (current.trendData.length - 1);

  const points = current.trendData.map((d, i) => {
    const x = paddingX + i * stepX;
    const y = svgHeight - paddingY - ((d.revenue - 10) / (maxRevenue + 10)) * (svgHeight - paddingY * 2);
    return { x, y, ...d };
  });

  const pathD = points.reduce((acc, p, i) => {
    return i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x} ${svgHeight} L ${points[0].x} ${svgHeight} Z`;

  return (
    <div className="relative group rounded-2xl bg-gradient-to-b from-[#111827]/90 via-[#0d131f]/95 to-[#0b0f19] border border-cyan-500/20 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
      {/* Glow highlight effect */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-all"></div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <BarChart2 className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-white tracking-wide">
                Marketing Performance Dashboard
              </h3>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                Live BI
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              DAX Calculated KPIs • Interactive Simulation
            </p>
          </div>
        </div>

        {/* Timeframe Toggle Buttons */}
        <div className="inline-flex p-0.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-medium">
          <button
            onClick={() => setTimeframe('6M')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              timeframe === '6M'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Last 6 Months
          </button>
          <button
            onClick={() => setTimeframe('30D')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              timeframe === '30D'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Last 30 Days
          </button>
        </div>
      </div>

      {/* Metric Cards 4-Column Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4">
        {/* Metric 1: Total Revenue */}
        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all">
          <span className="text-[11px] font-medium text-slate-400 block mb-1">
            Total Revenue
          </span>
          <div className="text-base sm:text-lg font-bold font-mono text-white">
            {current.revenue}
          </div>
          <div className="flex items-center gap-1 mt-1 text-[11px] text-emerald-400 font-medium">
            <TrendingUp className="w-3 h-3" />
            <span>{current.revenueChange}</span>
          </div>
        </div>

        {/* Metric 2: Conversion Rate */}
        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all">
          <span className="text-[11px] font-medium text-slate-400 block mb-1">
            Conversion Rate
          </span>
          <div className="text-base sm:text-lg font-bold font-mono text-white">
            {current.conversion}
          </div>
          <div className="flex items-center gap-1 mt-1 text-[11px] text-emerald-400 font-medium">
            <TrendingUp className="w-3 h-3" />
            <span>{current.conversionChange}</span>
          </div>
        </div>

        {/* Metric 3: Active Users */}
        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all">
          <span className="text-[11px] font-medium text-slate-400 block mb-1">
            Active Users
          </span>
          <div className="text-base sm:text-lg font-bold font-mono text-white">
            {current.activeUsers}
          </div>
          <div className="flex items-center gap-1 mt-1 text-[11px] text-emerald-400 font-medium">
            <TrendingUp className="w-3 h-3" />
            <span>{current.usersChange}</span>
          </div>
        </div>

        {/* Metric 4: Cost Per Lead */}
        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all">
          <span className="text-[11px] font-medium text-slate-400 block mb-1">
            Cost Per Lead
          </span>
          <div className="text-base sm:text-lg font-bold font-mono text-white">
            {current.costPerLead}
          </div>
          <div className="flex items-center gap-1 mt-1 text-[11px] text-emerald-400 font-medium">
            <TrendingDown className="w-3 h-3" />
            <span>{current.cplChange}</span>
          </div>
        </div>
      </div>

      {/* Revenue Trend SVG Area Chart */}
      <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 my-3 relative">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-200">
              Revenue Velocity ($k)
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              Hover points for values
            </span>
          </div>
          {hoveredPoint && (
            <div className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800 animate-fadeIn">
              {hoveredPoint.label}: ${hoveredPoint.revenue}k • {hoveredPoint.users} users
            </div>
          )}
        </div>

        <div className="w-full overflow-hidden">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full h-24 sm:h-28 overflow-visible"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Horizontal guideline */}
            <line
              x1={paddingX}
              y1={svgHeight / 2}
              x2={svgWidth - paddingX}
              y2={svgHeight / 2}
              stroke="#1e293b"
              strokeDasharray="3 3"
            />

            {/* Shaded Area */}
            <path d={areaD} fill="url(#lineGrad)" />

            {/* Trend Line */}
            <path
              d={pathD}
              fill="none"
              stroke="#06b6d4"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Data points */}
            {points.map((p, idx) => (
              <g key={p.label}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={hoveredPoint?.label === p.label ? 6 : 4}
                  className="fill-[#0b0f19] stroke-cyan-400 stroke-2 cursor-pointer transition-all hover:r-6 hover:fill-cyan-400"
                  onMouseEnter={() => setHoveredPoint(p)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
                <text
                  x={p.x}
                  y={svgHeight - 2}
                  textAnchor="middle"
                  className="text-[10px] fill-slate-400 font-mono"
                >
                  {p.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Bottom Breakdown Split: Channel Performance & Segment Donut */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
        {/* Channel Performance Horizontal Progress */}
        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
          <span className="text-xs font-semibold text-slate-300 block mb-2">
            Channel Acquisition
          </span>
          <div className="space-y-2">
            {current.channels.map((ch) => (
              <div key={ch.name}>
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="text-slate-400 truncate max-w-[130px]">
                    {ch.name}
                  </span>
                  <span className="font-mono font-medium text-slate-200">
                    {ch.pct}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${ch.color} rounded-full transition-all duration-700 ease-out`}
                    style={{ width: `${ch.pct}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue by Segment */}
        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-slate-300">
              Revenue by Segment
            </span>
            <span className="text-[10px] text-cyan-400 font-mono">
              {hoveredSegment ? hoveredSegment.pct + '%' : '100%'}
            </span>
          </div>

          {/* Interactive Segment Bar */}
          <div className="w-full h-3 bg-slate-800 rounded-lg overflow-hidden flex my-2 border border-slate-700/60">
            {current.segments.map((seg) => (
              <div
                key={seg.name}
                style={{
                  width: `${seg.pct}%`,
                  backgroundColor: seg.color,
                }}
                onMouseEnter={() => setHoveredSegment(seg)}
                onMouseLeave={() => setHoveredSegment(null)}
                className="h-full cursor-pointer hover:brightness-125 transition-all"
                title={`${seg.name}: ${seg.pct}%`}
              />
            ))}
          </div>

          {/* Legend Grid */}
          <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10px]">
            {current.segments.map((seg) => (
              <div
                key={seg.name}
                className={`flex items-center gap-1.5 cursor-pointer p-0.5 rounded transition-all ${
                  hoveredSegment?.name === seg.name ? 'bg-slate-800' : ''
                }`}
                onMouseEnter={() => setHoveredSegment(seg)}
                onMouseLeave={() => setHoveredSegment(null)}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: seg.color }}
                ></span>
                <span className="text-slate-400 truncate">{seg.name}</span>
                <span className="font-mono text-slate-200 ml-auto">{seg.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Simulation Status */}
      <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500 font-mono">
        <span className="flex items-center gap-1.5 text-cyan-400/90">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
          Live Analytical Pipeline • Real-time Sync
        </span>
        <span>DAX Star-Schema Optimized</span>
      </div>
    </div>
  );
}
