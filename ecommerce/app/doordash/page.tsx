import "./doordash-theme.css";

const colorGroups = [
  {
    title: "Brand",
    swatches: [
      { name: "Red (Primary)", varName: "--dd-red", value: "#ff3008" },
      { name: "Red Hover", varName: "--dd-red-hover", value: "#e02b07" },
      { name: "Red Active", varName: "--dd-red-active", value: "#c42506" },
      { name: "Navy", varName: "--dd-navy", value: "#233069" },
      { name: "Blue Mid", varName: "--dd-blue-mid", value: "#4969f5" },
      { name: "Blue Light", varName: "--dd-blue-light", value: "#e4ebf7" },
    ],
  },
  {
    title: "Accents",
    swatches: [
      { name: "Teal Dark", varName: "--dd-teal-dark", value: "#024c52" },
      { name: "Teal Mid", varName: "--dd-teal-mid", value: "#4ba0a7" },
      { name: "Burgundy", varName: "--dd-burgundy", value: "#810b00" },
      { name: "Yellow Dark", varName: "--dd-yellow-dark", value: "#a16c00" },
      { name: "Pink", varName: "--dd-pink", value: "#e97c69" },
      { name: "Stone", varName: "--dd-stone", value: "#e7e4d9" },
    ],
  },
  {
    title: "Neutrals & Text",
    swatches: [
      { name: "White", varName: "--dd-white", value: "#ffffff" },
      { name: "Grey Light", varName: "--dd-grey-light", value: "#f6f6f6" },
      { name: "Grey Dark", varName: "--dd-grey-dark", value: "#414141" },
      { name: "Text Primary", varName: "--dd-text-primary", value: "#191919" },
      { name: "Text Medium", varName: "--dd-text-medium", value: "#434343" },
    ],
  },
];

const typeScale = [
  { label: "H1", className: "dd-h1", varName: "--dd-text-h1-size", value: "48px / 1.1" },
  { label: "H2", className: "dd-h2", varName: "--dd-text-h2-size", value: "36px / 1.15" },
  { label: "H3", className: "dd-h3", varName: "--dd-text-h3-size", value: "28px / 1.2" },
  { label: "H4", className: "dd-h4", varName: "--dd-text-h4-size", value: "22px / 1.3" },
  { label: "H5", className: "dd-h5", varName: "--dd-text-h5-size", value: "18px / 1.4" },
  { label: "Body", className: "dd-body", varName: "--dd-text-body-size", value: "16px / 1.5" },
  { label: "Small", className: "dd-small", varName: "--dd-text-small-size", value: "14px / 1.4" },
  { label: "Caption", className: "dd-caption", varName: "--dd-text-caption-size", value: "12px / 1.3" },
];

const spacingScale = [
  { name: "space-1", value: "4px" },
  { name: "space-2", value: "8px" },
  { name: "space-3", value: "12px" },
  { name: "space-4", value: "16px" },
  { name: "space-5", value: "24px" },
  { name: "space-6", value: "32px" },
  { name: "space-7", value: "48px" },
  { name: "space-8", value: "64px" },
  { name: "space-9", value: "96px" },
  { name: "space-10", value: "128px" },
];

const radiusScale = [
  { name: "radius-sm", varName: "--dd-radius-sm", value: "8px" },
  { name: "radius-md", varName: "--dd-radius-md", value: "12px" },
  { name: "radius-lg", varName: "--dd-radius-lg", value: "16px" },
  { name: "radius-pill", varName: "--dd-radius-pill", value: "999px" },
];

const shadowScale = [
  { name: "shadow-sm", varName: "--dd-shadow-sm" },
  { name: "shadow-md", varName: "--dd-shadow-md" },
  { name: "shadow-lg", varName: "--dd-shadow-lg" },
];

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "var(--dd-space-9)" }}>
      <h2 className="dd-h2" style={{ marginBottom: "var(--dd-space-2)" }}>{title}</h2>
      {description && (
        <p className="dd-body" style={{ color: "var(--dd-text-medium)", marginBottom: "var(--dd-space-5)", maxWidth: 640 }}>
          {description}
        </p>
      )}
      {children}
    </section>
  );
}

