import { getBaseUrl } from '@/lib/seo/helpers';

interface BreadcrumbItem {
  name: string;
  path: string;
}

export default function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const baseUrl = getBaseUrl();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
