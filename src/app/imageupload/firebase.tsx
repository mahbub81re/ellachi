import UploadImage from "@/components/firebaseImage";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Next.js Firebase Image Upload</h1>
      <UploadImage />
    </div>
  );
}