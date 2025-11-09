import React from 'react';

const iconProps = {
  className: "w-8 h-8",
  strokeWidth: 1.5
};

export const AIEngineIcon: React.FC = () => (
  <svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527c.44-.315.99-.25 1.365.125l.805.805c.375.375.44 1.025.125 1.365l-.527.737c-.25.35-.272.806-.108 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.11v1.093c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.108 1.204l.527.738c.315.44.25.99-.125 1.365l-.805.805c-.375-.375-1.025.44-1.365.125l-.737-.527c-.35-.25-.806-.272-1.204-.108-.397.165-.71.505-.78.93l-.15.894c-.09.542-.56.94-1.11.94h-1.093c-.55 0-1.02-.398-1.11-.94l-.149-.894c-.07-.424-.384-.764-.78-.93-.398-.164-.855-.142-1.205.108l-.737.527c-.44.315-.99.25-1.365-.125l-.805-.805c-.375-.375-.44-1.025-.125-1.365l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.893-.15c-.543-.09-.94-.56-.94-1.11v-1.093c0-.55.397-1.02.94-1.11l.893-.149c.425-.07.765-.383.93-.78.165-.398.143.854-.108-1.204l-.527-.738c-.315-.44-.25-.99.125-1.365l.805-.805c.375-.375 1.025-.44 1.365-.125l.737.527c.35.25.806.272 1.204.108.397-.165.71.505.78-.93l.15-.894z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const SmartStrategyIcon: React.FC = () => (
    <svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
    </svg>
);

export const RiskControlIcon: React.FC = () => (
    <svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

export const RealPerformanceIcon: React.FC = () => (
    <svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.94-3.94m3.94 3.94L20.06 7.94" />
    </svg>
);

const productIconProps = {
  className: "w-16 h-16",
  strokeWidth: 1
};

export const ProductIconV3: React.FC = () => (
    <svg {...productIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
);

export const ProductIconV4: React.FC = () => (
    <svg {...productIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9m-9-5.25v5.25m9-5.25v5.25m0-9-9 5.25m9-5.25L12 2.25m9 5.25-9 5.25M3 7.5l9 5.25m-9-5.25L12 2.25m-9 5.25l9-5.25m9 5.25-9-5.25M9 12.75l3 1.75 3-1.75m-6 0v5.25l3 1.75 3-1.75V12.75m-6 5.25 3 1.75 3-1.75M9 12.75l3-1.75m-3 1.75 3 1.75m3-1.75-3-1.75" />
    </svg>
);

export const ProductIconTitan: React.FC = () => (
    <svg {...productIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 011.316-5.033 9.75 9.75 0 011.838-3.442 9.75 9.75 0 011.644-1.84 9.75 9.75 0 011.452-1.233A9.75 9.75 0 0112 5.25c.825 0 1.627.12 2.394.351a9.75 9.75 0 011.452 1.233 9.75 9.75 0 011.644 1.84 9.75 9.75 0 011.838 3.442A9.75 9.75 0 0121 13.717V15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75a4.5 4.5 0 00-9 0" />
    </svg>
);

const checkIconProps = {
    className: "w-5 h-5",
    strokeWidth: 2
};

export const CheckIcon: React.FC = () => (
    <svg {...checkIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

export const ExpertConsultationIcon: React.FC = () => (
    <svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.228a4.5 4.5 0 00-1.025.07M3 18.75a9.094 9.094 0 013.741-.479 3 3 0 014.682-2.72m-7.5 0a4.5 4.5 0 014.5-4.5v-1.5a6.75 6.75 0 00-6.75 6.75v1.5a6.75 6.75 0 006.75 6.75v-1.5a4.5 4.5 0 01-4.5-4.5zm9-6a4.5 4.5 0 014.5-4.5v-1.5a6.75 6.75 0 00-6.75 6.75v1.5a6.75 6.75 0 006.75 6.75v-1.5a4.5 4.5 0 01-4.5-4.5z" />
    </svg>
);

export const AdvancedTrainingIcon: React.FC = () => (
    <svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z" />
    </svg>
);

export const CustomerSupportIcon: React.FC = () => (
    <svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3m-3 12h3m-8.25-8.25L5.25 6m13.5 13.5L18.75 18m-13.5 0L5.25 18m13.5-12L18.75 6M12 21a9 9 0 100-18 9 9 0 000 18z" />
    </svg>
);

const featureIconProps = {
  className: "w-10 h-10 text-pirus-blue",
  strokeWidth: 1.5
};

export const RobotIcon: React.FC = () => (
  <svg {...featureIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75h-10.5a2.25 2.25 0 00-2.25 2.25v6a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25v-6a2.25 2.25 0 00-2.25-2.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L12 12.75l-5.25-6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15.75h6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75V4.5" />
  </svg>
);

export const ZeroRiskIcon: React.FC = () => (
  <svg {...featureIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
  </svg>
);

export const ProfitLockIcon: React.FC = () => (
  <svg {...featureIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

export const SmartLayeringIcon: React.FC = () => (
  <svg {...featureIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L12 15.25l5.571-3m0 0l4.179-2.25L17.571 12l-4.179 2.25M12 21.75l-5.571-3V9l5.571-3 5.571 3v9.75l-5.571 3z" />
  </svg>
);

export const SpreadFilterIcon: React.FC = () => (
  <svg {...featureIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.355 0-2.68.31-3.9.897C6.89 4.498 6 5.68 6 7v3.407c0 .546.224 1.054.594 1.424L12 17.25l5.406-5.419A2 2 0 0018 10.407V7c0-1.32-.89-2.502-2.1-3.103A9.011 9.011 0 0012 3zM3.75 7.5h16.5" />
  </svg>
);

export const AutoTrendIcon: React.FC = () => (
  <svg {...featureIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-5.23-4.27-9.5-9.5-9.5S.5 6.77.5 12s4.27 9.5 9.5 9.5 9.5-4.27 9.5-9.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 8.25L12 12l3.75 3.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75L12 12 8.25 8.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19.5V22.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.5V22.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 1.5V4.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 1.5V4.5" />
  </svg>
);

export const NewsProtectionIcon: React.FC = () => (
  <svg {...featureIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5" />
  </svg>
);

export const ManualPanelIcon: React.FC = () => (
  <svg {...featureIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>
);

export const BonusGuideIcon: React.FC = () => (
  <svg {...featureIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a2.25 2.25 0 01-2.25 2.25H5.25a2.25 2.25 0 01-2.25-2.25v-8.25M12 4.875A2.625 2.625 0 1012 10.125A2.625 2.625 0 0012 4.875zM12 11.25L21 11.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 11.25h9" />
  </svg>
);

export const CommissionIcon: React.FC = () => (
    <svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V6.375c0-.621.504-1.125 1.125-1.125h.375m18 3.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75m0 0h3.375c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-3.375m0 0c1.863 0 3.375 1.512 3.375 3.375s-1.512 3.375-3.375 3.375m0-6.75h-7.5c-1.863 0-3.375 1.512-3.375 3.375s1.512 3.375 3.375 3.375h7.5m0-6.75v6.75" />
    </svg>
);
export const RegisterIcon: React.FC = () => (
    <svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
);

export const ContactAdminIcon: React.FC = () => (
    <svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.362 2.088a3 3 0 01.354-2.825A3 3 0 017.5 9.75h9a3 3 0 012.646 1.513 3 3 0 01.354 2.825M15 21H9a2.25 2.25 0 01-2.25-2.25v-1.5a2.25 2.25 0 012.25-2.25h6a2.25 2.25 0 012.25 2.25v1.5A2.25 2.25 0 0115 21z" />
    </svg>
);

export const QuoteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={`w-8 h-8 text-pirus-blue/30 mb-4 ${className || ''}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.43 2.93c.25-.34.1-.79-.32-1a1.2 1.2 0 00-1.21.32A8.6 8.6 0 005.15 6H8a1 1 0 011 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1V7.5A4.5 4.5 0 016.5 3c1.3 0 2.5.58 3.93-.07zM16.5 3A4.5 4.5 0 0121 7.5V11a1 1 0 01-1 1h-5a1 1 0 01-1-1V7a1 1 0 011-1h2.85a8.6 8.6 0 00-3.75-3.75a1.2 1.2 0 00-1.21-.32c-.42.2-.57.65-.32 1 .4.54 1.22 1.24 2.43 2.12z" />
    </svg>
);

const navIconProps = {
    className: "w-6 h-6",
    strokeWidth: 2
};

export const ChevronLeftIcon: React.FC = () => (
    <svg {...navIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
);

export const ChevronRightIcon: React.FC = () => (
    <svg {...navIconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);