"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "产品管理",
    icon: "⬡",
    color: "#2563eb",
    skills: ["GTM战略规划", "产品生命周期管理", "新品上市管理", "产品提案", "竞品分析", "用户调研"],
  },
  {
    category: "供应链",
    icon: "◈",
    color: "#7c3aed",
    skills: ["OEM供应商寻源", "供应商管理体系", "日本供应链", "品质标准制定", "成本谈判", "交付管理"],
  },
  {
    category: "品牌营销",
    icon: "◉",
    color: "#059669",
    skills: ["品牌建设", "市场传播策略", "内容营销", "数字营销", "销售赋能", "竞争情报"],
  },
  {
    category: "行业领域",
    icon: "◐",
    color: "#d97706",
    skills: ["成人用品/两性健康", "功能食品/保健品", "化妆品/日化", "医疗器械", "快消品", "电商运营"],
  },
  {
    category: "语言技能",
    icon: "◑",
    color: "#dc2626",
    skills: ["日语 N1（商务洽谈）", "普通话（母语）", "英语（基础沟通）"],
  },
];

const tools = [
  "产品路线图", "用户故事", "竞品矩阵", "SWOT分析", "价格体系设计",
  "渠道策略", "数据分析", "项目管理", "跨部门协作", "商务谈判",
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="skills" style={{ padding: "clamp(4rem, 8vw, 8rem) 0", background: "#0c0c0c" }}>
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
            Skills & Expertise
          </div>
          <h2
            style={{
              fontFamily: "'Noto Sans SC', sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "#f0f0f0",
            }}
          >
            专业技能
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                padding: "1.5rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span style={{ color: group.color, fontSize: "1.1rem" }}>{group.icon}</span>
                <span
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#d0d0d0",
                  }}
                >
                  {group.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: "'Noto Sans SC', sans-serif",
                      fontSize: "0.72rem",
                      padding: "0.25rem 0.6rem",
                      background: group.color + "12",
                      color: group.color + "cc",
                      border: `1px solid ${group.color}22`,
                      borderRadius: "4px",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Tools card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
            style={{
              gridColumn: "span 2",
              padding: "1.5rem",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span style={{ color: "#60a5fa", fontSize: "1.1rem" }}>◫</span>
              <span
                style={{
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#d0d0d0",
                }}
              >
                核心方法论
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  style={{
                    fontFamily: "'Noto Sans SC', sans-serif",
                    fontSize: "0.72rem",
                    padding: "0.3rem 0.75rem",
                    background: "#60a5fa11",
                    color: "#60a5fa99",
                    border: "1px solid #60a5fa1a",
                    borderRadius: "4px",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
