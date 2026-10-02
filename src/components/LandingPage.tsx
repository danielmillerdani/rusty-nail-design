import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  Check,
  ChevronDown,
  Hammer,
  MapPin,
  Menu,
  Phone,
  Quote,
  Ruler,
  ShieldCheck,
  X,
} from "lucide-react";

import heroImage from "@/assets/rusty-nail-hero.jpg";
import bathroomImage from "@/assets/rusty-nail-bathroom.jpg";
import deckImage from "@/assets/rusty-nail-deck.jpg";
import detailsImage from "@/assets/rusty-nail-details.jpg";

const navItems = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Our Work", "#work"],
  ["Process", "#process"],
  ["Service Area", "#service-area"],
  ["FAQ", "#faq"],
];

const services = [
  { number: "01", title: "Kitchen Remodeling", copy: "Functional, beautiful kitchens designed around how you cook, gather, and live.", image: heroImage, featured: true },
  { number: "02", title: "Bathroom Remodeling", copy: "Modern layouts, premium finishes, custom tile, and details considered from every angle.", image: bathroomImage, featured: true },
  { number: "03", title: "Home Renovations", copy: "Thoughtful improvements that connect rooms, routines, and the character of your home.", image: detailsImage },
  { number: "04", title: "Doors & Windows", copy: "Installation, replacement, upgrades, and repairs that improve appearance, function, and comfort.", image: heroImage },
  { number: "05", title: "Custom Decks", copy: "Purpose-built outdoor living spaces tailored to your home and the way you unwind.", image: deckImage, featured: true },
  { number: "06", title: "Custom Tile Flooring", copy: "Precise ceramic, porcelain, and marble tile installation with a refined finish.", image: detailsImage },
  { number: "07", title: "AZEK Decking", copy: "Certified installation of AZEK decking products for a considered outdoor finish.", image: deckImage },
  { number: "08", title: "TimberTech Decking", copy: "Certified installation of TimberTech decking products, built with close attention to detail.", image: deckImage },
];

const projects = [
  { label: "Kitchen", title: "A kitchen made for gathering", image: heroImage, className: "project-wide" },
  { label: "Bathroom", title: "Quiet materials, precise lines", image: bathroomImage, className: "project-tall" },
  { label: "Tile", title: "A study in stone and grain", image: detailsImage, className: "project-small" },
  { label: "Deck", title: "Outdoor living, extended", image: deckImage, className: "project-wide" },
  { label: "Windows & Doors", title: "Light, framed beautifully", image: heroImage, className: "project-small" },
  { label: "Home Renovation", title: "One home, wholly reconsidered", image: bathroomImage, className: "project-tall" },
];

const materials = [
  { name: "AZEK Decking", type: "Composite", image: deckImage },
  { name: "TimberTech", type: "Decking", image: deckImage },
  { name: "Ceramic Tile", type: "Surface", image: bathroomImage },
  { name: "Porcelain Tile", type: "Surface", image: detailsImage },
  { name: "Marble Tile", type: "Natural stone", image: detailsImage },
];

const communities = ["Genesee County", "Flint", "Burton", "Grand Blanc", "Davison", "Fenton", "Flushing", "Swartz Creek", "Clio", "Mount Morris", "Montrose", "Linden", "Goodrich", "Otisville", "Gaines", "Lapeer", "Holly", "Ortonville", "Hadley", "Durand", "Byron", "New Lothrop", "Chesaning"];

