'use client';

import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [copy , setCopy]=useState(false);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

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

  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) return alert('Please select a file!');

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      setImageUrl(data.filePath);
    } else {
      alert(data.error || 'Upload failed');
    }
  };

  return (
    <div>
      <h1>Upload an Image</h1>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {imageUrl && 
      <button onClick={()=>copyToClipboard(imageUrl)}>{copy?"Copied!":"Copy Url"}</button> }
    </div>
  );
}
