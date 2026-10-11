export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'documents' | 'deposits' | 'insurance';
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "docs-tourists",
    question: "What documents are required for international visitors renting in Dubai?",
    answer: "Tourists require a valid passport copy with UAE entry tourist visa stamp, a home country driving license, and an International Driving Permit (IDP). Visitors holding driving licenses from GCC countries, the UK, US, Canada, EU nations, Australia, and Switzerland do not require an IDP and can drive directly on their original license.",
    category: "documents"
  },
  {
    id: "docs-residents",
    question: "What documents are needed for UAE residents?",
    answer: "UAE residents must submit a copy of their valid Emirates ID and their original UAE driving license. Both documents can be submitted instantly via our encrypted WhatsApp concierge channel for pre-approval before vehicle delivery.",
    category: "documents"
  },
  {
    id: "security-deposit",
    question: "How does the security deposit work, and is zero-deposit available?",
    answer: "We offer zero-deposit rental via credit card pre-authorization hold for qualified clients. Alternatively, standard security deposits are held for 21 to 30 calendar days to verify pending RTA traffic fines and Salik toll records, after which the full unbilled amount is released automatically back to your card with official bank confirmation.",
    category: "deposits"
  },
  {
    id: "insurance-coverage",
    question: "What is covered under the included insurance policy?",
    answer: "All vehicles include full RTA comprehensive insurance covering third-party liability and accidental damage subject to standard deductible terms. Super Collision Damage Waiver (SCDW) with zero financial liability can be selected at checkout for complete peace of mind.",
    category: "insurance"
  },
  {
    id: "salik-tolls",
    question: "How are Salik road toll gates charged during the rental period?",
    answer: "Every vehicle is fitted with an official RTA Salik electronic tag. Each passage through an electronic Dubai Salik toll gate is billed at AED 5, which is tracked in real time and invoiced at vehicle return with transparent digital receipts.",
    category: "booking"
  },
  {
    id: "airport-delivery",
    question: "Can I receive the vehicle directly at DXB airport upon landing?",
    answer: "Yes. Our airport VIP service includes direct curbside delivery to Terminal 1, Terminal 2, Terminal 3, or the private Al Majlis Executive Terminal. Our representative tracks your flight number in real time and waits at arrivals with your vehicle inspected and air-conditioned.",
    category: "booking"
  },
  {
    id: "minimum-age",
    question: "What is the minimum age requirement to rent supercars and SUVs?",
    answer: "The minimum driving age for standard luxury SUVs and executive sedans is 21 years old with a minimum of 1 year of driving history. For high-horsepower supercars (Ferrari, Lamborghini, McLaren, GT3), the minimum required age is 25 years old.",
    category: "booking"
  },
  {
    id: "mileage-limits",
    question: "What is the daily mileage allowance and the fee for extra kilometers?",
    answer: "Our standard fleet includes 250 kilometers per calendar day (300 km for electric vehicles). Additional mileage is calculated based on vehicle tier (from AED 7 to AED 20 per extra km). Unlimited mileage packages can also be arranged for weekly and monthly rentals.",
    category: "booking"
  }
];
