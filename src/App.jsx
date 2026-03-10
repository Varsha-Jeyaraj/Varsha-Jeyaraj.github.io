import { useState, useEffect } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const tokens = [
  "Python",
  "React",
  "AI/ML",
  "Research",
  "Node.js",
  "LangChain",
  "MongoDB",
  "RAG",
  "Full-Stack",
  "LLMs",
  "REST API",
  "IEEE",
  "Tamil NLP",
  "IoT",
  "Git",
  "SQL",
];

const typewriterPhrases = [
  "Building Intelligent Software Solutions",
  "Exploring AI, ML & Full-Stack Development",
  "Turning Research into Real-World Impact",
  "Passionate about Technology & Problem Solving",
];

const skills = {
  Languages: ["Python", "Java", "JavaScript", "PHP", "Perl", "Matlab"],
  "AI / NLP": ["LangChain", "ChromaDB", "RAG", "LLMs", "Unsloth"],
  Web: ["React JS", "Node.js", "HTML5", "CSS", "Tailwind"],
  Databases: ["MongoDB", "MariaDB", "PostgreSQL", "SQLite"],
  "Tools & IDEs": ["Visual Studio Code", "Adobe Photoshop"],
  "Soft Skills": [
    "Teamwork",
    "Leadership",
    "Communication",
    "Problem-solving",
    "Creativity",
    "Attention to Detail",
  ],
};

const education = [
  {
    program: "BSc Hons in Computer Science",
    institute: "University of Jaffna",
    period: "Nov 2022 - Present",
    details: ["Fourth-year undergraduate", "Overall GPA: 3.82 (73/120 credits)"],
  },
  {
    program: "HEQ Professional Graduate Diploma in IT",
    institute: "British Computer Society",
    period: "Oct 2021 - Apr 2024",
    details: [
      "Advanced DBMS, Software Engineering, Web Engineering, MIS",
    ],
  },
  {
    program: "HEQ Diploma in IT",
    institute: "British Computer Society",
    period: "May 2021 - Apr 2024",
    details: ["Database Systems, IT Project Management, Big Data"],
  },
  {
    program: "HEQ Certificate in IT",
    institute: "British Computer Society",
    period: "Jan 2021 - May 2021",
    details: ["Information Systems, Networking, Software Development"],
  },
];

const workExperience = [
  {
    role: "Smart Devices and IoT Practical Assistant (Part-Time)",
    org: "Department of Computer Science, University of Jaffna",
    period: "Feb 2026 - Present",
    desc: "Supports laboratory and practical sessions for the Smart Devices and IoT Certificate Course.",
  },
  {
    role: "Online Math Tutor (Part-Time)",
    org: "Third Space Global",
    period: "Feb 2024 - Jul 2025",
    desc: "Conducted online mathematics tutoring for UK primary/secondary and US primary students.",
  },
  {
    role: "Online Math Tutor (Part-Time)",
    org: "Global EdTech Company",
    period: "Jan 2022 - Jun 2023",
    desc: "Conducted online tutoring for US students (Grades 3-6).",
  },
];

const certifications = [
  "Fundamentals of Accelerated Data Science - NVIDIA (Dec 2025)",
  "Power BI Workshop Series - Data Bank Management Academy, USJ (Jul 2022)",
  "Python for Beginners - SkillUp (Simplilearn) (Jan 2022)",
  "Introduction to Python - DataCamp (Nov 2021)",
  "Data Science for Everyone - DataCamp (Nov 2021)",
];

const hackathons = [
  "IEEEXtreme 19.0",
  "<CodeStorm 2.0> - Yarl IT Hub",
  "IEEEXtreme 18.0",
  "IEEEXtreme 17.0",
];

const profileLinks = [
  {
    label: "Email",
    value: "varshajeyaraj@gmail.com",
    href: "mailto:varshajeyaraj@gmail.com",
  },
  {
    label: "GitHub",
    value: "Varsha-Jeyaraj",
    href: "https://github.com/Varsha-Jeyaraj",
  },
  {
    label: "LinkedIn",
    value: "varsha-jeyarajalingam",
    href: "https://linkedin.com/in/varsha-jeyarajalingam",
  },
  {
    label: "Medium",
    value: "@varshajeyaraj",
    href: "https://medium.com/@varshajeyaraj",
  },
  {
    label: "Scholar",
    value: "Google Scholar",
    href: "https://scholar.google.com/scholar?q=Varsha+Jeyarajalingam",
  },
];



