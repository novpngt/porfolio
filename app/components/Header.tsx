"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon, Menu, X } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => setMounted(true), []);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  // Set up scroll event listener instead of Intersection Observer
  useEffect(() => {
    const handleScroll = () => {
      // Get all section elements
      const sections = menuItems
        .map((item) => {
          const id = item.href.replace("#", "");
          return document.getElementById(id);
        })
        .filter(Boolean) as HTMLElement[];

      if (sections.length === 0) return;

      // Get current scroll position
      const scrollY = window.scrollY;

      // Get header height for offset calculation (if header is fixed)
      const headerHeight = headerRef.current?.offsetHeight || 0;

      // Find the current section
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - headerHeight - 100; // 100px offset for better UX
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.id;
        }
      });

      // Special case for last section when scrolled to bottom
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + scrollY;

      // If we're at the bottom of the page, activate the last section
      if (scrollPosition >= scrollHeight - 50) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
          current = lastSection.id;
        }
      }

      setActiveSection(current);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call once on mount to set initial active section
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Handle smooth scrolling when clicking on navigation links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // Close mobile menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }

      // Get header height for offset
      const headerHeight = headerRef.current?.offsetHeight || 0;

      // Calculate position to scroll to
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      // Smooth scroll to element
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update active section
      setActiveSection(targetId);
    }
  };

  return (
    <motion.header
      ref={headerRef}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Nguyen Thanh Phong</span>
            <AnimatedLogo />
            <span className="ml-2 text-xl font-bold text-foreground">🇻🇳</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-8">
          {menuItems.map((item) => (
            <div key={item.name} className="relative">
              <Link
                href={item.href}
                className={`text-sm font-semibold leading-6 transition-colors ${
                  activeSection === item.href.replace("#", "") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </Link>

              {/* Animated indicator - underline style */}
              {activeSection === item.href.replace("#", "") && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  layoutId="activeSection"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {mounted && (
            <motion.button
              onClick={toggleTheme}
              className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                className="relative w-5 h-5"
              >
                <motion.div
                  animate={{ opacity: theme === "dark" ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <SunIcon className="h-5 w-5" />
                </motion.div>
                <motion.div
                  animate={{ opacity: theme === "dark" ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <MoonIcon className="h-5 w-5" />
                </motion.div>
              </motion.div>
            </motion.button>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-1 px-4 pb-3 pt-2">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className={`block rounded-md px-3 py-2 text-base font-medium ${
                      activeSection === item.href.replace("#", "")
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    <div className="flex items-center">
                      {item.name}

                      {/* Animated indicator - dot style for mobile */}
                      {activeSection === item.href.replace("#", "") && (
                        <motion.div
                          className="ml-2 h-1.5 w-1.5 rounded-full bg-primary"
                          layoutId="activeSectionMobile"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </div>
                  </Link>
                </div>
              ))}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="mt-4 w-full flex items-center justify-center rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary"
                >
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  {theme === "dark" ? <SunIcon className="ml-2 h-5 w-5" /> : <MoonIcon className="ml-2 h-5 w-5" />}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
