import { site } from "@/data/site";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.brand,
    description: site.description,
    url: site.url,
    areaServed: site.city,
    address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: "BY" },
    telephone: site.phone,
    email: site.email,
    employee: { "@type": "Person", name: site.name, jobTitle: site.role },
  };
}
