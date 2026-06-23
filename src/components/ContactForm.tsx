import { useState } from "react";
import { z } from "zod";

const CONTACT_EMAIL = "equipmentcarecompany@gmail.com";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  company: z.string().trim().min(2, "Company is required").max(120),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  email: z.string().trim().email("Valid email required").max(160),
  requirement: z.string().min(1, "Please select"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const requirements = [
  "Equipment Repair",
  "Preventive Maintenance",
  "AMC Program",
  "Spare Parts",
  "Refurbished Equipment",
  "Emergency Support",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (fe[i.path[0] as string] = i.message));
      setErrors(fe);
      return;
    }
    setErrors({});

    const subject = `Service enquiry: ${data.requirement} — ${data.company}`;
    const body = [
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Requirement: ${data.requirement}`,
      "",
      "Message:",
      data.message || "(none)",
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-white p-8 text-center">
        <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ecc-blue/10 text-ecc-blue text-2xl">✓</div>
        <h3 className="text-xl font-bold">Request prepared</h3>
        <p className="mt-2 text-muted-foreground">
          Your email client should open with your enquiry ready to send to {CONTACT_EMAIL}.
        </p>
      </div>
    );
  }

  const field = "w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-ecc-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ecc-blue/40 focus:border-ecc-blue transition";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-white p-6 md:p-8 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium" htmlFor="name">Name</label>
          <input id="name" name="name" className={field + " mt-1.5"} placeholder="Your full name" maxLength={80} />
          {errors.name && <p className="mt-1 text-xs text-ecc-red">{errors.name}</p>}
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="company">Company</label>
          <input id="company" name="company" className={field + " mt-1.5"} placeholder="Business / brand name" maxLength={120} />
          {errors.company && <p className="mt-1 text-xs text-ecc-red">{errors.company}</p>}
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" className={field + " mt-1.5"} placeholder="+91" maxLength={20} />
          {errors.phone && <p className="mt-1 text-xs text-ecc-red">{errors.phone}</p>}
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className={field + " mt-1.5"} placeholder="you@business.com" maxLength={160} />
          {errors.email && <p className="mt-1 text-xs text-ecc-red">{errors.email}</p>}
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium" htmlFor="requirement">Service requirement</label>
          <select id="requirement" name="requirement" className={field + " mt-1.5"} defaultValue="">
            <option value="" disabled>Select a service</option>
            {requirements.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
          {errors.requirement && <p className="mt-1 text-xs text-ecc-red">{errors.requirement}</p>}
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium" htmlFor="message">Message <span className="text-muted-foreground font-normal">(optional)</span></label>
          <textarea id="message" name="message" rows={4} className={field + " mt-1.5 resize-none"} placeholder="Equipment type, location, urgency..." maxLength={1000} />
        </div>
      </div>
      <button type="submit" className="btn-primary mt-6 w-full md:w-auto">Send Enquiry</button>
      <p className="mt-4 text-xs text-muted-foreground">
        Submitting opens your email app with the enquiry pre-filled to {CONTACT_EMAIL}.
      </p>
    </form>
  );
}
