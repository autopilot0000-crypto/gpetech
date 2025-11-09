import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const translations = {
  bm: {
    nav: [
      { href: '#about', label: 'Tentang' },
      { href: '#products', label: 'Produk' },
      { href: '#services', label: 'Perkhidmatan' },
      { href: '#testimonials', label: 'Testimoni' },
      { href: '#start', label: 'Cara Mula' },
      { href: '#affiliate', label: 'Affiliate' },
    ],
    contact: 'Hubungi Kami',
  },
  en: {
    nav: [
      { href: '#about', label: 'About' },
      { href: '#products', label: 'Products' },
      { href: '#services', label: 'Services' },
      { href: '#testimonials', label: 'Testimonials' },
      { href: '#start', label: 'Get Started' },
      { href: '#affiliate', label: 'Affiliate' },
    ],
    contact: 'Contact Us',
  },
  th: {
    nav: [
      { href: '#about', label: 'เกี่ยวกับ' },
      { href: '#products', label: 'ผลิตภัณฑ์' },
      { href: '#services', label: 'บริการ' },
      { href: '#testimonials', label: 'คำรับรอง' },
      { href: '#start', label: 'เริ่มต้น' },
      { href: '#affiliate', label: 'พันธมิตร' },
    ],
    contact: 'ติดต่อเรา',
  },
  id: {
    nav: [
      { href: '#about', label: 'Tentang' },
      { href: '#products', label: 'Produk' },
      { href: '#services', label: 'Layanan' },
      { href: '#testimonials', label: 'Testimonial' },
      { href: '#start', label: 'Mulai' },
      { href: '#affiliate', label: 'Afiliasi' },
    ],
    contact: 'Hubungi Kami',
  },
  ru: {
    nav: [
      { href: '#about', label: 'О нас' },
      { href: '#products', label: 'Продукты' },
      { href: '#services', label: 'Услуги' },
      { href: '#testimonials', label: 'Отзывы' },
      { href: '#start', label: 'Начать' },
      { href: '#affiliate', label: 'Партнер' },
    ],
    contact: 'Связаться с нами',
  },
  zh: {
    nav: [
      { href: '#about', label: '关于' },
      { href: '#products', label: '产品' },
      { href: '#services', label: '服务' },
      { href: '#testimonials', label: '推荐' },
      { href: '#start', label: '开始' },
      { href: '#affiliate', label: '加盟' },
    ],
    contact: '联系我们',
  },
  ja: {
    nav: [
      { href: '#about', label: '概要' },
      { href: '#products', label: '製品' },
      { href: '#services', label: 'サービス' },
      { href: '#testimonials', label: 'お客様の声' },
      { href: '#start', label: '始める' },
      { href: '#affiliate', label: 'アフィリエイト' },
    ],
    contact: 'お問い合わせ',
  },
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const navLinks = t.nav;

  return (
    <header className="sticky top-0 z-50 bg-pirus-dark/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">GPE</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-pirus-light hover:text-pirus-blue transition-colors font-medium">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="w-px h-6 bg-gray-700"></div>
            <LanguageSwitcher />
            <a href="https://t.me/mawarmelissabot" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pirus-blue to-pirus-pink text-white font-bold py-2 px-6 rounded-md hover:opacity-90 transition-all duration-300 transform hover:scale-105">
              {t.contact}
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className="ml-4 p-2 text-pirus-light hover:text-white focus:outline-none focus:text-white">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-pirus-light hover:text-pirus-blue transition-colors font-medium py-2 px-3 rounded-md">
                  {link.label}
                </a>
              ))}
            </nav>
            <a href="https://t.me/mawarmelissabot" target="_blank" rel="noopener noreferrer" className="block mt-4 text-center bg-gradient-to-r from-pirus-blue to-pirus-pink text-white font-bold py-2 px-6 rounded-md hover:opacity-90 transition-all duration-300">
              {t.contact}
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
// Fix: Added default export for Header component
export default Header;