import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CommissionIcon, RegisterIcon, ContactAdminIcon } from './icons';

const translations = {
  bm: {
    title: "Sertai Program Affiliate Kami",
    description: "Jana pendapatan dengan mempromosikan teknologi robot dagangan yang dipercayai oleh ribuan pengguna.",
    cards: [
      {
        icon: <CommissionIcon />,
        title: "Komisen Menarik",
        text: "Jana pendapatan pasif dengan setiap rujukan yang berjaya. Dapatkan komisen berperingkat yang kompetitif untuk setiap pelanggan yang anda bawa.",
      },
      {
        icon: <RegisterIcon />,
        title: "Bagaimana untuk Mula",
        text: "1. Hubungi Admin untuk pendaftaran. 2. Terima pautan affiliate unik anda. 3. Mula berkongsi dan jana pendapatan!",
      },
      {
        icon: <ContactAdminIcon />,
        title: "Hubungi Kami",
        text: "Sedia untuk bermula? Hubungi admin kami di Telegram untuk mendaftar dan mendapatkan maklumat lanjut.",
      },
    ],
    button: "Hubungi Admin"
  },
  en: {
    title: "Join Our Affiliate Program",
    description: "Earn income by promoting a trading robot technology trusted by thousands of users.",
    cards: [
      {
        icon: <CommissionIcon />,
        title: "Attractive Commissions",
        text: "Earn passive income with every successful referral. Get competitive tiered commissions for every client you bring.",
      },
      {
        icon: <RegisterIcon />,
        title: "How to Start",
        text: "1. Contact Admin for registration. 2. Receive your unique affiliate link. 3. Start sharing and earn!",
      },
      {
        icon: <ContactAdminIcon />,
        title: "Contact Us",
        text: "Ready to start? Contact our admin on Telegram to register and get more information.",
      },
    ],
    button: "Contact Admin"
  },
  th: {
    title: "เข้าร่วมโปรแกรมพันธมิตรของเรา",
    description: "สร้างรายได้ด้วยการโปรโมตเทคโนโลยีหุ่นยนต์ซื้อขายที่ได้รับความไว้วางใจจากผู้ใช้หลายพันคน",
    cards: [
      {
        icon: <CommissionIcon />,
        title: "ค่าคอมมิชชั่นที่น่าสนใจ",
        text: "สร้างรายได้แบบพาสซีฟจากการแนะนำที่ประสบความสำเร็จทุกครั้ง รับค่าคอมมิชชั่นแบบขั้นบันไดที่แข่งขันได้สำหรับลูกค้าทุกคนที่คุณแนะนำ",
      },
      {
        icon: <RegisterIcon />,
        title: "วิธีเริ่มต้น",
        text: "1. ติดต่อผู้ดูแลระบบเพื่อลงทะเบียน 2. รับลิงก์พันธมิตรเฉพาะของคุณ 3. เริ่มแชร์และสร้างรายได้!",
      },
      {
        icon: <ContactAdminIcon />,
        title: "ติดต่อเรา",
        text: "พร้อมที่จะเริ่มหรือยัง? ติดต่อผู้ดูแลระบบของเราทาง Telegram เพื่อลงทะเบียนและรับข้อมูลเพิ่มเติม",
      },
    ],
    button: "ติดต่อผู้ดูแลระบบ"
  },
  id: {
    title: "Bergabung dengan Program Afiliasi Kami",
    description: "Hasilkan pendapatan dengan mempromosikan teknologi robot trading yang dipercaya oleh ribuan pengguna.",
    cards: [
      {
        icon: <CommissionIcon />,
        title: "Komisi Menarik",
        text: "Hasilkan pendapatan pasif dengan setiap referensi yang berhasil. Dapatkan komisi berjenjang yang kompetitif untuk setiap klien yang Anda bawa.",
      },
      {
        icon: <RegisterIcon />,
        title: "Cara Memulai",
        text: "1. Hubungi Admin untuk pendaftaran. 2. Terima tautan afiliasi unik Anda. 3. Mulai bagikan dan hasilkan!",
      },
      {
        icon: <ContactAdminIcon />,
        title: "Hubungi Kami",
        text: "Siap memulai? Hubungi admin kami di Telegram untuk mendaftar dan mendapatkan informasi lebih lanjut.",
      },
    ],
    button: "Hubungi Admin"
  },
  ru: {
    title: "Присоединяйтесь к нашей партнерской программе",
    description: "Зарабатывайте, продвигая технологию торговых роботов, которой доверяют тысячи пользователей.",
    cards: [
      {
        icon: <CommissionIcon />,
        title: "Привлекательные комиссии",
        text: "Получайте пассивный доход с каждым успешным привлечением. Получайте конкурентоспособные многоуровневые комиссии за каждого приведенного клиента.",
      },
      {
        icon: <RegisterIcon />,
        title: "Как начать",
        text: "1. Свяжитесь с администратором для регистрации. 2. Получите свою уникальную партнерскую ссылку. 3. Начните делиться и зарабатывать!",
      },
      {
        icon: <ContactAdminIcon />,
        title: "Свяжитесь с нами",
        text: "Готовы начать? Свяжитесь с нашим администратором в Telegram для регистрации и получения дополнительной информации.",
      },
    ],
    button: "Связаться с администратором"
  },
  zh: {
    title: "加入我们的加盟计划",
    description: "通过推广成千上万用户信赖的交易机器人技术来赚取收入。",
    cards: [
      {
        icon: <CommissionIcon />,
        title: "有吸引力的佣金",
        text: "通过每一次成功的推荐赚取被动收入。为您带来的每一位客户获得有竞争力的分级佣金。",
      },
      {
        icon: <RegisterIcon />,
        title: "如何开始",
        text: "1. 联系管理员进行注册。 2. 收到您独特的加盟链接。 3. 开始分享并赚钱！",
      },
      {
        icon: <ContactAdminIcon />,
        title: "联系我们",
        text: "准备好开始了吗？请在 Telegram 上联系我们的管理员进行注册并获取更多信息。",
      },
    ],
    button: "联系管理员"
  },
  ja: {
    title: "アフィリエイトプログラムに参加する",
    description: "何千人ものユーザーに信頼されている取引ロボット技術を宣伝して収入を得ましょう。",
    cards: [
      {
        icon: <CommissionIcon />,
        title: "魅力的なコミッション",
        text: "成功した紹介ごとに受動的所得を得ます。あなたが連れてくるすべてのクライアントに対して競争力のある段階的なコミッションを取得します。",
      },
      {
        icon: <RegisterIcon />,
        title: "始め方",
        text: "1. 登録のために管理者に連絡してください。 2. あなたのユニークなアフィリエイトリンクを受け取ります。 3. 共有を開始して稼ぎましょう！",
      },
      {
        icon: <ContactAdminIcon />,
        title: "お問い合わせ",
        text: "始める準備はできましたか？登録して詳細情報を入手するには、Telegramで管理者に連絡してください。",
      },
    ],
    button: "管理者に連絡する"
  },
};

const Affiliate: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="affiliate" className="py-20 bg-pirus-dark/70">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t.title}</h2>
          <div className="w-24 h-1 mx-auto my-4 bg-gradient-to-r from-pirus-blue to-pirus-pink rounded-full"></div>
          <p className="text-pirus-light">
            {t.description}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.cards.map((card, index) => (
            <div key={index} className="bg-gray-500/10 p-8 rounded-lg border border-gray-200/10 flex flex-col items-center text-center">
              <div className="text-pirus-blue mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-pirus-light flex-grow">{card.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://t.me/mawarmelissabot" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pirus-blue to-pirus-pink text-white font-bold py-3 px-10 rounded-md hover:opacity-90 transition-transform duration-300 transform hover:scale-105">
            {t.button}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Affiliate;
