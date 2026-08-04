"use client";

import { FormEvent, useMemo, useState } from "react";
import { ChevronDown, LogIn, Menu, Phone, X } from "lucide-react";
import "./calculator.css";

const currencies = {
  USD: { label: "US Dollar", symbol: "$", locale: "en-US" },
  CAD: { label: "Canadian Dollar", symbol: "$", locale: "en-CA" },
  GBP: { label: "British Pound", symbol: "£", locale: "en-GB" },
  EUR: { label: "Euro", symbol: "€", locale: "de-DE" },
  AUD: { label: "Australian Dollar", symbol: "$", locale: "en-AU" },
  SGD: { label: "Singapore Dollar", symbol: "$", locale: "en-SG" },
  AED: { label: "UAE Dirham", symbol: "د.إ", locale: "en-AE" },
} as const;

type CurrencyCode = keyof typeof currencies;

type CalculatorFieldProps = {
  id: string;
  label: React.ReactNode;
  value: string;
  placeholder: string;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  helper?: string;
  onChange: (value: string) => void;
};

const stats = [
  ["64%", "of diners still call to make a reservation"],
  ["74%", "of diners are open to AI phone booking"],
  ["28%", "of operators currently use AI to process reservations"],
];

const faqs = [
  [
    "What is Voice AI for restaurants?",
    "Voice AI is an AI phone answering system built for restaurants. It picks up every call, answers common guest questions, and books reservations directly into your system — 24/7, with no hold time. SevenRooms Voice AI works alongside your team, so staff spend less time on the phone and more time with guests in the room.",
  ],
  [
    "How much revenue do missed calls cost a restaurant?",
    "It depends on your call volume, party size, and average spend — which is exactly what this calculator estimates. At the industry average of 65 calls per day, a restaurant missing 40% of calls could be losing hundreds of thousands in reservation revenue every year. Enter your own numbers above to see your figure.",
  ],
  [
    "How is missed call revenue calculated?",
    "We take your daily call volume, multiply by the share of calls that go unanswered, and assume roughly half of missed calls are reservation-intent. Each missed reservation is valued at your average party size times your average spend per guest, annualized over the year.",
  ],
  [
    "Can AI actually answer restaurant phone calls and take bookings?",
    "Yes. SevenRooms Voice AI answers calls in a natural voice, handles questions about hours, menus, and policies, and books reservations straight into SevenRooms — no callbacks, no voicemail. 74% of diners say they're open to booking by AI phone call.",
  ],
  [
    "How do restaurants stop missing phone calls?",
    "The traditional options are hiring more front-of-house staff or a call center — both expensive. An AI phone answering system is a cost-effective fix: it answers every call instantly, including during peak service and after hours, when most missed calls happen.",
  ],
];

function CalculatorField({
  id,
  label,
  value,
  placeholder,
  min,
  max,
  step,
  prefix,
  suffix,
  helper,
  onChange,
}: CalculatorFieldProps) {
  return (
    <div className="sr-field">
      <label htmlFor={id}>{label}</label>
      <div className="sr-input-shell">
        {prefix && <span className="sr-input-affix sr-prefix">{prefix}</span>}
        <input
          id={id}
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
        />
        {suffix && <span className="sr-input-affix sr-suffix">{suffix}</span>}
      </div>
      {helper && <p className="sr-helper">{helper}</p>}
    </div>
  );
}

