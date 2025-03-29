// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localfont from 'next/font/local';

const nunito = localfont({
  src: '../../public/fonts/Nunito.woff'
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Meena Coin",
  description: "The best blockchain for DeFi projects",
  image: "/img/meenaicon.png",
  url: "https://meenacoin.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={nunito.className}
        style={{backgroundColor: '#05182c'}}
      >
        {children}
      </body>
    </html>
  );
}
