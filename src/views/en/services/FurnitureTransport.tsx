'use client';
import LocalSEOPage from '@/components/LocalSEOPage';
import { Truck } from 'lucide-react';

export default function FurnitureTransport() {
  return (
    <LocalSEOPage
      lang="en"
      metaTitle="Furniture Transport Duisburg | Flexible & Insured from €119"
      metaDescription="Affordable furniture transport in Duisburg. Single items, IKEA pickup, full loads. Flexible, insured, short-notice possible. Request now!"
      canonicalPath="/en/services/furniture-transport"
      icon={Truck}
      badge="Flexible and reliable"
      h1="Furniture Transport in Duisburg"
      subtitle="Single items, IKEA pickup, or full loads - we transport"
      heroImage="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1200&q=80"
      introText={`You don't need a complete move, just furniture transport? No problem. Whether it's a single sofa from classified ads, IKEA pickup, or transporting multiple furniture pieces - we're your flexible partner in Duisburg.

Our furniture transport service is ideal for anyone who needs to move individual items from A to B: picking up used furniture from a seller, transporting heirlooms from parents, or having new furniture delivered from the furniture store.

With various vehicle sizes from small van to large furniture truck, we find the right solution for every request. And the best part: we're often available on short notice.`}
      processTitle="How It Works"
      processSteps={[
        { title: 'Inquiry', description: 'What needs to go where?' },
        { title: 'Quote', description: 'Quick quote by phone' },
        { title: 'Appointment', description: 'Flexible pickup time as you wish' },
        { title: 'Pickup', description: 'We pick up the furniture' },
        { title: 'Delivery', description: 'Safe delivery to destination' },
      ]}
      featuresTitle="What We Transport"
      features={[
        'Individual furniture (sofa, wardrobe, bed)',
        'IKEA furniture and furniture store pickups',
        'Household appliances (washing machine, fridge)',
        'Electronics and TVs',
        'Mattresses and beds',
        'Pianos and grand pianos',
        'Full loads',
      ]}
      benefitsTitle="Your Benefits"
      benefits={[
        'Flexible appointments - even short notice',
        'Fair prices with no surprises',
        'Insured transport',
        'Experienced drivers with carrying experience',
        'Various vehicle sizes',
        'Assembly on request included',
      ]}
      pricingTitle="Furniture Transport Prices"
      pricingIntro="Simple, transparent prices based on effort and distance."
      priceExamples={[
        { label: 'Single Item Local', price: 'from €119', note: 'e.g., sofa, wardrobe within Duisburg. Incl. 2 people, transport and loading/unloading' },
        { label: 'IKEA Pickup', price: 'from €139', note: 'Pickup and delivery. Assembly optional +€50' },
        { label: 'Multiple Items', price: 'from €249', note: 'Partial move or multiple furniture pieces. Flat rate depending on quantity' },
      ]}
      priceFactors={[
        'Number of furniture pieces',
        'Size and weight',
        'Distance (pickup & delivery)',
        'Floor and accessibility',
        'Assembly desired',
        'Required vehicle',
      ]}
      localTitle="Furniture Transport in Duisburg and Surroundings"
      localText="We transport furniture throughout Duisburg and beyond. Whether pickup in Meiderich and delivery to Essen, or IKEA transport from Duisburg to Düsseldorf - we're flexible and fast."
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
        'IKEA Duisburg',
        'Oberhausen',
        'Essen',
      ]}
      faqs={[
        {
          question: 'How much does furniture transport cost in Duisburg?',
          answer: 'Furniture transport within Duisburg costs from €119 for single items like a sofa or wardrobe. The price depends on size, quantity, and distance. Call us for a quick quote.',
        },
        {
          question: 'Can you also pick up from IKEA?',
          answer: 'Yes, we pick up your IKEA order and deliver it to your home. On request, we also assemble the furniture right away. IKEA Duisburg, Essen, or Dortmund - no problem.',
        },
        {
          question: 'Do you transport washing machines?',
          answer: 'Yes, we also transport household appliances like washing machines, dryers, or refrigerators. We secure the appliances professionally for transport.',
        },
        {
          question: 'How short-notice is transport possible?',
          answer: 'Often even the same day or next day - depending on capacity. Just call and we\'ll see what\'s possible.',
        },
        {
          question: 'Do you also assemble the furniture?',
          answer: 'Yes, on request we also handle furniture assembly at the destination. This is especially convenient for IKEA furniture or when buying used furniture.',
        },
        {
          question: 'Is the furniture insured during transport?',
          answer: 'Yes, all transports are covered by our business liability insurance. Your furniture is protected throughout the entire transport.',
        },
        {
          question: 'Can I have furniture picked up from private sellers?',
          answer: 'Of course. We gladly pick up furniture from private sellers - whether from classified ads, Facebook Marketplace, or acquaintances. You give us the address, we take care of the rest.',
        },
        {
          question: 'What vehicles do you have?',
          answer: 'We have various vehicle sizes: from small vans for single items to large furniture trucks for full loads. So you only pay for the capacity you need.',
        },
      ]}
      relatedServices={[
        { text: 'Residential Moves', href: '/en/services/residential-moves' },
        { text: 'Office Relocations', href: '/en/services/office-relocations' },
        { text: 'Clearance & Disposal', href: '/en/services/clearance-disposal' },
        { text: 'Handyman Services', href: '/en/services/handyman-services' },
        { text: 'Renovation', href: '/en/services/renovation' },
        { text: 'Prices', href: '/en/prices' },
      ]}
    />
  );
}
