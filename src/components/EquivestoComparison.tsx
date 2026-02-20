import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ChevronDown, DollarSign, Shield, Users, FileText, BarChart3, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComparisonRow {
  service: string;
  equivesto: string;
  tradAdmin: string;
  advantage: string;
  equivesoAvailable: boolean;
  tradAvailable: boolean;
}

const services: ComparisonRow[] = [
  {
    service: "KYP Due Diligence",
    equivesto: "Full scope verification: Management Team, Legal & Compliance, Product, Financial projections.",
    tradAdmin: "Not typically offered by Fund Admin.",
    advantage: "Full compliance review handled — BTC never faces gaps in product due diligence.",
    equivesoAvailable: true,
    tradAvailable: false,
  },
  {
    service: "Marketing Support & Compliance",
    equivesto: "Fundraising strategy support + regulatory compliance review enabled by EMD status.",
    tradAdmin: "Service NOT available.",
    advantage: "Compliant advertised fundraising — impossible without an EMD partner.",
    equivesoAvailable: true,
    tradAvailable: false,
  },
  {
    service: "KYC Investor Onboarding",
    equivesto: "Full KYC including suitability assessment, accredited investor verification, and document collection.",
    tradAdmin: "Would be handled by BTC's management team — not their area of expertise.",
    advantage: "Compliance risk removed from BTC. No liability if errors occur in investor onboarding.",
    equivesoAvailable: true,
    tradAvailable: false,
  },
  {
    service: "GP & LP Legal Formation",
    equivesto: "GP formed by and owned by Equivesto. LP and LPA template created by Equivesto's legal team.",
    tradAdmin: "Would require BTC's external legal team — part of $100K+ org expenses.",
    advantage: "One fewer entity to manage; lower organizational costs.",
    equivesoAvailable: true,
    tradAvailable: false,
  },
  {
    service: "LP Fund Holding & Escrow",
    equivesto: "Funds held in EMD's segregated trust account. Released only per LPA terms.",
    tradAdmin: "Not available — BTC would manage its own bank accounts.",
    advantage: "LPs benefit from third-party fund security. Management fees guaranteed annually.",
    equivesoAvailable: true,
    tradAvailable: false,
  },
  {
    service: "Annual Financial Statements",
    equivesto: "Unaudited annual statements for both GP and LP prepared internally.",
    tradAdmin: "Typically requires a separate fund accountant fee.",
    advantage: "Lower annual costs. BTC commits to audits on exits if externally covered.",
    equivesoAvailable: true,
    tradAvailable: false,
  },
  {
    service: "Tax Filings (T5013, Corp Taxes)",
    equivesto: "T5013 LP tax forms and GP corporation annual taxes filed and distributed.",
    tradAdmin: "Typically a separate fee from the fund accountant.",
    advantage: "Included in Equivesto's fee structure — no additional annual line item.",
    equivesoAvailable: true,
    tradAvailable: false,
  },
  {
    service: "Annual Investor Communications",
    equivesto: "Annual LP meeting + quarterly updates from BTC.",
    tradAdmin: "Similar service available.",
    advantage: "Quarterly communications from BTC give LPs superior transparency.",
    equivesoAvailable: true,
    tradAvailable: true,
  },
  {
    service: "Fund Dissolution",
    equivesto: "Final disbursements, official LP and GP dissolution handled by Equivesto.",
    tradAdmin: "Requires separate accountant and legal fees.",
    advantage: "Lower end-of-fund costs; streamlined closure.",
    equivesoAvailable: true,
    tradAvailable: false,
  },
];

const costRows = [
  { label: "GP/LP Formation & KYP", equivesto: "$11K (one-time)", trad: "Part of $100K+ org. expenses" },
  { label: "EMD, KYC & Portal Fees", equivesto: "2.5% of funds (max $50K)", trad: "Not available" },
  { label: "Annual Fund Admin", equivesto: "No annual fee", trad: "$20K–$35K/yr ($200K–$350K over 10 yrs)" },
  { label: "Annual Tax Filings", equivesto: "Included", trad: "$6K–$15K/yr ($60K–$150K over 10 yrs)" },
  { label: "Fund Dissolution", equivesto: "Included", trad: "$15K–$40K" },
  { label: "Total Estimated Cost", equivesto: "~$130K (medium scenario)", trad: "$475K–$640K", highlight: true },
];

const categories = [
  { icon: Shield, label: "Compliance & KYP", indices: [0, 1] },
  { icon: Users, label: "Investor Onboarding", indices: [2] },
  { icon: FileText, label: "Legal Formation", indices: [3, 4] },
  { icon: BarChart3, label: "Reporting & Admin", indices: [5, 6, 7] },
  { icon: Scale, label: "Dissolution", indices: [8] },
];

