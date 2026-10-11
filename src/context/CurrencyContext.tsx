"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { brandConfig } from "@/config/brand";

type Currency = "AED" | "USD";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (aedAmount: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "AED",
  setCurrency: () => {},
  formatPrice: (amount: number) => `AED ${amount.toLocaleString()}`,
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("AED");

  useEffect(() => {
    const saved = localStorage.getItem("apex_currency") as Currency | null;
    if (saved === "AED" || saved === "USD") {
      setCurrency(saved);
    }
  }, []);

  const handleSetCurrency = (c: Currency) => {
    setCurrency(c);
    localStorage.setItem("apex_currency", c);
  };

  const formatPrice = (aedAmount: number) => {
    if (currency === "USD") {
      const usd = Math.round(aedAmount / brandConfig.exchangeRateUsd);
      return `$${usd.toLocaleString()}`;
    }
    return `AED ${aedAmount.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency: handleSetCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
