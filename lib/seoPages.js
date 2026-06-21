// Programmatic SEO page definitions: service × location, and industry/solution pages.
// Each entry carries substantive, unique content (real scope + local context + matched
// case studies + tailored FAQ) to stay clear of thin/doorway-page penalties.

const STUDIO = "Cherrypick Studio";

// ---------------------------------------------------------------------------
// SERVICE × LOCATION
// English pages target the European English-speaking cluster (offshore value prop);
// Indonesian pages target the home market. Each page exists in a single locale.
// ---------------------------------------------------------------------------

export const serviceLocationPages = [
  // ---- Europe (en) ----
  {
    slug: "web-development-netherlands",
    locale: "en",
    service: "Web Development",
    location: "the Netherlands",
    eyebrow: "Web Development · Netherlands",
    h1: "Web Development Agency for the Netherlands",
    subtitle:
      "An offshore product team for Dutch startups and scale-ups — English-fluent, CET-overlapping, and shipping production-grade Next.js.",
    intro:
      "Cherrypick Studio is a digital product agency that builds fast, SEO-ready web applications for companies in the Netherlands. We work the way Dutch product teams do — direct communication, clear scope, and a working build every sprint — at competitive offshore rates without the Amsterdam agency price tag.",
    sections: [
      {
        heading: "Why Dutch companies work with an offshore studio",
        body: "The Netherlands has the highest English proficiency in the world and a dense startup ecosystem, but local engineering capacity is scarce and expensive. We extend your team with senior Next.js, React, and Node.js engineers who overlap your working day on Central European Time, communicate in fluent English, and integrate directly into your Slack, Linear, and GitHub.",
      },
      {
        heading: "What we build",
        body: "Marketing sites and headless commerce, SaaS dashboards and admin panels, customer portals, and internal tools. Every build ships on modern, maintainable foundations — Next.js App Router, TypeScript, Tailwind, and a CI/CD pipeline you own.",
      },
    ],
    scope: [
      "Next.js / React web applications",
      "Headless e-commerce & marketing sites",
      "SaaS dashboards & admin panels",
      "API & backend development (Node.js, Laravel)",
      "Performance, Core Web Vitals & technical SEO",
    ],
    faqs: [
      {
        q: "Do you work in our timezone?",
        a: "Yes. Our working hours overlap comfortably with Central European Time, so you get same-day responses and live standups with the team in the Netherlands.",
      },
      {
        q: "How do you handle communication in English?",
        a: "All of our engineers and designers work in fluent English — writing specs, leading calls, and documenting decisions. Language is never a friction point.",
      },
      {
        q: "What does it cost compared to a local Dutch agency?",
        a: "Because we're based in Indonesia, you get European-quality delivery at a meaningfully lower rate than an Amsterdam or Rotterdam agency, with no compromise on engineering standards.",
      },
    ],
    relatedPortfolio: ["termo-beton", "komerce", "kyoo"],
  },
  {
    slug: "web-development-amsterdam",
    locale: "en",
    service: "Web Development",
    location: "Amsterdam",
    eyebrow: "Web Development · Amsterdam",
    h1: "Web Development for Amsterdam Startups",
    subtitle:
      "Ship faster in one of Europe's busiest startup hubs with a senior offshore product team.",
    intro:
      "Amsterdam's startup scene moves quickly and hiring senior engineers locally is slow and costly. Cherrypick Studio gives Amsterdam founders a dedicated Next.js and React team that plugs into your roadmap, overlaps CET, and delivers a working build every sprint.",
    sections: [
      {
        heading: "Built for Amsterdam's pace",
        body: "From pre-seed MVPs to scale-up platform work, we help Amsterdam teams validate, launch, and iterate. You get product-minded engineers who care about UX and conversion, not just tickets.",
      },
      {
        heading: "Our stack",
        body: "Next.js App Router, TypeScript, Tailwind CSS, Node.js, and PostgreSQL — deployed on reliable cloud infrastructure with CI/CD you control.",
      },
    ],
    scope: [
      "MVP & product builds for startups",
      "Next.js / React web apps",
      "SaaS platforms & dashboards",
      "Conversion-focused marketing sites",
      "Technical SEO & performance",
    ],
    faqs: [
      {
        q: "Can you help us ship an MVP quickly?",
        a: "Yes — we specialise in getting startups from idea to a launchable, well-architected MVP in weeks, then iterating with you post-launch.",
      },
      {
        q: "Are you available for ongoing retainers?",
        a: "Yes. Many clients start with a project and move to a monthly retainer for continuous delivery.",
      },
    ],
    relatedPortfolio: ["komerce", "kyoo"],
  },
  {
    slug: "web-development-uk",
    locale: "en",
    service: "Web Development",
    location: "the UK",
    eyebrow: "Web Development · United Kingdom",
    h1: "Web Development Agency for the UK",
    subtitle:
      "A senior offshore product team for UK startups, agencies, and scale-ups.",
    intro:
      "Cherrypick Studio builds web applications for companies across the United Kingdom — from London startups to established SMEs. You get fluent-English engineers, working-hour overlap with GMT, and dependable delivery at offshore rates.",
    sections: [
      {
        heading: "A reliable delivery partner",
        body: "Whether you're a UK agency needing white-label engineering capacity or a founder building a product, we slot into your process and ship maintainable, well-tested code.",
      },
      {
        heading: "What we deliver",
        body: "Next.js and React applications, headless commerce, SaaS dashboards, and API development — all built for performance and search visibility.",
      },
    ],
    scope: [
      "Next.js / React web development",
      "White-label engineering for UK agencies",
      "SaaS & web app development",
      "Headless e-commerce",
      "API & backend (Node.js, Laravel)",
    ],
    faqs: [
      {
        q: "Do you offer white-label work for UK agencies?",
        a: "Yes — we work behind the scenes as your delivery team, with your branding and direct client communication if you prefer.",
      },
      {
        q: "How does the timezone work with the UK?",
        a: "Our hours overlap with GMT/BST through your working day, so collaboration is real-time, not asynchronous-only.",
      },
    ],
    relatedPortfolio: ["termo-beton", "komerce"],
  },
  {
    slug: "web-development-london",
    locale: "en",
    service: "Web Development",
    location: "London",
    eyebrow: "Web Development · London",
    h1: "Web Development for London Businesses",
    subtitle:
      "Senior Next.js and React delivery for London startups and scale-ups — without London rates.",
    intro:
      "London has Europe's largest tech market and some of its highest engineering costs. Cherrypick Studio gives London teams a dedicated, English-fluent product team that overlaps your working day and ships production-grade web apps at a fraction of local agency cost.",
    sections: [
      {
        heading: "Extend your London team",
        body: "We integrate into your existing workflow — standups, code review, and sprint planning — so you scale delivery without scaling headcount or burn.",
      },
      {
        heading: "Modern, maintainable builds",
        body: "Next.js App Router, TypeScript, Tailwind, and solid testing. You own the code and the pipeline from day one.",
      },
    ],
    scope: [
      "Next.js / React web apps",
      "SaaS dashboards & portals",
      "Headless commerce & marketing sites",
      "Technical SEO & Core Web Vitals",
      "Ongoing product retainers",
    ],
    faqs: [
      {
        q: "Why offshore instead of hiring in London?",
        a: "You get senior delivery faster and at lower cost, while keeping full ownership of code, roadmap, and IP.",
      },
    ],
    relatedPortfolio: ["kyoo", "komerce"],
  },
  {
    slug: "web-development-europe",
    locale: "en",
    service: "Web Development",
    location: "Europe",
    eyebrow: "Web Development · Europe",
    h1: "Offshore Web Development for Europe",
    subtitle:
      "One English-fluent product team serving the Netherlands, the UK, and the Nordics.",
    intro:
      "Cherrypick Studio is an offshore digital product agency serving companies across Europe. We build Next.js and React web applications for the Netherlands, the UK, Sweden, and Denmark — fluent English, CET-overlapping hours, and competitive rates.",
    sections: [
      {
        heading: "Built for European product teams",
        body: "From the Randstad to the Nordics, European companies choose us for senior engineering capacity that communicates clearly and delivers predictably.",
      },
      {
        heading: "Full-stack capability",
        body: "Web apps, SaaS platforms, e-commerce, mobile apps, and UI/UX design — a single partner across the product lifecycle.",
      },
    ],
    scope: [
      "Next.js / React web applications",
      "SaaS platforms & dashboards",
      "Headless e-commerce",
      "Mobile apps (React Native)",
      "UI/UX design & branding",
    ],
    faqs: [
      {
        q: "Which European markets do you serve?",
        a: "Primarily the Netherlands, the United Kingdom, Sweden, and Denmark — but we work with English-speaking teams across Europe.",
      },
      {
        q: "Do you handle GDPR-compliant builds?",
        a: "Yes. We build with privacy and data-protection requirements in mind and work with your DPO or counsel as needed.",
      },
    ],
    relatedPortfolio: ["termo-beton", "komerce", "kyoo", "gamemarket"],
  },
  // ---- Indonesia (id) ----
  {
    slug: "jasa-pembuatan-website-malang",
    locale: "id",
    service: "Web Development",
    location: "Malang",
    eyebrow: "Jasa Pembuatan Website · Malang",
    h1: "Jasa Pembuatan Website Profesional di Malang",
    subtitle:
      "Tim produk digital lokal Malang yang membangun website cepat, modern, dan SEO-friendly.",
    intro:
      "Cherrypick Studio adalah digital product agency berbasis di Malang yang membangun website bisnis, toko online, dan aplikasi web dengan teknologi modern. Kami membantu bisnis di Malang dan seluruh Indonesia tampil profesional di dunia digital.",
    sections: [
      {
        heading: "Kenapa memilih agency lokal Malang",
        body: "Sebagai tim yang berbasis di Malang, kami mudah diajak berdiskusi langsung, memahami pasar lokal, dan memberikan harga yang kompetitif. Setiap proyek dikerjakan dengan standar yang sama seperti yang kami berikan untuk klien internasional.",
      },
      {
        heading: "Apa yang kami bangun",
        body: "Website company profile, toko online (e-commerce), landing page, hingga aplikasi web custom — semuanya menggunakan Next.js dan React agar cepat, aman, dan mudah ditemukan di Google.",
      },
    ],
    scope: [
      "Website company profile",
      "Toko online / e-commerce",
      "Landing page & lead generation",
      "Aplikasi web custom (Next.js, React)",
      "SEO teknis & optimasi kecepatan",
    ],
    faqs: [
      {
        q: "Berapa biaya pembuatan website di Malang?",
        a: "Biaya bervariasi tergantung kebutuhan. Website company profile mulai dari Rp 5-15 juta, e-commerce mulai dari Rp 20-80 juta, dan aplikasi web custom dihitung per proyek. Konsultasi awal gratis.",
      },
      {
        q: "Berapa lama pengerjaannya?",
        a: "Website company profile umumnya 3-4 minggu, e-commerce 6-10 minggu. Kami berikan timeline yang jelas di awal proyek.",
      },
    ],
    relatedPortfolio: ["harwi", "komerce"],
  },
  {
    slug: "jasa-pembuatan-website-jakarta",
    locale: "id",
    service: "Web Development",
    location: "Jakarta",
    eyebrow: "Jasa Pembuatan Website · Jakarta",
    h1: "Jasa Pembuatan Website untuk Bisnis Jakarta",
    subtitle:
      "Partner pengembangan web untuk startup dan perusahaan di Jakarta.",
    intro:
      "Cherrypick Studio membantu bisnis di Jakarta membangun website dan aplikasi web yang cepat dan profesional. Meski berbasis di Malang, kami bekerja dengan banyak klien Jakarta secara remote dengan komunikasi yang lancar dan hasil yang terukur.",
    sections: [
      {
        heading: "Untuk skala bisnis Jakarta",
        body: "Dari startup yang butuh MVP hingga perusahaan yang butuh platform internal, kami menyesuaikan solusi dengan kebutuhan dan kecepatan bisnis Jakarta.",
      },
      {
        heading: "Teknologi modern",
        body: "Next.js, React, Node.js, dan PostgreSQL — fondasi yang cepat, aman, dan mudah dikembangkan seiring pertumbuhan bisnis Anda.",
      },
    ],
    scope: [
      "Website company profile & corporate",
      "E-commerce & marketplace",
      "Aplikasi web & SaaS",
      "Dashboard & sistem internal",
      "Integrasi API & backend",
    ],
    faqs: [
      {
        q: "Apakah bisa kerja remote dengan klien Jakarta?",
        a: "Tentu. Sebagian besar klien kami bekerja sepenuhnya remote dengan komunikasi rutin via WhatsApp, email, dan video call.",
      },
    ],
    relatedPortfolio: ["komerce", "kyoo"],
  },
  {
    slug: "jasa-pembuatan-aplikasi-mobile-indonesia",
    locale: "id",
    service: "Mobile App Development",
    location: "Indonesia",
    eyebrow: "Jasa Aplikasi Mobile · Indonesia",
    h1: "Jasa Pembuatan Aplikasi Mobile di Indonesia",
    subtitle:
      "Aplikasi iOS & Android dengan satu basis kode menggunakan React Native.",
    intro:
      "Cherrypick Studio mengembangkan aplikasi mobile untuk iOS dan Android menggunakan React Native. Satu basis kode untuk dua platform berarti pengembangan lebih efisien tanpa mengorbankan kualitas pengalaman pengguna.",
    sections: [
      {
        heading: "Efisien dengan React Native",
        body: "Dengan React Native, fitur Anda tersedia di iOS dan Android sekaligus, mempercepat waktu rilis dan menekan biaya pemeliharaan.",
      },
      {
        heading: "Dari ide hingga rilis di store",
        body: "Kami menangani desain UI/UX, pengembangan, pengujian, hingga proses publikasi ke App Store dan Google Play.",
      },
    ],
    scope: [
      "Aplikasi iOS & Android (React Native)",
      "Desain UI/UX mobile",
      "Integrasi API & backend",
      "Publikasi App Store & Google Play",
      "Pemeliharaan & pengembangan lanjutan",
    ],
    faqs: [
      {
        q: "Apakah satu aplikasi bisa untuk iOS dan Android?",
        a: "Ya. Dengan React Native, kami membangun satu basis kode yang berjalan di kedua platform, sehingga lebih hemat waktu dan biaya.",
      },
    ],
    relatedPortfolio: ["kyoo", "komerce"],
  },
];

