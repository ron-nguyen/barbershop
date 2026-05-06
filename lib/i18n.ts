export type Locale = "en" | "vi";
export const LOCALES: Locale[] = ["en", "vi"];
export const DEFAULT_LOCALE: Locale = "vi";

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      blog: "Blog",
      contact: "Contact",
    },
    common: {
      bookNow: "Book Now",
      bookAppointment: "Book Appointment",
      learnMore: "Learn More",
      readMore: "Read More",
      readArticle: "Read Article",
      ourServices: "Our Services",
      viewAllServices: "View All Services",
      allArticles: "All Articles",
      contactUs: "Contact Us",
      getInTouch: "Get In Touch",
      ourStory: "Read Our Story",
      claimOffer: "Claim Offer",
      callNow: "Call Now",
      sendRequest: "Send Request",
      subscribe: "Subscribe",
      subscribed: "Subscribed",
      includes: "Includes",
      menu: "Menu",
      price: "Price",
      yourEmail: "your@email.com",
    },
    shop: {
      tagline: "Cut. Shave. Style.",
      since: "Since 1999",
      heritage: "Heritage Barber Parlor",
    },
    home: {
      heroEyebrow: "Premium Barber Parlor",
      heroTitle: "Where Tradition Meets the Modern Gentleman",
      heroSubtitle:
        "Master barbers, premium tools, and the most relaxed chair in town. Reserve your spot at RIN Hair Studio and step into the ritual.",
      aboutEyebrow: "About RIN Hair Studio",
      aboutTitle: "A Heritage Barber Parlor, Reimagined",
      aboutDescription:
        "From the floor tile to the leather chair, every detail is designed to slow you down. Our barbers train for years before earning a chair — and you'll feel it the moment you sit down.",
      aboutBullets: [
        "Walk-ins welcome, appointments preferred.",
        "Premium products from local and international houses.",
        "Complimentary tea and a comfortable lounge.",
      ],
      servicesEyebrow: "Services",
      servicesTitle: "What We Do, Done Properly",
      servicesDescription:
        "A curated menu of grooming combos and individual services, each performed by a specialist.",
      teamEyebrow: "The Team",
      teamTitle: "Meet Our Master Barbers",
      teamDescription:
        "Every barber at RIN Hair Studio has earned their chair through years of training and craft.",
      testimonialsEyebrow: "Testimonials",
      testimonialsTitle: "What Our Clients Say",
      blogEyebrow: "From The Blog",
      blogTitle: "Notes From The Chair",
      ctaEyebrow: "Reserve Your Chair",
      ctaTitle: "Look Sharp. Feel Sharper.",
      ctaSubtitle:
        "Book your appointment in less than a minute. Walk in, walk out a better-dressed version of yourself.",
    },
    services: {
      heroEyebrow: "Price List",
      heroTitle: "Services & Pricing",
      heroSubtitle:
        "Every cut, shave and treatment is performed by a specialist trained in classic barbering technique.",
      combosEyebrow: "Signature Combos",
      combosTitle: "Curated Combo Experiences",
      combosDescription:
        "Three combos to suit every gentleman — from a quick refresh to the full grooming ritual.",
      individualEyebrow: "À La Carte",
      individualTitle: "Individual Services",
      individualDescription:
        "Pick exactly what you need. All services performed by our experienced team.",
      ritualEyebrow: "The Ritual",
      ritualTitle: "What To Expect In The Chair",
      step: "Step",
      ritualSteps: [
        {
          t: "Consultation",
          d: "We discuss the look you want and the look that suits you.",
        },
        { t: "Wash", d: "A scalp-massaging shampoo to set the stage." },
        {
          t: "Cut & Style",
          d: "Scissor and clipper work, finished with a styled blowout.",
        },
        {
          t: "Finish",
          d: "Hot towel, aftershave balm, and a tea for the road.",
        },
      ],
      contactCtaTitle: "Don't see what you need?",
      contactCtaSubtitle:
        "Get in touch — our barbers are happy to design a custom grooming package for weddings, photoshoots and corporate events.",
    },
    about: {
      heroEyebrow: "About",
      heroTitle: "Our Story",
      heroSubtitle:
        "A heritage barber parlor built on craft, conversation and properly hot towels.",
      storyEyebrow: "Since 1999",
      storyTitle: "Built By Barbers, For Gentlemen",
      storyDescription:
        "RIN Hair Studio was founded on a quiet street in Tân Bình. Years later we run a full chair lineup and a small lounge, but the philosophy hasn't changed.",
      storyParagraph:
        "Every cut is preceded by a conversation. Every shave finishes with a hot towel. Every guest leaves with a card to book the next one. These small rituals — done well, every day — are what make a barber parlor a barber parlor.",
      valuesEyebrow: "What We Stand For",
      valuesTitle: "Three Values, In The Chair Every Day",
      values: [
        {
          t: "Craft",
          d: "We hire barbers obsessed with their craft. Every barber re-trains every year.",
        },
        {
          t: "Hospitality",
          d: "From the tea to the conversation, hospitality is part of the service.",
        },
        {
          t: "Heritage",
          d: "We honor the traditions of barbering — the apron, the strop, the towel — without nostalgia.",
        },
      ],
      teamEyebrow: "The Team",
      teamTitle: "The People Behind The Chairs",
      testimonialsEyebrow: "Words From Our Clients",
      testimonialsTitle: "Trusted By Gentlemen Across The City",
      ctaTitle: "Come See Us In Person",
      ctaSubtitle: "Drop by for a tea, take a tour, or book a chair.",
    },
    blog: {
      heroEyebrow: "Notes From The Chair",
      heroTitle: "The RIN Journal",
      heroSubtitle:
        "Grooming guides, trend reports and the stories behind every cut.",
      featured: "Featured",
      latestEyebrow: "Latest Articles",
      latestTitle: "Recent From The Journal",
      newsletterTitle: "Subscribe To The Journal",
      newsletterSubtitle:
        "Monthly grooming tips, new services and exclusive offers — direct to your inbox.",
      readMore: "Read More",
      by: "by",
    },
    contact: {
      heroEyebrow: "Get In Touch",
      heroTitle: "Reserve Your Chair",
      heroSubtitle:
        "Book an appointment, ask a question, or drop in for a tea. We're here for it.",
      detailsEyebrow: "Contact Details",
      detailsTitle: "Visit Us, Call Us, Write Us",
      detailsDescription:
        "We answer the phone during shop hours. Online requests get a reply within one business day.",
      visit: "Visit Us",
      call: "Call",
      email: "Email",
      hours: "Hours",
      facebook: "Facebook",
      formTitle: "Request an Appointment",
      formSubtitle:
        "Fill in your details and we'll be in touch within one business day.",
      fullName: "Full Name",
      phone: "Phone",
      service: "Service",
      preferredDate: "Preferred Date",
      message: "Message",
      formSuccess:
        "Thank you! Your request has been recorded. We'll reach out shortly.",
      faqEyebrow: "FAQ",
      faqTitle: "Common Questions, Answered",
      faqs: [
        {
          q: "Do you take walk-ins?",
          a: "Yes. We always reserve a chair for walk-ins, but appointments are recommended for weekends.",
        },
        {
          q: "How early should I arrive?",
          a: "Five minutes early is perfect. Grab a tea and settle in.",
        },
        {
          q: "Do you offer gift cards?",
          a: "Yes — both physical and digital gift cards in any amount, available in-store.",
        },
        {
          q: "Is there parking nearby?",
          a: "Plenty of street parking on Trần Văn Quang and the surrounding alleys.",
        },
      ],
    },
    hours: [
      { day: "Mon — Fri", time: "9:00 AM — 9:00 PM" },
      { day: "Saturday", time: "10:00 AM — 8:00 PM" },
      { day: "Sunday", time: "11:00 AM — 6:00 PM" },
    ],
    stats: [
      { value: "20+", label: "Years Experience" },
      { value: "12K", label: "Happy Clients" },
      { value: "8", label: "Master Barbers" },
      { value: "30+", label: "Awards Won" },
    ],
    footer: {
      tagline:
        "Cut. Shave. Style. Premium grooming for modern gentlemen.",
      navigate: "Navigate",
      hours: "Hours",
      contact: "Contact",
      rights: "All rights reserved.",
      crafted: "Crafted with care in Tân Bình, HCMC.",
    },
    language: { en: "English", vi: "Vietnamese", switch: "Language" },
  },
  vi: {
    nav: {
      home: "Trang chủ",
      services: "Dịch vụ",
      about: "Giới thiệu",
      blog: "Tin tức",
      contact: "Liên hệ",
    },
    common: {
      bookNow: "Đặt lịch",
      bookAppointment: "Đặt lịch hẹn",
      learnMore: "Tìm hiểu thêm",
      readMore: "Đọc tiếp",
      readArticle: "Đọc bài viết",
      ourServices: "Dịch vụ",
      viewAllServices: "Xem tất cả dịch vụ",
      allArticles: "Tất cả bài viết",
      contactUs: "Liên hệ",
      getInTouch: "Liên hệ ngay",
      ourStory: "Câu chuyện của chúng tôi",
      claimOffer: "Nhận ưu đãi",
      callNow: "Gọi ngay",
      sendRequest: "Gửi yêu cầu",
      subscribe: "Đăng ký",
      subscribed: "Đã đăng ký",
      includes: "Bao gồm",
      menu: "Bảng giá",
      price: "Giá",
      yourEmail: "email@cua-ban.com",
    },
    shop: {
      tagline: "Cắt. Cạo. Tạo kiểu.",
      since: "Từ 1999",
      heritage: "Barber Parlor Truyền Thống",
    },
    home: {
      heroEyebrow: "Barber Parlor Cao Cấp",
      heroTitle: "Nơi Truyền Thống Gặp Gỡ Phong Cách Hiện Đại",
      heroSubtitle:
        "Đội ngũ barber bậc thầy, dụng cụ cao cấp và chiếc ghế thư giãn nhất trong khu phố. Đặt lịch tại RIN Hair Studio và trải nghiệm nghi thức chăm sóc trọn vẹn.",
      aboutEyebrow: "Về RIN Hair Studio",
      aboutTitle: "Barber Parlor Cổ Điển, Tinh Tế",
      aboutDescription:
        "Từ sàn nhà đến chiếc ghế da, mỗi chi tiết được thiết kế để bạn chậm lại. Đội ngũ barber rèn luyện nhiều năm trước khi nhận ghế — và bạn sẽ cảm nhận điều đó ngay khi ngồi xuống.",
      aboutBullets: [
        "Hoan nghênh khách walk-in, ưu tiên đặt lịch trước.",
        "Sản phẩm cao cấp trong và ngoài nước.",
        "Trà miễn phí, không gian thoải mái.",
      ],
      servicesEyebrow: "Dịch vụ",
      servicesTitle: "Chăm Sóc Đúng Chuẩn",
      servicesDescription:
        "Combo và dịch vụ lẻ được tuyển chọn, mỗi dịch vụ thực hiện bởi chuyên gia.",
      teamEyebrow: "Đội ngũ",
      teamTitle: "Gặp Đội Ngũ Barber Bậc Thầy",
      teamDescription:
        "Mỗi barber tại RIN Hair Studio đều dành nhiều năm rèn luyện trước khi nhận ghế.",
      testimonialsEyebrow: "Cảm nhận",
      testimonialsTitle: "Khách Hàng Nói Gì Về Chúng Tôi",
      blogEyebrow: "Từ Tin Tức",
      blogTitle: "Câu Chuyện Từ Ghế Cắt",
      ctaEyebrow: "Đặt Ghế Của Bạn",
      ctaTitle: "Sắc Sảo. Tự Tin.",
      ctaSubtitle:
        "Đặt lịch chỉ trong một phút. Bước vào, bước ra với một phiên bản chỉn chu hơn.",
    },
    services: {
      heroEyebrow: "Bảng giá",
      heroTitle: "Dịch Vụ & Giá",
      heroSubtitle:
        "Mỗi dịch vụ cắt, cạo và chăm sóc đều được thực hiện bởi chuyên gia với kỹ thuật barber cổ điển.",
      combosEyebrow: "Combo đặc trưng",
      combosTitle: "Trải Nghiệm Combo Tuyển Chọn",
      combosDescription:
        "Ba combo phù hợp với mọi quý ông — từ refresh nhanh đến nghi thức chăm sóc trọn vẹn.",
      individualEyebrow: "Dịch vụ lẻ",
      individualTitle: "Dịch Vụ Lẻ",
      individualDescription:
        "Chọn đúng dịch vụ bạn cần. Tất cả thực hiện bởi đội ngũ giàu kinh nghiệm.",
      ritualEyebrow: "Quy trình",
      ritualTitle: "Trải Nghiệm Trên Ghế Cắt",
      step: "Bước",
      ritualSteps: [
        {
          t: "Tư vấn",
          d: "Trao đổi về kiểu tóc bạn muốn và kiểu phù hợp với bạn.",
        },
        { t: "Gội đầu", d: "Gội đầu massage da đầu để khởi đầu nhẹ nhàng." },
        {
          t: "Cắt & Tạo kiểu",
          d: "Cắt bằng kéo và tông đơ, hoàn thiện bằng sấy tạo kiểu.",
        },
        {
          t: "Hoàn thiện",
          d: "Khăn nóng, balm sau cạo và một tách trà cho hành trình tiếp theo.",
        },
      ],
      contactCtaTitle: "Không thấy dịch vụ bạn cần?",
      contactCtaSubtitle:
        "Liên hệ với chúng tôi — đội ngũ barber sẵn sàng thiết kế gói chăm sóc riêng cho cưới hỏi, chụp ảnh và sự kiện doanh nghiệp.",
    },
    about: {
      heroEyebrow: "Về chúng tôi",
      heroTitle: "Câu Chuyện Của Chúng Tôi",
      heroSubtitle:
        "Một barber parlor cổ điển xây dựng từ tay nghề, sự kết nối và những chiếc khăn nóng đúng chuẩn.",
      storyEyebrow: "Từ 1999",
      storyTitle: "Tạo Bởi Barber, Dành Cho Quý Ông",
      storyDescription:
        "RIN Hair Studio ra đời trên một con phố yên tĩnh ở Tân Bình. Nhiều năm sau, chúng tôi có một dàn ghế đầy đủ và phòng chờ nhỏ, nhưng triết lý vẫn không đổi.",
      storyParagraph:
        "Mỗi lần cắt đều bắt đầu bằng một cuộc trò chuyện. Mỗi lần cạo đều kết thúc bằng khăn nóng. Mỗi vị khách rời đi đều cầm theo tấm thẻ đặt lịch lần sau. Những nghi thức nhỏ — làm tốt mỗi ngày — chính là điều biến một tiệm cắt tóc thành một barber parlor đúng nghĩa.",
      valuesEyebrow: "Giá trị cốt lõi",
      valuesTitle: "Ba Giá Trị, Hiện Diện Mỗi Ngày",
      values: [
        {
          t: "Tay nghề",
          d: "Chúng tôi tuyển những barber đam mê nghề. Mỗi barber tái đào tạo hàng năm.",
        },
        {
          t: "Hiếu khách",
          d: "Từ tách trà đến cuộc trò chuyện, hiếu khách là một phần của dịch vụ.",
        },
        {
          t: "Truyền thống",
          d: "Chúng tôi tôn vinh các giá trị của nghề barber — tạp dề, dao cạo, khăn nóng — mà không hoài cổ.",
        },
      ],
      teamEyebrow: "Đội ngũ",
      teamTitle: "Những Người Đứng Sau Mỗi Chiếc Ghế",
      testimonialsEyebrow: "Khách hàng nói",
      testimonialsTitle: "Được Tin Cậy Bởi Quý Ông Khắp Thành Phố",
      ctaTitle: "Đến Gặp Chúng Tôi Trực Tiếp",
      ctaSubtitle: "Ghé qua một tách trà, tham quan tiệm hoặc đặt một chiếc ghế.",
    },
    blog: {
      heroEyebrow: "Câu chuyện từ ghế cắt",
      heroTitle: "Nhật Ký RIN",
      heroSubtitle:
        "Hướng dẫn chăm sóc, xu hướng và câu chuyện đằng sau mỗi kiểu tóc.",
      featured: "Bài nổi bật",
      latestEyebrow: "Bài viết mới nhất",
      latestTitle: "Mới Nhất Từ Nhật Ký",
      newsletterTitle: "Đăng Ký Nhận Tin",
      newsletterSubtitle:
        "Mẹo chăm sóc hàng tháng, dịch vụ mới và ưu đãi độc quyền — gửi thẳng đến hộp thư của bạn.",
      readMore: "Đọc tiếp",
      by: "bởi",
    },
    contact: {
      heroEyebrow: "Liên hệ",
      heroTitle: "Đặt Ghế Của Bạn",
      heroSubtitle:
        "Đặt lịch, đặt câu hỏi hoặc ghé qua dùng trà. Chúng tôi luôn sẵn sàng.",
      detailsEyebrow: "Thông tin liên hệ",
      detailsTitle: "Ghé Tiệm, Gọi Hoặc Nhắn Tin",
      detailsDescription:
        "Chúng tôi nghe điện thoại trong giờ mở cửa. Tin nhắn online được phản hồi trong một ngày làm việc.",
      visit: "Ghé tiệm",
      call: "Gọi",
      email: "Email",
      hours: "Giờ mở cửa",
      facebook: "Facebook",
      formTitle: "Yêu Cầu Đặt Lịch",
      formSubtitle:
        "Điền thông tin và chúng tôi sẽ liên hệ trong một ngày làm việc.",
      fullName: "Họ và tên",
      phone: "Số điện thoại",
      service: "Dịch vụ",
      preferredDate: "Ngày mong muốn",
      message: "Lời nhắn",
      formSuccess:
        "Cảm ơn bạn! Yêu cầu của bạn đã được ghi nhận. Chúng tôi sẽ liên hệ ngay.",
      faqEyebrow: "FAQ",
      faqTitle: "Câu Hỏi Thường Gặp",
      faqs: [
        {
          q: "Tiệm có nhận khách walk-in không?",
          a: "Có. Chúng tôi luôn dành ghế cho khách walk-in, nhưng nên đặt lịch trước cho cuối tuần.",
        },
        {
          q: "Tôi nên đến sớm bao lâu?",
          a: "Sớm năm phút là vừa đủ. Lấy một tách trà và thư giãn.",
        },
        {
          q: "Có bán thẻ quà tặng không?",
          a: "Có — thẻ vật lý và thẻ điện tử với mọi mệnh giá, có sẵn tại tiệm.",
        },
        {
          q: "Có chỗ đậu xe không?",
          a: "Nhiều chỗ đậu xe trên Trần Văn Quang và các con hẻm xung quanh.",
        },
      ],
    },
    hours: [
      { day: "T2 — T6", time: "9:00 — 21:00" },
      { day: "Thứ 7", time: "10:00 — 20:00" },
      { day: "Chủ nhật", time: "11:00 — 18:00" },
    ],
    stats: [
      { value: "20+", label: "Năm kinh nghiệm" },
      { value: "12K", label: "Khách hàng hài lòng" },
      { value: "8", label: "Barber bậc thầy" },
      { value: "30+", label: "Giải thưởng" },
    ],
    footer: {
      tagline: "Cắt. Cạo. Tạo kiểu. Chăm sóc cao cấp cho quý ông hiện đại.",
      navigate: "Điều hướng",
      hours: "Giờ mở cửa",
      contact: "Liên hệ",
      rights: "Đã đăng ký bản quyền.",
      crafted: "Tận tâm tại Tân Bình, TP. HCM.",
    },
    language: { en: "Tiếng Anh", vi: "Tiếng Việt", switch: "Ngôn ngữ" },
  },
} as const;

export type Translations = (typeof translations)[Locale];
