import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import "../icons.css";

import "react-quill/dist/quill.snow.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import GoogleAnalytics from "../GoogleAnalytics";

import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import { Montserrat } from "next/font/google";
import { Providers } from "../providers";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata = {
  alternates: {
    canonical: `https://condomonk.ca/`,
  },
  title: "Appartments and Villas For Sale in Maldives",
  description:
    "Maldive's Most Reliable Home Selling, Leasing & Investing Platform",
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  category: "real estate",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

async function getCities() {
  const res = await fetch("https://wong.condomonk.ca/api/all-city", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getCitiesandProjects() {
  const res = await fetch("https://wong.condomonk.ca/api/all-precons", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function RootLayout({ children }) {
  let cities = await getCities();
  let dropdown_cities = await getCitiesandProjects();
  return (
    <>
      <Navbar cities={cities} dropdown_cities={dropdown_cities}></Navbar>
      {children}
      <Footer cities={cities}></Footer>
    </>
  );
}
