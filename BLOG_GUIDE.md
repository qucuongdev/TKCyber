# 📝 Hướng dẫn quản lý Blog với MDX

## Cấu trúc Blog

Dự án hiện đã có hệ thống blog hoàn chỉnh với MDX (Markdown + JSX):

```
src/
├── content/
│   └── posts/              # Các bài blog MDX
│       ├── siem-implementation-guide.mdx
│       ├── xdr-detection-response.mdx
│       ├── soar-automation-guide.mdx
│       └── penetration-testing-methodology.mdx
├── app/
│   └── blog/
│       ├── page.tsx        # Blog listing page
│       └── [slug]/
│           └── page.tsx    # Dynamic blog post page
└── shared/
    ├── lib/
    │   └── mdx.ts          # MDX utilities
    └── components/
        └── mdx-components.tsx  # Custom MDX components
```

## Tạo bài blog mới

### Bước 1: Tạo file MDX

Tạo file mới trong `src/content/posts/`:

```bash
# Tên file: your-topic-slug.mdx
src/content/posts/your-topic-slug.mdx
```

### Bước 2: Thêm metadata (frontmatter)

Mỗi file MDX bắt đầu với metadata:

```yaml
---
title: 'Tiêu đề bài viết của bạn'
excerpt: 'Mô tả ngắn gọn về bài viết (1-2 câu)'
category: 'SOC'  # Có thể là: SOC, Offensive, GRC, Products, AI Security
date: '2023-12-15'  # Format: YYYY-MM-DD
readTime: '10 min read'
tags: ['Tag1', 'Tag2', 'Tag3']  # Tối đa 3-5 tags
author: 'TKCyber Team'
icon: '🛡️'  # Emoji icon cho bài viết
---
```

### Bước 3: Viết nội dung

Sau metadata, viết nội dung bằng Markdown:

```markdown
# Tiêu đề chính

## Section 1

Nội dung của bạn ở đây...

### Subsection

Thêm nội dung...

## Code Examples

\`\`\`bash
# Bash command example
nmap -sS -sV target.com
\`\`\`

\`\`\`python
# Python code example
def hello_world():
    print("Hello, Security!")
\`\`\`

## Lists

- Item 1
- Item 2
- Item 3

## Tables

| Feature | Description |
|---------|-------------|
| SIEM    | Security Information and Event Management |
| XDR     | Extended Detection and Response |

## Blockquotes

> This is an important note or quote.

## Links

[Link text](https://example.com)
```

## Markdown Features được hỗ trợ

### 1. **Headings**
```markdown
# H1 - Tiêu đề chính
## H2 - Section heading
### H3 - Subsection
#### H4 - Minor heading
```

### 2. **Text Formatting**
```markdown
**Bold text**
*Italic text*
`Inline code`
```

### 3. **Code Blocks**
````markdown
```language
code here
```
````

Supported languages:
- `bash`, `python`, `javascript`, `typescript`
- `sql`, `yaml`, `json`, `xml`
- `php`, `java`, `c`, `cpp`, `go`, `rust`

### 4. **Lists**
```markdown
Unordered:
- Item 1
- Item 2

Ordered:
1. First
2. Second
```

### 5. **Tables**
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

### 6. **Links & Images**
```markdown
[Link text](https://example.com)
![Alt text](/path/to/image.jpg)
```

### 7. **Blockquotes**
```markdown
> Important note or quote
```

## Ví dụ bài blog hoàn chỉnh

```mdx
---
title: 'Getting Started with Wazuh SIEM'
excerpt: 'Learn how to deploy and configure Wazuh for threat detection in your environment.'
category: 'SOC'
date: '2023-12-15'
readTime: '8 min read'
tags: ['Wazuh', 'SIEM', 'Tutorial']
author: 'TKCyber Team'
icon: '📊'
---

# Getting Started with Wazuh SIEM

## Introduction

Wazuh là một SIEM platform mã nguồn mở mạnh mẽ...

## Installation

### Prerequisites

Trước khi cài đặt, bạn cần:
- Ubuntu 20.04 hoặc mới hơn
- Tối thiểu 4GB RAM
- 50GB disk space

### Steps

```bash
# Download installation script
curl -sO https://packages.wazuh.com/4.7/wazuh-install.sh

# Run installer
bash ./wazuh-install.sh -a
```

## Configuration

Sau khi cài đặt, configure Wazuh:

1. Edit config file
2. Restart services
3. Verify installation

## Conclusion

Wazuh provides excellent security monitoring...
```

## Routing và URLs

Sau khi tạo file MDX, bài viết sẽ tự động available tại:

```
File: siem-implementation-guide.mdx
URL:  https://yoursite.com/blog/siem-implementation-guide
```

## Categories

Các category có sẵn:

| Category | Description | Color |
|----------|-------------|-------|
| `SOC` | Security Operations | Indigo |
| `Offensive` | Pentesting, Red Team | Red |
| `GRC` | Governance, Risk, Compliance | Blue |
| `Products` | Tool reviews, comparisons | Green |
| `AI Security` | AI/ML security topics | Pink |

## Best Practices

### 1. Metadata
✅ **DO:**
- Use descriptive titles (50-60 characters)
- Write compelling excerpts (120-160 characters)
- Choose appropriate category
- Add 3-5 relevant tags
- Use current dates

❌ **DON'T:**
- Leave metadata empty
- Use vague titles
- Mix categories inappropriately

### 2. Content Structure
✅ **DO:**
- Start with introduction
- Use clear headings hierarchy (H1 → H2 → H3)
- Include code examples when relevant
- Add visual separators (tables, lists)
- End with conclusion/summary

❌ **DON'T:**
- Write walls of text
- Skip headings
- Overuse formatting

### 3. Code Examples
✅ **DO:**
```bash
# Good: Include comments
nmap -sS -sV target.com  # Stealth scan with version detection
```

❌ **DON'T:**
```bash
nmap -sS -sV target.com
# No explanation
```

### 4. Length
- Short tutorial: 5-8 minutes (800-1200 words)
- Standard guide: 10-15 minutes (1500-2500 words)
- Comprehensive: 15+ minutes (2500+ words)

## Styling Tips

MDX components tự động apply styling:

- **Headings**: Bold, indigo color
- **Code blocks**: Dark background with syntax highlighting
- **Links**: Cyan color with hover effect
- **Tables**: Bordered with indigo theme
- **Blockquotes**: Left border, italic

Không cần custom CSS!

## Publishing Workflow

1. ✅ Tạo file MDX trong `src/content/posts/`
2. ✅ Thêm metadata đầy đủ
3. ✅ Viết nội dung
4. ✅ Build project: `pnpm build`
5. ✅ Test locally: `pnpm dev`
6. ✅ Deploy lên production

Bài viết sẽ tự động xuất hiện ở:
- Homepage (3 bài mới nhất)
- `/blog` (tất cả bài viết)
- `/blog/[slug]` (bài viết cụ thể)

## Troubleshooting

### Bài viết không hiển thị?
- Kiểm tra tên file có đuôi `.mdx`
- Verify metadata format (YAML)
- Rebuild project

### Syntax highlighting không hoạt động?
- Check language name trong code block
- Đảm bảo có install `rehype-highlight`

### Lỗi build?
- Validate YAML frontmatter
- Check for special characters
- Verify all required metadata fields

---

**Happy blogging! 🚀**


