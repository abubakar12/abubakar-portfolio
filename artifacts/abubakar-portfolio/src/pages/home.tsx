import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Download, Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import profilePic from "@assets/0_IMG_20250526_183014_1789733453748.jpg";
import cvPdf from "@assets/0_ai_engineer_1789733068372.pdf";

const email = "mailto:abubakarilyas624@gmail.com";
const linkedIn = "https://linkedin.com/in/abu-bakar-ilyas-72b261113/";
const github = "https://github.com/abubakar12";
const toptal = "https://www.toptal.com/developers/resume/abu-bakar-ilyas#gzgEbW";

const navigation = [
  { label: "Profile", href: "#profile" },
  { label: "Industries", href: "#industries" },
  { label: "Career", href: "#career" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

const domains = [
  { title: "Banking & insurance", copy: "Architected and shipped an agentic RAG compliance expert system with specialized LLMs, deployed in production for major U.S. banking and insurance customers.", context: "360factors" },
  { title: "Hospitality", copy: "Built Elsa, a full-duplex in-cabin voice assistant for high-end cruise ships, with streaming conversation, interruption recovery and voice-driven screen control.", context: "TwinCiti" },
  { title: "Advertising & e-commerce", copy: "Built agent-led ad generation workflows and a containerized pipeline that turns a concept into a complete ad video.", context: "Resilia" },
  { title: "Call-center operations", copy: "Migrated a core ML pipeline from R to Python and overhauled graph-based call-center pairing with automated grid search and fold-wise validation.", context: "Afiniti" },
  { title: "FMCG & demand", copy: "Led demand forecasting pipelines for Friesland Campina's Olpers and Tarang, improving accuracy by 30%, and for Arcelik across 400+ items.", context: "TheAiSystems" },
  { title: "Retail inventory", copy: "Designed a daily forecasting pipeline for Medusa's 8,000 vape products using tree-based and GLM ensembles, reducing stockouts by more than 50%.", context: "TheAiSystems" },
];

const career = [
  {
    company: "360factors", role: "Principal AI Engineer", period: "Oct 2024 – Present", location: "USA · Remote",
    summary: "Production agentic AI for regulated banking and insurance environments.",
    details: [
      "Led a senior multidisciplinary team of 6–7 and partnered directly with the CTO from vision to production.",
      "Architected and shipped an agentic RAG compliance expert system with specialized LLMs for major U.S. banking and insurance customers.",
      "Fine-tuned a Llama-3 agent for reliable natural-language-to-SQL with hallucination guardrails and integrated Microsoft Fabric for conversational data exploration.",
      "Owned containerized training and inference, CI/CD and MLflow monitoring end to end.",
    ],
  },
  {
    company: "Resilia", role: "Principal AI Engineer / Consultant", period: "Jan 2026 – Jun 2026", location: "Remote",
    summary: "Agent-led advertising workflows, reusable MCP tools and generative video pipelines.",
    details: [
      "Built an automated ad-generation system where agents own end-to-end workflows; fine-tuned an LLM with reinforcement learning as a self-verifying harness.",
      "Designed reusable skills and MCP tools for a fleet of frontier coding agents.",
      "Engineered an automated, containerized pipeline generating complete ad videos from a concept.",
    ],
  },
  {
    company: "TwinCiti", role: "Senior AI Engineer", period: "Mar 2024 – Feb 2025", location: "Remote",
    summary: "Real-time conversational voice and hands-free in-cabin experiences.",
    details: [
      "Built Elsa, a full-duplex voice assistant deployed in-cabin on high-end cruise ships, engineering the streaming voice loop with interruption recovery.",
      "Extended voice AI into agentic screen control, resolving spoken intent into grounded on-screen execution.",
      "Built multi-step agentic search over web lookups and personal itinerary context.",
    ],
  },
  {
    company: "Afiniti Software Solutions", role: "Data Scientist", period: "Nov 2022 – Mar 2024", location: "USA · Remote",
    summary: "Multi-agent automation and machine-learning infrastructure for call-center pairing.",
    details: [
      "Built autonomous multi-agent systems with Microsoft AutoGen and dynamic sub-agent instantiation for news retrieval and GUI automation.",
      "Led migration of Afiniti's core ML pipeline from R to Python and overhauled graph-based call-center pairing with automated grid search and fold-wise validation.",
      "Received the Afiniti Rising Star Award.",
    ],
  },
  {
    company: "TheAiSystems", role: "Senior Data Scientist", period: "Aug 2019 – Nov 2022", location: "Karachi, Pakistan",
    summary: "Forecasting for retail inventory, FMCG and consumer products.",
    details: [
      "Designed a daily forecasting pipeline for Medusa's 8,000 vape products, reducing stockouts by more than 50% using tree-based and GLM ensembles.",
      "Led demand forecasting for Friesland Campina's Olpers and Tarang, improving accuracy by 30%, and for Arcelik across 400+ items.",
    ],
  },
];

const capabilities = [
  { title: "Agentic systems", copy: "Multi-agent workflows, agentic RAG, MCP tool servers and self-verifying evaluations." },
  { title: "LLMs & applied AI", copy: "Fine-tuning with LoRA and QLoRA, Llama-3, Qwen, GPT and natural-language-to-SQL." },
  { title: "Voice & generative media", copy: "Streaming voice loops, full-duplex interaction, screen control and automated ad-video pipelines." },
  { title: "Production engineering", copy: "Python, SQL, TypeScript and C++; AWS, Azure, Docker, Kubernetes, MLflow and Airflow." },
];

function SectionHeading({ number, label, title, id }: { number: string; label: string; title: React.ReactNode; id: string }) {
  return (
    <div className="section-header" id={id}>
      <div className="section-index eyebrow"><span>{number}</span><i aria-hidden="true" /><span>{label}</span></div>
      <h2 className="display section-title">{title}</h2>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <div className="portfolio">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:left-4 focus:top-4 focus:bg-primary focus:text-background focus:p-3">Skip to content</a>
      <header className="site-header">
        <div className="site-wrap header-main">
          <a href="#top" className="brand" data-testid="link-home"><span className="brand-dot">•</span> Muhammad Abu Bakar</a>
          <nav className="header-center" aria-label="Primary">
            <a className="active" href="#profile">Profile</a>
            <a href="#industries">Experience</a>
            <a href="#capabilities">Expertise</a>
          </nav>
          <div className="header-actions">
            <a className="hire-link" href={email} data-testid="link-hire">Get in touch <ArrowUpRight size={13} strokeWidth={1.6} /></a>
            <button type="button" className="mobile-menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} data-testid="button-mobile-menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        <nav className="header-sub" aria-label="Page sections">
          <div className="site-wrap header-sub-inner">
            {navigation.map((item) => <a key={item.href} href={item.href} data-testid={`link-nav-${item.label.toLowerCase()}`}>{item.label}</a>)}
            <a href={cvPdf} download data-testid="link-nav-cv">Download CV</a>
          </div>
        </nav>
        {menuOpen && <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} data-testid={`link-mobile-${item.label.toLowerCase()}`}>{item.label}</a>)}
          <a href={cvPdf} download onClick={() => setMenuOpen(false)} data-testid="link-mobile-cv">Download CV</a>
        </nav>}
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-photo" aria-hidden="true"><img src={profilePic} alt="" /></div>
          <div className="site-wrap">
            <motion.div initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="hero-topline">
              <span className="pin" aria-hidden="true" /><span className="eyebrow eyebrow-muted">Principal AI Engineer · Agentic systems, voice & production ML<br />Karachi, Pakistan / working remotely</span>
            </motion.div>
            <motion.h1 id="hero-title" className="display" initial={reducedMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .1 }}>
              <span>Intelligence,</span><span><em>in production.</em></span>
            </motion.h1>
            <motion.div className="hero-summary" initial={reducedMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .3 }}>
              <p>I build AI systems that make it past the demo: agentic software, real-time voice, and machine learning engineered to operate in the real world.</p>
              <a className="text-link" href="#industries" data-testid="link-explore-work">Explore the work <ArrowDown size={16} strokeWidth={1.4} /></a>
            </motion.div>
            <div className="hero-footer"><span>Muhammad Abu Bakar / Principal AI Engineer</span><span>Scroll to explore <ArrowDown size={12} /></span></div>
          </div>
        </section>

        <section className="section-block site-wrap" aria-labelledby="profile">
          <SectionHeading number="01" label="Profile" id="profile" title={<>From model<br /><em>to reality.</em></>} />
          <div className="section-lead">
            <div />
            <div className="section-lead-content">
              <p><strong>Seven-plus years bridging AI research and production engineering.</strong> I ship agentic systems as software: async-first, high-concurrency, and built to survive beyond the handoff.</p>
              <p>My work spans regulated enterprise AI, live voice interaction, generative video and forecasting. I take products from architecture through deployment, with the reliability and operational detail that real customers require.</p>
              <div className="about-aside">
                <div>Based in<strong>Karachi, Pakistan</strong></div>
                <div>Focus<strong>Applied AI & systems engineering</strong></div>
                <div>Credential<strong>Top 3% Toptal talent</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block site-wrap" aria-labelledby="industries">
          <SectionHeading number="02" label="Selected domains" id="industries" title={<>Where the work<br /><em>meets the world.</em></>} />
          <p className="domain-intro">A cross-section of industries where the engineering has had to meet operational reality. Each summary draws from work documented in my CV.</p>
          <div className="domain-list">
            {domains.map((domain, index) => (
              <article className="domain-row" key={domain.title} data-testid={`row-domain-${index + 1}`}>
                <span className="row-num">{String(index + 1).padStart(2, "0")} /</span>
                <h3>{domain.title}</h3>
                <div><span className="eyebrow eyebrow-muted">{domain.context}</span><p>{domain.copy}</p></div>
                <ArrowUpRight className="row-arrow" size={19} strokeWidth={1.25} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="section-block site-wrap" aria-labelledby="career">
          <SectionHeading number="03" label="Career" id="career" title={<>The path<br /><em>to production.</em></>} />
          <div className="career-list">
            {career.map((job, index) => (
              <article className="career-row" key={job.company} data-testid={`row-career-${index + 1}`}>
                <span className="row-num">{String(index + 1).padStart(2, "0")} /</span>
                <div><h3>{job.company}</h3><span className="role">{job.role}</span></div>
                <p className="career-copy">{job.summary}</p>
                <div className="period">{job.period}<br />{job.location}</div>
                <details className="career-detail">
                  <summary data-testid={`button-expand-career-${index + 1}`}>Read the details</summary>
                  <ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </details>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block site-wrap" aria-labelledby="capabilities">
          <SectionHeading number="04" label="Capabilities" id="capabilities" title={<>Depth where<br /><em>it matters.</em></>} />
          <div className="capability-grid">
            {capabilities.map((item, index) => <article className="capability" key={item.title}>
              <span className="eyebrow">0{index + 1} / Practice area</span>
              <h3>{item.title}</h3><p>{item.copy}</p>
            </article>)}
          </div>
        </section>

        <section className="section-block site-wrap" aria-labelledby="credentials">
          <SectionHeading number="05" label="Credentials" id="credentials" title={<>A foundation<br /><em>for the work.</em></>} />
          <div className="credentials">
            <article className="credential">
              <span className="eyebrow">Independent credential / Toptal</span>
              <h3>Vetted among Toptal's top 3% of talent.</h3>
              <p>A separate signal of engineering quality, alongside the production work and teams behind it.</p>
              <a className="text-link" href={toptal} target="_blank" rel="noopener noreferrer" data-testid="link-toptal">View Toptal profile <ArrowUpRight size={15} /></a>
            </article>
            <article className="credential">
              <span className="eyebrow">Recognition / Competitions</span>
              <h3>From Kaggle to the field.</h3>
              <p>1st place among 18k+ in Kaggle's “Predict Future Sales”; silver in GoDaddy Microbusiness Density Forecasting and Learning Agency Lab Essay Scoring. NUST High Achievers Award and Afiniti Rising Star Award.</p>
            </article>
          </div>
          <div className="education-list">
            <div className="education-row"><strong>Georgia Institute of Technology</strong><span>MS Computer Science · GPA 4.00/4.00</span><small>2024</small></div>
            <div className="education-row"><strong>National University of Sciences & Technology</strong><span>BE Electrical Engineering · GPA 3.52/4.00</span><small>2016</small></div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="site-wrap">
            <span className="eyebrow">06 / Contact</span>
            <h2 id="contact-title" className="display">Let's build what<br /><em>actually works.</em></h2>
            <div className="contact-actions">
              <a className="gold-button" href={email} data-testid="link-email">Start a conversation <ArrowUpRight size={19} strokeWidth={1.4} /></a>
              <a className="text-link" href={cvPdf} download data-testid="link-download-cv">Download CV <Download size={16} strokeWidth={1.4} /></a>
            </div>
            <footer className="footer">
              <p>© {new Date().getFullYear()} Muhammad Abu Bakar</p>
              <div className="socials">
                <a href={linkedIn} target="_blank" rel="noopener noreferrer" data-testid="link-linkedin">LinkedIn ↗</a>
                <a href={github} target="_blank" rel="noopener noreferrer" data-testid="link-github">GitHub ↗</a>
                <a href={toptal} target="_blank" rel="noopener noreferrer" data-testid="link-footer-toptal">Toptal ↗</a>
                <a href={email} data-testid="link-footer-email">Email ↗</a>
              </div>
              <a href="#top" data-testid="link-back-top">Back to top <ArrowRight size={12} className="inline" /></a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}