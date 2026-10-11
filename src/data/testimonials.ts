export interface TestimonialItem {
  id: string;
  client: string;
  title: string;
  vehicle: string;
  comment: string;
  location: string;
  rentalPeriod: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    client: "Henrik Lindqvist",
    title: "Founder, Nordic Capital Group",
    vehicle: "Rolls-Royce Cullinan",
    comment: "Flawless execution. Handover at DXB Terminal 3 VIP drop took exactly four minutes. Vehicle was in showroom condition with zero delay on deposit release after 21 days.",
    location: "Stockholm / Dubai Hills",
    rentalPeriod: "14 Days"
  },
  {
    id: "test-2",
    client: "Marcus Vance",
    title: "Private Investor",
    vehicle: "Porsche 911 GT3 (992)",
    comment: "The GT3 was mechanically immaculate with factory cup tires and proper alignment. Apex Drive is the only operator in the UAE I trust with authentic track-spec machines.",
    location: "London / Palm Jumeirah",
    rentalPeriod: "7 Days"
  },
  {
    id: "test-3",
    client: "Dr. Karim Al-Ghanim",
    title: "Consultant Surgeon",
    vehicle: "Mercedes-AMG G63",
    comment: "Transparent terms, direct WhatsApp support, and no hidden insurance add-ons at delivery. Delivered straight to our villa in Emirates Hills within 40 minutes of booking.",
    location: "Kuwait / Emirates Hills",
    rentalPeriod: "30 Days"
  }
];
