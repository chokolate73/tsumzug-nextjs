import { getBaseUrl } from '@/lib/seo/helpers';
import { faqItemsDe } from '@/data/faq';

export default function FAQSchema() {
  const baseUrl = getBaseUrl();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${baseUrl}/#faq`,
    mainEntity: faqItemsDe.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
