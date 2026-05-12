"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contacts = [
  { label: "电话", value: "138 1035 9882", href: "tel:13810359882", icon: "↗" },
  { label: "邮箱", value: "89408048@qq.com", href: "mailto:89408048@qq.com", icon: "↗" },
  { label: "微信", value: "13810359882", href: "#", icon: "◎" },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="contact" style={{ padding: "clamp(5rem, 10vw, 10rem) 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#444",
                fontWeight: 500,
                marginBottom: "1.5rem",
              }}
            >
              Get In Touch
            </div>
            <h2
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                color: "#f0f0f0",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              期待合作
              <br />
              <span style={{ color: "#2563eb" }}>共创爆款</span>
            </h2>
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                color: "#666",
                lineHeight: 1.9,
                fontSize: "0.9rem",
                maxWidth: "400px",
              }}
            >
              如果您正在寻找一位拥有全链路产品操盘经验的GTM专家，
              欢迎随时联系。期待与您探讨新的合作机会。
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
              {contacts.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.25rem 1.5rem",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    textDecoration: "none",
                    transition: "border-color 200ms, background 200ms",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#2563eb44";
                    el.style.background = "rgba(37,99,235,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.background = "var(--surface)";
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.12em",
                        color: "#444",
                        textTransform: "uppercase",
                        marginBottom: "0.3rem",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', 'Noto Sans SC', sans-serif",
                        fontSize: "0.95rem",
                        color: "#d0d0d0",
                        fontWeight: 500,
                      }}
                    >
                      {c.value}
                    </div>
                  </div>
                  <span style={{ color: "#2563eb", fontSize: "1rem" }}>{c.icon}</span>
                </motion.a>
              ))}
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.5rem 1rem",
                background: "rgba(5, 150, 105, 0.08)",
                border: "1px solid rgba(5, 150, 105, 0.2)",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)",
                  animation: "pulse-dot 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "0.78rem",
                  color: "#10b981",
                  fontWeight: 500,
                }}
              >
                在职，急寻新机会
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: "6rem",
            paddingTop: "2rem",
            borderTop: "1px solid #1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div
            style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#333",
              letterSpacing: "0.05em",
            }}
          >
            刘威
          </div>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            {["关于", "经历", "作品集", "技能", "联系"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "0.75rem",
                  color: "#3d3d3d",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  transition: "color 200ms",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#888")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#3d3d3d")}
              >
                {item}
              </a>
            ))}
          </div>
          <div
            style={{
              fontSize: "0.7rem",
              color: "#2a2a2a",
              fontFamily: "'Inter', monospace",
            }}
          >
            © 2026 刘威
          </div>
        </motion.div>
      </div>
    </section>
  );
}
