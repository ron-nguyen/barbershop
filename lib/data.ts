export type LText = { en: string; vi: string };

export type NavKey = "home" | "services" | "about" | "blog" | "contact";
export const NAV: { key: NavKey; href: string }[] = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "about", href: "/about" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
];

export const SHOP = {
  name: "RIN Hair Studio",
  shortName: "RIN",
  phone: "0767397114",
  phoneDisplay: "076 739 7114",
  email: "hello@rinhairstudio.com",
  facebook: "https://facebook.com/Rin1999barber",
  facebookHandle: "@Rin1999barber",
  address: {
    en: "2 Tran Van Quang St., Ward 10, Tan Binh District, Ho Chi Minh City",
    vi: "2 Trần Văn Quang, Phường 10, Tân Bình, TP. HCM",
  } as LText,
  social: {
    facebook: "https://facebook.com/Rin1999barber",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
};

export type Combo = {
  id: string;
  name: LText;
  price: string;
  badge: LText;
  steps: LText[];
  image: string;
  featured?: boolean;
};

export const COMBOS: Combo[] = [
  {
    id: "combo1",
    name: { en: "Combo 1", vi: "Combo 1" },
    price: "80K",
    badge: { en: "Quick Refresh", vi: "Refresh nhanh" },
    steps: [
      { en: "Consultation", vi: "Tư vấn" },
      { en: "Haircut", vi: "Cắt tóc" },
      { en: "Face & beard shave", vi: "Cạo mặt, râu" },
      { en: "Hair rinse", vi: "Xả sạch tóc" },
      { en: "Blow-dry, wax & style", vi: "Sấy vuốt sáp, tạo kiểu" },
    ],
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "combo2",
    name: { en: "Combo 2", vi: "Combo 2" },
    price: "100K",
    badge: { en: "Most Popular", vi: "Phổ biến nhất" },
    featured: true,
    steps: [
      { en: "Consultation", vi: "Tư vấn" },
      { en: "Haircut", vi: "Cắt tóc" },
      { en: "Face & beard shave", vi: "Cạo mặt, râu" },
      { en: "Face wash", vi: "Rửa mặt" },
      { en: "Face massage", vi: "Massage mặt" },
      { en: "Relaxing shampoo", vi: "Gội đầu thư giãn" },
      { en: "Blow-dry, wax & style", vi: "Sấy vuốt sáp, tạo kiểu" },
    ],
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "combo3",
    name: { en: "Combo 3", vi: "Combo 3" },
    price: "130K",
    badge: { en: "Full Ritual", vi: "Trọn nghi thức" },
    steps: [
      { en: "Consultation", vi: "Tư vấn" },
      { en: "Haircut", vi: "Cắt tóc" },
      { en: "Face & beard shave", vi: "Cạo mặt, râu" },
      { en: "Face wash", vi: "Rửa mặt" },
      { en: "Face massage", vi: "Massage mặt" },
      { en: "Exfoliation", vi: "Tẩy tế bào chết" },
      { en: "Blackhead extraction", vi: "Hút mụn" },
      { en: "Face mask", vi: "Đắp mặt nạ" },
      { en: "Relaxing shampoo", vi: "Gội đầu thư giãn" },
      { en: "Blow-dry, wax & style", vi: "Sấy vuốt sáp, tạo kiểu" },
    ],
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80",
  },
];

export type IndividualService = { id: string; name: LText; price: string };

export const INDIVIDUAL_SERVICES: IndividualService[] = [
  { id: "shave", name: { en: "Face & beard shave", vi: "Cạo mặt, râu" }, price: "25K" },
  { id: "blackhead", name: { en: "Blackhead removal", vi: "Lột mụn" }, price: "30K" },
  { id: "wash-wax", name: { en: "Shampoo & wax styling", vi: "Gội đầu, vuốt sáp" }, price: "40K" },
  { id: "ear", name: { en: "Ear cleaning", vi: "Ráy tai" }, price: "40K" },
  { id: "kid-cut", name: { en: "Kids haircut", vi: "Cắt tóc kid" }, price: "50K" },
  { id: "haircut", name: { en: "Haircut", vi: "Cắt tóc" }, price: "65K" },
  { id: "bleach", name: { en: "Hair bleach (1 session)", vi: "Tẩy tóc 1 lần" }, price: "150K" },
  { id: "side-press", name: { en: "Side press", vi: "Ép side" }, price: "170K" },
  { id: "black-cover", name: { en: "Black dye / gray cover", vi: "Nhuộm đen, phủ bạc" }, price: "170K" },
  { id: "straighten", name: { en: "Hair straightening", vi: "Duỗi tóc" }, price: "270K" },
  { id: "fashion-color", name: { en: "Fashion color", vi: "Nhuộm màu thời trang" }, price: "290K" },
  { id: "volume-perm", name: { en: "Volume perm", vi: "Uốn phồng tạo nếp" }, price: "290K" },
  { id: "curl-perm", name: { en: "Curl perm", vi: "Uốn con sâu" }, price: "370K" },
  { id: "premlock", name: { en: "Premlock perm", vi: "Uốn Premlock" }, price: "590K" },
];

export type Barber = {
  id: string;
  name: string;
  role: LText;
  bio: LText;
  image: string;
  socials: { instagram?: string; facebook?: string };
};

export const BARBERS: Barber[] = [
  {
    id: "rin",
    name: "Anh RIN",
    role: { en: "Master Barber & Founder", vi: "Master Barber & Founder" },
    bio: {
      en: "20+ years sculpting iconic looks. RIN founded the studio to keep classic barbering alive in Tân Bình.",
      vi: "Hơn 20 năm tay nghề. Anh RIN sáng lập studio để gìn giữ nghề barber cổ điển tại Tân Bình.",
    },
    image:
      "https://images.unsplash.com/photo-1542327897-d73f4005b533?auto=format&fit=crop&w=700&q=80",
    socials: { instagram: "#", facebook: "#" },
  },
  {
    id: "minh",
    name: "Minh Nguyễn",
    role: { en: "Senior Stylist", vi: "Stylist cấp cao" },
    bio: {
      en: "Specialist in modern fades and textured tops. Trained in Saigon and Seoul.",
      vi: "Chuyên về fade hiện đại và tạo phồng. Đào tạo tại Sài Gòn và Seoul.",
    },
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80",
    socials: { instagram: "#" },
  },
  {
    id: "duy",
    name: "Duy Trần",
    role: { en: "Razor Expert", vi: "Chuyên gia dao cạo" },
    bio: {
      en: "A devoted disciple of the straight razor. Smoothest shave in Tân Bình.",
      vi: "Đam mê dao cạo thẳng. Dịch vụ cạo mượt nhất Tân Bình.",
    },
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=80",
    socials: { facebook: "#" },
  },
  {
    id: "khanh",
    name: "Khánh Lê",
    role: { en: "Color Specialist", vi: "Chuyên gia màu" },
    bio: {
      en: "Couture salon eye for barbering: gray blending and bold color statements.",
      vi: "Tinh tế của salon couture: phủ bạc và nhuộm màu nổi bật.",
    },
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=700&q=80",
    socials: { instagram: "#", facebook: "#" },
  },
];

export type Testimonial = {
  id: string;
  name: string;
  role: LText;
  quote: LText;
  avatar: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Hùng Phạm",
    role: { en: "Loyal Customer", vi: "Khách quen" },
    quote: {
      en: "Best barber parlor in District Tân Bình. Anh RIN nails my fade every single visit.",
      vi: "Tiệm tốt nhất Tân Bình. Anh RIN cắt fade chuẩn mỗi lần.",
    },
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "t2",
    name: "Thanh Lê",
    role: { en: "Regular", vi: "Khách thường xuyên" },
    quote: {
      en: "Walking into RIN feels like stepping into a different era. Premium service every visit.",
      vi: "Bước vào RIN như bước sang một không gian khác. Dịch vụ cao cấp, lần nào cũng vậy.",
    },
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "t3",
    name: "Đức Trần",
    role: { en: "Groom", vi: "Chú rể" },
    quote: {
      en: "Booked the team for my wedding party. Professional, on time, flawless cuts.",
      vi: "Mình đặt cả đội cho ngày cưới. Chuyên nghiệp, đúng giờ, kiểu tóc hoàn hảo.",
    },
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
];

export type BlogPost = {
  id: string;
  slug: string;
  title: LText;
  excerpt: LText;
  date: string;
  author: string;
  category: LText;
  image: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    slug: "five-cuts-2026",
    title: {
      en: "Five Men's Cuts That Will Define 2026",
      vi: "Năm Kiểu Tóc Nam Định Hình 2026",
    },
    excerpt: {
      en: "From the textured French crop to the modern mullet, here are the cuts our barbers can't stop recommending.",
      vi: "Từ French crop tạo phồng đến mullet hiện đại — đây là những kiểu barber của RIN khuyên chọn.",
    },
    date: "Apr 22, 2026",
    author: "Anh RIN",
    category: { en: "Trends", vi: "Xu hướng" },
    image:
      "https://images.unsplash.com/photo-1521490878406-bbf456cfd13a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "b2",
    slug: "beard-care-guide",
    title: {
      en: "The Definitive Guide to Beard Care",
      vi: "Cẩm Nang Chăm Sóc Râu Toàn Tập",
    },
    excerpt: {
      en: "Wash, condition, oil, comb. A simple ritual that transforms a scruffy beard into a signature feature.",
      vi: "Gội, dưỡng, oil, chải. Nghi thức đơn giản biến bộ râu xuề xòa thành đặc trưng cá nhân.",
    },
    date: "Apr 14, 2026",
    author: "Duy Trần",
    category: { en: "Grooming", vi: "Chăm sóc" },
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "b3",
    slug: "straight-razor-shave",
    title: {
      en: "Why a Straight-Razor Shave Still Matters",
      vi: "Vì Sao Dao Cạo Thẳng Vẫn Quan Trọng",
    },
    excerpt: {
      en: "There's no closer shave, and there's no better excuse to slow down for thirty quiet minutes.",
      vi: "Không có cách cạo nào sạch hơn, và không có lý do nào hợp lý hơn để chậm lại 30 phút.",
    },
    date: "Apr 02, 2026",
    author: "Minh Nguyễn",
    category: { en: "Heritage", vi: "Truyền thống" },
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "b4",
    slug: "groom-prep",
    title: {
      en: "A Groom's 30-Day Pre-Wedding Grooming Plan",
      vi: "Kế Hoạch 30 Ngày Chăm Sóc Trước Cưới",
    },
    excerpt: {
      en: "What to do four weeks out, two weeks out, the day before. Don't let the photos catch you unprepared.",
      vi: "Bốn tuần trước, hai tuần trước, ngày hôm trước. Đừng để bộ ảnh cưới bắt gặp bạn không chuẩn bị.",
    },
    date: "Mar 26, 2026",
    author: "Khánh Lê",
    category: { en: "Lifestyle", vi: "Phong cách" },
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
  },
];

