

// Data untuk Modal Denah (Ganti dengan URL Gambar Anda!)
const unitData = {
    '36+': {
        title: 'Tipe 36+ / 140 (Layout Suka-Suka)',
        price: 'Rp 200.000.000',
        imageSrc: 'img/rumah.jpg' // GANTI URL GAMBAR DENAH
    },
    '36': {
        title: 'Tipe 36 / 140 (Subsidi)',
        price: 'Rp 180.000.000',
        imageSrc: 'img/rmsubsidi.jpg' // GANTI URL GAMBAR DENAH
        
    },
     '10': {
        title: 'Map Keseluruhan Perumahan',
        price: 'GUNTUNG MANGGIS TOWNHOUSE',
        imageSrc: 'img/area.jpg' // GANTI URL GAMBAR DENAH
        
    }

};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling untuk Navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Accordion Spesifikasi
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');

            // Tutup semua konten accordion
            document.querySelectorAll('.accordion-content').forEach(c => {
                c.style.maxHeight = null;
                c.style.padding = '0 20px';
            });
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.classList.remove('active');
            });

            // Buka konten yang diklik jika belum aktif
            if (!isActive) {
                header.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = '15px 20px'; // Tambahkan padding saat terbuka
            }
        });
    });

    // 3. Modal Denah Tipe Unit
    const modal = document.getElementById('modal-denah');
    const closeBtn = document.querySelector('.close-btn');
    const detailBtns = document.querySelectorAll('.detail-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const modalImageContainer = document.getElementById('modal-image-container');

    detailBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tipe = btn.closest('.tipe-card').getAttribute('data-tipe');
            const data = unitData[tipe];

            if (data) {
                modalTitle.textContent = data.title;
                modalPrice.textContent = `Harga: ${data.price}`;

                // Hapus konten lama dan tambahkan gambar baru
                modalImageContainer.innerHTML = `<img src="${data.imageSrc}" alt="Denah ${data.title}">`;

                modal.style.display = 'block';
            }
        });
    });
      detailBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tipe = btn.closest('.area').getAttribute('data-tipe');
            const data = unitData[tipe];

            if (data) {
                modalTitle.textContent = data.title;
                modalPrice.textContent = `${data.price}`;

                // Hapus konten lama dan tambahkan gambar baru
                modalImageContainer.innerHTML = `<img src="${data.imageSrc}" alt="Denah ${data.title}">`;

                modal.style.display = 'block';
            }
        });
    });
    
    

    // Tutup modal ketika tombol X diklik
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // Tutup modal ketika user mengklik di luar modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