const publications = [
  {
    title: "From Phonemes to Meaning: Evaluating LLMs on Tamil",
    venue: "CHiPSAL @ LREC 2026",
    status: "Submitted",
    desc: "Introduces ILAKKANAM — a Tamil linguistic benchmark curated from Sri Lankan school exams, evaluating LLMs across phonetic, morphological, syntactic, and semantic levels.",
    link: "https://arxiv.org/abs/2511.12387",
    tags: ["Tamil NLP", "Benchmarking", "LLMs"],
  },
  {
    title:
      "Perplexity-based Evaluation of Open-Source LLM Adaptation for Tamil",
    venue: "SLSWCS 2025",
    status: "Oral Presentation",
    desc: "Studies adaptation of open-source LLMs for Tamil via Unsloth-based continued pretraining and evaluates performance using perplexity metrics.",
    tags: ["LLM Adaptation", "Tamil", "Perplexity"],
  },
  {
    title: "Global PIQA: Physical Commonsense Reasoning Across 100+ Languages",
    venue: "arXiv 2025",
    status: "Contributor",
    desc: "Contributed to the Tamil dataset for the Global PIQA benchmark evaluating physical commonsense reasoning.",
    link: "https://arxiv.org/abs/2510.24081",
    tags: ["Multilingual", "Commonsense", "Tamil"],
  },
];

const researchProjects = [
  {
    name: "Linguistically-Aware Small Language Model for Tamil",
    type: "Research • Ongoing",
    desc: "Final-year undergraduate research. Developing a linguistically-aware SLM aimed at improving NLP performance for the Tamil language.",
    tech: ["LLM", "Tamil NLP", "SLM"],
    color: "#00c9a7",
  },
];

const softwareProjects = [
  {
    name: "Examination Claim System",
    type: "Team Lead • Backend Developer",
    desc: "Streamlined exam-claim payment workflows for lecturers involved in paper setting, moderation, marking, and conducting examinations.",
    tech: ["HTML5", "CSS", "JavaScript", "MariaDB", "PHP"],
    color: "#f06b4a",
  },
  {
    name: "Personalised AI Math Assistant",
    type: "Individual • Ongoing",
    desc: "RAG-based personalised AI assistant helping students prepare for math exams. Uses vector search over problem sets.",
    tech: ["Python", "LangChain", "ChromaDB", "Flask", "PostgreSQL"],
    color: "#e05c8a",
  },
  {
    name: "Mathavam — Neuro-Developmental Disorders System",
    type: "Team Lead • Full Stack",
    desc: "Digitized medical assessments, appointment scheduling, QR attendance, and a RAG-powered knowledge chatbot.",
    tech: ["React", "Node.js", "MongoDB", "RAG"],
    color: "#8b6cf7",
  },
  {
    name: "Agent-Based Centralised File Deletion System",
    type: "Team Lead • Ongoing",
    desc: "Master–client architecture over LAN with cross-platform support for automating file removal during practical exams.",
    tech: ["Python", "LangChain", "SQLite", "Agents"],
    color: "#d4a017",
  },
  {
    name: "IoT-based Gate Control System",
    type: "Developer",
    desc: "React Native app for secure vehicle entry with WSS-secured MQTT for real-time access control.",
    tech: ["React Native", "MQTT", "WSS", "IoT"],
    color: "#2196c4",
  },
];

const awards = [
  {
    title: "Best Team — Tamil Language Model",
    event: "iCIIT Conclave 2025 (Shared Task 3.0)",
    year: "Aug 2025",
  },
  {
    title: "1st Runner-up — Codestorm AI",
    event: "YGC Innovation Festival, Yarl IT Hub",
    year: "Aug 2025",
  },
  {
    title: "Platinum Darrel Chong Activity Award",
    event: "IEEE SAC Awards 2025",
    year: "2025",
  },
  {
    title: "Outstanding Student Branch Affinity Group",
    event: "IEEE Region 10 Awards 2025",
    year: "2025",
  },
  {
    title: "Emerging Affinity Group Award",
    event: "IEEE Sri Lanka Section Awards 2024",
    year: "2024",
  },
  {
    title: "IEEE R10 WIE DEI Grant 2024",
    event: "Secured as IEEE WIE Chairperson",
    year: "2024",
  },
];

