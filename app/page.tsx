"use client";

import Image from "next/image";
import { 
  FaGithub, 
  FaSnapchat, 
  FaDiscord,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";
import Header from "@/components/header";

const links = [
  {
    title: "GitHub",
    url: "https://github.com/kilianbalaguer",
    icon: FaGithub,
    description: "Check out my code"
  },
  {
    title: "Snapchat",
    url: "https://snapchat.com/add/itskilian007",
    icon: FaSnapchat,
    description: "Add me on Snap"
  },
  {
    title: "Instagram",
    url: "https://instagram.com/itskilian007",
    icon: FaInstagram,
    description: "Daily life"
  },
  {
    title: "Email",
    url: "mailto:kilianbalaguer2010@icloud.com",
    icon: FaEnvelope,
    description: "Send me an email"
  },
  {
    title: "Discord",
    url: "#",
    icon: FaDiscord,
    description: "Coming Soon"
  },
  {
    title: "LinkedIn",
    url: "#",
    icon: FaLinkedin,
    description: "Coming Soon"
  },
  {
    title: "Twitter",
    url: "#",
    icon: FaTwitter,
    description: "Coming Soon"
  }
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center p-4 mt-20">
        <div className="w-full max-w-2xl py-12">
          {/* Profile Section */}
          <div className="text-center mb-12">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-black dark:border-white translate-x-2 translate-y-2 transition-all duration-300" />
            <Image
              src="/KilianBalaguer.JPEG"
              alt="Kilian Balaguer"
              width={128}
              height={128}
              quality={95}
              priority
              className="relative w-full h-full object-cover border-4 border-black dark:border-white grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-3">
            Kilian Balaguer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
            Full-Stack Developer
          </p>
          <div className="inline-block mt-4 px-4 py-1 bg-black dark:bg-white text-white dark:text-black text-sm font-mono">
            @kilianbalaguer
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link, index) => {
            const Icon = link.icon;
            const isComingSoon = link.url === "#";
            return (
              <a
                key={index}
                href={link.url}
                target={isComingSoon ? undefined : "_blank"}
                rel={isComingSoon ? undefined : "noopener noreferrer"}
                className={`group block relative ${isComingSoon ? 'cursor-not-allowed opacity-60' : ''}`}
                onClick={(e) => {
                  if (isComingSoon) {
                    e.preventDefault();
                  }
                }}
              >
                <div className="absolute inset-0 bg-black dark:bg-white translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-300" />
                <div className="relative border-4 border-black dark:border-white bg-white dark:bg-black p-6 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Icon className="text-3xl flex-shrink-0" />
                    <div className="flex-1 text-left">
                      <h3 className="text-xl font-black">{link.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {link.description}
                      </p>
                    </div>
                    <svg
                      className="w-6 h-6 flex-shrink-0 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-gray-600 dark:text-gray-400">
          <p className="font-mono">© 2026 Kilian Balaguer</p>
        </div>
      </div>
    </main>
    </>
  );
}
