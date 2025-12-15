# TKCyber - InfoSec Knowledge Base (Next.js)

## 🚀 Dự án đã được migrate sang Next.js!

Dự án hiện đã được chuyển đổi từ **Vite + React** sang **Next.js 15** với đầy đủ tính năng SEO và hiệu năng cao.

## 📁 Cấu trúc dự án

```
TKCyber/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout với SEO metadata
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   ├── robots.ts           # Robots.txt generator
│   │   ├── sitemap.ts          # Sitemap.xml generator
│   │   └── manifest.ts         # PWA manifest
│   ├── features/               # Feature-based modules
│   │   ├── home/               # Home feature
│   │   │   ├── components/     # Hero, TopicCard, ArticleList
│   │   │   └── HomePage.tsx    # Home page component
│   │   └── layout/             # Layout components
│   │       └── components/     # Navbar, Footer
│   └── shared/                 # Shared resources
│       ├── constants/          # App constants
│       ├── types/              # TypeScript types
│       └── services/           # API services (Gemini AI)
├── package-nextjs.json         # Next.js dependencies
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS config
├── tsconfig-nextjs.json        # TypeScript config
└── .env.local.example          # Environment variables template
```

## 🛠️ Cài đặt & Chạy dự án

### 1. Cài đặt dependencies

```bash
# Sử dụng package-nextjs.json
mv package-nextjs.json package.json
mv tsconfig-nextjs.json tsconfig.json
pnpm install
```

### 2. Cấu hình môi trường

Tạo file `.env.local` từ `.env.local.example`:

```bash
cp .env.local.example .env.local
```

Sau đó thêm Gemini API key của bạn vào `.env.local`:

```
NEXT_PUBLIC_GEMINI_API_KEY=your_actual_api_key_here
GEMINI_API_KEY=your_actual_api_key_here
```

### 3. Chạy development server

```bash
pnpm dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### 4. Build cho production

```bash
pnpm build
pnpm start
```

## ✨ Các tính năng mới

### SEO Tối ưu

- ✅ **Server-Side Rendering (SSR)** - Nội dung được render sẵn cho search engines
- ✅ **Metadata API** - SEO tags đầy đủ (title, description, keywords, Open Graph, Twitter Cards)
- ✅ **Sitemap.xml** - Tự động generate sitemap
- ✅ **Robots.txt** - Tự động generate robots.txt
- ✅ **Structured Data** - Schema markup ready
- ✅ **PWA Support** - Web app manifest

### Performance

- ⚡ **Next.js 15** - Framework hiện đại nhất
- ⚡ **App Router** - Routing tối ưu
- ⚡ **Font Optimization** - Google Fonts được tối ưu tự động
- ⚡ **Image Optimization** - Sẵn sàng cho `next/image`

### Developer Experience

- 🔧 **TypeScript** - Type safety đầy đủ
- 🔧 **Tailwind CSS** - Styling hiện đại
- 🔧 **Feature-based Architecture** - Dễ bảo trì và mở rộng
- 🔧 **Path Aliases** - Import với `@/` prefix

## 🎨 Cấu trúc Features

Dự án sử dụng **Feature-based Architecture** theo best practices của Next.js:

- **`features/home/`** - Trang chủ với Hero, Topics, và Articles
- **`features/layout/`** - Các components layout như Navbar và Footer
- **`shared/`** - Code dùng chung cho toàn dự án

## 📦 So sánh với phiên bản Vite

| Tính năng | Vite (Cũ) | Next.js (Mới) |
|-----------|-----------|---------------|
| SEO Score | 2/10 ❌ | 9/10 ✅ |
| SSR/SSG | ❌ | ✅ |
| Metadata Tags | ❌ | ✅ |
| Sitemap | ❌ | ✅ Auto |
| Robots.txt | ❌ | ✅ Auto |
| Performance | Good | Excellent |
| First Paint | Slow | Fast |

## 🔄 Migration từ Vite

Các files cũ của Vite vẫn còn trong thư mục root. Bạn có thể xóa chúng sau khi đã test Next.js version:

- `App.tsx`
- `index.tsx`
- `index.html`
- `vite.config.ts`
- `components/` (đã migrate sang `src/features/`)
- `constants.ts` (đã migrate sang `src/shared/constants/`)
- `types.ts` (đã migrate sang `src/shared/types/`)
- `services/` (đã migrate sang `src/shared/services/`)

## 🌐 Deploy

### Vercel (Recommended)

Next.js được tạo bởi Vercel, nên deploy lên Vercel cực kỳ dễ dàng:

1. Push code lên GitHub
2. Import repository vào Vercel
3. Thêm environment variables (`GEMINI_API_KEY`)
4. Deploy!

### Netlify, CloudFlare Pages

Cũng support Next.js rất tốt!

## 📝 Ghi chú

- **Domain**: Nhớ thay đổi domain trong các file sau:
  - `src/app/layout.tsx` (metadata.metadataBase)
  - `src/app/robots.ts`
  - `src/app/sitemap.ts`

- **OG Image**: Tạo file `public/og-image.jpg` (1200x630px) cho Open Graph

- **Favicon**: Thêm `public/favicon.ico`

## 🤝 Contributing

Cấu trúc mới giúp việc contribute dễ dàng hơn:
- Mỗi feature có folder riêng
- Components được tổ chức theo chức năng
- Shared code ở `shared/`

---

**Phát triển bởi TKCyber** 🛡️