const faqs = [
  ["What types of remodeling projects do you handle?", "We handle residential kitchen and bathroom remodeling, complete home renovations, doors and windows, custom decks, and custom tile flooring."],
  ["Do you remodel kitchens and bathrooms?", "Yes. Kitchen remodeling and bathroom remodeling are central parts of our residential renovation work."],
  ["Do you install custom tile flooring?", "Yes. We install custom tile flooring and create carefully finished tile surfaces for residential spaces."],
  ["What types of tile do you install?", "We install ceramic, porcelain, and marble tile."],
  ["Do you install doors and windows?", "Yes. We provide door and window installation, replacement, upgrades, and repairs."],
  ["Do you build custom decks?", "Yes. We design and construct custom decks and outdoor living spaces for homeowners."],
  ["Are you a certified AZEK installer?", "Yes. Rusty Nail Renovations is a certified installer of AZEK decking products."],
  ["Are you a certified TimberTech installer?", "Yes. Rusty Nail Renovations is a certified installer of TimberTech decking products."],
  ["What areas do you serve?", "We serve Genesee County, Michigan and nearby communities within approximately a 25-mile radius."],
  ["How can I request an estimate?", "Complete the project inquiry form, call (810) 275-4547, or email rustynailrenovationsllc@comcast.net."],
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className={`brand ${light ? "brand-light" : ""}`} aria-label="Rusty Nail Renovations home">
      <span className="brand-mark"><Ruler aria-hidden="true" /></span>
      <span><strong>RUSTY NAIL</strong><small>RENOVATIONS LLC</small></span>
    </a>
  );
}

function Action({ href, children, kind = "primary", onClick }: { href: string; children: ReactNode; kind?: "primary" | "outline" | "light"; onClick?: () => void }) {
  return <a href={href} onClick={onClick} className={`action action-${kind}`}>{children}<ArrowUp aria-hidden="true" /></a>;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <Brand light={!scrolled} />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="header-phone" href="tel:+18102754547"><Phone aria-hidden="true" /> Call Now</a>
          <Action href="#contact">Free Estimate</Action>
        </div>
        <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}><Menu /></button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}>
            <div className="mobile-menu-top"><Brand light /><button onClick={() => setOpen(false)} aria-label="Close menu"><X /></button></div>
            <nav aria-label="Mobile navigation">
              {navItems.map(([label, href], index) => (
                <motion.a key={href} href={href} onClick={() => setOpen(false)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 * index }}>{label}<ArrowDownRight /></motion.a>
              ))}
            </nav>
            <div className="mobile-menu-actions"><Action href="#contact" onClick={() => setOpen(false)}>Get a Free Estimate</Action><a href="tel:+18102754547">(810) 275-4547</a></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const phrases = ["Kitchen Remodeling", "Bathroom Renovations", "Custom Decks", "Premium Tile Flooring", "Doors & Windows", "Complete Home Renovations"];
  const [phrase, setPhrase] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setPhrase((value) => (value + 1) % phrases.length), 2500);
    return () => window.clearInterval(timer);
  }, [phrases.length]);

  return (
    <section id="home" className="hero">
      <img className="hero-image" src={heroImage} width={1920} height={1280} alt="Completed luxury kitchen renovation with oak cabinetry and a stone island" />
      <div className="hero-shade" />
      <div className="architectural-grid" aria-hidden="true" />
      <div className="hero-content reveal-group">
        <p className="eyebrow">{"\n"}</p>
        <h1><span>Transform Your Home.</span><span>Built Around You.</span></h1>
        <div className="type-line"><span>Specializing in</span><AnimatePresence mode="wait"><motion.strong key={phrase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>{phrases[phrase]}</motion.strong></AnimatePresence></div>
        <p className="hero-copy">Professional craftsmanship that turns everyday rooms into beautiful, functional spaces thoughtfully built for the way you live.</p>
        <div className="hero-actions"><Action href="#contact">Get a Free Estimate</Action><Action href="#services" kind="light">Explore Our Services</Action></div>
        <a className="hero-phone" href="tel:+18102754547"><Phone aria-hidden="true" /> Call (810) 275-4547</a>
      </div>
      <motion.aside className="project-float" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.8 }}>
        <span>Residential Remodeling</span><strong>Kitchen · Bath · Tile<br />Decks · Windows</strong><small><MapPin /> Genesee County, Michigan</small>
      </motion.aside>
      <a className="scroll-cue" href="#introduction"><span>Scroll to explore</span><ArrowDownRight /></a>
    </section>
  );
}

