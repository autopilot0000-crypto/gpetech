import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  bm: {
    linksTitle: "Link penting:",
    links: [
        { href: "#", label: "Home" },
        { href: "#about", label: "Tentang" },
        { href: "#products", label: "Produk" },
        { href: "#affiliate", label: "Program Affiliate" },
        { href: "#start", label: "Support" },
    ],
    contactTitle: "Hubungi Kami:",
    contactAdmin: "Telegram Admin:",
    disclaimerTitle: "Penafian Risiko:",
    disclaimerText: "Trading melibatkan risiko. GPE tidak menjanjikan keuntungan tetap. Gunakan modal yang sanggup ditanggung.",
    copyright: "Copyright © {year} GPE Trade Robot Technology"
  },
  en: {
    linksTitle: "Important Links:",
    links: [
        { href: "#", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#products", label: "Products" },
        { href: "#affiliate", label: "Affiliate Program" },
        { href: "#start", label: "Support" },
    ],
    contactTitle: "Contact Us:",
    contactAdmin: "Telegram Admin:",
    disclaimerTitle: "Risk Disclaimer:",
    disclaimerText: "Trading involves risk. GPE does not promise fixed profits. Use capital you are prepared to lose.",
    copyright: "Copyright © {year} GPE Trade Robot Technology"
  },
  th: {
    linksTitle: "ลิงก์สำคัญ:",
    links: [
        { href: "#", label: "หน้าแรก" },
        { href: "#about", label: "เกี่ยวกับ" },
        { href: "#products", label: "ผลิตภัณฑ์" },
        { href: "#affiliate", label: "โปรแกรมพันธมิตร" },
        { href: "#start", label: "สนับสนุน" },
    ],
    contactTitle: "ติดต่อเรา:",
    contactAdmin: "ผู้ดูแลระบบ Telegram:",
    disclaimerTitle: "คำเตือนความเสี่ยง:",
    disclaimerText: "การซื้อขายมีความเสี่ยง GPE ไม่รับประกันผลกำไรคงที่ ใช้เงินทุนที่คุณพร้อมจะสูญเสีย",
    copyright: "ลิขสิทธิ์ © {year} GPE Trade Robot Technology"
  },
  id: {
    linksTitle: "Tautan Penting:",
    links: [
        { href: "#", label: "Beranda" },
        { href: "#about", label: "Tentang" },
        { href: "#products", label: "Produk" },
        { href: "#affiliate", label: "Program Afiliasi" },
        { href: "#start", label: "Dukungan" },
    ],
    contactTitle: "Hubungi Kami:",
    contactAdmin: "Admin Telegram:",
    disclaimerTitle: "Penafian Risiko:",
    disclaimerText: "Perdagangan melibatkan risiko. GPE tidak menjanjikan keuntungan tetap. Gunakan modal yang siap Anda rugi.",
    copyright: "Hak Cipta © {year} GPE Trade Robot Technology"
  },
  ru: {
    linksTitle: "Важные ссылки:",
    links: [
        { href: "#", label: "Главная" },
        { href: "#about", label: "О нас" },
        { href: "#products", label: "Продукты" },
        { href: "#affiliate", label: "Партнерская программа" },
        { href: "#start", label: "Поддержка" },
    ],
    contactTitle: "Свяжитесь с нами:",
    contactAdmin: "Администратор Telegram:",
    disclaimerTitle: "Отказ от ответственности за риски:",
    disclaimerText: "Торговля сопряжена с риском. GPE не обещает фиксированную прибыль. Используйте капитал, который вы готовы потерять.",
    copyright: "Авторское право © {year} GPE Trade Robot Technology"
  },
  zh: {
    linksTitle: "重要链接:",
    links: [
        { href: "#", label: "首页" },
        { href: "#about", label: "关于" },
        { href: "#products", label: "产品" },
        { href: "#affiliate", label: "加盟计划" },
        { href: "#start", label: "支持" },
    ],
    contactTitle: "联系我们:",
    contactAdmin: "Telegram 管理员:",
    disclaimerTitle: "风险免责声明:",
    disclaimerText: "交易涉及风险。GPE 不承诺固定利润。请使用您准备好损失的资金。",
    copyright: "版权所有 © {year} GPE 交易机器人技术"
  },
  ja: {
    linksTitle: "重要なリンク:",
    links: [
        { href: "#", label: "ホーム" },
        { href: "#about", label: "概要" },
        { href: "#products", label: "製品" },
        { href: "#affiliate", label: "アフィリエイトプログラム" },
        { href: "#start", label: "サポート" },
    ],
    contactTitle: "お問い合わせ:",
    contactAdmin: "Telegram管理者:",
    disclaimerTitle: "リスク免責事項:",
    disclaimerText: "取引にはリスクが伴います。GPEは固定利益を約束するものではありません。失う覚悟のある資金を使用してください。",
    copyright: "著作権 © {year} GPEトレードロボット技術"
  }
};

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-pirus-dark/70 text-pirus-light border-t border-gray-200/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-lg text-white mb-4">{t.linksTitle}</h4>
            <ul>
              {t.links.map(link => (
                <li key={link.label} className="mb-2"><a href={link.href} className="hover:text-pirus-blue transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg text-white mb-4">{t.contactTitle}</h4>
            <p>{t.contactAdmin} <a href="https://t.me/mawarmelissabot" target="_blank" rel="noopener noreferrer" className="text-pirus-blue hover:underline">@mawarmelissabot</a></p>
          </div>
          <div className="bg-pirus-blue/10 border border-pirus-blue/20 p-4 rounded-md text-sm text-blue-200">
            <p><strong>{t.disclaimerTitle}</strong> {t.disclaimerText}</p>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-sm">
          <p>{t.copyright.replace('{year}', year.toString())}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;