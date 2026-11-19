import { ProjectItem, SkillCategory, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: "Jeremy Alexander",
  role: "Software Engineer | Web Developer & Systems Analyst",
  tagline: "Lulusan D4 Teknik Informatika Politeknik Caltex Riau dengan fokus pada Software Engineering, Web Development (PHP), Database Management, Quality Assurance, serta implementasi Machine Learning & AI.",
  bio: "Lulusan D4 Teknik Informatika Politeknik Caltex Riau dengan fokus pada Software Engineering. Berpengalaman dalam siklus pengembangan aplikasi end-to-end, mulai dari Systems Analysis, perancangan database (DBMS), hingga implementasi Web Development dengan PHP (Laravel & CodeIgniter). Terbiasa dengan standar Quality Assurance untuk membangun sistem yang andal, serta memiliki keahlian dalam implementasi Machine Learning menggunakan Python (seperti pemodelan Random Forest) dan pemanfaatan alur kerja AI modern. Terbuka untuk peluang kerja Software Engineer, Web Developer, Systems Analyst, maupun posisi terkait AI Engineering & Machine Learning sesuai dengan proyek dan kompetensi yang telah dibangun.",
  status: "Open for Opportunities",
  avatar: "/avatar.jpg",
  email: "jeremy.a.siregar@gmail.com",
  phone: "081270849110",
  location: "Jl. Sekolah no 106, Pekanbaru, Riau, Indonesia",
  gitBranch: "main",
  gitCommit: "v2.8.4-build#849a",
  stats: [
    { label: "Siklus SDLC", value: "End-to-End" },
    { label: "QA & Testing", value: "Manual & UAT" },
    { label: "Web Ecosystem", value: "PHP & JS" },
    { label: "Game Dev", value: "Unity & GMS" }
  ],
  socials: {
    github: "https://github.com/JeremyAlexsi",
    linkedin: "https://www.linkedin.com/in/jeremy-alexander-478749332",
    twitter: "https://twitter.com",
    email: "mailto:jeremy.a.siregar@gmail.com"
  }
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "awara-smart-school",
    title: "Awara - Sistem Manajemen Sekolah Terintegrasi",
    subtitle: "Enterprise School Information System (PT. Bigs Integrasi Teknologi)",
    description: "Sistem informasi manajemen sekolah terpadu berbasis web yang mengintegrasikan administrasi akademik dan operasional sekolah ke dalam platform terpusat. Mengelola modul data induk siswa & guru, inventaris sarana-prasarana, perancangan struktur DBMS, dan pencatatan alur keuangan sekolah.",
    tags: ["PHP", "DBMS / MySQL", "Systems Analysis", "Quality Assurance", "Finance Flow", "Web System"],
    category: "Fullstack Web",
    metrics: "Production Live | ERP Sekolah",
    liveUrl: "https://awara.emesys.app/",
    gradient: "from-cyan-500/25 via-blue-600/20 to-purple-600/25"
  },
  {
    id: "tunas-siak-anugrah-fire-protection",
    title: "E-Commerce Proteksi Kebakaran PT. Tunas Siak Anugrah",
    subtitle: "B2C E-Commerce dengan Midtrans Gateway & RajaOngkir (Scrum)",
    description: "Membangun platform e-commerce B2C alat proteksi kebakaran untuk PT Tunas Siak Anugrah dengan integrasi payment gateway Midtrans dan ekspedisi otomatis RajaOngkir. Dirancang dan dikembangkan secara tangkas menggunakan metodologi Scrum.",
    tags: ["PHP", "Midtrans Payment", "RajaOngkir API", "Scrum", "MySQL", "Web Development"],
    category: "Fullstack Web",
    metrics: "Payment Gateway | Scrum SDLC",
    gradient: "from-orange-500/25 via-amber-600/20 to-red-600/25"
  },
  {
    id: "klinik-narita-digital-signage",
    title: "Papan Informasi Digital Klinik Narita Pekanbaru",
    subtitle: "Digital Signage, Real-time Queue & Clinic Service Display",
    description: "Papan informasi digital interaktif untuk sebuah klinik kesehatan yang menampilkan informasi real-time terkait antrean pasien, nomor loket, jadwal dokter, serta katalog layanan medis yang tersedia pada Klinik Narita Pekanbaru.",
    tags: ["PHP", "Web Development", "Antrian Realtime", "MySQL", "Digital Signage"],
    category: "Fullstack Web",
    metrics: "Realtime Queue | Digital Signage",
    githubUrl: "https://github.com/JeremyAlexsi/Klinik",
    gradient: "from-cyan-500/25 via-teal-600/20 to-emerald-600/25"
  },
  {
    id: "kedai-pos-inventory",
    title: "Kedai - Kasir & Pencatatan Gudang",
    subtitle: "Web POS, Perhitungan Belanja & Manajemen Inventaris Gudang",
    description: "Proyek website aplikasi kasir dan inventory yang dapat melakukan kalkulasi belanja transaksi secara otomatis, pencatatan keluar-masuk barang gudang, serta rekapitulasi data penjualan.",
    tags: ["PHP", "Web Development", "Database Management", "Inventory POS", "MySQL"],
    category: "Fullstack Web",
    metrics: "Automated Calculation | Warehouse Log",
    githubUrl: "https://github.com/JeremyAlexsi/Kedai",
    gradient: "from-purple-500/25 via-indigo-600/20 to-cyan-600/25"
  },
  {
  id: "happy-health-android",
  title: "Happy Health - Obesity & Lifestyle Analyzer",
  subtitle: "Aplikasi Android Prediksi Risiko Obesitas dengan Model Random Forest",
  description: "Aplikasi mobile Android untuk memprediksi dan memonitor tingkat risiko obesitas menggunakan model Machine Learning Random Forest yang telah dilatih berdasarkan analisis pola gaya hidup, asupan kalori, dan kebiasaan aktivitas harian pengguna.",
  tags: ["Android", "Java / Kotlin", "Random Forest", "Machine Learning", "Mobile Development"],
  category: "Mobile App",
  metrics: "Random Forest Model | Lifestyle Analytics",
  gradient: "from-emerald-500/25 via-cyan-600/20 to-blue-600/25"
},
  {
    id: "zombie-shooter-game",
    title: "Zombie Shooter - Top Down Action Survival",
    subtitle: "Top-Down 2D Game Development Melawan Gerombolan Zombie",
    description: "Proyek game development aksi shooter top-down dengan mekanik bertahan hidup dari serangan zombie, kontrol tembakan dinamis, collision physics, wave spawning system, dan audio visual interaktif.",
    tags: ["Game Development", "Unity / GameMaker", "C# / GML", "Game Physics", "AI Mechanics"],
    category: "Game Dev",
    metrics: "Top-Down Shooter | Wave Survival",
    gradient: "from-purple-500/25 via-rose-600/20 to-orange-600/25"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Software Engineering, Systems Analysis & QA",
    iconName: "Terminal",
    skills: [
      { name: "Systems Analysis & SDLC Lifecycle", level: 95, description: "Pemahaman siklus pengembangan end-to-end, pemodelan proses bisnis, use case, dan perancangan arsitektur sistem" },
      { name: "Scrum Methodology & Project Coordination", level: 92, description: "Penerapan metodologi Scrum dalam manajemen sprint, koordinasi tim pengembang, dan pencapaian target tepat waktu" },
      { name: "Quality Assurance (QA) & System Testing", level: 93, description: "Pengujian fungsional komprehensif, troubleshooting kendala teknis, pelacakan bug, dan validasi stabilitas sistem" },
      { name: "AI-Assisted Vibe Coding Workflows", level: 96, description: "Pemanfaatan model AI mutakhir secara adaptif demi efisiensi tinggi dalam akselerasi penulisan dan refactoring kode" }
    ]
  },
  {
    title: "Web Development & Frameworks",
    iconName: "Code2",
    skills: [
      { name: "PHP Web Development (Native, CodeIgniter & Laravel)", level: 94, description: "Pengembangan web berbasis PHP menggunakan Framework CodeIgniter dan Laravel dengan arsitektur MVC yang bersih dan terstruktur" },
      { name: "Pengembangan Antarmuka Pengguna (UI) & Prototipe", level: 92, description: "Perancangan UI interaktif, wireframing, dan pembuatan prototipe sistem yang responsif dan user-friendly" },
      { name: "Desain Web & Pengembangan Web Modern", level: 90, description: "Implementasi antarmuka web modern dengan tata letak adaptif di berbagai resolusi layar dan pengalaman pengguna yang optimal" },
      { name: "Integrasi API & Layanan Pihak Ketiga", level: 91, description: "Pembangunan RESTful API, integrasi payment gateway (Midtrans), dan ekspedisi (RajaOngkir)" }
    ]
  },
  {
    title: "Database Management & Data Warehouse",
    iconName: "Database",
    skills: [
      { name: "Database Management System (DBMS - MySQL/SQL)", level: 94, description: "Perancangan struktur basis data relasional yang efisien, normalisasi tabel, indexing, dan optimasi query data" },
      { name: "Perancangan dan Pengembangan Data Warehouse", level: 89, description: "Arsitektur pergudangan data analitis, pemodelan skema data berskala besar, dan integrasi pipeline data bisnis" },
      { name: "Firebase & Cloud Database Services", level: 88, description: "Integrasi cloud realtime database, autentikasi pengguna, dan penyimpanan cloud terdistribusi" }
    ]
  },
  {
    title: "Game Development, 3D & Animasi",
    iconName: "Boxes",
    skills: [
      { name: "Game Development (GameMaker Studio - GML)", level: 92, description: "Pengembangan game 2D, mekanik aksi top-down, state machine objek, collision system, dan logika gameplay interaktif" },
      { name: "Game Development (Unity Engine - C#)", level: 90, description: "Pengembangan game interaktif, simulasi fisika objek, AI navigasi musuh, dan pemrograman logika controller" },
      { name: "Pembuatan Animasi 2D dan 3D (Blender)", level: 88, description: "Pemodelan aset 3D, texturing, rigging, dan pembuatan animasi 2D/3D interaktif menggunakan software Blender" }
    ]
  },
  {
    title: "Mobile Applications & Machine Learning",
    iconName: "Smartphone",
    skills: [
      { name: "Mobile Applications Development (Kotlin & Android)", level: 90, description: "Pengembangan aplikasi mobile berbasis Android native menggunakan bahasa Kotlin dan integrasi komponen modern" },
      { name: "Machine Learning & Pemrograman Python", level: 87, description: "Pemrograman Python untuk pengolahan data analitis, logika komputasi cerdas, dan implementasi algoritma machine learning" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    year: "Agustus 2025 - Desember 2025",
    role: "Software Engineer Intern",
    company: "PT. Bigs Integrasi Teknologi",
    companyUrl: "https://bigs.id/",
    location: "Indonesia",
    description: [
      "Berkolaborasi dalam tim pengembang untuk merancang dan membangun sistem informasi manajemen sekolah berbasis web guna mengintegrasikan administrasi akademik dan operasional sekolah ke dalam satu platform terpusat.",
      "Mengembangkan modul pengelolaan data induk siswa, guru, serta pencatatan inventaris sarana dan prasarana sekolah.",
      "Berkontribusi dalam perancangan struktur basis data (DBMS) dan implementasi alur pencatatan keuangan sekolah.",
      "Melakukan pengujian fungsional (functional testing) dan debugging untuk memastikan data akurat serta meminimalkan error pada sistem."
    ],
    technologies: ["Web Development", "PHP", "DBMS", "Functional Testing", "Debugging", "SQL"]
  },
  {
    year: "Maret 2026 - Juli 2026",
    role: "Project Manager Intern",
    company: "PT. Bigs Integrasi Teknologi",
    companyUrl: "https://bigs.id/",
    location: "Indonesia",
    description: [
      "Bertanggung jawab mengoordinasikan tim pengembang dalam siklus pengembangan proyek perangkat lunak, memastikan pembagian tugas dan pencapaian target pengerjaan berjalan tepat waktu.",
      "Memantau linimasa dan progres teknis pengerjaan proyek serta memfasilitasi komunikasi aktif antar-anggota tim.",
      "Berperan aktif dalam proses Quality Assurance (QA) dengan mengidentifikasi kendala teknis (troubleshooting) dan melacak error sistem.",
      "Mengoordinasikan perbaikan bug bersama pengembang (developer) demi menjaga stabilitas dan kualitas produk akhir sesuai spesifikasi."
    ],
    technologies: ["Project Management", "Quality Assurance", "Troubleshooting", "SDLC", "Team Coordination"]
  }
];

export const SYSTEM_ARCHITECTURE = {
  layers: [
    {
      name: "Client Presentation Layer",
      desc: "React 18 + Three.js Canvas + GSAP Motion Engine + Lenis Physics Scroll",
      tech: ["React 18", "R3F", "WebGL Shaders", "TailwindCSS"],
      status: "Optimized (60 FPS)"
    },
    {
      name: "Edge & Delivery Layer",
      desc: "Cloudflare Edge CDN, HTTP/3, Dynamic Asset Caching, Brotli Compression",
      tech: ["Edge Workers", "SSL/TLS 1.3", "Anycast DNS"],
      status: "Global Latency < 25ms"
    },
    {
      name: "Realtime & API Gateway Layer",
      desc: "Bidirectional WebSocket connection pooling, RESTful & gRPC endpoints",
      tech: ["Golang / Node.js", "WebSockets", "JWT / RBAC", "Rate Limiter"],
      status: "12,000 req/sec"
    },
    {
      name: "Data & Caching Pipeline Layer",
      desc: "Redis In-Memory Key-Value Cache + PostgreSQL Relational Persistence",
      tech: ["Redis Cluster", "PostgreSQL", "Prisma/GORM", "Kafka Pub/Sub"],
      status: "99.98% Cache Hit"
    }
  ],
  terminalCommands: {
    help: "Perintah yang tersedia: `arch`, `benchmarks`, `stack`, `git-status`, `whoami`, `clear`",
    arch: `[SYSTEM ARCHITECTURE TOPOLOGY]
├── [Client] Browser / React 18 UI (Vite + TypeScript)
│   ├── Three.js WebGL Engine (LOD + Frustum Culling)
│   └── GSAP + Lenis Hardware-Accelerated Ticker
├── [Edge Layer] Cloudflare CDN + Asset Bundling (Brotli)
├── [Services] Go / Node.js High-Throughput Microservices
│   └── Realtime WebSocket Streaming Channel (Ping: 12ms)
└── [Storage] PostgreSQL 16 + Redis In-Memory Cluster Cache`,
    benchmarks: `[PERFORMANCE & RELIABILITY BENCHMARKS]
• Lighthouse Performance Score: 99 / 100
• P99 API Latency: 14.2 ms
• WebGL Render Loop: Solid 60.0 FPS
• Memory Allocation: < 42 MB Heap
• Test Suite Coverage: 96.4% across 180+ tests
• Production Error Rate: < 0.002%`,
    stack: `[ENGINEERING TECH ARSENAL]
• Languages: TypeScript, JavaScript, Go, SQL, GLSL
• Frontend: React 18, Next.js, Tailwind CSS, Vite
• 3D & Motion: Three.js, React Three Fiber, GSAP 3, Lenis
• Backend: Node.js, Express, Go, REST, WebSockets, gRPC
• Storage: PostgreSQL, Redis, MongoDB
• DevOps: Docker, GitHub Actions, Linux, Cloudflare Edge`,
    "git-status": `On branch main
Your branch is up to date with 'origin/main'.

Recent Commits:
* 849ab21 (HEAD -> main) feat(engine): optimize WebGL draw calls and buffer allocation
* 3f281ce perf(scroll): synchronize Lenis with GSAP ticker frame loop
* e109824 feat(architecture): add interactive engineering telemetry hub
* 90ac11f test(pipeline): achieve 96.4% unit & integration test coverage

Status: Clean working tree. Everything green and tested.`
  }
};
