export const SITE = {
  name: 'آکای تراول',
  brand: 'Akay Travel',
  legalName: 'آژانس گردشگری آکای تراول',
  domain: 'https://year2026.ir',
  description:
    'آژانس گردشگری آکای تراول، متخصص تورهای رویدادهای ویژه ارمنستان؛ تور کریسمس، هالووین، وارداوار، جشنواره بادکنک و مراسم خاص در ایروان.',
  lang: 'fa',
  dir: 'rtl',
  phone: '04433465524',
  mobile: '09143403431',
  whatsapp: '989143403431',
  telegram: '989143403431',
  instagram: 'akay.iran.travel',
  instagramUrl: 'https://instagram.com/akay.iran.travel',
  email: 'sanat.abr@gmail.com',
  address: 'آذربایجان غربی، ارومیه، خ آزادگان، خ تیلا',
  founded: '2018',
} as const;

export const NAV = [
  { href: '/', label: 'خانه' },
  { href: '/tours', label: 'تورها' },
  { href: '/hotels', label: 'هتل‌ها' },
  { href: '/travel-guide', label: 'راهنمای سفر' },
  { href: '/blog', label: 'بلاگ' },
  { href: '/business-armenia', label: 'تجارت با ارمنستان' },
  { href: '/about', label: 'درباره ما' },
  { href: '/careers', label: 'همکاری با ما' },
  { href: '/contact', label: 'تماس' },
];

export interface TourMeta {
  slug: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  eventDate: string;
  duration: string;
  season: string;
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  keywords: string[];
}

export interface BlogMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  keywords: string[];
}

