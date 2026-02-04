import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  Loader2,
  ArrowLeft,
  Menu,
  X,
  Calculator,
  Home,
  Building2,
  Trash2,
  Truck,
  Wrench,
  PaintBucket,
  ChevronRight,
  Globe,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from 'sonner';
import SEO from '@/components/SEO';

interface PriceCard {
  label: string;
  price: string;
  note: string;
}

interface PriceSection {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  cards: PriceCard[];
  link: string;
}

const priceSections: PriceSection[] = [
  {
    icon: Home,
    title: 'Цены на частные переезды',
    subtitle: 'Полный сервис для вашего переезда квартиры',
    cards: [
      { label: '1-комнатная квартира', price: 'от 299€', note: 'до 35м², 2 грузчика' },
      { label: '2-комнатная квартира', price: 'от 449€', note: 'до 65м², 2-3 грузчика' },
      { label: '3-комнатная квартира', price: 'от 649€', note: 'до 90м², 3 грузчика' },
    ],
    link: '/ru/services/chastnye-pereezdy',
  },
  {
    icon: Truck,
    title: 'Цены на перевозку мебели',
    subtitle: 'Отдельные предметы, доставка из IKEA или частичный переезд',
    cards: [
      { label: 'Один предмет локально', price: 'от 119€', note: 'например диван, шкаф в пределах Дуйсбурга. Вкл. 2 человека, транспорт и погрузку/разгрузку' },
      { label: 'Доставка из IKEA', price: 'от 139€', note: 'Доставка из магазина. Сборка опционально +50€' },
      { label: 'Несколько предметов', price: 'от 249€', note: 'Частичный переезд или несколько предметов мебели. Фиксированная цена в зависимости от количества' },
    ],
    link: '/ru/services/perevozka-mebeli',
  },
  {
    icon: Trash2,
    title: 'Цены на уборку и вывоз',
    subtitle: 'Подвал, чердак, квартира - сдача в чистом виде',
    cards: [
      { label: 'Подвал/Чердак', price: 'от 199€', note: 'До прибл. 15м². Включая утилизацию' },
      { label: 'Гараж/Сарай', price: 'от 399€', note: 'Полная утилизация включена. Возможен зачёт стоимости' },
      { label: 'Квартира полностью', price: 'от 699€', note: '2-комнатная квартира, в чистом виде. Включая утилизацию и финальную уборку' },
    ],
    link: '/ru/services/uborka-vyvoz',
  },
  {
    icon: Building2,
    title: 'Цены на офисные переезды',
    subtitle: 'Переезд бизнеса с минимальным простоем',
    cards: [
      { label: 'Маленький офис', price: 'от 499€', note: 'до 5 рабочих мест' },
      { label: 'Средний офис', price: 'от 1.200€', note: '5-15 рабочих мест' },
      { label: 'Большой офис', price: 'от 2.500€', note: 'от 15 рабочих мест' },
    ],
    link: '/ru/services/ofisnye-pereezdy',
  },
  {
    icon: Wrench,
    title: 'Цены на Hausmeisterservice',
    subtitle: 'Регулярное обслуживание или по необходимости. Гибкое бронирование.',
    cards: [
      { label: 'Почасовая оплата', price: 'от 35€/час', note: 'Мелкий ремонт, техобслуживание, уход за объектом' },
      { label: 'Месячный абонемент', price: 'от 250€/месяц', note: 'Регулярное обслуживание объекта с фиксированным объёмом услуг' },
      { label: 'Экстренный вызов', price: 'от 89€', note: 'Быстрая помощь в экстренных случаях. Выезд + рабочее время' },
    ],
    link: '/ru/services/uslugi-masterov',
  },
  {
    icon: PaintBucket,
    title: 'Цены на Renovierung в Дуйсбурге',
    subtitle: 'Идеально для сдачи квартиры. Честные цены по объёму работ.',
    cards: [
      { label: 'Базовый пакет', price: 'от 12€/м² жилой площади', note: 'Покраска стен/потолков в белый, заделка мелких дыр, финальная уборка' },
      { label: 'Полный пакет', price: 'от 18€/м² жилой площади', note: 'Базовый пакет + покраска дверей/коробок, удаление обоев, тщательная уборка' },
      { label: 'Укладка полов', price: 'от 25€/м² площади пола', note: 'Укладка ламината или винила. Вкл. материал и подложку' },
    ],
    link: '/ru/services/remont',
  },
];

