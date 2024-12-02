"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/src/components/theme/theme-toggle";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      title: "About Us",
      submenu: ["Leadership", "Mission & Vision", "Organization Structure"],
    },
    {
      title: "Services",
      submenu: ["Policy Development", "Governance", "Administration", "Public Services"],
    },
    {
      title: "Resources",
      submenu: ["Publications", "Reports", "Guidelines"],
    },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">CAO Bangladesh</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <button className="flex items-center space-x-1 text-foreground hover:text-primary">
                    <span>{item.title}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="text-foreground hover:text-primary"
                  >
                    {item.title}
                  </Link>
                )}
                {item.submenu && activeDropdown === item.title && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-popover border border-border">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            {menuItems.map((item) => (
              <div key={item.title} className="py-2">
                {item.submenu ? (
                  <div className="space-y-2">
                    <div className="font-medium px-4 py-2">{item.title}</div>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem}
                        href="#"
                        className="block px-8 py-2 text-sm text-muted-foreground hover:text-foreground"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="block px-4 py-2 text-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;