export type Brand = { id: string; name: string };
export const BRANDS: Brand[] = [
  { id: "b1", name: "PROUD" },
  { id: "b2", name: "AURELIO" },
  { id: "b3", name: "MERIDIAN" },
  { id: "b4", name: "ATELIER" },
  { id: "b5", name: "REUZEL" },
  { id: "b6", name: "VAULT" },
];

export type Promo = {
  id: string;
  title: LText;
  description: LText;
  badge: LText;
  image: string;
};

export const PROMOS: Promo[] = [
  {
    id: "p1",
    title: { en: "First Visit — 20% Off", vi: "Lần Đầu — Giảm 20%" },
    description: {
      en: "New to RIN Hair Studio? Mention this offer on your first visit and get 20% off any service.",
      vi: "Lần đầu đến RIN? Nhắc ưu đãi này khi đến và nhận giảm 20% mọi dịch vụ.",
    },
    badge: { en: "New Client", vi: "Khách mới" },
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "p2",
    title: { en: "Father & Son Saturdays", vi: "Cha & Con Thứ Bảy" },
    description: {
      en: "Bring your son in on a Saturday and the second cut is half price. Make a tradition of it.",
      vi: "Đưa con đến vào thứ Bảy — cắt thứ hai giảm 50%. Biến thành truyền thống của hai cha con.",
    },
    badge: { en: "Weekend", vi: "Cuối tuần" },
    image:
      "https://images.unsplash.com/photo-1521322800607-8c38375eef04?auto=format&fit=crop&w=1200&q=80",
  },
];
