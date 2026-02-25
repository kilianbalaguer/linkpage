import type { Metadata } from "next";
import "./globals.css";
import ThemeContextProvider from "@/context/theme-context";
import LanguageContextProvider from "@/context/language-context";
import ThemeSwitch from "@/components/theme-switch";

export const metadata: Metadata = {
  title: "Kilian Balaguer | Links",
  description: "All my links in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-black text-black dark:text-white antialiased" suppressHydrationWarning>
        {/* Grid pattern background */}
        <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] transition-all duration-300" />
        
        <ThemeContextProvider>
          <LanguageContextProvider>
            {children}
            <ThemeSwitch />
          </LanguageContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
