import LocalSEOPage from '@/components/LocalSEOPage';
import { Home } from 'lucide-react';

export default function ResidentialMoves() {
  return (
    <LocalSEOPage
      lang="en"
      metaTitle="Residential Moves Duisburg | Stress-Free Moving from €299"
      metaDescription="Professional residential moving in Duisburg. Full service with packing, furniture assembly & transport. Fixed prices, insured. Free inspection!"
      canonicalPath="/en/services/residential-moves"
      icon={Home}
      badge="Stress-free to your new home"
      h1="Residential Moves in Duisburg"
      subtitle="Relax and move with your local moving partner"
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
      introText={`A move is more than just carrying boxes. It's the start of a new chapter in your life - and you should begin it relaxed. As your local moving company in Duisburg, we take the work off your hands and ensure your residential move goes smoothly.

Whether you're moving within Duisburg, from Essen to Duisburg, or from Duisburg to Düsseldorf - our experienced team takes care of every step. From carefully packing delicate items to safe transport to assembling furniture in your new home.

We know: every move is different. That's why we tailor our service exactly to your needs. Want to pack everything yourself and only need transport? No problem. Want a complete service? We handle everything. Flexible solutions at fair prices - that's our promise.`}
      processTitle="Your Move in 5 Steps"
      processSteps={[
        { title: 'Inquiry', description: 'Call us or use our form' },
        { title: 'Inspection', description: 'We visit and plan your move' },
        { title: 'Fixed Price', description: 'You receive a binding quote' },
        { title: 'Moving Day', description: 'We pack, carry, and transport' },
        { title: 'Move-In', description: 'Furniture assembly, your new home is ready' },
      ]}
      featuresTitle="What's Included"
      features={[
        'Professional moving helpers',
        'Modern moving truck',
        'Blankets and straps for protection',
        'Furniture disassembly and assembly',
        'Transport of all your belongings',
        'Insurance coverage',
      ]}
      benefitsTitle="Why Choose Us"
      benefits={[
        'Fixed price guarantee - no surprises',
        'Free inspection before quote',
        'Punctual and reliable',
        'Careful handling of your furniture',
        'Flexible appointments, Saturdays too',
        'Local company with short distances',
      ]}
      pricingTitle="Residential Moving Prices in Duisburg"
      pricingIntro="Transparent prices with no hidden costs. The inspection is always free."
      priceExamples={[
        { label: '1-Room Apartment', price: 'from €299', note: 'approx. 30m², within Duisburg' },
        { label: '2-Room Apartment', price: 'from €449', note: 'approx. 50-60m², within Duisburg' },
        { label: '3-Room Apartment', price: 'from €649', note: 'approx. 70-80m², within Duisburg' },
      ]}
      priceFactors={[
        'Living space and amount of furniture',
        'Floor (ground, 1st floor, attic)',
        'Elevator available or not',
        'Distance to the new apartment',
        'Additional services (packing, assembly)',
        'Parking situation',
      ]}
      localTitle="Residential Moves Throughout Duisburg"
      localText="No matter which district you live in or are moving to - we know Duisburg. Whether it's an old building apartment in Hochfeld, a single-family home in Großenbaum, or a new apartment in Neudorf: we know the challenges and plan accordingly."
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
          question: 'How much does a residential move cost in Duisburg?',
          answer: 'A residential move in Duisburg costs from €299 for a 1-room apartment. The exact price depends on apartment size, floor, distance, and desired additional services. After a free inspection, you receive a binding fixed price quote.',
        },
        {
          question: 'How long does a residential move take?',
          answer: 'The duration depends on the apartment size. A 2-room apartment within Duisburg is typically moved in 4-6 hours. For larger apartments or longer distances, it takes correspondingly more time.',
        },
        {
          question: 'Do I have to pack myself?',
          answer: 'No, you don\'t have to. We offer an optional packing service. But you can also pack everything yourself and we only handle the transport and furniture assembly.',
        },
        {
          question: 'Do you also assemble furniture?',
          answer: 'Yes, furniture assembly is standard with us. We disassemble your furniture at the old location and reassemble it in the new apartment. Complex furniture like PAX wardrobes are no problem.',
        },
        {
          question: 'Can I also have just individual pieces of furniture transported?',
          answer: 'Of course. For individual furniture pieces, we offer our furniture transport service. Ideal when you need to pick up a sofa from classified ads, for example.',
        },
        {
          question: 'What happens in case of damage?',
          answer: 'All transports are insured through our business liability insurance. If something gets damaged despite all precautions, we handle the claim smoothly.',
        },
        {
          question: 'Do you offer moves on weekends?',
          answer: 'Yes, we also carry out residential moves on Saturdays. So you don\'t have to take time off work. Prices are the same as weekdays.',
        },
        {
          question: 'How early should I book the move?',
          answer: 'Ideally 2-4 weeks in advance, especially at the end of the month. But we often still have capacity for short-notice moves. Just call us.',
        },
      ]}
      relatedServices={[
        { text: 'Office Relocations', href: '/en/services/office-relocations' },
        { text: 'Clearance & Disposal', href: '/en/services/clearance-disposal' },
        { text: 'Furniture Transport', href: '/en/services/furniture-transport' },
        { text: 'Handyman Services', href: '/en/services/handyman-services' },
        { text: 'Renovation', href: '/en/services/renovation' },
        { text: 'Prices', href: '/en/prices' },
      ]}
    />
  );
}