export default function DoorDashCalculatorPage() {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [dailyCalls, setDailyCalls] = useState("");
  const [missedPercent, setMissedPercent] = useState(40);
  const [partySize, setPartySize] = useState("");
  const [spend, setSpend] = useState("");
  const [wage, setWage] = useState("");
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const results = useMemo(() => {
    const daily = Number(dailyCalls);
    const party = Number(partySize);
    const guestSpend = Number(spend);
    if (!daily || !party || !guestSpend) return null;

    const missedCalls = daily * (missedPercent / 100);
    const missedReservations = missedCalls * 0.5;
    const annualRevenue = missedReservations * party * guestSpend * 365;
    const recoverableRevenue = annualRevenue * 0.85;
    const annualLabor = Number(wage) ? Number(wage) * 27 * 12 * (daily / 65) : null;

    return { missedCalls, annualRevenue, recoverableRevenue, annualLabor };
  }, [dailyCalls, missedPercent, partySize, spend, wage]);

  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat(currencies[currency].locale, {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
      }),
    [currency],
  );

  const submitEstimate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="sevenrooms-calculator">
      <header className="sr-header">
        <div className="sr-header-inner">
          <a className="sr-logo" href="#top" aria-label="SevenRooms home">
            <span>sevenrooms</span>
            <span className="sr-logo-mark" aria-hidden="true">7</span>
          </a>
          <nav className="sr-nav" aria-label="Primary navigation">
            {['Platform', 'Resources', 'About'].map((item) => (
              <a href={`#${item.toLowerCase()}`} key={item}>{item}<ChevronDown size={14} /></a>
            ))}
            <a href="#contact">Contact Us</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <div className="sr-header-actions">
            <a className="sr-login" href="#login"><LogIn size={16} /> Login</a>
            <a className="sr-demo" href="#calculator">Get a Demo</a>
            <button className="sr-menu" type="button" aria-label="Open navigation"><Menu size={22} /></button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="sr-hero">
          <div className="sr-container sr-hero-inner">
            <p className="sr-kicker sr-kicker-light">Voice AI</p>
            <h1>How much are missed calls costing your restaurant?</h1>
            <p className="sr-hero-copy">Missed calls equal missed bookings and revenue. Use this free calculator to see what unanswered calls cost your venue each year — and how much an AI phone answering system like SevenRooms Voice AI could recover.</p>
          </div>
        </section>

        <section className="sr-stats" aria-label="Restaurant phone statistics">
          <div className="sr-container sr-stats-grid">
            {stats.map(([value, label]) => (
              <div className="sr-stat" key={value}>
                <strong>{value}</strong>
                <p>{label}</p>
                <small>SevenRooms Research</small>
              </div>
            ))}
          </div>
        </section>

        <section className="sr-calculator-section" id="calculator">
          <div className="sr-container">
            <p className="sr-kicker">Your Numbers</p>
            <h2>Calculate your missed call revenue</h2>
            <div className="sr-calculator-grid">
              <div className="sr-fields">
                <div className="sr-field">
                  <label htmlFor="currency">Your currency</label>
                  <div className="sr-select-shell">
                    <select id="currency" value={currency} onChange={(event) => setCurrency(event.target.value as CurrencyCode)}>
                      {Object.entries(currencies).map(([code, details]) => (
                        <option value={code} key={code}>{code} — {details.label} ({details.symbol})</option>
                      ))}
                    </select>
                    <ChevronDown size={17} />
                  </div>
                </div>

                <CalculatorField id="daily" label="How many calls does your restaurant receive per day?" value={dailyCalls} placeholder="65" min={1} max={500} suffix="calls / day" helper="Check your phone system logs. Industry average is 65 calls/day." onChange={setDailyCalls} />

                <div className="sr-field sr-slider-field">
                  <div className="sr-slider-label"><label htmlFor="miss">What % of calls go unanswered?</label><strong>{missedPercent}%</strong></div>
                  <input id="miss" type="range" min={5} max={80} step={1} value={missedPercent} style={{ background: `linear-gradient(to right, #1f1d1b ${((missedPercent - 5) / 75) * 100}%, #ded8c9 ${((missedPercent - 5) / 75) * 100}%)` }} onChange={(event) => setMissedPercent(Number(event.target.value))} />
                  <div className="sr-slider-limits"><span>5%</span><span>80%</span></div>
                </div>

                <CalculatorField id="party" label="What's your average party size?" value={partySize} placeholder="2.5" min={1} max={20} step={0.5} suffix="guests" onChange={setPartySize} />
                <CalculatorField id="spend" label="Average spend per guest?" value={spend} placeholder="75" min={1} max={99999} prefix={currencies[currency].symbol} onChange={setSpend} />
                <CalculatorField id="wage" label={<>Average staff hourly wage <span className="sr-optional">Optional</span></>} value={wage} placeholder="18" min={1} max={2000} prefix={currencies[currency].symbol} suffix="/ hr" helper="Used to estimate your annual phone labor cost." onChange={setWage} />
              </div>

              <aside className="sr-results-card">
                <p className="sr-kicker sr-kicker-card">Your Revenue at Risk</p>
                {!results ? (
                  <div className="sr-results-empty">
                    <Phone size={34} strokeWidth={1.5} />
                    <p>Enter your restaurant&apos;s numbers to see what unanswered calls are costing your venue each year.</p>
                    <div className="sr-progress"><span style={{ width: `${[dailyCalls, partySize, spend].filter(Boolean).length * 33.33}%` }} /></div>
                    <small>{[dailyCalls, partySize, spend].filter(Boolean).length} of 3 key details added</small>
                  </div>
                ) : (
                  <div className="sr-results">
                    <p className="sr-results-label">Estimated annual revenue at risk</p>
                    <strong className="sr-result-total">{currencyFormatter.format(results.annualRevenue)}</strong>
                    <div className="sr-result-row"><span>Missed calls per day</span><strong>{results.missedCalls.toFixed(1)}</strong></div>
                    <div className="sr-result-row sr-result-highlight"><span>Potential revenue recovered</span><strong>{currencyFormatter.format(results.recoverableRevenue)}</strong></div>
                    {results.annualLabor !== null && <div className="sr-result-row"><span>Annual phone labor cost</span><strong>{currencyFormatter.format(results.annualLabor)}</strong></div>}
                  </div>
                )}

                <p className="sr-email-intro">Find out how you stack up against the industry average — and how much Voice AI could save your venue each year.</p>
                {submitted ? (
                  <div className="sr-success" role="status"><strong>Your estimate is ready.</strong><span>Thanks — we&apos;ll be in touch with your full savings report.</span></div>
                ) : (
                  <form className="sr-email-form" onSubmit={submitEstimate}>
                    <input name="firstname" type="text" placeholder="First name" aria-label="First name" required />
                    <input name="email" type="email" placeholder="Work email" aria-label="Work email" required />
                    <input name="restaurant_name" type="text" placeholder="Restaurant name" aria-label="Restaurant name" required />
                    <button type="submit">Email me my savings estimate <span aria-hidden="true">→</span></button>
                    <small>We&apos;ll include your industry benchmark comparison and Voice AI ROI. No spam.</small>
                  </form>
                )}
              </aside>
            </div>
          </div>
        </section>

        <section className="sr-testimonial">
          <div className="sr-testimonial-grid">
            <div className="sr-quote-column">
              <div className="sr-quote">
                <blockquote>“Since switching to SevenRooms Voice AI, we&apos;ve practically retired our phones at all four of our U.S. locations. Every guest call is handled, no missed reservations, no staff interruptions. It&apos;s freed up hours each week, letting our team focus on what really matters, our guests in the room.”</blockquote>
                <p><strong>David Chen</strong><span>COO, Casper Hospitality</span></p>
              </div>
              <div className="sr-metrics">
                <div><strong>3,800+</strong><span>Calls handled</span></div>
                <div><strong>850+</strong><span>Covers created</span></div>
                <div><strong>$28K+</strong><span>Booked GMV</span></div>
              </div>
            </div>
            <div className="sr-photo" role="img" aria-label="Guests enjoying dinner together"><div className="sr-photo-overlay"><span>More time for</span><strong>the guests in the room.</strong></div></div>
          </div>
        </section>

        <section className="sr-faq">
          <div className="sr-faq-inner">
            <p className="sr-kicker">FAQ</p>
            <h2>Restaurant Voice AI, answered</h2>
            <div className="sr-faq-list">
              {faqs.map(([question, answer], index) => {
                const isOpen = openFaq === index;
                return (
                  <div className="sr-faq-item" key={question}>
                    <button type="button" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                      <span>{question}</span><ChevronDown className={isOpen ? "is-open" : ""} size={21} />
                    </button>
                    <div id={`faq-answer-${index}`} className={`sr-faq-answer ${isOpen ? "is-open" : ""}`} role="region"><p>{answer}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="sr-fine-print"><p>Revenue estimates are based on the figures you provide. Approximately 50% of missed calls are assumed to be reservation-intent, based on SevenRooms Voice AI beta data. Phone hours scaled from a 27-hour/month industry average at 65 calls/day. Actual results will vary by venue.</p></section>
      </main>

      <footer className="sr-footer">
        <div className="sr-container sr-footer-inner">
          <a className="sr-footer-logo" href="#top">SevenRooms</a>
          <nav aria-label="Footer navigation"><a href="#calculator">Voice AI</a><a href="#stories">Success Stories</a><a href="#calculator">Get a Demo</a><a href="#terms">Terms</a><a href="#privacy">Privacy</a></nav>
          <span>© 2026 SevenRooms, a DoorDash company</span>
        </div>
      </footer>
    </div>
  );
}
