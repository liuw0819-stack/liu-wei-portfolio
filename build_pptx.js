"use strict";

import pptxgen from "pptxgenjs";

// ─── Theme ───────────────────────────────────────────────────────────────────
const BG        = "080808";
const BG2       = "0c0c0c";
const ACCENT    = "2563eb";
const TEXT      = "f0f0f0";
const TEXT2     = "888888";
const TEXT3     = "444444";
const FONT      = "Arial";

// Slide size: 33.87cm × 19.05cm  →  13.33" × 7.5"  (LAYOUT_WIDE)
const W = 13.33;
const H = 7.5;

// Left accent bar
const BAR_W  = 0.09;   // ~0.15cm in inches
const BAR_X  = 0;
const BAR_Y  = 0;

// Content left margin (after accent bar)
const LM = 0.55;

// ─── Helper: add left accent bar ─────────────────────────────────────────────
function addAccentBar(slide, color) {
  slide.addShape("rect", {
    x: BAR_X, y: BAR_Y, w: BAR_W, h: H,
    fill: { color: color || ACCENT },
    line: { color: color || ACCENT, width: 0 }
  });
}

// ─── Helper: section label (small caps style) ────────────────────────────────
function addSectionLabel(slide, text, y) {
  slide.addText(text.toUpperCase(), {
    x: LM, y: y, w: W - LM - 0.3, h: 0.22,
    fontSize: 8, fontFace: FONT, color: TEXT3,
    charSpacing: 3, bold: false, margin: 0
  });
}

// ─── Helper: horizontal rule ─────────────────────────────────────────────────
function addRule(slide, y, color) {
  slide.addShape("rect", {
    x: LM, y: y, w: W - LM - 0.3, h: 0.012,
    fill: { color: color || "1a1a1a" },
    line: { color: color || "1a1a1a", width: 0 }
  });
}

// ─── Helper: project box ─────────────────────────────────────────────────────
function addProjectBox(slide, x, y, bw, bh, accentColor, title, subtitle, items, stat) {
  // Card background
  slide.addShape("rect", {
    x, y, w: bw, h: bh,
    fill: { color: "111111" },
    line: { color: "1e1e1e", width: 1 }
  });
  // Top accent bar
  slide.addShape("rect", {
    x, y, w: bw, h: 0.04,
    fill: { color: accentColor },
    line: { color: accentColor, width: 0 }
  });
  // Title
  slide.addText(title, {
    x: x + 0.18, y: y + 0.12, w: bw - 0.36, h: 0.36,
    fontSize: 14, fontFace: FONT, color: TEXT,
    bold: true, margin: 0
  });
  // Subtitle
  slide.addText(subtitle, {
    x: x + 0.18, y: y + 0.50, w: bw - 0.36, h: 0.22,
    fontSize: 9, fontFace: FONT, color: TEXT2,
    margin: 0
  });
  // Divider
  slide.addShape("rect", {
    x: x + 0.18, y: y + 0.74, w: bw - 0.36, h: 0.01,
    fill: { color: "222222" }, line: { color: "222222", width: 0 }
  });
  // Items text
  slide.addText(items, {
    x: x + 0.18, y: y + 0.80, w: bw - 0.36, h: 0.5,
    fontSize: 9, fontFace: FONT, color: TEXT2,
    margin: 0, wrap: true
  });
  // Stat
  slide.addText(stat, {
    x: x + 0.18, y: bh + y - 0.45, w: bw - 0.36, h: 0.32,
    fontSize: 13, fontFace: FONT, color: accentColor,
    bold: true, margin: 0
  });
}

