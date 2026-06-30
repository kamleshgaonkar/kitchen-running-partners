import { useState, useEffect } from "react";
import {
  Wrench, ShieldCheck, RotateCcw, Cog, Package, Zap, AlertTriangle,
  Hotel, Utensils, CloudFog, Cake, Stethoscope, Building2, Factory, ChefHat,
  Flame, Snowflake, ChevronRight, Phone, Mail, MapPin, Clock, Users, Award,
  TrendingDown, Network, BadgeCheck, FileText, Recycle, IndianRupee,
} from "lucide-react";
import logoWhite from "@/assets/ecc-logo-white.svg";
import heroImg from "@/assets/hero-kitchen.jpg";
import ctaImg from "@/assets/cta-kitchen.jpg";
import techImg from "@/assets/technician.jpg";
import refurbImg from "@/assets/refurbished.jpg";
import slide1Img from "@/assets/slide-1.png";
import slide2Img from "@/assets/slide-2.png";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactForm } from "@/components/ContactForm";

const PHONE_HREF = "tel:+918452969696";
const EMAIL = "equipmentcarecompany@gmail.com";
const EMAIL_HREF = `mailto:${EMAIL}`;

export default function App() {
  return (
    <div id="home" className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Services />
        <Industries />
        <Refurbished />
        <WhyChoose />
        <Coverage />
        <About />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

const HERO_SLIDES = [
  {
    image: techImg,
    alt: "Expert technician diagnosing and repairing commercial kitchen equipment",
    caption: "Expert Diagnostic & Repair Services"
  },
  {
    image: slide1Img,
    alt: "Technician performing maintenance and repair on commercial kitchen oven equipment",
    caption: "Comprehensive Preventive Maintenance"
  },
  {
    image: ctaImg,
    alt: "Modern commercial kitchen industrial operations in action",
    caption: "24/7 Rapid Emergency Response"
  },
  {
    image: slide2Img,
    alt: "Technician servicing commercial kitchen refrigeration unit and compressor",
    caption: "End-to-End Kitchen Operations Care"
  }
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Animated Slideshow Background */}
      <div className="absolute inset-0 z-0 bg-ecc-charcoal">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.alt}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className={`h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${
                idx === currentSlide ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Overlays for contrast & legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-ecc-charcoal/95 via-ecc-charcoal/85 to-ecc-charcoal/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-ecc-charcoal/90 via-transparent to-black/30" />

      <div className="container-x relative z-20">
        <div className="max-w-3xl text-white animate-fade-up">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="eyebrow eyebrow-dot text-white/90">
              <span className="text-white/90">Commercial Kitchen Equipment Support</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-ecc-blue/80 text-white border border-white/10 backdrop-blur-md transition-all duration-500">
              <Cog className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "8s" }} />
              {HERO_SLIDES[currentSlide].caption}
            </span>
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] text-white">
            Keeping Commercial<br />Kitchens <span className="text-ecc-red">Running.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed">
            Maintenance, repairs, emergency support and refurbished equipment solutions for restaurants, hotels, cloud kitchens and food service businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">Request Support <ChevronRight className="h-4 w-4" /></a>
            <a href={PHONE_HREF} className="btn-ghost-light"><Phone className="h-4 w-4" /> Call Now</a>
          </div>

          <div className="mt-10 flex items-center justify-between max-w-xl border-t border-white/15 pt-6 gap-4 flex-wrap">
            <div className="flex items-start gap-3">
              <BadgeCheck className="h-5 w-5 text-ecc-red mt-0.5 shrink-0" />
              <p className="text-sm text-white/80">Trusted support for restaurants, hotels, cloud kitchens, bakeries and institutional kitchens.</p>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? "w-8 bg-ecc-red" : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-20 hidden md:block">
        <div className="container-x">
          <div className="grid grid-cols-3 bg-white shadow-xl rounded-t-2xl overflow-hidden border border-border border-b-0">
            {[
              { k: "Multi-City", v: "Service Network" },
              { k: "Rapid", v: "Emergency Response" },
              { k: "End-to-End", v: "Equipment Support" },
            ].map((s) => (
              <div key={s.k} className="px-6 py-5 border-l first:border-l-0 border-border">
                <div className="text-2xl font-bold text-ecc-charcoal">{s.k}</div>
                <div className="text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = ["Restaurants", "Hotels", "Cloud Kitchens", "Bakeries", "Hospitals", "Caterers", "Industrial Kitchens"];
  return (
    <div className="border-y border-border bg-muted">
      <div className="container-x py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Serving</span>
        {items.map((i) => <span key={i} className="text-sm font-medium text-ecc-charcoal/80">{i}</span>)}
      </div>
    </div>
  );
}

function Problem() {
  const stats = [
    { icon: Wrench, label: "Equipment Repairs", desc: "Fast diagnosis. Minimal disruption." },
    { icon: ShieldCheck, label: "Preventive Maintenance", desc: "Plan ahead. Avoid surprises." },
    { icon: RotateCcw, label: "Refurbished Equipment", desc: "Smart, cost-effective solutions." },
  ];
  return (
    <section className="section bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="eyebrow eyebrow-dot">The Reality</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
            When Your Kitchen Stops,<br /> <span className="text-ecc-red">Business Stops.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            A single equipment failure can disrupt service, impact food quality and affect revenue.
          </p>
          <p className="mt-3 text-muted-foreground text-lg leading-relaxed">
            ECC provides reliable commercial kitchen equipment support that helps businesses stay operational with minimal downtime.
          </p>
        </div>
        <div className="grid gap-4">
          {stats.map((s) => (
            <div key={s.label} className="card-hover flex items-start gap-5 rounded-2xl border border-border bg-white p-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ecc-blue/10 text-ecc-blue">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold">{s.label}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Wrench, title: "Equipment Repairs", desc: "Fast diagnosis and repair support." },
    { icon: ShieldCheck, title: "Preventive Maintenance", desc: "Reduce breakdowns and extend equipment life." },
    { icon: Cog, title: "AMC Programs", desc: "Planned maintenance for reliable performance." },
    { icon: Package, title: "Spare Parts Assistance", desc: "Support sourcing quality replacement parts." },
    { icon: RotateCcw, title: "Equipment Refurbishment", desc: "Restore equipment performance and reliability." },
    { icon: Zap, title: "Emergency Support", desc: "Rapid response for critical equipment failures." },
  ];
  return (
    <section id="services" className="section bg-muted">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow eyebrow-dot">What We Do</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">One Call. <span className="text-ecc-blue">Complete Support.</span></h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Instead of coordinating multiple vendors, technicians and suppliers, businesses can rely on ECC for end-to-end equipment support.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article key={s.title} className="card-hover group rounded-2xl bg-white border border-border p-7">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-ecc-red/10 text-ecc-red group-hover:bg-ecc-red group-hover:text-white transition">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
              <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ecc-blue hover:gap-2 transition-all">
                Enquire <ChevronRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const items = [
    { icon: Hotel, name: "Hotels" },
    { icon: Utensils, name: "Restaurants" },
    { icon: CloudFog, name: "Cloud Kitchens" },
    { icon: Cake, name: "Bakeries" },
    { icon: Stethoscope, name: "Hospitals" },
    { icon: Building2, name: "Corporate Cafeterias" },
    { icon: Factory, name: "Industrial Kitchens" },
    { icon: ChefHat, name: "Catering Businesses" },
  ];
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow eyebrow-dot">Industries</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">Built for <span className="text-ecc-red">Commercial Kitchens.</span></h2>
          <p className="mt-5 text-lg text-muted-foreground">ECC supports food service operations across multiple industries.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((i) => (
            <div key={i.name} className="card-hover group rounded-2xl border border-border bg-white p-6 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-ecc-blue/10 text-ecc-blue group-hover:bg-ecc-blue group-hover:text-white transition">
                <i.icon className="h-7 w-7" />
              </div>
              <p className="mt-4 font-semibold text-ecc-charcoal">{i.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Refurbished() {
  const cats = [
    { icon: Flame, name: "Cooking Equipment" },
    { icon: Snowflake, name: "Refrigeration Equipment" },
    { icon: Cake, name: "Bakery Equipment" },
    { icon: Recycle, name: "Dishwashing Equipment" },
    { icon: ChefHat, name: "Food Preparation Equipment" },
    { icon: Factory, name: "Stainless Steel Equipment" },
  ];
  return (
    <section id="equipment" className="section bg-ecc-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={refurbImg} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-ecc-charcoal via-ecc-charcoal/90 to-ecc-charcoal/60" />
      </div>
      <div className="container-x relative z-10 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <span className="eyebrow eyebrow-dot text-white/80">Refurbished</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-white">
            Refurbished Equipment That <span className="text-ecc-red">Makes Business Sense.</span>
          </h2>
          <p className="mt-5 text-lg text-white/80">Not every operation requires brand-new equipment.</p>
          <p className="mt-3 text-lg text-white/80">ECC helps businesses source quality refurbished commercial kitchen equipment at cost-effective prices.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">View Available Equipment <ChevronRight className="h-4 w-4" /></a>
            <a href={PHONE_HREF} className="btn-ghost-light"><Phone className="h-4 w-4" /> Call Now</a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { i: IndianRupee, t: "Cost-Effective" },
              { i: ShieldCheck, t: "Tested & Restored" },
              { i: Clock, t: "Quick Deployment" },
            ].map((b) => (
              <div key={b.t} className="rounded-xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                <b.i className="h-5 w-5 text-ecc-red" />
                <p className="mt-2 text-xs font-medium text-white/80">{b.t}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {cats.map((c) => (
            <div key={c.name} className="card-hover rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-ecc-red/15 text-ecc-red">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-white">{c.name}</h3>
              <p className="mt-1 text-sm text-white/60">Sourced, restored, ready to deploy.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const reasons = [
    { icon: Users, t: "Experienced Technical Network" },
    { icon: TrendingDown, t: "Reduced Downtime" },
    { icon: Network, t: "Multi-City Support" },
    { icon: IndianRupee, t: "Cost-Effective Solutions" },
    { icon: Clock, t: "Reliable Service Response" },
    { icon: ChefHat, t: "Commercial Kitchen Expertise" },
    { icon: FileText, t: "Professional Reporting" },
    { icon: Award, t: "Longer Equipment Life" },
  ];
  return (
    <section className="section bg-muted">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow eyebrow-dot">Why ECC</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">Why Businesses <span className="text-ecc-blue">Choose ECC.</span></h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r) => (
            <div key={r.t} className="card-hover rounded-2xl bg-white border border-border p-6">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-ecc-red/10 text-ecc-red">
                <r.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 font-semibold text-ecc-charcoal">{r.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  const cities = ["Mumbai", "Pune", "Goa"];
  return (
    <section id="coverage" className="section bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="eyebrow eyebrow-dot">Coverage</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
            Supporting Kitchens Across <span className="text-ecc-red">Multiple Cities.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            ECC's growing network of commercial kitchen technicians enables us to support businesses across multiple locations.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {cities.map((c) => (
              <div key={c} className="flex items-center gap-3 rounded-xl border border-border bg-white p-4">
                <MapPin className="h-5 w-5 text-ecc-red" />
                <span className="font-semibold">{c}</span>
              </div>
            ))}
            <div className="flex items-center gap-3 rounded-xl border border-dashed border-ecc-blue/40 bg-ecc-blue/5 p-4 sm:col-span-2">
              <Network className="h-5 w-5 text-ecc-blue" />
              <span className="font-semibold text-ecc-blue">And Expanding Across India</span>
            </div>
          </div>
        </div>
        <IndiaMap activeCities={cities} />
      </div>
    </section>
  );
}

function IndiaMap({ activeCities }: { activeCities: string[] }) {
  const pins = [
    { name: "Mumbai", x: 130, y: 305 },
    { name: "Pune", x: 158, y: 320 },
    { name: "Goa", x: 138, y: 360 },
  ];
  return (
    <div className="relative rounded-3xl border border-border bg-gradient-to-br from-ecc-gray to-white p-6 shadow-sm">
      <svg viewBox="0 0 500 560" className="w-full h-auto" role="img" aria-label="India coverage map">
        <defs>
          <linearGradient id="land" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#E9EEF7" />
            <stop offset="100%" stopColor="#D6DEEC" />
          </linearGradient>
        </defs>
        <path
          fill="url(#land)"
          stroke="#2C51A3"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          d="M230,40 C260,55 290,70 305,95 C325,120 340,130 360,140 C380,150 395,170 390,195 C385,215 360,225 355,250 C350,275 365,295 360,320 C355,345 335,365 320,395 C310,420 305,450 285,470 C265,490 240,505 220,495 C200,485 195,460 180,445 C165,430 145,415 140,390 C135,365 150,345 145,320 C140,295 120,275 115,250 C110,225 125,205 130,180 C135,155 130,135 145,115 C160,95 185,80 200,65 C210,55 220,45 230,40 Z"
        />
        {pins.map((p) => (
          <g key={p.name}>
            <circle cx={p.x} cy={p.y} r="14" fill="#D71F37" opacity="0.18">
              <animate attributeName="r" values="10;22;10" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.25;0;0.25" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cx={p.x} cy={p.y} r="6" fill="#D71F37" stroke="white" strokeWidth="2" />
            <text x={p.x + 12} y={p.y + 4} fontSize="14" fontWeight="700" fill="#231F20">{p.name}</text>
          </g>
        ))}
      </svg>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Active in {activeCities.length} cities • Expanding nationwide
      </p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section bg-muted">
      <div className="container-x grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <img src={techImg} alt="ECC technician servicing a commercial oven" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ecc-charcoal/90 to-transparent">
              <p className="text-white font-bold text-lg">Practical support. Real uptime.</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <span className="eyebrow eyebrow-dot">About</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
            About <span className="text-ecc-blue">Equipment Care Company.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Equipment Care Company (ECC) specializes in commercial kitchen equipment maintenance, repair, technical support and refurbishment.
          </p>
          <p className="mt-5 font-semibold text-ecc-charcoal">Our mission is simple:</p>
          <ul className="mt-3 space-y-2">
            {["Reduce downtime.", "Increase equipment life.", "Keep kitchens operational."].map((m) => (
              <li key={m} className="flex items-center gap-3 text-lg">
                <span className="h-2 w-2 rounded-full bg-ecc-red" /> {m}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            From restaurants and hotels to cloud kitchens and institutional facilities, ECC provides practical support solutions that help businesses focus on serving customers.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <img src={ctaImg} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-ecc-charcoal/95 to-ecc-charcoal/70" />
      <div className="container-x relative z-10 text-center max-w-3xl mx-auto">
        <AlertTriangle className="mx-auto h-10 w-10 text-ecc-red" />
        <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-white leading-tight">Need Equipment Support?</h2>
        <p className="mt-5 text-lg text-white/80">
          Whether you need urgent repairs, preventive maintenance, technical assistance or refurbished equipment, ECC is ready to support your kitchen operations.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#contact" className="btn-primary">Request Support <ChevronRight className="h-4 w-4" /></a>
          <a href={PHONE_HREF} className="btn-ghost-light"><Phone className="h-4 w-4" /> Call Now</a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-12">
        <div>
          <span className="eyebrow eyebrow-dot">Contact</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
            Let's Keep Your <span className="text-ecc-red">Kitchen Running.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Reach out for service requests, AMC enquiries or refurbished equipment quotations.
          </p>
          <div className="mt-8 space-y-4">
            <ContactRow icon={Phone} label="Phone" value="+91 8452 969696" href={PHONE_HREF} />
            <ContactRow icon={Mail} label="Email" value={EMAIL} href={EMAIL_HREF} />
            <ContactRow icon={MapPin} label="Service Locations" value="Mumbai • Pune • Goa • Expanding across India" />
          </div>
          <a
            href="https://wa.me/918452969696?text=Hi%20ECC%2C%20I%20need%20equipment%20support."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 font-semibold text-white shadow-lg hover:brightness-95 transition"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.81 11.81 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607z"/></svg>
            </span>
            Chat on WhatsApp
          </a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-4 hover:border-ecc-blue/40 transition">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-ecc-blue/10 text-ecc-blue">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{label}</p>
        <p className="mt-0.5 font-semibold text-ecc-charcoal break-words">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Footer() {
  return (
    <footer className="bg-ecc-charcoal text-white">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logoWhite} alt="Equipment Care Company" className="h-12 w-auto" />
          <p className="mt-5 text-white/70 max-w-md leading-relaxed">
            Equipment Care Company supports commercial kitchens with maintenance, repairs, AMC programs and refurbished equipment solutions.
          </p>
          <p className="mt-6 text-xl font-bold">Keeping Commercial Kitchens Running.</p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">Menu</h4>
          <ul className="mt-4 space-y-2.5 text-white/70">
            {[
              ["Home", "#home"], ["About", "#about"], ["Services", "#services"],
              ["Equipment", "#equipment"], ["Coverage", "#coverage"], ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={l}><a href={h} className="hover:text-white transition">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-white/70 text-sm">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-ecc-red" /> +91 8452 969696</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-ecc-red" /> {EMAIL}</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-ecc-red" /> Mumbai • Pune • Goa</li>
          </ul>
          <div className="mt-5 flex gap-3">
            {["LinkedIn", "Instagram", "Facebook"].map((s) => (
              <a key={s} href="#" aria-label={s} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 hover:bg-white hover:text-ecc-charcoal transition text-xs font-bold">
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Equipment Care Company. All rights reserved.</p>
          <p>Commercial Kitchen Equipment Support Network</p>
        </div>
      </div>
    </footer>
  );
}
