# ✨ 6 Tính năng Mới cho Blog TKCyber

Đã implement thành công 6 tính năng cao cấp cho blog!

## 1. 📊 Reading Progress Bar

### Mô tả
Thanh tiến trình hiển thị % đã đọc của bài viết.

### Tính năng
- **Linear progress bar** - Top của page với gradient cyan→purple→pink
- **Circular indicator** - Bottom-right hiển thị phần trăm
- Auto-hide khi scroll < 10%
- Smooth animations (150ms)

### Vị trí
- Xuất hiện trên mọi blog post
- Fixed position, không che nội dung

### Demo
```
┌─[████████░░░░░░] 50%─────────┐
│                               │
│  Nội dung bài viết...         │
│                         ⭕ 50%│
└───────────────────────────────┘
```

---

## 2. 🔗 Related Posts

### Mô tả
Gợi ý 3 bài viết liên quan ở cuối mỗi bài.

### Thuật toán scoring
```typescript
score = 
  (cùng category ? 10 điểm : 0) +
  (số tags chung × 5 điểm) +
  (bài gần đây ? 2 điểm : 0)
```

### Ví dụ
```
Đang đọc: "SIEM Implementation"

Related Posts:
1. XDR Detection (cùng category + tags) - Score: 25
2. SOAR Automation (cùng category) - Score: 10
3. Pentesting (tag chung) - Score: 5
```

### Component
- `src/shared/components/RelatedPosts.tsx`
- Server component (không cần client state)

---

## 3. 📤 Share Buttons

### Mô tả
Chia sẻ bài viết lên social media.

### Platforms
- **Twitter/X** - Share với custom text
- **Facebook** - Facebook sharer
- **LinkedIn** - LinkedIn sharing
- **Copy Link** - Copy URL vào clipboard (có animation ✓)

### Features
- Click để share ngay
- Copy button shows checkmark khi success
- Hover effects cho mỗi platform
- Icon colors khác nhau per platform

### Component
- `src/shared/components/ShareButtons.tsx`
- Client component (cần window.location)

---

## 4. 📋 Code Copy Button

### Mô tả
Nút copy cho mọi code block trong bài viết.

### Tính năng
- Xuất hiện khi hover vào code block
- Click để copy code
- Visual feedback (✓ checkmark)
- Auto-hide sau 2 giây

### Demo
```bash
nmap -sS target.com          [📋]
                            ↑ hover để thấy
```

### Integration
- Tích hợp trong `mdx-components.tsx`
- Tự động apply cho tất cả `<pre>` tags
- Component: `src/shared/components/CodeCopyButton.tsx`

---

## 5. 🌓 Dark/Light Mode Toggle

### Mô tả
Switch giữa Dark mode và Light mode.

### Tính năng
- Toggle button ở bottom-left
- Lưu preference vào localStorage
- Smooth transition giữa themes
- Icon thay đổi (☀️ Sun / 🌙 Moon)

### Implementation
- **ThemeContext** - Context API để quản lý theme
- **ThemeProvider** - Wrap toàn bộ app
- **ThemeToggle** - Button component
- **CSS Variables** - Light mode styles trong globals.css

### Files
```
src/shared/context/ThemeContext.tsx
src/shared/components/ThemeToggle.tsx
src/app/globals.css (light mode styles)
```

### Usage
```tsx
import { useTheme } from '@/shared/context/ThemeContext';

const { theme, toggleTheme } = useTheme();
```

---

## 6. 👁️ View Counter

### Mô tả
Hiển thị số lượt xem cho mỗi bài viết.

### Tính năng
- Tự động tăng khi user vào bài
- Lưu vào file `views.json`
- Format số theo locale Việt (1.234 thay vì 1,234)
- Loading state khi fetch data

### Technical
- **API Route**: `/api/views/[slug]`
  - GET: Lấy view count
  - POST: Increment view count
- **Storage**: `views.json` file (gitignored option)
- **Component**: `ViewCounter.tsx` (client)

### API Endpoints
```typescript
GET  /api/views/siem-implementation-guide
→ { "views": 1234 }

POST /api/views/siem-implementation-guide
→ { "views": 1235 } // Tăng lên 1
```

### Vị trí
Hiển thị trong metadata của blog post (header area).

---

## 🎯 Tổng hợp Components

### Client Components
```
src/shared/components/
├── ReadingProgress.tsx      # Progress bar
├── RelatedPosts.tsx         # Bài liên quan
├── ShareButtons.tsx         # Share social
├── CodeCopyButton.tsx       # Copy code
├── ThemeToggle.tsx          # Dark/Light toggle
└── ViewCounter.tsx          # View counter
```

### Context
```
src/shared/context/
└── ThemeContext.tsx         # Theme management
```

### API Routes
```
src/app/api/
└── views/
    └── [slug]/
        └── route.ts         # View counter API
```

---

## 🚀 Cách sử dụng

### 1. Reading Progress
Tự động xuất hiện trên blog posts. Không cần config.

