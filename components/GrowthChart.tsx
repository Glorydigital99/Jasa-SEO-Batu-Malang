
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', traffic: 4000 },
  { month: 'Feb', traffic: 3000 },
  { month: 'Mar', traffic: 5000 },
  { month: 'Apr', traffic: 4500 },
  { month: 'Mei', traffic: 8000 },
  { month: 'Jun', traffic: 9500 },
];

const GrowthChart: React.FC = () => {
  return (
    <div className="rounded-[2.5rem] bg-surface-dark/40 border border-white/5 p-8 relative overflow-hidden h-[500px] flex flex-col">
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div>
          <h3 className="text-2xl font-black text-white mb-2">Lintasan Pertumbuhan</h3>
          <p className="text-text-muted font-medium">Rata-rata kenaikan trafik di seluruh klien premium</p>
        </div>
        <div className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-black tracking-wide border border-primary/20">
          +45% MoM
        </div>
      </div>

      <div className="flex-1 w-full relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#13ec5b" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#13ec5b" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f3b2a" vertical={false} />
            <XAxis 
              dataKey="month" 
              stroke="#4a6b57" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
              dy={10}
            />
            <YAxis hide />
            <Tooltip 
              labelFormatter={(value) => `Bulan: ${value}`}
              contentStyle={{ 
                backgroundColor: '#193322', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '12px',
                color: '#fff'
              }}
              itemStyle={{ color: '#13ec5b' }}
            />
            <Area 
              type="monotone" 
              dataKey="traffic" 
              stroke="#13ec5b" 
              strokeWidth={4}
              fillOpacity={1} 
              fill="url(#colorTraffic)" 
              animationDuration={1200}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none"></div>
    </div>
  );
};

export default GrowthChart;