export default function DoorDashDesignSystemPage() {
  return (
    <div className="doordash-theme" style={{ padding: "var(--dd-space-7) 0" }}>
      <div className="dd-container">
        <p className="dd-small" style={{ color: "var(--dd-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>
          DoorDash Commerce Platform
        </p>
        <h1 className="dd-h1" style={{ marginTop: "var(--dd-space-2)", marginBottom: "var(--dd-space-2)" }}>
          DoorDash Design System
        </h1>
        <p className="dd-body" style={{ color: "var(--dd-text-medium)", maxWidth: 640, marginBottom: "var(--dd-space-9)" }}>
          Tokens extracted from merchants.doordash.com, for use across DoorDash-styled pages in this project.
          Wrap any page section in a <code>.doordash-theme</code> container to inherit these styles.
        </p>

        <Section title="Colors" description="Brand, accent, and neutral tokens from the DoorDash palette.">
          {colorGroups.map((group) => (
            <div key={group.title} style={{ marginBottom: "var(--dd-space-6)" }}>
              <h3 className="dd-h5" style={{ marginBottom: "var(--dd-space-3)" }}>{group.title}</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "var(--dd-space-4)" }}>
                {group.swatches.map((s) => (
                  <div key={s.varName} className="dd-card" style={{ padding: 0, overflow: "hidden" }}>
                    <div style={{ height: 72, backgroundColor: s.value }} />
                    <div style={{ padding: "var(--dd-space-3)" }}>
                      <p className="dd-small" style={{ fontWeight: 700 }}>{s.name}</p>
                      <p className="dd-caption">{s.varName}</p>
                      <p className="dd-caption">{s.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Section>

        <Section title="Typography" description="Heading scale, body copy, and font families.">
          <div className="dd-card" style={{ marginBottom: "var(--dd-space-5)" }}>
            {typeScale.map((t) => (
              <div
                key={t.label}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: "var(--dd-space-4)",
                  padding: "var(--dd-space-3) 0",
                  borderBottom: "1px solid var(--dd-border)",
                }}
              >
                <span className={t.className} style={{ margin: 0 }}>{t.label} — Grow your restaurant</span>
                <span className="dd-caption" style={{ whiteSpace: "nowrap" }}>{t.varName} · {t.value}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "var(--dd-space-4)" }}>
            <div className="dd-card">
              <p className="dd-caption" style={{ marginBottom: "var(--dd-space-2)" }}>--dd-font-primary</p>
              <p style={{ fontFamily: "var(--dd-font-primary)", fontSize: "1.25rem" }}>Aa Bb Cc 123</p>
            </div>
            <div className="dd-card">
              <p className="dd-caption" style={{ marginBottom: "var(--dd-space-2)" }}>--dd-font-secondary</p>
              <p style={{ fontFamily: "var(--dd-font-secondary)", fontSize: "1.25rem" }}>Aa Bb Cc 123</p>
            </div>
            <div className="dd-card">
              <p className="dd-caption" style={{ marginBottom: "var(--dd-space-2)" }}>--dd-font-condensed</p>
              <p style={{ fontFamily: "var(--dd-font-condensed)", fontSize: "1.25rem" }}>Aa Bb Cc 123</p>
            </div>
          </div>
        </Section>

        <Section title="Spacing" description="4px-based spacing scale used for padding, margin, and gaps.">
          <div className="dd-card">
            {spacingScale.map((s) => (
              <div key={s.name} style={{ display: "flex", alignItems: "center", gap: "var(--dd-space-4)", padding: "var(--dd-space-2) 0" }}>
                <span className="dd-small" style={{ width: 90, fontWeight: 700 }}>{s.name}</span>
                <span className="dd-caption" style={{ width: 50 }}>{s.value}</span>
                <div style={{ height: 16, width: s.value, backgroundColor: "var(--dd-red)", borderRadius: 4 }} />
              </div>
            ))}
          </div>
        </Section>

        <Section title="Radius & Shadow" description="Corner rounding and elevation used on cards, buttons, and inputs.">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "var(--dd-space-4)", marginBottom: "var(--dd-space-5)" }}>
            {radiusScale.map((r) => (
              <div key={r.name} className="dd-card" style={{ textAlign: "center" }}>
                <div style={{ height: 64, backgroundColor: "var(--dd-blue-light)", borderRadius: `var(${r.varName})`, marginBottom: "var(--dd-space-3)" }} />
                <p className="dd-small" style={{ fontWeight: 700 }}>{r.name}</p>
                <p className="dd-caption">{r.value}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "var(--dd-space-4)" }}>
            {shadowScale.map((s) => (
              <div key={s.name} style={{ height: 80, borderRadius: "var(--dd-radius-md)", backgroundColor: "var(--dd-white)", boxShadow: `var(${s.varName})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p className="dd-small" style={{ fontWeight: 700 }}>{s.name}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Buttons" description="Primary, secondary, and tertiary button styles.">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--dd-space-4)", alignItems: "center" }}>
            <button className="dd-btn dd-btn-primary">Talk to a growth expert</button>
            <button className="dd-btn dd-btn-secondary">Learn more</button>
            <button className="dd-btn dd-btn-tertiary">See how they did it</button>
          </div>
        </Section>

        <Section title="Card" description="Default card container used for content blocks.">
          <div style={{ maxWidth: 360 }}>
            <div className="dd-card">
              <p className="dd-h5" style={{ marginBottom: "var(--dd-space-2)" }}>+59%</p>
              <p className="dd-body" style={{ marginBottom: "var(--dd-space-1)" }}>Increase in online orders</p>
              <p className="dd-caption">Total online orders grew in 6 weeks</p>
            </div>
          </div>
        </Section>

        <Section title="Form input" description="Text input styling with focus state.">
          <div style={{ maxWidth: 360, display: "flex", flexDirection: "column", gap: "var(--dd-space-3)" }}>
            <input className="dd-input" placeholder="Restaurant Name" />
            <input className="dd-input" placeholder="Email Address" />
          </div>
        </Section>
      </div>
    </div>
  );
}
