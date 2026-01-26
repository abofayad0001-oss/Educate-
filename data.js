/* ======================================================
   EduCore Scholarships Data
   25 Scholarships - Full Detailed Data
   ====================================================== */

const scholarshipsData = [

/* ===================== 1 ===================== */
{
  id: "turkey-government",
  title: "منحة الحكومة التركية",
  country: "تركيا",
  countryCode: "tr",
  flag: "assets/flags/tr.png",
  degree: "بكالوريوس / ماجستير / دكتوراه",
  funded: "تمويل كامل",
  image: "https://tse3.mm.bing.net/th/id/OIP.NBYNCAWtSQw5quBJ8cIS0AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  description: "منحة الحكومة التركية من أشهر المنح العالمية الممولة بالكامل للطلاب الدوليين في مختلف التخصصات.",
  benefits: [
    "إعفاء كامل من الرسوم الدراسية",
    "راتب شهري",
    "سكن جامعي مجاني",
    "تأمين صحي",
    "تذكرة سفر",
    "سنة لغة تركية"
  ],
  requirements: [
    "شهادة دراسية معتمدة",
    "جواز سفر ساري",
    "خطاب نية",
    "سيرة ذاتية",
    "شهادة لغة (إن وجدت)"
  ]
},

/* ===================== 2 ===================== */
{
  id: "russia-government",
  title: "منحة الحكومة الروسية",
  country: "روسيا",
  countryCode: "ru",
  flag: "assets/flags/ru.png",
  degree: "بكالوريوس / ماجستير / دكتوراه",
  funded: "تمويل كامل",
  image: "https://tse1.mm.bing.net/th/id/OIP.dAG3zZ3y-lf8TzV2lsl5ugHaFA?rs=1&pid=ImgDetMain&o=7&rm=3",
  description: "منحة الحكومة الروسية توفر فرص دراسة مجانية في الجامعات الروسية مع دعم حكومي.",
  benefits: [
    "إعفاء من الرسوم الدراسية",
    "سكن جامعي مدعوم",
    "سنة تحضيرية لغة روسية",
    "تأمين صحي"
  ],
  requirements: [
    "شهادة الثانوية أو الجامعة",
    "جواز سفر",
    "كشف درجات",
    "ملف طبي"
  ]
},

/* ===================== 3 ===================== */
{
  id: "china-government",
  title: "منحة الحكومة الصينية",
  country: "الصين",
  countryCode: "cn",
  flag: "assets/flags/cn.png",
  degree: "بكالوريوس / ماجستير / دكتوراه",
  funded: "تمويل كامل",
  image: "https://i.servimg.com/u/f40/12/60/84/01/2110.jpg",
  description: "منحة CSC الصينية من أكبر المنح العالمية وتغطي الدراسة والمعيشة بالكامل.",
  benefits: [
    "رسوم دراسية كاملة",
    "راتب شهري",
    "سكن جامعي",
    "تأمين صحي",
    "سنة لغة"
  ],
  requirements: [
    "شهادة دراسية",
    "جواز سفر",
    "خطة دراسية",
    "خطابات توصية"
  ]
},

/* ===================== 4 ===================== */
{
  id: "daad-germany",
  title: "منحة DAAD",
  country: "ألمانيا",
  countryCode: "de",
  flag: "assets/flags/de.png",
  degree: "ماجستير / دكتوراه",
  funded: "تمويل كامل",
  image: "https://th.bing.com/th/id/OIP.Ey11KBsY08TLZV-O8YOerAHaEc?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  description: "منحة DAAD الألمانية مخصصة للطلاب الدوليين للدراسة والبحث في ألمانيا.",
  benefits: [
    "راتب شهري",
    "تأمين صحي",
    "بدل سفر",
    "دورات لغة ألمانية"
  ],
  requirements: [
    "شهادة جامعية",
    "خبرة أكاديمية",
    "لغة إنجليزية أو ألمانية"
  ]
},

/* ===================== 5 ===================== */
{
  id: "chevening-uk",
  title: "منحة تشيفنينغ",
  country: "بريطانيا",
  countryCode: "gb",
  flag: "assets/flags/gb.png",
  degree: "ماجستير",
  funded: "تمويل كامل",
  image: "https://tse1.mm.bing.net/th/id/OIP.MYVJpiq3Obe4DRSBU29UegHaDh?rs=1&pid=ImgDetMain&o=7&rm=3",
  description: "منحة تشيفنينغ البريطانية تهدف لإعداد قادة المستقبل من جميع أنحاء العالم.",
  benefits: [
    "رسوم دراسية كاملة",
    "راتب شهري",
    "تذكرة سفر",
    "دعم مهني"
  ],
  requirements: [
    "شهادة جامعية",
    "خبرة سنتين",
    "إجادة اللغة الإنجليزية"
  ]
},

/* ===================== 6 ===================== */
{
  id: "romania-government",
  title: "منحة الحكومة الرومانية",
  country: "رومانيا",
  countryCode: "ro",
  flag: "assets/flags/ro.png",
  degree: "بكالوريوس / ماجستير / دكتوراه",
  funded: "تمويل كامل",
  image: "https://png.pngtree.com/background/20210716/original/pngtree-romania-wavy-flag-image-background-picture-image_1335422.jpg",
  description: "منحة دراسية ممولة بالكامل من الحكومة الرومانية للطلاب الدوليين.",
  benefits: [
    "رسوم دراسية مجانية",
    "سكن",
    "راتب شهري",
    "سنة لغة"
  ],
  requirements: [
    "شهادة دراسية",
    "جواز سفر",
    "ملف أكاديمي"
  ]
},

/* ===================== 7 ===================== */
{
  id: "qatar-hamad",
  title: "منحة جامعة حمد بن خليفة",
  country: "قطر",
  countryCode: "qa",
  flag: "assets/flags/qa.png",
  degree: "ماجستير / دكتوراه",
  funded: "تمويل كامل",
  image: "https://cdn.alromaizan.com/image/upload/v1679132325/media/blog/si-lets-celebrate-qatar-national-day-with-traditional-jewellery.webp",
  benefits: [
    "رسوم كاملة",
    "راتب شهري",
    "سكن",
    "تأمين صحي"
  ],
  requirements: [
    "شهادة جامعية",
    "سيرة ذاتية",
    "مقابلة"
  ]
},

/* ===================== 8 ===================== */
{
  id: "canada-government",
  title: "منحة الحكومة الكندية",
  country: "كندا",
  countryCode: "ca",
  flag: "assets/flags/ca.png",
  degree: "بكالوريوس / ماجستير",
  funded: "تمويل جزئي",
  image: "https://th.bing.com/th/id/OIP.Sk-EHSJwkOsORXxKkR5aoQHaEb?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  description: "منح حكومية كندية لدعم الطلاب الدوليين في الجامعات الكندية.",
  benefits: [
    "دعم مالي",
    "تصريح عمل",
    "تأمين صحي"
  ],
  requirements: [
    "قبول جامعي",
    "لغة إنجليزية أو فرنسية"
  ]
},

/* ===================== 9 ===================== */
{
  id: "japan-mext",
  title: "منحة MEXT اليابانية",
  country: "اليابان",
  countryCode: "jp",
  flag: "assets/flags/jp.png",
  degree: "بكالوريوس / ماجستير / دكتوراه",
  funded: "تمويل كامل",
  image: "https://tse2.mm.bing.net/th/id/OIP.I5nZ-e0HcRYJ0d5BtBOf9AHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
  description: "منحة الحكومة اليابانية ممولة بالكامل عبر وزارة التعليم.",
  benefits: [
    "رسوم دراسية",
    "راتب شهري",
    "سكن",
    "تذكرة سفر"
  ],
  requirements: [
    "شهادة دراسية",
    "اختبارات قبول"
  ]
},

/* ===================== 10 ===================== */
{
  id: "hungary-stipendium",
  title: "منحة ستبنديوم هنغاريكوم",
  country: "المجر",
  countryCode: "hu",
  flag: "assets/flags/hu.png",
  degree: "بكالوريوس / ماجستير / دكتوراه",
  funded: "تمويل كامل",
  image: "https://tse4.mm.bing.net/th/id/OIP.n6BGtUFh3ujW7LwiI8yrzgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
  description: "منحة مجرية ممولة بالكامل للطلاب الدوليين.",
  benefits: [
    "رسوم كاملة",
    "راتب شهري",
    "سكن",
    "تأمين صحي"
  ],
  requirements: [
    "شهادة دراسية",
    "لغة إنجليزية"
  ]
}
/* ====== استكمال حتى 25 منحة سيتم في الرسالة التالية ====== */
];

/* ======================================================
   End of data.js
   ====================================================== */


