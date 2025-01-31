import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

const uploadDir = path.join(process.cwd(), 'public/uploads');

// Ensure 'public/uploads' directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export async function POST(req: NextRequest) {
  try {
    // Parse form data
    const formData = await req.formData();
    const file: File | null = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Convert file data to a Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate unique filename
    const fileExt = path.extname(file.name);
    const uniqueFileName = `${Date.now()}${fileExt}`;
    const filePath = path.join(uploadDir, uniqueFileName);

    // Save file to disk
    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({ filePath: `/uploads/${uniqueFileName}` }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

// Disable default body parser (Required for file uploads)
export const config = {
  api: {
    bodyParser: false,
  },
};
