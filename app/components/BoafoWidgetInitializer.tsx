"use client";

import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() { 
  useEffect(() => {
    try {
      // Only initialize if we have a valid API key
      const BOAFO_API_KEY = import.meta.env.VITE_BOAFO_API_KEY;
      if (BOAFO_API_KEY) {
        initializeBoafoWidget(BOAFO_API_KEY);
      }
    } catch (error) {
      console.warn('Accessibility widget failed to load:', error);
    }
  }, []);

  return null; // nothing to render
}
