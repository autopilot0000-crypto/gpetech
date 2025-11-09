import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import useFadeInAnimation from '../hooks/useFadeInAnimation';
import { QuoteIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';

const translations = {
  bm: {
    title: "Komuniti & Testimoni",
    community: "Lebih 2,000 trader aktif menggunakan GPE Robot di seluruh Malaysia.",
    testimonials: [
      { quote: "Dulu asyik MC, sekarang robot GPE bantu saya stabil profit tiap minggu.", cite: "– Fadli, Trader GPE Titan" },
      { quote: "Sistem 'Zero Risk' sangat membantu. Saya boleh trade dengan lebih tenang tanpa risau rugi modal.", cite: "– Aisyah, Pengguna GPE V4" },
      { quote: "Komuniti support sangat aktif. Banyak belajar dari trader lain. Terbaik GPE!", cite: "– Kumar, Ahli Komuniti" },
      { quote: "Tak perlu pening kepala tengok chart. Robot buat kerja, saya cuma pantau dari telefon.", cite: "– Lee, Trader Separuh Masa" },
    ]
  },
  en: {
    title: "Community & Testimonials",
    community: "Over 2,000 active traders are using the GPE Robot throughout Malaysia.",
    testimonials: [
      { quote: "Used to always get margin calls, now the GPE robot helps me get stable profits every week.", cite: "– Fadli, GPE Titan Trader" },
      { quote: "The 'Zero Risk' feature is a game-changer. I can trade with peace of mind without worrying about losing my capital.", cite: "– Aisyah, GPE V4 User" },
      { quote: "The community support is incredibly active. Learned so much from other traders. GPE is the best!", cite: "– Kumar, Community Member" },
      { quote: "No more headaches from staring at charts. The robot does the work, I just monitor from my phone.", cite: "– Lee, Part-time Trader" },
    ]
  },
  th: {
    title: "ชุมชนและคำรับรอง",
    community: "เทรดเดอร์ที่ใช้งานมากกว่า 2,000 คนกำลังใช้หุ่นยนต์ GPE ทั่วประเทศมาเลเซีย",
    testimonials: [
        { quote: "เคยโดน Margin Call ตลอด ตอนนี้หุ่นยนต์ GPE ช่วยให้ฉันทำกำไรได้อย่างมั่นคงทุกสัปดาห์", cite: "– ฟาดลี, เทรดเดอร์ GPE Titan" },
        { quote: "ฟีเจอร์ 'Zero Risk' เปลี่ยนเกมเลยทีเดียว ฉันสามารถเทรดได้อย่างสบายใจโดยไม่ต้องกังวลว่าจะเสียเงินทุน", cite: "– ไอชา, ผู้ใช้ GPE V4" },
        { quote: "การสนับสนุนจากชุมชนดีมาก ได้เรียนรู้จากเทรดเดอร์คนอื่น ๆ เยอะเลย GPE สุดยอด!", cite: "– กุมาร, สมาชิกชุมชน" },
        { quote: "ไม่ต้องปวดหัวกับการจ้องกราฟอีกต่อไป หุ่นยนต์ทำงานให้ ฉันแค่คอยดูจากมือถือ", cite: "– ลี, เทรดเดอร์พาร์ทไทม์" },
    ]
  },
  id: {
    title: "Komunitas & Testimonial",
    community: "Lebih dari 2.000 trader aktif menggunakan Robot GPE di seluruh Malaysia.",
    testimonials: [
        { quote: "Dulu sering kena margin call, sekarang robot GPE membantu saya mendapatkan keuntungan stabil setiap minggu.", cite: "– Fadli, Trader GPE Titan" },
        { quote: "Fitur 'Zero Risk' benar-benar mengubah permainan. Saya bisa trading dengan tenang tanpa khawatir kehilangan modal.", cite: "– Aisyah, Pengguna GPE V4" },
        { quote: "Dukungan komunitasnya sangat aktif. Banyak belajar dari trader lain. GPE terbaik!", cite: "– Kumar, Anggota Komunitas" },
        { quote: "Tidak perlu pusing melihat grafik. Robot yang bekerja, saya hanya memantau dari ponsel.", cite: "– Lee, Trader Paruh Waktu" },
    ]
  },
  ru: {
    title: "Сообщество и отзывы",
    community: "Более 2000 активных трейдеров используют робота GPE по всей Малайзии.",
    testimonials: [
        { quote: "Раньше постоянно были маржин-коллы, теперь робот GPE помогает мне получать стабильную прибыль каждую неделю.", cite: "– Фадли, трейдер GPE Titan" },
        { quote: "Функция 'Нулевой риск' — это просто находка. Я могу торговать спокойно, не беспокоясь о потере капитала.", cite: "– Айша, пользователь GPE V4" },
        { quote: "Поддержка сообщества невероятно активна. Многому научился у других трейдеров. GPE — лучшие!", cite: "– Кумар, член сообщества" },
        { quote: "Больше не нужно ломать голову над графиками. Робот делает свою работу, я просто слежу с телефона.", cite: "– Ли, трейдер на полставки" },
    ]
  },
  zh: {
    title: "社区与推荐",
    community: "马来西亚各地有超过 2,000 名活跃交易员正在使用 GPE 机器人。",
    testimonials: [
        { quote: "“以前总是被追加保证金，现在 GPE 机器人帮助我每周都能稳定获利。”", cite: "– 法德利，GPE 泰坦交易员" },
        { quote: "“‘零风险’功能改变了游戏规则。我可以安心交易，不用担心亏损本金。”", cite: "– 艾莎，GPE V4 用户" },
        { quote: "“社区支持非常活跃。从其他交易员那里学到了很多。GPE是最棒的！”", cite: "– 库马尔，社区成员" },
        { quote: "“再也不用头疼地盯着图表了。机器人完成工作，我只用手机监控。”", cite: "– 李，兼职交易员" },
    ]
  },
  ja: {
    title: "コミュニティとお客様の声",
    community: "マレーシア全土で2,000人以上のアクティブなトレーダーがGPEロボットを使用しています。",
    testimonials: [
        { quote: "「以前はいつもマージンコールを受けていましたが、今ではGPEロボットが毎週安定した利益を上げるのを助けてくれます。」", cite: "– ファドリ、GPEタイタントレーダー" },
        { quote: "「『ゼロリスク』機能は画期的です。資本を失う心配なく、安心して取引できます。」", cite: "– アイシャ、GPE V4ユーザー" },
        { quote: "「コミュニティのサポートが非常に活発です。他のトレーダーから多くを学びました。GPEは最高です！」", cite: "– クマール、コミュニティメンバー" },
        { quote: "「もうチャートをじっと見つめて頭を悩ます必要はありません。ロボットが仕事をしてくれるので、私はスマホで監視するだけです。」", cite: "– リー、パートタイムトレーダー" },
    ]
  }
};

const Testimonial: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useFadeInAnimation(sectionRef);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === t.testimonials.length - 1 ? 0 : prevIndex + 1
        ),
      5000 // Change slide every 5 seconds
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, t.testimonials.length]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? t.testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === t.testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };


  return (
    <section ref={sectionRef} id="testimonials" className={`py-20 bg-pirus-dark/70 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t.title}</h2>
          <div className="w-24 h-1 mx-auto my-4 bg-gradient-to-r from-pirus-blue to-pirus-pink rounded-full"></div>
        </div>
        
        <div 
          className="relative max-w-3xl mx-auto"
          onMouseEnter={resetTimeout}
          onMouseLeave={() => {
            resetTimeout();
            timeoutRef.current = setTimeout(
              () =>
                setCurrentIndex((prevIndex) =>
                  prevIndex === t.testimonials.length - 1 ? 0 : prevIndex + 1
                ),
              5000
            );
          }}
        >
          <div className="overflow-hidden relative min-h-[250px] flex items-center">
              <div key={currentIndex} className="w-full bg-gray-500/10 p-8 rounded-lg border border-gray-200/10 flex flex-col animate-fade-in">
                <QuoteIcon className="animate-quote-pop" />
                <blockquote className="flex flex-col flex-grow">
                  <p className="text-lg italic text-white flex-grow">"{t.testimonials[currentIndex].quote}"</p>
                  <cite className="block not-italic mt-4 text-pirus-light text-right">{t.testimonials[currentIndex].cite}</cite>
                </blockquote>
              </div>
          </div>
          
          <button onClick={goToPrevious} className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 p-2 bg-gray-500/20 rounded-full hover:bg-pirus-blue/50 text-white transition-colors" aria-label="Previous testimonial">
            <ChevronLeftIcon />
          </button>
          <button onClick={goToNext} className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 p-2 bg-gray-500/20 rounded-full hover:bg-pirus-blue/50 text-white transition-colors" aria-label="Next testimonial">
            <ChevronRightIcon />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {t.testimonials.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-3 h-3 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-pirus-blue' : 'bg-gray-600 hover:bg-gray-400'}`}
              aria-label={`Go to testimonial ${slideIndex + 1}`}
            ></button>
          ))}
        </div>

        <div className="text-center mt-12">
            <p className="text-lg text-pirus-light">{t.community}</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;