const volunteering = [
  {
    role: "Contributor",
    org: "PyTorch Sri Lanka Community",
    period: "Dec 2025 – Present",
    desc: "Contributing to the local PyTorch open-source and knowledge-sharing community.",
    icon: "🔥",
    category: "Technical",
  },
  {
    role: "Content Writer",
    org: "IEEE Sri Lanka Section Editorial Committee",
    period: "Jul 2025 – Jan 2026",
    desc: "Produced editorial content for the IEEE Sri Lanka Section, covering events, research highlights, and member stories.",
    icon: "✍️",
    category: "IEEE",
  },
  {
    role: "University Ambassador",
    org: "SLASSCOM Women Technopreneurs Forum",
    period: "Jun 2025 – Present",
    desc: "Representing the University of Jaffna and promoting women in tech and entrepreneurship initiatives.",
    icon: "🌐",
    category: "Leadership",
  },
  {
    role: "Chairperson",
    org: "IEEE WIE Student Branch Affinity Group, University of Jaffna",
    period: "Jan 2024 – Feb 2025",
    desc: "Led the WIE affinity group, secured the IEEE R10 WIE DEI Grant 2024, and drove initiatives that earned multiple IEEE regional and global awards.",
    icon: "👑",
    category: "IEEE",
    highlights: [
      "Platinum Darrel Chong Activity Award — IEEE SAC 2025",
      "Outstanding Student Branch Affinity Group — IEEE Region 10 2025",
      "Emerging Affinity Group Award — IEEE Sri Lanka Section 2024",
    ],
  },
  {
    role: "Vice President",
    org: "Computer Society, University of Jaffna",
    period: "Jan 2024 – Feb 2025",
    desc: "Coordinated society activities, hackathons, and technical workshops for the student community.",
    icon: "💻",
    category: "Leadership",
  },
  {
    role: "Secretary & Editorial Team Lead",
    org: "IEEE Student Branch, University of Jaffna",
    period: "Jan 2023 – Jan 2024",
    desc: "Managed branch communications and led the editorial team for newsletters and event coverage.",
    icon: "📋",
    category: "IEEE",
  },
  {
    role: "Awards & Recognition Team Member",
    org: "IEEE Computer Society Sri Lanka Chapter — SAC 2023/24",
    period: "Jul 2023 – May 2024",
    desc: "Evaluated and coordinated recognition processes for student activities across the chapter.",
    icon: "🏅",
    category: "IEEE",
  },
  {
    role: "IEEE Day Ambassador",
    org: "IEEE Student Branch, University of Jaffna",
    period: "Aug – Dec 2023",
    desc: "Organised and promoted IEEE Day celebrations at branch level.",
    icon: "📡",
    category: "IEEE",
  },
  {
    role: "IEEEXtreme 17.0 Secretary Team Lead",
    org: "IEEE Student Branch, University of Jaffna",
    period: "Oct 2023",
    desc: "Coordinated logistics and team management for the IEEEXtreme 17.0 programming competition.",
    icon: "🏆",
    category: "Technical",
  },
  {
    role: "Senior Prefect",
    org: "C/Hindu Ladies' College",
    period: "2018 – 2019",
    desc: "Served in student leadership, maintaining discipline and organising school-level events.",
    icon: "🎓",
    category: "Leadership",
  },
  {
    role: "Girl Guide",
    org: "C/Hindu Ladies' College",
    period: "2013 – 2018",
    desc: "Five years of active guiding — developing teamwork, community service, and leadership skills.",
    icon: "⚜️",
    category: "Leadership",
  },
  {
    role: "Junior Prefect",
    org: "C/Hindu Ladies' College",
    period: "2010",
    desc: "Early school leadership responsibility supporting discipline and student coordination.",
    icon: "📘",
    category: "Leadership",
  },
];

// ── Theme tokens ──────────────────────────────────────────────────────────────

const dark = {
  bg: "#080c10",
  bgCard: "rgba(255,255,255,0.025)",
  bgCardHover: "rgba(255,255,255,0.05)",
  bgNav: "rgba(8,12,16,0.88)",
  border: "rgba(255,255,255,0.08)",
  borderAccent: "rgba(0,204,160,0.22)",
  text: "#bfc8c8",
  textStrong: "#f0ece4",
  textMuted: "rgba(180,195,195,0.5)",
  accent: "#00ffcc",
  accentDim: "rgba(0,255,204,0.1)",
  accentGlow: "rgba(0,255,204,0.04)",
  accentLabel: "rgba(0,255,204,0.55)",
  accentToken: "rgba(0,255,204,0.07)",
  gridLine: "rgba(0,255,204,0.03)",
  orb1: "rgba(0,255,204,0.05)",
  orb2: "rgba(167,139,250,0.06)",
  navBorder: "rgba(0,255,204,0.1)",
  sectionLine: "rgba(0,255,204,0.3)",
  statLabel: "rgba(200,208,216,0.4)",
  tagBg: "rgba(0,255,204,0.05)",
  tagBorder: "rgba(0,255,204,0.18)",
  tagText: "rgba(0,255,204,0.65)",
  pubBorder: "rgba(0,255,204,0.12)",
  filterActiveBg: "rgba(0,255,204,0.12)",
};

