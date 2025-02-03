import { FaRegCircleQuestion } from "react-icons/fa6";

const faqs = [
  {
    question: "چگونه می‌توانم بلیط هواپیما را به صورت آنلاین رزرو کنم؟",
    answer:
      "به آسانی می‌توانید با مراجعه به وب سایت ما و انتخاب مبدا، مقصد، تاریخ سفر و تعداد مسافران، بلیط خود را رزرو کنید. سپس می‌توانید از بین پروازهای مختلف ایرلاین‌ها و کلاس‌های پروازی مختلف، گزینه مورد نظر خود را انتخاب کرده و مراحل پرداخت را طی کنید.",
  },
  {
    question: "تفاوت بلیط سیستمی و چارتر چیست؟",
    answer:
      "بله، با احراز هویت دو مرحله‌ای و سیستم‌های امنیتی پیشرفته، سرمایه شما در امنیت کامل است.",
  },
  {
    question: "چطور از چت‌بات استفاده کنم؟",
    answer: "بعد از ثبت‌نام، به داشبورد برید و چت‌بات رو فعال کنید.",
  },
  {
    question: "آیا امکان لغو اشتراک پریمیوم وجود دارد؟",
    answer: "بله، هر زمان که بخواید می‌تونید اشتراک خودتون رو لغو کنید.",
  },
];

const Faq = () => {
  return (
    <div className="flex flex-col gap-10 mx-32 p-4 mb-20">
      <h2 className="desktop:text-xl xs:text-xl text-black font-bold flex items-center gap-2">
        <FaRegCircleQuestion className="text-[gold]" size={20} />
        سوالات متداول
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow gap-3  bg-slate-100"
          >
            <input
              type="radio"
              name="my-accordion"
              id={`faq-item-${index}`}
              defaultChecked
            />
            <div className="collapse-title text-base font-medium flex gap-2 items-center text-gray-600">
              <FaRegCircleQuestion className="text-[#9333ea]" />

              {faq.question}
            </div>
            <div className="collapse-content text-base text-gray-500">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
