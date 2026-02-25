"use client";

import React, { useState, createContext, useContext, useEffect } from "react";

type Language = "en" | "fr" | "ar" | "nl" | "de" | "es" | "ko";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("en");
  const [isLoaded, setIsLoaded] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("language") as Language | null;
      if (savedLanguage && ["en", "fr", "ar", "nl", "de", "es", "ko"].includes(savedLanguage)) {
        setLanguage(savedLanguage);
      }
    } catch (error) {
      console.error("Failed to load language from localStorage:", error);
    }
    setIsLoaded(true);
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("language", language);
      } catch (error) {
        console.error("Failed to save language to localStorage:", error);
      }
    }
  }, [language, isLoaded]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageContextProvider");
  }

  return context;
}
