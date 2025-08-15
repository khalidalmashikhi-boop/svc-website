import React from 'react';
import { useTranslation } from 'react-i18next';
import './Vision.css';

const Vision = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {isArabic ? 'الرؤية والرسالة' : 'Vision and Mission'}
      </h1>

      {/* Vision Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          {isArabic ? 'الرؤية' : 'Vision'}
        </h2>
        <p className="leading-relaxed text-lg">
          {isArabic
            ? 'تعليم وتدريب مهني نوعي يوفر قوى عاملة وطنية ذات كفاءة عالية تتواكب مع التنافسية ومتطلبات مجتمع المعرفة وأهداف التنمية الحديثة والمستدامة.'
            : 'Providing high-quality vocational education and training to produce a national workforce with high efficiency, aligned with competitiveness, the knowledge society, and the goals of modern and sustainable development.'}
        </p>
      </section>

      {/* Mission Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          {isArabic ? 'الرسالة' : 'Mission'}
        </h2>
        <p className="leading-relaxed text-lg">
          {isArabic
            ? 'تأهيل قوى عاملة وطنية ذات كفاءة عالية بمختلف المستويات والمؤهلات المهنية من خلال منظومة تعليمية وتدريبية حديثة متكاملة محفزة تشجع التعلم المستمر والإبتكار والعمل الريادي والشراكة وبما يتماشى مع احتياجات سوق العمل.'
            : 'Qualifying a national workforce of high competence at various levels and professional qualifications through a modern, integrated, and stimulating educational and training system that encourages continuous learning, innovation, entrepreneurship, and partnership in line with labor market needs.'}
        </p>
      </section>
    </div>
  );
};

export default Vision;
