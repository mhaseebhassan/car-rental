import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedFleetIndex from "@/components/FeaturedFleetIndex";
import CategoryTiles from "@/components/CategoryTiles";
import WhyUsTable from "@/components/WhyUsTable";
import HowToRentTable from "@/components/HowToRentTable";
import DeliveryAreasList from "@/components/DeliveryAreasList";
import MonthlyBlock from "@/components/MonthlyBlock";
import FAQAccordion from "@/components/FAQAccordion";
import FinalCtaBand from "@/components/FinalCtaBand";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--bg-paper)]">
      <Header />
      <HeroSection />
      <FeaturedFleetIndex />
      <CategoryTiles />
      <WhyUsTable />
      <HowToRentTable />
      <DeliveryAreasList />
      <MonthlyBlock />
      <FAQAccordion />
      <FinalCtaBand />
      <Footer />
    </main>
  );
}
