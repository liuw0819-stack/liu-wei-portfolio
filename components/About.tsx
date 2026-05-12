"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  { icon: "🎯", label: "GTM战略", desc: "市场进入策略 · 产品上市管理" },
  { icon: "🏭", label: "供应链", desc: "0→1搭建 · 日本OEM资源" },
  { icon: "📊", label: "数据洞察", desc: "竞品分析 · 市场调研" },
  { icon: "🌏", label: "跨文化", desc: "中日双语 · 7年日本留学" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" style={{ padding: "clamp(4rem, 8vw, 8rem) 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
              About
            </div>
            <h2
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#f0f0f0",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              从产品概念
              <br />
              到市场爆款
            </h2>
            <div
              style={{
                width: "40px",
                height: "2px",
                background: "#2563eb",
                marginBottom: "2rem",
              }}
            />
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                color: "#777",
                lineHeight: 1.9,
                fontSize: "0.95rem",
                marginBottom: "1.5rem",
              }}
            >
              9年产品管理经验，专注快消品、两性健康、保健品等多品类的GTM全链路操盘。
              曾主导冈本品牌避孕套、情趣玩具、润滑液等多款超级爆品开发，冈本业务线累计销售额超10亿元+。
            </p>
            <p
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                color: "#777",
                lineHeight: 1.9,
                fontSize: "0.95rem",
                marginBottom: "2.5rem",
              }}
            >
              日语N1，7年日本留学背景，拥有丰富的日本供应链资源。
              擅长多品类新品牌0→1孵化，从市场调研、产品定义、供应链搭建到全渠道上市一体化操盘。
            </p>

            <div className="flex gap-6 flex-wrap">
              {[
                { label: "深圳", icon: "📍" },
                { label: "13810359882", icon: "📱" },
                { label: "89408048@qq.com", icon: "✉️" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span style={{ fontSize: "0.8rem" }}>{item.icon}</span>
                  <span style={{ fontSize: "0.8rem", color: "#555", fontFamily: "'Noto Sans SC', sans-serif" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                style={{
                  padding: "1.5rem",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  transition: "border-color 200ms",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#2563eb";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                }}
              >
                <div style={{ fontSize: "1.4rem", marginBottom: "0.75rem" }}>{h.icon}</div>
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#e0e0e0",
                    marginBottom: "0.4rem",
                  }}
                >
                  {h.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "0.75rem",
                    color: "#555",
                    lineHeight: 1.5,
                  }}
                >
                  {h.desc}
                </div>
              </motion.div>
            ))}

            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="col-span-2"
              style={{
                padding: "1.5rem",
                background: "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(37,99,235,0.02) 100%)",
                border: "1px solid rgba(37,99,235,0.2)",
                borderRadius: "8px",
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "0.75rem",
                      color: "#2563eb",
                      letterSpacing: "0.1em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    EDUCATION · 广岛修道大学
                  </div>
                  <div
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "0.9rem",
                      color: "#c0c0c0",
                    }}
                  >
                    商学科本科 · 2012—2016
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    padding: "0.3rem 0.7rem",
                    background: "rgba(37,99,235,0.15)",
                    color: "#60a5fa",
                    borderRadius: "20px",
                    letterSpacing: "0.08em",
                  }}
                >
                  日本留学 7.5年
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
