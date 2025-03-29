import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Roadmap = () => {
  const [activeQuarter, setActiveQuarter] = useState('Q1');

  const quarters = {
    Q1: {
      title: "Foundation & Launch",
      items: [
        "Assemble the team",
        "Launch Social Media (Twitter, Telegram, etc.)",
        "Launch Website",
        "Private sale to gather marketing funds",
        "Apply for listing on CoinVote, CoinSniper, CoinHunt",
        "Begin aggressive Marketing Campaign",
        "Launch Shilling contests and art contest",
        "Audit by InterFi released before the presale"
      ],
      color: "bg-purple-500",
      icon: "🚀"
    },
    Q2: {
      title: "Expansion & Growth",
      items: [
        "Start working on the first mini game",
        "Presale on PinkSale",
        "Launch Token, Lock Liquidity",
        "Launch first game right after the token",
        "CMS Trending",
        "CoinMarketCap and Coingecko Listing",
        "Trending on CoinHunt",
        "Trending on Dextools"
      ],
      color: "bg-blue-500",
      icon: "📈"
    },
    Q3: {
      title: "Mainstream Adoption",
      items: [
        "Trending on CoinMarketCap",
        "Deals with mainstream influencers (Instagram, Youtube, Twitch)",
        "Release of 2 other mini games",
        "Trending Worldwide on Twitter",
        "Deals with gaming influencers",
        "Meenahcoin goes mainstream",
        "Meenahcoin Merch Shop",
        "More To Be Announced"
      ],
      color: "bg-green-500",
      icon: "🌎"
    },
    Q4: {
      title: "Innovation & Leadership",
      items: [
        "Interconnected Blockchain",
        "Swaps",
        "Launchpad, Farming, Staking",
        "Nextgen NFTs",
        "Crypto Outreach Program",
        "Top 50 crypto by Marketcap"
      ],
      color: "bg-yellow-500",
      icon: "💎"
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const quarterCardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-25 px-4 sm:px-6 lg:px-20 overflow-hidden" id='roadmap'>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center text-4xl sm:text-5xl font-bold text-white mb-8">
            MeenahCoin Roadmap
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Our strategic plan to revolutionize the crypto gaming space and achieve mainstream adoption.
          </p>
        </motion.div>

        {/* Quarter Selector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex rounded-md shadow-sm">
            {Object.keys(quarters).map((quarter) => (
              <motion.button
                key={quarter}
                onClick={() => setActiveQuarter(quarter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 transition-all duration-300 ${
                  activeQuarter === quarter
                    ? `${quarters[quarter].color} text-white`
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                } ${quarter === 'Q1' ? 'rounded-l-lg' : ''} ${
                  quarter === 'Q4' ? 'rounded-r-lg' : ''
                }`}
              >
                {quarter} {quarters[quarter].icon}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress line */}
          <motion.div 
            className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 transform -translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Quarter Content */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeQuarter}
                variants={quarterCardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              >
                <div className={`p-6 ${quarters[activeQuarter].color}`}>
                  <motion.h3 
                    className="text-2xl font-bold text-white"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {quarters[activeQuarter].title}
                  </motion.h3>
                </div>
                <div className="p-6">
                  <motion.ul 
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {quarters[activeQuarter].items.map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        variants={itemVariants}
                      >
                        <div className={`flex-shrink-0 h-6 w-6 rounded-full ${quarters[activeQuarter].color} flex items-center justify-center mr-3 mt-1`}>
                          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-lg text-gray-300">{item}</p>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Quarter Navigation */}
          <motion.div 
            className="mt-8 flex justify-between md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {Object.keys(quarters).map((quarter, index) => (
              <motion.button
                key={quarter}
                onClick={() => setActiveQuarter(quarter)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`h-3 w-3 rounded-full ${
                  activeQuarter === quarter ? quarters[quarter].color : 'bg-gray-600'
                }`}
                aria-label={`Go to ${quarter}`}
              />
            ))}
          </motion.div>
        </div>

        {/* Additional Visual Elements */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {Object.keys(quarters).map((quarter) => (
            <motion.div 
              key={quarter} 
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${activeQuarter === quarter ? 'ring-2 ring-white' : ''}`}
              onClick={() => setActiveQuarter(quarter)}
              style={{ background: activeQuarter === quarter ? 'rgba(31, 41, 55, 0.8)' : 'rgba(17, 24, 39, 0.8)' }}
            >
              <div className={`h-2 ${quarters[quarter].color} rounded-full mb-4`}></div>
              <h3 className="text-xl font-bold text-white mb-2">{quarter} {quarters[quarter].icon}</h3>
              <p className="text-gray-400">{quarters[quarter].items.length} milestones</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;