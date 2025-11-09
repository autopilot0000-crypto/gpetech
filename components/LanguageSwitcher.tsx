import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const toggleLanguage = (lang: 'bm' | 'en' | 'th' | 'id' | 'ru' | 'zh' | 'ja') => {
        setLanguage(lang);
        setIsOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);


    const languages = [
        { code: 'bm', name: 'Bahasa' },
        { code: 'en', name: 'English' },
        { code: 'id', name: 'Indonesia' },
        { code: 'th', name: 'ภาษาไทย' },
        { code: 'zh', name: '中文' },
        { code: 'ja', name: '日本語' },
        { code: 'ru', name: 'Русский' },
    ];


    return (
        <div className="relative" ref={wrapperRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-10 h-10 bg-gray-500/10 border border-gray-200/10 rounded-md text-sm font-bold text-gray-300 hover:border-pirus-blue focus:outline-none"
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-label="Change language"
            >
                {language.toUpperCase()}
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-pirus-dark border border-gray-700 rounded-md shadow-lg z-10">
                    {languages.map(lang => (
                         <a
                            key={lang.code}
                            href="#"
                            onClick={(e) => { e.preventDefault(); toggleLanguage(lang.code as any); }}
                            className={`block px-4 py-2 text-sm ${language === lang.code ? 'text-pirus-blue' : 'text-gray-300'} hover:bg-gray-500/10`}
                        >
                            {lang.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;