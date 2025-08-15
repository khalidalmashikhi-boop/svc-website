import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { EyeIcon, LightBulbIcon, StarIcon } from "@heroicons/react/24/outline";

const Home = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const sliderImages = [
    "/background/cav2.jpg",
    "/background/cfront.jpg",
    "/background/stud1.jpg",
    "/background/Gc4.jpg",
    "/background/gc1.jpg",
    "/background/gc2.jpg",
    "/background/stud.jpg",
    "/background/gc.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const goToPrev = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );

  const cards = [
    {
      icon: <EyeIcon className="w-12 h-12 text-blue-600" />,
      title: isArabic ? "الرؤية" : "Vision",
      desc: isArabic
        ? "تعليم وتدريب مهني نوعي يتواكب مع التنافسية وأهداف التنمية."
        : "High-quality vocational education aligned with competitiveness and development goals.",
    },
    {
      icon: <LightBulbIcon className="w-12 h-12 text-green-600" />,
      title: isArabic ? "الرسالة" : "Mission",
      desc: isArabic
        ? "تأهيل قوى عاملة وطنية بكفاءة عالية وتشجيع التعلم والابتكار."
        : "Qualifying national workforce with high competency, fostering learning and innovation.",
    },
    {
      icon: <StarIcon className="w-12 h-12 text-yellow-500" />,
      title: isArabic ? "القيم" : "Values",
      desc: isArabic
        ? "الجودة - الابتكار - الشراكة - الالتزام - التميز المهني."
        : "Quality - Innovation - Partnership - Commitment - Professional Excellence.",
    },
  ];

  const [posts] = useState([
    { id: 1, media_url: "/background/gc1.jpg" },
    { id: 2, media_url: "/background/gc2.jpg" },
    { id: 3, media_url: "/background/stud.jpg" },
  ]);

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto text-center">
      {/* ✅ شريط الصور العلوي */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-xl mb-10">
        {sliderImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {sliderImages.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60"
          aria-label="Previous Slide"
        >
          &#8592;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60"
          aria-label="Next Slide"
        >
          &#8594;
        </button>
      </div>

      {/* ✅ العنوان الرئيسي */}
      <h1 className="text-4xl font-bold mb-10">
        {isArabic
          ? "مرحبًا بكم في الكلية المهنية بصلالة"
          : "Welcome to Salalah Vocational College"}
      </h1>

      {/* ✅ بطاقات الرؤية والرسالة والقيم */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {cards.map((card, index) => (
          <Link
            to="/vision"
            key={index}
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
          >
            <div className="flex flex-col items-center gap-4">
              {card.icon}
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* ✅ كلمة مدير الكلية */}
      <section className="my-20 bg-white shadow-lg rounded-xl p-6 md:flex items-center gap-6 max-w-5xl mx-auto">
        <img
          src="/dr.png"
          alt="مدير الكلية"
          className="w-48 h-auto rounded-lg object-cover mx-auto md:mx-0"
        />
        <div className="mt-4 md:mt-0 text-right md:text-start">
          <h2 className="text-2xl font-bold mb-2">
            {isArabic ? "كلمة مدير الكلية" : "Message from the College Director"}
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {isArabic
              ? `عزيزي الزائر:
نرحب بك في موقع الكلية المهنية بصلالة والذي من خلاله نطمح إلى إيصال رسالة ورؤية الكلية إلى كافة المستفيدين من طلاب وأولياء أمور وشركائنا من القطاعين العام والخاص، كما نأمل أن تجدوا في هذه الصفحة البيانات المطلوبة بكل سهولـة ويسـر.

د. سعيد بن مسعود بن علي كشوب
مدير الكلية`
              : `Dear Visitor,
Welcome to the website of Salalah Vocational College. Through this platform, we aspire to deliver the college's mission and vision to all beneficiaries, including students, parents, and our partners from both the public and private sectors. We hope you will find the required information on this page easily and conveniently.

Dr. Said bin Masoud bin Ali Kashoob
College Director`}
          </p>
        </div>
      </section>

      {/* ✅ الأخبار */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6">
          {isArabic ? "آخر أخبار الكلية" : "Latest College News"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <img
              key={post.id}
              src={post.media_url}
              alt="خبر"
              className="rounded-lg shadow-md w-full object-cover h-72"
            />
          ))}
        </div>

        {/* ✅ زر حياة الطلاب */}
        <div className="mt-8">
          <Link
            to="/studentlife"
            className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold shadow hover:bg-indigo-700 transition"
          >
            {isArabic ? "تعرف على حياة الطلاب" : "Learn About Student Life"}
          </Link>
        </div>
      </section>

      {/* ✅ الفوتر */}
      <footer className="bg-gray-100 py-10 rounded-lg">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 flex-wrap">
          <img
            src="/logo.png1.png"
            alt="شعار الوزارة"
            className="h-28 object-contain shadow-lg transition-transform duration-300 hover:scale-90"
          />
          <img
            src="/logo.png.png"
            alt="شعار الكلية"
            className="h-28 object-contain shadow-lg transition-transform duration-300 hover:scale-90"
          />
          <img
            src="/forward.png"
            alt="رؤية عمان"
            className="h-28 object-contain shadow-lg transition-transform duration-300 hover:scale-90"
          />
        </div>

        <p className="mt-6 text-center text-gray-500 text-sm">
          &copy; 2025{" "}
          {isArabic ? "الكلية المهنية بصلالة" : "Salalah Vocational College"}
        </p>
      </footer>
    </div>
  );
};

export default Home;
