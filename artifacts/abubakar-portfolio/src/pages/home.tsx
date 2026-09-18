import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Download } from "lucide-react";
import profilePic from "@assets/0_IMG_20250526_183014_1789733453748.jpg";
import cvPdf from "@assets/0_ai_engineer_1789733068372.pdf";
import { ReactNode } from "react";

const STAGGER_DELAY = 0.1;

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row max-w-7xl mx-auto">
      {/* Left Sidebar */}
      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-[400px] lg:w-[480px] p-6 md:p-12 md:sticky md:top-0 md:h-screen md:overflow-y-auto flex flex-col justify-between shrink-0 no-scrollbar"
      >
        <div>
          <div className="relative mb-8 w-32 h-32 md:w-48 md:h-48 rounded-none overflow-hidden border-2 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--primary))] bg-background">
            <img
              src={profilePic}
              alt="Muhammad Abu Bakar"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              style={{ objectPosition: '50% 15%' }}
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
            Muhammad Abu Bakar
          </h1>
          <h2 className="text-xl md:text-2xl text-primary font-medium mb-4 font-mono">
            Principal AI Engineer
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
            I ship agentic systems as production software—async-first, high-concurrency, and built to survive beyond the handoff. 7+ years bridging LLMs, real-time voice, and generative video.
          </p>

          <div className="flex flex-col gap-3 font-mono text-sm mt-8">
            <a href="mailto:abubakarilyas624@gmail.com" className="flex items-center gap-3 text-secondary-foreground hover:text-foreground transition-colors w-fit group">
              <span className="p-2 bg-card border border-border group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-colors"><Mail className="w-4 h-4" /></span>
              abubakarilyas624@gmail.com
            </a>
            <a href="https://linkedin.com/in/abu-bakar-ilyas-72b261113/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-secondary-foreground hover:text-foreground transition-colors w-fit group">
              <span className="p-2 bg-card border border-border group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-colors"><Linkedin className="w-4 h-4" /></span>
              LinkedIn Profile
            </a>
            <a href="https://github.com/abubakar12" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-secondary-foreground hover:text-foreground transition-colors w-fit group">
              <span className="p-2 bg-card border border-border group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-colors"><Github className="w-4 h-4" /></span>
              github.com/abubakar12
            </a>
            <span className="flex items-center gap-3 text-secondary-foreground w-fit group">
              <span className="p-2 bg-card border border-border"><Phone className="w-4 h-4" /></span>
              +92-349-1254752
            </span>
            <span className="flex items-center gap-3 text-secondary-foreground w-fit group">
              <span className="p-2 bg-card border border-border"><MapPin className="w-4 h-4" /></span>
              Karachi, Pakistan
            </span>
          </div>
        </div>

        <div className="mt-12 md:mt-0 pb-8 md:pb-0">
          <a
            href={cvPdf}
            download
            className="group inline-flex items-center justify-center gap-3 bg-foreground text-background px-6 py-4 font-mono font-bold text-sm hover:bg-primary transition-colors w-full md:w-auto border-2 border-transparent hover:border-foreground hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))]"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            DOWNLOAD_RESUME.PDF
          </a>
        </div>
      </motion.aside>

      {/* Right Content */}
      <main className="w-full flex-1 px-6 md:px-12 py-12 md:py-24 flex flex-col gap-24">
        {/* Experience Section */}
        <Section title="EXPERIENCE" delay={0.2}>
          <div className="flex flex-col gap-16">
            
            <ExperienceItem
              company="The 360factors"
              role="Principal AI Engineer"
              date="Oct 2024 – Present"
              location="USA (Remote)"
              highlights={[
                "Led a senior, multidisciplinary team of 6–7. Held the enterprise quality bar, partnering directly with CTO from vision to production.",
                "Architected and shipped an agentic RAG compliance expert system with specialized LLMs. Deployed in production for major U.S. banking and insurance customers.",
                "Fine-tuned a Llama-3 agent for reliable NL→SQL with strict hallucination guardrails. Integrated Microsoft Fabric for conversational data exploration.",
                "Owned products end-to-end: containerized training/inference, CI/CD, MLflow monitoring, operating without handoff."
              ]}
            />

            <ExperienceItem
              company="Resilia"
              role="Principal AI Engineer/Consultant"
              date="Jan 2026 – June 2026"
              location="Remote"
              highlights={[
                "Built an automated ad-generation system where agents own end-to-end workflows. Fine-tuned an LLM with RL as a self-verifying harness that auto-promotes scaling ads.",
                "Designed reusable skills and MCP tools enabling a lean team + agents to deliver at multiples of its size across a fleet of frontier coding agents.",
                "Engineered a fully automated, containerized pipeline generating complete ad videos from concept alone, surpassing leading tools like Higgsfield."
              ]}
            />

            <ExperienceItem
              company="TwinCiti"
              role="Senior AI Engineer"
              date="Mar 2024 – Feb 2025"
              location="Remote"
              highlights={[
                "Built 'Elsa', a full-duplex voice assistant deployed in-cabin on high-end cruise ships. Engineered the streaming voice loop end-to-end under conversational latency with interruption recovery.",
                "Pushed voice AI into agentic screen control: spoken intent resolved into grounded on-screen execution for hands-free navigation.",
                "Built multi-step agentic search that executes web lookups against personal itinerary context as a pluggable platform."
              ]}
            />

            <ExperienceItem
              company="Afiniti Software Solutions"
              role="Data Scientist"
              date="Nov 2022 – Mar 2024"
              location="USA (Remote)"
              highlights={[
                "Built autonomous multi-agent systems using Microsoft AutoGen with dynamic sub-agent instantiation for news retrieval and GUI automation (OmniParser + Qwen).",
                "Led migration of Afiniti’s core ML pipeline from R to Python. Overhauled graph-based call-center pairing with automated grid search and fold-wise validation. (Rising Star Award)"
              ]}
            />

            <ExperienceItem
              company="TheAiSystems"
              role="Senior Data Scientist"
              date="Aug 2019 – Nov 2022"
              location="Karachi, Pakistan"
              highlights={[
                "Designed end-to-end pipeline to predict Medusa’s 8000 vape products daily, reducing stockouts by >50% via Tree-based and GLM ensembles.",
                "Led demand forecasting pipelines for Friesland Campina (Olpers/Tarang) increasing accuracy by 30%, and Arcelik across 400+ items."
              ]}
            />

          </div>
        </Section>

        {/* Skills Section */}
        <Section title="TECHNICAL ARSENAL" delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillGroup 
              title="AI-Native Engineering"
              skills={["Agentic Coding (Claude Code, Cursor)", "Multi-agent workflows", "MCP Tool Servers", "Self-verifying Evals"]}
            />
            <SkillGroup 
              title="LLMs & Applied AI"
              skills={["Agentic RAG", "Fine-tuning (LoRA/QLoRA)", "GPT / Llama-3 / Qwen", "Prompt Engineering"]}
            />
            <SkillGroup 
              title="Classical ML & Forecasting"
              skills={["XGBoost / LightGBM / CatBoost", "Amazon Chronos", "Time-series Models", "Anomaly Detection"]}
            />
            <SkillGroup 
              title="Infrastructure & Full-Stack"
              skills={["Python / SQL / TS / C++", "AWS / Azure", "Docker / Kubernetes", "MLflow / Airflow"]}
            />
          </div>
        </Section>

        {/* Education & Achievements */}
        <Section title="BACKGROUND & IMPACT" delay={0.4}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-foreground inline-block"></span>
                ACHIEVEMENTS
              </h3>
              <ul className="space-y-4 text-sm text-secondary-foreground leading-relaxed font-mono">
                <li className="p-4 bg-card border border-border"><strong className="text-foreground block mb-1">Kaggle:</strong> 1st place (out of 18k+) in "Predict Future Sales". Silver in GoDaddy Microbusiness Density Forecasting and Learning Agency Lab Essay Scoring.</li>
                <li className="p-4 bg-card border border-border"><strong className="text-foreground block mb-1">Robotics:</strong> Built an autonomous farming robot via NVIDIA AV research with ~70% edge-detection accuracy.</li>
                <li className="p-4 bg-card border border-border"><strong className="text-foreground block mb-1">Awards:</strong> NUST High Achievers Award, Afiniti Rising Star Award.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-foreground inline-block"></span>
                EDUCATION
              </h3>
              <div className="space-y-6">
                <div className="p-6 bg-card border-2 border-border hover:border-primary transition-colors">
                  <h4 className="font-bold text-foreground text-lg">Georgia Institute of Technology</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2 gap-2">
                    <p className="text-sm font-mono bg-foreground text-background px-2 py-1 w-fit">MS Computer Science</p>
                    <p className="text-sm font-mono font-bold text-primary">GPA: 4.00/4.00 • 2024</p>
                  </div>
                </div>
                <div className="p-6 bg-card border-2 border-border hover:border-primary transition-colors">
                  <h4 className="font-bold text-foreground text-lg">National University of Sciences & Technology</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2 gap-2">
                    <p className="text-sm font-mono bg-foreground text-background px-2 py-1 w-fit">BE Electrical Engineering</p>
                    <p className="text-sm font-mono font-bold text-primary">GPA: 3.52/4.00 • 2016</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <footer className="pt-12 pb-6 border-t border-border/50 text-xs text-muted-foreground font-mono flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Muhammad Abu Bakar. All systems operational.</p>
          <p>Built with precision engineering.</p>
        </footer>
      </main>
    </div>
  );
}

