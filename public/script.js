// Fungsi untuk simulasi kirim pesan
function kirimPesan(event) {
    event.preventDefault(); // Mencegah halaman refresh
    
    // Tampilkan pesan sukses
    document.getElementById('pesan-sukses').style.display = 'block';
    
    // Reset form
    event.target.reset();
    
    // Sembunyikan pesan sukses setelah 3 detik
    setTimeout(() => {
        document.getElementById('pesan-sukses').style.display = 'none';
    }, 3000);
}

// Efek smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('🎉 Website berhasil dimuat!');