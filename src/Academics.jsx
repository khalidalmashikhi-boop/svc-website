import React from "react";
import { useTranslation } from "react-i18next";

const Academics = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const professionalPrograms = [
    {
      en: "Interior Design",
      ar: "التصميم الداخلي",
    },
    {
      en: "Business Studies",
      ar: "الدراسات التجارية",
    },
    {
      en: "Electronics Engineering",
      ar: "هندسة الإلكترونيات",
    },
    {
      en: "Electrical Engineering",
      ar: "الهندسة الكهربائية",
    },
    {
      en: "Marine Food Quality Control",
      ar: "ضبط جودة الأغذية البحرية",
    },
  ];

  const vocationalPrograms = [
    {
      en: "Health & Beauty Care",
      ar: "العناية بالصحة والجمال",
    },
    {
      en: "Welding & Metal Fabrication",
      ar: "اللحام وتصنيع المعادن",
    },
    {
      en: "Air Conditioning & Refrigeration Engineering",
      ar: "هندسة التكييف والتبريد",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {isArabic ? "البرامج الأكاديمية" : "Academics"}
      </h1>

      {/* الدبلوم المهني */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
          {isArabic
            ? "برامج الدبلوم المهني"
            : "Professional Diploma Programs"}
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          {professionalPrograms.map((program, index) => (
            <li key={index}>
              {isArabic
                ? `${program.ar} – ${program.en}`
                : `${program.en} – ${program.ar}`}
            </li>
          ))}
        </ul>
      </section>

      {/* التدريب المهني */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
          {isArabic
            ? "برامج التدريب المهني"
            : "Vocational Training Programs"}
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          {vocationalPrograms.map((program, index) => (
            <li key={index}>
              {isArabic
                ? `${program.ar} – ${program.en}`
                : `${program.en} – ${program.ar}`}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Academics;
