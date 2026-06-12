const products = [
  {
    id: 1,
    image: "assets/product1-basics-buds.png",
    page: "product1.html",
    category: { zh: "音频", en: "Audio" },
    name: { zh: "Toshiba Canvio Basics Buds", en: "Toshiba Canvio Basics Buds" },
    price: "$59.00",
    short: {
      zh: "轻巧无线耳机，面向通勤、网课和日常通话。",
      en: "Light wireless earbuds for commuting, online classes, and everyday calls."
    },
    desc: {
      zh: "Basics Buds 以简单配对、稳定连接和清晰通话为核心，适合每天随身使用。",
      en: "Basics Buds focus on simple pairing, steady connection, and clear calls for everyday carry."
    },
    specs: [
      { zh: "低延迟蓝牙连接", en: "Low-latency Bluetooth connection" },
      { zh: "最长 28 小时综合续航", en: "Up to 28 hours total battery life" },
      { zh: "双麦克风通话增强", en: "Dual-mic call enhancement" },
      { zh: "USB-C 充电盒", en: "USB-C charging case" }
    ]
  },
  {
    id: 2,
    image: "assets/product2-homehub.png",
    page: "product2.html",
    category: { zh: "智能家居", en: "Smart Home" },
    name: { zh: "Toshiba Canvio Basics HomeHub", en: "Toshiba Canvio Basics HomeHub" },
    price: "$89.00",
    short: {
      zh: "紧凑智能音箱中枢，用于家庭提醒、音乐和设备控制。",
      en: "A compact smart speaker hub for reminders, music, and device control."
    },
    desc: {
      zh: "HomeHub 用织物外壳、状态光环和低调按键，承担家庭信息提示与基础智能控制。",
      en: "HomeHub uses a fabric shell, status ring, and quiet controls for home prompts and basic smart control."
    },
    specs: [
      { zh: "语音助手快捷唤醒", en: "Quick voice assistant wake" },
      { zh: "360° 声音扩散", en: "360-degree sound dispersion" },
      { zh: "一键麦克风静音", en: "One-tap microphone mute" },
      { zh: "柔和状态光环", en: "Soft status light ring" }
    ]
  },
  {
    id: 3,
    image: "assets/product3-tab-10.png",
    page: "product3.html",
    category: { zh: "学习办公", en: "Study Work" },
    name: { zh: "Toshiba Canvio Basics Tab 10", en: "Toshiba Canvio Basics Tab 10" },
    price: "$239.00",
    short: {
      zh: "10 英寸日常平板，适合学习、阅读、视频和轻办公。",
      en: "A 10-inch everyday tablet for study, reading, video, and light work."
    },
    desc: {
      zh: "Basics Tab 10 将清爽屏幕、支架保护套和手写笔组合在一起，强调低门槛日常使用。",
      en: "Basics Tab 10 pairs a clean display, stand cover, and stylus for low-friction everyday use."
    },
    specs: [
      { zh: "10 英寸护眼显示屏", en: "10-inch comfort display" },
      { zh: "支架式保护套", en: "Stand-style protective cover" },
      { zh: "基础手写笔支持", en: "Basic stylus support" },
      { zh: "全天轻量续航", en: "Light all-day battery life" }
    ]
  },
  {
    id: 4,
    image: "assets/product4-charge-65.png",
    page: "product4.html",
    category: { zh: "充电", en: "Charging" },
    name: { zh: "Toshiba Canvio Basics Charge 65", en: "Toshiba Canvio Basics Charge 65" },
    price: "$39.00",
    short: {
      zh: "65W 多口充电方块，适合手机、平板和轻薄本。",
      en: "A 65W multi-port charger cube for phones, tablets, and light laptops."
    },
    desc: {
      zh: "Basics Charge 65 用紧凑体积提供多设备充电能力，让桌面和旅行充电更简单。",
      en: "Basics Charge 65 delivers multi-device charging in a compact body for simpler desk and travel power."
    },
    specs: [
      { zh: "最高 65W USB-C 输出", en: "Up to 65W USB-C output" },
      { zh: "双 USB-C 加单 USB-A", en: "Dual USB-C plus single USB-A" },
      { zh: "智能功率分配", en: "Smart power allocation" },
      { zh: "轻巧旅行体积", en: "Compact travel-friendly size" }
    ]
  },
  {
    id: 5,
    image: "assets/product5-cam-1080.png",
    page: "product5.html",
    category: { zh: "会议", en: "Meetings" },
    name: { zh: "Toshiba Canvio Basics Cam 1080", en: "Toshiba Canvio Basics Cam 1080" },
    price: "$49.00",
    short: {
      zh: "1080p 基础会议摄像头，配隐私滑盖和自动曝光。",
      en: "A 1080p webcam with a privacy slider and auto exposure."
    },
    desc: {
      zh: "Basics Cam 1080 面向网课、远程会议和家庭视频通话，保留最常用的清晰画面与隐私控制。",
      en: "Basics Cam 1080 is built for classes, remote meetings, and family video calls with clear image basics and privacy control."
    },
    specs: [
      { zh: "1080p 高清画面", en: "1080p HD image" },
      { zh: "物理隐私滑盖", en: "Physical privacy slider" },
      { zh: "自动曝光调节", en: "Auto exposure adjustment" },
      { zh: "夹持式支架", en: "Clip-on stand" }
    ]
  },
  {
    id: 6,
    image: "assets/product6-desklight.png",
    page: "product6.html",
    category: { zh: "桌面", en: "Workspace" },
    name: { zh: "Toshiba Canvio Basics DeskLight", en: "Toshiba Canvio Basics DeskLight" },
    price: "$35.00",
    short: {
      zh: "简洁 LED 桌面灯，适合阅读、学习和轻办公。",
      en: "A simple LED desk light for reading, study, and light work."
    },
    desc: {
      zh: "Basics DeskLight 用可调灯臂、柔和照明和触控按钮，把桌面照明做得直观可靠。",
      en: "Basics DeskLight uses an adjustable arm, soft light, and touch control for intuitive dependable desk lighting."
    },
    specs: [
      { zh: "三档亮度调节", en: "Three brightness levels" },
      { zh: "冷暖色温切换", en: "Warm and cool color modes" },
      { zh: "触控开关", en: "Touch control" },
      { zh: "USB-C 供电", en: "USB-C powered" }
    ]
  },
  {
    id: 7,
    image: "assets/product7-soundmini.png",
    page: "product7.html",
    category: { zh: "音频", en: "Audio" },
    name: { zh: "Toshiba Canvio Basics SoundMini", en: "Toshiba Canvio Basics SoundMini" },
    price: "$45.00",
    short: {
      zh: "迷你蓝牙音箱，适合桌面、床头和小空间音乐。",
      en: "A mini Bluetooth speaker for desks, bedside use, and small-room music."
    },
    desc: {
      zh: "Basics SoundMini 以小体积、织物网面和简洁按键，提供日常听歌与视频外放体验。",
      en: "Basics SoundMini uses a small body, fabric grille, and simple controls for everyday music and video sound."
    },
    specs: [
      { zh: "蓝牙快速连接", en: "Quick Bluetooth pairing" },
      { zh: "双全频单元", en: "Dual full-range drivers" },
      { zh: "最长 12 小时播放", en: "Up to 12 hours playback" },
      { zh: "挂绳便携设计", en: "Portable loop design" }
    ]
  },
  {
    id: 8,
    image: "assets/product8-airpure.png",
    page: "product8.html",
    category: { zh: "空气管理", en: "Air Care" },
    name: { zh: "Toshiba Canvio Basics AirPure", en: "Toshiba Canvio Basics AirPure" },
    price: "$79.00",
    short: {
      zh: "桌面空气净化器，适合书桌、床头和小型房间。",
      en: "A desktop air purifier for desks, bedside tables, and small rooms."
    },
    desc: {
      zh: "Basics AirPure 以紧凑圆柱外形、可替换滤芯和柔和状态灯，为小空间提供轻量空气管理。",
      en: "Basics AirPure uses a compact cylinder, replaceable filter, and soft status light for light air care in small spaces."
    },
    specs: [
      { zh: "可替换滤芯", en: "Replaceable filter" },
      { zh: "三档风量", en: "Three fan speeds" },
      { zh: "低噪夜间模式", en: "Quiet night mode" },
      { zh: "柔和状态灯环", en: "Soft status light ring" }
    ]
  }
];

