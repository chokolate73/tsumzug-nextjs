import LocalSEOPage from '@/components/LocalSEOPage';
import { Building2 } from 'lucide-react';

export default function OfficeRelocations() {
  return (
    <LocalSEOPage
      lang="en"
      metaTitle="Office Relocation Duisburg | Business Moving with Minimal Downtime"
      metaDescription="Professional office relocation in Duisburg. IT transport, weekend moves possible. Minimal downtime. Fixed price. Plan your move now!"
      canonicalPath="/en/services/office-relocations"
      icon={Building2}
      badge="Minimal Downtime"
      h1="Office Relocation in Duisburg"
      subtitle="Professional and efficient business moving - even on weekends"
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
      introText={`An office move is a logistical challenge. Every hour of downtime costs money. That's why we plan your business relocation in Duisburg to minimize disruption to your operations.

As an experienced moving company, we know what matters in commercial relocations: precise planning, safe handling of IT equipment, systematic labeling of all boxes, and smooth execution. On Monday, your employees will be at their new workstations - as if nothing happened.

Whether small office or large company, medical practice or law firm - we have the experience and capacity for your business move in Duisburg and the surrounding area.`}
      processTitle="Your Office Move in 5 Steps"
      processSteps={[
        { title: 'Initial Meeting', description: 'Clarify requirements and schedule' },
        { title: 'Site Visit', description: 'On-site inspection and inventory' },
        { title: 'Planning', description: 'Detailed moving plan and fixed price' },
        { title: 'Relocation', description: 'Execution at the agreed time' },
        { title: 'Setup', description: 'Assembly and commissioning at new location' },
      ]}
      featuresTitle="Our Office Moving Service"
      features={[
        'Moving outside business hours',
        'Weekend and night moves possible',
        'Safe IT equipment transport',
        'Systematic labeling and inventory',
        'Disassembly and assembly of office furniture',
        'Coordination with other contractors',
        'Single point of contact for the project',
      ]}
      benefitsTitle="Your Benefits"
      benefits={[
        'Minimal business interruption',
        'Experience with sensitive equipment',
        'Flexible appointments to suit your needs',
        'Insured transport',
        'Transparent fixed prices',
        'Professional project management',
      ]}
      pricingTitle="Office Relocation Prices"
      pricingIntro="Office move costs depend on scope. We create an individual quote for you."
      priceExamples={[
        { label: 'Small Office', price: 'from €499', note: 'up to 5 workstations' },
        { label: 'Medium Office', price: 'from €1,200', note: '5-15 workstations' },
        { label: 'Large Office', price: 'from €2,500', note: 'from 15 workstations' },
      ]}
      priceFactors={[
        'Number of workstations',
        'Amount of IT equipment',
        'Floor and building access',
        'Distance to new location',
        'Desired moving time',
        'Special requirements',
      ]}
      localTitle="Office Relocations in Duisburg"
      localText="Whether in Duisburg Inner Harbor, the Ruhrort industrial area, or Logport - we know the locations in Duisburg and can optimally plan your office move. We also regularly handle moves to and from Düsseldorf, Essen, or Oberhausen."
      neighborhoods={[
        'Duisburg-Mitte',
        'Inner Harbor',
        'Ruhrort',
        'Neudorf',
        'Rheinhausen',
        'Meiderich',
        'Hochfeld',
        'Großenbaum',
        'Wedau',
        'Kaßlerfeld',
        'Logport',
        'Business Park',
      ]}
      faqs={[
        {
          question: 'How much does an office move cost in Duisburg?',
          answer: 'An office move in Duisburg costs from about €499 for a small office (up to 5 workstations). Medium-sized offices are from €1,200, larger companies from €2,500. The exact price is calculated individually after an inspection.',
        },
        {
          question: 'How do you minimize downtime?',
          answer: 'We offer moves on weekends, evenings, or at night. With precise planning, pre-labeling of all boxes, and sufficient staff, your office is ready for operation the next business day.',
        },
        {
          question: 'Do you transport IT equipment?',
          answer: 'Yes, we have experience transporting servers, computers, monitors, and other IT devices. Sensitive technology is specially packed and transported with extra protection.',
        },
        {
          question: 'Do you also assemble office furniture?',
          answer: 'Yes, disassembly and assembly of office furniture is part of our standard service. Desks, cabinets, and shelves are reassembled at the new location and placed in the correct position.',
        },
        {
          question: 'How long does an office move take?',
          answer: 'A small office can be moved in one day. For larger companies, we plan the move over a weekend or in several stages to avoid disrupting operations.',
        },
        {
          question: 'Do you also offer storage?',
          answer: 'Yes, if there\'s a gap between moving out and moving in, we can store office furniture and equipment. Talk to us about your requirements.',
        },
        {
          question: 'Is the office move insured?',
          answer: 'Yes, all transports are covered by our business liability insurance. For particularly valuable items or equipment, we can offer extended insurance.',
        },
        {
          question: 'How early should an office move be planned?',
          answer: 'Ideally, start planning 4-8 weeks in advance. For larger moves, we recommend starting even earlier. For short-notice requests, we often still have capacity.',
        },
      ]}
      relatedServices={[
        { text: 'Residential Moves', href: '/en/services/residential-moves' },
        { text: 'Furniture Transport', href: '/en/services/furniture-transport' },
        { text: 'Clearance & Disposal', href: '/en/services/clearance-disposal' },
        { text: 'Handyman Services', href: '/en/services/handyman-services' },
        { text: 'Renovation', href: '/en/services/renovation' },
        { text: 'Prices', href: '/en/prices' },
      ]}
    />
  );
}
