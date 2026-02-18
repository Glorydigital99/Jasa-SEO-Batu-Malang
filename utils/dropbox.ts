// utils/dropbox.ts

export const sanitizeDropboxUrl = (url: string): string => {
  if (!url) return '';
  
  // 1. Ganti domain ke CDN agar lebih kencang
  let sanitized = url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
  
  // 2. Jika ada dl=0, kita ganti jadi raw=1 (Tanpa menghapus parameter lain seperti rlkey)
  if (sanitized.includes('dl=0')) {
    sanitized = sanitized.replace('dl=0', 'raw=1');
  } 
  // 3. Jika belum ada parameter raw=1 sama sekali, kita tambahkan di ujung
  else if (!sanitized.includes('raw=1')) {
    sanitized += sanitized.includes('?') ? '&raw=1' : '?raw=1';
  }
  
  return sanitized;
};