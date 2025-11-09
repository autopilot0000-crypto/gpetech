import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  bm: {
    title: "Komuniti & Testimoni",
    quote: "\"Dulu asyik MC, sekarang robot GPE bantu saya stabil profit tiap minggu.\"",
    cite: "– Fadli, Trader GPE Titan",
    community: "Lebih 2,000 trader aktif menggunakan GPE Robot di seluruh Malaysia."
  },
  en: {
    title: "Community & Testimonials",
    quote: "\"Used to always get margin calls, now the GPE robot helps me get stable profits every week.\"",
    cite: "– Fadli, GPE Titan Trader",
    community: "Over 2,000 active traders are using the GPE Robot throughout Malaysia."
  },
  th: {
    title: "ชุมชนและคำรับรอง",
    quote: "\"เคยโดน Margin Call ตลอด ตอนนี้หุ่นยนต์ GPE ช่วยให้ฉันทำกำไรได้อย่างมั่นคงทุกสัปดาห์\"",
    cite: "– ฟาดลี, เทรดเดอร์ GPE Titan",
    community: "เทรดเดอร์ที่ใช้งานมากกว่า 2,000 คนกำลังใช้หุ่นยนต์ GPE ทั่วประเทศมาเลเซีย"
  },
  id: {
    title: "Komunitas & Testimonial",
    quote: "\"Dulu sering kena margin call, sekarang robot GPE membantu saya mendapatkan keuntungan stabil setiap minggu.\"",
    cite: "– Fadli, Trader GPE Titan",
    community: "Lebih dari 2.000 trader aktif menggunakan Robot GPE di seluruh Malaysia."
  },
  ru: {
    title: "Сообщество и отзывы",
    quote: "\"Раньше постоянно были маржин-коллы, теперь робот GPE помогает мне получать стабильную прибыль каждую неделю.\"",
    cite: "– Фадли, трейдер GPE Titan",
    community: "Более 2000 активных трейдеров используют робота GPE по всей Малайзии."
  },
  zh: {
    title: "社区与推荐",
    quote: "“以前总是被追加保证金，现在 GPE 机器人帮助我每周都能稳定获利。”",
    cite: "– 法德利，GPE 泰坦交易员",
    community: "马来西亚各地有超过 2,000 名活跃交易员正在使用 GPE 机器人。"
  },
  ja: {
    title: "コミュニティとお客様の声",
    quote: "「以前はいつもマージンコールを受けていましたが、今ではGPEロボットが毎週安定した利益を上げるのを助けてくれます。」",
    cite: "– ファドリ、GPEタイタントレーダー",
    community: "マレーシア全土で2,000人以上のアクティブなトレーダーがGPEロボットを使用しています。"
  }
};

const Testimonial: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="testimonials" className="py-20 bg-pirus-dark/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t.title}</h2>
          <div className="w-24 h-1 mx-auto my-4 bg-gradient-to-r from-pirus-blue to-pirus-pink rounded-full"></div>
        </div>
        <div className="max-w-3xl mx-auto bg-gray-500/10 p-8 rounded-lg border border-l-4 border-gray-200/10 border-l-pirus-blue">
          <div className="text-center">
            <blockquote className="text-xl italic text-white">
              {t.quote}
              <cite className="block not-italic mt-4 text-pirus-light">{t.cite}</cite>
            </blockquote>
            <p className="mt-6 text-pirus-light">
              {t.community}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;