// ─── Helper: skill column ────────────────────────────────────────────────────
function addSkillColumn(slide, x, y, cw, label, tags) {
  // Column header
  slide.addText(label, {
    x, y, w: cw, h: 0.30,
    fontSize: 11, fontFace: FONT, color: ACCENT,
    bold: true, margin: 0
  });
  // Accent underline
  slide.addShape("rect", {
    x, y: y + 0.30, w: 0.30, h: 0.025,
    fill: { color: ACCENT }, line: { color: ACCENT, width: 0 }
  });

  let tagY = y + 0.42;
  const tagH = 0.30;
  const tagPad = 0.06;
  const TAG_BG = "141414";
  let rowX = x;
  const maxRowW = cw - 0.05;

  // Simple approach: stack tags as pills
  for (const tag of tags) {
    // Approximate tag width based on character count
    const tagW = Math.min(Math.max(tag.length * 0.115 + 0.24, 0.8), maxRowW);
    if (rowX + tagW > x + maxRowW) {
      rowX = x;
      tagY += tagH + tagPad;
    }
    slide.addShape("rect", {
      x: rowX, y: tagY, w: tagW, h: tagH,
      fill: { color: TAG_BG },
      line: { color: "222222", width: 1 }
    });
    slide.addText(tag, {
      x: rowX, y: tagY, w: tagW, h: tagH,
      fontSize: 8.5, fontFace: FONT, color: TEXT2,
      align: "center", valign: "middle", margin: 0
    });
    rowX += tagW + 0.06;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// BUILD PRESENTATION
// ═══════════════════════════════════════════════════════════════════════════
async function build() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE";  // 13.33" × 7.5"
  pres.title  = "刘威 · GTM产品经理作品集";
  pres.author = "Liu Wei";

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 1 — COVER
  // ─────────────────────────────────────────────────────────────────────────
  {
    const s = pres.addSlide();
    s.background = { color: BG };
    addAccentBar(s);

    // Decorative large blue circle (background glow effect)
    s.addShape("ellipse", {
      x: 8.5, y: -1.5, w: 7, h: 7,
      fill: { color: "0d2a6e", transparency: 70 },
      line: { color: "0d2a6e", width: 0 }
    });
    s.addShape("ellipse", {
      x: 9.5, y: -0.8, w: 5, h: 5,
      fill: { color: ACCENT, transparency: 88 },
      line: { color: ACCENT, width: 0 }
    });

    // Vertical decorative line
    s.addShape("rect", {
      x: LM + 0.02, y: 1.4, w: 0.008, h: 2.2,
      fill: { color: ACCENT }, line: { color: ACCENT, width: 0 }
    });

    // Main title 刘威
    s.addText("刘威", {
      x: LM + 0.25, y: 1.1, w: 6, h: 1.5,
      fontSize: 72, fontFace: FONT, color: TEXT,
      bold: true, margin: 0
    });

    // Subtitle LIU WEI
    s.addText("LIU WEI", {
      x: LM + 0.25, y: 2.5, w: 5, h: 0.45,
      fontSize: 18, fontFace: FONT, color: TEXT2,
      charSpacing: 8, margin: 0
    });

    // Tag line
    s.addText("Product Manager  ·  GTM Expert", {
      x: LM + 0.25, y: 3.0, w: 7, h: 0.38,
      fontSize: 14, fontFace: FONT, color: ACCENT,
      margin: 0
    });

    // Horizontal divider
    s.addShape("rect", {
      x: LM + 0.25, y: 3.55, w: 5.5, h: 0.015,
      fill: { color: "222222" }, line: { color: "222222", width: 0 }
    });

    // Stats row
    const stats = [
      { val: "9年", label: "工作经验" },
      { val: "¥10亿+", label: "冈本累计销售额" },
      { val: "30+款", label: "成功上市产品" },
      { val: "N1", label: "日语级别" }
    ];
    const statStartX = LM + 0.25;
    const statColW = 2.8;
    stats.forEach((st, i) => {
      const sx = statStartX + i * statColW;
      s.addText(st.val, {
        x: sx, y: 3.72, w: statColW - 0.1, h: 0.45,
        fontSize: 20, fontFace: FONT, color: ACCENT,
        bold: true, margin: 0
      });
      s.addText(st.label, {
        x: sx, y: 4.18, w: statColW - 0.1, h: 0.25,
        fontSize: 9, fontFace: FONT, color: TEXT2,
        margin: 0
      });
    });

    // Bottom contact bar
    s.addShape("rect", {
      x: 0, y: H - 0.6, w: W, h: 0.6,
      fill: { color: "0a0a0a" },
      line: { color: "111111", width: 0 }
    });
    s.addText("深圳  ·  13810359882  ·  89408048@qq.com", {
      x: LM, y: H - 0.55, w: W - LM - 0.3, h: 0.5,
      fontSize: 11, fontFace: FONT, color: TEXT2,
      margin: 0, valign: "middle"
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 2 — 关于我
  // ─────────────────────────────────────────────────────────────────────────
  {
    const s = pres.addSlide();
    s.background = { color: BG };
    addAccentBar(s);

    addSectionLabel(s, "关于我  /  About", 0.28);

    // Headline
    s.addText("从产品概念到市场爆款", {
      x: LM, y: 0.56, w: W - LM - 0.3, h: 0.7,
      fontSize: 32, fontFace: FONT, color: TEXT,
      bold: true, margin: 0
    });

    addRule(s, 1.30);

    // Bio
    const bio = "拥有9年消费品产品开发与GTM上市经验，专注于成人健康、功能食品、日化等多品类。曾主导冈本品牌避孕套、情趣玩具、润滑液等多款超级爆品，冈本业务线累计销售额超10亿元+。日语N1，深谙中日供应链运营。";
    s.addText(bio, {
      x: LM, y: 1.42, w: W * 0.6, h: 1.0,
      fontSize: 11.5, fontFace: FONT, color: TEXT2,
      margin: 0, wrap: true, lineSpacingMultiple: 1.5
    });

    // 4 highlight boxes
    const boxes = ["GTM战略", "供应链", "数据洞察", "跨文化"];
    const boxColors = [ACCENT, "1d4ed8", "1e40af", "1e3a8a"];
    const bW = 2.5, bH = 0.9, bY = 2.6, bGap = 0.2;
    boxes.forEach((b, i) => {
      const bx = LM + i * (bW + bGap);
      s.addShape("rect", {
        x: bx, y: bY, w: bW, h: bH,
        fill: { color: boxColors[i], transparency: 80 },
        line: { color: ACCENT, width: 1 }
      });
      // Left accent stripe
      s.addShape("rect", {
        x: bx, y: bY, w: 0.04, h: bH,
        fill: { color: ACCENT }, line: { color: ACCENT, width: 0 }
      });
      s.addText(b, {
        x: bx + 0.1, y: bY, w: bW - 0.1, h: bH,
        fontSize: 14, fontFace: FONT, color: TEXT,
        bold: true, align: "center", valign: "middle", margin: 0
      });
    });

    // Education section
    addRule(s, 3.72);
    addSectionLabel(s, "教育背景  /  Education", 3.84);

    s.addShape("rect", {
      x: LM, y: 4.10, w: 0.04, h: 0.7,
      fill: { color: ACCENT }, line: { color: ACCENT, width: 0 }
    });
    s.addText("广岛修道大学", {
      x: LM + 0.15, y: 4.10, w: 5, h: 0.34,
      fontSize: 14, fontFace: FONT, color: TEXT,
      bold: true, margin: 0
    });
    s.addText("経済学部  ·  经济学部  ·  日本留学7年", {
      x: LM + 0.15, y: 4.45, w: 6, h: 0.28,
      fontSize: 10, fontFace: FONT, color: TEXT2,
      margin: 0
    });

    // Right side decorative element — vertical stat
    s.addShape("rect", {
      x: W - 3.2, y: 0.5, w: 2.8, h: 4.6,
      fill: { color: "0c0c0c" },
      line: { color: "181818", width: 1 }
    });
    const rightStats = [
      { n: "9年", d: "行业经验" },
      { n: "¥10亿+", d: "冈本业务销售额" },
      { n: "30+", d: "成功上市产品" },
      { n: "N1", d: "日语能力认证" }
    ];
    rightStats.forEach((rs, i) => {
      const ry = 0.65 + i * 1.1;
      s.addText(rs.n, {
        x: W - 3.0, y: ry, w: 2.5, h: 0.52,
        fontSize: 26, fontFace: FONT, color: ACCENT,
        bold: true, align: "center", margin: 0
      });
      s.addText(rs.d, {
        x: W - 3.0, y: ry + 0.52, w: 2.5, h: 0.24,
        fontSize: 9, fontFace: FONT, color: TEXT2,
        align: "center", margin: 0
      });
      if (i < rightStats.length - 1) {
        s.addShape("rect", {
          x: W - 2.8, y: ry + 0.82, w: 2.0, h: 0.01,
          fill: { color: "1e1e1e" }, line: { color: "1e1e1e", width: 0 }
        });
      }
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 3 — 工作经历
  // ─────────────────────────────────────────────────────────────────────────
  {
    const s = pres.addSlide();
    s.background = { color: BG };
    addAccentBar(s);

    addSectionLabel(s, "工作经历  /  Experience", 0.28);
    s.addText("职业经历", {
      x: LM, y: 0.55, w: 5, h: 0.5,
      fontSize: 26, fontFace: FONT, color: TEXT,
      bold: true, margin: 0
    });

    const jobs = [
      {
        co: "广州虎牙信息科技",
        title: "产品经理",
        period: "2025.07 — 至今",
        loc: "深圳·南山区",
        bullets: [
          "负责新业务线成人用品类目市场调研，完成行业研究报告",
          "主导搭建供应商管理体系，建立分级管理的优质供应商资源池",
          "规划并实施平台化运营方案，推进自有品牌建设",
          "成功签约头部主播开展直播电商带货合作"
        ]
      },
      {
        co: "有偶健康科技（深圳）",
        title: "产品负责人",
        period: "2024.08 — 2025.03",
        loc: "深圳",
        bullets: [
          "主导完成5个核心商标注册，构建商标防御体系",
          "建立竞品三维分析模型，完成20+竞品技术参数拆解",
          "主导供应链0→1搭建，完成12家核心供应商准入审核",
          "推动延时喷剂/避孕套产品线按期上市，完成药监局广告审核"
        ]
      },
      {
        co: "深圳市万生堂实业",
        title: "冈本产品开发负责人",
        period: "2019.08 — 2024.08",
        loc: "深圳·福田区",
        bullets: [
          "主导冈本避孕套超级爆品开发：冰粒粒、滑粒粒、超薄粉润、003东京限定款、003玻尿酸、黄金超薄等，累计销售额10亿元+",
          "主导情趣玩具爆款矩阵：山重奏震动棒、小雨滴跳蛋、独乐丸等，累计2000万元+",
          "主导润滑液产品线：003玻尿酸小粉条、风火山林润滑液（「火」销量10万支+），累计500万元+",
          "主导功能食品、日化、保健品多品类GTM全链路，成功落地3个品类进口自有品牌"
        ]
      },
      {
        co: "东西贸易（上海浦东新区）",
        title: "大客户销售经理",
        period: "2017.03 — 2019.08",
        loc: "北京",
        bullets: [
          "主营功率半导体碳化硅外延片、酚醛树脂等B2B销售",
          "2018年度个人负责业务总销售额276万美元",
          "2019年1-5月业务销售额418万美元",
          "陪同日方客户参加商务会谈，负责商务翻译及谈判"
        ]
      }
    ];

    // Timeline vertical line
    const tlX = LM + 0.18;
    s.addShape("rect", {
      x: tlX, y: 1.12, w: 0.015, h: 5.8,
      fill: { color: "1e1e1e" }, line: { color: "1e1e1e", width: 0 }
    });

    // Two-column layout
    const col1X = LM + 0.55;
    const col2X = W / 2 + 0.1;
    const colW  = W / 2 - 0.8;

    const positions = [
      { x: col1X, y: 1.15 },
      { x: col2X, y: 1.15 },
      { x: col1X, y: 4.1  },
      { x: col2X, y: 4.1  }
    ];

    jobs.forEach((job, i) => {
      const { x, y } = positions[i];
      const dotX = (x === col1X) ? tlX - 0.005 : col2X - 0.36;

      // Timeline dot
      s.addShape("ellipse", {
        x: dotX, y: y + 0.08, w: 0.13, h: 0.13,
        fill: { color: ACCENT }, line: { color: ACCENT, width: 0 }
      });

      // Company name
      s.addText(job.co, {
        x, y, w: colW, h: 0.28,
        fontSize: 11, fontFace: FONT, color: ACCENT,
        bold: true, margin: 0
      });
      // Title + period
      s.addText(`${job.title}  ·  ${job.period}  ·  ${job.loc}`, {
        x, y: y + 0.28, w: colW, h: 0.22,
        fontSize: 8.5, fontFace: FONT, color: TEXT2,
        margin: 0
      });

      // Divider
      s.addShape("rect", {
        x, y: y + 0.52, w: colW * 0.85, h: 0.01,
        fill: { color: "1e1e1e" }, line: { color: "1e1e1e", width: 0 }
      });

      // Bullets as rich text array
      const bulletItems = job.bullets.map((b, bi) => ({
        text: b,
        options: {
          bullet: { type: "bullet", indent: 5 },
          breakLine: bi < job.bullets.length - 1,
          fontSize: 9,
          fontFace: FONT,
          color: TEXT2,
          paraSpaceAfter: 3
        }
      }));

      s.addText(bulletItems, {
        x, y: y + 0.58, w: colW, h: 1.38,
        margin: 0, wrap: true
      });
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 4 — 项目作品集 Part 1 (冈本业务线)
  // ─────────────────────────────────────────────────────────────────────────
  {
    const s = pres.addSlide();
    s.background = { color: BG };
    addAccentBar(s);

    addSectionLabel(s, "项目作品集  /  Portfolio  ·  Part 1", 0.28);
    s.addText("冈本业务线", {
      x: LM, y: 0.55, w: 8, h: 0.5,
      fontSize: 26, fontFace: FONT, color: TEXT,
      bold: true, margin: 0
    });

    const bW = (W - LM - 0.3 - 0.4) / 3;
    const bH = 5.5;
    const bY = 1.22;
    const gap = 0.2;

    addProjectBox(s,
      LM,           bY, bW, bH, "818cf8",
      "冈本 × 避孕套",
      "超级爆品矩阵  ·  10亿级销售额",
      "冰粒粒  ·  滑粒粒  ·  超薄粉润\n003东京限定  ·  003玻尿酸  ·  黄金超薄",
      "累计销售额  ¥10亿+"
    );
    addProjectBox(s,
      LM + bW + gap, bY, bW, bH, "60a5fa",
      "冈本 × 情趣玩具",
      "震动棒  ·  跳蛋  ·  独乐系列",
      "山重奏震动棒\n小雨滴跳蛋  ·  独乐丸",
      "累计销售额  ¥2000万+"
    );
    addProjectBox(s,
      LM + (bW + gap) * 2, bY, bW, bH, "4ade80",
      "冈本 × 润滑液",
      "玻尿酸小粉条  ·  风火山林系列",
      "003玻尿酸小粉条\n风火山林润滑液",
      "累计销售额  ¥500万+"
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 5 — 项目作品集 Part 2 (其他品牌)
  // ─────────────────────────────────────────────────────────────────────────
  {
    const s = pres.addSlide();
    s.background = { color: BG };
    addAccentBar(s);

    addSectionLabel(s, "项目作品集  /  Portfolio  ·  Part 2", 0.28);
    s.addText("其他品牌", {
      x: LM, y: 0.55, w: 8, h: 0.5,
      fontSize: 26, fontFace: FONT, color: TEXT,
      bold: true, margin: 0
    });

    const bW = (W - LM - 0.3 - 0.4) / 3;
    const bH = 5.5;
    const bY = 1.22;
    const gap = 0.2;

    addProjectBox(s,
      LM,           bY, bW, bH, "38bdf8",
      "UZZE 优至",
      "生殖健康品牌0→1孵化",
      "延时喷剂  ·  避孕套套装",
      "成功完成药监局备案上市"
    );
    addProjectBox(s,
      LM + bW + gap, bY, bW, bH, "fbbf24",
      "Up X Code 保健品",
      "NMN9600  ·  男性保健系列",
      "跨境保健品上市项目",
      "新零售渠道成功销售"
    );
    addProjectBox(s,
      LM + (bW + gap) * 2, bY, bW, bH, "34d399",
      "日本日化 OEM",
      "日本供应链全链路管理",
      "化妆品  ·  口腔  ·  健康品",
      "成功落地3个品类进口品牌"
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 6 — 专业技能
  // ─────────────────────────────────────────────────────────────────────────
  {
    const s = pres.addSlide();
    s.background = { color: BG };
    addAccentBar(s);

    addSectionLabel(s, "专业技能  /  Skills", 0.28);
    s.addText("核心能力", {
      x: LM, y: 0.55, w: 6, h: 0.5,
      fontSize: 26, fontFace: FONT, color: TEXT,
      bold: true, margin: 0
    });

    addRule(s, 1.15);

    const colW = (W - LM - 0.3 - 0.6) / 3;
    const colGap = 0.3;

    addSkillColumn(s, LM, 1.30, colW, "产品管理",
      ["GTM战略规划", "产品生命周期管理", "新品上市管理", "产品提案", "竞品分析", "用户调研"]);

    addSkillColumn(s, LM + colW + colGap, 1.30, colW, "供应链",
      ["OEM供应商寻源", "供应商管理体系", "日本供应链", "质量标准制定", "成本谈判", "交付管理"]);

    addSkillColumn(s, LM + (colW + colGap) * 2, 1.30, colW, "品牌营销",
      ["品牌建设", "市场传播策略", "内容营销", "数字营销", "销售赋能", "竞争情报"]);

    // Bottom info section
    addRule(s, 5.55);

    s.addText("行业领域", {
      x: LM, y: 5.68, w: 1.0, h: 0.24,
      fontSize: 9, fontFace: FONT, color: ACCENT,
      bold: true, margin: 0
    });
    s.addText("成人用品/两性健康  ·  功能食品/保健品  ·  化妆品/日化  ·  医疗器械  ·  快消品", {
      x: LM + 1.05, y: 5.68, w: W - LM - 1.2, h: 0.24,
      fontSize: 9, fontFace: FONT, color: TEXT2,
      margin: 0
    });

    s.addText("语言能力", {
      x: LM, y: 6.02, w: 1.0, h: 0.24,
      fontSize: 9, fontFace: FONT, color: ACCENT,
      bold: true, margin: 0
    });
    s.addText("日语N1（商务洽谈）  ·  普通话（母语）  ·  英语（基础沟通）", {
      x: LM + 1.05, y: 6.02, w: W - LM - 1.2, h: 0.24,
      fontSize: 9, fontFace: FONT, color: TEXT2,
      margin: 0
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // SLIDE 7 — 联系方式
  // ─────────────────────────────────────────────────────────────────────────
  {
    const s = pres.addSlide();
    s.background = { color: BG };
    addAccentBar(s);

    // Decorative glow
    s.addShape("ellipse", {
      x: 7, y: 1, w: 8, h: 8,
      fill: { color: ACCENT, transparency: 92 },
      line: { color: ACCENT, width: 0 }
    });

    addSectionLabel(s, "联系方式  /  Contact", 0.28);

    // Headline
    s.addText("期待合作  ·  共创爆款", {
      x: LM, y: 0.8, w: 8, h: 0.85,
      fontSize: 38, fontFace: FONT, color: TEXT,
      bold: true, margin: 0
    });

    // Status badge
    s.addShape("rect", {
      x: LM, y: 1.82, w: 2.2, h: 0.38,
      fill: { color: "052e16" },
      line: { color: "16a34a", width: 1 }
    });
    // Green dot
    s.addShape("ellipse", {
      x: LM + 0.12, y: 1.97, w: 0.12, h: 0.12,
      fill: { color: "22c55e" }, line: { color: "22c55e", width: 0 }
    });
    s.addText("在职，急寻新机会", {
      x: LM + 0.32, y: 1.82, w: 1.82, h: 0.38,
      fontSize: 10, fontFace: FONT, color: "22c55e",
      valign: "middle", margin: 0
    });

    // Horizontal rule
    addRule(s, 2.38);

    // Contact items
    const contacts = [
      { icon: "电话", val: "13810359882" },
      { icon: "邮箱", val: "89408048@qq.com" },
      { icon: "微信", val: "13810359882" },
      { icon: "城市", val: "深圳" }
    ];

    contacts.forEach((c, i) => {
      const cy = 2.55 + i * 0.78;

      // Icon label box
      s.addShape("rect", {
        x: LM, y: cy, w: 0.7, h: 0.38,
        fill: { color: "0d1f4c" },
        line: { color: ACCENT, width: 1 }
      });
      s.addText(c.icon, {
        x: LM, y: cy, w: 0.7, h: 0.38,
        fontSize: 9, fontFace: FONT, color: ACCENT,
        align: "center", valign: "middle", bold: true, margin: 0
      });

      // Value
      s.addText(c.val, {
        x: LM + 0.82, y: cy, w: 5, h: 0.38,
        fontSize: 16, fontFace: FONT, color: TEXT,
        valign: "middle", margin: 0
      });
    });

    // Right side: large decorative stat
    s.addShape("rect", {
      x: W - 4.0, y: 0.8, w: 3.6, h: 5.8,
      fill: { color: "0c0c0c" },
      line: { color: "181818", width: 1 }
    });
    s.addText("¥10亿+", {
      x: W - 3.9, y: 1.3, w: 3.4, h: 1.2,
      fontSize: 40, fontFace: FONT, color: ACCENT,
      bold: true, align: "center", margin: 0
    });
    s.addText("冈本业务线累计销售额", {
      x: W - 3.9, y: 2.5, w: 3.4, h: 0.3,
      fontSize: 10, fontFace: FONT, color: TEXT2,
      align: "center", margin: 0
    });
    s.addShape("rect", {
      x: W - 3.4, y: 2.95, w: 2.4, h: 0.015,
      fill: { color: "1e1e1e" }, line: { color: "1e1e1e", width: 0 }
    });
    s.addText("9年", {
      x: W - 3.9, y: 3.15, w: 3.4, h: 0.8,
      fontSize: 36, fontFace: FONT, color: TEXT,
      bold: true, align: "center", margin: 0
    });
    s.addText("行业深耕", {
      x: W - 3.9, y: 3.95, w: 3.4, h: 0.28,
      fontSize: 10, fontFace: FONT, color: TEXT2,
      align: "center", margin: 0
    });
    s.addShape("rect", {
      x: W - 3.4, y: 4.38, w: 2.4, h: 0.015,
      fill: { color: "1e1e1e" }, line: { color: "1e1e1e", width: 0 }
    });
    s.addText("30+款", {
      x: W - 3.9, y: 4.55, w: 3.4, h: 0.8,
      fontSize: 34, fontFace: FONT, color: TEXT,
      bold: true, align: "center", margin: 0
    });
    s.addText("成功上市产品", {
      x: W - 3.9, y: 5.35, w: 3.4, h: 0.28,
      fontSize: 10, fontFace: FONT, color: TEXT2,
      align: "center", margin: 0
    });

    // Bottom bar
    s.addShape("rect", {
      x: 0, y: H - 0.5, w: W, h: 0.5,
      fill: { color: "050505" },
      line: { color: "111111", width: 0 }
    });
    s.addText("刘威  ·  GTM产品经理  ·  深圳", {
      x: LM, y: H - 0.45, w: W - LM - 0.3, h: 0.4,
      fontSize: 9, fontFace: FONT, color: TEXT3,
      margin: 0, valign: "middle"
    });
  }

  // ─── Write file ───────────────────────────────────────────────────────────
  const outPath = "/Users/liuwei/projects/liu-wei-portfolio/刘威作品集.pptx";
  await pres.writeFile({ fileName: outPath });
  console.log("✅  Saved:", outPath);
}

build().catch(err => { console.error(err); process.exit(1); });
