import { Link } from "@/i18n/navigation";
import { Check } from "lucide-react";
import portfolios from "@/lib/dataPortfolio.json";

const T = {
  en: {
    whatWeDeliver: "What we deliver",
    relatedWork: "Related work",
    faq: "Frequently asked questions",
    ctaTitle: "Let's build it together",
    ctaBody:
      "Tell us what you're building. We'll reply with a clear scope, timeline, and next steps.",
    ctaButton: "Start a project",
    viewCaseStudy: "View case study",
  },
  id: {
    whatWeDeliver: "Yang kami kerjakan",
    relatedWork: "Proyek terkait",
    faq: "Pertanyaan yang sering diajukan",
    ctaTitle: "Mari bangun bersama",
    ctaBody:
      "Ceritakan apa yang ingin Anda bangun. Kami akan membalas dengan scope, timeline, dan langkah berikutnya yang jelas.",
    ctaButton: "Mulai proyek",
    viewCaseStudy: "Lihat studi kasus",
  },
};

function PortfolioCard({ nameCompany, locale, viewLabel }) {
  const p = portfolios.find((x) => x.name_company === nameCompany);
  if (!p) return null;
  const desc = Array.isArray(p.description) ? p.description[0] : p.description;

  return (
    <Link
      href={`/portfolio/${p.name_company}`}
      className="group flex flex-col gap-2 rounded-2xl border border-[#EBEBEB] p-6 transition-all hover:border-red-cherry-500 hover:shadow-lg"
    >
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <span>{p.industry}</span>
        {p.country ? <span>· {p.country}</span> : null}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-cherry-500">
        {p.name}
      </h3>
      {desc ? (
        <p className="text-sm text-gray-500 line-clamp-3">{desc}</p>
      ) : null}
      <span className="mt-2 text-sm font-medium text-red-cherry-500">
        {viewLabel} →
      </span>
    </Link>
  );
}

export default function ProgrammaticPage({
  locale = "en",
  eyebrow,
  h1,
  subtitle,
  intro,
  sections = [],
  scope = [],
  faqs = [],
  relatedPortfolio = [],
}) {
  const t = T[locale] ?? T.en;

  return (
    <article className="container mx-auto px-6 lg:px-20 py-16 lg:py-24">
      {/* Hero */}
      <header className="max-w-3xl">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-red-cherry-500 mb-3">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
          {h1}
        </h1>
        {subtitle ? (
          <p className="text-xl text-gray-600 mb-6">{subtitle}</p>
        ) : null}
        {intro ? <p className="text-lg text-gray-500">{intro}</p> : null}
      </header>

      {/* Scope */}
      {scope.length > 0 ? (
        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            {t.whatWeDeliver}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {scope.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-red-cherry-500" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Body sections */}
      {sections.length > 0 ? (
        <div className="mt-12 max-w-3xl space-y-8">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {s.heading}
              </h2>
              <p className="text-gray-600 leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>
      ) : null}

      {/* Related portfolio */}
      {relatedPortfolio.length > 0 ? (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {t.relatedWork}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPortfolio.map((name) => (
              <PortfolioCard
                key={name}
                nameCompany={name}
                locale={locale}
                viewLabel={t.viewCaseStudy}
              />
            ))}
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      {faqs.length > 0 ? (
        <section className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.faq}</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {f.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="mt-16 rounded-3xl bg-[#0B0B0B] px-8 py-12 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
          {t.ctaTitle}
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-gray-300">{t.ctaBody}</p>
        <Link
          href="/contact"
          className="inline-block rounded-full bg-red-cherry-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-red-cherry-600"
        >
          {t.ctaButton}
        </Link>
      </section>
    </article>
  );
}
