# Valentine App Setup

Dokumentasi ini menjelaskan cara setup dan penggunaan aplikasi Valentine yang dibuat dengan JavaScript dan CSS. Aplikasi ini merupakan sebuah permainan interaktif yang menampilkan pertanyaan "Will you be my Valentine?" dengan tombol "Yes" dan "No" yang dinamis.

## Fitur Aplikasi
- Tombol "No" yang bergerak secara acak saat di-hover
- Tombol "Yes" yang memunculkan pesan romantis
- Tampilan responsif untuk berbagai ukuran layar
- Target tanggal Valentine yang dinamis (selalu mengacu ke 14 Februari tahun berjalan)
- Versi minified tersedia untuk penggunaan production

## Prerequisites

- Node.js (Download dari [nodejs.org](https://nodejs.org))
- npm (terinstall otomatis dengan Node.js)

## Installation

1. Inisialisasi project dengan npm:

```bash
npm init -y
```

2. Install dependencies yang dibutuhkan:

```bash
npm install terser clean-css-cli --save-dev
```

3. Setup konfigurasi:
```bash
# Copy file konfigurasi
cp config.json.example config.json

# Edit config.json sesuai kebutuhan
# Tambahkan foto di img/cewek.jpg
```

## Konfigurasi

1. Pastikan struktur file project seperti berikut:
```
project/
├── script.js
├── style.css
├── config.json
├── config.json.example
├── package.json
├── img/
│   └── cewek.jpg
└── .gitignore
```

2. Update file `package.json`, tambahkan scripts berikut:
```json
{
  "scripts": {
    "minify-js": "terser script.js -o script.min.js -c -m",
    "minify-css": "cleancss -o style.min.css style.css",
    "minify": "npm run minify-js && npm run minify-css"
  }
}
```

3. Buat file `.gitignore`:
```gitignore
node_modules/
*.min.js
*.min.css
config.json
img/cewek.jpg
```

## Konfigurasi Aplikasi

1. Copy file konfigurasi example:
```bash
cp config.json.example config.json
```

2. Edit `config.json` dan sesuaikan dengan kebutuhan:
- `recipientName`: Nama penerima
- `confessionDate`: Tanggal konfesi
- `whatsappNumber`: Nomor WhatsApp
- `websiteUrl`: URL website
- `fullMessage`: Pesan utama
- `envelopeMessages`: Pesan-pesan di amplop
- `images`: Konfigurasi gambar

3. Tambahkan foto:
- Letakkan foto di `img/cewek.jpg`
- Format: JPG
- Rekomendasi ukuran: 500x500 pixels

## Penggunaan

1. Untuk minify semua file (JS dan CSS):
```bash
npm run minify
```

2. Untuk minify JavaScript saja:
```bash
npm run minify-js
```

3. Untuk minify CSS saja:
```bash
npm run minify-css
```

## Output Files

Setelah menjalankan minify, akan terbuat file-file berikut:
- `script.min.js` - Versi minified dari JavaScript
- `style.min.css` - Versi minified dari CSS

## Update HTML

Setelah file minified terbuat, update referensi di file HTML:
```html
<link rel="stylesheet" href="style.min.css">
<script src="script.min.js"></script>
```

## Tips Development

- Gunakan file original (unminified) selama development
- Gunakan file minified untuk production
- Jalankan minify sebelum deploy ke production
- Simpan file original di version control (git)
- Exclude file minified dari version control menggunakan .gitignore

## Penjelasan Command Options

### Terser (JavaScript)
- `-o script.min.js`: Menentukan output file
- `-c`: Mengaktifkan kompresi
- `-m`: Mengaktifkan mangling (mengubah nama variabel menjadi lebih pendek)

### Clean-CSS
- `-o style.min.css`: Menentukan output file
- Default options sudah termasuk optimisasi dan kompresi

## Troubleshooting

Jika terjadi error:
1. Pastikan Node.js terinstall dengan benar (`node -v`)
2. Pastikan semua dependencies terinstall (`npm install`)
3. Periksa path file input sudah benar
4. Periksa permission folder untuk menulis file output
5. Pastikan `config.json` sudah dibuat dari `config.json.example`
6. Pastikan foto sudah ditambahkan di `img/cewek.jpg`

## Privacy Note

File-file berikut tidak disertakan dalam repository untuk alasan privasi:
- `config.json` (berisi data personal)
- `img/cewek.jpg` (foto personal)

Gunakan `config.json.example` sebagai template untuk membuat `config.json` Anda sendiri.

