import React from 'react';
import { CheckIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  bm: {
    title: "Kenapa Pilih Robot GPE",
    features: [
      'Auto trade tanpa emosi',
      'Kawalan risiko automatik',
      'AI Smart Layer',
      'Sesuai untuk gold, btc & forex',
      'Support komuniti aktif & latihan A-Z',
      'Disokong oleh team berpengalaman ',
    ]
  },
  en: {
    title: "Why Choose GPE Robot",
    features: [
      'Emotionless auto trading',
      'Automatic risk control',
      'AI Smart Layer',
      'Suitable for gold, BTC & forex',
      'Active community support & A-Z training',
      'Backed by an experienced team ',
    ]
  },
  th: {
    title: "ทำไมต้องเลือกหุ่นยนต์ GPE",
    features: [
      'ซื้อขายอัตโนมัติไร้อารมณ์',
      'ควบคุมความเสี่ยงอัตโนมัติ',
      'AI Smart Layer',
      'เหมาะสำหรับทองคำ, BTC และฟอเร็กซ์',
      'การสนับสนุนชุมชนที่ใช้งานและการฝึกอบรม A-Z',
      'สนับสนุนโดยทีมงานที่มีประสบการณ์ ',
    ]
  },
  id: {
    title: "Mengapa Memilih Robot GPE",
    features: [
      'Perdagangan otomatis tanpa emosi',
      'Kontrol risiko otomatis',
      'AI Smart Layer',
      'Cocok untuk emas, BTC & forex',
      'Dukungan komunitas aktif & pelatihan A-Z',
      'Didukung oleh tim berpengalaman ',
    ]
  },
  ru: {
    title: "Почему стоит выбрать робота GPE",
    features: [
      'Автоматическая торговля без эмоций',
      'Автоматический контроль рисков',
      'Умный фильтр ИИ (избегает новостей и боковых рынков)',
      'Подходит для золота, BTC и форекс',
      'Активная поддержка сообщества и обучение от А до Я',
      'Поддерживается опытной командой ',
    ]
  },
  zh: {
    title: "为什么选择 GPE 机器人",
    features: [
      '无情绪自动交易',
      '自动风险控制',
      '人工智能智能过滤器（避免新闻和横盘市场）',
      '适用于黄金、比特币和外汇',
      '活跃的社区支持和从 A到Z 的培训',
      '由经验丰富的团队',
    ]
  },
  ja: {
    title: "GPEロボットを選ぶ理由",
    features: [
      '感情のない自動取引',
      '自動リスク管理',
      'AIスマートフィルター（ニュースや横ばい相場を回避）',
      '金、BTC、外国為替に適しています',
      'アクティブなコミュニティサポートとA-Zトレーニング',
      '経験豊富なチーム によるサポート',
    ]
  }
};

const Features: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="features" className="py-20 bg-pirus-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{t.title}</h2>
            <div className="w-24 h-1 my-4 bg-gradient-to-r from-pirus-blue to-pirus-pink rounded-full mx-auto md:mx-0"></div>
            <ul className="space-y-4 mt-8">
              {t.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 bg-pirus-blue/20 text-pirus-blue rounded-full p-2">
                    <CheckIcon />
                  </div>
                  <span className="text-lg text-pirus-light">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
             <img src="/images/features-diagram.png" alt="GPE Trade Robot Diagram" className="w-full h-auto rounded-lg shadow-lg"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;