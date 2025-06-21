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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
