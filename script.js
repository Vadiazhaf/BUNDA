document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const form = document.getElementById('lkpdForm');
    
    let currentSlide = 0;

    function updateNavButtons() {
        // Atur tombol 'Sebelumnya'
        prevBtn.style.display = currentSlide === 0 ? 'none' : 'inline-block';
        
        // Atur tombol 'Berikutnya'
        nextBtn.style.display = currentSlide === slides.length - 1 ? 'none' : 'inline-block';

        // Atur tombol 'Kirim'
        submitBtn.style.display = currentSlide === slides.length - 1 ? 'inline-block' : 'none';
    }

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        currentSlide = index;
        updateNavButtons();
    }

    nextBtn.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            showSlide(currentSlide + 1);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Mencegah form reload halaman

        // Mengumpulkan semua data dari form
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Menampilkan data di console browser (untuk pengecekan)
        console.log("LKPD Berhasil Dikumpulkan!");
        console.log(data);
        
        // Menampilkan pesan sukses
        alert(`Terima kasih, ${data.nama_siswa}! Jawabanmu telah berhasil dikirim.`);
        
        // Mengosongkan form
        form.reset();
        showSlide(0); // Kembali ke halaman pertama
    });

    // Inisialisasi
    showSlide(0);
});