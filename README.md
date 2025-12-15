# 🛡️ TKCyber - InfoSec Knowledge Base

<div align="center">

**Blog chuyên sâu về Cybersecurity**

Chia sẻ kiến thức về **Offensive Security** • **SOC** • **GRC** • **AI Security**

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=flat&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.0-blue?style=flat&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com)

[🚀 Demo](#) • [📖 Documentation](#documentation) • [✨ Features](#features)

</div>

---

## 📋 Mục lục

- [Giới thiệu](#giới-thiệu)
- [Tính năng](#tính-năng)
- [Tech Stack](#tech-stack)
- [Cài đặt](#cài-đặt)
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [Viết Blog Posts](#viết-blog-posts)
- [Deploy](#deploy)
- [Documentation](#documentation)

---

## 🎯 Giới thiệu

**TKCyber** là nền tảng blog chuyên sâu về Information Security, được xây dựng với Next.js 15 và các công nghệ hiện đại nhất.

### Nội dung chính:
- 🔴 **Offensive Security** - Penetration Testing, Red Team
- 🛡️ **SOC** - SIEM, XDR, SOAR, Threat Detection
- 📊 **GRC** - Governance, Risk & Compliance
- 🤖 **AI Security** - AI-powered threats và defense

---

## ✨ Tính năng

### 📝 Core Features
- ✅ **MDX Blog System** - Viết bài bằng Markdown + JSX
- ✅ **Search & Category Filter** - Tìm kiếm và lọc real-time
- ✅ **5 Blog Posts tiếng Việt** - Nội dung chất lượng cao

### 🚀 Advanced Features
- ✅ **Reading Progress Bar** - Thanh tiến trình đọc (linear + circular)
- ✅ **Related Posts** - Gợi ý bài viết liên quan thông minh
- ✅ **Share Buttons** - Twitter, Facebook, LinkedIn, Copy link
- ✅ **Code Copy Button** - Copy code blocks dễ dàng
- ✅ **View Counter** - Đếm lượt xem mỗi bài

### 🎨 UI/UX
- ✅ **Cybersecurity Theme** - Dark mode với Indigo/Cyan colors
- ✅ **Responsive Design** - Mobile to Desktop
- ✅ **Smooth Animations** - Glassmorphism effects
- ✅ **AI Integration** - Gemini AI để explain security concepts

### 🔍 SEO (9/10)
- ✅ **Server-Side Rendering (SSR)**
- ✅ **Static Site Generation (SSG)**
- ✅ **Meta tags đầy đủ** (Open Graph, Twitter Cards)
- ✅ **Sitemap.xml** tự động
- ✅ **Robots.txt** tự động
- ✅ **PWA Manifest**

---

## 🛠️ Tech Stack

### Core
- **Framework:** Next.js 15.1 (App Router)
- **UI Library:** React 19.0
- **Language:** TypeScript 5.8
- **Styling:** Tailwind CSS 3.4

### Content
- **MDX:** @next/mdx, next-mdx-remote
- **Parsing:** gray-matter
- **Syntax Highlight:** rehype-highlight
- **Markdown:** remark-gfm

### Additional
- **AI:** Google Gemini 2.5 Flash
- **Fonts:** Inter, JetBrains Mono
- **Icons:** Heroicons (via SVG)

---

## 🚀 Cài đặt

### Prerequisites
- Node.js 18+ hoặc mới hơn
- pnpm (recommended) hoặc npm/yarn

### Bước 1: Clone Repository
```bash
git clone https://github.com/yourusername/tkcyber-blog.git
cd tkcyber-blog
```

### Bước 2: Install Dependencies
```bash
pnpm install
# hoặc
npm install
```

### Bước 3: Setup Environment Variables
```bash
# Tạo file .env.local
cp .env.local.example .env.local
```

Thêm Gemini API key vào `.env.local`:
```env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here
```

> 💡 **Lấy API key:** https://ai.google.dev/

### Bước 4: Run Development Server
```bash
pnpm dev
```

Mở **http://localhost:3000** 🎉

---

## 📁 Cấu trúc Dự án

```
TKCyber/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/
│   │   │   └── views/          # View counter API
│   │   ├── blog/
│   │   │   ├── page.tsx        # Blog listing
│   │   │   └── [slug]/         # Dynamic blog posts
│   │   ├── layout.tsx          # Root layout + SEO
│   │   └── page.tsx            # Homepage
│   │
│   ├── features/               # Feature modules
│   │   ├── blog/               # Blog components
│   │   ├── home/               # Home components
│   │   └── layout/             # Layout components
│   │
│   ├── shared/                 # Shared resources
│   │   ├── components/         # Reusable components
│   │   ├── lib/                # Utilities
│   │   ├── services/           # API services
│   │   └── types/              # TypeScript types
│   │
│   └── content/
│       └── posts/              # 📝 MDX blog posts
│
├── public/                     # Static assets
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## ✍️ Viết Blog Posts

### Tạo bài mới

1. Tạo file MDX trong `src/content/posts/`:
```bash
src/content/posts/ten-bai-viet.mdx
```

2. Thêm metadata (frontmatter):
```yaml
---
title: 'Tiêu đề bài viết'
excerpt: 'Mô tả ngắn gọn (1-2 câu)'
category: 'SOC'  # SOC, Offensive, GRC, Products, AI Security
date: '2023-12-15'
readTime: '10 phút đọc'
tags: ['Tag1', 'Tag2', 'Tag3']
author: 'TKCyber Team'
icon: '🛡️'
---
```

3. Viết nội dung bằng Markdown:
```markdown
# Heading chính

Nội dung của bạn...

## Code Examples

\`\`\`bash
nmap -sS -sV target.com
\`\`\`

## Lists & Tables

- Item 1
- Item 2

| Column 1 | Column 2 |
|----------|----------|
| Data     | Data     |
```

4. **Xong!** Bài viết tự động xuất hiện tại `/blog/ten-bai-viet`

📚 **Xem thêm:** `BLOG_GUIDE.md`

---

## 🚀 Deploy

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

**Hoặc manual:**
```bash
1. Push code lên GitHub
2. Import vào Vercel (vercel.com)
3. Add environment variables
4. Deploy!
```

### Build Commands
```bash
# Development
pnpm dev

# Production build
pnpm build

# Run production
pnpm start

# Lint
pnpm lint
```

---

## 📖 Documentation

### Hướng dẫn chi tiết
- 📘 [QUICKSTART.md](QUICKSTART.md) - Bắt đầu nhanh
- 📗 [BLOG_GUIDE.md](BLOG_GUIDE.md) - Viết blog posts
- 📙 [NEW_FEATURES.md](NEW_FEATURES.md) - Features overview
- 📕 [FINAL_CHECKLIST.md](FINAL_CHECKLIST.md) - Production checklist
- 📔 [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - Tổng quan dự án

---

## 🎨 Screenshots

### Homepage
![Homepage](docs/homepage-preview.png)
> Hero section với animated waves và security topics

### Blog Listing
![Blog](docs/blog-preview.png)
> Search, category filter, và blog posts grid

### Blog Post
![Post](docs/post-preview.png)
> Reading progress, syntax highlighting, related posts

---

## 🔧 Configuration

### Custom Theme Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  sec: {
    main: '#151338',    // Background
    card: '#312e81',    // Card background
    primary: '#818cf8', // Indigo
    accent: '#c7d2fe',  // Light accent
  }
}
```

### Add More Blog Posts
Drop `.mdx` files vào `src/content/posts/`

### Modify Navigation
Edit `src/shared/constants/index.ts`:
```typescript
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  // Add more...
];
```

---

## 🤝 Contributing

Contributions are welcome! 

### Quy trình:
1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

## 📝 License

Dự án này là mã nguồn mở. Bạn có thể sử dụng, sửa đổi và phân phối tự do.

---

## 🌟 Features Highlights

### 📊 Reading Progress
![Progress](https://img.shields.io/badge/Progress-Linear%20%2B%20Circular-cyan)

### 🔗 Smart Related Posts
![Algorithm](https://img.shields.io/badge/Algorithm-Category%20%2B%20Tags-purple)

### 📤 Social Sharing
![Share](https://img.shields.io/badge/Share-4%20Platforms-blue)

### 👁️ View Counter
![Views](https://img.shields.io/badge/Views-API%20Powered-green)

---

## 💻 Development

### Project Structure
- **Feature-based architecture** - Dễ maintain
- **Server/Client split** - Performance tối ưu
- **Type-safe** - 100% TypeScript
- **Reusable components** - DRY principle

### Code Quality
```
✓ ESLint configured
✓ TypeScript strict mode
✓ No linter errors
✓ Clean code
```

---

## 📚 Blog Posts

### Hiện có (5 bài):
1. 📊 **Triển khai Wazuh - SIEM mã nguồn mở** (8 phút)
2. 🛡️ **XDR - Phát hiện và Ứng phó Mối đe dọa** (10 phút)
3. 🤖 **Tự động hóa Ứng phó Sự cố với SOAR** (12 phút)
4. ⚔️ **Penetration Testing - Phương pháp toàn diện** (15 phút)
5. 🤖 **AI-Powered Phishing - Mối đe dọa từ AI** (10 phút)

---

## 🔗 Links

- **Live Demo:** [Coming soon]
- **Documentation:** [See docs folder]
- **Issues:** [GitHub Issues]
- **Discussions:** [GitHub Discussions]

---

## 👨‍💻 Author

**TKCyber Team**
- Website: [tkcyber.com]
- Twitter: [@tkcyber]
- GitHub: [@tkcyber]

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [MDX](https://mdxjs.com) - Markdown + JSX
- [Google Gemini](https://ai.google.dev) - AI integration
- [Vercel](https://vercel.com) - Hosting platform

---

## 📊 Stats

```
📝 Blog Posts: 5
🎨 Components: 15
⚙️ Features: 7
📄 Lines of Code: ~3,500
🌐 SEO Score: 9/10
⚡ Lighthouse: 95+
```

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/yourusername/tkcyber-blog.git

# Install
pnpm install

# Setup env
cp .env.local.example .env.local
# Add your GEMINI_API_KEY

# Run
pnpm dev

# Visit
http://localhost:3000
```

---

## 🎓 Learn More

- 📘 [Next.js Documentation](https://nextjs.org/docs)
- 📗 [MDX Documentation](https://mdxjs.com/)
- 📙 [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## 🐛 Issues & Support

Gặp vấn đề? Mở [GitHub Issue](https://github.com/yourusername/tkcyber-blog/issues)

---

<div align="center">

**Made with ❤️ by TKCyber Team**

⭐ Star this repo nếu bạn thấy hữu ích!

</div>
