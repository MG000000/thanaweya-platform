
const teachersData = [
    // ===== أولى ثانوي - علمي =====
    {
        id: 1, name: "أ/ ناصر محمد سالم", subject: "الرياضيات", year: "first", branch: "scientific", region: "cairo",
        rating: 4.9, students: 12500, experience: "15 سنة", regionName: "القاهرة",
        videos: [
            { title: "الدرس الأول: المجموعات", subject: "رياضيات", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" },
            { title: "الدوال والتطبيقات", subject: "رياضيات", embed: "https://www.youtube.com/embed/7elGcfTr7oA" },
            { title: "مراجعة ليلة الامتحان", subject: "رياضيات", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" }
        ]
    },
    {
        id: 2, name: "أ/ محمد عبدالمعبود", subject: "الفيزياء", year: "first", branch: "scientific", region: "alex",
        rating: 4.8, students: 9800, experience: "12 سنة", regionName: "الإسكندرية",
        videos: [
            { title: "مقدمة في الفيزياء", subject: "فيزياء", embed: "https://www.youtube.com/embed/7elGcfTr7oA" },
            { title: "الحركة والسرعة", subject: "فيزياء", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" }
        ]
    },
    {
        id: 3, name: "أ/ سامح إبراهيم", subject: "الكيمياء", year: "first", branch: "scientific", region: "online",
        rating: 4.7, students: 15000, experience: "10 سنوات", regionName: "أونلاين",
        videos: [
            { title: "البنية الذرية", subject: "كيمياء", embed: "https://www.youtube.com/embed/7elGcfTr7oA" },
            { title: "الجدول الدوري", subject: "كيمياء", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" },
            { title: "الروابط الكيميائية", subject: "كيمياء", embed: "https://www.youtube.com/embed/7elGcfTr7oA" }
        ]
    },
    {
        id: 4, name: "د/ يحي عبدالدايم", subject: "الأحياء", year: "first", branch: "scientific", region: "giza",
        rating: 4.6, students: 8700, experience: "8 سنوات", regionName: "الجيزة",
        videos: [
            { title: "الخلية - الجزء الأول", subject: "أحياء", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" },
            { title: "الخلية - الجزء الثاني", subject: "أحياء", embed: "https://www.youtube.com/embed/7elGcfTr7oA" }
        ]
    },
    // ===== أولى ثانوي - أدبي =====
    {
        id: 5, name: "أ/ محمد سعد الباشا", subject: "التاريخ", year: "first", branch: "literary", region: "cairo",
        rating: 4.9, students: 11000, experience: "14 سنة", regionName: "القاهرة",
        videos: [
            { title: "الحضارة المصرية القديمة", subject: "تاريخ", embed: "https://www.youtube.com/embed/7elGcfTr7oA" },
            { title: "العصور الوسطى", subject: "تاريخ", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" }
        ]
    },
    {
        id: 6, name: "أ/ إسلام الصعيدي", subject: "الجغرافيا", year: "first", branch: "literary", region: "alex",
        rating: 4.7, students: 9200, experience: "11 سنة", regionName: "الإسكندرية",
        videos: [
            { title: "خرائط العالم", subject: "جغرافيا", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" },
            { title: "المناخ والبيئة", subject: "جغرافيا", embed: "https://www.youtube.com/embed/7elGcfTr7oA" }
        ]
    },
    // ===== ثانية ثانوي - علمي =====
    {
        id: 7, name: "أ/ ياسر عبدالله", subject: "الرياضيات", year: "second", branch: "scientific", region: "mansoura",
        rating: 4.9, students: 14000, experience: "16 سنة", regionName: "المنصورة",
        videos: [
            { title: "التفاضل - الجزء الأول", subject: "رياضيات", embed: "https://www.youtube.com/embed/7elGcfTr7oA" },
            { title: "التفاضل - الجزء الثاني", subject: "رياضيات", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" },
            { title: "التكامل", subject: "رياضيات", embed: "https://www.youtube.com/embed/7elGcfTr7oA" }
        ]
    },
    {
        id: 8, name: "أ/ أحمد ندى", subject: "الفيزياء", year: "second", branch: "scientific", region: "online",
        rating: 4.8, students: 13000, experience: "13 سنة", regionName: "أونلاين",
        videos: [
            { title: "الكهرباء الساكنة", subject: "فيزياء", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" },
            { title: "التيار الكهربي", subject: "فيزياء", embed: "https://www.youtube.com/embed/7elGcfTr7oA" }
        ]
    },
    {
        id: 9, name: "أ/ محمد عبدالجواد", subject: "الكيمياء", year: "second", branch: "scientific", region: "tanta",
        rating: 4.6, students: 7800, experience: "9 سنوات", regionName: "طنطا",
        videos: [
            { title: "الكيمياء العضوية", subject: "كيمياء", embed: "https://www.youtube.com/embed/7elGcfTr7oA" },
            { title: "الهيدروكربونات", subject: "كيمياء", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" }
        ]
    },
    // ===== ثانية ثانوي - أدبي =====
    {
        id: 10, name: "أ/ نادر جورج", subject: "الفلسفة", year: "second", branch: "literary", region: "cairo",
        rating: 4.8, students: 10500, experience: "12 سنة", regionName: "القاهرة",
        videos: [
            { title: "مقدمة في الفلسفة", subject: "فلسفة", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" },
            { title: "المشكلة الفلسفية", subject: "فلسفة", embed: "https://www.youtube.com/embed/7elGcfTr7oA" }
        ]
    },
    {
        id: 11, name: "أ/ إسلام عيد", subject: "علم النفس", year: "second", branch: "literary", region: "giza",
        rating: 4.7, students: 9500, experience: "10 سنوات", regionName: "الجيزة",
        videos: [
            { title: "النمو والتطور", subject: "علم نفس", embed: "https://www.youtube.com/embed/7elGcfTr7oA" },
            { title: "الشخصية والسلوك", subject: "علم نفس", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" }
        ]
    },
    // ===== ثالثة ثانوي - علمي =====
    {
        id: 12, name: "أ/ يلا نفهم Math", subject: "الرياضيات", year: "third", branch: "scientific", region: "cairo",
        rating: 5.0, students: 18000, experience: "20 سنة", regionName: "القاهرة",
        videos: [
            { title: "الهندسة التحليلية", subject: "رياضيات", embed: "https://www.youtube.com/embed/7elGcfTr7oA" },
            { title: "الدوال المثلثية", subject: "رياضيات", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" },
            { title: "الاحتمالات", subject: "رياضيات", embed: "https://www.youtube.com/embed/7elGcfTr7oA" },
            { title: "مراجعة نهائية", subject: "رياضيات", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" }
        ]
    },
    {
        id: 13, name: "أ/ المهندس في الفيزياء", subject: "الفيزياء", year: "third", branch: "scientific", region: "alex",
        rating: 4.9, students: 16000, experience: "17 سنة", regionName: "الإسكندرية",
        videos: [
            { title: "الضوء والبصريات", subject: "فيزياء", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" },
            { title: "الموجات", subject: "فيزياء", embed: "https://www.youtube.com/embed/7elGcfTr7oA" },
            { title: "الذرة والنواة", subject: "فيزياء", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" }
        ]
    },
    {
        id: 14, name: "أ/ أحمد سيد (كيمياء بسهولة)", subject: "الكيمياء", year: "third", branch: "scientific", region: "online",
        rating: 4.8, students: 14500, experience: "15 سنة", regionName: "أونلاين",
        videos: [
            { title: "الكيمياء الحرارية", subject: "كيمياء", embed: "https://www.youtube.com/embed/7elGcfTr7oA" },
            { title: "التوازن الكيميائي", subject: "كيمياء", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" },
            { title: "الكيمياء الكهربية", subject: "كيمياء", embed: "https://www.youtube.com/embed/7elGcfTr7oA" }
        ]
    },
    {
        id: 15, name: "أ/ أحمد الجوهري", subject: "الأحياء", year: "third", branch: "scientific", region: "mansoura",
        rating: 4.7, students: 11200, experience: "11 سنة", regionName: "المنصورة",
        videos: [
            { title: "الجهاز العصبي", subject: "أحياء", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" },
            { title: "الجهاز الهضمي", subject: "أحياء", embed: "https://www.youtube.com/embed/7elGcfTr7oA" },
            { title: "الوراثة", subject: "أحياء", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" }
        ]
    },
    // ===== ثالثة ثانوي - أدبي =====
    {
        id: 16, name: "أ/ أحمد عادل", subject: "التاريخ", year: "third", branch: "literary", region: "cairo",
        rating: 4.9, students: 13500, experience: "18 سنة", regionName: "القاهرة",
        videos: [
            { title: "التاريخ الحديث", subject: "تاريخ", embed: "https://www.youtube.com/embed/7elGcfTr7oA" },
            { title: "الثورة المصرية", subject: "تاريخ", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" },
            { title: "الحرب العالمية", subject: "تاريخ", embed: "https://www.youtube.com/embed/7elGcfTr7oA" }
        ]
    },
    {
        id: 17, name: "أ/ محمد فيصل", subject: "الجغرافيا", year: "third", branch: "literary", region: "tanta",
        rating: 4.6, students: 8900, experience: "10 سنوات", regionName: "طنطا",
        videos: [
            { title: "جغرافيا مصر", subject: "جغرافيا", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" },
            { title: "الموارد الطبيعية", subject: "جغرافيا", embed: "https://www.youtube.com/embed/7elGcfTr7oA" }
        ]
    },
    {
        id: 18, name: "أ/ أحمد الحفناوي", subject: "الفلسفة", year: "third", branch: "literary", region: "online",
        rating: 4.8, students: 12000, experience: "14 سنة", regionName: "أونلاين",
        videos: [
            { title: "الوجود والعدم", subject: "فلسفة", embed: "https://www.youtube.com/embed/7elGcfTr7oA" },
            { title: "الحرية والضرورة", subject: "فلسفة", embed: "https://www.youtube.com/embed/SaOD6z8mMZc" },
            { title: "القيمة والجمال", subject: "فلسفة", embed: "https://www.youtube.com/embed/7elGcfTr7oA" }
        ]
    }
];

// ===== DOM Elements =====
const yearSelect = document.getElementById('year');
const branchSelect = document.getElementById('branch');
const regionSelect = document.getElementById('region');
const btnSearch = document.getElementById('btnSearch');
const loading = document.getElementById('loading');
const resultsSection = document.getElementById('resultsSection');
const teachersGrid = document.getElementById('teachersGrid');
const resultsCount = document.getElementById('resultsCount');
const videosSection = document.getElementById('videosSection');
const videosGrid = document.getElementById('videosGrid');
const videosTitle = document.getElementById('videosTitle');
const btnCloseVideos = document.getElementById('btnCloseVideos');

// ===== Event Listeners =====
btnSearch.addEventListener('click', searchTeachers);
btnCloseVideos.addEventListener('click', closeVideos);

// Close videos on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideos();
});

// ===== Search Teachers =====
function searchTeachers() {
    const year = yearSelect.value;
    const branch = branchSelect.value;
    const region = regionSelect.value;

    // Validation
    if (!year || !branch || !region) {
        showNotification('يرجى اختيار السنة والشعبة والمنطقة', 'warning');
        return;
    }

    // Show loading
    loading.classList.add('active');
    resultsSection.classList.remove('active');
    closeVideos();

    // Simulate API delay
    setTimeout(() => {
        // Filter teachers
        let filtered = teachersData.filter(t => 
            t.year === year && t.branch === branch
        );

        // Sort by rating (highest first)
        filtered.sort((a, b) => b.rating - a.rating);

        // Hide loading
        loading.classList.remove('active');

        // Display results
        displayTeachers(filtered);
    }, 800);
}

// ===== Display Teachers =====
function displayTeachers(teachers) {
    if (teachers.length === 0) {
        teachersGrid.innerHTML = `
            <div class="no-results">
                <span class="no-results-icon">😕</span>
                <p>لا يوجد مدرسين مطابقين للبحث حالياً</p>
                <p style="font-size: 0.9rem; margin-top: 10px;">جرب اختيار منطقة أخرى أو تواصل معنا لإضافة مدرسين</p>
            </div>
        `;
        resultsCount.textContent = '0 مدرس';
        resultsSection.classList.add('active');
        return;
    }

    resultsCount.textContent = `${teachers.length} مدرس`;

    teachersGrid.innerHTML = teachers.map(teacher => `
        <div class="teacher-card" onclick="showVideos(${teacher.id})" role="button" tabindex="0">
            <div class="teacher-header">
                <div class="teacher-name">${teacher.name}</div>
                <div class="teacher-subject">${teacher.subject}</div>
                <div class="teacher-rating">⭐ ${teacher.rating}</div>
            </div>
            <div class="teacher-body">
                <div class="teacher-info">
                    <span>📍</span>
                    <span>${teacher.regionName}</span>
                </div>
                <div class="teacher-info">
                    <span>⏱️</span>
                    <span>${teacher.experience}</span>
                </div>
                <div class="teacher-stats">
                    <div class="stat">
                        <div class="stat-value">${teacher.students.toLocaleString()}</div>
                        <div class="stat-label">طالب</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${teacher.videos.length}</div>
                        <div class="stat-label">فيديو</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${teacher.rating}</div>
                        <div class="stat-label">تقييم</div>
                    </div>
                </div>
                <button class="btn-view-videos" onclick="event.stopPropagation(); showVideos(${teacher.id})">
                    <span>🎬</span>
                    <span>مشاهدة الفيديوهات</span>
                </button>
            </div>
        </div>
    `).join('');

    resultsSection.classList.add('active');
    
    // Smooth scroll to results
    setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// ===== Show Videos =====
function showVideos(teacherId) {
    const teacher = teachersData.find(t => t.id === teacherId);
    if (!teacher) return;

    videosTitle.textContent = `🎬 فيديوهات ${teacher.name} - ${teacher.subject}`;

    videosGrid.innerHTML = teacher.videos.map((video, index) => `
        <div class="video-card" style="animation: fadeIn 0.5s ease ${index * 0.1}s both;">
            <div class="video-wrapper">
                <iframe 
                    src="${video.embed}" 
                    title="${video.title}"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    loading="lazy"
                ></iframe>
            </div>
            <div class="video-info">
                <div class="video-title">${video.title}</div>
                <div class="video-subject">
                    <span>📚</span>
                    <span>${video.subject}</span>
                </div>
            </div>
        </div>
    `).join('');

    videosSection.classList.add('active');
    
    // Smooth scroll to videos
    setTimeout(() => {
        videosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// ===== Close Videos =====
function closeVideos() {
    videosSection.classList.remove('active');
    // Stop all iframes
    const iframes = videosGrid.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        iframe.src = iframe.src;
    });
}

// ===== Notification System =====
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-icon">${type === 'warning' ? '⚠️' : 'ℹ️'}</span>
        <span class="notification-text">${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'warning' ? '#fff3e0' : '#e3f2fd'};
        color: ${type === 'warning' ? '#e65100' : '#1565c0'};
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 600;
        z-index: 10000;
        animation: slideDown 0.3s ease;
        border: 2px solid ${type === 'warning' ? '#ff9800' : '#2196f3'};
    `;

    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== Scroll to Top Button =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.title = 'العودة للأعلى';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// ===== Add animation keyframes dynamically =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
    @keyframes slideUp {
        from { transform: translateX(-50%) translateY(0); opacity: 1; }
        to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
    }
`;
document.head.appendChild(style);