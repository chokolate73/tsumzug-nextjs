import LocalSEOPage from '@/components/LocalSEOPage';
import { PaintBucket } from 'lucide-react';

export default function Renovation() {
  return (
    <LocalSEOPage
      lang="en"
      metaTitle="Renovation Duisburg | Painting from €12/m²"
      metaDescription="Professional renovation in Duisburg. Painting, wallpapering, flooring. Perfect for apartment handovers. Fair prices. Request now!"
      canonicalPath="/en/services/renovation"
      icon={PaintBucket}
      badge="Perfect for Handovers"
      h1="Renovation in Duisburg"
      subtitle="Painting, wallpapering, and flooring - professional and fast"
      heroImage="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80"
      introText={`Looking for professional renovation work in Duisburg? Whether apartment handover to the landlord, moving into a new apartment, or simply a fresh coat of paint - we make your rooms look beautiful again.

Our renovation service includes everything needed for a successful apartment handover or a nice move-in: painting walls and ceilings, removing or applying wallpaper, filling holes, and laying floors.

Fair prices based on effort, clean work, and on-time completion - you can count on that. Perfectly combinable with our moving service.`}
      processTitle="How Your Renovation Works"
      processSteps={[
        { title: 'Inquiry', description: 'Describe the scope' },
        { title: 'Inspection', description: 'We look at the rooms' },
        { title: 'Quote', description: 'Transparent fixed price quote' },
        { title: 'Execution', description: 'Professional completion' },
        { title: 'Handover', description: 'Broom-clean handover' },
      ]}
      featuresTitle="Our Services"
      features={[
        'Painting walls and ceilings',
        'Removing and applying wallpaper',
        'Filling holes and cracks',
        'Laying laminate and vinyl',
        'Painting doors and frames',
        'Final cleaning included',
        'Disposal of material waste',
      ]}
      benefitsTitle="Your Benefits"
      benefits={[
        'Transparent prices per square meter',
        'Fast execution',
        'High-quality paints and materials',
        'Clean work with covering',
        'Combinable with moving service',
        'Broom-clean handover guaranteed',
      ]}
      pricingTitle="Renovation Prices in Duisburg"
      pricingIntro="Perfect for apartment handovers. Fair prices based on effort."
      priceExamples={[
        { label: 'Basic Package', price: 'from €12/m² living space', note: 'Paint walls/ceilings white, fill small holes, final cleaning' },
        { label: 'Complete Package', price: 'from €18/m² living space', note: 'Basic package + paint doors/frames, remove wallpaper, thorough cleaning' },
        { label: 'Floor Installation', price: 'from €25/m² floor space', note: 'Install laminate or vinyl. Incl. material and sound insulation' },
      ]}
      priceFactors={[
        'Living space in square meters',
        'Wall condition',
        'Number of rooms',
        'Wallpaper removal needed',
        'Floor area for installation',
        'Special requirements',
      ]}
      localTitle="Renovation Throughout Duisburg"
      localText="Whether rental apartment in Hochfeld, old building apartment in Duissern, or new construction in Neudorf - we renovate in all districts of Duisburg. Fast, clean, and reliable."
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
        'Duissern',
        'Dellviertel',
      ]}
      faqs={[
        {
          question: 'How much does a renovation cost in Duisburg?',
          answer: 'Our basic package with wall painting and final cleaning starts from €12/m² living space. The complete package with door painting and wallpaper removal from €18/m². Floor installation from €25/m² including materials.',
        },
        {
          question: 'How long does an apartment renovation take?',
          answer: 'A 2-room apartment is typically finished in 2-3 days. The exact duration depends on the scope of work.',
        },
        {
          question: 'Do you also remove old wallpaper?',
          answer: 'Yes, removing old wallpaper is part of our complete package. We professionally prepare the walls for the new paint.',
        },
        {
          question: 'What paints do you use?',
          answer: 'We use high-quality, covering wall paints from brand manufacturers. Standard is white, other colors are available on request.',
        },
        {
          question: 'Is material included in the price?',
          answer: 'For floor installation, laminate/vinyl and sound insulation are included. For painting work, paint and consumables are included.',
        },
        {
          question: 'Can I combine renovation and moving?',
          answer: 'Yes, that\'s even ideal. We renovate your new apartment before move-in or the old apartment for handover. Everything from one source.',
        },
        {
          question: 'Do you also handle final cleaning?',
          answer: 'Yes, broom-clean handover is included in all our renovation packages. The rooms are ready for move-in or handover after completion.',
        },
        {
          question: 'Do you also work on weekends?',
          answer: 'Saturday appointments are possible by arrangement. Just ask us.',
        },
      ]}
      relatedServices={[
        { text: 'Residential Moves', href: '/en/services/residential-moves' },
        { text: 'Office Relocations', href: '/en/services/office-relocations' },
        { text: 'Handyman Services', href: '/en/services/handyman-services' },
        { text: 'Clearance & Disposal', href: '/en/services/clearance-disposal' },
        { text: 'Furniture Transport', href: '/en/services/furniture-transport' },
        { text: 'Prices', href: '/en/prices' },
      ]}
    />
  );
}
