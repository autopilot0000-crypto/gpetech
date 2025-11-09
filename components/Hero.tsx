import React, { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import useFadeInAnimation from '../hooks/useFadeInAnimation';

const translations = {
  bm: {
    title: "Revolusi Perdagangan Automatik Dikuasakan oleh Teknologi GPE",
    subtitle: "Robot trading generasi baru dengan AI + strategi profesional. Direka untuk bantu trader capai konsistensi tanpa emosi.",
    join: "JOIN CHANNEL",
    register: "DAFTAR SEKARANG"
  },
  en: {
    title: "Automated Trading Revolution Powered by GPE Technology",
    subtitle: "New generation trading robot with AI + professional strategies. Designed to help traders achieve consistency without emotion.",
    join: "JOIN CHANNEL",
    register: "REGISTER NOW"
  },
  th: {
    title: "การปฏิวัติการซื้อขายอัตโนมัติ ขับเคลื่อนโดยเทคโนโลยี GPE",
    subtitle: "หุ่นยนต์ซื้อขายรุ่นใหม่พร้อม AI + กลยุทธ์ระดับมืออาชีพ ออกแบบมาเพื่อช่วยให้ผู้ค้าบรรลุความสม่ำเสมอโดยปราศจากอารมณ์",
    join: "เข้าร่วมกลุ่ม ",
    register: "ลงทะเบียนตอนนี้"
  },
  id: {
    title: "Revolusi Perdagangan Otomatis Didukung oleh Teknologi GPE",
    subtitle: "Robot trading generasi baru dengan AI + strategi profesional. Dirancang untuk membantu trader mencapai konsistensi tanpa emosi.",
    join: "GABUNG CHANNEL",
    register: "DAFTAR SEKARANG"
  },
  ru: {
    title: "Революция в автоматической торговле на базе технологии GPE",
    subtitle: "Торговый робот нового поколения с ИИ + профессиональными стратегиями. Разработан, чтобы помочь трейдерам достичь стабильности без эмоций.",
    join: "ПРИСОЕДИНИТЬСЯ К ГРУППЕ ",
    register: "ЗАРЕГИСТРИРОВАТЬСЯ СЕЙЧАС"
  },
  zh: {
    title: "自动交易革命 由 GPE 技术驱动",
    subtitle: "新一代交易机器人，结合人工智能与专业策略。旨在帮助交易者实现无情绪的稳定交易。",
    join: "加入泰坦群组",
    register: "立即注册"
  },
  ja: {
    title: "自動取引革命 GPEテクノロジー搭載",
    subtitle: "AIとプロの戦略を備えた新世代の取引ロボット。トレーダーが感情なしで一貫性を達成するのを助けるように設計されています。",
    join: "タイタングループに参加",
    register: "今すぐ登録"
  }
};

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useFadeInAnimation(sectionRef);

  return (
    <section ref={sectionRef} className={`relative bg-pirus-dark pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-pirus-blue/30 to-pirus-pink/30 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-pirus-blue/20 to-pirus-pink/20 blur-3xl opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tighter">
                    <span className="bg-gradient-to-r from-pirus-blue to-pirus-pink bg-clip-text text-transparent">{t.title}</span>
                </h1>
                <p className="mt-6 max-w-xl mx-auto text-lg text-pirus-light">
                    {t.subtitle}
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="https://t.me/GPE_TECH" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-gradient-to-r from-pirus-blue to-pirus-pink text-white font-bold py-3 px-8 rounded-md hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                        {t.join}
                    </a>
                    <div className="w-full sm:w-auto p-0.5 rounded-md bg-gradient-to-r from-pirus-blue to-pirus-pink">
                        <a href="https://ultgo.com/Vn6jmi" target="_blank" rel="noopener noreferrer" className="block w-full bg-pirus-dark text-white font-bold py-3 px-8 rounded-md hover:bg-transparent hover:text-white transition-colors duration-300">
                            {t.register}
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;