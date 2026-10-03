document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (mainNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    // Add smooth scrolling for anchor links (if browser doesn't support scroll-behavior: smooth natively)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = document.querySelector('.site-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            }
        });
    });
    // ==========================================
    // Frame Menu Book & Catalog Interactivity
    // ==========================================
    const frameCatalogData = [
        {
            id: 0,
            category: 'minimalis',
            categoryName: 'Minimalis Modern Series',
            title: 'Profil Minimalis Modern Gallery',
            desc: 'Desain ramping, simpel, dan elegan untuk nuansa interior modern kontemporer. Sangat digemari untuk foto wisuda, poster galeri, sertifikat resmi, dan interior bergaya Scandinavian minimalist.',
            image: 'assets/frame/catalog-frame-minimalis.jpg',
            pageTag: 'Lembar 01 / 04',
            width: '1.2 cm - 2.5 cm',
            finish: 'Matte Black, Champagne Gold, Pure White, Silver',
            material: 'Kayu Solid / Fiber Anti Rayap',
            bestFor: 'Foto Wisuda, Cetak Seni, Sertifikat Resmi',
            colors: [
                { name: 'Matte Black', color: '#1a1a1a' },
                { name: 'Champagne Gold', color: '#c9a96e' },
                { name: 'Clean White', color: '#f4f4f4', border: true },
                { name: 'Anodized Silver', color: '#a6a6a6' }
            ],
            waMsg: 'Halo Rizky Gallery, saya tertarik pesan/tanya varian Frame Minimalis Modern.'
        },
        {
            id: 1,
            category: 'klasik',
            categoryName: 'Klasik & Baroque Series',
            title: 'Profil Klasik Baroque Ukir Mewah',
            desc: 'Sentuhan kemewahan istana dengan relief ukiran artistik yang mendalam bermotif floral rococo, mahkota kerajaan, dan sulur daun. Dihiasi kilau antique gold leaf yang memukau.',
            image: 'assets/frame/catalog-frame-klasik.jpg',
            pageTag: 'Lembar 02 / 04',
            width: '3.0 cm - 8.0 cm',
            finish: 'Antique Gold Leaf, Burnished Silver, Gilded Rosette',
            material: 'Kayu Mahoni / Fiber Polystyrene Ukir',
            bestFor: 'Kaligrafi Arab, Lukisan Kanvas, Foto Keluarga Besar',
            colors: [
                { name: 'Antique Gold', color: '#d4af37' },
                { name: 'Burnished Bronze', color: '#8c6239' },
                { name: 'Vintage Silver', color: '#c0c0c0' },
                { name: 'Royal Gold Leaf', color: '#e6ca65' }
            ],
            waMsg: 'Halo Rizky Gallery, saya tertarik pesan/tanya varian Frame Klasik Baroque Ukir Mewah.'
        },
        {
            id: 2,
            category: 'kayu',
            categoryName: 'Natural Wood & Rustic Series',
            title: 'Profil Kayu Solid & Rustic Artisan',
            desc: 'Kehangatan urat kayu alami yang menenangkan dan berkelas. Menggunakan finishing ramah lingkungan natural oil serta sentuhan vintage distressed wash untuk estetika ruang yang hangat.',
            image: 'assets/frame/catalog-frame-kayu.jpg',
            pageTag: 'Lembar 03 / 04',
            width: '2.0 cm - 5.5 cm',
            finish: 'Teak Natural Oil, Dark Espresso, Distressed Wash, Pine',
            material: 'Kayu Jati Asli, Walnut & Pinus Pilihan',
            bestFor: 'Foto Keluarga, Poster Botanical, Seni Sketsa, Cafe & Home Decor',
            colors: [
                { name: 'Teak Wood', color: '#b27a3c' },
                { name: 'Dark Walnut', color: '#3d2616' },
                { name: 'Distressed White', color: '#e5dec9', border: true },
                { name: 'Light Pine', color: '#e7c99a' }
            ],
            waMsg: 'Halo Rizky Gallery, saya tertarik pesan/tanya varian Frame Kayu Solid & Rustic Artisan.'
        },
        {
            id: 3,
            category: 'shadowbox',
            categoryName: '3D Box & Mahar Series',
            title: 'Profil 3D Shadow Box & Double Linen',
            desc: 'Figura dengan rongga kedalaman khusus (depth space) serta kombinasi list ganda linen mewah. Didesain secara presisi untuk menata karya 3 dimensi, uang mahar koin/bunga, dan memorabilia berharga.',
            image: 'assets/frame/catalog-frame-shadowbox.jpg',
            pageTag: 'Lembar 04 / 04',
            width: 'Rongga Kedalaman 4 cm - 8 cm',
            finish: 'Natural Teak, Dark Walnut, Double Linen Matboard',
            material: 'Kayu Solid Tebal + Kaca Akrilik Premium',
            bestFor: 'Mahar Pernikahan, Medali Kejuaraan, Koleksi Memorabilia 3D',
            colors: [
                { name: 'Walnut Box', color: '#4a2f1b' },
                { name: 'Dark Oak', color: '#2b2118' },
                { name: 'Mahogany', color: '#68251a' },
                { name: 'Cream Linen Mat', color: '#f5edd6', border: true }
            ],
            waMsg: 'Halo Rizky Gallery, saya tertarik pesan/tanya varian Frame 3D Shadow Box & Mahar Pernikahan.'
        }
    ];

    let currentBookIndex = 0;
    const bookImg = document.getElementById('book-active-img');
    const bookPageNum = document.getElementById('book-page-num');
    const bookCategory = document.getElementById('book-detail-category');
    const bookTitle = document.getElementById('book-detail-title');
    const bookDesc = document.getElementById('book-detail-desc');
    const bookSpecWidth = document.getElementById('book-spec-width');
    const bookSpecFinish = document.getElementById('book-spec-finish');
    const bookSpecMaterial = document.getElementById('book-spec-material');
    const bookSpecBest = document.getElementById('book-spec-best');
    const bookColorChips = document.getElementById('book-color-chips');
    const bookWaBtn = document.getElementById('book-wa-btn');
    const bookDots = document.querySelectorAll('.book-dot');
    const bookPrevBtn = document.getElementById('book-prev');
    const bookNextBtn = document.getElementById('book-next');

    function renderBookPage(index) {
        if (!bookImg || !frameCatalogData[index]) return;
        currentBookIndex = index;
        const data = frameCatalogData[index];

        // Animate image switch
        bookImg.style.opacity = '0.3';
        bookImg.style.transform = 'scale(0.97)';
        setTimeout(() => {
            bookImg.src = data.image;
            bookImg.alt = data.title;
            bookImg.style.opacity = '1';
            bookImg.style.transform = 'scale(1)';
        }, 180);

        bookPageNum.textContent = data.pageTag;
        bookCategory.textContent = data.categoryName;
        bookTitle.textContent = data.title;
        bookDesc.textContent = data.desc;
        if (bookSpecWidth) bookSpecWidth.textContent = data.width;
        if (bookSpecFinish) bookSpecFinish.textContent = data.finish;
        if (bookSpecMaterial) bookSpecMaterial.textContent = data.material;
        if (bookSpecBest) bookSpecBest.textContent = data.bestFor;

        // Render color chips
        if (bookColorChips) {
            bookColorChips.innerHTML = data.colors.map(c => `
                <span class="color-chip">
                    <span class="color-dot" style="background:${c.color}; ${c.border ? 'border:1px solid #ccc;' : ''}"></span>
                    ${c.name}
                </span>
            `).join('');
        }

        // WA button
        bookWaBtn.href = `https://wa.me/62895347207262?text=${encodeURIComponent(data.waMsg)}`;

        // Update dots
        bookDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    if (bookPrevBtn) {
        bookPrevBtn.addEventListener('click', () => {
            const nextIdx = (currentBookIndex - 1 + frameCatalogData.length) % frameCatalogData.length;
            renderBookPage(nextIdx);
        });
    }

    if (bookNextBtn) {
        bookNextBtn.addEventListener('click', () => {
            const nextIdx = (currentBookIndex + 1) % frameCatalogData.length;
            renderBookPage(nextIdx);
        });
    }

    bookDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const idx = parseInt(dot.getAttribute('data-index'), 10);
            renderBookPage(idx);
        });
    });

    // ==========================================
    // Lightbox Modal Functionality
    // ==========================================
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const bookInspectBtn = document.getElementById('book-inspect-btn');
    const bookZoomBtn = document.getElementById('book-zoom-btn');

    function openLightbox(src, title, sub) {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = src;
        if (lightboxCaption) {
            lightboxCaption.innerHTML = `<h4>${title || 'Katalog Pilihan Profil Frame'}</h4><p>${sub || 'Rizky Gallery Semarang • Kualitas Pengerjaan Siku Presisi'}</p>`;
        }
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    if (bookZoomBtn) {
        bookZoomBtn.addEventListener('click', () => {
            const currentData = frameCatalogData[currentBookIndex];
            openLightbox(currentData.image, currentData.title, `${currentData.categoryName} • ${currentData.finish}`);
        });
    }

    if (bookInspectBtn) {
        bookInspectBtn.addEventListener('click', () => {
            const currentData = frameCatalogData[currentBookIndex];
            openLightbox(currentData.image, currentData.title, `${currentData.categoryName} • ${currentData.finish}`);
        });
    }

    if (bookImg) {
        bookImg.addEventListener('click', () => {
            const currentData = frameCatalogData[currentBookIndex];
            openLightbox(currentData.image, currentData.title, `${currentData.categoryName} • ${currentData.finish}`);
        });
    }
});
