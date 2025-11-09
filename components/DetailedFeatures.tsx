import React, { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  RobotIcon,
  ZeroRiskIcon,
  ProfitLockIcon,
  SmartLayeringIcon,
  SpreadFilterIcon,
  AutoTrendIcon,
  NewsProtectionIcon,
  ManualPanelIcon,
  BonusGuideIcon,
  CheckIcon,
} from './icons';
import useFadeInAnimation from '../hooks/useFadeInAnimation';

const featureTranslations = {
    bm: [
        {
            title: "Robot GPE v4 Automatik",
            description: "Robot GPE v4 secara pintar menganalisis trend pasaran dan mengenal pasti arah optimum untuk dagangan, memastikan pembuatan keputusan strategik.",
            points: ["Penguasaan Arah Pasaran", "Kemasukan Posisi Tepat", "Operasi Autonomi Sepenuhnya"],
            icon: <RobotIcon />,
        },
        {
            title: "Zero Risk Trading",
            description: "Ciri 'Zero Risk Trading' Robot GPE v4 direka untuk melindungi keuntungan anda secara automatik. Apabila keuntungan dagangan mencapai tahap yang ditentukan, robot akan mengalihkan tahap stop loss (henti rugi) ke harga kemasukan, memastikan dagangan anda bebas risiko.",
            points: ["Perlindungan Keuntungan Automatik", "Menghapuskan Risiko Dagangan", "Menjamin Modal", "Melindungi Keuntungan dari Pembalikan Pasaran"],
            icon: <ZeroRiskIcon />,
        },
        {
            title: "Kunci Profit Automatik",
            description: "Ciri 'Kunci Profit Automatik' Robot GPE v4 memastikan keuntungan anda kekal selamat. Apabila pasaran terus bergerak mengikut arah kemasukan anda, robot secara pintar akan menyesuaikan tahap perlindungan anda, mengunci keuntungan yang terkumpul tanpa memerlukan sebarang campur tangan manual daripada anda.",
            points: ["Pelarasan Profit Automatik", "Pengurusan Profit Tanpa Campur Tangan", "Memaksimumkan Keuntungan Trend Baik", "Sistem Trailing Pintar"],
            icon: <ProfitLockIcon />,
        },
        {
            title: "Smart Layering System",
            description: "Sistem Pelapisan Pintar Robot GPE v4 direka untuk menambah posisi dagangan dengan selamat apabila pasaran masih berada dalam zon masuk yang optimum. Ini bukanlah sistem martingale, tetapi strategi pelapisan yang bijak untuk mengoptimumkan keuntungan.",
            points: ["Skala Posisi Selamat", "Pengesanan Zon Masuk Pintar", "Pelapisan Kawalan Risiko", "Memaksimumkan Potensi Keuntungan"],
            icon: <SmartLayeringIcon />,
        },
        {
            title: "Spread Filter",
            description: "Sistem Spread Filter Robot GPE v4 direka untuk mengelakkan kemasukan posisi dagangan semasa tempoh spread yang tinggi. Ini termasuk waktu berita besar atau keadaan pasaran yang tidak menentu, memastikan robot hanya beroperasi apabila pasaran tenang dan stabil.",
            points: ["Mengelakkan Kemasukan Kos Tinggi", "Perlindungan dari Volatiliti Pasaran", "Memastikan Masa Kemasukan Optimum", "Mengekalkan Kecekapan Dagangan"],
            icon: <SpreadFilterIcon />,
        },
        {
            title: "Auto Trend Reversal Protection",
            description: "Robot GPE v4 direka untuk bertindak balas terhadap perubahan arah trend pasaran yang kuat dengan menutup posisi secara automatik atau membalikkannya. Mekanisme ini memastikan perlindungan modal anda diutamakan, membolehkan robot menyesuaikan diri dengan pantas kepada keadaan pasaran yang berubah-ubah.",
            points: ["Pengesanan Trend Automatik", "Prioriti Perlindungan Modal", "Pengurusan Posisi Pintar", "Mencegah Kerugian Besar"],
            icon: <AutoTrendIcon />,
        },
        {
            title: "News Protection Mode",
            description: "Robot GPE v4 dilengkapi dengan ciri 'News Protection Mode' yang canggih. Apabila mod ini diaktifkan, robot akan menghentikan kemasukan dagangan baharu semasa peristiwa berita besar, namun terus menguruskan posisi sedia ada dengan berhati-hati. Ini memastikan anda tidak terdedah kepada risiko perdagangan berlebihan dalam keadaan pasaran yang tidak menentu.",
            points: ["Hentian Kemasukan Baharu", "Pengurusan Posisi Sedia Ada", "Mengelakkan Perdagangan Berlebihan", "Perlindungan Volatiliti Berita"],
            icon: <NewsProtectionIcon />,
        },
        {
            title: "Panel Manual (v4.1+)",
            description: "Robot GPE v4.1+ memperkenalkan ciri 'Panel Manual' yang inovatif, membolehkan anda mengawal robot secara langsung dari carta. Ciri ini memberikan keupayaan untuk menghidup/mematikan robot, menyemak status, dan memantau lapisan secara langsung tanpa perlu membuka menu.",
            points: ["Kawalan Terus dari Carta", "Pemantauan Status Masa Nyata", "Penjejakan Lapisan Langsung", "Tidak Perlu Navigasi Menu"],
            icon: <ManualPanelIcon />,
        },
        {
            title: "BONUS: Panduan Penggunaan",
            description: "Pastikan prestasi optimum dengan mengikuti panduan penggunaan yang disyorkan ini untuk Robot GPE v4.1+.",
            points: ["Guna pasangan XAU/USD (Emas)", "Timeframe M1 atau M5", "Elakkan mengubah tetapan semasa dagangan aktif", "Pastikan VPS dalam talian 24 jam"],
            icon: <BonusGuideIcon />,
        },
    ],
    en: [
        {
            title: "Automatic GPE v4 Robot",
            description: "The GPE v4 Robot intelligently analyzes market trends and identifies the optimal direction for trades, ensuring strategic decision-making.",
            points: ["Market Direction Mastery", "Precise Position Entry", "Fully Autonomous Operation"],
            icon: <RobotIcon />,
        },
        {
            title: "Zero Risk Trading",
            description: "The 'Zero Risk Trading' feature of the GPE v4 Robot is designed to automatically protect your profits. When a trade reaches a specified profit level, the robot moves the stop loss to the entry price, ensuring your trade is risk-free.",
            points: ["Automatic Profit Protection", "Eliminates Trading Risk", "Secures Capital", "Protects Profits from Market Reversals"],
            icon: <ZeroRiskIcon />,
        },
        {
            title: "Automatic Profit Lock",
            description: "The 'Automatic Profit Lock' feature of the GPE v4 Robot ensures your profits are kept safe. As the market continues to move in your favor, the robot intelligently adjusts your protection level, locking in accumulated profits without any manual intervention from you.",
            points: ["Automatic Profit Adjustment", "Hands-Free Profit Management", "Maximize Good Trend Profits", "Smart Trailing System"],
            icon: <ProfitLockIcon />,
        },
        {
            title: "Smart Layering System",
            description: "The Smart Layering System of the GPE v4 Robot is designed to safely add trading positions when the market is still in an optimal entry zone. This is not a martingale system, but a smart layering strategy to optimize profits.",
            points: ["Safe Position Scaling", "Smart Entry Zone Detection", "Risk-Controlled Layering", "Maximizing Profit Potential"],
            icon: <SmartLayeringIcon />,
        },
        {
            title: "Spread Filter",
            description: "The Spread Filter system of the GPE v4 Robot is designed to avoid entering trading positions during periods of high spread. This includes times of major news or uncertain market conditions, ensuring the robot only operates when the market is calm and stable.",
            points: ["Avoids High-Cost Entries", "Protection from Market Volatility", "Ensures Optimal Entry Times", "Maintains Trading Efficiency"],
            icon: <SpreadFilterIcon />,
        },
        {
            title: "Auto Trend Reversal Protection",
            description: "The GPE v4 Robot is designed to react to strong market trend changes by automatically closing or reversing positions. This mechanism ensures your capital protection is prioritized, allowing the robot to quickly adapt to changing market conditions.",
            points: ["Automatic Trend Detection", "Capital Protection Priority", "Smart Position Management", "Prevents Major Losses"],
            icon: <AutoTrendIcon />,
        },
        {
            title: "News Protection Mode",
            description: "The GPE v4 Robot is equipped with an advanced 'News Protection Mode' feature. When this mode is activated, the robot will stop new trade entries during major news events but will continue to manage existing positions carefully. This ensures you are not exposed to excessive trading risks in uncertain market conditions.",
            points: ["Halts New Entries", "Manages Existing Positions", "Avoids Over-Trading", "Protects from News Volatility"],
            icon: <NewsProtectionIcon />,
        },
        {
            title: "Manual Panel (v4.1+)",
            description: "The GPE v4.1+ Robot introduces an innovative 'Manual Panel' feature, allowing you to control the robot directly from the chart. This feature provides the ability to turn the robot on/off, check its status, and monitor layers directly without opening any menus.",
            points: ["Direct Control from Chart", "Real-Time Status Monitoring", "Live Layer Tracking", "No Menu Navigation Needed"],
            icon: <ManualPanelIcon />,
        },
        {
            title: "BONUS: User Guide",
            description: "Ensure optimal performance by following these recommended usage guidelines for the GPE v4.1+ Robot.",
            points: ["Use XAU/USD (Gold) pair", "M1 or M5 Timeframe", "Avoid changing settings during active trades", "Ensure 24-hour online VPS"],
            icon: <BonusGuideIcon />,
        },
    ]
};