export const TOURS: TourMeta[] = [
  {
    slug: 'halloween-armenia-yerevan',
    title: 'تور هالووین ارمنستان ایروان',
    shortTitle: 'تور هالووین ایروان',
    excerpt:
      'تجربه شب‌های پرشور هالووین در باشگاه‌های ایروان همراه با تور فرهنگی و گشت‌های شهری؛ جشنواره‌ای مدرن در قلب ارمنستان.',
    eventDate: '۳۱ اکتبر',
    duration: '۴ شب / ۵ روز',
    season: 'پاییز',
    image: 'https://images.pexels.com/photos/5143168/pexels-photo-5143168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'حوالی هالووین با نورپردازی نئونی در یک باشگاه شبانه ایروان',
    gallery: [
      { src: 'https://images.pexels.com/photos/16206879/pexels-photo-16206879.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'افقی از شهر ایروان با کوه آرارات در پس‌زمینه' },
      { src: 'https://images.pexels.com/photos/34103986/pexels-photo-34103986.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'جوانان با لباس‌های فانتزی در جشن هالووین ایروان' },
      { src: 'https://images.pexels.com/photos/32404093/pexels-photo-32404093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'خیابان‌های پرشور ایروان در شب‌های هالووین' },
    ],
    keywords: ['تور هالووین ارمنستان', 'هالووین ایروان', 'تور هالووین ایروان'],
  },
  {
    slug: 'christmas-armenia-yerevan',
    title: 'تور کریسمس ارمنستان ایروان',
    shortTitle: 'تور کریسمس ایروان',
    excerpt:
      'کریسمس حواریون ارمنستان در ۶ ژانویه؛ مراسم باشکوه اچمیادزین، آیین تقدیس آب و شب‌های روشن ایروان در تور ویژه کریسمس آکای تراول.',
    eventDate: '۶ ژانویه',
    duration: '۵ شب / ۶ روز',
    season: 'زمستان',
    image: 'https://images.pexels.com/photos/15822284/pexels-photo-15822284.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'فضای شهری ایروان در شب‌های کریسمس با نورهای ستاره‌ای',
    gallery: [
      { src: 'https://images.pexels.com/photos/752484/pexels-photo-752484.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'نورپردازی کریسمس روی درختان ایروان' },
      { src: 'https://images.pexels.com/photos/35215765/pexels-photo-35215765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'میدان جمهوریه ایروان در روزهای کریسمس' },
      { src: 'https://images.pexels.com/photos/11885429/pexels-photo-11885429.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'صومعه ارمنی پوشیده با برف در فصل کریسمس' },
    ],
    keywords: ['تور کریسمس ارمنستان', 'کریسمس ایروان', 'تور کریسمس ایروان'],
  },
  {
    slug: 'january-armenia-yerevan',
    title: 'تور ژانویه ارمنستان ایروان',
    shortTitle: 'تور ژانویه ایروان',
    excerpt:
      'سفر زمستانه به ایروان در روزهای نوروز و عید کلیسای ارمنی؛ ترکیب مراسم ترندز و سرمای دل‌انگیز قفقاز در تور ژانویه.',
    eventDate: 'ژانویه',
    duration: '۴ شب / ۵ روز',
    season: 'زمستان',
    image: 'https://images.pexels.com/photos/12860923/pexels-photo-12860923.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'کوهستان‌های برفی ارمنستان در ماه ژانویه',
    gallery: [
      { src: 'https://images.pexels.com/photos/16206882/pexels-photo-16206882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'افقی برفی از ایروان با کوه آرارات' },
      { src: 'https://images.pexels.com/photos/752536/pexels-photo-752536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'تزئینات زمستانی و کریسمس در ایروان' },
      { src: 'https://images.pexels.com/photos/15338719/pexels-photo-15338719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'کلیسای تاریخی ارمنی در روزهای برفی ژانویه' },
    ],
    keywords: ['تور ژانویه ارمنستان', 'تور زمستانه ایروان', 'نوروز در ارمنستان'],
  },
  {
    slug: 'vardavar-water-festival-armenia',
    title: 'تور جشنواره وارداوار ارمنستان',
    shortTitle: 'تور وارداوار',
    excerpt:
      'جشنواره ملی آب ارمنستان؛ نبرد آبی سراسری در خیابان‌های ایروان با ریشه باستانی برای الهه آستغیک. تور تابستانی ویژه آکای تراول.',
    eventDate: '۹۸ روز پس از عید پاک',
    duration: '۴ شب / ۵ روز',
    season: 'تابستان',
    image: 'https://images.pexels.com/photos/35177004/pexels-photo-35177004.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'جشنواره آب با چپیدن آب در خیابان',
    gallery: [
      { src: 'https://images.pexels.com/photos/32268609/pexels-photo-32268609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'زنان در لباس سنتی در حال چپیدن آب در جشنواره وارداوار' },
      { src: 'https://images.pexels.com/photos/38881445/pexels-photo-38881445.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'کودکانی که با آب بازی می‌کنند در جشنواره ملی آب ارمنستان' },
      { src: 'https://images.pexels.com/photos/16206879/pexels-photo-16206879.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'نمای تابستانی شهر ایروان در روزهای جشنواره وارداوار' },
    ],
    keywords: ['تور وارداوار', 'جشنواره آب ارمنستان', 'وارداوار ایروان'],
  },
  {
    slug: 'balloon-festival-armenia-yerevan',
    title: 'تور جشنواره بادکنک ارمنستان ایروان',
    shortTitle: 'تور جشنواره بادکنک',
    excerpt:
      'جشنواره «ارمنستان را از آسمان کشف کن» در اکتبر؛ پروازهای بادکنک آب گرم بر فراز ایروان و دامنه‌های آرارات در تور پاییزی آکای تراول.',
    eventDate: 'اکتبر',
    duration: '۴ شب / ۵ روز',
    season: 'پاییز',
    image: 'https://images.pexels.com/photos/14379390/pexels-photo-14379390.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'بادکنک‌های رنگارنگ در آسمان آبی ایروان',
    gallery: [
      { src: 'https://images.pexels.com/photos/19326083/pexels-photo-19326083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'بادکنک‌های آب گرم در حال پرواز بر فراز ارمنستان' },
      { src: 'https://images.pexels.com/photos/9936441/pexels-photo-9936441.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'بادکنک‌های روشن‌شده در شب جشنواره ارمنستان' },
      { src: 'https://images.pexels.com/photos/16328596/pexels-photo-16328596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'افقی از ایروان با کوه‌های پوشیده برف' },
    ],
    keywords: ['تور جشنواره بادکنک ارمنستان', 'جشنواره بادکنک ایروان', 'پرواز بادکنک ارمنستان'],
  },
  {
    slug: 'special-ceremonies-armenia',
    title: 'تور مراسم خاص ارمنستان',
    shortTitle: 'تور مراسم خاص',
    excerpt:
      'تور سفارشی برای شرکت در مراسم خاص ارمنستان؛ آیین تبرک انگور، اعیاد فرهنگی و مذهبی و تجربه‌های متناسب با ذائقه شما در سراسر ارمنستان.',
    eventDate: 'سفارشی',
    duration: 'انعطاف‌پذیر',
    season: 'چهارفصل',
    image: 'https://images.pexels.com/photos/10922960/pexels-photo-10922960.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'چیدن انگور در تاکستان ارمنستان در آیین تبرک انگور',
    gallery: [
      { src: 'https://images.pexels.com/photos/27500678/pexels-photo-27500678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'دست‌چین انگور در تاکستان‌های ارمنستان' },
      { src: 'https://images.pexels.com/photos/35665429/pexels-photo-35665429.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'بازدید از صومعه گغارد در تور مراسم خاص' },
      { src: 'https://images.pexels.com/photos/36096774/pexels-photo-36096774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'کلیسای تاریخی تاتو در ارمنستان' },
    ],
    keywords: ['تور مراسم خاص ارمنستان', 'آیین تبرک انگور', 'تور فرهنگی ارمنستان'],
  },
];

export const BLOGS: BlogMeta[] = [
  {
    slug: 'best-time-to-travel-armenia',
    title: 'بهترین زمان سفر به ارمنستان',
    excerpt:
      'راهنمای فصلی کامل برای انتخاب بهترین زمان سفر به ارمنستان؛ از تابستان‌های ملایم تا زمستان‌های برفی و رویدادهای ویژه ایروان.',
    date: '۱۴۰۳/۰۸/۱۲',
    readTime: '۹ دقیقه',
    image: 'https://images.pexels.com/photos/17958099/pexels-photo-17958099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'منظره دره نوراوانک ارمنستان در تابستان',
    keywords: ['بهترین زمان سفر به ارمنستان', 'فصل سفر ارمنستان', 'سفر به ایروان'],
  },
  {
    slug: 'vardavar-water-festival-guide',
    title: 'راهنمای جشنواره وارداوار ارمنستان',
    excerpt:
      'هر آنچه باید درباره جشنواره ملی آب ارمنستان بدانید؛ ریشه باستانی، آداب و سنت‌های روز و نکات کاربردی برای شرکت در نبرد آبی ایروان.',
    date: '۱۴۰۳/۰۶/۲۰',
    readTime: '۸ دقیقه',
    image: 'https://images.pexels.com/photos/37133518/pexels-photo-37133518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'برپایی جشنواره آب با لباس سنتی در ارمنستان',
    keywords: ['راهنمای وارداوار', 'جشنواره آب ارمنستان', 'وارداوار ایروان'],
  },
  {
    slug: 'armenian-christmas-january-6',
    title: 'کریسمس ارمنی در ۶ ژانویه',
    excerpt:
      'چرا ارمنی‌ها کریسمس را در ۶ ژانویه جشن می‌گیرند؟ مراسم اچمیادزین، آیین تقدیس آب و تجربه سفر در روزهای کریسمس حواریون.',
    date: '۱۴۰۳/۱۰/۲۸',
    readTime: '۸ دقیقه',
    image: 'https://images.pexels.com/photos/752484/pexels-photo-752484.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'نورپردازی کریسمس در شب‌های زمستانی ایروان',
    keywords: ['کریسمس ارمنی', 'کریسمس ۶ ژانویه', 'سورپ ارتیاقین اچمیادزین'],
  },
  {
    slug: 'halloween-yerevan-guide',
    title: 'راهنمای هالووین در ایروان',
    excerpt:
      'شب‌های پرشور هالووین در ایروان؛ باشگاه‌ها، لباس‌ها، رویدادها و نکات کاربردی برای توریست‌های ایرانی در شب ۳۱ اکتبر.',
    date: '۱۴۰۳/۰۸/۲۸',
    readTime: '۷ دقیقه',
    image: 'https://images.pexels.com/photos/27595337/pexels-photo-27595337.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'اجرای فانتزی با لباس‌های رنگی در یک رویداد شبانه',
    keywords: ['هالووین ایروان', 'راهنمای هالووین ارمنستان', 'شب هالووین ایروان'],
  },
  {
    slug: 'armenia-balloon-festival-guide',
    title: 'راهنمای جشنواره بادکنک ارمنستان',
    excerpt:
      'راهنمای کامل جشنواره «ارمنستان را از آسمان کشف کن»؛ زمان برگزاری، محل پرواز، هزینه‌ها و نکات تجربه پرواز بادکنک بر فراز ایروان.',
    date: '۱۴۰۳/۰۷/۱۵',
    readTime: '۸ دقیقه',
    image: 'https://images.pexels.com/photos/6438534/pexels-photo-6438534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'بادکنک‌های رنگارنگ در حال پرواز در آسمان',
    keywords: ['جشنواره بادکنک ارمنستان', 'پرواز بادکنک ایروان', 'ارمنستان از آسمان'],
  },
  {
    slug: 'armenian-special-ceremonies-guide',
    title: 'راهنمای مراسم خاص ارمنستان',
    excerpt:
      'معرفی مهم‌ترین مراسم خاص ارمنستان؛ از تبرک انگور تا ترندز و اعیاد کلیسای حواریون، همراه با نکات شرکت در آیین‌ها.',
    date: '۱۴۰۳/۰۹/۰۵',
    readTime: '۹ دقیقه',
    image: 'https://images.pexels.com/photos/32618103/pexels-photo-32618103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'برداشت انگور در تاکستان ارمنستان',
    keywords: ['مراسم خاص ارمنستان', 'تبرک انگور', 'آیین‌های ارمنی'],
  },
];

export function tour(slug: string) {
  return TOURS.find((t) => t.slug === slug);
}
export function blog(slug: string) {
  return BLOGS.find((b) => b.slug === slug);
}

export interface HotelMeta {
  slug: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  starRating: number;
  district: string;
  image: string;
  imageAlt: string;
}

export const HOTELS: HotelMeta[] = [
  {
    slug: 'armenia-marriott-yerevan',
    title: 'هتل آرمنیا ماریوت ایروان',
    shortTitle: 'ماریوت ایروان',
    excerpt:
      'هتل ۵ ستاره ماریوت در قلب میدان جمهوریه ایروان؛ لوکس‌ترین انتخاب برای مسافران تجاری و توریستی با رستوران‌های بین‌المللی و اسپای مدرن.',
    starRating: 5,
    district: 'میدان جمهوریه',
    image: 'https://images.pexels.com/photos/14036253/pexels-photo-14036253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'لابی لوکس هتل ماریوت ایروان با نورپردازی مدرن',
  },
  {
    slug: 'grand-hotel-yerevan',
    title: 'هتل گرند ایروان',
    shortTitle: 'گرند ایروان',
    excerpt:
      'هتل ۵ ستاره گرند در منطقه کنترون ایروان؛ ترکیبی از معماری کلاسیک و امکانات مدرن با دسترسی آسان به مراکز خرید و رستوران‌ها.',
    starRating: 5,
    district: 'کنترون',
    image: 'https://images.pexels.com/photos/14011664/pexels-photo-14011664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'فضای داخلی باشکوه هتل گرند ایروان با چراغ‌های لوستر',
  },
  {
    slug: 'doubletree-by-hilton-yerevan',
    title: 'هتل دبل‌تری هیلتون ایروان',
    shortTitle: 'دبل‌تری هیلتون',
    excerpt:
      'هتل ۴ ستاره دبل‌تری هیلتون در مرکز شهر ایروان؛ کوکی معروف هیلتون، اتاق‌های مدرن و دسترسی پیاده به پارک‌های شهری.',
    starRating: 4,
    district: 'کنترون',
    image: 'https://images.pexels.com/photos/7821349/pexels-photo-7821349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'پذیرش مدرن هتل دبل‌تری هیلتون ایروان',
  },
  {
    slug: 'holiday-inn-yerevan-republic-square',
    title: 'هتل هالیدی‌این ایروان – میدان جمهوریه',
    shortTitle: 'هالیدی‌این ایروان',
    excerpt:
      'هتل ۴ ستاره هالیدی‌این در نزدیکی میدان جمهوریه ایروان؛ قیمت مناسب، اتاق‌های تمیز و دسترسی عالی به جاذبه‌های گردشگری.',
    starRating: 4,
    district: 'میدان جمهوریه',
    image: 'https://images.pexels.com/photos/6876590/pexels-photo-6876590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'پذیرش کلاسیک هتل هالیدی‌این ایروان',
  },
  {
    slug: 'tufenkian-historic-yerevan',
    title: 'هتل توفنکیان هیستوریک ایروان',
    shortTitle: 'توفنکیان',
    excerpt:
      'هتل بوتیک توفنکیان در نزدیکی ورنیساژ؛ معماری سنتی ارمنی، اتاق‌های منحصربه‌فرد و تجربه‌ای فرهنگی در قلب شهر قدیمی ایروان.',
    starRating: 4,
    district: 'ورنیساژ',
    image: 'https://images.pexels.com/photos/15621208/pexels-photo-15621208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'لابی دنج هتل بوتیک توفنکیان ایروان با صندلی‌های شیک',
  },
];

export const LINKS = {
  whatsapp: `https://wa.me/${SITE.whatsapp}`,
  telegram: `https://t.me/+${SITE.telegram}`,
  phoneCall: `tel:${SITE.phone}`,
  mobileCall: `tel:0${SITE.mobile}`,
  instagram: SITE.instagramUrl,
  email: `mailto:${SITE.email}`,
};
