import React, { useRef } from 'react';
import { ExpertConsultationIcon, AdvancedTrainingIcon, CustomerSupportIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';
import useFadeInAnimation from '../hooks/useFadeInAnimation';

const translations = {
    bm: {
        title: "Perkhidmatan Kami",
        services: [
            {
                title: 'Expert Consultation',
                description: "Manfaat daripada perundingan peribadi dengan pasukan pedagang kami yang berpengalaman. Sama ada anda baru dalam perdagangan atau pelabur berpengalaman, pakar kami bersedia memberikan panduan dan nasihat yang disesuaikan untuk membantu anda mencapai matlamat kewangan anda."
            },
            {
                title: 'Advanced Training Resources',
                description: 'Dapatkan akses kepada pelbagai bahan pendidikan dan sumber yang direka untuk meningkatkan kemahiran perdagangan anda. Daripada tutorial komprehensif kepada analisis pasaran yang mendalam, sumber latihan kami memberi anda kuasa untuk membuat keputusan termaklum dan mengemudi pasaran dengan yakin.'
            },
            {
                title: '24/7 Customer Support',
                description: 'Nikmati sokongan pelanggan sepanjang masa daripada pasukan profesional kami yang berdedikasi. Sama ada anda mempunyai soalan tentang perkhidmatan kami, memerlukan bantuan teknikal, atau memerlukan bantuan dengan platform dagangan anda, pasukan sokongan kami yang mesra sentiasa bersedia untuk membantu anda.'
            }
        ]
    },
    en: {
        title: "Our Services",
        services: [
            {
                title: 'Expert Consultation',
                description: "Benefit from personalized consultations with our team of experienced traders. Whether you're new to trading or a seasoned investor, our experts are here to provide tailored guidance and advice to help you achieve your financial goals."
            },
            {
                title: 'Advanced Training Resources',
                description: 'Gain access to a wealth of educational materials and resources designed to enhance your trading skills. From comprehensive tutorials to in-depth market analysis, our training resources empower you to make informed decisions and navigate the markets with confidence.'
            },
            {
                title: '24/7 Customer Support',
                description: 'Enjoy round-the-clock customer support from our dedicated team of professionals. Whether you have questions about our services, need technical assistance, or require help with your trading platform, our friendly support team is always available to assist you.'
            }
        ]
    },
    th: {
        title: "บริการของเรา",
        services: [
            {
                title: 'การให้คำปรึกษาจากผู้เชี่ยวชาญ',
                description: "รับประโยชน์จากการให้คำปรึกษาส่วนบุคคลกับทีมผู้ค้าที่มีประสบการณ์ของเรา ไม่ว่าคุณจะยังใหม่ต่อการซื้อขายหรือเป็นนักลงทุนที่ช่ำชอง ผู้เชี่ยวชาญของเราพร้อมให้คำแนะนำและคำปรึกษาที่เหมาะกับคุณเพื่อช่วยให้คุณบรรลุเป้าหมายทางการเงิน"
            },
            {
                title: 'แหล่งข้อมูลการฝึกอบรมขั้นสูง',
                description: 'เข้าถึงสื่อการเรียนรู้และแหล่งข้อมูลมากมายที่ออกแบบมาเพื่อเพิ่มพูนทักษะการซื้อขายของคุณ ตั้งแต่บทช่วยสอนที่ครอบคลุมไปจนถึงการวิเคราะห์ตลาดในเชิงลึก แหล่งข้อมูลการฝึกอบรมของเราช่วยให้คุณตัดสินใจได้อย่างมีข้อมูลและสำรวจตลาดได้อย่างมั่นใจ'
            },
            {
                title: 'ฝ่ายบริการลูกค้า 24/7',
                description: 'เพลิดเพลินกับการสนับสนุนลูกค้าตลอด 24 ชั่วโมงจากทีมงานมืออาชีพที่ทุ่มเทของเรา ไม่ว่าคุณจะมีคำถามเกี่ยวกับบริการของเรา ต้องการความช่วยเหลือด้านเทคนิค หรือต้องการความช่วยเหลือเกี่ยวกับแพลตฟอร์มการซื้อขายของคุณ ทีมสนับสนุนที่เป็นมิตรของเราพร้อมให้ความช่วยเหลือคุณเสมอ'
            }
        ]
    },
    id: {
        title: "Layanan Kami",
        services: [
            {
                title: 'Konsultasi Ahli',
                description: "Manfaatkan konsultasi personal dengan tim trader kami yang berpengalaman. Baik Anda baru dalam trading atau investor berpengalaman, para ahli kami siap memberikan panduan dan saran yang disesuaikan untuk membantu Anda mencapai tujuan keuangan Anda."
            },
            {
                title: 'Sumber Daya Pelatihan Lanjutan',
                description: 'Dapatkan akses ke banyak materi dan sumber daya pendidikan yang dirancang untuk meningkatkan keterampilan trading Anda. Dari tutorial komprehensif hingga analisis pasar mendalam, sumber daya pelatihan kami memberdayakan Anda untuk membuat keputusan yang tepat dan menavigasi pasar dengan percaya diri.'
            },
            {
                title: 'Dukungan Pelanggan 24/7',
                description: 'Nikmati dukungan pelanggan sepanjang waktu dari tim profesional kami yang berdedikasi. Apakah Anda memiliki pertanyaan tentang layanan kami, memerlukan bantuan teknis, atau memerlukan bantuan dengan platform trading Anda, tim dukungan kami yang ramah selalu tersedia untuk membantu Anda.'
            }
        ]
    },
    ru: {
        title: "Наши услуги",
        services: [
            {
                title: 'Консультация эксперта',
                description: "Воспользуйтесь персональными консультациями с нашей командой опытных трейдеров. Независимо от того, новичок вы в трейдинге или опытный инвестор, наши эксперты готовы предоставить индивидуальные рекомендации и советы, чтобы помочь вам достичь ваших финансовых целей."
            },
            {
                title: 'Расширенные учебные ресурсы',
                description: 'Получите доступ к богатым образовательным материалам и ресурсам, предназначенным для повышения ваших торговых навыков. От исчерпывающих руководств до углубленного анализа рынка, наши учебные ресурсы помогут вам принимать обоснованные решения и уверенно ориентироваться на рынках.'
            },
            {
                title: 'Круглосуточная поддержка клиентов',
                description: 'Наслаждайтесь круглосуточной поддержкой клиентов от нашей преданной команды профессионалов. Если у вас есть вопросы о наших услугах, вам нужна техническая помощь или помощь с вашей торговой платформой, наша дружелюбная команда поддержки всегда готова вам помочь.'
            }
        ]
    },
    zh: {
        title: "我们的服务",
        services: [
            {
                title: '专家咨询',
                description: "从我们经验丰富的交易员团队的个性化咨询中受益。无论您是交易新手还是经验丰富的投资者，我们的专家都会为您提供量身定制的指导和建议，帮助您实现财务目标。"
            },
            {
                title: '高级培训资源',
                description: '获得旨在提高您交易技能的丰富教育材料和资源。从全面的教程到深入的市场分析，我们的培训资源使您能够做出明智的决策并自信地驾驭市场。'
            },
            {
                title: '24/7 客户支持',
                description: '享受我们专业的专业团队提供的全天候客户支持。无论您对我们的服务有疑问、需要技术援助还是需要交易平台方面的帮助，我们友好的支持团队随时为您提供帮助。'
            }
        ]
    },
    ja: {
        title: "私たちのサービス",
        services: [
            {
                title: '専門家によるコンサルテーション',
                description: "経験豊富なトレーダーチームによる個別のコンサルテーションをご利用ください。取引が初めての方でも、経験豊富な投資家でも、専門家がお客様の財務目標達成を支援するためのオーダーメイドのガイダンスとアドバイスを提供します。"
            },
            {
                title: '高度なトレーニングリソース',
                description: '取引スキルを向上させるために設計された豊富な教育資料やリソースにアクセスできます。包括的なチュートリアルから詳細な市場分析まで、当社のトレーニングリソースは、情報に基づいた意思決定を行い、自信を持って市場をナビゲートする力を与えます。'
            },
            {
                title: '24時間年中無休のカスタマーサポート',
                description: '専任の専門家チームによる24時間体制のカスタマーサポートをお楽しみください。当社のサービスに関するご質問、技術的な支援、または取引プラットフォームに関するヘルプが必要な場合でも、フレンドリーなサポートチームがいつでもお手伝いします。'
            }
        ]
    }
};

const Services: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useFadeInAnimation(sectionRef);

    const services = [
        {
            icon: <ExpertConsultationIcon />,
            title: t.services[0].title,
            description: t.services[0].description
        },
        {
            icon: <AdvancedTrainingIcon />,
            title: t.services[1].title,
            description: t.services[1].description
        },
        {
            icon: <CustomerSupportIcon />,
            title: t.services[2].title,
            description: t.services[2].description
        }
    ];

    return (
        <section ref={sectionRef} id="services" className={`py-20 bg-pirus-dark/70 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">{t.title}</h2>
                    <div className="w-24 h-1 mx-auto my-4 bg-gradient-to-r from-pirus-blue to-pirus-pink rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-500/10 p-8 rounded-lg border border-gray-200/10 flex flex-col items-center text-center transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(74,108,253,0.3)]">
                            <div className="text-pirus-blue mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-pirus-light">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;