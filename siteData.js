// ============================================================
//  siteData.js – Single source of truth for all site content
//  Edit values here → changes reflect across the whole site.
// ============================================================

export const siteData = {

  // ── Stats (Hero section) ──────────────────────────────────
  stats: [
    { num: "200+", labelEn: "Players",    labelAr: "لاعبين" },
    { num: "12",   labelEn: "Rounds",     labelAr: "جولات" },
    { num: "5K",   labelEn: "Prize Pool", labelAr: "جائزة كبرى", prefix: "EGP " },
  ],

  // ── Schedule / Timeline ───────────────────────────────────
  schedule: [
    {
      date:    "June 1",
      titleEn: "Registration Opens",
      titleAr: "فتح التسجيل",
      descEn:  "Sign up and submit your payment to secure your spot.",
      descAr:  "سجل وادفع رسوم المشاركة لتأمين مكانك.",
    },
    {
      date:    "June 20",
      titleEn: "Registration Closes",
      titleAr: "إغلاق التسجيل",
      descEn:  "Last chance to register. No late entries accepted.",
      descAr:  "آخر فرصة للتسجيل. لا يُقبل التسجيل المتأخر.",
    },
    {
      date:    "July 5",
      titleEn: "Tournament Begins",
      titleAr: "انطلاق البطولة",
      descEn:  "Round 1 kicks off – may the best player win!",
      descAr:  "انطلاق الجولة الأولى – فليفز الأفضل!",
    },
    {
      date:    "July 12",
      titleEn: "Grand Final & Awards",
      titleAr: "النهائي الكبير والجوائز",
      descEn:  "Champions crowned, prizes awarded, legends made.",
      descAr:  "تتويج الأبطال وتسليم الجوائز وصناعة الأساطير.",
    },
  ],

  // ── Prizes ────────────────────────────────────────────────
  prizes: [
    {
      rank:    "2nd",
      icon:    "🥈",
      nameEn:  "Runner-Up",
      nameAr:  "المركز الثاني",
      amount:  "EGP 1,500",
      extraEn: "+ Silver Medal + Certificate",
      extraAr: "+ ميدالية فضية + شهادة",
      tier:    "silver",
    },
    {
      rank:    "1st",
      icon:    "🥇",
      nameEn:  "Champion",
      nameAr:  "البطل",
      amount:  "EGP 3,000",
      extraEn: "+ Trophy + Certificate + Title",
      extraAr: "+ كأس + شهادة + لقب",
      tier:    "gold",
      crown:   true,
    },
    {
      rank:    "3rd",
      icon:    "🥉",
      nameEn:  "Third Place",
      nameAr:  "المركز الثالث",
      amount:  "EGP 200",
      extraEn: "+ Bronze Medal + Certificate",
      extraAr: "+ ميدالية برونزية + شهادة",
      tier:    "bronze",
    },
  ],

  // ── FAQ ───────────────────────────────────────────────────
  faq: [
    {
      questionEn: "Who can participate?",
      questionAr: "من يمكنه المشاركة؟",
      answerEn:   "Anyone who loves chess! The tournament is open to all ages and skill levels.",
      answerAr:   "أي شخص يحب الشطرنج! البطولة مفتوحة لجميع الأعمار والمستويات.",
    },
    {
      questionEn: "What is the registration fee?",
      questionAr: "كم رسوم التسجيل؟",
      answerEn:   "Registration fee details are provided upon sign-up. Payment is via Vodafone Cash.",
      answerAr:   "تفاصيل رسوم التسجيل تُقدَّم عند التسجيل. الدفع عبر فودافون كاش.",
    },
    {
      questionEn: "Is a Chess ID mandatory?",
      questionAr: "هل رقم الشطرنج إلزامي؟",
      answerEn:   "No, Chess ID is optional. You can still participate without one.",
      answerAr:   "لا، رقم الشطرنج اختياري. يمكنك المشاركة بدونه.",
    },
    {
      questionEn: "How will I be notified?",
      questionAr: "كيف سيتم إخطاري؟",
      answerEn:   "Once registered, you'll receive a confirmation. Updates are posted on our social channels.",
      answerAr:   "بعد التسجيل ستتلقى تأكيدًا. يتم نشر التحديثات على قنواتنا الاجتماعية.",
    },
  ],

  // ── Contact ───────────────────────────────────────────────
  contact: {
    facebook:  "https://www.facebook.com/traveller.tweet",
    whatsapp:  "https://wa.me/201060789814",
    phone:     "+20 10 60789814",
    vodafone:  "+20 10 60789814",
    email:     "info@travTweet.com",
  },

};
