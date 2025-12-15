import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const viewsFilePath = path.join(process.cwd(), 'views.json');

// Initialize views file nếu chưa có
function initializeViewsFile() {
  if (!fs.existsSync(viewsFilePath)) {
    fs.writeFileSync(viewsFilePath, JSON.stringify({}));
  }
}

// Read views
function getViews(): Record<string, number> {
  initializeViewsFile();
  const data = fs.readFileSync(viewsFilePath, 'utf-8');
  return JSON.parse(data);
}

// Write views
function saveViews(views: Record<string, number>) {
  fs.writeFileSync(viewsFilePath, JSON.stringify(views, null, 2));
}

// GET - Lấy số views
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const views = getViews();
    const count = views[slug] || 0;
    
    return NextResponse.json({ views: count });
  } catch (error) {
    return NextResponse.json({ views: 0 }, { status: 500 });
  }
}

// POST - Tăng view count
export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const views = getViews();
    views[slug] = (views[slug] || 0) + 1;
    saveViews(views);
    
    return NextResponse.json({ views: views[slug] });
  } catch (error) {
    return NextResponse.json({ views: 0 }, { status: 500 });
  }
}


