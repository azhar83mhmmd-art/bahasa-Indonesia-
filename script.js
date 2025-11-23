// script.js (Versi Solo/Standalone LENGKAP)

// --- DATA 40 SOAL LENGKAP ---
const quizData = [
    { type: "pg", question: "Data yang disajikan berupa <b>angka</b>, bukan dalam bentuk lisan/kata, disebut...", options: ["Kualitatif", "Kuantitatif", "Deskriptif", "Naratif"], correct: "Kuantitatif" },
    { type: "pg", question: "Tanda baca yang digunakan pada kalimat <b>imperatif</b> adalah...", options: ["Tanda tanya (?)", "Tanda titik (.)", "Tanda seru (!)", "Tanda koma (,)"], correct: "Tanda seru (!)" },
    { type: "pg", question: "Langkah pertama menulis artikel ilmiah adalah...", options: ["Melakukan observasi", "Menentukan topik", "Mencari sumber", "Mengecek plagiasi"], correct: "Menentukan topik" },
    { type: "pg", question: "Hubungan antara dua kata yang menyatakan makna <b>pertentangan</b> disebut...", options: ["Sinonim", "Antonim", "Homonim", "Polisemi"], correct: "Antonim" },
    { type: "pg", question: "Hubungan antara dua kata yang menyatakan makna yang <b>sama</b> disebut...", options: ["Sinonim", "Antonim", "Akronim", "Hipernim"], correct: "Sinonim" },
    { type: "pg", question: "Alasan yang digunakan untuk memperkuat opini disebut...", options: ["Fakta", "Argumentasi", "Deskripsi", "Persuasi"], correct: "Argumentasi" },
    { type: "pg", question: "Pengertian dari <b>opini</b> adalah...", options: ["Kenyataan", "Pendapat", "Data angka", "Peristiwa"], correct: "Pendapat" },
    { type: "pg", question: "Pengertian dari <b>fakta</b> adalah...", options: ["Berdasarkan kenyataan", "Berdasarkan asumsi", "Berdasarkan khayalan", "Berdasarkan perkiraan"], correct: "Berdasarkan kenyataan" },
    { type: "pg", question: "Data yang disajikan berupa lisan/kata, bukan berbentuk angka, disebut...", options: ["Kualitatif", "Kuantitatif", "Statistik", "Numerik"], correct: "Kualitatif" },
    { type: "pg", question: "Aktivitas akhir dalam menulis teks laporan hasil observasi adalah...", options: ["Mengamati", "Menilai", "Menulis kerangka", "Mencari topik"], correct: "Menilai" },
    { type: "pg", question: "Ciri laporan hasil observasi adalah...", options: ["Berupa opini", "Berupa prediksi", "Berupa fakta", "Bersifat subjektif"], correct: "Berupa fakta" },
    { type: "pg", question: "Paragraf yang menjelaskan <b>definisi umum</b> biasanya terdapat pada bagian...", options: ["Awal teks", "Tengah teks", "Akhir teks", "Kesimpulan"], correct: "Awal teks" },
    { type: "pg", question: "Jenis paragraf yang bertujuan memaparkan informasi disebut...", options: ["Naratif", "Deskriptif", "Eksposisi", "Argumentasi"], correct: "Eksposisi" },
    { type: "pg", question: "Tanaman lidah buaya aslinya berasal dari benua...", options: ["Asia", "Afrika", "Amerika", "Eropa"], correct: "Afrika" },
    { type: "pg", question: "Teks laporan hasil observasi merupakan dokumentasi yang berisi...", options: ["Khayalan", "Fakta-fakta", "Dongeng", "Rumor"], correct: "Fakta-fakta" },
    { type: "pg", question: "Gagasan pokok dalam teks tentang Beruang Madu biasanya membahas...", options: ["Jenis makanan", "Delapan jenis beruang", "Cara tidur", "Warna bulu"], correct: "Delapan jenis beruang" },
    { type: "pg", question: "Arti kata <b>konservasi</b> adalah...", options: ["Pemeliharaan & perlindungan", "Penjualan bebas", "Perburuan liar", "Pengamatan jauh"], correct: "Pemeliharaan & perlindungan" },
    { type: "pg", question: "Penggunaan tanda koma yang tepat adalah...", options: ["Buku, pensil, dan, tas", "Buku pensil, dan tas", "Buku, pensil, dan tas", "Buku, pensil dan, tas"], correct: "Buku, pensil, dan tas" },
    { type: "pg", question: "Kumpulan beberapa fakta dalam observasi disebut...", options: ["Data", "Isu", "Opini", "Wacana"], correct: "Data" },
    { type: "pg", question: "Kegiatan mengumpulkan fakta tentang hal yang dilaporkan disebut...", options: ["Imajinasi", "Observasi", "Visualisasi", "Demonstrasi"], correct: "Observasi" },
    { type: "pg", question: "Iklan yang target utamanya adalah konsumen akhir disebut iklan...", options: ["Layanan Masyarakat", "Konsumen", "Bisnis", "Keluarga"], correct: "Konsumen" },
    { type: "pg", question: "Informasi yang <b>TIDAK</b> dimuat dalam iklan komersial adalah...", options: ["Keunggulan", "Manfaat", "Kekurangan produk", "Harga"], correct: "Kekurangan produk" },
    { type: "pg", question: "Media publikasi tulisan dan gambar untuk informasi publik disebut...", options: ["Poster", "Komik", "Novel", "Majalah"], correct: "Poster" },
    { type: "pg", question: "Yang <b>BUKAN</b> ciri bahasa iklan adalah...", options: ["Persuasif", "Menarik", "Menggunakan bahasa baku kaku", "Ringkas"], correct: "Menggunakan bahasa baku kaku" },
    { type: "pg", question: "Contoh yang <b>BUKAN</b> Iklan Layanan Masyarakat adalah...", options: ["Ayo Hemat Listrik", "Jauhi Narkoba", "Promo HP Baru", "Buang Sampah pada Tempatnya"], correct: "Promo HP Baru" },
    { type: "pg", question: "Iklan yang memuat penawaran barang/jasa disebut iklan...", options: ["Penawaran", "Permintaan", "Pengumuman", "Undangan"], correct: "Penawaran" },
    { type: "pg", question: "Poster ajakan menghemat energi termasuk jenis...", options: ["Niaga", "Layanan Masyarakat", "Pendidikan", "Karya Seni"], correct: "Layanan Masyarakat" },
    { type: "pg", question: "Kalimat 'Ayo beli sekarang!' termasuk jenis kalimat...", options: ["Interogatif", "Imperatif", "Deklaratif", "Pasif"], correct: "Imperatif" },
    { type: "pg", question: "Struktur Artikel Ilmiah Populer yang benar adalah...", options: ["Pembuka-Isi-Penutup", "Pembuka-Leher-Isi-Penutup", "Judul-Isi-Daftar Pustaka", "Abstrak-Isi-Kesimpulan"], correct: "Pembuka-Leher-Isi-Penutup" },
    { type: "pg", question: "Bagian pembuka Artikel Ilmiah Populer berisi...", options: ["Salam penutup", "Uraian aktual/pengantar", "Daftar harga", "Biodata penulis"], correct: "Uraian aktual/pengantar" },
    { type: "pg", question: "Bagian 'leher' pada artikel ilmiah populer berfungsi sebagai...", options: ["Penyambung", "Penutup", "Judul", "Hiasan"], correct: "Penyambung" },
    { type: "pg", question: "Bagian inti dari artikel ilmiah populer disebut...", options: ["Leher", "Kepala", "Isi tubuh", "Kaki"], correct: "Isi tubuh" },
    { type: "pg", question: "Struktur akhir penyusunan artikel ilmiah populer adalah...", options: ["Pembukaan", "Penutup", "Leher", "Abstrak"], correct: "Penutup" },
    { type: "pg", question: "Kecuali satu, ini adalah ciri artikel ilmiah populer...", options: ["Bahasa santai", "Topik hangat", "Sangat formal & kaku", "Mudah dipahami"], correct: "Sangat formal & kaku" },
    { type: "pg", question: "Cara mengumpulkan data artikel ilmiah populer bisa melalui...", options: ["Wawancara & kuesioner", "Mengarang bebas", "Menebak", "Menyalin tulisan orang"], correct: "Wawancara & kuesioner" },
    
    // ISIAN (36-38)
    { type: "isian", question: "Iklan makanan dan minuman termasuk ke dalam jenis iklan ...", answer: "Penawaran" },
    { type: "isian", question: "Kalimat 'Ayo gunakan listrik seperlunya!' menggunakan gaya bahasa ...", answer: "Persuasif" },
    { type: "isian", question: "Media paling efektif untuk mempromosikan barang kepada masyarakat luas adalah ...", answer: "Iklan" },

    // BENAR / SALAH (39-40)
    { type: "bs", question: "Artikel ilmiah populer melarang keras penggunaan kata ganti 'saya' atau 'kami'.", answer: "Salah" },
    { type: "bs", question: "Bagian penutup artikel wajib berisi penegasan kembali argumen penulis.", answer: "Benar" }
];
// -------------------------------------------------------------

