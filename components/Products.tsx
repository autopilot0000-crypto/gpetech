import React, { useRef } from 'react';
import { ProductIconV3, ProductIconV4, ProductIconTitan } from './icons';
import { useLanguage } from '../contexts/LanguageContext';
import useFadeInAnimation from '../hooks/useFadeInAnimation';

const translations = {
  bm: {
    title: "Robot Series",
    products: [
      { name: 'GPE V3', description: 'Versi asas - entry auto, TP/SL standard' },
      { name: 'GPE V4', description: 'Versi paling stabil - BE, trailing,Hold ON, swing,pending limit, mobile control, penapis berita' },
      { name: 'Titan Edition', description: 'Untuk komuniti elite - setup + bimbingan penuh' }
    ],
    button: "LIHAT SEMUA ROBOT"
  },
  en: {
    title: "Robot Series",
    products: [
      { name: 'GPE V3', description: 'Basic version - auto entry, standard TP/SL' },
      { name: 'GPE V4', description: 'Most stable version - BE, trailing,Hold ON, swing,pending limit, mobile control, news filter' },
      { name: 'Titan Edition', description: 'For the elite community - full setup + guidance' }
    ],
    button: "VIEW ALL ROBOTS"
  },
  th: {
    title: "ซีรี่ส์หุ่นยนต์",
    products: [
      { name: 'GPE V3', description: 'เวอร์ชันพื้นฐาน - เข้าอัตโนมัติ, TP/SL มาตรฐาน' },
      { name: 'GPE V4', description: 'เวอร์ชันที่เสถียรที่สุด - BE, trailing, ตัวกรองข่าว' },
      { name: 'Titan Edition', description: 'สำหรับชุมชนชั้นสูง - ตั้งค่าเต็มรูปแบบ + คำแนะนำ' }
    ],
    button: "ดูหุ่นยนต์ทั้งหมด"
  },
  id: {
    title: "Seri Robot",
    products: [
      { name: 'GPE V3', description: 'Versi dasar - entri otomatis, TP/SL standar' },
      { name: 'GPE V4', description: 'Versi paling stabil - BE, trailing,Hold ON, swing,pending limit, mobile control, filter berita' },
      { name: 'Titan Edition', description: 'Untuk komunitas elit - pengaturan penuh + bimbingan' }
    ],
    button: "LIHAT SEMUA ROBOT"
  },
  ru: {
    title: "Серия роботов",
    products: [
      { name: 'GPE V3', description: 'Базовая версия - автоматический вход, стандартные TP/SL' },
      { name: 'GPE V4', description: 'Самая стабильная версия - BE, трейлинг, новостной фильтр' },
      { name: 'Titan Edition', description: 'Для элитного сообщества - полная настройка + руководство' }
    ],
    button: "ПОСМОТРЕТЬ ВСЕХ РОБОТОВ"
  },
  zh: {
    title: "机器人系列",
    products: [
      { name: 'GPE V3', description: '基础版 - 自动入场，标准止盈/止损' },
      { name: 'GPE V4', description: '最稳定版 - 保本，追踪止损，新闻过滤' },
      { name: '泰坦版', description: '为精英社区提供 - 完整设置+指导' }
    ],
    button: "查看所有机器人"
  },
  ja: {
    title: "ロボットシリーズ",
    products: [
      { name: 'GPE V3', description: '基本バージョン - 自動エントリー、標準TP/SL' },
      { name: 'GPE V4', description: '最も安定したバージョン - BE、トレーリング、ニュースフィルター' },
      { name: 'タイタン版', description: 'エリートコミュニティ向け - フルセットアップ+ガイダンス' }
    ],
    button: "すべてのロボットを見る"
  }
};


const Products: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useFadeInAnimation(sectionRef);
  const products = [
    {
      icon: <ProductIconV3 />,
      name: t.products[0].name,
      description: t.products[0].description,
    },
    {
      icon: <ProductIconV4 />,
      name: t.products[1].name,
      description: t.products[1].description,
    },
    {
      icon: <ProductIconTitan />,
      name: t.products[2].name,
      description: t.products[2].description,
    },
  ];

  return (
    <section ref={sectionRef} id="products" className={`py-20 bg-pirus-dark/70 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t.title}</h2>
          <div className="w-24 h-1 mx-auto my-4 bg-gradient-to-r from-pirus-blue to-pirus-pink rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.name} className="bg-gray-500/10 p-8 rounded-lg border border-gray-200/10 text-center flex flex-col items-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(74,108,253,0.3)]">
              <div className="text-pirus-blue mb-4">{product.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-pirus-light">{product.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <div className="inline-block p-0.5 rounded-md bg-gradient-to-r from-pirus-blue to-pirus-pink">
                <button className="bg-pirus-dark text-white font-bold py-3 px-8 rounded-md hover:bg-transparent hover:text-white transition-colors duration-300">
                    {t.button}
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Products;