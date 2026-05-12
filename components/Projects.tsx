"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    brand: "冈本 × 避孕套",
    title: "超级爆品矩阵 · 10亿级销售额",
    subtitle: "冰粒粒 · 滑粒粒 · 003东京限定 · 玻尿酸 · 黄金超薄",
    description:
      "主导冈本避孕套多品类爆款开发：冰粒粒、滑粒粒、超薄粉润、003东京限定款、003玻尿酸、黄金超薄等超级爆品，覆盖线上线下全渠道及渠道专供款，累计打造多个年销千万单品。",
    result: "累计销售额 ¥10亿+",
    tags: ["医疗器械", "避孕套", "爆款开发", "渠道管理", "全链路GTM"],
    color: "#08080f",
    accent: "#818cf8",
    size: "large",
    year: "2019—2024",
    image: "/products/condom-pink.png",
  },
  {
    id: 2,
    brand: "冈本 × 情趣玩具",
    title: "震动棒 · 跳蛋 · 独乐系列",
    subtitle: "山重奏 · 小雨滴 · 独乐丸",
    description:
      "主导情趣玩具爆款矩阵开发，从竞品研究、技术研发、包装设计到上市管理全链路操盘，建立产品差异化壁垒。",
    result: "累计销售额 ¥2000万+",
    tags: ["情趣玩具", "GTM", "爆款开发", "供应链"],
    color: "#050c15",
    accent: "#60a5fa",
    size: "medium",
    year: "2021—2024",
    image: "/products/toy-shanzhongzou.png",
  },
  {
    id: 3,
    brand: "冈本 × 润滑液",
    title: "玻尿酸小粉条 · 风火山林系列",
    subtitle: "「火」爆款 · 10万支+热销",
    description:
      "主导003玻尿酸小粉条及风火山林润滑液产品线开发，其中「火」单品销量突破10万支，打造细分品类头部单品。",
    result: "累计销售额 ¥500万+",
    tags: ["润滑液", "个护", "爆款打造", "差异化"],
    color: "#080f08",
    accent: "#4ade80",
    size: "medium",
    year: "2021—2024",
    image: "/products/lube-fhsl.png",
  },
  {
    id: 4,
    brand: "UZZE 优至",
    title: "生殖健康品牌0→1孵化",
    subtitle: "延时喷剂 · 避孕套套装",
    description:
      "主导两性健康类品牌从0到1搭建，完成商标注册防御体系、供应链系统、合规上市及全渠道价格体系构建。",
    result: "成功完成药监局备案上市",
    tags: ["品牌孵化", "合规上市", "延时喷剂", "供应链"],
    color: "#050d1a",
    accent: "#38bdf8",
    size: "medium",
    year: "2024—2025",
    image: "/products/uzze-capybara.png",
  },
  {
    id: 5,
    brand: "Up X Code 保健品",
    image: "/products/upxcode.png",
    title: "NMN9600 · 男性保健系列",
    subtitle: "跨境保健品上市项目",
    description:
      "主导NMN健康品、男性保健等跨境保健品的产品开发与上市管理，覆盖北美供应链引入、配方定制及电商渠道铺设。",
    result: "新零售渠道成功销售",
    tags: ["保健品", "跨境", "NMN", "男性健康"],
    color: "#0f0a00",
    accent: "#fbbf24",
    size: "small",
    year: "2020—2021",
  },
  {
    id: 6,
    brand: "泼喵 · 有解",
    title: "功能性食品品牌矩阵",
    subtitle: "朋克养身系列 · 多品类SKU",
    description:
      "以「朋克养身」为核心理念，开发睡眠、解酒、能量等功能食品系列，主导VI设计方向、包装结构创新及产品上市管理。",
    result: "多品牌成功落地市场",
    tags: ["功能食品", "VI设计", "朋克养身", "新零售"],
    color: "#0a0014",
    accent: "#c084fc",
    size: "small",
    year: "2020—2024",
  },
  {
    id: 7,
    brand: "日本日化 OEM",
    title: "日本供应链全链路管理",
    subtitle: "化妆品 · 口腔 · 健康品",
    description:
      "负责日本OEM化妆品、口腔护理、健康食品等品类的全流程项目管理，从产品开发、进口通关到国内销售渠道规划落地。",
    result: "成功落地3个品类进口品牌",
    tags: ["日本供应链", "OEM", "进口品牌", "全链路"],
    color: "#00100a",
    accent: "#34d399",
    size: "small",
    year: "2019—至今",
  },
];

