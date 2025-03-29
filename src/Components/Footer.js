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
                        href="https://discord.gg/wEXdBbh2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-500"
                    >
                        <Image src='/icons/discord-color.svg' width={50} height={50} alt="discord logo" />
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-10 h-10 text-white"
                        >
                            <path
                                d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02C2.44 8.7 2 10.45 2 12.24c0 1.78.44 3.54 1.27 5.89 0 .01.01.02.03.03 1.33.62 2.78 1.07 4.27 1.33.03 0 .06-.01.07-.03.18-.33.39-.76.54-1.09.6-.18 1.2-.41 1.8-.68.03-.01.04-.02.05-.04.12-.08.27-.17.39-.25.01 0 .01-.01.02-.01s.01-.01.01-.01c1.72 1.26 3.69 2 5.8 2s4.08-.74 5.8-2c0 0 .01.01.01.01l.02.01c.12.09.27.17.39.25.01.02.03.03.05.04.6.27 1.2.5 1.8.68.15.33.36.76.54 1.09.02.02.05.03.08.03 1.49-.26 2.93-.71 4.26-1.33.02-.01.03-.02.03-.03.83-2.35 1.26-4.11 1.26-5.89 0-1.79-.43-3.54-1.26-5.89-.01-.01-.02-.02-.04-.02zM8.52 14.91c-.99 0-1.8-.9-1.8-2s.79-2 1.8-2 1.81.9 1.81 2-.81 2-1.81 2zm6.96 0c-.99 0-1.8-.9-1.8-2s.79-2 1.8-2 1.81.9 1.81 2-.81 2-1.81 2z"
                            />
                        </svg> */}
                    </a>
                    <a
                        href="https://x.com/meenah_oin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-500"
                    >
                        <Image src='/icons/x-color.svg' width={50} height={50} alt="x logo" />
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-10 h-10 text-white"
                        >
                            <path
                                d="M18.146 2H21l-7.375 8.455L22 22h-6.146l-4.86-6.902L5.58 22H2.146l7.865-9.02L2 2h6.365l4.51 6.43L18.146 2zm-1.39 2.114l-4.32 4.9 6.835 9.979h2.08l-7.52-11.02 4.925-5.6h-1.99zM5.135 3.95L11.635 13 6.13 20.05h1.965L13.245 13 6.75 3.95H5.135z"
                            />
                        </svg> */}
                    </a>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;