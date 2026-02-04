import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Check } from 'lucide-react';
interface City {
  name: string;
  isMain?: boolean;
}
const cities: City[] = [{
  name: "Дуйсбург",
  isMain: true
}, {
  name: "Дюссельдорф"
}, {
  name: "Кёльн"
}, {
  name: "Эссен"
}, {
  name: "Дортмунд"
}, {
  name: "Бохум"
}, {
  name: "Вупперталь"
}, {
  name: "Гельзенкирхен"
}, {
  name: "Мёнхенгладбах"
}, {
  name: "Крефельд"
}, {
  name: "Оберхаузен"
}, {
  name: "Мюльхайм"
}, {
  name: "Хаген"
}, {
  name: "Хамм"
}, {
  name: "Мёрс"
}, {
  name: "Нойс"
}];
export default function ServiceAreasSectionRu() {
  return <section id="areas" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">Зона обслуживания</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 leading-tight">
              Мы работаем по всей
              <span className="text-orange-500"> NRW</span>
            </h2>

            <p className="text-slate-600 mt-6 text-lg leading-relaxed">
              С главным офисом в Дуйсбурге мы обслуживаем всю федеральную землю Северный Рейн-Вестфалия.
              Переезжаете внутри города или через всю NRW — мы к вашим услугам!
            </p>

            {/* Cities Grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {cities.map((city, index) => <motion.div key={city.name} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.1 + index * 0.03
            }} className={`flex items-center gap-2 px-4 py-2 rounded-xl ${city.isMain ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-orange-100 transition-colors'}`}>
                  {city.isMain ? <MapPin className="w-4 h-4 flex-shrink-0" /> : <Check className="w-4 h-4 flex-shrink-0 text-orange-500" />}
                  <span className="text-sm font-medium truncate">{city.name}</span>
                </motion.div>)}
            </div>

            {/* Extra Info */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.6
          }} className="mt-8 p-6 bg-slate-50 rounded-2xl">
              <p className="text-slate-600">
                <span className="font-semibold text-slate-900">Не нашли свой город?</span> Не проблема!
                Мы также обслуживаем все другие города и населённые пункты NRW.
                <a href="#contact" className="text-orange-500 font-semibold hover:text-orange-600 ml-1">
                  Просто свяжитесь с нами →
                </a>
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Map */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative">
            {/* Stylized NRW representation */}
            <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 aspect-square">
              {/* Background circles representing coverage */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.1, 0.3]
              }} transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }} className="absolute w-[80%] h-[80%] bg-orange-500/20 rounded-full" />
                <motion.div animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.15, 0.4]
              }} transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }} className="absolute w-[60%] h-[60%] bg-orange-500/30 rounded-full" />
                <motion.div animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.2, 0.5]
              }} transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }} className="absolute w-[40%] h-[40%] bg-orange-500/40 rounded-full" />
              </div>

              {/* Center pin - Duisburg */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div animate={{
                y: [0, -10, 0]
              }} transition={{
                duration: 2,
                repeat: Infinity
              }} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-xl">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="mt-4 bg-slate-900 text-white px-4 py-2 rounded-xl shadow-lg">
                    <p className="font-bold">Дуйсбург</p>
                  </div>
                </motion.div>
              </div>

              {/* Scattered city dots */}
              {[{
              x: '20%',
              y: '30%',
              city: 'Кёльн'
            }, {
              x: '70%',
              y: '25%',
              city: 'Дортмунд'
            }, {
              x: '30%',
              y: '60%',
              city: 'Дюссельдорф'
            }, {
              x: '75%',
              y: '55%',
              city: 'Бохум'
            }, {
              x: '15%',
              y: '75%',
              city: 'Мёнхенгладбах'
            }, {
              x: '60%',
              y: '75%',
              city: 'Эссен'
            }].map((dot, index) => <motion.div key={dot.city} initial={{
              scale: 0
            }} whileInView={{
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5 + index * 0.1
            }} className="absolute group" style={{
              left: dot.x,
              top: dot.y
            }}>
                  <div className="w-4 h-4 bg-orange-400 rounded-full shadow-md group-hover:scale-150 transition-transform cursor-pointer" />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {dot.city}
                  </div>
                </motion.div>)}

              {/* NRW Label */}
              <div className="absolute bottom-4 right-4">
                
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>;
}