// Add stubs for other languages to avoid errors, copying English content
const otherLanguages = ['th', 'id', 'ru', 'zh', 'ja'];
otherLanguages.forEach(lang => {
    featureTranslations[lang] = featureTranslations['en'];
});


const DetailedFeatures: React.FC = () => {
  const { language } = useLanguage();
  const features = featureTranslations[language] || featureTranslations.en;
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useFadeInAnimation(sectionRef);

  return (
    <section ref={sectionRef} id="detailed-features" className={`py-20 bg-pirus-dark overflow-hidden transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Robot GPE V4 Features</h2>
          <div className="w-24 h-1 mx-auto my-4 bg-gradient-to-r from-pirus-blue to-pirus-pink rounded-full"></div>
          <p className="text-pirus-light">
            Explore the advanced technology that powers the GPE V4 robot, designed for precision, safety, and performance.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
              <div key={index} className="grid lg:grid-cols-1 gap-12 items-center">
                <div className="relative z-10 text-center">
                  <div className="inline-block p-3 bg-gray-500/10 border border-gray-200/10 rounded-xl mb-4">
                      {feature.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-pirus-light mb-6 max-w-2xl mx-auto">{feature.description}</p>
                  <ul className="space-y-3 inline-block text-left">
                    {feature.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start">
                        <div className="flex-shrink-0 bg-pirus-blue/20 text-pirus-blue rounded-full p-1.5 mr-3 mt-1">
                          <CheckIcon />
                        </div>
                        <span className="text-pirus-light">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;