const disclaimer = 'Все цены являются начальными. Итоговая стоимость зависит от объёма работ. Бесплатный осмотр и расчёт.';

const languages = [
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', path: '/preise-duisburg' },
  { code: 'en', label: 'English', flag: '🇬🇧', path: '/en/prices' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺', path: '/ru/prices' },
];

export default function PricesPage() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappLink = `https://wa.me/4917665197997?text=${encodeURIComponent('Здравствуйте, меня интересуют ваши услуги в Дуйсбурге. Можете сделать мне предложение?')}`;

  const handleLanguageChange = (path: string) => {
    navigate(path);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mzdznqbo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.details,
          page: '/ru/prices',
          language: 'ru',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success('Спасибо! Мы свяжемся с вами в ближайшее время.');
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', phone: '', details: '' });
        }, 3000);
      } else {
        toast.error('Что-то пошло не так. Пожалуйста, попробуйте ещё раз.');
      }
    } catch {
      toast.error('Что-то пошло не так. Пожалуйста, попробуйте ещё раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TopSicher Umzüge',
    description: 'Профессиональная компания по переездам и услугам в Дуйсбурге',
    telephone: '+49 176 6519 7997',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Duisburg',
      addressRegion: 'NRW',
      addressCountry: 'DE',
    },
  };

  return (
    <>
      <SEO
        title="Цены Дуйсбург | Все цены на переезды и услуги"
        description="Прозрачные цены на переезды, перевозку мебели, уборку, услуги мастеров и ремонт в Дуйсбурге. Фиксированные цены от 119€. Бесплатный осмотр!"
        keywords="цены переезд, перевозка мебели цены, уборка цены, услуги мастера цены, ремонт цены Дуйсбург"
        lang="ru"
        canonicalPath="/ru/prices"
        type="website"
        structuredData={structuredData}
        alternates={{
          de: '/preise-duisburg',
          en: '/en/prices',
          ru: '/ru/prices',
        }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to="/ru" className="text-xl font-bold">
              <span className="text-slate-900">TopSicher</span>
              <span className="text-orange-500"> Umzüge</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link to="/ru" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Главная
              </Link>
              <a href="#prices" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Цены
              </a>
              <a href="#contact" className="font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Контакты
              </a>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2 px-3">
                    <Globe className="w-4 h-4" />
                    <span>🇷🇺</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.path)}
                      className="gap-2 cursor-pointer"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6" asChild>
                <a href="tel:+4917665197997">
                  <Phone className="w-4 h-4 mr-2" />
                  Позвонить
                </a>
              </Button>
            </div>

            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-2xl rounded-b-3xl">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              <Link to="/ru" className="text-lg font-medium text-slate-700 py-2">Главная</Link>
              <a href="#prices" className="text-lg font-medium text-slate-700 py-2" onClick={() => setIsMobileMenuOpen(false)}>Цены</a>
              <a href="#contact" className="text-lg font-medium text-slate-700 py-2" onClick={() => setIsMobileMenuOpen(false)}>Контакты</a>

              <div className="flex gap-2 py-2">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant={lang.code === 'ru' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleLanguageChange(lang.path)}
                    className="flex-1"
                  >
                    <span className="mr-1">{lang.flag}</span>
                    {lang.code.toUpperCase()}
                  </Button>
                ))}
              </div>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl w-full" asChild>
                <a href="tel:+4917665197997"><Phone className="w-4 h-4 mr-2" />Позвонить</a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Breadcrumb UI */}
      <div className="pt-24 bg-slate-100">
        <div className="container mx-auto px-6 md:px-12 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-600">
            <Link to="/ru" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
              <Home className="w-4 h-4" />
              <span>Главная</span>
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-900 font-medium">Цены</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/ru" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              На главную
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <span className="text-orange-400 font-semibold tracking-wide uppercase text-sm">Прозрачные цены</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Все цены на одной странице
            </h1>
            <p className="text-xl text-slate-300 mt-4 max-w-2xl">Переезды, транспорт, уборка и многое другое - честные фиксированные цены в Дуйсбурге</p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-xl" asChild>
                <a href="tel:+4917665197997"><Phone className="mr-2 w-5 h-5" />Позвонить</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg rounded-xl" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 w-5 h-5" />WhatsApp</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Sections */}
      <section id="prices" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          {priceSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="mb-16 last:mb-0"
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                    <section.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium mb-1">
                      <Calculator className="w-3 h-3" />
                      Прозрачные цены
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                    <p className="text-slate-500">{section.subtitle}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {section.cards.map((card, cardIndex) => (
                    <motion.div
                      key={card.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: cardIndex * 0.1 }}
                      className="bg-slate-50 rounded-2xl p-6 text-center"
                    >
                      <h3 className="font-semibold text-slate-900 mb-2">{card.label}</h3>
                      <p className="text-3xl font-bold text-orange-500 mb-2">{card.price}</p>
                      <p className="text-slate-500 text-sm">{card.note}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <p className="text-slate-500 text-sm italic">{disclaimer}</p>
                  <Link
                    to={section.link}
                    className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors"
                  >
                    Подробнее
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-orange-400 font-semibold tracking-wide uppercase text-sm">Готовы начать?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 leading-tight">Получите бесплатное предложение</h2>
              <p className="text-slate-400 mt-4">Мы составим вам предложение после бесплатного осмотра на месте.</p>

              <div className="mt-10 space-y-4">
                <a href="tel:+4917665197997" className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors group">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Телефон</p>
                    <p className="text-white font-medium">+49 176 6519 7997</p>
                  </div>
                </a>

                <a href="mailto:info@tsumzug.de" className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-colors group">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Email</p>
                    <p className="text-white font-medium">info@tsumzug.de</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Локация</p>
                    <p className="text-white font-medium">Duisburg, NRW</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-5 h-5" />WhatsApp чат
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Отправить запрос</h3>
                <p className="text-slate-500 mb-8">Мы свяжемся с вами в течение 24 часов.</p>

                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900">Сообщение отправлено!</h4>
                    <p className="text-slate-500 text-center mt-2">Мы свяжемся с вами в ближайшее время.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Ваше имя</label>
                      <Input placeholder="Иван Иванов" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="h-12 rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Телефон</label>
                      <Input type="tel" placeholder="+49 123 456 7890" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="h-12 rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Ваш запрос</label>
                      <Textarea placeholder="Опишите ваши потребности..." value={formData.details} onChange={(e) => setFormData({ ...formData, details: e.target.value })} required rows={4} className="rounded-xl resize-none" />
                    </div>
                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-lg rounded-xl">
                      {isSubmitting ? (<><Loader2 className="mr-2 w-5 h-5 animate-spin" />Отправка...</>) : (<><Send className="mr-2 w-5 h-5" />Отправить запрос</>)}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/ru" className="text-xl font-bold">
                <span className="text-white">TS</span>
                <span className="text-orange-500"> Umzug</span>
              </Link>
              <p className="text-slate-400 mt-4 text-sm">Ваша надёжная компания по переездам в Дуйсбурге. Честные цены, профессиональный сервис.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/ru/services/chastnye-pereezdy" className="text-slate-400 hover:text-orange-400 transition-colors">Частные переезды</Link></li>
                <li><Link to="/ru/services/ofisnye-pereezdy" className="text-slate-400 hover:text-orange-400 transition-colors">Офисные переезды</Link></li>
                <li><Link to="/ru/services/uborka-vyvoz" className="text-slate-400 hover:text-orange-400 transition-colors">Уборка и вывоз</Link></li>
                <li><Link to="/ru/services/perevozka-mebeli" className="text-slate-400 hover:text-orange-400 transition-colors">Перевозка мебели</Link></li>
                <li><Link to="/ru/services/uslugi-masterov" className="text-slate-400 hover:text-orange-400 transition-colors">Услуги мастеров</Link></li>
                <li><Link to="/ru/services/remont" className="text-slate-400 hover:text-orange-400 transition-colors">Ремонт</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Duisburg, NRW</li>
                <li><a href="tel:+4917665197997" className="hover:text-orange-400">+49 176 6519 7997</a></li>
                <li><a href="mailto:info@tsumzug.de" className="hover:text-orange-400">info@tsumzug.de</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Правовая информация</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/impressum" className="text-slate-400 hover:text-orange-400 transition-colors">Импрессум</Link></li>
                <li><Link to="/datenschutz" className="text-slate-400 hover:text-orange-400 transition-colors">Политика конфиденциальности</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} TopSicher Umzüge. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
