export interface HubLocation {
  id: string;
  name: string;
  type: string;
  address: string;
  coordinates: string;
  hours: string;
  terminalDetails?: string;
  deliverySpeed: string;
}

export const HUB_LOCATIONS: HubLocation[] = [
  {
    id: "dxb-vip",
    name: "Dubai International Airport (DXB)",
    type: "Airport VIP Hub",
    address: "Terminal 1, 2, and 3 VIP Valet Curbside & Al Majlis Executive Lounge",
    coordinates: "25.2532° N, 55.3657° E",
    hours: "24 Hours / 7 Days",
    terminalDetails: "Dedicated airside representative with name board at baggage exit or private terminal apron.",
    deliverySpeed: "Immediate curbside vehicle handover upon touchdown."
  },
  {
    id: "downtown",
    name: "Downtown Dubai Flagship",
    type: "Concierge Hub",
    address: "Mohammed Bin Rashid Boulevard, Near Armani Hotel, Downtown Dubai",
    coordinates: "25.1972° N, 55.2744° E",
    hours: "08:00 - 02:00 Daily",
    deliverySpeed: "Under 30 minutes to all Downtown residences and hotels."
  },
  {
    id: "palm-jumeirah",
    name: "Palm Jumeirah & West Beach",
    type: "Resort Valet Lounge",
    address: "The Palm Jumeirah Trunk & Crescent VIP Access Points",
    coordinates: "25.1124° N, 55.1390° E",
    hours: "08:00 - 02:00 Daily",
    deliverySpeed: "Under 35 minutes to private villas and luxury resorts."
  },
  {
    id: "dubai-marina",
    name: "Dubai Marina & Bluewaters",
    type: "Yacht Harbour Lounge",
    address: "Marina Gate Promenade & Caesars Bluewaters VIP Drop",
    coordinates: "25.0784° N, 55.1407° E",
    hours: "08:00 - 02:00 Daily",
    deliverySpeed: "Under 30 minutes to JBR, Marina Walk, and Bluewaters Island."
  }
];

export const DELIVERY_ZONES = [
  "Dubai International Airport (DXB Terminals 1, 2, 3)",
  "Al Maktoum International Airport (DWC)",
  "Downtown Dubai & DIFC Financial Centre",
  "Palm Jumeirah & Jumeirah Bay Island",
  "Dubai Marina & JBR Walk",
  "Emirates Hills & Dubai Hills Estate",
  "Business Bay & City Walk",
  "Abu Dhabi VIP Transfer (On Request)"
];
