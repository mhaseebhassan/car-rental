import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export function SpeedometerIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className={className}>
      <path d="M4 18 A9 9 0 1 1 20 18" />
      <line x1="12" y1="14" x2="17" y2="8" />
      <circle cx="12" cy="14" r="2" />
    </svg>
  );
}

export function HorsepowerIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className={className}>
      <rect x="3" y="7" width="18" height="10" />
      <line x1="8" y1="7" x2="8" y2="4" />
      <line x1="16" y1="7" x2="16" y2="4" />
      <line x1="10" y1="12" x2="14" y2="12" />
      <line x1="12" y1="10" x2="12" y2="14" />
    </svg>
  );
}

export function TransmissionIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className={className}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="12" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="12" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <line x1="6" y1="8" x2="6" y2="16" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="18" y1="8" x2="18" y2="16" />
      <line x1="6" y1="12" x2="18" y2="12" />
    </svg>
  );
}

export function SeatIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className={className}>
      <path d="M7 4 L7 14 L18 14 L18 19 L4 19 L4 6 L7 4 Z" />
      <line x1="7" y1="9" x2="18" y2="9" />
    </svg>
  );
}

export function LuggageIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className={className}>
      <rect x="5" y="7" width="14" height="13" />
      <path d="M9 7 L9 4 L15 4 L15 7" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export function AirplaneIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className={className}>
      <path d="M12 2 L15 10 L22 12 L15 14 L13 21 L11 21 L12 15 L7 14 L5 16 L3 16 L4 12 L3 8 L5 8 L7 10 L12 9 L12 2 Z" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className={className}>
      <path d="M12 3 L20 7 V12 C20 17 16.5 21 12 22 C7.5 21 4 17 4 12 V7 Z" />
      <path d="M9 12 L11 14 L15 10" />
    </svg>
  );
}

export function ClockIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className={className}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function MapPinIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className={className}>
      <path d="M12 21 C12 21 19 14.5 19 9.5 A7 7 0 0 0 5 9.5 C5 14.5 12 21 12 21 Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className={className}>
      <path d="M20 11.5 A8.5 8.5 0 0 1 7.2 19 L3 20.5 L4.6 16.4 A8.5 8.5 0 1 1 20 11.5 Z" />
      <path d="M9 10 C9 12 12 15 14 15 C14.6 15 15.2 14.4 15.2 14.4 L14 13.2 L13 13.8 C12.6 13.4 11.6 12.4 11.2 12 L11.8 11 L10.6 9.8 C10.6 9.8 10 10 9 10 Z" />
    </svg>
  );
}

export function PhoneIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className={className}>
      <path d="M5 4 H9 L11 8 L8.5 9.5 C9.8 12.2 11.8 14.2 14.5 15.5 L16 13 L20 15 V19 C20 19.6 19.6 20 19 20 C10.7 20 4 13.3 4 5 C4 4.4 4.4 4 5 4 Z" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className={className}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className={className}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function CheckIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function CloseIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className={className}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function GridIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className={className}>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

export function ListIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className={className}>
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="4" y2="6" />
      <line x1="3" y1="12" x2="4" y2="12" />
      <line x1="3" y1="18" x2="4" y2="18" />
    </svg>
  );
}
