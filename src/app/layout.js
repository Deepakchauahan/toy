import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import "./globals.css";
import styles from './globals.scss'



export const metadata = {
  title: "A shoping platform",
  description: "Generated by AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
         <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