const light = {
  bg: "#f2f5f1",
  bgCard: "rgba(255,255,255,0.9)",
  bgCardHover: "#ffffff",
  bgNav: "rgba(242,245,241,0.93)",
  border: "rgba(0,0,0,0.09)",
  borderAccent: "rgba(0,140,110,0.22)",
  text: "#38474a",
  textStrong: "#1a2828",
  textMuted: "rgba(40,65,60,0.5)",
  accent: "#007a5e",
  accentDim: "rgba(0,122,94,0.09)",
  accentGlow: "rgba(0,122,94,0.04)",
  accentLabel: "rgba(0,122,94,0.65)",
  accentToken: "rgba(0,122,94,0.07)",
  gridLine: "rgba(0,122,94,0.04)",
  orb1: "rgba(0,180,140,0.07)",
  orb2: "rgba(120,80,200,0.05)",
  navBorder: "rgba(0,140,110,0.14)",
  sectionLine: "rgba(0,140,110,0.28)",
  statLabel: "rgba(40,65,60,0.45)",
  tagBg: "rgba(0,122,94,0.07)",
  tagBorder: "rgba(0,122,94,0.2)",
  tagText: "rgba(0,100,76,0.8)",
  pubBorder: "rgba(0,122,94,0.14)",
  filterActiveBg: "rgba(0,122,94,0.1)",
};

// ── Sub-components ────────────────────────────────────────────────────────────

function TokenStream({ t }) {
  const [visible, setVisible] = useState([]);
  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      setVisible((prev) =>
        [
          ...prev,
          { token: tokens[i % tokens.length], id: Date.now() + i },
        ].slice(-12),
      );
      i++;
    }, 600);
    return () => clearInterval(iv);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        padding: "10px 0",
      }}
    >
      {visible.map((v, idx) => (
        <span
          key={v.id}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            padding: "3px 8px",
            borderRadius: "4px",
            background:
              idx === visible.length - 1 ? t.accentDim : t.accentToken,
            border: `1px solid ${idx === visible.length - 1 ? t.accent : t.borderAccent}`,
            color: idx === visible.length - 1 ? t.accent : t.accentLabel,
            transition: "all 0.4s ease",
            animation: "fadeIn 0.4s ease",
          }}
        >
          {v.token}
        </span>
      ))}
    </div>
  );
}

function Typewriter({ phrases, t }) {
  const [phrase, setPhrase] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const target = phrases[phrase];
    let timeout;
    if (!deleting && displayed.length < target.length)
      timeout = setTimeout(
        () => setDisplayed(target.slice(0, displayed.length + 1)),
        50,
      );
    else if (!deleting && displayed.length === target.length)
      timeout = setTimeout(() => setDeleting(true), 2200);
    else if (deleting && displayed.length > 0)
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
    else {
      setDeleting(false);
      setPhrase((phrase + 1) % phrases.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, phrase, phrases]);
  return (
    <span style={{ color: t.accent }}>
      {displayed}
      <span style={{ animation: "blink 1s infinite" }}>|</span>
    </span>
  );
}

function AttentionGrid({ t }) {
  const [weights, setWeights] = useState(() =>
    Array.from({ length: 6 }, () =>
      Array.from({ length: 6 }, () => Math.random()),
    ),
  );
  useEffect(() => {
    const iv = setInterval(
      () =>
        setWeights(
          Array.from({ length: 6 }, () =>
            Array.from({ length: 6 }, () => Math.random()),
          ),
        ),
      2000,
    );
    return () => clearInterval(iv);
  }, []);
  return (
    <div
      style={{
        display: "inline-grid",
        gridTemplateColumns: "repeat(6,1fr)",
        gap: "3px",
      }}
    >
      {weights.flat().map((w, i) => (
        <div
          key={i}
          style={{
            width: 18,
            height: 18,
            borderRadius: 2,
            background: `${t.accent}${Math.round(w * 200)
              .toString(16)
              .padStart(2, "0")}`,
            transition: "background 1.5s ease",
          }}
        />
      ))}
    </div>
  );
}

function Section({ id, title, children, t }) {
  return (
    <section id={id} style={{ marginBottom: "80px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "32px",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: t.accent,
            fontSize: "13px",
            opacity: 0.7,
          }}
        >
          #
        </span>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(22px, 3vw, 30px)",
            color: t.textStrong,
            margin: 0,
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h2>
        <div
          style={{
            flex: 1,
            height: "1px",
            background: `linear-gradient(to right, ${t.sectionLine}, transparent)`,
          }}
        />
      </div>
      {children}
    </section>
  );
}

