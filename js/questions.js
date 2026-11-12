const MATHEMATICAL_LITERACY_QUESTIONS = [
  {
    id: 1,
    title: "Memilih Permainan yang Lebih Menguntungkan",
    indicator: "Mathematical Reasoning",
    maxScore: 6,
    story: "Dalam kegiatan bazar sekolah, terdapat dua permainan hadiah. Permainan A berisi 4 bola merah & 6 bola biru. Permainan B berisi 5 bola merah & 10 bola biru. Kamu mendapat hadiah jika mengambil bola berwarna MERAH secara acak.",
    question: "Jika kamu ingin peluang hadiah lebih besar, permainan manakah yang sebaiknya dipilih? Bandingkan peluang kedua permainan dan berikan alasan matematismu.",
    options: [
      { value: "A", label: "Memilih Permainan A karena P(merah) = 0,40 lebih besar dari Permainan B (0,33)" },
      { value: "B", label: "Memilih Permainan B karena jumlah bola merahnya lebih banyak (5 bola)" },
      { value: "same", label: "Sama saja karena peluang keduanya bernilai sama" }
    ],
    correctOption: "A",
    keywordsStep1: ["4", "6", "5", "10", "merah", "biru"],
    keywordsStep2: ["0,4", "0.4", "4/10", "0,33", "0.33", "5/15", "1/3"],
    rubricAnswer: "Permainan A: P(merah) = 4/10 = 0,40. Permainan B: P(merah) = 5/15 ≈ 0,33. Karena 0,40 > 0,33, maka Permainan A lebih menguntungkan."
  },
  {
    id: 2,
    title: "Undian Hadiah di Acara Sekolah",
    indicator: "Formulating Situations Mathematically",
    maxScore: 6,
    story: "Kotak undian berisi 20 kupon bernomor 1 sampai 20. Setiap siswa mengambil satu kupon secara acak. Hadiah diberikan untuk nomor KELIPATAN 3.",
    question: "Ubahlah situasi tersebut ke dalam model matematika dan tentukan peluang siswa mendapatkan hadiah.",
    options: [
      { value: "3/10", label: "6/20 atau 3/10 (30%)" },
      { value: "3/20", label: "3/20 (15%)" },
      { value: "1/3", label: "1/3 (33,33%)" }
    ],
    correctOption: "3/10",
    keywordsStep1: ["20", "kelipatan 3", "3, 6, 9, 12, 15, 18", "6"],
    keywordsStep2: ["n(s)", "n(a)", "6/20", "3/10", "30%"],
    rubricAnswer: "n(S) = 20. A = {3, 6, 9, 12, 15, 18}, n(A) = 6. Maka P(A) = 6/20 = 3/10 = 30%."
  },
  {
    id: 3,
    title: "Permainan Lempar Dadu",
    indicator: "Employing Mathematical Concepts",
    maxScore: 6,
    story: "Seorang siswa melemparkan satu dadu bersisi 6 sebanyak satu kali. Siswa mendapat poin jika dadu menunjukkan angka LEBIH DARI 4.",
    question: "Tentukan peluang siswa mendapatkan poin beserta langkah penyelesaianmu.",
    options: [
      { value: "1/3", label: "2/6 atau 1/3 (sekitar 33,33%)" },
      { value: "1/2", label: "3/6 atau 1/2 (50%)" },
      { value: "2/3", label: "4/6 atau 2/3 (66,67%)" }
    ],
    correctOption: "1/3",
    keywordsStep1: ["6", "lebih dari 4", "5, 6", "5 dan 6"],
    keywordsStep2: ["n(s)", "n(a)", "2/6", "1/3", "33,33"],
    rubricAnswer: "n(S) = 6. Kejadian angka > 4 adalah A = {5, 6}, n(A) = 2. Peluang P(A) = 2/6 = 1/3."
  },
  {
    id: 4,
    title: "Permainan Lempar Uang Logam",
    indicator: "Employing Mathematical Concepts",
    maxScore: 6,
    story: "Satu uang logam dilempar satu kali. Siswa mendapat poin jika menunjukkan sisi GAMBAR.",
    question: "Tentukan peluang siswa mendapatkan poin menggunakan konsep peluang.",
    options: [
      { value: "1/2", label: "1/2 atau 0,5 (50%)" },
      { value: "1/4", label: "1/4 atau 0,25 (25%)" },
      { value: "1", label: "1 atau 100%" }
    ],
    correctOption: "1/2",
    keywordsStep1: ["2", "angka", "gambar"],
    keywordsStep2: ["n(s)", "n(a)", "1/2", "0,5", "0.5", "50%"],
    rubricAnswer: "n(S) = 2. Kejadian A = {Gambar}, n(A) = 1. Peluang P(A) = 1/2 = 0,5 = 50%."
  },
  {
    id: 5,
    title: "Memeriksa Hasil Permainan Kelereng",
    indicator: "Interpreting & Evaluating Outcomes",
    maxScore: 6,
    story: "Kantong berisi 5 kelereng merah & 3 kelereng kuning ($P(\text{Merah}) = 5/8$). Pengambilan dilakukan dengan pengembalian. Seorang siswa menyimpulkan jika dilakukan 8 kali pengambilan, maka PASTI diperoleh tepat 5 kali merah dan 3 kali kuning.",
    question: "Apakah kamu setuju dengan kesimpulan tersebut? Berikan alasan matematis atas penilaianmu.",
    options: [
      { value: "tidak_setuju", label: "Tidak setuju, nilai peluang menyatakan kemungkinan acak, bukan kepastian hasil" },
      { value: "setuju", label: "Setuju, karena 5/8 berarti pasti muncul 5 kali dari 8 percobaan" }
    ],
    correctOption: "tidak_setuju",
    keywordsStep1: ["5", "3", "8", "5/8", "3/8"],
    keywordsStep2: ["tidak", "acak", "kemungkinan", "bukan kepastian", "tidak menjamin"],
    rubricAnswer: "Tidak setuju. Nilai peluang 5/8 menggambarkan tren kemungkinan, bukan kepastian frekuensi hasil dalam 8 kali percobaan acak."
  }
];