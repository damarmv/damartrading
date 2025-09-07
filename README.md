# DAMAR Poultry Shop

Versi final situs statis: beranda, halaman produk, halaman kontak, aset logo, dan optimisasi dasar (SEO, manifest, favicon).

Apa yang ada di paket:
- index.html — halaman beranda (hero, fitur, contoh produk)
- products.html — list produk contoh
- contact.html — halaman kontak dengan formulir demo
- assets/styles.css — styling responsif
- assets/scripts.js — menu mobile & utilitas kecil
- assets/logo.svg & assets/logo-icon.svg — logo vektor (wordmark + ikon)
- assets/favicon-48.png (disarankan) — favicon PNG (buat dari logo jika perlu)
- manifest.webmanifest — web app manifest
- README.md — instruksi deployment & penggunaan aset

Langkah deployment:
1. Letakkan file-file di atas di branch (rekomendasi: feature/complete-website).
2. Periksa gambar contoh (assets/sample-*.jpg) — ganti dengan foto asli.
3. Jika ingin favicon .ico, jalankan: `convert assets/logo-icon.svg -resize 48x48 favicon.ico` (menggunakan ImageMagick) atau gunakan layanan generator favicon.
4. Jika ingin PWA offline, tambah service worker (opsional).

Aksesibilitas & SEO:
- Semua gambar harus memiliki atribut alt yang deskriptif.
- Gunakan teks tautan yang jelas (mis. "Hubungi Kami").
- Tambahkan meta tags Open Graph / Twitter Cards bila ingin share preview di media sosial.