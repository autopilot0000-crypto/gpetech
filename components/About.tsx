import React from 'react';
import { AIEngineIcon, SmartStrategyIcon, RiskControlIcon, RealPerformanceIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  bm: {
    title: "Apa itu GPE Trade Robot Technology",
    description: "GPE Robot adalah salah satu tools paling termaju dalam dunia trading yang direka untuk membantu anda membuat keputusan lebih tepat dan menurunkan risiko. Dengan teknologi canggih ini, anda dapat memantau dan bertindak di pasaran seakan-akan berada di dalam market 200%"
  },
  en: {
    title: "About GPE Trade Robot Technology",
    description: "GPE Robot is one of the most advanced trading tools designed to help you make smarter decisions and reduce risk. With this cutting-edge technology, it feels like you are in the market 200%, maximizing profit opportunities while minimizing emotional stress."
  },
  th: {
    title: "เกี่ยวกับเทคโนโลยีหุ่นยนต์เทรด GPE",
    description: "เป็นหนึ่งในเครื่องมือการเทรดที่ล้ำสมัยที่สุด ออกแบบมาเพื่อช่วยให้คุณตัดสินใจได้แม่นยำขึ้นและลดความเสี่ยง ด้วยเทคโนโลยีขั้นสูงนี้ คุณจะรู้สึกเหมือนอยู่ในตลาด 200% พร้อมเพิ่มโอกาสกำไรและลดความเครียดทางอารมณ์."
  },
  id: {
    title: "Tentang Teknologi Robot Perdagangan GPE",
    description: "GPE Robot adalah salah satu alat trading paling canggih yang dirancang untuk membantu Anda mengambil keputusan lebih tepat dan mengurangi risiko. Dengan teknologi mutakhir ini, rasanya seolah-olah Anda berada di pasar 200%, memaksimalkan peluang profit sekaligus meminimalkan tekanan emosional."
  },
  ru: {
    title: "О технологии торговых роботов GPE",
    description: "GPE Robot — один из самых современных инструментов для торговли, созданный, чтобы помочь вам принимать более точные решения и снижать риски. С этой передовой технологией вы ощущаете себя в рынке на 200%, максимально увеличивая прибыль и минимизируя эмоциональное напряжение."
  },
  zh: {
    title: "关于 GPE 交易机器人技术",
    description: "GPE Robot 是最先进的交易工具之一，旨在帮助您做出更明智的决策并降低风险。使用这项尖端技术，您仿佛置身市场 200%，最大化盈利机会，同时减少情绪压力。"
  },
  ja: {
    title: "GPEトレードロボット技術について",
    description: "私たちは単なるロボット開発者ではありません。エコシステムを構築しています。GPEテクノロジーは、プロの戦略、スマートなリスク管理、完全に自動化されたAIを組み合わせています。その結果は？感情なしで24時間あなたのために取引するロボットです。"
  }
};

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    { icon: <AIEngineIcon />, name: 'AI Engine' },
    { icon: <SmartStrategyIcon />, name: 'Smart Strategy' },
    { icon: <RiskControlIcon />, name: 'Risk Control' },
    { icon: <RealPerformanceIcon />, name: 'Real Performance' },
  ];

  return (
    <section id="about" className="py-20 bg-pirus-dark">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t.title}</h2>
          <div className="w-24 h-1 mx-auto my-4 bg-gradient-to-r from-pirus-blue to-pirus-pink rounded-full"></div>
          <p className="text-pirus-light">
            {t.description}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-500/10 p-6 rounded-lg border border-gray-200/10 flex items-center space-x-4 transition-all duration-300 hover:border-pirus-blue hover:shadow-lg hover:shadow-pirus-blue/10">
              <div className="text-pirus-blue">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white">{feature.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;