const EquivestoComparison = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [view, setView] = useState<"services" | "costs">("services");

  const filteredServices =
    activeCategory !== null
      ? categories[activeCategory].indices.map((i) => ({ ...services[i], originalIndex: i }))
      : services.map((s, i) => ({ ...s, originalIndex: i }));

  return (
    <div className="mt-12 space-y-6">
      {/* View Toggle */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setView("services")}
          className={cn(
            "rounded-lg px-5 py-2 text-sm font-semibold transition-all",
            view === "services"
              ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
              : "border bg-card text-muted-foreground hover:text-foreground"
          )}
        >
          Services Comparison
        </button>
        <button
          onClick={() => setView("costs")}
          className={cn(
            "rounded-lg px-5 py-2 text-sm font-semibold transition-all",
            view === "costs"
              ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
              : "border bg-card text-muted-foreground hover:text-foreground"
          )}
        >
          Cost Breakdown
        </button>
      </div>

      <AnimatePresence mode="wait">
        {view === "services" ? (
          <motion.div
            key="services"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {/* Category Filter */}
            <div className="mb-6 flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-semibold transition-all",
                  activeCategory === null
                    ? "bg-foreground text-background"
                    : "border bg-card text-muted-foreground hover:text-foreground"
                )}
              >
                All Services
              </button>
              {categories.map((cat, i) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(activeCategory === i ? null : i)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all",
                    activeCategory === i
                      ? "bg-accent text-accent-foreground"
                      : "border bg-card text-muted-foreground hover:text-foreground"
                  )}
                >
                  <cat.icon className="h-3 w-3" />
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Column Headers */}
            <div className="mb-3 grid grid-cols-[1fr_auto_auto] gap-3 px-5 sm:grid-cols-[2fr_1fr_1fr]">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Service</span>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">Equivesto</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-muted-foreground/40" />
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Trad. Admin</span>
              </div>
            </div>

            {/* Rows */}
            <div className="space-y-2">
              <AnimatePresence>
                {filteredServices.map((row, idx) => (
                  <motion.div
                    key={row.service}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, delay: idx * 0.04 }}
                    className="overflow-hidden rounded-xl border bg-card"
                  >
                    <button
                      className="grid w-full grid-cols-[1fr_auto_auto] items-center gap-3 p-5 text-left transition-colors hover:bg-secondary/50 sm:grid-cols-[2fr_1fr_1fr]"
                      onClick={() => setExpandedRow(expandedRow === row.originalIndex ? null : row.originalIndex)}
                    >
                      <div className="flex items-center gap-2">
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                            expandedRow === row.originalIndex && "rotate-180"
                          )}
                        />
                        <span className="font-medium text-foreground">{row.service}</span>
                      </div>
                      <div className="flex justify-start">
                        {row.equivesoAvailable ? (
                          <CheckCircle2 className="h-5 w-5 text-accent" />
                        ) : (
                          <XCircle className="h-5 w-5 text-muted-foreground/30" />
                        )}
                      </div>
                      <div className="flex justify-start">
                        {row.tradAvailable ? (
                          <CheckCircle2 className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <XCircle className="h-5 w-5 text-destructive/40" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {expandedRow === row.originalIndex && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-4 border-t px-5 pb-5 pt-4 sm:grid-cols-3">
                            <div>
                              <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                                <div className="h-1.5 w-1.5 rounded-full bg-accent" /> Equivesto
                              </p>
                              <p className="text-sm text-muted-foreground">{row.equivesto}</p>
                            </div>
                            <div>
                              <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" /> Trad. Admin
                              </p>
                              <p className="text-sm text-muted-foreground">{row.tradAdmin}</p>
                            </div>
                            <div className="rounded-lg bg-accent/5 p-3">
                              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">Advantage to BTC & LPs</p>
                              <p className="text-sm text-foreground">{row.advantage}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary badges */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground"><span className="font-semibold text-foreground">9/9</span> services available via Equivesto</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <XCircle className="h-4 w-4 text-destructive/50" />
                <span className="text-muted-foreground"><span className="font-semibold text-foreground">7/9</span> services NOT available from Trad. Admin</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="costs"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {/* Cost Summary Cards */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="relative overflow-hidden rounded-xl border-2 border-accent/30 bg-card p-6">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-accent/50" />
                <div className="flex items-center gap-2 text-accent">
                  <DollarSign className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-widest">Equivesto</span>
                </div>
                <p className="mt-3 font-display text-4xl font-bold text-foreground">~$130K</p>
                <p className="mt-1 text-sm text-muted-foreground">Estimated 10-year total (medium scenario)</p>
                <p className="mt-3 text-xs text-muted-foreground">$11K upfront + 2.5% of funds raised (max $50K) + 1% of profits</p>
              </div>
              <div className="relative overflow-hidden rounded-xl border bg-card p-6 opacity-70">
                <div className="absolute inset-x-0 top-0 h-1 bg-muted-foreground/20" />
                <div className="flex items-center gap-2 text-muted-foreground">
                  <DollarSign className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-widest">Traditional Fund Admin</span>
                </div>
                <p className="mt-3 font-display text-4xl font-bold text-foreground">$475K–$640K</p>
                <p className="mt-1 text-sm text-muted-foreground">Estimated 10-year total cost</p>
                <p className="mt-3 text-xs text-muted-foreground">$100K+ org expenses + $20K–$35K/yr admin + $6K–$15K/yr tax</p>
              </div>
            </div>

            {/* Savings callout */}
            <div className="mb-6 rounded-xl bg-accent/10 border border-accent/20 px-5 py-4 flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
                <DollarSign className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Estimated savings of $345K–$510K over the fund life</p>
                <p className="text-sm text-muted-foreground">Capital that goes directly to founders and LP returns instead of administration.</p>
              </div>
            </div>

            {/* Cost Table */}
            <div className="overflow-hidden rounded-xl border">
              <div className="grid grid-cols-3 bg-secondary/50 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span>Cost Item</span>
                <span className="text-accent">Equivesto</span>
                <span>Traditional Admin</span>
              </div>
              {costRows.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className={cn(
                    "grid grid-cols-3 items-center gap-4 border-t px-5 py-4 text-sm transition-colors hover:bg-secondary/30",
                    row.highlight && "bg-accent/5 font-semibold"
                  )}
                >
                  <span className={cn("text-foreground", row.highlight && "font-bold")}>{row.label}</span>
                  <span className="text-accent">{row.equivesto}</span>
                  <span className="text-muted-foreground">{row.trad}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EquivestoComparison;
