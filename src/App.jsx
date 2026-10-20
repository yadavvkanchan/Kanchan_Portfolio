import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  MapPin, Sparkles, Terminal, Code2, BrainCircuit, ExternalLink,
  ChevronRight, Menu, X, HeartHandshake, ShieldCheck, Landmark,
  Cpu, Database, Layers3, GitBranch, CircleDot, Download
} from 'lucide-react'

const projects = [
  {
    id: '01', name: 'ShareBite', category: 'SOCIAL IMPACT · FULL STACK + ML',
    tagline: 'Good food. Better futures.',
    description: 'A food-redistribution platform connecting donors, charities, volunteers, and people in need — turning surplus food into meaningful impact.',
    url: 'https://share-bite-react-local.vercel.app',
    stack: ['React', 'Node.js', 'MongoDB', 'Machine Learning'],
    type: 'sharebite', icon: HeartHandshake, accent: 'mint',
    highlights: ['Role-based experiences', 'Donation discovery & claims', 'ML trends + smart routing', 'Tree-growth impact gamification']
  },
  {
    id: '02', name: 'PolityTrack', category: 'CIVIC TECH · NLP + ANALYTICS',
    tagline: 'Politics, made trackable.',
    description: 'A civic intelligence dashboard to explore representatives, policies, schemes, and promises — making public information easier to understand.',
    url: 'https://polity-track-ql2p.vercel.app/',
    stack: ['React', 'Node.js', 'MongoDB', 'NLP · spaCy'],
    type: 'polity', icon: Landmark, accent: 'violet',
    highlights: ['100+ representatives tracked', 'Promise extraction & summaries', 'State-wise civic dashboards', 'Policy trends & recommendations']
  },
  {
    id: '03', name: 'SheSafe', category: 'WOMEN’S SAFETY · AI / ML',
    tagline: 'Safer decisions, with data.',
    description: 'An AI-powered safety concept that assesses location and situation signals to surface risk levels and help people make more informed route decisions.',
    url: 'https://shesafe-f24y.onrender.com',
    stack: ['Python', 'Machine Learning', 'Analytics', 'Streamlit'],
    type: 'shesafe', icon: ShieldCheck, accent: 'rose',
    highlights: ['Location-based risk signals', 'Low / medium / high risk states', 'Safety monitoring interface', 'Predictive analytics & alerts']
  }
]

const skills = [
  { title: 'Languages', items: 'Python · JavaScript · C', icon: Code2 },
  { title: 'Frontend', items: 'React · Next.js · Tailwind CSS', icon: Layers3 },
  { title: 'Backend', items: 'Node.js · Express · Django · Flask', icon: Terminal },
  { title: 'AI / ML', items: 'TensorFlow · Scikit-learn · Keras', icon: BrainCircuit },
  { title: 'Data', items: 'MongoDB · SQL · Pandas · NumPy', icon: Database },
  { title: 'Workflow', items: 'Git · GitHub · Postman · REST APIs', icon: GitBranch },
]

function Reveal({ children, delay = 0, className = '' }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: .65, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>
}

