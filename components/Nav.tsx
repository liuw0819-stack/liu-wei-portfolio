"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "关于", href: "#about" },
  { label: "经历", href: "#experience" },
  { label: "作品集", href: "#projects" },
  { label: "技能", href: "#skills" },
  { label: "联系", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "0 2rem",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #1a1a1a" : "1px solid transparent",
        transition: "background 300ms, border-color 300ms, backdrop-filter 300ms",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: "'Noto Sans SC', sans-serif",
          fontSize: "1rem",
          fontWeight: 700,
          color: "#f0f0f0",
          textDecoration: "none",
          letterSpacing: "0.02em",
        }}
      >
        刘威
      </a>

      {/* Nav links */}
      <nav style={{ display: "flex", gap: "2rem" }}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              fontSize: "0.78rem",
              color: "#555",
              textDecoration: "none",
              letterSpacing: "0.06em",
              transition: "color 200ms",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#f0f0f0")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#555")}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a
        href="tel:13810359882"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.75rem",
          padding: "0.4rem 1rem",
          background: "transparent",
          color: "#2563eb",
          border: "1px solid #2563eb44",
          borderRadius: "4px",
          textDecoration: "none",
          letterSpacing: "0.04em",
          transition: "background 200ms, border-color 200ms",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = "rgba(37,99,235,0.1)";
          el.style.borderColor = "#2563eb";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = "transparent";
          el.style.borderColor = "#2563eb44";
        }}
      >
        立即联系
      </a>
    </motion.header>
  );
}