// ---------------------------------------------------------------------------
// INDUSTRY / SOLUTION PAGES (bilingual — generated under both locales)
// ---------------------------------------------------------------------------

export const solutionPages = [
  {
    slug: "saas-development",
    eyebrow: { en: "Solution · SaaS", id: "Solusi · SaaS" },
    h1: {
      en: "SaaS Product Development",
      id: "Pengembangan Produk SaaS",
    },
    subtitle: {
      en: "From MVP to scale — multi-tenant SaaS platforms, dashboards, and admin panels.",
      id: "Dari MVP hingga skala besar — platform SaaS multi-tenant, dashboard, dan panel admin.",
    },
    intro: {
      en: "We design and build SaaS products end to end: authentication and billing, role-based dashboards, admin panels, and the data model underneath. Founders come to us to turn a validated idea into a production platform their customers rely on.",
      id: "Kami merancang dan membangun produk SaaS secara menyeluruh: autentikasi dan penagihan, dashboard berbasis peran, panel admin, hingga model data di baliknya. Founder mempercayakan kami untuk mengubah ide tervalidasi menjadi platform produksi yang andal.",
    },
    scope: {
      en: [
        "Multi-tenant architecture & auth",
        "Role-based dashboards & admin panels",
        "Billing & subscription integration",
        "Analytics & reporting",
        "Scalable APIs and data models",
      ],
      id: [
        "Arsitektur multi-tenant & autentikasi",
        "Dashboard & panel admin berbasis peran",
        "Integrasi billing & langganan",
        "Analitik & pelaporan",
        "API & model data yang skalabel",
      ],
    },
    faqs: {
      en: [
        {
          q: "Can you build our SaaS MVP and then scale it?",
          a: "Yes. We build a well-architected MVP first, then iterate toward scale without a costly rewrite, because the foundations are right from the start.",
        },
      ],
      id: [
        {
          q: "Bisakah membangun MVP SaaS lalu menskalakannya?",
          a: "Bisa. Kami membangun MVP dengan arsitektur yang tepat sejak awal, sehingga bisa diskalakan tanpa perlu menulis ulang sistem.",
        },
      ],
    },
    relatedPortfolio: ["komerce", "kyoo", "termo-beton"],
  },
  {
    slug: "ecommerce-development",
    eyebrow: { en: "Solution · E-commerce", id: "Solusi · E-commerce" },
    h1: {
      en: "E-commerce Development",
      id: "Pengembangan E-commerce",
    },
    subtitle: {
      en: "Fast, conversion-focused online stores and custom commerce platforms.",
      id: "Toko online yang cepat dan fokus konversi, serta platform commerce custom.",
    },
    intro: {
      en: "We build e-commerce experiences that load fast, rank well, and convert — from headless storefronts to fully custom marketplaces with payment and logistics integrations.",
      id: "Kami membangun pengalaman e-commerce yang cepat, mudah ditemukan di Google, dan mengonversi — dari storefront headless hingga marketplace custom dengan integrasi pembayaran dan logistik.",
    },
    scope: {
      en: [
        "Headless & custom storefronts",
        "Marketplace platforms",
        "Payment gateway integration",
        "Inventory & order management",
        "Performance & SEO optimisation",
      ],
      id: [
        "Storefront headless & custom",
        "Platform marketplace",
        "Integrasi payment gateway",
        "Manajemen stok & pesanan",
        "Optimasi performa & SEO",
      ],
    },
    faqs: {
      en: [
        {
          q: "Can you integrate crypto or alternative payments?",
          a: "Yes — we've built marketplaces with crypto payment integration and security testing, alongside conventional gateways.",
        },
      ],
      id: [
        {
          q: "Bisakah integrasi pembayaran crypto atau alternatif?",
          a: "Bisa — kami pernah membangun marketplace dengan integrasi pembayaran crypto dan pengujian keamanan, selain gateway konvensional.",
        },
      ],
    },
    relatedPortfolio: ["gamemarket", "komerce"],
  },
  {
    slug: "company-profile-website",
    eyebrow: { en: "Solution · Company Profile", id: "Solusi · Company Profile" },
    h1: {
      en: "Company Profile & Marketing Websites",
      id: "Website Company Profile & Marketing",
    },
    subtitle: {
      en: "Brand-led sites that build trust and generate leads.",
      id: "Website yang membangun kepercayaan merek dan menghasilkan leads.",
    },
    intro: {
      en: "A company profile site is often a customer's first impression. We design and build fast, polished marketing sites with clear messaging, strong visual identity, and lead-generation built in.",
      id: "Website company profile sering menjadi kesan pertama pelanggan. Kami merancang dan membangun website marketing yang cepat dan rapi dengan pesan yang jelas, identitas visual yang kuat, dan lead generation di dalamnya.",
    },
    scope: {
      en: [
        "Brand-led visual design",
        "Conversion-focused copy structure",
        "Lead capture & contact flows",
        "Blog & content architecture",
        "Technical SEO foundations",
      ],
      id: [
        "Desain visual berbasis brand",
        "Struktur copy fokus konversi",
        "Lead capture & alur kontak",
        "Arsitektur blog & konten",
        "Fondasi SEO teknis",
      ],
    },
    faqs: {
      en: [
        {
          q: "Can you also handle the branding and copy?",
          a: "Yes — we offer brand identity and content structure alongside development, so the whole site feels cohesive.",
        },
      ],
      id: [
        {
          q: "Apakah bisa sekalian branding dan copywriting?",
          a: "Bisa — kami menyediakan brand identity dan struktur konten bersama pengembangan, agar seluruh website terasa menyatu.",
        },
      ],
    },
    relatedPortfolio: ["harwi"],
  },
  {
    slug: "queue-reservation-system",
    eyebrow: { en: "Solution · Queue & Reservation", id: "Solusi · Antrian & Reservasi" },
    h1: {
      en: "Queue & Reservation Systems",
      id: "Sistem Antrian & Reservasi",
    },
    subtitle: {
      en: "Digital queue, appointment, and reservation platforms for service businesses.",
      id: "Platform antrian digital, janji temu, dan reservasi untuk bisnis jasa.",
    },
    intro: {
      en: "We build digital queue and reservation systems that remove waiting-room friction — appointment calendars, real-time queue status, notifications, and admin dashboards for staff.",
      id: "Kami membangun sistem antrian dan reservasi digital yang menghilangkan friksi ruang tunggu — kalender janji temu, status antrian real-time, notifikasi, dan dashboard admin untuk staf.",
    },
    scope: {
      en: [
        "Appointment & calendar booking",
        "Real-time queue management",
        "Customer notifications",
        "Staff & admin dashboards",
        "Reporting & analytics",
      ],
      id: [
        "Pemesanan janji temu & kalender",
        "Manajemen antrian real-time",
        "Notifikasi pelanggan",
        "Dashboard staf & admin",
        "Pelaporan & analitik",
      ],
    },
    faqs: {
      en: [
        {
          q: "Do you have experience with queue systems?",
          a: "Yes — we've delivered queue, appointment, and reservation platforms with admin dashboards for service businesses.",
        },
      ],
      id: [
        {
          q: "Apakah punya pengalaman dengan sistem antrian?",
          a: "Ya — kami telah membangun platform antrian, janji temu, dan reservasi lengkap dengan dashboard admin untuk bisnis jasa.",
        },
      ],
    },
    relatedPortfolio: ["kyoo", "termo-beton"],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getServiceLocationPage(slug, locale) {
  return (
    serviceLocationPages.find((p) => p.slug === slug && p.locale === locale) ??
    null
  );
}

export function getServiceLocationParams() {
  return serviceLocationPages.map((p) => ({ locale: p.locale, slug: p.slug }));
}

export function getSolutionPage(slug) {
  return solutionPages.find((p) => p.slug === slug) ?? null;
}

export function getSolutionParams() {
  return ["en", "id"].flatMap((locale) =>
    solutionPages.map((p) => ({ locale, slug: p.slug }))
  );
}

export { STUDIO };
