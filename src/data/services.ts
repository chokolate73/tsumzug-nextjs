// Service definitions for all supported languages
import {
  Home,
  Building2,
  Trash2,
  Truck,
  Wrench,
  PaintBucket,
  LucideIcon
} from 'lucide-react';

export interface ServiceData {
  id: string;
  slug: {
    de: string;
    en: string;
    ru: string;
  };
  icon: LucideIcon;
  title: {
    de: string;
    en: string;
    ru: string;
  };
  subtitle: {
    de: string;
    en: string;
    ru: string;
  };
  description: {
    de: string;
    en: string;
    ru: string;
  };
  longDescription: {
    de: string;
    en: string;
    ru: string;
  };
  features: {
    de: string[];
    en: string[];
    ru: string[];
  };
  benefits: {
    de: string[];
    en: string[];
    ru: string[];
  };
  metaTitle: {
    de: string;
    en: string;
    ru: string;
  };
  metaDescription: {
    de: string;
    en: string;
    ru: string;
  };
  metaKeywords: {
    de: string;
    en: string;
    ru: string;
  };
  image: string;
  heroImage: string;
}

export const services: ServiceData[] = [
  {
    id: 'privatumzuege',
    slug: {
      de: 'privatumzuege',
      en: 'residential-moves',
      ru: 'chastnye-pereezdy',
    },
    icon: Home,
    title: {
      de: 'Privatumzüge',
      en: 'Residential Moves',
      ru: 'Частные переезды',
    },
    subtitle: {
      de: 'Wohnungsumzüge',
      en: 'Apartment & House Moving',
      ru: 'Переезд квартир и домов',
    },
    description: {
      de: 'Kompletter Umzugsservice für Wohnungen und Häuser. Von der Verpackung bis zum Auspacken – wir kümmern uns um jedes Detail Ihres Umzugs.',
      en: 'Complete moving service for apartments and houses. From packing to unpacking – we take care of every detail of your move.',
      ru: 'Полный сервис по переезду квартир и домов. От упаковки до распаковки – мы позаботимся о каждой детали вашего переезда.',
    },
    longDescription: {
      de: `Sie suchen eine zuverlässige Umzugsfirma in Duisburg? Unser Privatumzugsservice bietet Ihnen einen stressfreien Wohnungsumzug von Anfang bis Ende. Egal ob Sie innerhalb Duisburgs umziehen oder nach Oberhausen, Mülheim an der Ruhr, Essen, Düsseldorf oder eine andere Stadt in NRW – unser erfahrenes Team sorgt dafür, dass Ihr Hab und Gut sicher und pünktlich am neuen Wohnort ankommt.

Wir bieten einen Komplettservice für Ihren Umzug, der alles umfasst: professionelle Verpackung Ihrer Gegenstände, fachgerechte Demontage und Montage von Möbeln, sicheren Möbeltransport in unseren modernen Umzugsfahrzeugen und auf Wunsch auch das Auspacken an Ihrem neuen Zuhause. Als günstige Umzugsfirma in Duisburg bieten wir faire Festpreise ohne versteckte Kosten.

Unsere Umzugshelfer sind geschult, erfahren und gehen sorgsam mit Ihrem Eigentum um. Ob Umzug Duisburg nach Moers, Dinslaken, Krefeld, Bottrop oder Ratingen – wir sind Ihre professionelle Umzugsfirma NRW. Wir verwenden hochwertige Verpackungsmaterialien und verfügen über spezielle Ausrüstung für empfindliche Gegenstände, schwere Möbel und wertvolle Stücke. Jetzt Angebot anfordern!`,
      en: `Looking for a reliable moving company in Duisburg? Our residential moving service offers you a stress-free apartment move from start to finish. Whether you're moving within Duisburg or to Oberhausen, Mülheim an der Ruhr, Essen, Düsseldorf, or another city in NRW – our experienced team ensures your belongings arrive safely and on time at your new home.

We offer a complete moving service that includes everything: professional packing of your items, expert disassembly and assembly of furniture, secure furniture transport in our modern moving vehicles, and unpacking at your new home upon request. As an affordable moving company in Duisburg, we offer fair fixed prices with no hidden costs.

Our moving helpers are trained, experienced, and handle your property with care. Whether you're moving from Duisburg to Moers, Dinslaken, Krefeld, Bottrop, or Ratingen – we are your professional moving company in NRW. We use high-quality packing materials and have special equipment for delicate items, heavy furniture, and valuable pieces. Request a quote today!`,
      ru: `Ищете надёжную транспортную компанию в Дуйсбурге? Наш сервис частных переездов предлагает вам переезд квартиры без стресса от начала до конца. Независимо от того, переезжаете ли вы в пределах Дуйсбурга или в Оберхаузен, Мюльхайм-ан-дер-Рур, Эссен, Дюссельдорф или другой город в земле Северный Рейн-Вестфалия – наша опытная команда обеспечит безопасную и своевременную доставку ваших вещей в новый дом.

Мы предлагаем комплексный сервис переезда, который включает всё: профессиональную упаковку ваших вещей, грамотную разборку и сборку мебели, безопасную перевозку мебели в наших современных грузовиках и распаковку в вашем новом доме по желанию. Как доступная транспортная компания в Дуйсбурге, мы предлагаем честные фиксированные цены без скрытых платежей.

Наши грузчики обучены, опытны и бережно обращаются с вашим имуществом. Переезд из Дуйсбурга в Моерс, Динслакен, Крефельд, Ботроп или Ратинген – мы ваша профессиональная компания по переездам в NRW. Мы используем качественные упаковочные материалы и имеем специальное оборудование для хрупких предметов, тяжёлой мебели и ценных вещей. Запросите предложение сегодня!`,
    },
    features: {
      de: ['Kompletter Packservice', 'Möbel Ab-/Aufbau', 'Sicherer Transport', 'Auspackservice'],
      en: ['Full packing service', 'Furniture assembly/disassembly', 'Secure transport', 'Unpacking service'],
      ru: ['Полная упаковка', 'Сборка/разборка мебели', 'Безопасная транспортировка', 'Услуга распаковки'],
    },
    benefits: {
      de: [
        'Kostenlose Besichtigung und Angebot',
        'Versicherter Transport aller Gegenstände',
        'Flexible Termine – auch am Wochenende',
        'Erfahrenes und zuverlässiges Team',
        'Festpreisgarantie ohne versteckte Kosten',
        'Umzug innerhalb NRW und deutschlandweit',
      ],
      en: [
        'Free on-site estimate',
        'Insured transport of all items',
        'Flexible scheduling – weekends available',
        'Experienced and reliable team',
        'Fixed price guarantee with no hidden costs',
        'Moving within NRW',
      ],
      ru: [
        'Бесплатный осмотр и расчёт стоимости',
        'Застрахованная перевозка всех вещей',
        'Гибкий график – работаем по выходным',
        'Опытная и надёжная команда',
        'Гарантия фиксированной цены без скрытых платежей',
        'Переезды по NRW',
      ],
    },
    metaTitle: {
      de: 'Privatumzüge Duisburg & NRW - Stressfreier Wohnungsumzug',
      en: 'Residential Moving Duisburg & NRW - Stress-Free Home Relocation',
      ru: 'Частные переезды Дуйсбург и NRW - Переезд квартир без стресса',
    },
    metaDescription: {
      de: 'Professionelle Privatumzüge in Duisburg und NRW. Komplettservice inkl. Verpackung, Möbelmontage & Transport. Festpreisgarantie ✓ Versichert ✓ Jetzt Angebot anfordern!',
      en: 'Professional residential moves in Duisburg and NRW. Complete service including packing, furniture assembly & transport. Fixed price guarantee ✓ Insured ✓ Get a quote now!',
      ru: 'Профессиональные частные переезды в Дуйсбурге и NRW. Полный сервис включая упаковку, сборку мебели и транспортировку. Фиксированная цена ✓ Страховка ✓ Запросите предложение!',
    },
    metaKeywords: {
      de: 'Privatumzug, Wohnungsumzug, Umzugsfirma Duisburg, Umzug NRW, Möbeltransport, Umzugsservice',
      en: 'residential moving, apartment moving, moving company Duisburg, moving NRW, furniture transport, moving service',
      ru: 'частный переезд, переезд квартиры, транспортная компания Дуйсбург, переезд NRW, перевозка мебели, услуги переезда',
    },
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  },
  {
    id: 'firmenumzuege',
    slug: {
      de: 'firmenumzuege',
      en: 'office-relocations',
      ru: 'ofisnye-pereezdy',
    },
    icon: Building2,
    title: {
      de: 'Firmenumzüge',
      en: 'Office Relocations',
      ru: 'Офисные переезды',
    },
    subtitle: {
      de: 'Büroumzüge',
      en: 'Business Moving',
      ru: 'Переезд бизнеса',
    },
    description: {
      de: 'Professioneller Umzug für Büros und Unternehmen mit minimaler Ausfallzeit. Wir arbeiten auch am Wochenende und abends.',
      en: 'Professional moving for offices and businesses with minimal downtime. We also work on weekends and evenings.',
      ru: 'Профессиональный переезд офисов и предприятий с минимальным простоем. Работаем также по выходным и вечерам.',
    },
    longDescription: {
      de: `Sie planen einen Firmenumzug in Duisburg oder einen Büroumzug in Essen? Ein Gewerbeumzug erfordert präzise Planung und professionelle Durchführung, um Ausfallzeiten zu minimieren und den Geschäftsbetrieb so wenig wie möglich zu beeinträchtigen. Bei TopSicher Umzüge verstehen wir die besonderen Anforderungen von Firmenkunden in Duisburg, Oberhausen, Mülheim an der Ruhr und ganz NRW.

Unser Team ist spezialisiert auf den sicheren Transport von IT-Equipment, Büromöbeln und sensiblen Geschäftsunterlagen. Als erfahrene Umzugsfirma für Büroumzüge erstellen wir einen detaillierten Umzugsplan, der alle Aspekte berücksichtigt – von der Demontage der Arbeitsplätze bis zur vollständigen Einrichtung am neuen Standort. Ob Firmenumzug Düsseldorf, Krefeld oder Ratingen – wir sind Ihr Partner.

Wir bieten flexible Umzugszeiten außerhalb der regulären Geschäftszeiten, damit Ihr Unternehmen am nächsten Arbeitstag voll einsatzbereit ist. Unsere Mitarbeiter sind in der Handhabung von IT-Geräten geschult und führen auf Wunsch eine Inventarisierung durch. Büroumzug Duisburg, Moers, Dinslaken oder Bottrop – kontaktieren Sie uns für ein unverbindliches Angebot!`,
      en: `Planning an office relocation in Duisburg or a business move in Essen? A commercial relocation requires precise planning and professional execution to minimize downtime and disrupt business operations as little as possible. At TopSicher Umzüge, we understand the special requirements of corporate clients in Duisburg, Oberhausen, Mülheim an der Ruhr, and throughout NRW.

Our team specializes in the safe transport of IT equipment, office furniture, and sensitive business documents. As an experienced moving company for office relocations, we create a detailed moving plan that considers all aspects – from workstation disassembly to complete setup at the new location. Whether it's an office move in Düsseldorf, Krefeld, or Ratingen – we are your partner.

We offer flexible moving times outside regular business hours so your company is fully operational the next working day. Our staff is trained in handling IT equipment and can provide inventory management upon request. Office relocation Duisburg, Moers, Dinslaken, or Bottrop – contact us for a free quote!`,
      ru: `Планируете переезд офиса в Дуйсбурге или переезд компании в Эссене? Коммерческий переезд требует точного планирования и профессионального выполнения, чтобы минимизировать простои и как можно меньше нарушить работу бизнеса. В TopSicher Umzüge мы понимаем особые требования корпоративных клиентов в Дуйсбурге, Оберхаузене, Мюльхайм-ан-дер-Рур и по всему NRW.

Наша команда специализируется на безопасной транспортировке IT-оборудования, офисной мебели и конфиденциальных деловых документов. Как опытная компания по переездам офисов, мы составляем детальный план переезда, который учитывает все аспекты – от разборки рабочих мест до полной настройки на новом месте. Переезд офиса в Дюссельдорф, Крефельд или Ратинген – мы ваш партнёр.

Мы предлагаем гибкий график переезда вне обычных рабочих часов, чтобы ваша компания была полностью готова к работе на следующий рабочий день. Наши сотрудники обучены работе с IT-оборудованием и по запросу проводят инвентаризацию. Переезд офиса Дуйсбург, Моерс, Динслакен или Ботроп – свяжитесь с нами для бесплатного предложения!`,
    },
    features: {
      de: ['Umzug außerhalb der Arbeitszeit', 'IT-Equipment Transport', 'Büromöbel Montage', 'Beschriftung & Inventar'],
      en: ['After-hours moving', 'IT equipment transport', 'Office furniture assembly', 'Labeling & inventory'],
      ru: ['Переезд в нерабочее время', 'Транспортировка IT-оборудования', 'Сборка офисной мебели', 'Маркировка и инвентаризация'],
    },
    benefits: {
      de: [
        'Minimale Betriebsunterbrechung',
        'Umzug am Wochenende oder nachts möglich',
        'Sichere Handhabung von IT-Equipment',
        'Systematische Beschriftung aller Kartons',
        'Komplette Einrichtung am neuen Standort',
        'Ein Ansprechpartner für das gesamte Projekt',
      ],
      en: [
        'Minimal business interruption',
        'Weekend or overnight moving available',
        'Safe handling of IT equipment',
        'Systematic labeling of all boxes',
        'Complete setup at new location',
        'Single point of contact for entire project',
      ],
      ru: [
        'Минимальное прерывание работы',
        'Переезд в выходные или ночью',
        'Безопасное обращение с IT-оборудованием',
        'Систематическая маркировка всех коробок',
        'Полная настройка на новом месте',
        'Один контакт для всего проекта',
      ],
    },
    metaTitle: {
      de: 'Firmenumzüge & Büroumzüge Duisburg - Minimale Ausfallzeit',
      en: 'Office Relocations Duisburg & NRW - Minimal Downtime',
      ru: 'Офисные переезды Дуйсбург и NRW - Минимальный простой',
    },
    metaDescription: {
      de: 'Professionelle Firmenumzüge in Duisburg und NRW. IT-Transport, Büromöbel Montage & Umzug außerhalb der Arbeitszeit. Minimale Ausfallzeit ✓ Jetzt anfragen!',
      en: 'Professional office relocations in Duisburg and NRW. IT transport, office furniture assembly & after-hours moving. Minimal downtime ✓ Get a quote now!',
      ru: 'Профессиональные офисные переезды в Дуйсбурге и NRW. IT-транспорт, сборка офисной мебели и переезд в нерабочее время. Минимальный простой ✓ Запросите предложение!',
    },
    metaKeywords: {
      de: 'Firmenumzug, Büroumzug, Gewerbeumzug, IT-Umzug, Umzugsfirma Unternehmen, Büroumzug NRW',
      en: 'office relocation, business moving, commercial moving, IT relocation, corporate moving company, office moving NRW',
      ru: 'офисный переезд, переезд бизнеса, коммерческий переезд, IT-переезд, корпоративный переезд, офисный переезд NRW',
    },
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
  },
  {
    id: 'entruempelung',
    slug: {
      de: 'entruempelung',
      en: 'clearance-disposal',
      ru: 'uborka-vyvoz',
    },
    icon: Trash2,
    title: {
      de: 'Entrümpelung',
      en: 'Clearance & Disposal',
      ru: 'Уборка и вывоз',
    },
    subtitle: {
      de: 'Haushaltsauflösung',
      en: 'Junk Removal',
      ru: 'Расчистка помещений',
    },
    description: {
      de: 'Entsorgung von Altmöbeln, Elektrogeräten und Sperrmüll. Komplette Haushaltsauflösungen, Keller- und Dachbodenräumungen.',
      en: 'Disposal of old furniture, electronics, and bulky waste. Complete household clearances, basement and attic cleanouts.',
      ru: 'Вывоз старой мебели, электроники и крупногабаритного мусора. Полная уборка домохозяйств, подвалов и чердаков.',
    },
    longDescription: {
      de: `Sie benötigen eine Entrümpelung in Duisburg oder eine Haushaltsauflösung in Oberhausen? Ob Wohnungsauflösung, Kellerentrümpelung oder Sperrmüll Entsorgung nach einer Renovierung – wir übernehmen die komplette Arbeit für Sie. Unser Entrümpelungsservice in Duisburg, Mülheim an der Ruhr, Essen und Umgebung ist schnell, gründlich und umweltbewusst.

Wir sortieren Ihre Gegenstände sorgfältig und kümmern uns um die fachgerechte Entsorgung. Brauchbare Möbel und Gegenstände werden auf Wunsch an soziale Einrichtungen gespendet. Sondermüll und Elektrogeräte entsorgen wir nach den geltenden Vorschriften. Entrümpelung Düsseldorf, Krefeld, Moers – wir sind in ganz NRW für Sie da.

Unser Haushaltsauflösung Service eignet sich perfekt für Erbengemeinschaften, Vermieter, Hausverwalter und alle, die eine professionelle und diskrete Räumung in Dinslaken, Bottrop, Ratingen oder Duisburg benötigen. Wir erstellen nach der Besichtigung ein transparentes Festpreisangebot. Jetzt Entrümpelung NRW anfragen!`,
      en: `Need a clearance service in Duisburg or household clearance in Oberhausen? Whether apartment clearance, basement cleanout, or junk removal after renovation – we take care of the complete work for you. Our clearance service in Duisburg, Mülheim an der Ruhr, Essen, and surrounding areas is fast, thorough, and environmentally conscious.

We carefully sort your items and handle proper disposal. Usable furniture and items can be donated to social organizations upon request. We dispose of hazardous waste and electronics according to current regulations. Clearance services in Düsseldorf, Krefeld, Moers – we serve all of NRW.

Our household clearance service is perfect for estate settlements, landlords, property managers, and anyone who needs professional and discreet clearance in Dinslaken, Bottrop, Ratingen, or Duisburg. We provide a transparent fixed-price quote after the on-site assessment. Request your clearance quote in NRW today!`,
      ru: `Нужна уборка помещений в Дуйсбурге или расчистка дома в Оберхаузене? Будь то расчистка квартиры, очистка подвала или вывоз мусора после ремонта – мы берём на себя всю работу. Наша служба уборки в Дуйсбурге, Мюльхайм-ан-дер-Рур, Эссене и окрестностях работает быстро, тщательно и экологично.

Мы тщательно сортируем ваши вещи и занимаемся правильной утилизацией. Пригодная мебель и вещи по желанию передаются в социальные организации. Опасные отходы и электронику мы утилизируем в соответствии с действующими нормами. Уборка в Дюссельдорфе, Крефельде, Моерсе – мы работаем по всему NRW.

Наш сервис расчистки домов идеально подходит для наследников, арендодателей, управляющих недвижимостью и всех, кому нужна профессиональная и конфиденциальная уборка в Динслакене, Ботропе, Ратингене или Дуйсбурге. После осмотра мы предоставляем прозрачное предложение с фиксированной ценой. Запросите уборку в NRW сегодня!`,
    },
    features: {
      de: ['Abholung am selben Tag', 'Wohnungsauflösung', 'Entsorgung nach Renovierung', 'Umweltgerechte Entsorgung'],
      en: ['Same-day pickup', 'Apartment clearance', 'Post-renovation disposal', 'Eco-friendly recycling'],
      ru: ['Вывоз в тот же день', 'Уборка квартиры', 'Вывоз после ремонта', 'Экологичная утилизация'],
    },
    benefits: {
      de: [
        'Schnelle Terminvergabe – auch kurzfristig',
        'Komplette Entrümpelung von A bis Z',
        'Fachgerechte Entsorgung aller Materialien',
        'Besenreine Übergabe auf Wunsch',
        'Diskret und professionell',
        'Faire Festpreise ohne Überraschungen',
      ],
      en: [
        'Quick scheduling – short notice available',
        'Complete clearance from A to Z',
        'Proper disposal of all materials',
        'Broom-clean handover available',
        'Discreet and professional',
        'Fair fixed prices with no surprises',
      ],
      ru: [
        'Быстрое назначение – возможно срочно',
        'Полная уборка от А до Я',
        'Правильная утилизация всех материалов',
        'Сдача помещения в чистом виде',
        'Конфиденциально и профессионально',
        'Честные фиксированные цены без сюрпризов',
      ],
    },
    metaTitle: {
      de: 'Entrümpelung Duisburg - Haushaltsauflösung & Sperrmüll Entsorgung',
      en: 'Clearance & Disposal Duisburg - Household Clearance & Junk Removal',
      ru: 'Уборка и вывоз Дуйсбург - Расчистка помещений и вывоз мусора',
    },
    metaDescription: {
      de: 'Professionelle Entrümpelung in Duisburg und NRW. Haushaltsauflösung, Kellerentrümpelung & Sperrmüll. Schnell & umweltgerecht ✓ Festpreise ✓ Jetzt anfragen!',
      en: 'Professional clearance services in Duisburg and NRW. Household clearance, basement cleanout & junk removal. Fast & eco-friendly ✓ Fixed prices ✓ Get a quote!',
      ru: 'Профессиональная уборка в Дуйсбурге и NRW. Расчистка домов, подвалов и вывоз мусора. Быстро и экологично ✓ Фиксированные цены ✓ Запросите предложение!',
    },
    metaKeywords: {
      de: 'Entrümpelung, Haushaltsauflösung, Sperrmüll Entsorgung, Kellerentrümpelung, Wohnungsauflösung Duisburg',
      en: 'clearance, household clearance, junk removal, basement cleanout, apartment clearance Duisburg',
      ru: 'уборка, расчистка дома, вывоз мусора, уборка подвала, расчистка квартиры Дуйсбург',
    },
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
  },
  {
    id: 'moebeltransport',
    slug: {
      de: 'moebeltransport',
      en: 'furniture-transport',
      ru: 'perevozka-mebeli',
    },
    icon: Truck,
    title: {
      de: 'Möbeltransport',
      en: 'Furniture Transport',
      ru: 'Перевозка мебели',
    },
    subtitle: {
      de: 'Transportservice',
      en: 'Freight & Delivery',
      ru: 'Транспортные услуги',
    },
    description: {
      de: 'Möbel-, Geräte- und Gütertransport in NRW. Von Einzelstücken bis zur Komplettladung.',
      en: 'Furniture, appliance, and freight transport in NRW. From single items to full loads.',
      ru: 'Перевозка мебели, техники и грузов по NRW. От отдельных предметов до полной загрузки.',
    },
    longDescription: {
      de: `Sie suchen einen günstigen Möbeltransport in Duisburg? Unsere Möbelspedition bietet flexible Lösungen für den Transport von Möbeln, Elektrogeräten und anderen Gütern in Duisburg, Oberhausen, Mülheim an der Ruhr und ganz NRW. Ob Sie ein einzelnes Möbelstück von IKEA abholen lassen möchten oder eine komplette Ladung transportieren müssen – wir haben das passende Fahrzeug und die Erfahrung.

Wir verfügen über verschiedene Fahrzeuggrößen, vom Kleintransporter bis zum großen Möbelwagen. Alle unsere Fahrzeuge sind mit Decken, Gurten und weiterem Sicherungsmaterial ausgestattet, um Ihre Waren während des Transports optimal zu schützen. Möbellieferung Essen, Düsseldorf, Krefeld – wir liefern zuverlässig und pünktlich.

Unser Transportservice ist flexibel, zuverlässig und versichert. Möbeltransport Moers, Dinslaken, Bottrop oder Ratingen – auf Wunsch übernehmen wir auch die Montage von Möbeln am Zielort. Jetzt Angebot für Ihren Gütertransport NRW anfordern!`,
      en: `Looking for affordable furniture transport in Duisburg? Our furniture delivery service offers flexible solutions for transporting furniture, appliances, and other goods in Duisburg, Oberhausen, Mülheim an der Ruhr, and throughout NRW. Whether you need to pick up a single piece of furniture from IKEA or transport a full load – we have the right vehicle and experience.

We have various vehicle sizes, from small vans to large moving trucks. All our vehicles are equipped with blankets, straps, and other securing materials to optimally protect your goods during transport. Furniture delivery in Essen, Düsseldorf, Krefeld – we deliver reliably and on time.

Our transport service is flexible, reliable, and insured. Furniture transport in Moers, Dinslaken, Bottrop, or Ratingen – upon request, we also handle furniture assembly at the destination. Request a quote for your freight transport in NRW today!`,
      ru: `Ищете недорогую перевозку мебели в Дуйсбурге? Наша служба доставки мебели предлагает гибкие решения для перевозки мебели, техники и других товаров в Дуйсбурге, Оберхаузене, Мюльхайм-ан-дер-Рур и по всему NRW. Нужно ли вам забрать один предмет мебели из IKEA или перевезти полную загрузку – у нас есть подходящий транспорт и опыт.

У нас есть различные размеры транспорта, от небольших фургонов до больших грузовиков для переезда. Все наши автомобили оснащены одеялами, ремнями и другими материалами для крепления, чтобы оптимально защитить ваши товары во время транспортировки. Доставка мебели в Эссен, Дюссельдорф, Крефельд – мы доставляем надёжно и вовремя.

Наша транспортная служба гибкая, надёжная и застрахованная. Перевозка мебели в Моерс, Динслакен, Ботроп или Ратинген – по запросу мы также занимаемся сборкой мебели на месте назначения. Запросите предложение на грузоперевозки в NRW сегодня!`,
    },
    features: {
      de: ['Flexible Terminplanung', 'Verschiedene Fahrzeuggrößen', 'Versicherter Transport', 'NRW-weite Lieferung'],
      en: ['Flexible scheduling', 'Various vehicle sizes', 'Insured transport', 'NRW-wide delivery'],
      ru: ['Гибкий график', 'Различные размеры транспорта', 'Застрахованная перевозка', 'Доставка по NRW'],
    },
    benefits: {
      de: [
        'Abholung von Möbelhäusern und Privat',
        'Sichere Verpackung und Ladungssicherung',
        'Pünktliche Lieferung garantiert',
        'Flexible Zeitfenster',
        'Erfahrene Fahrer',
        'Tracking auf Wunsch',
      ],
      en: [
        'Pickup from furniture stores and private',
        'Secure packaging and load securing',
        'Punctual delivery guaranteed',
        'Flexible time windows',
        'Experienced drivers',
        'Tracking available',
      ],
      ru: [
        'Забор из мебельных магазинов и от частных лиц',
        'Надёжная упаковка и крепление груза',
        'Гарантия своевременной доставки',
        'Гибкие временные окна',
        'Опытные водители',
        'Отслеживание по запросу',
      ],
    },
    metaTitle: {
      de: 'Möbeltransport Duisburg & NRW - Günstig & Zuverlässig',
      en: 'Furniture Transport Duisburg & NRW - Affordable & Reliable',
      ru: 'Перевозка мебели Дуйсбург и NRW - Недорого и надёжно',
    },
    metaDescription: {
      de: 'Günstiger Möbeltransport in Duisburg und NRW. Einzelstücke oder Komplettladung. Versichert ✓ Flexibel ✓ Deutschlandweit ✓ Jetzt anfragen!',
      en: 'Affordable furniture transport in Duisburg and NRW. Single items or full loads. Insured ✓ Flexible ✓ Germany-wide ✓ Get a quote now!',
      ru: 'Недорогая перевозка мебели в Дуйсбурге и NRW. Отдельные предметы или полная загрузка. Страховка ✓ Гибко ✓ По Германии ✓ Запросите предложение!',
    },
    metaKeywords: {
      de: 'Möbeltransport, Möbelspedition, Gütertransport, Lieferservice Möbel, Transport Duisburg, Möbellieferung',
      en: 'furniture transport, furniture delivery, freight transport, furniture delivery service, transport Duisburg',
      ru: 'перевозка мебели, доставка мебели, грузоперевозки, служба доставки мебели, транспорт Дуйсбург',
    },
    image: '/assets/service-transport.jpg',
    heroImage: '/assets/service-transport.jpg',
  },
  {
    id: 'hausmeisterservice',
    slug: {
      de: 'hausmeisterservice',
      en: 'handyman-services',
      ru: 'uslugi-masterov',
    },
    icon: Wrench,
    title: {
      de: 'Hausmeisterservice',
      en: 'Handyman Services',
      ru: 'Услуги мастеров',
    },
    subtitle: {
      de: 'Handwerkerservice',
      en: 'Home Maintenance',
      ru: 'Домашний ремонт',
    },
    description: {
      de: 'IKEA-Möbelmontage, Regale und Lampen aufhängen, Kleinreparaturen, Geräteanschluss – alles was Sie nach dem Umzug brauchen.',
      en: 'IKEA furniture assembly, shelving and lamp installation, minor repairs, appliance hookup – everything you need after moving.',
      ru: 'Сборка мебели IKEA, установка полок и ламп, мелкий ремонт, подключение техники – всё что нужно после переезда.',
    },
    longDescription: {
      de: `Sie suchen einen Hausmeisterservice in Duisburg oder einen Handwerker in Oberhausen? Nach dem Umzug gibt es oft noch viel zu tun: Möbel müssen aufgebaut, Lampen angeschlossen und Bilder aufgehängt werden. Unser Handwerkerservice in Duisburg, Mülheim an der Ruhr, Essen und Umgebung nimmt Ihnen diese Arbeit ab und sorgt dafür, dass Sie sich schnell in Ihrem neuen Zuhause wohlfühlen.

Unsere Handwerker sind erfahren in der Möbelmontage aller gängigen Marken, insbesondere IKEA Aufbauservice, IKEA PAX-Schränke, Küchenmontage und Einbauschränke. Wir hängen Ihre Regale, Spiegel und Bilder auf, installieren Gardinenstangen und schließen Ihre Elektrogeräte an. Möbelaufbau Düsseldorf, Krefeld, Moers – wir sind flexibel und schnell vor Ort.

Auch für kleinere Reparaturen sind wir Ihr Ansprechpartner in Dinslaken, Bottrop, Ratingen und ganz NRW: tropfende Wasserhähne, quietschende Türen oder lose Griffe – wir erledigen alles schnell und zuverlässig. Jetzt Handwerkerservice Duisburg buchen!`,
      en: `Looking for a handyman service in Duisburg or a craftsman in Oberhausen? After moving, there's often still much to do: furniture needs to be assembled, lamps connected, and pictures hung. Our handyman service in Duisburg, Mülheim an der Ruhr, Essen, and surrounding areas takes care of this work and ensures you feel comfortable in your new home quickly.

Our craftsmen are experienced in furniture assembly of all common brands, especially IKEA assembly service, IKEA PAX wardrobes, kitchen installation, and built-in closets. We hang your shelves, mirrors, and pictures, install curtain rods, and connect your appliances. Furniture assembly in Düsseldorf, Krefeld, Moers – we're flexible and arrive quickly.

We're also your contact for minor repairs in Dinslaken, Bottrop, Ratingen, and throughout NRW: dripping faucets, squeaky doors, or loose handles – we handle everything quickly and reliably. Book your handyman service in Duisburg today!`,
      ru: `Ищете услуги мастера в Дуйсбурге или мастера на час в Оберхаузене? После переезда часто остаётся много работы: нужно собрать мебель, подключить лампы и повесить картины. Наша служба мастеров в Дуйсбурге, Мюльхайм-ан-дер-Рур, Эссене и окрестностях берёт эту работу на себя и обеспечивает ваш быстрый комфорт в новом доме.

Наши мастера имеют опыт сборки мебели всех популярных брендов, особенно сервис сборки IKEA, шкафов IKEA PAX, установки кухонь и встроенных шкафов. Мы вешаем ваши полки, зеркала и картины, устанавливаем карнизы и подключаем вашу технику. Сборка мебели в Дюссельдорфе, Крефельде, Моерсе – мы гибкие и быстро приезжаем.

Мы также ваш контакт для мелкого ремонта в Динслакене, Ботропе, Ратингене и по всему NRW: капающие краны, скрипящие двери или разболтавшиеся ручки – мы всё делаем быстро и надёжно. Закажите услуги мастера в Дуйсбурге сегодня!`,
    },
    features: {
      de: ['Möbelmontage aller Art', 'Küchenmontage', 'Gardinenstangen aufhängen', 'Geräteanschluss'],
      en: ['All types of furniture assembly', 'Kitchen installation', 'Curtain rod mounting', 'Appliance hookup'],
      ru: ['Сборка любой мебели', 'Установка кухни', 'Установка карнизов', 'Подключение техники'],
    },
    benefits: {
      de: [
        'IKEA-Montage vom Profi',
        'Alle Werkzeuge und Materialien inklusive',
        'Schnelle Terminvergabe',
        'Stundensatz oder Festpreis möglich',
        'Saubere und sorgfältige Arbeit',
        'Entsorgung von Verpackungsmaterial',
      ],
      en: [
        'Professional IKEA assembly',
        'All tools and materials included',
        'Quick scheduling',
        'Hourly rate or fixed price available',
        'Clean and careful work',
        'Packaging disposal included',
      ],
      ru: [
        'Профессиональная сборка IKEA',
        'Все инструменты и материалы включены',
        'Быстрое назначение',
        'Почасовая оплата или фиксированная цена',
        'Чистая и аккуратная работа',
        'Утилизация упаковки включена',
      ],
    },
    metaTitle: {
      de: 'Hausmeisterservice Duisburg - Möbelmontage & Handwerkerservice',
      en: 'Handyman Services Duisburg - Furniture Assembly & Home Repairs',
      ru: 'Услуги мастеров Дуйсбург - Сборка мебели и домашний ремонт',
    },
    metaDescription: {
      de: 'Professioneller Hausmeisterservice in Duisburg. IKEA Möbelmontage, Küchenmontage, Lampen aufhängen & Geräteanschluss. Schnell & zuverlässig ✓ Jetzt anfragen!',
      en: 'Professional handyman services in Duisburg. IKEA furniture assembly, kitchen installation, lamp mounting & appliance hookup. Fast & reliable ✓ Get a quote!',
      ru: 'Профессиональные услуги мастеров в Дуйсбурге. Сборка мебели IKEA, установка кухни, монтаж ламп и подключение техники. Быстро и надёжно ✓ Запросите предложение!',
    },
    metaKeywords: {
      de: 'Hausmeisterservice, Möbelmontage, IKEA Aufbau, Handwerker Duisburg, Küchenmontage, Geräteanschluss',
      en: 'handyman service, furniture assembly, IKEA assembly, handyman Duisburg, kitchen installation, appliance hookup',
      ru: 'услуги мастера, сборка мебели, сборка IKEA, мастер Дуйсбург, установка кухни, подключение техники',
    },
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80',
  },
  {
    id: 'renovierung',
    slug: {
      de: 'renovierung',
      en: 'renovation',
      ru: 'remont',
    },
    icon: PaintBucket,
    title: {
      de: 'Renovierung',
      en: 'Renovation',
      ru: 'Ремонт',
    },
    subtitle: {
      de: 'Malerarbeiten',
      en: 'Painting & Repairs',
      ru: 'Малярные работы',
    },
    description: {
      de: 'Malerarbeiten, Tapezieren, Laminat verlegen. Wir bereiten Ihre Wohnung für die Übergabe oder den Einzug vor.',
      en: 'Painting, wallpapering, laminate flooring. We prepare your apartment for handover or move-in.',
      ru: 'Покраска, поклейка обоев, укладка ламината. Мы подготовим вашу квартиру к сдаче или заселению.',
    },
    longDescription: {
      de: `Sie suchen einen Maler in Duisburg oder Renovierungsservice in Oberhausen? Ob Sie Ihre alte Wohnung für die Übergabe renovieren müssen oder Ihre neue Wohnung vor dem Einzug auffrischen möchten – unser Renovierungsservice in Duisburg, Mülheim an der Ruhr, Essen und NRW bietet Ihnen professionelle Malerarbeiten und mehr.

Wir streichen Wände und Decken in der Farbe Ihrer Wahl, tapezieren oder entfernen alte Tapeten, spachteln Löcher und Unebenheiten und verlegen Laminat oder Vinyl. Malerarbeiten Düsseldorf, Krefeld, Moers – wir sind Ihr zuverlässiger Partner. Auch die Endreinigung nach der Renovierung übernehmen wir gerne.

Unser Team arbeitet sauber, schnell und zuverlässig in Dinslaken, Bottrop, Ratingen und ganz NRW. Wir verwenden hochwertige Farben und Materialien und hinterlassen Ihre Räume besenrein. Kombinieren Sie unsere Wohnungsrenovierung mit unserem Umzugsservice für einen Komplettservice aus einer Hand. Jetzt Renovierung Duisburg anfragen!`,
      en: `Looking for a painter in Duisburg or renovation service in Oberhausen? Whether you need to renovate your old apartment for handover or want to freshen up your new apartment before moving in – our renovation service in Duisburg, Mülheim an der Ruhr, Essen, and NRW offers professional painting and more.

We paint walls and ceilings in your choice of color, wallpaper or remove old wallpaper, fill holes and uneven surfaces, and install laminate or vinyl flooring. Painting services in Düsseldorf, Krefeld, Moers – we are your reliable partner. We're also happy to handle the final cleaning after renovation.

Our team works cleanly, quickly, and reliably in Dinslaken, Bottrop, Ratingen, and throughout NRW. We use high-quality paints and materials and leave your rooms broom-clean. Combine our apartment renovation with our moving service for a complete one-stop solution. Request your renovation in Duisburg today!`,
      ru: `Ищете маляра в Дуйсбурге или услуги ремонта в Оберхаузене? Нужно ли вам отремонтировать старую квартиру перед сдачей или освежить новую квартиру перед заселением – наш сервис ремонта в Дуйсбурге, Мюльхайм-ан-дер-Рур, Эссене и NRW предлагает профессиональные малярные работы и многое другое.

Мы красим стены и потолки в выбранный вами цвет, клеим или удаляем старые обои, заделываем дыры и неровности, укладываем ламинат или винил. Малярные работы в Дюссельдорфе, Крефельде, Моерсе – мы ваш надёжный партнёр. Мы также с удовольствием проведём финальную уборку после ремонта.

Наша команда работает чисто, быстро и надёжно в Динслакене, Ботропе, Ратингене и по всему NRW. Мы используем качественные краски и материалы и оставляем ваши помещения в чистом виде. Объедините наш ремонт квартиры с услугой переезда для комплексного решения. Запросите ремонт в Дуйсбурге сегодня!`,
    },
    features: {
      de: ['Wände streichen', 'Tapezieren', 'Bodenverlegung', 'Endreinigung'],
      en: ['Wall painting', 'Wallpapering', 'Floor installation', 'Final cleaning'],
      ru: ['Покраска стен', 'Поклейка обоев', 'Укладка пола', 'Финальная уборка'],
    },
    benefits: {
      de: [
        'Professionelle Malerarbeiten',
        'Hochwertige Farben und Materialien',
        'Schnelle Ausführung',
        'Sauberes Arbeiten mit Abdeckung',
        'Kombinierbar mit Umzugsservice',
        'Besenreine Übergabe',
      ],
      en: [
        'Professional painting work',
        'High-quality paints and materials',
        'Quick execution',
        'Clean work with covering',
        'Combinable with moving service',
        'Broom-clean handover',
      ],
      ru: [
        'Профессиональные малярные работы',
        'Качественные краски и материалы',
        'Быстрое выполнение',
        'Чистая работа с укрытием',
        'Совместимо с услугой переезда',
        'Сдача в чистом виде',
      ],
    },
    metaTitle: {
      de: 'Renovierung Duisburg - Malerarbeiten & Bodenverlegung',
      en: 'Renovation Services Duisburg - Painting & Flooring',
      ru: 'Ремонт Дуйсбург - Малярные работы и укладка полов',
    },
    metaDescription: {
      de: 'Professionelle Renovierung in Duisburg. Malerarbeiten, Tapezieren, Laminat verlegen & Endreinigung. Für Übergabe oder Einzug ✓ Jetzt anfragen!',
      en: 'Professional renovation in Duisburg. Painting, wallpapering, laminate flooring & final cleaning. For handover or move-in ✓ Get a quote now!',
      ru: 'Профессиональный ремонт в Дуйсбурге. Покраска, обои, ламинат и финальная уборка. Для сдачи или заселения ✓ Запросите предложение!',
    },
    metaKeywords: {
      de: 'Renovierung, Malerarbeiten, Tapezieren, Laminat verlegen, Wohnungsrenovierung Duisburg, Streichen',
      en: 'renovation, painting, wallpapering, laminate flooring, apartment renovation Duisburg, painting service',
      ru: 'ремонт, малярные работы, обои, ламинат, ремонт квартиры Дуйсбург, покраска',
    },
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80',
  },
];

export const getServiceBySlug = (slug: string, lang: 'de' | 'en' | 'ru'): ServiceData | undefined => {
  return services.find((service) => service.slug[lang] === slug);
};

export const getServiceById = (id: string): ServiceData | undefined => {
  return services.find((service) => service.id === id);
};
