import React from "react";

const StudentLife = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">حياة الطلاب</h1>
      <p className="text-lg leading-relaxed text-center">
        اكتشف كيف تسهم الأنشطة الطلابية في تطوير مهاراتك وبناء مجتمع طلابي فعال.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">الأنشطة الرياضية</h2>
          <p>بطولات داخلية، كرة قدم، كرة طاولة، جيم ومرافق رياضية.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">الأنشطة الثقافية</h2>
          <p>مسابقات، ندوات، أمسيات شعرية، ومسرح طلابي.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">الرحلات والفعاليات</h2>
          <p>رحلات خارجية، أيام مفتوحة، فعاليات مجتمعية.</p>
        </div>
      </div>
    </div>
  );
};

export default StudentLife;
