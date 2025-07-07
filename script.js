// GANTI SEMUA ISI SCRIPT.JS DENGAN INI

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    let currentSlide = 0;

    function updateNavButtons() {
        // Sembunyikan semua tombol dulu
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'none';

        // Tampilkan tombol berdasarkan halaman saat ini
        if (currentSlide > 0) {
            prevBtn.style.display = 'inline-block';
        }
        if (currentSlide < slides.length - 1) {
            nextBtn.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            // Hanya tampilkan tombol submit di halaman terakhir
            submitBtn.style.display = 'inline-block';
        }
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

    // Inisialisasi tampilan awal
    showSlide(0);
});
