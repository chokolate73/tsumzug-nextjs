'use client';
import LocalSEOPage from '@/components/LocalSEOPage';
import { Trash2 } from 'lucide-react';

export default function ClearanceDisposal() {
  return (
    <LocalSEOPage
      lang="en"
      metaTitle="Clearance & Disposal Duisburg | Fast & Fair from €199"
      metaDescription="Professional clearance in Duisburg. Apartments, basements, attics. Proper disposal, short-notice appointments. Fixed price. Request now!"
      canonicalPath="/en/services/clearance-disposal"
      icon={Trash2}
      badge="Fast, clean, reliable"
      h1="Clearance & Disposal in Duisburg"
      subtitle="Basements, attics, apartments - we clear for you"
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
      introText={`Sometimes you need to clear out. Whether it's an overflowing basement, a stuffed attic, or a complete apartment - we handle clearance in Duisburg quickly, thoroughly, and at fair prices.

Our clearance service is more than just disposing of trash. We sort carefully, separate recyclables properly, and take care of environmentally friendly disposal. Usable items can be donated to social organizations or offset against costs upon request.

Whether you're a landlord who needs to clear an apartment, an heir facing an estate clearance, or simply want to create space - we're your contact in Duisburg. Discreet, reliable, and with transparent fixed prices.`}
      processTitle="How Your Clearance Works"
      processSteps={[
        { title: 'Inquiry', description: 'Contact us with your request' },
        { title: 'Inspection', description: 'We assess the situation on-site' },
        { title: 'Fixed Price', description: 'You receive a binding quote' },
        { title: 'Clearance', description: 'We clear at the agreed time' },
        { title: 'Handover', description: 'Broom-clean handover on request' },
      ]}
      featuresTitle="What We Clear"
      features={[
        'Basement compartments & cellar rooms',
        'Attics & storage spaces',
        'Apartments & houses',
        'Garages & sheds',
        'Offices & commercial spaces',
        'Gardens & outdoor areas',
        'Bulky waste & electronic waste',
      ]}
      benefitsTitle="Your Benefits"
      benefits={[
        'Short-notice appointments possible',
        'Broom-clean handover on request',
        'Proper disposal of all materials',
        'Recycling of usable items',
        'Transparent fixed prices',
        'Discreet handling',
      ]}
      pricingTitle="Clearance Prices in Duisburg"
      pricingIntro="Fair prices based on effort. The inspection is free and non-binding."
      priceExamples={[
        { label: 'Basement/Attic', price: 'from €199', note: 'Up to approx. 15m². Disposal included' },
        { label: 'Garage/Shed', price: 'from €399', note: 'Complete disposal included. Value offset possible' },
        { label: 'Complete Apartment', price: 'from €699', note: '2-room apartment, broom-clean. Disposal and final cleaning included' },
      ]}
      priceFactors={[
        'Room size & fill level',
        'Type of items',
        'Accessibility (floor, elevator)',
        'Hazardous waste present',
        'Broom-clean handover desired',
        'Recyclable items',
      ]}
      localTitle="Clearance in All Districts"
      localText="Whether a basement in Marxloh, attic in Rheinhausen, or apartment in Hochfeld - we clear throughout Duisburg. As a local company, we know the conditions on-site and can respond quickly and flexibly."
      neighborhoods={[
        'Duisburg-Mitte',
        'Meiderich',
        'Hamborn',
        'Marxloh',
        'Hochfeld',
        'Neudorf',
        'Rheinhausen',
        'Homberg',
        'Ruhrort',
        'Beeck',
        'Laar',
        'Walsum',
      ]}
      faqs={[
        {
          question: 'How much does a clearance cost in Duisburg?',
          answer: 'Clearance costs in Duisburg start from €199 for a basement or attic (up to approx. 15m²). The exact price depends on the size, fill level, and type of items to be disposed of. After a free inspection, you receive a binding fixed price quote.',
        },
        {
          question: 'How quickly can you clear?',
          answer: 'Often short-notice appointments within a few days are possible. In urgent cases like apartment handovers, we try to find a quick appointment. Just call us.',
        },
        {
          question: 'Do you also dispose of hazardous waste?',
          answer: 'Yes, we also handle hazardous waste like paints, varnishes, or chemicals. These are disposed of properly and in an environmentally friendly manner. The costs are transparently shown in the quote.',
        },
        {
          question: 'What happens to usable items?',
          answer: 'Usable furniture and items can be donated to social organizations upon request. Alternatively, recyclable materials are sent for recycling. The value can be offset against clearance costs.',
        },
        {
          question: 'Do you also offer broom-clean handover?',
          answer: 'Yes, upon request we hand over cleared spaces broom-clean. This is especially important for landlords or apartment handovers. This service is included in the quote or can be added.',
        },
        {
          question: 'Can I be present during the clearance?',
          answer: 'Of course. You can be present throughout the entire clearance, but you don\'t have to. Many customers give us the key and receive the rooms back broom-clean.',
        },
        {
          question: 'Do you also clear hoarder apartments?',
          answer: 'Yes, we also handle clearing heavily cluttered apartments. We work discreetly and professionally. Contact us confidentially.',
        },
        {
          question: 'What\'s the difference from estate clearance?',
          answer: 'A clearance clears individual rooms or removes specific items. An estate clearance involves completely clearing a household, often after death or moving to a care home.',
        },
      ]}
      relatedServices={[
        { text: 'Residential Moves', href: '/en/services/residential-moves' },
        { text: 'Office Relocations', href: '/en/services/office-relocations' },
        { text: 'Furniture Transport', href: '/en/services/furniture-transport' },
        { text: 'Handyman Services', href: '/en/services/handyman-services' },
        { text: 'Renovation', href: '/en/services/renovation' },
        { text: 'Prices', href: '/en/prices' },
      ]}
    />
  );
}
