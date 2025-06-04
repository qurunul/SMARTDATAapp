//Navbar
const toggle = document.querySelector('.toggle');
const navbarLinks = document.querySelector('.navbar-links');
toggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

//Simulasi
function simulasiRisiko() {
    const select = document.getElementById('data-pribadi');
    const hasil = document.getElementById('hasil-simulasi');
    const data = select.value;

    if (!data) {
        hasil.textContent = "Mohon pilih jenis data pribadi untuk melihat risiko.";
        return;
    }

    let output = '';

    switch(data) {
        case 'nik':
        output = "Risiko nyata jika bocor:\n- Pencurian identitas (identity theft).\n- Pendaftaran pinjaman ilegal ilegal atas nama Anda.\n- Penyalahgunaan dalam pembuatan akun palsu (bank, SIM card, e-wallet, dsb).\n- Potensi penyalahgunaan untuk pengalihan hak atau keperluan hukum tanpa sepengetahuan.\n Ciri-Ciri yang Bisa Dikenali:\n- Menerima tagihan pinjaman online yang tidak pernah Anda ajukan.\n- Mendapat notifikasi verifikasi akun dari layanan yang tidak Anda daftarkan.\n- Nama Anda muncul di daftar hutang pinjol di aplikasi pihak ketiga (misalnya: cek BI Checking / SLIK OJK).";
        break;
        case 'nomor_hp':
        output = "Risiko Nyata Jika Bocor:\n- Penipuan melalui telepon atau WhatsApp (modus OTP palsu, undangan link berbahaya).\n- Nomor Anda dijadikan target spam, robo-call, dan iklan tidak diinginkan.\n- Potensi SIM-swap (pencurian nomor SIM untuk ambil alih akun WhatsApp, Telegram, dsb).\n- Digunakan untuk registrasi akun layanan digital secara ilegal.\n Ciri-Ciri yang Bisa Dikenali:\n- Sering menerima panggilan mencurigakan atau SMS dari nomor tak dikenal.\n- Mendapat permintaan OTP dari layanan yang tidak Anda gunakan.\n- Nomor WhatsApp Anda tiba-tiba logout tanpa alasan (indikasi SIM swap).\n- Kontak Anda menerima pesan mencurigakan seolah dari Anda.";
        break;
        case 'email':
        output = "Risiko Nyata Jika Bocor:\n- Serangan phishing (email jebakan) dengan mengaku dari bank, kampus, atau platform belanja.\n- Akses ilegal ke akun media sosial atau platform lain jika password email sama.\n- Masuk ke daftar spam global, menyebabkan inbox dibanjiri iklan / malware.\n- Email dijadikan sarana menyebar hoaks atau pemerasan digital.\n Ciri-Ciri yang Bisa Dikenali:\n- Menerima email dari pengirim asing yang berisi tautan mencurigakan.\n- Tiba-tiba logout dari akun email atau akun lain yang tertaut.\n- Mendapat email percobaan login gagal dari lokasi yang tidak dikenal.\n- Email digunakan untuk reset password layanan lain tanpa seizin Anda.";
        break;
        case 'nama_ibu':
        output = "Risiko Nyata Jika Bocor:\n- Menjawab pertanyaan keamanan akun digital (banyak sistem masih pakai ini!).\n- Dapat digunakan untuk mengakses akun bank melalui call center.\n- Membantu pelaku menyusun serangan social engineering yang lebih meyakinkan (profiling identitas).\n Ciri-Ciri yang Bisa Dikenali:\n- Akun Anda diakses meskipun tidak membagikan password, karena pelaku berhasil menjawab pertanyaan keamanan.\n- Pihak bank atau layanan online menghubungi Anda tentang aktivitas mencurigakan padahal Anda tidak pernah mengajukan.\n- Ada perubahan atau reset akun tanpa permintaan dari Anda.";
        break;
        default:
        output = "Pilih jenis data untuk melihat risiko nyata yang bisa terjadi.";
    }

    hasil.textContent = output;
}

//Kuis
function submitQuiz() {
    const total = 5;
    const answers = {
        q1: "B",
        q2: "C",
        q3: "B",
        q4: "B",
        q5: "C"
    };


    // Check all required questions answered
    for (let i = 1; i <= total; i++) {
        const checked = document.querySelector(`input[name="q${i}"]:checked`);
        if (!checked) {
            alert(`Mohon jawab pertanyaan nomor ${i} terlebih dahulu.`);
            return;
        }
    }

    // Calculate score
    let score = 0;
    for (let i = 1; i <= total; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected.value === answers[`q${i}`]) {
            score++;
        }
    }

    const resultBox = document.getElementById("result");
    resultBox.style.display = "block";
    resultBox.innerHTML = `
    <h3>Hasil Kuis:</h3>
    <p>Kamu menjawab <strong>${score} dari ${total}</strong> pertanyaan dengan benar.</p>
    <p>${
        score === 5
        ? "🛡️ Kamu sangat waspada terhadap keamanan data. Pertahankan!"
        : score >= 3
        ? "⚠️ Kamu cukup waspada, tapi masih ada yang perlu diperhatikan."
        : "❌ Wah, kamu harus lebih hati-hati terhadap risiko kebocoran data."
    }</p>
    `;
    // Show the Lanjut button after showing result
    document.getElementById('nextBtn').style.display = 'inline-block';
}