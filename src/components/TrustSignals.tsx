import React from 'react';
import { Shield, Euro, Clock, Star, CheckCircle, Truck } from 'lucide-react';

interface TrustSignalProps {
  variant?: 'horizontal' | 'vertical' | 'compact';
  showReviews?: boolean;
  className?: string;
}

const trustItems = [
  {
    icon: Euro,
    title: 'Festpreisgarantie',
    description: 'Keine versteckten Kosten',
  },
  {
    icon: Shield,
    title: 'Versichert',
    description: 'Voller Transportschutz',
  },
  {
    icon: Clock,
    title: 'Pünktlich',
    description: 'Zuverlässige Termine',
  },
  {
    icon: Truck,
    title: 'Lokal',
    description: 'Team aus Duisburg',
  },
];

const reviews = [
  {
    name: 'Michael K.',
    text: 'Super Service, pünktlich und professionell. Absolut empfehlenswert!',
    rating: 5,
  },
  {
    name: 'Sandra M.',
    text: 'Freundliches Team, faire Preise. Würde jederzeit wieder buchen.',
    rating: 5,
  },
  {
    name: 'Thomas B.',
    text: 'Schnell und sorgfältig. Alles heil angekommen!',
    rating: 5,
  },
];

export function TrustBadges({ variant = 'horizontal', className = '' }: TrustSignalProps) {
  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className}`}>
        {trustItems.slice(0, 3).map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 rounded-full"
          >
            <item.icon className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-800">{item.title}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`space-y-3 ${className}`}>
        {trustItems.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">{item.title}</p>
              <p className="text-sm text-slate-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Horizontal (default)
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {trustItems.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm"
        >
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
            <item.icon className="w-6 h-6 text-orange-600" />
          </div>
          <p className="font-semibold text-slate-900">{item.title}</p>
          <p className="text-sm text-slate-600 mt-1">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export function MiniReviews({ className = '' }: { className?: string }) {
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-sm font-medium text-slate-700">5.0 von zufriedenen Kunden</span>
      </div>
      <div className="space-y-2">
        {reviews.map((review, index) => (
          <div key={index} className="bg-slate-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">{review.name[0]}</span>
              </div>
              <span className="font-medium text-slate-900 text-sm">{review.name}</span>
              <div className="flex ml-auto">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-slate-600 text-sm">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TrustStrip({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-slate-900 py-3 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm text-white">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Festpreisgarantie</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Versicherter Transport</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Lokales Team aus Duisburg</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Kostenlose Beratung</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TrustSignals({ variant = 'horizontal', showReviews = false, className = '' }: TrustSignalProps) {
  return (
    <div className={className}>
      <TrustBadges variant={variant} />
      {showReviews && <MiniReviews className="mt-6" />}
    </div>
  );
}