// State Latihan
let username = "";
let soloQuestionIndex = 0;
let soloScore = 0;

// DOM Helpers
const getEl = (id) => document.getElementById(id);
const showScreen = (id) => {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    getEl(id).classList.add('active');
};

// Elemen feedback visual
const visualFeedback = getEl('visual-feedback');
const feedbackIcon = getEl('feedback-icon');

// 1. INPUT NAMA
getEl('name-input').addEventListener('input', (e) => {
    getEl('submit-name').disabled = e.target.value.trim() === "";
});
getEl('submit-name').addEventListener('click', () => {
    username = getEl('name-input').value.trim();
    if(username) {
        getEl('display-username').innerText = username;
        showScreen('start-menu');
    }
});

// 2. NAVIGASI MENU & START LATIHAN
getEl('btn-latihan').onclick = startSoloGame;

function startSoloGame() {
    soloQuestionIndex = 0;
    soloScore = 0;
    getEl('current-score').innerText = soloScore;
    
    showScreen('quiz-area');
    if (quizData.length === 0) {
        getEl('q-text').innerHTML = "Belum ada soal!";
        return;
    }
    renderQuestion(quizData[soloQuestionIndex], soloQuestionIndex + 1);
}

// FUNGSI UTAMA RENDER SOAL
function renderQuestion(q, idx) {
    getEl('q-number').innerText = `Soal ${idx}/${quizData.length}`;
    getEl('q-text').innerHTML = q.question;
    getEl('result-message').classList.add('hidden');
    const area = getEl('answer-area');
    area.innerHTML = "";
    
    // RENDER TOMBOL
    if(q.type === 'pg') {
        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'opt-btn';
            btn.innerHTML = opt;
            btn.onclick = () => sendAns(opt, 1);
            area.appendChild(btn);
        });
    } else if (q.type === 'bs') {
        ['Benar', 'Salah'].forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'opt-btn';
            btn.style.textAlign = 'center';
            btn.style.fontWeight = 'bold';
            btn.style.color = opt === 'Benar' ? '#00b894' : '#d63031';
            btn.innerText = opt;
            btn.onclick = () => sendAns(opt, 1);
            area.appendChild(btn);
        });
    } else if (q.type === 'isian') {
        area.innerHTML = `
            <input type="text" id="isian-input" placeholder="Jawaban..." class="big-input" autocomplete="off" style="margin-bottom:10px">
            <button id="kirim-isian" class="btn-main">Kirim</button>
        `;
        getEl('kirim-isian').onclick = () => sendAns(getEl('isian-input').value, 1);
    }
}

