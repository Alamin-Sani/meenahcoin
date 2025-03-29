// components/DescriptiveSection.js
import { motion } from "framer-motion";

const DescriptiveSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="h-screen flex items-center justify-center py-16 px-4 sm:px-8 lg:px-16" id="whyus">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-white mb-8"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          Why Choose MeenahCoin?
        </motion.h2>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Feature 1 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            variants={itemVariants}
          >
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-500 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Secure Transactions
            </h3>
            <p className="text-gray-300">
              Our cryptocurrency ensures top-notch security with advanced
              encryption protocols.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            variants={itemVariants}
          >
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-500 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Fast and Efficient
            </h3>
            <p className="text-gray-300">
              Experience lightning-fast transactions with minimal fees.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            variants={itemVariants}
          >
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-yellow-500 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Decentralized Network
            </h3>
            <p className="text-gray-300">
              Powered by a decentralized blockchain network for transparency and
              reliability.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DescriptiveSection;