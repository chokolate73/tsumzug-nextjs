'use client';
import LocalSEOPage from '@/components/LocalSEOPage';
import { Wrench } from 'lucide-react';

export default function HandymanServices() {
  return (
    <LocalSEOPage
      lang="en"
      metaTitle="Handyman Services Duisburg | Professional from €35/hour"
      metaDescription="Professional handyman services in Duisburg. Minor repairs, furniture assembly, property maintenance. Hourly rate or monthly flat rate. Request now!"
      canonicalPath="/en/services/handyman-services"
      icon={Wrench}
      badge="Flexible and reliable"
      h1="Handyman Services in Duisburg"
      subtitle="Minor repairs, maintenance, and property care - professional and flexible"
      heroImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80"
      introText={`Looking for reliable handyman services in Duisburg? Whether minor repairs, regular property maintenance, or quick help with emergencies - we're your competent partner for all handyman tasks around your home and apartment.

Our handyman service is ideal for private individuals, landlords, and property managers. We handle everything that comes up: from a dripping faucet to complete property maintenance. Flexibly bookable by the hour or as a monthly flat rate.

With us, you have one contact for all smaller and larger repairs. Professional, fast, and at fair prices.`}
      processTitle="How It Works"
      processSteps={[
        { title: 'Inquiry', description: 'Describe your request' },
        { title: 'Quote', description: 'Quick price information by phone' },
        { title: 'Appointment', description: 'Flexible appointment as you wish' },
        { title: 'Execution', description: 'Professional completion on-site' },
        { title: 'Done', description: 'Clean handover and invoice' },
      ]}
      featuresTitle="Our Services"
      features={[
        'Minor repairs of all kinds',
        'Furniture assembly (IKEA, etc.)',
        'Installing lamps and curtain rods',
        'Repairing doors and locks',
        'Replacing faucets and siphons',
        'Regular property maintenance',
        'Winter service and garden care',
      ]}
      benefitsTitle="Your Benefits"
      benefits={[
        'Flexible scheduling',
        'Transparent prices - hourly or flat rate',
        'Experienced craftsmen',
        'Fast response time',
        'All tools included',
        'Reliable and clean',
      ]}
      pricingTitle="Handyman Service Prices"
      pricingIntro="Regular maintenance or as needed. Flexibly bookable."
      priceExamples={[
        { label: 'Hourly Rate', price: 'from €35/hour', note: 'Minor repairs, maintenance, property care' },
        { label: 'Monthly Flat Rate', price: 'from €250/month', note: 'Regular property maintenance with fixed scope of services' },
        { label: 'Emergency Service', price: 'from €89', note: 'Quick help with emergencies. Call-out fee + labor time' },
      ]}
      priceFactors={[
        'Type of work',
        'Duration of service',
        'Regularity',
        'Material costs (if needed)',
        'Travel for long distances',
        'Special services',
      ]}
      localTitle="Handyman Services Throughout Duisburg"
      localText="Whether rental apartment in Hochfeld, apartment building in Meiderich, or commercial property in the Inner Harbor - we maintain properties in all districts of Duisburg. As a local company, we're quickly on-site."
      neighborhoods={[
        'Duisburg-Mitte',
        'Meiderich',
        'Hamborn',
        'Hochfeld',
        'Neudorf',
        'Rheinhausen',
        'Homberg',
        'Buchholz',
        'Großenbaum',
        'Wedau',
        'Ruhrort',
        'Duissern',
      ]}
      faqs={[
        {
          question: 'How much does the handyman service cost?',
          answer: 'Our hourly rate starts from €35/hour for minor repairs and maintenance work. For regular property maintenance, we offer monthly flat rates from €250. For emergencies, there\'s a call-out fee from €89 plus labor time.',
        },
        {
          question: 'What kind of work do you handle?',
          answer: 'We handle all typical handyman tasks: minor repairs, furniture assembly, hanging lamps, repairing doors, replacing faucets, winter service, garden care, and much more.',
        },
        {
          question: 'How quickly can you come?',
          answer: 'For regular jobs, we schedule an appointment within a few days. For emergencies, we try to help the same day.',
        },
        {
          question: 'Do you also offer regular maintenance?',
          answer: 'Yes, we offer monthly flat rates for regular property maintenance. The scope of services is individually agreed.',
        },
        {
          question: 'Do you also assemble IKEA furniture?',
          answer: 'Yes, furniture assembly is one of our core services. We professionally assemble IKEA furniture, PAX wardrobes, kitchens, and other furniture.',
        },
        {
          question: 'Is material included in the price?',
          answer: 'The hourly rate applies to labor time. Required materials like screws, anchors, or spare parts are charged separately and shown in the quote.',
        },
      ]}
      relatedServices={[
        { text: 'Residential Moves', href: '/en/services/residential-moves' },
        { text: 'Furniture Transport', href: '/en/services/furniture-transport' },
        { text: 'Renovation', href: '/en/services/renovation' },
        { text: 'Clearance & Disposal', href: '/en/services/clearance-disposal' },
        { text: 'Office Relocations', href: '/en/services/office-relocations' },
        { text: 'Prices', href: '/en/prices' },
      ]}
    />
  );
}
