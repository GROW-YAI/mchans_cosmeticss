"use client";

import { useEffect } from "react";

declare module "boafo-accessibility-widget" {
  export function initializeBoafoWidget(apiKey: string): void;
}

export default function BoafoWidgetInitializer() { 
  useEffect(() => {
    const loadWidget = async () => {
      try {
        const { initializeBoafoWidget } = await import("boafo-accessibility-widget");
        const BOAFO_API_KEY = import.meta.env.VITE_BOAFO_API_KEY;
        if (BOAFO_API_KEY) {
          initializeBoafoWidget(BOAFO_API_KEY);
        }
      } catch (error) {
        console.warn('Accessibility widget failed to load:', error);
      }
    };
    loadWidget();
  }, []);

  return null; // nothing to render
}