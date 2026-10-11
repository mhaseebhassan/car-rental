import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FLEET_DATA, getVehicleBySlug, getAllVehicleSlugs } from "@/data/fleet";
import VehicleDetailClient from "./VehicleDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllVehicleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const car = getVehicleBySlug(slug);

  if (!car) {
    return {
      title: "Vehicle Not Found",
    };
  }

  return {
    title: `${car.name} Rental Dubai | AED ${car.pricePerDay.toLocaleString()}/Day`,
    description: `Rent the ${car.name} in Dubai. ${car.specs.horsepower} HP, 0-100 in ${car.specs.zeroToHundred}. Direct RTA licensed fleet with under 60-minute delivery.`,
    openGraph: {
      title: `${car.name} Rental Dubai | Apex Drive`,
      description: car.tagline,
      images: [
        {
          url: car.image,
          width: 1200,
          height: 800,
          alt: car.name,
        },
      ],
    },
  };
}

export default async function VehicleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const car = getVehicleBySlug(slug);

  if (!car) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col bg-[var(--bg-paper)]">
      <Header />
      <VehicleDetailClient car={car} />
      <Footer />
    </main>
  );
}