const translations = {
  zh: {
    "nav.home": "首页",
    "nav.products": "产品",
    "nav.about": "关于",
    "nav.contact": "联系",
    "hero.eyebrow": "独立日常电子品牌",
    "hero.title": "把基础体验做得更清楚",
    "hero.body": "Toshiba Canvio Basics 面向日常使用场景，打造耳机、智能中枢、平板、充电、摄像、照明、音频和空气净化设备。",
    "hero.ctaProducts": "探索产品",
    "hero.ctaAbout": "品牌说明",
    "hero.note": "说明：这是一个独立概念电子产品品牌网站，不隶属于 Toshiba Corporation，也不是 Toshiba Canvio Basics 硬盘或存储产品线。",
    "intro.kicker": "Basics Ecosystem",
    "intro.title": "简单、稳定、每天都用得上",
    "intro.body": "统一的 TCB 标识、柔和蓝白色调和简洁硬件形态，让 Basics 系列更适合家庭、学习和轻办公场景。",
    "products.kicker": "Featured Products",
    "products.title": "精选产品",
    "products.body": "8 款非硬盘日常电子产品，覆盖通勤、学习、会议、充电、桌面和空气管理。",
    "products.view": "查看详情",
    "about.kicker": "About Toshiba Canvio Basics",
    "about.title": "一个专注基础体验的独立电子产品系列",
    "about.body": "Toshiba Canvio Basics 的目标不是堆叠复杂功能，而是把常用设备做得清楚、稳定、易用。每款产品都围绕低学习成本、可靠连接和干净外观展开。",
    "about.statProducts": "款首发产品",
    "about.statIdentity": "统一品牌标识",
    "about.statDrives": "硬盘类产品",
    "contact.kicker": "Contact",
    "contact.title": "为日常电子设备建立清晰标准",
    "contact.body": "如需品牌合作、渠道洽谈或产品资料，请联系 Toshiba Canvio Basics 品牌团队。",
    "contact.cta": "联系品牌团队",
    "footer.copy": "© 2026 Toshiba Canvio Basics. Independent concept electronics brand.",
    "footer.note": "Not affiliated with Toshiba Corporation. No hard drive or storage products are represented on this site.",
    "detail.back": "返回首页",
    "detail.overview": "产品概览",
    "detail.specs": "核心规格",
    "detail.next": "下一款产品",
    "detail.contact": "咨询产品",
    "detail.note": "独立概念电子品牌，不代表 Toshiba Corporation、Toshiba Canvio Basics 硬盘或任何官方存储产品。"
  },
  en: {
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.eyebrow": "Independent Everyday Electronics",
    "hero.title": "Basics Made Clearer",
    "hero.body": "Toshiba Canvio Basics builds everyday devices for simple use: earbuds, home hubs, tablets, chargers, webcams, lights, speakers, and desktop air care.",
    "hero.ctaProducts": "Explore Products",
    "hero.ctaAbout": "About Brand",
    "hero.note": "Note: this is an independent concept electronics brand site. It is not affiliated with Toshiba Corporation and is not a Toshiba Canvio Basics hard drive or storage line.",
    "intro.kicker": "Basics Ecosystem",
    "intro.title": "Simple, Steady, Useful Every Day",
    "intro.body": "A unified TCB identity, soft blue-white palette, and simple hardware forms make the Basics line fit homes, study spaces, and light work.",
    "products.kicker": "Featured Products",
    "products.title": "Featured Products",
    "products.body": "Eight non-hard-drive everyday electronics across commuting, study, meetings, charging, desk setup, and air care.",
    "products.view": "View Details",
    "about.kicker": "About Toshiba Canvio Basics",
    "about.title": "An Independent Electronics Line Focused on the Basics",
    "about.body": "Toshiba Canvio Basics is not about stacking complex features. It makes common devices clearer, steadier, and easier to use through low learning cost, dependable connection, and clean design.",
    "about.statProducts": "Launch products",
    "about.statIdentity": "Unified identity",
    "about.statDrives": "Hard drive products",
    "contact.kicker": "Contact",
    "contact.title": "Clear Standards for Everyday Electronics",
    "contact.body": "For brand partnerships, channel discussions, or product materials, contact the Toshiba Canvio Basics brand team.",
    "contact.cta": "Contact Brand Team",
    "footer.copy": "© 2026 Toshiba Canvio Basics. Independent concept electronics brand.",
    "footer.note": "Not affiliated with Toshiba Corporation. No hard drive or storage products are represented on this site.",
    "detail.back": "Back Home",
    "detail.overview": "Overview",
    "detail.specs": "Key Specs",
    "detail.next": "Next Product",
    "detail.contact": "Ask About Product",
    "detail.note": "Independent concept electronics brand. Not an official Toshiba Corporation, Toshiba Canvio Basics hard drive, or storage product."
  }
};
