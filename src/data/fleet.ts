export type CarCategory = 'Supercar' | 'Luxury SUV' | 'Grand Tourer' | 'Executive' | 'Convertible';

export interface Vehicle {
  slug: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  category: CarCategory;
  tagline: string;
  description: string;
  pricePerDay: number;
  pricePerWeek: number;
  pricePerMonth: number;
  securityDeposit: number;
  zeroDepositAvailable: boolean;
  mileageLimitPerDay: number;
  extraKmFee: number;
  minimumAge: number;
  image: string;
  gallery: string[];
  specs: {
    engine: string;
    horsepower: number;
    zeroToHundred: string;
    topSpeed: string;
    transmission: string;
    drivetrain: string;
    seats: number;
    doors: number;
    luggage: number;
    fuelType: string;
  };
  features: string[];
  included: string[];
}

export const FLEET_DATA: Vehicle[] = [
  {
    slug: "ferrari-f8-tributo",
    name: "Ferrari F8 Tributo",
    brand: "Ferrari",
    model: "F8 Tributo",
    year: 2024,
    category: "Supercar",
    tagline: "Twin-turbo V8 mid-engine benchmark in Maranello Rosso Corsa.",
    description: "The Ferrari F8 Tributo represents the pinnacle of mid-rear-engine Italian berlinetta engineering. Featuring the award-winning 3.9-liter twin-turbocharged V8 producing 710 horsepower, this machine reaches 100 km/h in 2.9 seconds with razor-sharp steering and authentic race-derived aerodynamics.",
    pricePerDay: 3800,
    pricePerWeek: 22800,
    pricePerMonth: 75000,
    securityDeposit: 5000,
    zeroDepositAvailable: true,
    mileageLimitPerDay: 250,
    extraKmFee: 15,
    minimumAge: 25,
    image: "/images/fleet/ferrari-f8-tributo.webp",
    gallery: [
      "/images/fleet/ferrari-f8-tributo.webp",
      "/images/hero/car-hero.webp",
      "/images/fleet/lamborghini-huracan-evo.webp"
    ],
    specs: {
      engine: "3.9L Twin-Turbo V8",
      horsepower: 710,
      zeroToHundred: "2.9s",
      topSpeed: "340 km/h",
      transmission: "7-Speed Dual-Clutch F1",
      drivetrain: "RWD",
      seats: 2,
      doors: 2,
      luggage: 1,
      fuelType: "Super 98"
    },
    features: [
      "Carbon Fiber Driver Zone with LED Steering",
      "Side Slip Angle Control 6.1 (SSC)",
      "Titanium Exhaust System",
      "Front Axle Lift System",
      "Apple CarPlay and Premium JBL Audio"
    ],
    included: [
      "Comprehensive RTA Insurance Coverage",
      "Free Dubai Airport Meet and Greet",
      "250 km Daily Allowance",
      "24/7 Roadside Mechanical Support",
      "Complimentary Salik Toll Tag"
    ]
  },
  {
    slug: "lamborghini-huracan-evo",
    name: "Lamborghini Huracán Evo Spyder",
    brand: "Lamborghini",
    model: "Huracán Evo Spyder",
    year: 2024,
    category: "Convertible",
    tagline: "Naturally aspirated 5.2L V10 open-top performance with all-wheel steering.",
    description: "Built in Sant'Agata Bolognese, the Huracan Evo Spyder pairs iconic Lamborghini angular design with a naturally aspirated V10 exhaust note. The electrohydraulic lightweight soft top opens in 17 seconds at speeds up to 50 km/h, delivering unmatched presence along Jumeirah Beach Road and Sheikh Zayed Road.",
    pricePerDay: 3500,
    pricePerWeek: 21000,
    pricePerMonth: 70000,
    securityDeposit: 5000,
    zeroDepositAvailable: true,
    mileageLimitPerDay: 250,
    extraKmFee: 15,
    minimumAge: 25,
    image: "/images/fleet/lamborghini-huracan-evo.webp",
    gallery: [
      "/images/fleet/lamborghini-huracan-evo.webp",
      "/images/fleet/ferrari-f8-tributo.webp",
      "/images/fleet/porsche-911-gt3.webp"
    ],
    specs: {
      engine: "5.2L Naturally Aspirated V10",
      horsepower: 631,
      zeroToHundred: "3.1s",
      topSpeed: "325 km/h",
      transmission: "7-Speed Dual-Clutch LDF",
      drivetrain: "AWD",
      seats: 2,
      doors: 2,
      luggage: 1,
      fuelType: "Super 98"
    },
    features: [
      "Lamborghini Dinamica Veicolo Integrata (LDVI)",
      "Electrohydraulic Soft Top (17s)",
      "Sport Exhaust with Active Bypass",
      "Carbon Ceramic Braking System",
      "8.4-inch Capacitive Multi-touch Screen"
    ],
    included: [
      "Full RTA Commercial Insurance",
      "Direct Terminal 3 VIP Delivery",
      "250 km Daily Driving Limit",
      "Full Tank Delivery Guarantee",
      "24/7 Dedicated Concierge Support"
    ]
  },
  {
    slug: "porsche-911-gt3",
    name: "Porsche 911 GT3 (992)",
    brand: "Porsche",
    model: "911 GT3",
    year: 2024,
    category: "Supercar",
    tagline: "Double-wishbone motorsport suspension and 9,000 RPM atmospheric flat-six.",
    description: "Developed directly by Porsche Motorsport in Weissach, the 992-generation GT3 transfers track engineering to Dubai asphalt. The swan-neck rear wing generates significant downforce while the high-revving 4.0-liter boxer engine delivers direct mechanical feedback through every curve.",
    pricePerDay: 2900,
    pricePerWeek: 17400,
    pricePerMonth: 58000,
    securityDeposit: 4000,
    zeroDepositAvailable: true,
    mileageLimitPerDay: 250,
    extraKmFee: 12,
    minimumAge: 25,
    image: "/images/fleet/porsche-911-gt3.webp",
    gallery: [
      "/images/fleet/porsche-911-gt3.webp",
      "/images/fleet/bmw-m4-competition.webp",
      "/images/fleet/audi-rs6-avant.webp"
    ],
    specs: {
      engine: "4.0L High-Revving Boxer-6",
      horsepower: 502,
      zeroToHundred: "3.4s",
      topSpeed: "318 km/h",
      transmission: "7-Speed Porsche Doppelkupplung (PDK)",
      drivetrain: "RWD",
      seats: 2,
      doors: 2,
      luggage: 2,
      fuelType: "Super 98"
    },
    features: [
      "Weissach Double-Wishbone Front Axle",
      "PCCB Porsche Ceramic Composite Brakes",
      "Hydraulic Front Axle Lift",
      "Clubsport Carbon Bucket Seats",
      "Sport Chrono Package with Track Precision"
    ],
    included: [
      "Comprehensive RTA Insurance",
      "Delivery to any Dubai Hotel or Marina",
      "250 km Daily Allowance",
      "24/7 Mechanical Roadside Assistance",
      "Replacement Vehicle Guarantee"
    ]
  },
  {
    slug: "rolls-royce-cullinan",
    name: "Rolls-Royce Cullinan",
    brand: "Rolls-Royce",
    model: "Cullinan",
    year: 2024,
    category: "Luxury SUV",
    tagline: "Effortless twin-turbo V12 magic carpet ride with bespoke coach doors.",
    description: "The Rolls-Royce Cullinan redefines luxury travel across the Emirates. Effortlessly quiet, engineered on an all-aluminum Spaceframe architecture, and equipped with self-leveling air suspension, the Cullinan glides through Downtown Dubai and desert motorways with supreme authority.",
    pricePerDay: 4500,
    pricePerWeek: 27000,
    pricePerMonth: 90000,
    securityDeposit: 6000,
    zeroDepositAvailable: true,
    mileageLimitPerDay: 250,
    extraKmFee: 20,
    minimumAge: 25,
    image: "/images/fleet/rolls-royce-cullinan.webp",
    gallery: [
      "/images/fleet/rolls-royce-cullinan.webp",
      "/images/fleet/mercedes-s580-maybach.webp",
      "/images/fleet/mercedes-g63-amg.webp"
    ],
    specs: {
      engine: "6.75L Twin-Turbocharged V12",
      horsepower: 563,
      zeroToHundred: "5.2s",
      topSpeed: "250 km/h",
      transmission: "8-Speed Satellite Aided Auto",
      drivetrain: "AWD",
      seats: 5,
      doors: 5,
      luggage: 4,
      fuelType: "Super 98"
    },
    features: [
      "Shooting Star Fiber-Optic Headliner",
      "Rear Theatre Configuration with Dual Displays",
      "Automatic Soft-Close Coach Doors",
      "Champagne Cooler and Crystal Flutes",
      "Bespoke 18-Speaker Audio Architecture"
    ],
    included: [
      "Full VIP Insurance with Zero Deductible Option",
      "Airport VIP Terminal Meet and Greet",
      "Chauffeur Option Available on Request",
      "250 km Daily Allowance",
      "White-Glove Sanitization Protocol"
    ]
  },
  {
    slug: "mercedes-g63-amg",
    name: "Mercedes-AMG G63 V8 Biturbo",
    brand: "Mercedes-Benz",
    model: "G63 AMG",
    year: 2024,
    category: "Luxury SUV",
    tagline: "Handcrafted 577 HP V8 Biturbo with side-exit sport exhaust.",
    description: "The undisputed automotive icon of Dubai streets. Finished in Obsidian Black with high-sheen 22-inch forged cross-spoke wheels, this G63 offers immediate command of every road. Features three 100% mechanical differential locks paired with AMG Ride Control adaptive damping.",
    pricePerDay: 2200,
    pricePerWeek: 13200,
    pricePerMonth: 44000,
    securityDeposit: 3000,
    zeroDepositAvailable: true,
    mileageLimitPerDay: 250,
    extraKmFee: 10,
    minimumAge: 23,
    image: "/images/fleet/mercedes-g63-amg.webp",
    gallery: [
      "/images/fleet/mercedes-g63-amg.webp",
      "/images/fleet/range-rover-autobiography.webp",
      "/images/fleet/rolls-royce-cullinan.webp"
    ],
    specs: {
      engine: "4.0L Handcrafted AMG Biturbo V8",
      horsepower: 577,
      zeroToHundred: "4.5s",
      topSpeed: "240 km/h",
      transmission: "AMG SPEEDSHIFT TCT 9G",
      drivetrain: "AWD (3 Differential Locks)",
      seats: 5,
      doors: 5,
      luggage: 4,
      fuelType: "Super 98"
    },
    features: [
      "AMG Performance Dual Side-Pipe Exhaust",
      "Nappa Leather Interior with Diamond Stitching",
      "Burmester 15-Speaker Surround Sound",
      "Active Multicontour Massage Seats",
      "360-Degree Surround Camera Array"
    ],
    included: [
      "Full RTA Commercial Insurance",
      "Complimentary Hotel Delivery within 45 Mins",
      "250 km Daily Driving Limit",
      "24/7 Roadside Assistance",
      "Zero Credit Card Surcharge"
    ]
  },
  {
    slug: "bentley-continental-gt",
    name: "Bentley Continental GT V8",
    brand: "Bentley",
    model: "Continental GT",
    year: 2024,
    category: "Grand Tourer",
    tagline: "British luxury craftsmanship combined with effortless long-distance touring.",
    description: "Designed and hand-built in Crewe, England, the Continental GT V8 defines refined grand touring. Combining an assertive front grille and cut-crystal effect LED matrix headlamps with a handcrafted hide interior, this car moves across UAE highways with supreme composure.",
    pricePerDay: 2800,
    pricePerWeek: 16800,
    pricePerMonth: 56000,
    securityDeposit: 4000,
    zeroDepositAvailable: true,
    mileageLimitPerDay: 250,
    extraKmFee: 12,
    minimumAge: 25,
    image: "/images/fleet/bentley-continental-gt.webp",
    gallery: [
      "/images/fleet/bentley-continental-gt.webp",
      "/images/fleet/mercedes-s580-maybach.webp",
      "/images/fleet/porsche-911-gt3.webp"
    ],
    specs: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: 542,
      zeroToHundred: "4.0s",
      topSpeed: "318 km/h",
      transmission: "8-Speed Dual-Clutch",
      drivetrain: "Active All-Wheel Drive",
      seats: 4,
      doors: 2,
      luggage: 2,
      fuelType: "Super 98"
    },
    features: [
      "Bentley Three-Sided Rotating Display",
      "Handcrafted Beluga and Linen Dual Hide",
      "Naim for Bentley 2,200W Premium Audio",
      "Bentley Dynamic Ride 48V Active Anti-Roll",
      "Head-Up Display and Night Vision Assist"
    ],
    included: [
      "Comprehensive RTA Insurance Coverage",
      "Direct Terminal Delivery at DXB and DWC",
      "250 km Daily Mileage Included",
      "24/7 Mechanical Concierge Support",
      "Clean Interior Guarantee"
    ]
  },
  {
    slug: "range-rover-autobiography",
    name: "Range Rover Autobiography LWB",
    brand: "Land Rover",
    model: "Range Rover Autobiography",
    year: 2024,
    category: "Luxury SUV",
    tagline: "Long wheelbase peerless executive comfort with twin-turbocharged V8 power.",
    description: "The New Range Rover Autobiography represents British design purity and whisper-quiet serenity. Featuring rear Executive Class seating, acoustic laminated glazing, and active noise cancellation in the headrests, it provides an executive haven from downtown meetings to weekend retreats.",
    pricePerDay: 2000,
    pricePerWeek: 12000,
    pricePerMonth: 40000,
    securityDeposit: 3000,
    zeroDepositAvailable: true,
    mileageLimitPerDay: 250,
    extraKmFee: 10,
    minimumAge: 23,
    image: "/images/fleet/range-rover-autobiography.webp",
    gallery: [
      "/images/fleet/range-rover-autobiography.webp",
      "/images/fleet/mercedes-g63-amg.webp",
      "/images/fleet/rolls-royce-cullinan.webp"
    ],
    specs: {
      engine: "4.4L Twin-Turbocharged V8",
      horsepower: 523,
      zeroToHundred: "4.6s",
      topSpeed: "250 km/h",
      transmission: "8-Speed ZF Automatic",
      drivetrain: "Intelligent All-Wheel Drive",
      seats: 5,
      doors: 5,
      luggage: 4,
      fuelType: "Special 95"
    },
    features: [
      "Executive Class Rear Seating with Footrests",
      "Meridian Signature 35-Speaker Sound System",
      "All-Wheel Steering (7.3m Turning Radius)",
      "Cabin Air Purification Pro with PM2.5 Filter",
      "Soft Door Close and Powered Gesture Tailgate"
    ],
    included: [
      "Comprehensive RTA Fleet Insurance",
      "Free Delivery anywhere in Downtown and Marina",
      "250 km Daily Allowance",
      "Dedicated 24/7 WhatsApp Operator",
      "Salik Electronic Toll Card"
    ]
  },
  {
    slug: "bmw-m4-competition",
    name: "BMW M4 Competition Coupé",
    brand: "BMW",
    model: "M4 Competition",
    year: 2024,
    category: "Supercar",
    tagline: "Twin-power turbo straight-six with precision M xDrive track handling.",
    description: "The BMW M4 Competition combines aggressive styling with high-performance Bavarian engineering. Producing 503 horsepower through an intelligent M xDrive setup that can transition to pure rear-wheel drive, this coupe gives drivers uncompromising agility through urban corridors.",
    pricePerDay: 1400,
    pricePerWeek: 8400,
    pricePerMonth: 28000,
    securityDeposit: 2500,
    zeroDepositAvailable: true,
    mileageLimitPerDay: 250,
    extraKmFee: 8,
    minimumAge: 21,
    image: "/images/fleet/bmw-m4-competition.webp",
    gallery: [
      "/images/fleet/bmw-m4-competition.webp",
      "/images/fleet/audi-rs6-avant.webp",
      "/images/fleet/porsche-911-gt3.webp"
    ],
    specs: {
      engine: "3.0L M TwinPower Turbo Inline-6",
      horsepower: 503,
      zeroToHundred: "3.9s",
      topSpeed: "290 km/h",
      transmission: "8-Speed M Steptronic with Drivelogic",
      drivetrain: "M xDrive (AWD / RWD Selectable)",
      seats: 4,
      doors: 2,
      luggage: 2,
      fuelType: "Super 98"
    },
    features: [
      "M Carbon Fiber Bucket Seats",
      "M Drive Professional with Drift Analyser",
      "Harman Kardon Surround Sound System",
      "BMW Curved Display with M Specific UI",
      "Adaptive M Suspension with Active Differential"
    ],
    included: [
      "Full RTA Commercial Insurance",
      "Doorstep Delivery Across Dubai",
      "250 km Daily Allowance",
      "24/7 Roadside Assistance",
      "Flexible Card Pre-Auth Deposit"
    ]
  },
  {
    slug: "audi-rs6-avant",
    name: "Audi RS6 Avant Quattro",
    brand: "Audi",
    model: "RS6 Avant",
    year: 2024,
    category: "Supercar",
    tagline: "Twin-turbo V8 super-estate with widebody flared arches and Quattro grip.",
    description: "The Audi RS6 Avant represents the ultimate combination of everyday family utility and brutal supercar performance. Featuring a 4.0-liter twin-turbo V8, flared wheel arches, and iconic Quattro permanent all-wheel drive, it moves from 0 to 100 km/h in 3.6 seconds.",
    pricePerDay: 1800,
    pricePerWeek: 10800,
    pricePerMonth: 36000,
    securityDeposit: 2500,
    zeroDepositAvailable: true,
    mileageLimitPerDay: 250,
    extraKmFee: 9,
    minimumAge: 23,
    image: "/images/fleet/audi-rs6-avant.webp",
    gallery: [
      "/images/fleet/audi-rs6-avant.webp",
      "/images/fleet/bmw-m4-competition.webp",
      "/images/fleet/range-rover-autobiography.webp"
    ],
    specs: {
      engine: "4.0L Twin-Turbo V8 Mild Hybrid",
      horsepower: 591,
      zeroToHundred: "3.6s",
      topSpeed: "305 km/h",
      transmission: "8-Speed Tiptronic",
      drivetrain: "Quattro Permanent AWD",
      seats: 5,
      doors: 5,
      luggage: 4,
      fuelType: "Super 98"
    },
    features: [
      "RS Sport Exhaust with Dual Oval Pipes",
      "Dynamic All-Wheel Steering",
      "Bang & Olufsen 3D Advanced Sound System",
      "Valcona Leather RS Honeycomb Sport Seats",
      "HD Matrix LED Headlights with Audi Laser Light"
    ],
    included: [
      "Comprehensive RTA Insurance",
      "Free Airport VIP Meet and Greet",
      "250 km Daily Allowance",
      "24/7 Dedicated Support",
      "Pre-programmed UAE Navigation"
    ]
  },
  {
    slug: "mercedes-s580-maybach",
    name: "Mercedes-Maybach S580 4MATIC",
    brand: "Mercedes-Benz",
    model: "Maybach S580",
    year: 2024,
    category: "Executive",
    tagline: "First-class rear lounge with acoustic active noise cancellation.",
    description: "The Mercedes-Maybach S580 sets the world benchmark for executive transport. Featuring an extended wheelbase, calf-rest reclining executive seating, silver-plated champagne flutes, and Burmester high-end 4D surround sound, this vehicle delivers uncompromised prestige.",
    pricePerDay: 2400,
    pricePerWeek: 14400,
    pricePerMonth: 48000,
    securityDeposit: 3500,
    zeroDepositAvailable: true,
    mileageLimitPerDay: 250,
    extraKmFee: 11,
    minimumAge: 25,
    image: "/images/fleet/mercedes-s580-maybach.webp",
    gallery: [
      "/images/fleet/mercedes-s580-maybach.webp",
      "/images/fleet/rolls-royce-cullinan.webp",
      "/images/fleet/bentley-continental-gt.webp"
    ],
    specs: {
      engine: "4.0L V8 Biturbo with EQ Boost",
      horsepower: 496,
      zeroToHundred: "4.8s",
      topSpeed: "250 km/h",
      transmission: "9G-TRONIC 9-Speed Automatic",
      drivetrain: "4MATIC All-Wheel Drive",
      seats: 4,
      doors: 4,
      luggage: 3,
      fuelType: "Super 98"
    },
    features: [
      "Executive Rear Reclining Seats with Calf Rests",
      "Burmester High-End 4D Surround Sound (30 Speakers)",
      "Rear Passenger MBUX Tablet and Dual Touchscreens",
      "Active Road Noise Cancellation in Headrests",
      "Electric Comfort Doors with Gesture Control"
    ],
    included: [
      "Full RTA Commercial Insurance",
      "Airport VIP Concierge Meet and Greet",
      "250 km Daily Allowance",
      "24/7 Dedicated Dispatch Manager",
      "Bottled Artesian Water and Mints"
    ]
  },
  {
    slug: "corvette-c8-stingray",
    name: "Corvette C8 Stingray Convertible",
    brand: "Chevrolet",
    model: "Corvette C8 Stingray",
    year: 2024,
    category: "Convertible",
    tagline: "Mid-engine 6.2L atmospheric American V8 with retractable hardtop.",
    description: "The eighth-generation Corvette brings mid-engine architecture to an iconic sports platform. With a naturally aspirated 6.2L LT2 V8 pushing 495 horsepower directly behind the cockpit, the C8 achieves 100 km/h in 2.9 seconds with sensational open-air exhaust dynamics.",
    pricePerDay: 1300,
    pricePerWeek: 7800,
    pricePerMonth: 26000,
    securityDeposit: 2000,
    zeroDepositAvailable: true,
    mileageLimitPerDay: 250,
    extraKmFee: 7,
    minimumAge: 21,
    image: "/images/fleet/corvette-c8-stingray.webp",
    gallery: [
      "/images/fleet/corvette-c8-stingray.webp",
      "/images/fleet/lamborghini-huracan-evo.webp",
      "/images/fleet/bmw-m4-competition.webp"
    ],
    specs: {
      engine: "6.2L LT2 Naturally Aspirated V8",
      horsepower: 495,
      zeroToHundred: "2.9s",
      topSpeed: "312 km/h",
      transmission: "8-Speed Dual-Clutch Tremec",
      drivetrain: "RWD",
      seats: 2,
      doors: 2,
      luggage: 2,
      fuelType: "Super 98"
    },
    features: [
      "Retractable Power Hardtop (16s Operation)",
      "Performance Data Recorder (PDR)",
      "Bose Performance Series 14-Speaker Audio",
      "Magnetic Selective Ride Control 4.0",
      "Head-Up Color Display with Track View"
    ],
    included: [
      "RTA Comprehensive Insurance",
      "Free Delivery in Marina and JBR",
      "250 km Daily Allowance",
      "24/7 Mechanical Assistance",
      "Instant WhatsApp Document Verification"
    ]
  },
  {
    slug: "tesla-model-s-plaid",
    name: "Tesla Model S Plaid",
    brand: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    category: "Executive",
    tagline: "Tri-motor electric propulsion with 1,020 HP and sub-2.1s acceleration.",
    description: "The fastest accelerating production sedan on earth. Featuring three independent carbon-sleeved motors delivering 1,020 horsepower and torque vectoring across both axles, the Model S Plaid propels drivers into hyperspace while offering 600 km of zero-emission highway range.",
    pricePerDay: 1600,
    pricePerWeek: 9600,
    pricePerMonth: 32000,
    securityDeposit: 2500,
    zeroDepositAvailable: true,
    mileageLimitPerDay: 300,
    extraKmFee: 8,
    minimumAge: 23,
    image: "/images/fleet/tesla-model-s-plaid.webp",
    gallery: [
      "/images/fleet/tesla-model-s-plaid.webp",
      "/images/fleet/audi-rs6-avant.webp",
      "/images/fleet/porsche-911-gt3.webp"
    ],
    specs: {
      engine: "Tri-Motor All-Electric Powertrain",
      horsepower: 1020,
      zeroToHundred: "2.1s",
      topSpeed: "322 km/h",
      transmission: "Single-Speed Fixed Gear",
      drivetrain: "Torque Vectoring All-Wheel Drive",
      seats: 5,
      doors: 5,
      luggage: 3,
      fuelType: "Electric (Tesla Supercharger Ready)"
    },
    features: [
      "Sub-2.1s 0-100 km/h Plaid Launch Mode",
      "17-inch Cinematic Display with 2200x1300 Resolution",
      "Yoke Steering with Capacitive Touch Controls",
      "Free Unlimited Tesla Supercharging Included",
      "Autopilot Hardware 4 Suite"
    ],
    included: [
      "Full Comprehensive Insurance",
      "Free Supercharging at all UAE Stations",
      "300 km Daily Allowance",
      "Direct Hotel or Airport Delivery",
      "24/7 Remote Vehicle Telemetry Support"
    ]
  }
];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return FLEET_DATA.find((item) => item.slug === slug);
}

export function getAllVehicleSlugs(): string[] {
  return FLEET_DATA.map((item) => item.slug);
}
