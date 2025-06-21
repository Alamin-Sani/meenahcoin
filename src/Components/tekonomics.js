const Tokenomics = () => {
  const tokenomicsData = [
    { label: 'Liquidity', percentage: 65, amount: '129,918,750', color: 'from-purple-500 to-pink-600' },
    { label: 'CEX Listing', percentage: 10, amount: '79,950,000', color: 'from-green-500 to-emerald-600' },
    { label: 'Team', percentage: 10, amount: '79,950,000', color: 'from-yellow-500 to-orange-600' },
    { label: 'Marketing', percentage: 7, amount: '55,965,000', color: 'from-red-500 to-pink-600' },
    { label: 'Airdrop', percentage: 5, amount: '39,975,000', color: 'from-indigo-500 to-purple-600' },
    { label: 'Development', percentage: 3, amount: '23,985,000', color: 'from-teal-500 to-cyan-600' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tokenomics
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Transparent and fair distribution model designed for long-term sustainability and community growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Total Supply</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                799,500,000 MEENAH
              </p>
            </div>
            {tokenomicsData.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-white font-semibold">{item.label}</h4>
                  <span className="text-gray-300">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                  <div 
                    className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <p className="text-gray-400 text-sm">{item.amount} tokens</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8">Distribution Overview</h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="relative w-64 h-64 mx-auto mb-8">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    {tokenomicsData.map((item, index) => {
                      const offset = tokenomicsData.slice(0, index).reduce((acc, curr) => acc + curr.percentage, 0);
                      return (
                        <path
                          key={index}
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke={`url(#gradient-${index})`}
                          strokeWidth="3"
                          strokeDasharray={`${item.percentage}, 100`}
                          strokeDashoffset={-offset}
                          className="transition-all duration-1000 ease-out"
                        />
                      );
                    })}
                    <defs>
                      {tokenomicsData.map((item, index) => (
                        <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={item.color.includes('cyan') ? '#06b6d4' : item.color.includes('purple') ? '#8b5cf6' : item.color.includes('green') ? '#10b981' : item.color.includes('yellow') ? '#f59e0b' : item.color.includes('red') ? '#ef4444' : item.color.includes('indigo') ? '#6366f1' : '#14b8a6'} />
                          <stop offset="100%" stopColor={item.color.includes('blue') ? '#2563eb' : item.color.includes('pink') ? '#ec4899' : item.color.includes('emerald') ? '#059669' : item.color.includes('orange') ? '#ea580c' : item.color.includes('purple') ? '#8b5cf6' : item.color.includes('cyan') ? '#0891b2' : '#0d9488'} />
                        </linearGradient>
                      ))}
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-semibold mb-4">Key Features:</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">40% Fair Launch ensures community ownership</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">25% Liquidity pool for stable trading</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Team tokens locked for 24 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
