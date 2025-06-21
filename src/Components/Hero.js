// components/HeroSection.js
import { motion } from "framer-motion";
import Image from "next/image";
// import robot from '/img/robotright.png'

const Hero = () => {
  // Variants for animations
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className="h-screen flex items-center justify-center bg-[url('/img/meenah.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/12 z-10"></div>
      {/* Container for centered content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-8 z-20">
        {/* Left Column: Hero Image */}
        //<motion.div
         // className="w-full lg:w-1/2 relative h-64 sm:h-96 lg:h-auto"
         // variants={imageVariants}
        //  initial="hidden"
         // animate="visible"
       // >
          //<div className="relative w-full flex items-center justify-center h-full">
            //<Image
              //src="/img/meenlg.png" // Replace with your image path
             // width={300}
            //  height={300}
             // alt="Hero Image"
             // className=""
            // layout="fill"
            // objectFit="cover"
            // className="rounded-lg shadow-lg"
            />
          //</div>
        //</motion.div>

        {/* Right Column: Text Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-2xl sm:text-5xl font-bold text-white mb-4">
            Meenah, The Zero Cost Gas Fee Blockchain
          </h1>
          <hr className="my-8 h-px border-0 bg-[#CCFFFF] dark:bg-gray-800" />
          <p className="text-white text-lg mb-8">
            Keeping with the best DeFi project to create a challenging atmosphere in such fast-phased blockchain environment.
          </p>
          <p className="text-white text-lg mb-8">
            Meenah Coin is the only blockchain which has manage to build a zero cost blockain & gas fee as low as $0.0001 per transaction.
          </p>
          <button className="border-2 border-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