// FUNGSI UTAMA KIRIM DAN CEK JAWABAN
function sendAns(ans, t) {
    // Disable semua input
    const all = document.querySelectorAll('.opt-btn, #isian-input, #kirim-isian');
    all.forEach(el => el.disabled = true);
    
    const currentQ = quizData[soloQuestionIndex];
    checkAnswer(currentQ, ans, t);
}

function checkAnswer(question, answer, t) {
    let isCorrect = false;
    let correctText = question.answer || question.correct;

    if (answer !== null) {
        if (question.type === 'pg' && answer === question.correct) isCorrect = true;
        else if (question.type === 'bs' && answer === question.answer) isCorrect = true;
        else if (question.type === 'isian' && answer.toLowerCase().trim() === correctText.toLowerCase().trim()) isCorrect = true;
    }

    const toast = getEl('result-message');
    if (isCorrect) {
        const points = 100;
        soloScore += points;
        getEl('current-score').innerText = soloScore;
        toast.innerHTML = "✅ BENAR! (+100 poin)";
        toast.className = `toast correct`;

        // Tampilkan notifikasi visual hijau centang
        feedbackIcon.className = 'fas fa-check';
        visualFeedback.className = 'visual-feedback show correct';
    } else {
        toast.innerHTML = `❌ SALAH. Jawaban: <b>${correctText}</b>`;
        toast.className = `toast incorrect`;

        // Tampilkan notifikasi visual merah X
        feedbackIcon.className = 'fas fa-times';
        visualFeedback.className = 'visual-feedback show incorrect';
    }
    toast.classList.remove('hidden');

    // Sembunyikan notifikasi visual dan lanjut ke soal berikutnya setelah jeda 2 detik
    setTimeout(() => {
        visualFeedback.className = 'visual-feedback hidden'; // Sembunyikan notifikasi
        soloQuestionIndex++;
        if (soloQuestionIndex < quizData.length) {
            renderQuestion(quizData[soloQuestionIndex], soloQuestionIndex + 1);
        } else {
            soloGameOver();
        }
    }, 2000);
}

function soloGameOver() {
    showScreen('game-over');
    getEl('final-score').innerText = soloScore;

    const maxScore = quizData.length * 100; // Total 4000
    const scorePercentage = (soloScore / maxScore) * 100;
    let finalMessage = "";

    // Logika penentuan pesan berdasarkan persentase
    if (scorePercentage <= 50) {
        finalMessage = "oon belajar lagi deckk!?";
    } else if (scorePercentage <= 60) {
        finalMessage = "cupu amat";
    } else if (scorePercentage <= 80) {
        finalMessage = "segini doang";
    } else { // 81 - 100
        finalMessage = "kelazz kink";
    }

    // Tampilkan pesan di layar Game Over
    getEl('result-message-final').innerHTML = `<h2 class="highlight-text">${finalMessage}</h2>`;
}