function Introduction() {
  const highlights = ["Local Michigan Contractor", "Residential Remodeling", "Quality Craftsmanship", "Premium Materials", "Personalized Projects"];
  return (
    <section id="introduction" className="section intro-section">
      <div className="section-shell intro-grid">
        <div className="section-index"><span>01</span><i /></div>
        <div className="intro-statement reveal"><p className="eyebrow eyebrow-dark">Why Rusty Nail</p><h2>Your home deserves craftsmanship you can see — <em>and trust.</em></h2></div>
        <div className="intro-copy reveal"><p>Rusty Nail Renovations helps homeowners transform kitchens, bathrooms, floors, outdoor spaces, doors, windows, and more with professional craftsmanship and durable materials.</p><div className="highlight-list">{highlights.map((item) => <span key={item}><Check />{item}</span>)}</div></div>
        <div className="intro-image reveal-image"><img src={bathroomImage} loading="lazy" width={1600} height={1200} alt="Modern bathroom remodeled with precise porcelain tile and walnut cabinetry" /><span>Considered from surface to structure.</span></div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="section-shell">
        <div className="section-heading light reveal"><div><p className="eyebrow">What We Build</p><h2>Spaces that work beautifully.</h2></div><p>From one carefully finished room to a complete home renovation, every project begins with how you want to live.</p></div>
        <div className="service-grid">
          {services.map((service, index) => (
            <motion.article className={`service-card ${service.featured ? "service-featured" : ""}`} key={service.title} whileHover={{ y: -5 }} transition={{ duration: 0.25 }}>
              <img src={service.image} loading="lazy" width={1600} height={1200} alt={`${service.title} by Rusty Nail Renovations`} />
              <div className="service-overlay" />
              <div className="service-number">{service.number}</div>
              <div className="service-content"><h3>{service.title}</h3><p>{service.copy}</p></div>
              <a href="#contact" aria-label={`Discuss ${service.title}`}><ArrowDownRight /></a>
              <i className={`service-line service-line-${index + 1}`} />
            </motion.article>
          ))}
        </div>
        <div className="center-action"><Action href="#contact">Plan Your Project</Action></div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="work" className="section portfolio-section">
      <div className="section-shell">
        <div className="portfolio-title reveal"><p className="eyebrow eyebrow-dark">Selected Spaces</p><h2>Built for the<br /><em>Way You Live.</em></h2><p>A visual study of the rooms, surfaces, and outdoor spaces we bring together.</p></div>
        <div className="project-grid">
          {projects.map((project) => <article className={`project-card ${project.className} reveal-image`} key={project.title}><img src={project.image} loading="lazy" width={1600} height={1200} alt={`${project.label} remodeling inspiration`} /><div className="project-caption"><span>{project.label}</span><h3>{project.title}</h3><ArrowDownRight /></div></article>)}
        </div>
        <div className="center-action"><Action href="#contact" kind="outline">Start a Project Like This</Action></div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [["01", "Discover", "We listen to your vision, needs, style, and the way your space should work."], ["02", "Plan", "We discuss materials, project direction, function, and the finished result."], ["03", "Build", "We execute the renovation with careful attention to craftsmanship and detail."], ["04", "Finish", "We complete the project with clean finishing work and attention to final details."]];
  return (
    <section id="process" className="section process-section">
      <div className="blueprint" aria-hidden="true" />
      <div className="section-shell">
        <div className="section-heading light reveal"><div><p className="eyebrow">Our Process</p><h2>Clear steps.<br />Considered results.</h2></div><p>A straightforward remodeling process, centered on your home and your vision.</p></div>
        <div className="process-line"><div className="process-line-fill" />{steps.map(([number, title, copy]) => <article className="process-step reveal" key={number}><span>{number}</span><i /><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div>
    </section>
  );
}

function Materials() {
  return (
    <section className="section materials-section">
      <div className="section-shell">
        <div className="materials-head reveal"><p className="eyebrow eyebrow-dark">Surface / Structure / Finish</p><h2>Materials <em>Matter.</em></h2><p>We work with durable, quality materials chosen to create beautiful, long lasting results.</p></div>
        <div className="material-grid">{materials.map((material, index) => <article className={`material-card material-${index + 1}`} key={material.name}><img src={material.image} loading="lazy" width={1600} height={1200} alt={`Close-up representing ${material.name}`} /><div><span>{material.type}</span><h3>{material.name}</h3></div></article>)}</div>
        <div className="certified-callout reveal"><div className="certified-badge"><ShieldCheck /><span>Certified<br />Installer</span></div><div><p>Outdoor living, built with trusted materials.</p><h3>AZEK <i>+</i> TIMBERTECH</h3></div><Action href="#contact" kind="outline">Discuss Your Deck</Action></div>
      </div>
    </section>
  );
}

function MichiganMark() {
  return <svg className="michigan-mark" viewBox="0 0 360 360" role="img" aria-label="Stylized Michigan service area marker"><path d="M190 58c24 8 48 29 62 50 11 17 14 37 10 54-5 19-17 29-15 47 2 13 15 20 10 35-5 14-25 19-38 23-13 3-20 17-33 19-14 2-23-11-35-17-16-8-36-8-48-23-10-12-9-29-7-44 3-14-2-29 1-43 4-19 22-28 35-39 13-12 13-33 24-47 9-12 20-19 34-9Z" /><circle cx="177" cy="195" r="12" /><circle className="map-ring" cx="177" cy="195" r="42" /><path className="map-line" d="M177 207v76" /></svg>;
}

function ServiceArea() {
  return (
    <section id="service-area" className="section area-section">
      <div className="section-shell area-grid">
        <div className="area-visual reveal"><MichiganMark /><div className="radius-label"><MapPin /> Approximately 25-mile service radius</div></div>
        <div className="area-copy reveal"><p className="eyebrow">Local Craftsmanship</p><h2>Proudly Serving Genesee County <em>& Nearby Communities</em></h2><p>Local residential remodeling for homeowners in and around Genesee County, Michigan.</p><div className="community-grid">{communities.map((community) => <span key={community}>{community}</span>)}</div><div className="area-cta"><div><small>Planning a renovation?</small><strong>Let's talk about your project.</strong></div><Action href="#contact">Get a Free Estimate</Action></div></div>
      </div>
    </section>
  );
}

function TestimonialsFaq() {
  const testimonials = [
    ["Sample testimonial", "Kitchen Remodeling Client", "Replace this copy with a verified homeowner review describing the planning, craftsmanship, and finished kitchen."],
    ["Sample testimonial", "Bathroom Remodeling Client", "Replace this copy with a verified homeowner review about their renovated bathroom and project experience."],
    ["Sample testimonial", "Deck Project Client", "Replace this copy with a verified homeowner review about their new custom outdoor living space."],
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section proof-section">
      <div className="section-shell">
        <div className="testimonial-head reveal"><p className="eyebrow eyebrow-dark">Homeowner Stories</p><h2>Work worth<br /><em>talking about.</em></h2><span>Sample placeholders — replace with verified reviews.</span></div>
        <div className="testimonial-track">{testimonials.map(([name, role, quote]) => <article className="testimonial-card" key={role}><Quote /><p>“{quote}”</p><div><strong>{name}</strong><span>{role}</span></div></article>)}</div>
        <div className="faq-layout">
          <div className="faq-title reveal"><p className="eyebrow eyebrow-dark">Questions, Answered</p><h2>Good work starts with clarity.</h2><p>Have a different question? Call Andrew directly to discuss your project.</p><a href="tel:+18102754547"><Phone /> (810) 275-4547</a></div>
          <div className="faq-list">{faqs.map(([question, answer], index) => { const isOpen = open === index; return <article className={`faq-item ${isOpen ? "faq-open" : ""}`} key={question}><button onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen}><span>{question}</span><ChevronDown /></button><AnimatePresence initial={false}>{isOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{answer}</p></motion.div>}</AnimatePresence></article>; })}</div>
        </div>
      </div>
    </section>
  );
}

function ContactFooter() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project inquiry: ${String(data.get("projectType") ?? "Residential remodeling")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nPreferred contact: ${data.get("contactMethod")}\nProject type: ${data.get("projectType")}\n\nProject details:\n${data.get("details")}`);
    window.location.href = `mailto:rustynailrenovationsllc@comcast.net?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact" className="contact-section">
      <div className="contact-image"><img src={detailsImage} loading="lazy" width={1600} height={1200} alt="Premium marble, wood, and bronze renovation details" /><div /></div>
      <div className="section-shell contact-shell">
        <div className="contact-copy reveal"><p className="eyebrow">Start a Conversation</p><h2>Ready to Transform <em>Your Home?</em></h2><p>Tell us what you're planning. We'll help you take the next step toward a space built around the way you live.</p><div className="contact-direct"><a href="tel:+18102754547"><Phone /> <span><small>Call Andrew</small>(810) 275-4547</span></a><a href="mailto:rustynailrenovationsllc@comcast.net"><ArrowRight /><span><small>Email</small>rustynailrenovationsllc@comcast.net</span></a></div></div>
        <form className="estimate-form reveal" onSubmit={submit}><div className="form-heading"><span>Project Inquiry</span><strong>Get a Free Estimate</strong></div><div className="form-grid"><label><span>Name</span><input name="name" type="text" required autoComplete="name" placeholder="Your name" /></label><label><span>Email</span><input name="email" type="email" required autoComplete="email" placeholder="you@email.com" /></label><label><span>Phone</span><input name="phone" type="tel" required autoComplete="tel" placeholder="(810) 000-0000" /></label><label><span>Project Type</span><select name="projectType" required defaultValue=""><option value="" disabled>Select a project</option><option>Kitchen Remodeling</option><option>Bathroom Remodeling</option><option>Home Renovation</option><option>Door / Window</option><option>Custom Deck</option><option>Tile Flooring</option><option>Other</option></select></label><label className="full"><span>Preferred Contact Method</span><select name="contactMethod" defaultValue="Phone"><option>Phone</option><option>Email</option><option>Either</option></select></label><label className="full"><span>Project Details</span><textarea name="details" required rows={4} placeholder="Tell us about the space and what you have in mind." /></label></div><button className="form-submit" type="submit">Send Project Inquiry <ArrowUp /></button><small>Submitting opens your email app with your project details ready to send.</small></form>
      </div>
      <footer className="footer section-shell">
        <div className="footer-main"><div className="footer-brand"><Brand light /><p>Professional residential remodeling and craftsmanship for homeowners throughout Genesee County, Michigan.</p></div><div><strong>Services</strong><a href="#services">Kitchens & Bathrooms</a><a href="#services">Home Renovations</a><a href="#services">Custom Decks</a><a href="#services">Tile Flooring</a></div><div><strong>Service Area</strong><a href="#service-area">Genesee County</a><a href="#service-area">Flint & Burton</a><a href="#service-area">Grand Blanc & Fenton</a><a href="#service-area">Nearby Communities</a></div><div><strong>Contact</strong><a href="tel:+18102754547">(810) 275-4547</a><a href="mailto:rustynailrenovationsllc@comcast.net">Email Andrew Hunt</a><span>Genesee County, Michigan</span></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Rusty Nail Renovations LLC. All Rights Reserved.</span><a href="#home">Back to top <ArrowUp /></a></div>
      </footer>
    </section>
  );
}

function Preloader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => { const timer = window.setTimeout(() => setVisible(false), 1400); return () => window.clearTimeout(timer); }, []);
  return <AnimatePresence>{visible && <motion.div className="preloader" exit={{ y: "-100%" }} transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}><Brand light /><div className="preloader-line"><i /></div><span>Crafted for your home</span></motion.div>}</AnimatePresence>;
}

export default function LandingPage() {
  const root = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
      setShowTop(window.scrollY > 700);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(frame); lenis.destroy(); };
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion || !root.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => gsap.from(element, { y: 45, opacity: 0, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 88%" } }));
      gsap.utils.toArray<HTMLElement>(".reveal-image").forEach((element) => gsap.from(element, { clipPath: "inset(12% 0 12% 0)", opacity: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 88%" } }));
      gsap.to(".hero-image", { scale: 1.07, yPercent: 5, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
      gsap.to(".process-line-fill", { scaleX: 1, ease: "none", scrollTrigger: { trigger: ".process-line", start: "top 75%", end: "bottom 60%", scrub: true } });
    }, root);
    return () => context.revert();
  }, [reducedMotion]);

  return (
    <div ref={root} className="landing-page">
      <Preloader />
      <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <Header />
      <main><Hero /><Introduction /><Services /><Portfolio /><Process /><Materials /><ServiceArea /><TestimonialsFaq /><ContactFooter /></main>
      <AnimatePresence>{showTop && <motion.a className="to-top" href="#home" aria-label="Back to top" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}><ArrowUp /></motion.a>}</AnimatePresence>
    </div>
  );
}