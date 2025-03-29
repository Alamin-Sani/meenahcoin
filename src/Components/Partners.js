// components/Partnership.js
import { motion } from "framer-motion";

const Partnership = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Partner logos (replace with actual image paths)
  const partners = [
    // "/img/bitmart.svg",
    // "/img/cipholio.svg",
    // "/img/cointelegraph.svg",
    // "/img/fenbushi_capital.svg",
    // "/img/gsr.svg",
    "/img/4ward.svg",
    "https://crypto-economy.com//wp-content/uploads/2021/06/bybit-review.jpg",
    "https://www.liblogo.com/img-logo/ku2767k895-kucoin-token-logo-kucoin-.png",
    "https://dailycoin.com/wp-content/uploads/2024/05/Polygon_blockchain_logo-530x187.png",
    "https://logowik.com/content/uploads/images/coinmarketcap6503.jpg",
    "https://landing.coingecko.com/wp-content/uploads/2020/03/CoinGecko.png"
  ];

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-white mb-8"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          Trusted by Leading Crypto Exchanges
        </motion.h2>

        {/* Partners Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {partners.map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              variants={itemVariants}
            >
              <ImageWrapper src={logo} alt={`Partner ${index + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Helper Component for Image Rendering
const ImageWrapper = ({ src, alt }) => {
  return (
    <div className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
};

export default Partnership;