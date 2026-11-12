# 🎲 Peluang Quest: Pengembangan Media Pembelajaran Interaktif Berbasis Web untuk Materi Peluang Kelas 8 SMP

> Repositori ini berisi perangkat lunak aplikasi web edukatif bernama **Peluang Quest**, yang dikembangkan untuk memenuhi tugas mata kuliah pengembangan media pembelajaran matematika.

---

## 👤 Identitas Pengembang
* **Nama**: Aulia Nurrizqi
* **NIM**: 2225250160
* **Jurusan / Program Studi**: Pendidikan Matematika
* **Mata Kuliah**: Algoritma dan Pemograman

---

## 📌 Informasi Proyek
* **Judul Proyek**: Peluang Quest (Web-Based Interactive Learning Media for Grade 8 Probability)
* **Target Pengguna**: Siswa Kelas 8 Sekolah Menengah Pertama (SMP)
* **Fokus Materi**: Teori Peluang, Ruang Sampel, Peluang Teoretik, dan Literasi Matematis (*Mathematical Literacy*)

---

## 📖 Abstrak / Latar Belakang
Materi peluang di tingkat Sekolah Menengah Pertama (SMP) seringkali menjadi tantangan bagi peserta didik karena sifatnya yang abstrak dan kurangnya visualisasi eksperimen acak secara langsung. Untuk mengatasi hal tersebut, **Peluang Quest** dikembangkan menggunakan pendekatan gamifikasi dan prinsip literasi matematis. 

Aplikasi ini dirancang untuk memfasilitasi siklus belajar mandiri siswa secara terstruktur:
1. **Pemeriksaan Awal (*Pretest*)**: Menilai pemahaman konseptual awal siswa tanpa rubrik bertahap yang rumit.
2. **Eksplorasi Konsep**: Menyajikan ensiklopedia rumus dan konsep dasar secara sistematis.
3. **Eksperimen Empiris (*Lab Simulasi*)**: Membantu siswa membangun intuisi matematis melalui simulasi visual pelemparan koin, dadu, dan pengambilan kelereng.
4. **Evaluasi Akhir & Peningkatan (*Posttest & N-Gain*)**: Mengukur efektivitas media pembelajaran menggunakan rubrik analitis bertahap serta perhitungan indeks *Normalized Gain* (N-Gain).

---

## 🚀 Fitur & Komponen Utama Aplikasi

* **1. Autentikasi Siswa**: Memasukkan nama dan kelas secara dinamis untuk personalisasi laporan hasil belajar.
* **2. Tahap Pretest (Literasi Matematis)**: 5 soal studi kasus kontekstual pilihan ganda murni sebagai asesmen awal.
* **3. Ensiklopedia Materi**: Kartu materi interaktif yang merangkum:
  * Konsep Ruang Sampel ($S$) dan Titik Sampel ($A$).
  * Rumus Peluang Teoretik: $P(A) = \frac{n(A)}{n(S)}$.
  * Strategi perbandingan peluang dan pelurusan miskonsepsi antara peluang dan kepastian.
* **4. Laboratorium Simulasi Visual**:
  * *Simulasi Koin & Dadu 3D*: Percobaan acak virtual dengan pencatatan frekuensi kemunculan secara *real-time*.
  * *Simulasi Kantong Kelereng*: Pembuktian hukum peluang pada pengambilan 8 kali sekaligus.
  * *Kalkulator Pembanding Permainan*: Fitur analitis otomatis untuk menghitung efektivitas pilihan permainan.
* **5. Tahap Posttest & Rekapitulasi N-Gain**: Evaluasi akhir menggunakan rubrik bertahap (Tahap 1: Analisis Informasi, Tahap 2: Model & Perhitungan, Tahap 3: Kesimpulan), disertai tabel rekapitulasi skor dan kategori peningkatan N-Gain otomatis.

---

## 🛠️ Spesifikasi & Teknologi

Proyek ini dikembangkan menggunakan teknologi web standar tanpa ketergantungan pada *framework* berat, sehingga ringan dan kompatibel di berbagai perangkat:
* **Struktur & Tampilan**: HTML5, CSS3 (*Flexbox, CSS Grid, Custom Variables*).
* **Interaktivitas & Logika**: JavaScript (ES6+ Modular Pattern).
* **Rendering Matematika**: MathJax 3 (untuk notasi LaTeX yang presisi).
* **Desain & Tipografi**: Google Fonts (*Plus Jakarta Sans*) & FontAwesome Icons.

---

## 📂 Struktur Direktori Proyek

```text
peluang-quest/
│
├── index.html          # Berkas utama antarmuka (Single Page Application Layout)
├── css/
│   └── style.css       # Lembar gaya (styling, palet warna modern, animasi 3D, responsif)
└── js/
    ├── questions.js    # Bank soal literasi matematis, opsi, dan rubrik kunci jawaban
    └── app.js          # Skrip logika aplikasi, manajemen tab, engine penilaian, & simulasi