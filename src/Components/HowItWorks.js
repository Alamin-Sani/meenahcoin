
import { motion } from "framer-motion";
import Image from "next/image";

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16" id="how">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row md:flex-row-reverse items-center gap-8">
        {/* Left Column: Image */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
            <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg">
          <Image
            src="/img/proprobo.png" // Replace with your bot image path
            alt="Bot Illustration"
            width={400}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
          />

            </div>
        </motion.div>

        {/* Right Column: Steps */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white mb-8"
            variants={itemVariants}
          >
            How It Works
          </motion.h2>

          {/* Steps List */}
          <motion.ul className="space-y-6">
            {/* Step 1 */}
            <motion.li
              className="flex items-start gap-4"
              variants={itemVariants}
            >
              <span className="text-blue-500 text-2xl mt-1">1</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Buy Cryptocurrency
                </h3>
                <p className="text-gray-300">
                  Purchase our cryptocurrency using fiat or other digital assets.
                </p>
              </div>
            </motion.li>

            {/* Step 2 */}
            <motion.li
              className="flex items-start gap-4"
              variants={itemVariants}
            >
              <span className="text-green-500 text-2xl mt-1">2</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Store Tokens
                </h3>
                <p className="text-gray-300">
                  Securely store your tokens in our non-custodial wallet.
                </p>
              </div>
            </motion.li>

            {/* Step 3 */}
            <motion.li
              className="flex items-start gap-4"
              variants={itemVariants}
            >
              <span className="text-yellow-500 text-2xl mt-1">3</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Trade Tokens
                </h3>
                <p className="text-gray-300">
                  Trade your tokens on supported exchanges or decentralized platforms.
                </p>
              </div>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
