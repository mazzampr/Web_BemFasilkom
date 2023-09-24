<h1 align="center">Website BEM Fasilkom</h1>

## Teknologi yang digunakan
- Strapi dengan database SQLite untuk CMS-nya.
- Next.js untuk frontend-nya.
- TypeScript untuk bahasa pemrograman di bagian frontend.

## Arsitektur
![Arsitektur web BEM Fasilkom](https://user-images.githubusercontent.com/45989466/129720252-1a45d6c2-ff10-4a4b-8072-c4c54ef1db4c.jpeg)

## Mulai Berkontribusi

### Tool Prasyarat
Pastikan Anda telah menginstal tool-tool berikut di PC/laptop Anda,
1. Git versi 2.23 ke atas
2. Node.js versi 14 ke atas
3. Yarn versi 1.22 (jangan gunakan Yarn 2 ataupun Yarn 3)

### Menyiapkan Codebase di Mesin Anda
1. Clone repo ini<br />
   Buka terminal atau command line Anda, lalu ketikan perintah berikut,
   ```bash
   # Jika Anda sudah membuat koneksi SSH ke server Github, gunakan perintah berikut
   git clone git@github.com:bemfasilkomupnjatim/Website_Bem

   # atau jika belum, gunakan perintah berikut,
   git clone https://github.com/bemfasilkomupnjatim/Website_Bem
   ```

2. Instal dependensi di frontend dan backend<br />
   Masih di terminal atau command line Anda, ikuti langkah berikut,
   ```bash
   cd Website_Bem # Masuk ke folder hasil clone Anda barusan

   cd frontend # Masuk ke folder frontend
   yarn # Untuk menginstal dependensi
   # ... tunggu proses instalasi selesai
   cd .. # Kembali ke folder Website_Bem
 
   cd backend # Masuk ke folder backend
   yarn # Untuk menginstall dependensi di folder backend
   # ... tunggu proses instalasi selesai
   cd .. # Kembali ke folder Website_Bem
   ```

3. Jalankan backend dan frontend dalam mode development<br/>
   Masih di terminal atau command line Anda, ketikkan perintah berikut,
   ```bash
   cd frontend
   yarn dev
   ```
   Kemudian buka terminal atau command line baru, dan ketikkan perintah berikut,
   ```bash
   cd backend
   yarn develop
   ```
   Kedua perintah di atas akan menjalankan backend dan frontend dalam mode development, jangan tutup kedua terminal atau command line yang sudah terbuka, biarkan saja untuk berjalan. Jika berhasil, Anda dapat mengakses panel admin di `http://localhost:1337` dan tampilan website di `http://localhost:3000`.

## Alur Kerja
![Diagram alur kerja](https://user-images.githubusercontent.com/45989466/129733356-88061f48-df59-4367-8247-2ca3f0aef69b.png)

1. Jika Anda hendak mengerjakan sesuatu, buatlah branch baru dari branch main, kemudian lakukan commit-commit untuk pekerjaan Anda di branch tersebut.
2. Jika sudah dirasa cukup atau pekerjaan sudah selesai atau Anda butuh tanggapan dari orang lain, commit pekerjaan Anda di branch tersebut lalu push branch tersebut.
3. Buat pull request ke branch main, dan sertakan deskripsi yang baik.
4. Tunggu hingga seseorang yang bertugas me-review kode menanggapi pull request Anda. Harap untuk tidak melakukan merge terhadap pull request Anda sendiri.
5. Jika pereview kode meminta Anda untuk mengubah beberapa bagian kode, kerjakan di mesin Anda, buat commit, lalu push kembali branch tersebut.
6. Jika dirasa sudah cukup, orang yang bertugas me-review kode yang akan melakukan merge terhadap pull request yang Anda buat.
