"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "广州虎牙信息科技",
    role: "产品经理",
    period: "2025.07 — 至今",
    location: "深圳 · 南山区",
    tag: "CURRENT",
    color: "#2563eb",
    points: [
      "负责新业务线成人用品类目市场调研，完成行业研究报告",
      "主导搭建供应商管理体系，建立分级管理的优质供应商资源池",
      "规划并实施平台化运营方案，推进自有品牌建设",
      "成功签约头部主播开展直播电商带货合作",
    ],
  },
  {
    company: "有偶健康科技（深圳）",
    role: "产品负责人",
    period: "2024.08 — 2025.03",
    location: "深圳",
    tag: "两性健康",
    color: "#7c3aed",
    points: [
      "主导完成5个核心商标注册，构建商标防御体系",
      "建立竞品三维分析模型，完成20+竞品技术参数拆解",
      "主导供应链0→1搭建，完成12家核心供应商准入审核",
      "推动延时喷剂/避孕套产品线按期上市，完成药监局广告审核",
    ],
  },
  {
    company: "深圳市万生堂实业",
    role: "冈本产品开发（医疗器械，个护，保健品，情趣玩具专项负责人）",
    period: "2019.08 — 2024.08",
    location: "深圳 · 福田区",
    tag: "5年",
    color: "#059669",
    points: [
      "主导冈本避孕套超级爆品开发：冰粒粒、滑粒粒、超薄粉润、003东京限定款、003玻尿酸、黄金超薄等，渠道专供款系列，累计销售额10亿元+",
      "主导情趣玩具爆款矩阵开发：山重奏震动棒、小雨滴跳蛋、独乐丸等，累计销售额2000万元+",
      "主导润滑液产品线：003玻尿酸小粉条、风火山林润滑液（其中「火」销量10万支+），累计销售额500万元+",
      "主导功能食品、日化、保健品等多品类GTM全链路操盘，负责日本化妆品OEM全流程落地，成功落地3个品类进口自有品牌",
    ],
  },
  {
    company: "东西贸易（上海浦东新区）",
    role: "大客户销售经理",
    period: "2017.03 — 2019.08",
    location: "北京",
    tag: "销售",
    color: "#d97706",
    points: [
      "主营功率半导体碳化硅外延片、酚醛树脂等B2B销售",
      "2018年度个人负责业务总销售额276万美元",
      "2019年1-5月业务销售额418万美元",
      "陪同日方客户参加商务会谈，负责商务翻译及谈判",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="experience" style={{ padding: "clamp(4rem, 8vw, 8rem) 0", background: "#0c0c0c" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between"
          style={{ marginBottom: "4rem" }}
        >
          <div>
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
              Work Experience
            </div>
            <h2
              style={{
                fontFamily: "'Noto Sans SC', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                color: "#f0f0f0",
              }}
            >
              工作经历
            </h2>
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "#444",
              fontFamily: "'Noto Sans SC', sans-serif",
            }}
          >
            9年 · 4家公司
          </div>
        </motion.div>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              bottom: "0",
              width: "1px",
              background: "linear-gradient(to bottom, #1a1a1a, #2563eb22, #1a1a1a)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ paddingLeft: "2.5rem", paddingBottom: "3rem", position: "relative" }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-5px",
                    top: "8px",
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: exp.color,
                    boxShadow: `0 0 12px ${exp.color}66`,
                  }}
                />

                <div
                  style={{
                    padding: "1.5rem 2rem",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    transition: "border-color 200ms",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = exp.color + "44";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  }}
                >
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3
                          style={{
                            fontFamily: "'Noto Sans SC', sans-serif",
                            fontSize: "1rem",
                            fontWeight: 600,
                            color: "#e0e0e0",
                          }}
                        >
                          {exp.company}
                        </h3>
                        <span
                          style={{
                            fontSize: "0.65rem",
                            padding: "0.2rem 0.6rem",
                            background: exp.color + "22",
                            color: exp.color,
                            borderRadius: "20px",
                            letterSpacing: "0.06em",
                            fontWeight: 500,
                          }}
                        >
                          {exp.tag}
                        </span>
                      </div>
                      <div
                        style={{
                          fontFamily: "'Noto Sans SC', sans-serif",
                          fontSize: "0.8rem",
                          color: exp.color,
                          fontWeight: 500,
                        }}
                      >
                        {exp.role}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div
                        style={{
                          fontFamily: "'Inter', monospace",
                          fontSize: "0.75rem",
                          color: "#555",
                        }}
                      >
                        {exp.period}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Noto Sans SC', sans-serif",
                          fontSize: "0.7rem",
                          color: "#3d3d3d",
                          marginTop: "0.2rem",
                        }}
                      >
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {exp.points.map((pt, j) => (
                      <li
                        key={j}
                        style={{
                          fontFamily: "'Noto Sans SC', sans-serif",
                          fontSize: "0.82rem",
                          color: "#666",
                          lineHeight: 1.7,
                          paddingLeft: "1rem",
                          position: "relative",
                          marginBottom: "0.3rem",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            color: exp.color,
                            fontSize: "0.5rem",
                            top: "0.55em",
                          }}
                        >
                          ●
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
