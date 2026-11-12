let studentData = { name: "", class: "" };
let testScores = { pretest: null, posttest: null };

function startApp() {
  const nameInput = document.getElementById("input-nama").value.trim();
  const classInput = document.getElementById("input-kelas").value.trim();

  if (nameInput === "") {
    alert("Mohon masukkan nama lengkap siswa terlebih dahulu!");
    document.getElementById("input-nama").focus();
    return;
  }

  studentData.name = nameInput;
  studentData.class = classInput !== "" ? classInput : "8";

  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("main-navbar").style.display = "block";

  document.getElementById("user-greeting").innerText = `${studentData.name} (Kelas ${studentData.class})`;

  renderPretest();
  renderPosttest();
  switchTab("pretest");
}

function switchTab(tabName) {
  document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
  document.querySelectorAll(".step-btn").forEach(btn => btn.classList.remove("active"));

  document.getElementById(`tab-${tabName}`).classList.add("active");
  document.getElementById(`nav-${tabName}`).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

// RENDER PRETEST: HANYA PILIHAN GANDA (TANPA TAHAPAN)
function renderPretest() {
  const container = document.getElementById("pretest-questions-container");
  let html = "";

  MATHEMATICAL_LITERACY_QUESTIONS.forEach(q => {
    let optionsHtml = "";
    q.options.forEach((opt) => {
      optionsHtml += `
        <label class="radio-option">
          <input type="radio" name="pretest-q${q.id}-choice" value="${opt.value}">
          <span>${opt.label}</span>
        </label>
      `;
    });

    html += `
      <div class="card question-card">
        <span class="badge-indicator"><i class="fa-solid fa-star"></i> Soal ${q.id} | ${q.indicator}</span>
        <h3>${q.title}</h3>
        <div class="question-text">
          <p>${q.story}</p>
          <p class="mt-1"><strong><i class="fa-solid fa-circle-question"></i> Pertanyaan:</strong> ${q.question}</p>
        </div>

        <label class="mt-1"><strong>Pilih Jawaban yang Paling Tepat:</strong></label>
        <div class="radio-group">
          ${optionsHtml}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// RENDER POSTTEST: DENGAN TAHAPAN LENGKAP
function renderPosttest() {
  const container = document.getElementById("posttest-questions-container");
  let html = "";

  MATHEMATICAL_LITERACY_QUESTIONS.forEach(q => {
    let optionsHtml = "";
    q.options.forEach((opt) => {
      optionsHtml += `
        <label class="radio-option">
          <input type="radio" name="posttest-q${q.id}-choice" value="${opt.value}">
          <span>${opt.label}</span>
        </label>
      `;
    });

    html += `
      <div class="card question-card">
        <span class="badge-indicator"><i class="fa-solid fa-star"></i> Soal ${q.id} | ${q.indicator} (Maks: ${q.maxScore} Poin)</span>
        <h3>${q.title}</h3>
        <div class="question-text">
          <p>${q.story}</p>
          <p class="mt-1"><strong><i class="fa-solid fa-circle-question"></i> Pertanyaan:</strong> ${q.question}</p>
        </div>

        <label><i class="fa-solid fa-magnifying-glass"></i> Tahap 1 — Informasi Diketahui & Ruang Sampel:</label>
        <textarea id="posttest-q${q.id}-step1" placeholder="Tuliskan n(S) dan n(A)..."></textarea>

        <label><i class="fa-solid fa-calculator"></i> Tahap 2 — Model Matematika & Perhitungan:</label>
        <textarea id="posttest-q${q.id}-step2" placeholder="Tuliskan rumus P(A) dan alasannya..."></textarea>

        <label class="mt-1"><strong><i class="fa-solid fa-list-check"></i> Tahap 3 — Pilih Jawaban/Kesimpulan:</strong></label>
        <div class="radio-group">
          ${optionsHtml}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function submitTest(type) {
  let totalScore = 0;
  let perQuestionScores = [];

  MATHEMATICAL_LITERACY_QUESTIONS.forEach(q => {
    let qScore = 0;
    const selectedRadio = document.querySelector(`input[name="${type}-q${q.id}-choice"]:checked`);
    const choice = selectedRadio ? selectedRadio.value : "";

    if (type === "pretest") {
      if (choice === q.correctOption) {
        qScore = 6;
      }
    } else {
      const step1 = document.getElementById(`posttest-q${q.id}-step1`).value.trim().toLowerCase();
      const step2 = document.getElementById(`posttest-q${q.id}-step2`).value.trim().toLowerCase();

      let matchS1 = q.keywordsStep1.filter(kw => step1.includes(kw)).length;
      if (matchS1 >= 2) qScore += 2;
      else if (matchS1 === 1) qScore += 1;

      let matchS2 = q.keywordsStep2.filter(kw => step2.includes(kw)).length;
      if (matchS2 >= 2) qScore += 2;
      else if (matchS2 === 1) qScore += 1;

      if (choice === q.correctOption) {
        qScore += 2;
      }
    }

    totalScore += qScore;
    perQuestionScores.push({ id: q.id, title: q.title, score: qScore, max: q.maxScore, rubric: q.rubricAnswer });
  });

  testScores[type] = { total: totalScore, details: perQuestionScores };

  if (type === "pretest") {
    const box = document.getElementById("pretest-result-box");
    box.classList.remove("hidden");
    box.innerHTML = `
      <h3><i class="fa-solid fa-circle-check color-emerald"></i> Pretest Selesai!</h3>
      <p style="font-size: 1.3rem; margin: 10px 0;"><strong>Skor Pretest: ${totalScore} / 30 Poin</strong></p>
      <p>Lanjut ke <strong>Tahap 2: Materi & Rumus</strong> untuk mempelajari konsepnya.</p>
      <button class="btn-action btn-blue mt-1" onclick="switchTab('materi')">Pelajari Materi <i class="fa-solid fa-arrow-right"></i></button>
    `;
    box.scrollIntoView({ behavior: "smooth" });
  } else {
    renderFinalRecap();
  }
}

function renderFinalRecap() {
  const recapBox = document.getElementById("final-recap-box");
  recapBox.classList.remove("hidden");

  const preTotal = testScores.pretest ? testScores.pretest.total : 0;
  const postTotal = testScores.posttest.total;
  const diff = postTotal - preTotal;

  let nGainText = "-";
  if (testScores.pretest && preTotal < 30) {
    const nGain = (postTotal - preTotal) / (30 - preTotal);
    let category = nGain >= 0.7 ? "Tinggi" : nGain >= 0.3 ? "Sedang" : "Rendah";
    nGainText = `${nGain.toFixed(2)} (${category})`;
  }

  let rowsHtml = "";
  testScores.posttest.details.forEach((item, idx) => {
    const preItemScore = testScores.pretest ? testScores.pretest.details[idx].score : "-";
    rowsHtml += `
      <tr>
        <td><strong>Soal ${item.id}</strong>: ${item.title}</td>
        <td>${preItemScore} / 6</td>
        <td><strong class="color-emerald">${item.score} / 6</strong></td>
        <td>${item.rubric}</td>
      </tr>
    `;
  });

  recapBox.innerHTML = `
    <h2><i class="fa-solid fa-trophy color-amber"></i> Laporan Rekapitulasi Hasil Belajar</h2>
    <p class="mt-1"><strong>Siswa:</strong> ${studentData.name} (Kelas ${studentData.class})</p>
    <p><strong>Skor Pretest:</strong> ${preTotal} / 30 | <strong>Skor Posttest:</strong> ${postTotal} / 30</p>
    <p><strong>Peningkatan:</strong> +${diff} Poin | <strong>N-Gain Index:</strong> ${nGainText}</p>

    <table>
      <thead>
        <tr>
          <th>Soal</th>
          <th>Pretest</th>
          <th>Posttest</th>
          <th>Rubrik Solusi</th>
        </tr>
      </thead>
      <tbody>
        ${rowsHtml}
      </tbody>
    </table>
  `;

  recapBox.scrollIntoView({ behavior: "smooth" });
}

/* Interaktivitas Visual Simulasi */
let coinCount = 0, coinGambar = 0, coinAngka = 0;
let diceCount = 0, diceAbove4 = 0;

function simulateCoin() {
  coinCount++;
  const isGambar = Math.random() < 0.5;
  if (isGambar) coinGambar++; else coinAngka++;

  const coinEl = document.getElementById("coin-visual");
  coinEl.style.transform = "rotateY(720deg)";
  setTimeout(() => { coinEl.style.transform = "rotateY(0deg)"; }, 400);

  document.getElementById("coin-text").innerText = isGambar ? "GAMBAR" : "ANGKA";
  document.getElementById("basic-sim-display").innerHTML = `[Koin] Lemparan ke-${coinCount}: Hasil Sisi <strong>${isGambar ? "GAMBAR" : "ANGKA"}</strong>`;
  updateBasicStats();
}

function simulateDice() {
  diceCount++;
  const roll = Math.floor(Math.random() * 6) + 1;
  if (roll > 4) diceAbove4++;

  const diceEl = document.getElementById("dice-visual");
  diceEl.style.transform = "rotate(360deg) scale(1.1)";
  diceEl.querySelector("span").innerText = roll;
  setTimeout(() => { diceEl.style.transform = "rotate(0deg) scale(1)"; }, 400);

  document.getElementById("dice-text").innerText = `Angka ${roll}`;
  document.getElementById("basic-sim-display").innerHTML = `[Dadu] Lemparan ke-${diceCount}: Angka <strong>${roll}</strong> (${roll > 4 ? "Dapat Poin!" : "Tidak > 4"})`;
  updateBasicStats();
}

function updateBasicStats() {
  document.getElementById("basic-sim-stats").innerText = `Total Lempar Koin: ${coinCount} (Gambar: ${coinGambar}, Angka: ${coinAngka}) | Total Dadu: ${diceCount} (Angka > 4: ${diceAbove4})`;
}

function resetBasicSim() {
  coinCount = 0; coinGambar = 0; coinAngka = 0;
  diceCount = 0; diceAbove4 = 0;
  document.getElementById("coin-text").innerText = "Koin";
  document.getElementById("dice-visual").querySelector("span").innerText = "?";
  document.getElementById("basic-sim-display").innerText = "Eksperimen direset.";
  updateBasicStats();
}

function simulateMarbles8x() {
  let redCount = 0, yellowCount = 0;
  let sequence = [];

  for (let i = 0; i < 8; i++) {
    if (Math.random() < 5 / 8) {
      redCount++;
      sequence.push("<span style='color:#ef4444;font-weight:bold;'>Merah</span>");
    } else {
      yellowCount++;
      sequence.push("<span style='color:#eab308;font-weight:bold;'>Kuning</span>");
    }
  }

  const isExact = (redCount === 5 && yellowCount === 3);
  document.getElementById("marble-sim-display").innerHTML = `
    Hasil 8x Ambil: ${redCount} Merah & ${yellowCount} Kuning.<br>
    Urutan: ${sequence.join(" - ")}<br>
    <em>Analisis:</em> ${isExact ? "Kebetulan tepat 5 Merah & 3 Kuning. Coba sekali lagi!" : "Terbukti TIDAK HARUS tepat 5 Merah & 3 Kuning karena bersifat acak!"}
  `;
}

function resetMarbleSim() {
  document.getElementById("marble-sim-display").innerText = "Klik tombol di atas untuk membuktikan kepastian hasil 8x pengambilan kelereng!";
}

function compareGames() {
  const winA = parseInt(document.getElementById("gameA-win").value) || 0;
  const loseA = parseInt(document.getElementById("gameA-lose").value) || 0;
  const winB = parseInt(document.getElementById("gameB-win").value) || 0;
  const loseB = parseInt(document.getElementById("gameB-lose").value) || 0;

  const totalA = winA + loseA;
  const totalB = winB + loseB;

  if (totalA === 0 || totalB === 0) return alert("Jumlah bola tidak boleh 0.");

  const probA = winA / totalA;
  const probB = winB / totalB;

  let decision = probA > probB ? "Permainan A Lebih Menguntungkan!" : probB > probA ? "Permainan B Lebih Menguntungkan!" : "Peluang Kedua Permainan Sama.";

  const resBox = document.getElementById("compare-result");
  resBox.classList.remove("hidden");
  resBox.innerHTML = `
    Peluang A: ${winA}/${totalA} = ${(probA * 100).toFixed(1)}% | Peluang B: ${winB}/${totalB} = ${(probB * 100).toFixed(1)}%<br>
    <strong>Keputusan: ${decision}</strong>
  `;
}