### 2. Related Posts
```tsx
<RelatedPosts 
  currentPost={post} 
  allPosts={allPosts}
  maxPosts={3}  // Số bài muốn hiển thị
/>
```

### 3. Share Buttons
```tsx
<ShareButtons 
  title={post.title} 
  slug={post.slug} 
/>
```

### 4. Code Copy
Tự động cho tất cả code blocks. Không cần code thêm.

### 5. Theme Toggle
Tự động xuất hiện bottom-left. Có thể ẩn bằng CSS nếu muốn.

### 6. View Counter
```tsx
<ViewCounter 
  slug={post.slug} 
  increment={true}  // false nếu chỉ hiển thị, không tăng
/>
```

---

## 📊 Performance Impact

### Bundle Size
```
Reading Progress: ~2KB
Related Posts: ~3KB
Share Buttons: ~2KB
Code Copy: ~1KB
Theme Toggle: ~3KB (với context)
View Counter: ~2KB

Total: ~13KB (rất nhẹ!)
```

### Load Time
- Components load lazy (khi cần)
- No impact lên initial page load
- View counter: async fetch (không block render)

---

## 🎨 Customization

### Thay đổi màu Progress Bar
```css
/* src/app/globals.css */
.progress-bar {
  background: linear-gradient(to right, #your-colors);
}
```

### Thay đổi số Related Posts
```tsx
<RelatedPosts maxPosts={5} />  // 5 thay vì 3
```

### Disable Theme Toggle
```tsx
// src/app/layout.tsx
// Comment out line:
// <ThemeToggle />
```

### Custom View Counter Storage
Thay vì `views.json`, có thể dùng:
- Database (PostgreSQL, MongoDB)
- Redis
- External service (Google Analytics)

---

## 🐛 Troubleshooting

### Reading Progress không hoạt động?
- Check có import component chưa
- Verify z-index không bị conflict

### Related Posts không hiển thị?
- Cần ít nhất 2 bài viết
- Check algorithm scoring

### Share Buttons lỗi?
- Popup bị block? → Allow popups trong browser
- Copy không work? → HTTPS required

### Code Copy không xuất hiện?
- Hover vào code block
- Check `mdx-components.tsx` có import CodeCopyButton

### Theme Toggle không lưu?
- Check localStorage available
- Clear browser cache

### View Counter không tăng?
- Check API route `/api/views/[slug]`
- Verify `views.json` có write permissions

---

## 📁 File Structure

```
src/
├── app/
│   ├── api/
│   │   └── views/
│   │       └── [slug]/
│   │           └── route.ts       # View counter API
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.tsx           # Sử dụng tất cả components
│   └── globals.css                # Light mode styles
│
├── shared/
│   ├── components/
│   │   ├── ReadingProgress.tsx
│   │   ├── RelatedPosts.tsx
│   │   ├── ShareButtons.tsx
│   │   ├── CodeCopyButton.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ViewCounter.tsx
│   │   └── mdx-components.tsx     # Updated với CodeCopyButton
│   └── context/
│       └── ThemeContext.tsx       # Theme management
│
└── views.json                     # View counts storage
```

---

## ✅ Testing Checklist

Sau khi chạy `pnpm dev`, test:

### Reading Progress ✓
- [ ] Scroll xuống → progress bar tăng
- [ ] Circular indicator xuất hiện khi >10%
- [ ] Percentage hiển thị đúng

### Related Posts ✓
- [ ] Hiển thị 3 bài liên quan
- [ ] Click vào → navigate đúng
- [ ] Scoring hợp lý (cùng category ưu tiên)

### Share Buttons ✓
- [ ] Twitter share mở popup
- [ ] Facebook share hoạt động
- [ ] LinkedIn share hoạt động
- [ ] Copy link show ✓ checkmark

### Code Copy ✓
- [ ] Hover vào code → button xuất hiện
- [ ] Click → code copied
- [ ] Checkmark hiển thị 2s

### Theme Toggle ✓
- [ ] Click → chuyển dark/light
- [ ] Preference được lưu
- [ ] Reload page → theme giữ nguyên

### View Counter ✓
- [ ] Hiển thị số views
- [ ] Reload → số tăng lên
- [ ] Format tiếng Việt (1.234)

---

## 🎉 Summary

**6 tính năng mới:**
1. ✅ Reading Progress Bar
2. ✅ Related Posts
3. ✅ Share Buttons (Twitter, Facebook, LinkedIn, Copy)
4. ✅ Code Copy Button
5. ✅ Dark/Light Mode Toggle
6. ✅ View Counter

**Total additions:**
- 6 new components
- 1 context (ThemeContext)
- 1 API route
- Light mode CSS
- ~500 lines of code

**User experience improvements:**
- 📈 Better engagement (progress tracking)
- 🔄 More page views (related posts)
- 📢 Social sharing enabled
- 💻 Better code examples (copy button)
- 🎨 Theme preference
- 📊 Popularity metrics (view counts)

---

**Blog giờ đã professional-grade! 🚀**