const sizeMap = {
  large: { gridColumn: "span 2", minHeight: "320px" },
  medium: { gridColumn: "span 1", minHeight: "280px" },
  small: { gridColumn: "span 1", minHeight: "240px" },
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="projects" style={{ padding: "clamp(4rem, 8vw, 8rem) 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem" }}
        >
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#444",
              fontWeight: 500,
              marginBottom: "0.75rem",
            }}
          >
            Project Portfolio
          </div>
          <h2
            style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "#f0f0f0",
            }}
          >
            项目作品集
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
          }}
        >
          {projects.map((proj, i) => {
            const size = sizeMap[proj.size as keyof typeof sizeMap];
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{
                  ...size,
                  background: proj.color,
                  border: "1px solid #1e1e1e",
                  borderRadius: "10px",
                  padding: "2rem",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  transition: "border-color 250ms, transform 250ms",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = proj.accent + "55";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#1e1e1e";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Product image background */}
                {"image" in proj && proj.image && (
                  <>
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${proj.image})`,
                        backgroundSize: proj.size === "large" ? "50% auto" : "70% auto",
                        backgroundPosition: "right bottom",
                        backgroundRepeat: "no-repeat",
                        opacity: 0.18,
                        pointerEvents: "none",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(135deg, ${proj.color} 30%, transparent 100%)`,
                        pointerEvents: "none",
                      }}
                    />
                  </>
                )}

                {/* Accent glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${proj.accent}18 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                <div style={{ position: "relative", zIndex: 1 }}>
                  {/* Brand + Year */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.12em",
                        color: proj.accent,
                        textTransform: "uppercase",
                        fontWeight: 600,
                      }}
                    >
                      {proj.brand}
                    </span>
                    <span
                      style={{
                        fontSize: "0.65rem",
                        color: "#333",
                        fontFamily: "'Inter', monospace",
                      }}
                    >
                      {proj.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: proj.size === "large" ? "1.4rem" : "1.1rem",
                      fontWeight: 700,
                      color: "#e8e8e8",
                      marginBottom: "0.4rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {proj.title}
                  </h3>
                  <div
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "0.75rem",
                      color: "#555",
                      marginBottom: "1rem",
                    }}
                  >
                    {proj.subtitle}
                  </div>

                  {proj.size !== "small" && (
                    <p
                      style={{
                        fontFamily: "'Noto Sans SC', sans-serif",
                        fontSize: "0.82rem",
                        color: "#666",
                        lineHeight: 1.7,
                        marginBottom: "1.2rem",
                      }}
                    >
                      {proj.description}
                    </p>
                  )}
                </div>

                <div style={{ position: "relative", zIndex: 1 }}>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.65rem",
                          padding: "0.2rem 0.6rem",
                          background: proj.accent + "14",
                          color: proj.accent + "cc",
                          borderRadius: "20px",
                          fontFamily: "'Noto Sans SC', sans-serif",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Result */}
                  <div
                    style={{
                      paddingTop: "0.75rem",
                      borderTop: "1px solid #ffffff0a",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: proj.accent,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Noto Sans SC', sans-serif",
                        fontSize: "0.78rem",
                        color: proj.accent + "cc",
                        fontWeight: 500,
                      }}
                    >
                      {proj.result}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