function Section({ title, children, delay }: { title: string; children: ReactNode; delay: number }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 py-4 mb-8 -mx-6 px-6 md:mx-0 md:px-0 border-b-2 border-foreground md:bg-transparent md:backdrop-blur-none">
        <h2 className="text-sm font-mono font-bold tracking-widest text-foreground uppercase flex items-center gap-3">
          <span className="w-3 h-3 bg-primary inline-block" />
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  );
}

function ExperienceItem({ 
  company, 
  role, 
  date, 
  location, 
  highlights 
}: { 
  company: string; 
  role: string; 
  date: string; 
  location: string; 
  highlights: string[] 
}) {
  return (
    <div className="group relative pl-6 md:pl-0">
      <div className="absolute left-0 top-2 bottom-0 w-1 bg-border group-hover:bg-primary transition-colors md:hidden" />
      
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
        <div>
          <h3 className="text-3xl font-extrabold text-foreground group-hover:text-primary transition-colors">{company}</h3>
          <p className="text-foreground font-mono text-sm mt-1 uppercase font-bold tracking-tight">{role}</p>
        </div>
        <div className="text-left md:text-right font-mono text-sm text-muted-foreground mt-2 md:mt-0">
          <p className="bg-secondary text-secondary-foreground inline-block px-2 py-0.5 mb-1">{date}</p>
          <p className="text-xs uppercase tracking-widest">{location}</p>
        </div>
      </div>
      
      <ul className="space-y-4 mt-6">
        {highlights.map((highlight, idx) => (
          <li key={idx} className="text-secondary-foreground text-sm md:text-base leading-relaxed relative pl-5">
            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-foreground" />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-card p-6 border-2 border-border hover:border-foreground hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-all">
      <h4 className="font-mono text-sm font-bold text-foreground mb-4 pb-2 border-b-2 border-border uppercase tracking-widest">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span 
            key={skill} 
            className="px-3 py-1 bg-background border border-border text-foreground text-xs font-mono hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
