# 🚀 Hướng dẫn Chạy Dự án Next.js

## Bước 1: Cài đặt Dependencies

```bash
pnpm install
```

Hoặc nếu dùng npm/yarn:

```bash
npm install
# hoặc
yarn install
```

## Bước 2: Tạo file môi trường

Tạo file `.env.local`:

```bash
# Windows
copy .env.local.example .env.local

# Linux/Mac
cp .env.local.example .env.local
```

Sau đó mở `.env.local` và thêm API key của bạn:

```
NEXT_PUBLIC_GEMINI_API_KEY=your_actual_gemini_api_key_here
GEMINI_API_KEY=your_actual_gemini_api_key_here
```

## Bước 3: Chạy Development Server

```bash
pnpm dev
```

Hoặc:

```bash
npm run dev
# hoặc
yarn dev
```

## Bước 4: Mở trình duyệt

Truy cập: **http://localhost:3000**

---

## 📦 Build Production

```bash
pnpm build
pnpm start
```

---

## 🎯 Các lệnh hữu ích

| Lệnh | Mô tả |
|------|-------|
| `pnpm dev` | Chạy dev server (port 3000) |
| `pnpm build` | Build production |
| `pnpm start` | Chạy production server |
| `pnpm lint` | Chạy ESLint |

---

**Lưu ý**: Nếu gặp lỗi về dependencies, hãy xóa `node_modules` và `pnpm-lock.yaml` rồi chạy lại `pnpm install`.


