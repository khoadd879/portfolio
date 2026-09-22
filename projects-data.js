window.portfolioProjects = [
  {
    "id": "blindnav",
    "name": "BlindNav",
    "category": "AI · COMPUTER VISION",
    "group": "ai",
    "tagline": "Nhìn thế giới. Mở thêm lối đi.",
    "short": "Kết hợp YOLO và hỏi đáp hình ảnh tiếng Việt để nghiên cứu hỗ trợ người khiếm thị di chuyển.",
    "description": "BlindNav nghiên cứu cách nhận diện vật thể và diễn giải môi trường đường phố Việt Nam từ ảnh camera. Pipeline kết hợp YOLO với mô hình thị giác–ngôn ngữ để trả lời các câu hỏi như phía trước có gì hoặc vật cản nằm ở đâu. Dự án đang ở giai đoạn nghiên cứu và phát triển dữ liệu.",
    "features": [
      "Phát hiện vật thể đường phố bằng YOLO.",
      "Hỏi đáp hình ảnh bằng tiếng Việt với VLM/LLM.",
      "Công cụ gán nhãn, chuyển đổi dữ liệu và huấn luyện trên Colab."
    ],
    "tech": [
      "Python",
      "YOLO",
      "VLM / LLM"
    ],
    "repo": "BlindNav",
    "color": "#203e35",
    "accent": "#d7eea2",
    "label": "NGHIÊN CỨU",
    "steps": [
      "Ảnh đường phố",
      "Nhận diện YOLO",
      "Hỏi đáp tiếng Việt"
    ],
    "detail": [
      "Dữ liệu & gán nhãn",
      "Huấn luyện mô hình",
      "Đánh giá kết quả"
    ],
    "images": [
      {
        "src": "./assets/projects/blindnav-1.png",
        "caption": "Ảnh thật · YOLO phát hiện hố ga mở trên vỉa hè (open_manhole 0.94)",
        "alt": "YOLO phát hiện hố ga mở — minh chứng hệ thống nhận diện vật cản nguy hiểm cho người khiếm thị"
      },
      {
        "src": "./assets/projects/blindnav-2.png",
        "caption": "Ảnh thật · YOLO nhận diện vạch sang đường, nắp cống, cột và cây",
        "alt": "YOLO trên ảnh đường phố Việt Nam — phát hiện crosswalk, utility_cover, pole, tree, vehicle.car"
      }
    ]
  },
  {
    "id": "ielts",
    "name": "IELTS Training App",
    "category": "BACKEND · EDUCATION",
    "group": "web",
    "tagline": "Mỗi ngày, một bước tiến.",
    "short": "Backend NestJS cho hệ thống luyện IELTS: đề thi, kỹ năng và hành trình học tập.",
    "description": "Backend TypeScript tổ chức nội dung và hoạt động học IELTS theo các module NestJS. Mã nguồn bao gồm quản lý đề thi, câu hỏi, bài nộp Speaking/Writing, từ vựng, kết quả học tập và kế hoạch học. Các module diễn đàn và chatbot mở rộng trải nghiệm học tập.",
    "features": [
      "Quản lý đề thi, câu hỏi, bài làm và kết quả.",
      "Module luyện nói, luyện viết, ngữ pháp và từ vựng.",
      "Kế hoạch học, thống kê, diễn đàn và chatbot."
    ],
    "tech": [
      "TypeScript",
      "NestJS",
      "Docker"
    ],
    "repo": "ielts_training_app",
    "color": "#eee8d8",
    "accent": "#515b36",
    "label": "BACKEND",
    "steps": [
      "Nội dung học",
      "Luyện tập",
      "Theo dõi kết quả"
    ],
    "detail": [
      "Speaking & Writing",
      "Grammar & Vocabulary",
      "Study planner"
    ],
    "images": [
      {
        "src": "./assets/projects/ielts-1.png",
        "caption": "Ảnh thật · Landing AIELTS — Master IELTS, không cần ra trung tâm",
        "alt": "AIELTS landing page — 12.4K+ học viên, 7.5 band trung bình, đề Cambridge 17 Reading Test 3"
      },
      {
        "src": "./assets/projects/ielts-2.png",
        "caption": "Ảnh thật · Speaking mock test — Part 1/2/3 với timer và ghi âm",
        "alt": "IELTS Speaking mock test UI — Mock Test 14 Band 7, ghi âm mic, cue card, Part 3 discussion"
      }
    ]
  },
  {
    "id": "odoo",
    "name": "Odoo Mechanic",
    "category": "ODOO · BUSINESS APPLICATION",
    "group": "web",
    "tagline": "Từ danh mục đến yêu cầu báo giá.",
    "short": "Website thiết bị công nghiệp trên Odoo, với danh mục kỹ thuật và luồng yêu cầu báo giá.",
    "description": "Dự án Odoo 19 cho lĩnh vực cơ khí và thiết bị công nghiệp. Giao diện SRE Commercial giới thiệu các nhóm thiết bị, tìm kiếm mã hàng và danh mục sản phẩm. Các ảnh chụp trong repository thể hiện trang chủ, catalog và luồng gửi yêu cầu báo giá nhiều sản phẩm.",
    "features": [
      "Trang chủ và danh mục thiết bị công nghiệp.",
      "Tìm kiếm theo mã hàng, thương hiệu và thông tin kỹ thuật.",
      "Luồng danh sách sản phẩm cần báo giá (RFQ)."
    ],
    "tech": [
      "Python",
      "Odoo 19",
      "PostgreSQL"
    ],
    "repo": "odoo_mechanic",
    "color": "#0d263a",
    "accent": "#f38132",
    "label": "ỨNG DỤNG DOANH NGHIỆP",
    "steps": [],
    "detail": [],
    "images": [
      {
        "src": "./assets/projects/odoo-home.png",
        "caption": "Ảnh chụp thật · Trang chủ SRE Commercial",
        "alt": "Trang chủ Odoo Mechanic giới thiệu thiết bị công nghiệp"
      },
      {
        "src": "./assets/projects/odoo-catalog.png",
        "caption": "Ảnh chụp thật · Danh mục thiết bị công nghiệp",
        "alt": "Danh mục sản phẩm của dự án Odoo Mechanic"
      }
    ]
  },
  {
    "id": "titan",
    "name": "Titan AI Research",
    "category": "AI · CONTENT INTELLIGENCE",
    "group": "ai",
    "tagline": "Từ nghiên cứu đến sáng tạo.",
    "short": "Nền tảng AI nghiên cứu xu hướng, phân tích thương hiệu và hỗ trợ tạo kịch bản video.",
    "description": "Titan AI Research, được giới thiệu là Dopa Research trong README, là nền tảng hỗ trợ nhà sáng tạo nội dung và marketer. Ứng dụng kết hợp nghiên cứu xu hướng, phân tích đối thủ, xây dựng tài liệu thương hiệu và tạo kịch bản video ngắn. Các workflow AI nhiều bước được điều phối bằng Temporal.",
    "features": [
      "Nghiên cứu xu hướng và đối thủ với Intel Agent.",
      "Xây dựng Brand Document và Brand Skill Pack làm ngữ cảnh cho AI.",
      "Tạo, chỉnh sửa và quản lý kịch bản video với Filmer Agent.",
      "Hỏi đáp theo tài liệu bằng RAG và điều phối workflow với Temporal."
    ],
    "tech": [
      "Next.js",
      "TypeScript",
      "Temporal"
    ],
    "repo": "titan-ai-research",
    "color": "#e7e3ef",
    "accent": "#65507f",
    "label": "AI CONTENT PLATFORM",
    "steps": [
      "Nghiên cứu",
      "Ngữ cảnh thương hiệu",
      "Kịch bản video"
    ],
    "detail": [
      "Next.js · Giao diện",
      "Temporal · Workflow",
      "RAG · Tri thức"
    ],
    "images": [
      {
        "src": "./assets/projects/titan-1.png",
        "caption": "Ảnh thật · Landing page Dopa — Ship content that sounds like you",
        "alt": "Dopa landing page — Next.js giao diện cho nhà sáng tạo nội dung với Brand Voice demo"
      },
      {
        "src": "./assets/projects/titan-2.png",
        "caption": "Ảnh thật · Pipeline 4 AI agents — Brand Analysis, Content Matching, Filmer Scripting, Intel Research",
        "alt": "Dopa four agents pipeline — AI Brand Analysis, Smart Content Matching, Filmer Agent Scripting, Intel Research Tools"
      }
    ]
  }
];