function ProjectPreview({ type }) {
  if (type === 'sharebite') return (
    <div className="preview preview-sharebite">
      <div className="mock-top"><span className="mock-brand"><span className="mini-mark">S</span> sharebite</span><span className="mock-pill">Food connects us</span><span className="mock-avatar">K</span></div>
      <div className="share-hero"><div><span className="mock-eyebrow">COMMUNITY IMPACT</span><h4>Every meal<br/>makes a difference<span>.</span></h4><p>Rescue surplus. Share hope.</p><div className="mock-button">Explore donations <ArrowRight size={12}/></div></div><div className="food-orbit"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="food-emoji">🥗</div><span className="float-food f1">🥑</span><span className="float-food f2">🍊</span><span className="float-food f3">🥕</span></div></div>
      <div className="impact-row"><div><strong>1,284</strong><small>Meals shared</small></div><div><strong>86</strong><small>Active donors</small></div><div><strong>+40%</strong><small>Engagement</small></div></div>
      <div className="mock-list"><div className="donation-thumb">🥙</div><div><b>Fresh meal packs</b><small>Community kitchen · 1.2 km away</small></div><span className="available">Available</span></div>
    </div>
  )
  if (type === 'polity') return (
    <div className="preview preview-polity">
      <div className="mock-top"><span className="mock-brand"><span className="polity-symbol">◈</span> POLITY<span className="thin">TRACK</span></span><span className="mock-pill">Civic intelligence</span><span className="mock-avatar violet-avatar">PT</span></div>
      <div className="polity-heading"><div><span className="mock-eyebrow">THE PUBLIC PROMISE INDEX</span><h4>Accountability<br/>in <em>plain sight.</em></h4></div><div className="index-score"><strong>78.4</strong><small>Transparency index</small><span>↑ 12.8%</span></div></div>
      <div className="stat-grid"><div><small>Representatives</small><strong>100<span>+</span></strong></div><div><small>Promises indexed</small><strong>2,460</strong></div><div><small>Policies tracked</small><strong>384</strong></div></div>
      <div className="chart-card"><div className="chart-title"><b>Promise progress</b><small>Last 6 months ↗</small></div><div className="bar-chart">{[32,48,41,63,56,76,67,88,70,95,81,100].map((h,i)=><i key={i} style={{height:`${h}%`,animationDelay:`${i*60}ms`}} />)}</div><div className="chart-labels"><span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span></div></div>
      <div className="polity-footer"><span><span className="green-dot"/> NLP summary ready</span><span>Updated moments ago</span></div>
    </div>
  )
  return (
    <div className="preview preview-shesafe">
      <div className="mock-top"><span className="mock-brand"><span className="safe-symbol"><ShieldCheck size={15}/></span> SHE<span className="safe-light">SAFE</span></span><span className="mock-pill">Personal safety intelligence</span><span className="mock-avatar rose-avatar">●</span></div>
      <div className="safe-heading"><div><span className="mock-eyebrow">SAFETY OVERVIEW / MUMBAI</span><h4>Your safety.<br/><em>Your control.</em></h4></div><div className="risk-badge"><span className="risk-pulse"/> MODERATE RISK</div></div>
      <div className="safe-map"><div className="map-grid"/><svg viewBox="0 0 500 180" preserveAspectRatio="none" className="map-lines"><path d="M-10 120 C80 100 65 30 160 45 S250 130 320 70 S420 30 520 55"/><path d="M10 160 C80 130 130 150 180 95 S270 30 330 100 S430 140 510 110"/><path d="M120 -10 C130 50 200 60 230 90 S280 140 270 200"/><path d="M360 -10 C330 50 390 90 365 190"/></svg><div className="map-pin pin-a"><span/></div><div className="map-pin pin-b"><span/></div><div className="map-label label-a">Current area</div><div className="map-label label-b">Safer route</div><div className="route-chip"><span/> ROUTE ANALYZED <b>↗</b></div></div>
      <div className="risk-metrics"><div><span className="metric-dot low"/> <small>Crime history</small><b>Low</b></div><div><span className="metric-dot medium"/> <small>Crowd density</small><b>Moderate</b></div><div><span className="metric-dot low"/> <small>Movement signals</small><b>Normal</b></div></div>
      <div className="safe-note"><ShieldCheck size={15}/><span><b>Stay aware.</b> Review local conditions before you go.</span><ArrowUpRight size={14}/></div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const Icon = project.icon
  return <Reveal delay={index * .08} className={`project-card ${project.accent}`}>
    <div className="project-card-top"><span className="project-number">{project.id} / SELECTED WORK</span><span className="project-icon"><Icon size={17}/></span></div>
    <ProjectPreview type={project.type}/>
    <div className="project-content">
      <div className="project-category">{project.category}</div>
      <h3>{project.name}<span className="title-period">.</span></h3>
      <h4>{project.tagline}</h4>
      <p>{project.description}</p>
      <div className="project-highlights">{project.highlights.map((item,i)=><span key={i}><CircleDot size={11}/>{item}</span>)}</div>
      <div className="stack-list">{project.stack.map((tech,i)=><span key={i}>{tech}</span>)}</div>
      <a className="project-link" href={project.url} target="_blank" rel="noreferrer">Explore live project <ArrowUpRight size={16}/></a>
    </div>
  </Reveal>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return <div className="site-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="nav-wrap">
      <nav className="nav container">
        <a href="#home" className="wordmark" onClick={closeMenu}><span className="wordmark-icon">ky<span>.</span></span><span className="wordmark-label">BUILDING WITH INTENT</span></a>
        <button className="mobile-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
        <div className={`nav-links ${menuOpen?'nav-open':''}`}>
          <a href="#work" onClick={closeMenu}>Work <span>03</span></a><a href="#about" onClick={closeMenu}>About</a><a href="#stack" onClick={closeMenu}>Stack</a>
          <a href="mailto:yadavkanchan0109@gmail.com" className="nav-contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={14}/></a>
        </div>
      </nav>
    </header>

    <main>
      <section className="hero container" id="home">
        <div className="hero-copy">
          <motion.div className="availability" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.2}}><span className="live-dot"/> OPEN TO OPPORTUNITIES <span className="availability-divider"/> MUMBAI, INDIA</motion.div>
          <motion.h1 initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.15}}>I build things<br/>that <span className="gradient-text">mean something.</span></motion.h1>
          <motion.p className="hero-description" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.45}}>Hey, I’m <strong>Kanchan Yadav</strong> — an AI/ML engineering student and full-stack developer turning real-world problems into thoughtful digital products.</motion.p>
          <motion.div className="hero-actions" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.55}}><a className="button-primary" href="#work">Explore my work <ArrowDownRight size={16}/></a><a className="button-quiet" href="mailto:yadavkanchan0109@gmail.com"><Mail size={15}/> Get in touch</a></motion.div>
          <motion.div className="hero-socials" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.7}}><a href="https://github.com/yadavvkanchan" target="_blank" rel="noreferrer"><Github size={15}/> GitHub <ArrowUpRight size={12}/></a><a href="https://www.linkedin.com/in/yadavvkanchan" target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn <ArrowUpRight size={12}/></a><span className="social-line"/></motion.div>
        </div>
        <motion.div className="hero-art" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.25}}>
          <div className="art-grid"/>
          <div className="orbit-ring ring-large"/><div className="orbit-ring ring-small"/>
          <div className="code-window">
            <div className="window-head"><div className="window-dots"><i/><i/><i/></div><span>kanchan.dev / identity.ts</span><span className="window-lock">⌘ K</span></div>
            <div className="code-body"><div className="code-line"><span className="line-num">01</span><span><i className="code-purple">const</i> <b>developer</b> = {'{'}</span></div><div className="code-line indent"><span className="line-num">02</span><span><em>name</em>: <i className="code-green">'Kanchan Yadav'</i>,</span></div><div className="code-line indent"><span className="line-num">03</span><span><em>focus</em>: <i className="code-green">'AI × Full Stack'</i>,</span></div><div className="code-line indent"><span className="line-num">04</span><span><em>mindset</em>: <i className="code-green">'Build. Learn. Repeat.'</i>,</span></div><div className="code-line indent"><span className="line-num">05</span><span><em>coffee</em>: <i className="code-orange">true</i>,</span></div><div className="code-line"><span className="line-num">06</span><span>{'}'}<span className="cursor-blink">▍</span></span></div></div>
            <div className="window-foot"><span><span className="tiny-green"/> all systems curious</span><span>UTF-8&nbsp; · &nbsp;JavaScript</span></div>
          </div>
          <div className="floating-chip chip-ai"><BrainCircuit size={15}/><span>AI / ML</span><i/></div>
          <div className="floating-chip chip-code"><Code2 size={15}/><span>Full-stack</span><i/></div>
          <div className="hero-art-caption"><span>FIG. 01</span> CURIOSITY → CODE → IMPACT</div>
        </motion.div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><div className="scroll-track"><i/></div><span className="hero-bottom-right">PORTFOLIO / 2026</span></div>
      </section>

      <section className="proof-strip"><div className="container proof-inner"><div className="proof-item"><strong>03<span>+</span></strong><span>End-to-end projects</span></div><div className="proof-divider"/><div className="proof-item"><strong>150<span>+</span></strong><span>LeetCode problems</span></div><div className="proof-divider"/><div className="proof-item"><strong>8.7<span>/10</span></strong><span>Current CGPA</span></div><div className="proof-divider"/><div className="proof-item proof-cert"><Sparkles size={18}/><span>Infosys Certified<br/>Full-Stack Developer</span></div></div></section>

      <section className="work-section container section-pad" id="work">
        <Reveal className="section-heading"><div><div className="eyebrow"><span>01</span> / SELECTED WORK</div><h2>Ideas, shipped<span className="gradient-text">.</span></h2><p>Three real-world problems. Three different builds. Peek inside each product before opening the live demo.</p></div><span className="section-side-note">2024 — 2026<br/>BUILD LOG</span></Reveal>
        <div className="projects-grid">{projects.map((project,i)=><ProjectCard key={project.id} project={project} index={i}/>)}</div>
      </section>

      <section className="about-section" id="about"><div className="container about-grid">
        <Reveal className="about-left"><div className="eyebrow"><span>02</span> / A LITTLE ABOUT ME</div><h2>Curious by default.<br/><span className="gradient-text">Builder by choice.</span></h2><p>I’m pursuing a B.E. in Artificial Intelligence and Machine Learning at Lokmanya Tilak College of Engineering. I love the space where software engineering meets intelligent systems — especially when the result can help someone in the real world.</p><p>From redistributing food to making civic information clearer and exploring proactive safety, my projects start with a simple question: <em>what could technology make better?</em></p><div className="education-card"><div className="education-icon"><Landmark size={18}/></div><div><span className="card-overline">2023 — 2027</span><h4>B.E. Artificial Intelligence & ML</h4><p>Lokmanya Tilak College of Engineering</p><span className="honors-tag">HONORS · DATA SCIENCE</span></div><div className="cgpa-tag"><strong>8.7</strong><small>CGPA</small></div></div></Reveal>
        <Reveal delay={.12} className="about-right"><div className="timeline-label">THE JOURNEY SO FAR</div><div className="timeline"><div className="timeline-item"><span className="timeline-dot"/><div><span className="timeline-date">JUL — SEP 2024</span><h4>Android Developer Intern</h4><p>AICTE · Hands-on Android development, API integration, and modular app design.</p></div></div><div className="timeline-item"><span className="timeline-dot"/><div><span className="timeline-date">2024 — 2026</span><h4>Building end-to-end products</h4><p>Full-stack and AI/ML projects focused on food redistribution, civic tech, and safety.</p></div></div><div className="timeline-item"><span className="timeline-dot timeline-dot-current"/><div><span className="timeline-date">2026</span><h4>DeepCytes Cyber Labs Fellow</h4><p>Selected for exposure to cybersecurity and emerging technologies.</p></div></div></div><div className="currently-card"><span className="currently-pulse"/><div><span className="card-overline">CURRENTLY LEARNING</span><strong>Building smarter, shipping better.</strong><small>AI systems · Product thinking · DSA</small></div><Sparkles size={18}/></div></Reveal>
      </div></section>

      <section className="stack-section container section-pad" id="stack"><Reveal className="section-heading"><div><div className="eyebrow"><span>03</span> / MY TOOLKIT</div><h2>Tools of the trade<span className="gradient-text">.</span></h2><p>The right tool for the problem — and always one more thing to learn.</p></div><div className="stack-status"><span className="live-dot"/> ALWAYS EVOLVING</div></Reveal><div className="skills-grid">{skills.map((s,i)=>{const Icon=s.icon;return <Reveal delay={i*.05} key={s.title} className="skill-card"><div className="skill-icon"><Icon size={18}/></div><div><h3>{s.title}</h3><p>{s.items}</p></div><ArrowUpRight size={14} className="skill-arrow"/></Reveal>})}</div><Reveal className="learning-banner"><div className="learning-icon"><Cpu size={20}/></div><div><span className="card-overline">ENGINEERING PHILOSOPHY</span><strong>Learn deeply. Build thoughtfully. Keep it useful.</strong></div><div className="banner-decoration">0101<span>1010</span>0011</div></Reveal></section>

      <section className="contact-section"><div className="container contact-inner"><Reveal><div className="eyebrow"><span>04</span> / YOUR TURN</div><h2>Have a problem<br/>worth <span className="gradient-text">solving?</span></h2><p>Let’s talk about an internship, a collaboration, or an idea you can’t stop thinking about.</p><a href="mailto:yadavkanchan0109@gmail.com" className="button-primary contact-button">Start a conversation <ArrowUpRight size={17}/></a></Reveal><Reveal delay={.15} className="contact-card"><div className="contact-card-top"><span className="contact-card-icon"><Mail size={19}/></span><span className="card-overline">MY INBOX IS OPEN</span><span className="live-dot"/></div><span className="contact-label">EMAIL ME AT</span><a href="mailto:yadavkanchan0109@gmail.com" className="email-link">yadavkanchan0109@gmail.com <ArrowUpRight size={15}/></a><div className="contact-separator"/><div className="contact-social-links"><a href="https://github.com/yadavvkanchan" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={12}/></a><a href="https://www.linkedin.com/in/yadavvkanchan" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={12}/></a></div><div className="contact-location"><MapPin size={14}/> Mumbai, India <span>·</span> IST (UTC +5:30)</div></Reveal></div></section>
    </main>
    <footer className="footer"><div className="container footer-inner"><a href="#home" className="footer-logo">ky<span>.</span></a><span>Designed with intent. Built with code.</span><span>© 2026 Kanchan Yadav</span><a href="#home" className="back-top">BACK TO TOP ↑</a></div></footer>
  </div>
}