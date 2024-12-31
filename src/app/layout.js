import "./globals.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "FBA Foundation",
  description:
    "The Fatima Bolanle Abioye Foundation (FBA Foundation) is a non-profit organization dedicated to transforming lives through educational empowerment and humanitarian aid in Nigeria. Named after Alhaja Fatima Bolanle Abioye, whose lifelong commitment to helping others despite limited resources has inspired this initiative, our foundation continues her legacy of compassion and generosity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <ToastContainer position="top-right" autoClose={3000} />
      <body>{children}</body>
    </html>
  );
}
