import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  bm: {
    title: "Cara Sertai / Langkah Mula",
    steps: [
      { title: 'Daftar akaun (Broker rasmi)' },
      { title: 'Deposit minimum USD 100' },
      { title: 'Hubungi admin untuk aktifkan robot + masuk group VVIP Titan' }
    ],
    button: "SAYA NAK MULA SEKARANG"
  },
  en: {
    title: "How to Join / Getting Started",
    steps: [
      { title: 'Register an account (Official Broker)' },
      { title: 'Deposit a minimum of USD 100' },
      { title: 'Contact admin to activate the robot + join the Titan VVIP group' }
    ],
    button: "I WANT TO START NOW"
  },
  th: {
    title: "วิธีเข้าร่วม / การเริ่มต้น",
    steps: [
      { title: 'ลงทะเบียนบัญชี (โบรกเกอร์อย่างเป็นทางการ)' },
      { title: 'ฝากขั้นต่ำ 100 ดอลลาร์สหรัฐ' },
      { title: 'ติดต่อผู้ดูแลระบบเพื่อเปิดใช้งานหุ่นยนต์ + เข้าร่วมกลุ่ม Titan VVIP' }
    ],
    button: "ฉันต้องการเริ่มตอนนี้"
  },
  id: {
    title: "Cara Bergabung / Memulai",
    steps: [
      { title: 'Daftar akun (Broker Resmi)' },
      { title: 'Deposit minimal USD 100' },
      { title: 'Hubungi admin untuk mengaktifkan robot + bergabung dengan grup Titan VVIP' }
    ],
    button: "SAYA INGIN MULAI SEKARANG"
  },
  ru: {
    title: "Как присоединиться / Начало работы",
    steps: [
      { title: 'Зарегистрируйте счет в (официальный брокер)' },
      { title: 'Внесите минимальный депозит в размере 100 долларов США' },
      { title: 'Свяжитесь с администратором, чтобы активировать робота и присоединиться к группе Titan VVIP' }
    ],
    button: "Я ХОЧУ НАЧАТЬ СЕЙЧАС"
  },
  zh: {
    title: "如何加入 / 开始",
    steps: [
      { title: '注册账户（官方经纪商）' },
      { title: '最低入金 100 美元' },
      { title: '联系管理员激活机器人 + 加入 Titan VVIP 群组' }
    ],
    button: "我现在就想开始"
  },
  ja: {
    title: "参加方法 / 開始方法",
    steps: [
      { title: 'アカウントを登録する（公式ブローカー）' },
      { title: '最低100米ドルを入金する' },
      { title: '管理者に連絡してロボットを有効化し、Titan VVIPグループに参加する' }
    ],
    button: "今すぐ始めたい"
  }
};

const HowToStart: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const steps = [
    { number: '01', title: t.steps[0].title },
    { number: '02', title: t.steps[1].title },
    { number: '03', title: t.steps[2].title },
  ];

  return (
    <section id="start" className="py-20 bg-pirus-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t.title}</h2>
          <div className="w-24 h-1 mx-auto my-4 bg-gradient-to-r from-pirus-blue to-pirus-pink rounded-full"></div>
        </div>
        <div className="max-w-5xl mx-auto">
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="absolute hidden md:block top-8 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2"></div>
                {steps.map((step, index) => (
                    <div key={index} className="relative z-10 flex flex-col items-center text-center">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-pirus-dark border-2 border-pirus-blue text-pirus-blue text-2xl font-bold mb-4">
                           {step.number}
                        </div>
                        <p className="text-lg text-white font-medium h-20">{step.title}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="text-center mt-12">
          <a href="https://ultgo.com/Vn6jmi" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pirus-blue to-pirus-pink text-white font-bold py-3 px-10 rounded-md hover:opacity-90 transition-transform duration-300 transform hover:scale-105">
            {t.button}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToStart;