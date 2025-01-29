"use client";

import { useState } from "react";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/app/config";

const UploadImage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [copy , setCopy]=useState(false);

 const  copyToClipboard = (text:string) => {
    console.log('text', text)
    const textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    setCopy(true);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const uploadFile = () => {
    if (!file) return;

    const storageRef = ref(storage, `uploads/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.error("Upload error:", error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setImageUrl(downloadURL);
      }
    );
  };

  return (
    <div className="p-5 flex flex-col items-center">
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={uploadFile}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg"
      >
        Upload
      </button>
      {progress > 0 && <p>Upload Progress: {progress.toFixed(0)}%</p>}
      {imageUrl && <img src={imageUrl} alt="Uploaded" className="mt-4 w-40 h-40 object-cover rounded-lg" />}
      {imageUrl && 
      <button onClick={()=>copyToClipboard(imageUrl)}>{copy?"Copied!":"Copy Url"}</button> }
    </div>
  );
};

export default UploadImage;