function Card({ t, children, style = {}, onMouseEnter, onMouseLeave }) {
  return (
    <div
      style={{
        background: t.bgCard,
        border: `1px solid ${t.border}`,
        borderRadius: "10px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        transition: "all 0.25s",
        ...style,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}

// ── Volunteering Section ──────────────────────────────────────────────────────

function VolunteeringSection({ t }) {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "IEEE", "Leadership", "Technical"];
  const filtered =
    filter === "All"
      ? volunteering
      : volunteering.filter((v) => v.category === filter);

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "28px",
          flexWrap: "wrap",
        }}
      >
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            style={{
              padding: "5px 16px",
              borderRadius: "20px",
              border: `1px solid ${filter === c ? t.accent : t.border}`,
              background: filter === c ? t.filterActiveBg : "transparent",
              color: filter === c ? t.accent : t.textMuted,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              cursor: "pointer",
              letterSpacing: "0.06em",
              transition: "all 0.2s",
            }}
          >
            {c}
          </button>
        ))}
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: t.textMuted,
            marginLeft: "4px",
            alignSelf: "center",
          }}
        >
          {filtered.length} role{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {filtered.map((v, i) => (
          <div
            key={i}
            style={{
              padding: "20px 22px",
              background: t.bgCard,
              border: `1px solid ${t.border}`,
              borderRadius: "10px",
              borderLeft: `3px solid ${t.accent}`,
              transition: "all 0.25s",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = t.bgCardHover;
              e.currentTarget.style.transform = "translateX(3px)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.07)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = t.bgCard;
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span style={{ fontSize: "20px", lineHeight: 1 }}>
                  {v.icon}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: t.textStrong,
                      lineHeight: 1.2,
                    }}
                  >
                    {v.role}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: t.accent,
                      fontWeight: 500,
                      marginTop: "2px",
                    }}
                  >
                    {v.org}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    padding: "2px 8px",
                    borderRadius: "20px",
                    background: t.tagBg,
                    border: `1px solid ${t.tagBorder}`,
                    color: t.tagText,
                    letterSpacing: "0.05em",
                  }}
                >
                  {v.category}
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    color: t.textMuted,
                  }}
                >
                  {v.period}
                </span>
              </div>
            </div>

            <p
              style={{
                fontSize: "13px",
                color: t.text,
                lineHeight: 1.7,
                margin: v.highlights ? "0 0 10px" : "0",
                paddingLeft: "30px",
              }}
            >
              {v.desc}
            </p>

            {v.highlights && (
              <div
                style={{
                  paddingLeft: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                {v.highlights.map((h, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        color: t.accent,
                        fontSize: "10px",
                        marginTop: "4px",
                        flexShrink: 0,
                      }}
                    >
                      ▸
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: t.textMuted,
                        lineHeight: 1.5,
                      }}
                    >
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [activeNav, setActiveNav] = useState("home");
  const t = isDark ? dark : light;

  const navItems = [
    "home",
    "education",
    "experience",
    "research",
    "projects",
    "skills",
    "certifications",
    "hackathons",
    "awards",
    "volunteering",
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
  };

  return (
    <div
      style={{
        background: t.bg,
        minHeight: "100vh",
        color: t.text,
        fontFamily: "'DM Sans', sans-serif",
        transition: "background 0.35s, color 0.35s",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes fadeIn { from { opacity:0; transform:translateY(4px); } to { opacity:1; transform:translateY(0); } }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
        @keyframes pulse { 0%,100% { opacity:0.35; } 50% { opacity:1; } }
        * { box-sizing:border-box; }
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-thumb { background:${t.accent}55; border-radius:2px; }
        a { color:${t.accent}; text-decoration:none; }
        a:hover { opacity:0.75; }
      `}</style>

      {/* Background grid */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `linear-gradient(${t.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${t.gridLine} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          transition: "all 0.35s",
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "8%",
          left: "3%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${t.orb1} 0%, transparent 70%)`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "18%",
          right: "4%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${t.orb2} 0%, transparent 70%)`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Navbar ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 clamp(12px, 4vw, 48px)",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          background: t.bgNav,
          backdropFilter: "blur(14px)",
          borderBottom: `1px solid ${t.navBorder}`,
          transition: "background 0.35s, border-color 0.35s",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: t.accent,
            fontSize: "14px",
            fontWeight: 500,
            flexShrink: 0,
          }}
        >
          varsha<span style={{ opacity: 0.4 }}>@cs</span>
          <span style={{ animation: "blink 1s infinite" }}>_</span>
        </div>

        {/* Nav links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {navItems.map((n) => (
            <button
              key={n}
              onClick={() => scrollTo(n)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: activeNav === n ? t.accent : t.textMuted,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                padding: "4px 7px",
                borderBottom:
                  activeNav === n
                    ? `1px solid ${t.accent}`
                    : "1px solid transparent",
                transition: "all 0.2s",
              }}
            >
              {n}
            </button>
          ))}
        </div>

        {/* Theme toggle */}
        <button
          onClick={() => setIsDark((d) => !d)}
          style={{
            background: t.accentDim,
            border: `1px solid ${t.borderAccent}`,
            borderRadius: "20px",
            padding: "5px 12px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: t.accent,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.04em",
            flexShrink: 0,
            transition: "all 0.25s",
          }}
        >
          <span>{isDark ? "☀️" : "🌙"}</span>
          <span style={{ color: t.accentLabel }}>
            {isDark ? "light" : "dark"}
          </span>
        </button>
      </nav>

      {/* ── Main ── */}
      <main
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
          margin: "0 auto",
          padding: "120px clamp(16px, 5vw, 40px) 80px",
        }}
      >
        {/* Hero */}
        <section
          id="home"
          style={{
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "80px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: t.accent,
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                color: t.accentLabel,
                letterSpacing: "0.1em",
              }}
            >
              FINAL YEAR COMPUTER SCIENCE UNDERGRADUATE · University of Jaffna
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(42px, 7vw, 80px)",
              color: t.textStrong,
              margin: "0 0 8px",
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            Varsha
            <br />
            Jeyarajalingam
          </h1>

          <div
            style={{
              marginBottom: "22px",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {profileLinks.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "7px 12px",
                  borderRadius: "999px",
                  border: `1px solid ${t.borderAccent}`,
                  background: t.bgCard,
                  color: t.textStrong,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = t.bgCardHover;
                  e.currentTarget.style.borderColor = t.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = t.bgCard;
                  e.currentTarget.style.borderColor = t.borderAccent;
                }}
              >
                <span style={{ color: t.accentLabel }}>{p.label}</span>
                <span style={{ color: t.textStrong }}>{p.value}</span>
              </a>
            ))}
          </div>

          <div
            style={{
              marginBottom: "24px",
              fontSize: "clamp(16px, 2.5vw, 20px)",
              lineHeight: 1.4,
            }}
          >
            <Typewriter phrases={typewriterPhrases} t={t} />
          </div>

          <p
            style={{
              maxWidth: "560px",
              lineHeight: 1.85,
              color: t.textMuted,
              fontSize: "15px",
              marginBottom: "32px",
            }}
          >
            Final-year Computer Science undergraduate with hands-on experience
            in AI/ML, full-stack development, and research. I enjoy building
            things that matter — from intelligent systems to production-grade
            web applications. GPA 3.82 | Published Researcher | IEEE Leader.
          </p>

          <div style={{ marginBottom: "32px" }}>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: t.accentLabel,
                marginBottom: "8px",
                letterSpacing: "0.08em",
              }}
            >
              // SKILLS IN PROGRESS
            </p>
            <TokenStream t={t} />
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              {
                label: "Research",
                action: () => scrollTo("research"),
                filled: true,
              },
              {
                label: "Projects",
                action: () => scrollTo("projects"),
                filled: false,
              },
              {
                label: "GitHub →",
                action: () =>
                  window.open("https://github.com/Varsha-Jeyaraj", "_blank"),
                filled: false,
              },
            ].map((btn) => (
              <button
                key={btn.label}
                onClick={btn.action}
                style={{
                  padding: "10px 22px",
                  background: btn.filled ? t.accentDim : "transparent",
                  border: `1px solid ${t.borderAccent}`,
                  borderRadius: "6px",
                  color: t.accent,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  cursor: "pointer",
                  letterSpacing: "0.05em",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = t.accentDim;
                  e.target.style.borderColor = t.accent;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = btn.filled
                    ? t.accentDim
                    : "transparent";
                  e.target.style.borderColor = t.borderAccent;
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "48px",
              paddingTop: "32px",
              borderTop: `1px solid ${t.borderAccent}`,
              flexWrap: "wrap",
            }}
          >
            {[
              { n: "3.82", label: "GPA" },
              { n: "3", label: "Publications" },
              { n: "5+", label: "Hackathons" },
              { n: "6", label: "IEEE Roles" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "28px",
                    fontWeight: 800,
                    color: t.accent,
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    color: t.statLabel,
                    letterSpacing: "0.1em",
                    marginTop: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <Section id="education" title="Education" t={t}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {education.map((e, i) => (
              <div
                key={i}
                style={{
                  padding: "18px 20px",
                  background: t.bgCard,
                  border: `1px solid ${t.border}`,
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: "16px",
                        color: t.textStrong,
                      }}
                    >
                      {e.program}
                    </div>
                    <div style={{ fontSize: "13px", color: t.accent }}>{e.institute}</div>
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      color: t.textMuted,
                    }}
                  >
                    {e.period}
                  </div>
                </div>
                <div style={{ marginTop: "8px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {e.details.map((d) => (
                    <span
                      key={d}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "10px",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        background: t.tagBg,
                        border: `1px solid ${t.tagBorder}`,
                        color: t.tagText,
                      }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Work Experience" t={t}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {workExperience.map((w, i) => (
              <div
                key={i}
                style={{
                  padding: "18px 20px",
                  background: t.bgCard,
                  border: `1px solid ${t.border}`,
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: "15px",
                        color: t.textStrong,
                      }}
                    >
                      {w.role}
                    </div>
                    <div style={{ fontSize: "13px", color: t.accent }}>{w.org}</div>
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      color: t.textMuted,
                    }}
                  >
                    {w.period}
                  </div>
                </div>
                <p style={{ margin: "10px 0 0", fontSize: "13px", color: t.text, lineHeight: 1.7 }}>
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Research */}
        <Section id="research" title="Research & Publications" t={t}>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  color: t.accentLabel,
                  marginBottom: "8px",
                }}
              >
                // RESEARCH ACTIVITY (live)
              </p>
              <AttentionGrid t={t} />
            </div>
            <p
              style={{
                fontSize: "13px",
                color: t.textMuted,
                maxWidth: "280px",
                lineHeight: 1.6,
              }}
            >
              Research published, presented, and in progress.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              marginTop: "28px",
            }}
          >
            {publications.map((p, i) => (
              <div
                key={i}
                style={{
                  padding: "24px",
                  background: t.bgCard,
                  border: `1px solid ${t.pubBorder}`,
                  borderRadius: "10px",
                  borderLeft: `3px solid ${t.accent}`,
                  transition: "all 0.25s",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = t.bgCardHover;
                  e.currentTarget.style.transform = "translateX(2px)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 14px rgba(0,0,0,0.07)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = t.bgCard;
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow =
                    "0 1px 4px rgba(0,0,0,0.04)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginBottom: "10px",
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      padding: "2px 8px",
                      borderRadius: "3px",
                      letterSpacing: "0.06em",
                      background:
                        p.status === "Oral Presentation"
                          ? "rgba(139,108,247,0.12)"
                          : t.accentDim,
                      border: `1px solid ${p.status === "Oral Presentation" ? "rgba(139,108,247,0.3)" : t.borderAccent}`,
                      color:
                        p.status === "Oral Presentation" ? "#8b6cf7" : t.accent,
                    }}
                  >
                    {p.status}
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      color: t.textMuted,
                    }}
                  >
                    {p.venue}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: t.textStrong,
                    margin: "0 0 8px",
                    lineHeight: 1.3,
                  }}
                >
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: t.textStrong }}
                    >
                      {p.title} ↗
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: t.text,
                    lineHeight: 1.75,
                    margin: "0 0 12px",
                  }}
                >
                  {p.desc}
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "10px",
                        padding: "2px 6px",
                        borderRadius: "3px",
                        background: t.tagBg,
                        border: `1px solid ${t.tagBorder}`,
                        color: t.tagText,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "34px" }}>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: t.accentLabel,
                marginBottom: "12px",
                letterSpacing: "0.08em",
              }}
            >
              // RESEARCH PROJECTS
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
                gap: "16px",
              }}
            >
              {researchProjects.map((p, i) => (
                <div
                  key={i}
                  style={{
                    padding: "22px",
                    background: t.bgCard,
                    border: `1px solid ${t.border}`,
                    borderRadius: "10px",
                    borderTop: `2px solid ${p.color}`,
                    transition: "all 0.3s",
                    cursor: "default",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = t.bgCardHover;
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 22px rgba(0,0,0,0.09)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = t.bgCard;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 1px 4px rgba(0,0,0,0.04)";
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      color: t.textMuted,
                      marginBottom: "8px",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {p.type}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "15px",
                      color: t.textStrong,
                      margin: "0 0 10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: t.text,
                      lineHeight: 1.65,
                      margin: "0 0 14px",
                    }}
                  >
                    {p.desc}
                  </p>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {p.tech.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "10px",
                          padding: "2px 6px",
                          borderRadius: "3px",
                          background: `${p.color}18`,
                          border: `1px solid ${p.color}44`,
                          color: p.color,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Certifications */}
        <Section id="certifications" title="Certifications" t={t}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px" }}>
            {certifications.map((c) => (
              <div
                key={c}
                style={{
                  padding: "14px 16px",
                  background: t.bgCard,
                  border: `1px solid ${t.border}`,
                  borderRadius: "8px",
                  fontSize: "13px",
                  color: t.text,
                  lineHeight: 1.6,
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </Section>

        {/* Hackathons */}
        <Section id="hackathons" title="Hackathons" t={t}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {hackathons.map((h) => (
              <span
                key={h}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  background: t.tagBg,
                  border: `1px solid ${t.tagBorder}`,
                  color: t.tagText,
                }}
              >
                {h}
              </span>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Technical / Software Projects" t={t}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
              gap: "16px",
            }}
          >
            {softwareProjects.map((p, i) => (
              <div
                key={i}
                style={{
                  padding: "22px",
                  background: t.bgCard,
                  border: `1px solid ${t.border}`,
                  borderRadius: "10px",
                  borderTop: `2px solid ${p.color}`,
                  transition: "all 0.3s",
                  cursor: "default",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = t.bgCardHover;
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 22px rgba(0,0,0,0.09)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = t.bgCard;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 1px 4px rgba(0,0,0,0.04)";
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    color: t.textMuted,
                    marginBottom: "8px",
                    letterSpacing: "0.06em",
                  }}
                >
                  {p.type}
                </div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: t.textStrong,
                    margin: "0 0 10px",
                    lineHeight: 1.3,
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: t.text,
                    lineHeight: 1.65,
                    margin: "0 0 14px",
                  }}
                >
                  {p.desc}
                </p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {p.tech.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "10px",
                        padding: "2px 6px",
                        borderRadius: "3px",
                        background: `${p.color}18`,
                        border: `1px solid ${p.color}44`,
                        color: p.color,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills & Stack" t={t}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {Object.entries(skills).map(([cat, items]) => (
              <div
                key={cat}
                style={{
                  padding: "20px",
                  background: t.bgCard,
                  border: `1px solid ${t.border}`,
                  borderRadius: "10px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    color: t.accent,
                    letterSpacing: "0.1em",
                    marginBottom: "14px",
                    textTransform: "uppercase",
                  }}
                >
                  {cat}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {items.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: t.accent,
                          opacity: 0.55,
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: "13px", color: t.text }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "16px",
              padding: "20px",
              background: t.bgCard,
              border: `1px solid ${t.border}`,
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: t.accent,
                letterSpacing: "0.1em",
                marginBottom: "14px",
              }}
            >
              LANGUAGES
            </div>
            <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
              {[
                ["Tamil", "Native"],
                ["English", "Full Proficiency"],
                ["Sinhala", "Working"],
              ].map(([lang, level]) => (
                <div key={lang}>
                  <span
                    style={{
                      fontSize: "14px",
                      color: t.textStrong,
                      fontWeight: 500,
                    }}
                  >
                    {lang}
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      color: t.accentLabel,
                      marginLeft: "8px",
                    }}
                  >
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Awards */}
        <Section id="awards" title="Awards & Recognition" t={t}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {awards.map((a, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  padding: "16px 20px",
                  background: t.bgCard,
                  border: `1px solid ${t.border}`,
                  borderRadius: "8px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = t.borderAccent;
                  e.currentTarget.style.background = t.bgCardHover;
                  e.currentTarget.style.transform = "translateX(2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = t.border;
                  e.currentTarget.style.background = t.bgCard;
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    color: t.accentLabel,
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  {a.year}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: t.textStrong,
                      marginBottom: "3px",
                    }}
                  >
                    {a.title}
                  </div>
                  <div style={{ fontSize: "12px", color: t.textMuted }}>
                    {a.event}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Volunteering */}
        <Section id="volunteering" title="Volunteering & Leadership" t={t}>
          <VolunteeringSection t={t} />
        </Section>

      </main>

      <footer
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "24px",
          borderTop: `1px solid ${t.navBorder}`,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          color: t.textMuted,
          letterSpacing: "0.06em",
          transition: "border-color 0.35s",
        }}
      >
        varsha jeyarajalingam · built with tokens & attention · 2026
      </footer>
    </div>
  );
}
