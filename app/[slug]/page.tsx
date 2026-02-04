import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, MessageCircle, Mail, CheckCircle, ChevronRight } from 'lucide-react';
import { LOCATIONS } from '@/lib/seo/locations';
import { SERVICES } from '@/lib/seo/services';
import { getBaseUrl, getAllServiceCityPairs } from '@/lib/seo/helpers';
import { generateLandingContent } from '@/lib/seo/landing-content';
import { buildLocalBusinessJsonLd, buildServiceJsonLd, buildFAQPageJsonLd } from '@/lib/seo/schema';
import { COMPANY } from '@/config/company';

// Parse "umzug-duesseldorf" into { serviceSlug: "umzug", citySlug: "duesseldorf" }
function parseSlug(slug: string) {
  // Try each service slug to find the best match
  for (const service of SERVICES) {
    if (slug.startsWith(service.slug + '-')) {
      const citySlug = slug.slice(service.slug.length + 1);
      const location = LOCATIONS.find((l) => l.slug === citySlug);
      if (location) {
        return { service, location };
      }
    }
  }
  return null;
}

export function generateStaticParams() {
  return getAllServiceCityPairs().map((pair) => ({
    slug: pair.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata | undefined {
  const parsed = parseSlug(params.slug);
  if (!parsed) return undefined;

  const { service, location } = parsed;
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/${params.slug}`;
  const title = `${service.name} in ${location.name} – ${COMPANY.legalName}`;
  const description = `${service.metaSnippet} in ${location.name} und Umgebung. ✓ Festpreis ✓ Versichert ✓ Lokales Team. Jetzt kostenloses Angebot anfordern!`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: 'de_DE',
      siteName: COMPANY.legalName,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function CityServicePage({ params }: { params: { slug: string } }) {
  const parsed = parseSlug(params.slug);
  if (!parsed) notFound();

  const { service, location } = parsed;
  const baseUrl = getBaseUrl();
  const pageUrl = `${baseUrl}/${params.slug}`;
  const content = generateLandingContent(service, location);

  // Build related links to other city pages for this service + other services for this city
  const relatedCityLinks = LOCATIONS
    .filter((l) => l.slug !== location.slug)
    .slice(0, 5)
    .map((l) => ({
      href: `/${service.slug}-${l.slug}`,
      label: `${service.name} in ${l.name}`,
    }));

  const relatedServiceLinks = SERVICES
    .filter((s) => s.slug !== service.slug)
    .map((s) => ({
      href: `/${s.slug}-${location.slug}`,
      label: `${s.name} in ${location.name}`,
    }));

  // JSON-LD
  const localBusinessLd = buildLocalBusinessJsonLd({ url: pageUrl, city: location.name });
  const serviceLd = buildServiceJsonLd({
    serviceName: `${service.name} in ${location.name}`,
    description: content.intro,
    url: pageUrl,
    city: location.name,
  });
  const faqLd = buildFAQPageJsonLd(content.faqs, pageUrl);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero / Header */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-orange-400">{content.h1}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {service.name}{' '}
              <span className="text-orange-400">in {location.name}</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {content.intro}
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">
              <a
                href={COMPANY.phoneLink}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen
              </a>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <Link
                href="/angebot"
                className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <Mail className="w-5 h-5" />
                Angebot anfordern
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-14 sm:py-16 lg:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10 text-center">
              Ihre Vorteile bei {COMPANY.legalName}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.benefits.map((b) => (
                <div
                  key={b.title}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                >
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-lg mb-2">{b.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10 text-center">
              So funktioniert Ihr {service.name.toLowerCase()} in {location.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.process.map((p) => (
                <div key={p.step} className="relative">
                  <div className="text-orange-500 font-bold text-sm mb-2">{p.step}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 sm:py-16 lg:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10 text-center">
              Häufige Fragen zu {service.name.toLowerCase()} in {location.name}
            </h2>
            <div className="space-y-4">
              {content.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-xl border border-slate-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-slate-900 hover:text-orange-500 transition-colors">
                    {faq.question}
                    <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{content.ctaHeading}</h2>
            <p className="text-orange-100 mb-8">{content.ctaText}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={COMPANY.phoneLink}
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {COMPANY.phoneDisplay}
              </a>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp schreiben
              </a>
            </div>
          </div>
        </section>

        {/* Related Internal Links */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            {/* Other cities for same service */}
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
              {service.name} in weiteren Städten
            </h2>
            <div className="flex flex-wrap gap-3 mb-12">
              {relatedCityLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1 px-4 py-2 bg-slate-100 hover:bg-orange-50 text-slate-700 hover:text-orange-600 rounded-lg text-sm font-medium transition-colors"
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ))}
            </div>

            {/* Other services in same city */}
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
              Weitere Leistungen in {location.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedServiceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1 px-4 py-2 bg-slate-100 hover:bg-orange-50 text-slate-700 hover:text-orange-600 rounded-lg text-sm font-medium transition-colors"
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer with NAP */}
        <footer className="bg-slate-950 text-white py-10">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">
                  TopSicher<span className="text-orange-400"> Umzüge</span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {COMPANY.slogan}. Professionelle Dienstleistungen in ganz NRW.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Kontakt</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>
                    <a href={COMPANY.phoneLink} className="hover:text-orange-400 transition-colors">
                      {COMPANY.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${COMPANY.email}`} className="hover:text-orange-400 transition-colors">
                      {COMPANY.email}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Adresse</h4>
                <address className="not-italic text-slate-400 text-sm leading-relaxed">
                  {COMPANY.legalName}<br />
                  {COMPANY.address.street}<br />
                  {COMPANY.address.postalCode} {COMPANY.address.city}
                </address>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span>&copy; {new Date().getFullYear()} {COMPANY.legalName}. Alle Rechte vorbehalten.</span>
              <Link href="/impressum" className="hover:text-orange-400 transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-orange-400 transition-colors">Datenschutz</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
