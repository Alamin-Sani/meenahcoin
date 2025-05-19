import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
// import { xIcon, discordIcon } from '@heroicons/react/24/solid'

const Footer = () => {
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

    return (
        <footer className="bg-black text-white py-20 px-4 sm:px-8 lg:px-16">
            <motion.div
                className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Left Column: Logo and Description */}
                <motion.div
                    className="lg:w-1/3 text-center lg:text-left"
                    variants={itemVariants}
                >
                    <h2 className="text-2xl font-bold mb-4">MeenahCoin</h2>
                    <p className="text-gray-300">
                        We are dedicated to providing the
                        best services to our customers.
                    </p>
                </motion.div>

                {/* Middle Column: Navigation Links */}
                <motion.div
                    className="lg:w-1/3 text-center lg:text-left"
                    variants={itemVariants}
                >
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#whyus" className="text-gray-300 hover:text-blue-500">
                                Why MeenaCoin
                            </Link>
                        </li>
                        <li>
                            <Link href="#how" className="text-gray-300 hover:text-blue-500">
                                How It Works
                            </Link>
                        </li>
                        <li>
                            <Link href="#how" className="text-gray-300 hover:text-blue-500">
                                Roadmap
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/contact" className="text-gray-300 hover:text-blue-500">
                                Contact
                            </Link>
                        </li> */}
                    </ul>
                </motion.div>

                {/* Right Column: Newsletter Signup */}
                <motion.div
                    className="lg:w-1/3 text-center lg:text-left"
                    variants={itemVariants}
                >
                    <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                    <p className="text-gray-300 mb-4">
                        Stay updated with the latest news and updates.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 border-2 border-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </motion.div>

            {/* Bottom Section: Copyright and Social Media */}
            <motion.div
                className="mt-12 text-center text-gray-400"
                variants={itemVariants}
            >
                <div className="mb-4">
                    <p>&copy; {new Date().getFullYear()} MeenaCoin. All rights reserved.</p>
                    <p>Designed & Developed By <a href="https://wa.me/08092782431"  className="text-1xl text-green-500">AB Software</a></p>
                </div>
                <div className="flex justify-center gap-4">
                    <a
                        href="https://t.me/meenahg91"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-500"
                    >
                        <Image src='/icons/telegram.svg' width={50} height={50} alt="discord logo" />
                    </a>
                    <a
                        href="https://x.com/OinMeenah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-500"
                    >
                        <Image src='/icons/x-color.svg' width={50} height={50} alt="x logo" />
                    </a>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
