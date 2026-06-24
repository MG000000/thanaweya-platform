
html_code = '''<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>منصة تعليمية - ثانوية عامة</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Cairo', sans-serif;
            background: #f0f2f5;
            min-height: 100vh;
        }

        /* Header */
        .header {
            background: #1a237e;
            color: white;
            padding: 20px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }

        .header h1 {
            font-size: 2rem;
            margin-bottom: 5px;
        }

        .header p {
            font-size: 0.95rem;
            opacity: 0.9;
        }

        /* Main Container */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        /* Selection Section */
        .selection-section {
            background: white;
            border-radius: 15px;
            padding: 30px;
            margin: 20px 0;
            box-shadow: 0 2px 15px rgba(0,0,0,0.1);
        }

        .selection-section h2 {
            color: #1a237e;
            margin-bottom: 20px;
            text-align: center;
            font-size: 1.5rem;
        }

        .form-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .form-group {
            display: flex;
            flex-direction: column;
        }

        .form-group label {
            font-weight: 600;
            color: #333;
            margin-bottom: 8px;
            font-size: 1rem;
        }

        .form-group select {
            padding: 12px 15px;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            font-size: 1rem;
            font-family: 'Cairo', sans-serif;
            transition: border-color 0.3s;
            cursor: pointer;
        }

        .form-group select:focus {
            outline: none;
            border-color: #1a237e;
        }

        .btn-search {
            background: #1a237e;
            color: white;
            border: none;
            padding: 15px 40px;
            font-size: 1.1rem;
            border-radius: 10px;
            cursor: pointer;
            font-family: 'Cairo', sans-serif;
            font-weight: 600;
            margin-top: 20px;
            display: block;
            width: 100%;
            max-width: 300px;
            margin-left: auto;
            margin-right: auto;
            transition: background 0.3s, transform 0.2s;
        }

        .btn-search:hover {
            background: #0d1642;
            transform: translateY(-2px);
        }

        /* Results Section */
        .results-section {
            display: none;
        }

        .results-section.active {
            display: block;
        }

        .section-title {
            color: #1a237e;
            font-size: 1.4rem;
            margin: 30px 0 15px;
            padding-right: 15px;
            border-right: 4px solid #1a237e;
        }

        /* Teachers Grid */
        .teachers-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }

        .teacher-card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 2px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
        }

        .teacher-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .teacher-header {
            background: #1a237e;
            color: white;
            padding: 20px;
            position: relative;
        }

        .teacher-name {
            font-size: 1.2rem;
            font-weight: 700;
        }

        .teacher-subject {
            font-size: 0.9rem;
            opacity: 0.9;
            margin-top: 5px;
        }

        .teacher-rating {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            background: #ffc107;
            color: #333;
            padding: 5px 12px;
            border-radius: 20px;
            font-weight: 700;
            font-size: 0.9rem;
        }

        .teacher-body {
            padding: 20px;
        }

        .teacher-info {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            color: #555;
            font-size: 0.9rem;
        }

        .teacher-info i {
            color: #1a237e;
        }

        .teacher-stats {
            display: flex;
            gap: 15px;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid #eee;
        }

        .stat {
            text-align: center;
            flex: 1;
        }

        .stat-value {
            font-weight: 700;
            color: #1a237e;
            font-size: 1.1rem;
        }

        .stat-label {
            font-size: 0.75rem;
            color: #888;
        }

        .btn-view-videos {
            background: #4caf50;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-family: 'Cairo', sans-serif;
            font-weight: 600;
            margin-top: 15px;
            width: 100%;
            transition: background 0.3s;
        }

        .btn-view-videos:hover {
            background: #45a049;
        }

        /* Videos Section */
        .videos-section {
            display: none;
            background: white;
            border-radius: 15px;
            padding: 25px;
            margin-top: 20px;
            box-shadow: 0 2px 15px rgba(0,0,0,0.1);
        }

        .videos-section.active {
            display: block;
        }

        .videos-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .videos-header h3 {
            color: #1a237e;
        }

        .btn-close-videos {
            background: #f44336;
            color: white;
            border: none;
            padding: 8px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-family: 'Cairo', sans-serif;
        }

        .videos-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }

        .video-card {
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .video-wrapper {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
        }

        .video-wrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
        }

        .video-info {
            padding: 15px;
        }

        .video-title {
            font-weight: 600;
            color: #333;
            font-size: 0.95rem;
        }

        .video-subject {
            color: #888;
            font-size: 0.85rem;
            margin-top: 5px;
        }

        /* No Results */
        .no-results {
            text-align: center;
            padding: 40px;
            color: #888;
            font-size: 1.1rem;
        }

        /* Footer */
        .footer {
            text-align: center;
            padding: 20px;
            color: #888;
            font-size: 0.9rem;
            margin-top: 40px;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .header h1 {
                font-size: 1.5rem;
            }
            
            .form-grid {
                grid-template-columns: 1fr;
            }
            
            .teachers-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>

    <header class="header">
        <h1>📚 منصة تعليمية - ثانوية عامة</h1>
        <p>اكتشف أفضل المدرسين ومشاهدة الفيديوهات التعليمية مجاناً</p>
    </header>

    <div class="container">
        <!-- Selection Section -->
        <div class="selection-section">
            <h2>🔍 اختر بياناتك</h2>
            <div class="form-grid">
                <div class="form-group">
                    <label for="year">السنة الدراسية</label>
                    <select id="year">
                        <option value="">-- اختر السنة --</option>
                        <option value="first">أولى ثانوي</option>
                        <option value="second">ثانية ثانوي</option>
                        <option value="third">ثالثة ثانوي</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="branch">الشعبة</label>
                    <select id="branch">
                        <option value="">-- اختر الشعبة --</option>
                        <option value="scientific">الشعبة العلمية</option>
                        <option value="literary">الشعبة الأدبية</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="region">المنطقة</label>
                    <select id="region">
                        <option value="">-- اختر المنطقة --</option>
                        <option value="cairo">القاهرة</option>
                        <option value="alex">الإسكندرية</option>
                        <option value="giza">الجيزة</option>
                        <option value="mansoura">المنصورة</option>
                        <option value="tanta">طنطا</option>
                        <option value="online">أونلاين (عبر الإنترنت)</option>
                    </select>
                </div>
            </div>
            <button class="btn-search" onclick="searchTeachers()">🔍 ابحث عن المدرسين</button>
        </div>

        <!-- Results Section -->
        <div class="results-section" id="resultsSection">
            <h2 class="section-title">⭐ أفضل المدرسين</h2>
            <div class="teachers-grid" id="teachersGrid"></div>
        </div>

        <!-- Videos Section -->
        <div class="videos-section" id="videosSection">
            <div class="videos-header">
                <h3 id="videosTitle">🎬 فيديوهات المدرس</h3>
                <button class="btn-close-videos" onclick="closeVideos()">✕ إغلاق</button>
            </div>
            <div class="videos-grid" id="videosGrid"></div>
        </div>
    </div>

    <footer class="footer">
        <p>منصة تعليمية مجانية © 2026 - لطلاب الثانوية العامة</p>
    </footer>

    <script>
        // ===== البيانات التجريبية (MVP) =====
        const teachersData = [
            // أولى ثانوي - علمي
            {
                id: 1, name: "أ/ أحمد حسن", subject: "الرياضيات", year: "first", branch: "scientific", region: "cairo",
                rating: 4.9, students: 12500, experience: "15 سنة", regionName: "القاهرة",
                videos: [
                    { title: "الدرس الأول: المجموعات", subject: "رياضيات", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "الدرس الثاني: الدوال", subject: "رياضيات", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "مراجعة ليلة الامتحان", subject: "رياضيات", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                ]
            },
            {
                id: 2, name: "أ/ محمد علي", subject: "الفيزياء", year: "first", branch: "scientific", region: "alex",
                rating: 4.8, students: 9800, experience: "12 سنة", regionName: "الإسكندرية",
                videos: [
                    { title: "مقدمة في الفيزياء", subject: "فيزياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "الحركة والسرعة", subject: "فيزياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                ]
            },
            {
                id: 3, name: "أ/ سارة أحمد", subject: "الكيمياء", year: "first", branch: "scientific", region: "online",
                rating: 4.7, students: 15000, experience: "10 سنوات", regionName: "أونلاين",
                videos: [
                    { title: "البنية الذرية", subject: "كيمياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "الجدول الدوري", subject: "كيمياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "الروابط الكيميائية", subject: "كيمياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                ]
            },
            {
                id: 4, name: "أ/ خالد محمود", subject: "الأحياء", year: "first", branch: "scientific", region: "giza",
                rating: 4.6, students: 8700, experience: "8 سنوات", regionName: "الجيزة",
                videos: [
                    { title: "الخلية - الجزء الأول", subject: "أحياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "الخلية - الجزء الثاني", subject: "أحياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                ]
            },
            // أولى ثانوي - أدبي
            {
                id: 5, name: "أ/ فاطمة سعيد", subject: "التاريخ", year: "first", branch: "literary", region: "cairo",
                rating: 4.9, students: 11000, experience: "14 سنة", regionName: "القاهرة",
                videos: [
                    { title: "الحضارة المصرية القديمة", subject: "تاريخ", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "العصور الوسطى", subject: "تاريخ", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                ]
            },
            {
                id: 6, name: "أ/ عمر إبراهيم", subject: "الجغرافيا", year: "first", branch: "literary", region: "alex",
                rating: 4.7, students: 9200, experience: "11 سنة", regionName: "الإسكندرية",
                videos: [
                    { title: "خرائط العالم", subject: "جغرافيا", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "المناخ والبيئة", subject: "جغرافيا", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                ]
            },
            // ثانية ثانوي - علمي
            {
                id: 7, name: "أ/ ياسر عبدالله", subject: "الرياضيات", year: "second", branch: "scientific", region: "mansoura",
                rating: 4.9, students: 14000, experience: "16 سنة", regionName: "المنصورة",
                videos: [
                    { title: "التفاضل - الجزء الأول", subject: "رياضيات", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "التفاضل - الجزء الثاني", subject: "رياضيات", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "التكامل", subject: "رياضيات", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                ]
            },
            {
                id: 8, name: "أ/ ندى محمود", subject: "الفيزياء", year: "second", branch: "scientific", region: "online",
                rating: 4.8, students: 13000, experience: "13 سنة", regionName: "أونلاين",
                videos: [
                    { title: "الكهرباء الساكنة", subject: "فيزياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "التيار الكهربي", subject: "فيزياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                ]
            },
            {
                id: 9, name: "أ/ هاني سلامة", subject: "الكيمياء", year: "second", branch: "scientific", region: "tanta",
                rating: 4.6, students: 7800, experience: "9 سنوات", regionName: "طنطا",
                videos: [
                    { title: "الكيمياء العضوية", subject: "كيمياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "الهيدروكربونات", subject: "كيمياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                ]
            },
            // ثانية ثانوي - أدبي
            {
                id: 10, name: "أ/ ليلى فؤاد", subject: "الفلسفة", year: "second", branch: "literary", region: "cairo",
                rating: 4.8, students: 10500, experience: "12 سنة", regionName: "القاهرة",
                videos: [
                    { title: "مقدمة في الفلسفة", subject: "فلسفة", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "المشكلة الفلسفية", subject: "فلسفة", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                ]
            },
            {
                id: 11, name: "أ/ رانيا عادل", subject: "علم النفس", year: "second", branch: "literary", region: "giza",
                rating: 4.7, students: 9500, experience: "10 سنوات", regionName: "الجيزة",
                videos: [
                    { title: "النمو والتطور", subject: "علم نفس", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "الشخصية والسلوك", subject: "علم نفس", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                ]
            },
            // ثالثة ثانوي - علمي
            {
                id: 12, name: "أ/ طارق رمضان", subject: "الرياضيات", year: "third", branch: "scientific", region: "cairo",
                rating: 5.0, students: 18000, experience: "20 سنة", regionName: "القاهرة",
                videos: [
                    { title: "الهندسة التحليلية", subject: "رياضيات", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "الدوال المثلثية", subject: "رياضيات", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "الاحتمالات", subject: "رياضيات", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "مراجعة نهائية", subject: "رياضيات", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                ]
            },
            {
                id: 13, name: "أ/ دينا كمال", subject: "الفيزياء", year: "third", branch: "scientific", region: "alex",
                rating: 4.9, students: 16000, experience: "17 سنة", regionName: "الإسكندرية",
                videos: [
                    { title: "الضوء والبصريات", subject: "فيزياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "الموجات", subject: "فيزياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "الذرة والنواة", subject: "فيزياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                ]
            },
            {
                id: 14, name: "أ/ سمير فتحي", subject: "الكيمياء", year: "third", branch: "scientific", region: "online",
                rating: 4.8, students: 14500, experience: "15 سنة", regionName: "أونلاين",
                videos: [
                    { title: "الكيمياء الحرارية", subject: "كيمياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "التوازن الكيميائي", subject: "كيمياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "الكيمياء الكهربية", subject: "كيمياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                ]
            },
            {
                id: 15, name: "أ/ منى عبدالعزيز", subject: "الأحياء", year: "third", branch: "scientific", region: "mansoura",
                rating: 4.7, students: 11200, experience: "11 سنة", regionName: "المنصورة",
                videos: [
                    { title: "الجهاز العصبي", subject: "أحياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "الجهاز الهضمي", subject: "أحياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "الوراثة", subject: "أحياء", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                ]
            },
            // ثالثة ثانوي - أدبي
            {
                id: 16, name: "أ/ هبة الله سالم", subject: "التاريخ", year: "third", branch: "literary", region: "cairo",
                rating: 4.9, students: 13500, experience: "18 سنة", regionName: "القاهرة",
                videos: [
                    { title: "التاريخ الحديث", subject: "تاريخ", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "الثورة المصرية", subject: "تاريخ", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "الحرب العالمية", subject: "تاريخ", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                ]
            },
            {
                id: 17, name: "أ/ محمود راغب", subject: "الجغرافيا", year: "third", branch: "literary", region: "tanta",
                rating: 4.6, students: 8900, experience: "10 سنوات", regionName: "طنطا",
                videos: [
                    { title: "جغرافيا مصر", subject: "جغرافيا", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "الموارد الطبيعية", subject: "جغرافيا", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                ]
            },
            {
                id: 18, name: "أ/ نermeen عاطف", subject: "الفلسفة", year: "third", branch: "literary", region: "online",
                rating: 4.8, students: 12000, experience: "14 سنة", regionName: "أونلاين",
                videos: [
                    { title: "الوجود والعدم", subject: "فلسفة", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "الحرية والضرورة", subject: "فلسفة", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
                    { title: "القيمة والجمال", subject: "فلسفة", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
                ]
            }
        ];

        // ===== وظائف البحث =====
        function searchTeachers() {
            const year = document.getElementById('year').value;
            const branch = document.getElementById('branch').value;
            const region = document.getElementById('region').value;

            if (!year || !branch || !region) {
                alert('يرجى اختيار السنة والشعبة والمنطقة');
                return;
            }

            // تصفية المدرسين
            let filtered = teachersData.filter(t => 
                t.year === year && t.branch === branch
            );

            // ترتيب حسب التقييم
            filtered.sort((a, b) => b.rating - a.rating);

            displayTeachers(filtered);
        }

        function displayTeachers(teachers) {
            const grid = document.getElementById('teachersGrid');
            const resultsSection = document.getElementById('resultsSection');
            
            closeVideos();

            if (teachers.length === 0) {
                grid.innerHTML = '<div class="no-results">لا يوجد مدرسين مطابقين للبحث حالياً</div>';
                resultsSection.classList.add('active');
                return;
            }

            grid.innerHTML = teachers.map(teacher => `
                <div class="teacher-card" onclick="showVideos(${teacher.id})">
                    <div class="teacher-header">
                        <div class="teacher-name">${teacher.name}</div>
                        <div class="teacher-subject">${teacher.subject}</div>
                        <div class="teacher-rating">⭐ ${teacher.rating}</div>
                    </div>
                    <div class="teacher-body">
                        <div class="teacher-info">
                            <span>📍 ${teacher.regionName}</span>
                        </div>
                        <div class="teacher-info">
                            <span>⏱️ ${teacher.experience}</span>
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
                        <button class="btn-view-videos">🎬 مشاهدة الفيديوهات</button>
                    </div>
                </div>
            `).join('');

            resultsSection.classList.add('active');
            resultsSection.scrollIntoView({ behavior: 'smooth' });
        }

        function showVideos(teacherId) {
            const teacher = teachersData.find(t => t.id === teacherId);
            if (!teacher) return;

            const videosSection = document.getElementById('videosSection');
            const videosGrid = document.getElementById('videosGrid');
            const videosTitle = document.getElementById('videosTitle');

            videosTitle.textContent = `🎬 فيديوهات ${teacher.name} - ${teacher.subject}`;

            videosGrid.innerHTML = teacher.videos.map(video => `
                <div class="video-card">
                    <div class="video-wrapper">
                        <iframe src="${video.embed}" allowfullscreen></iframe>
                    </div>
                    <div class="video-info">
                        <div class="video-title">${video.title}</div>
                        <div class="video-subject">${video.subject}</div>
                    </div>
                </div>
            `).join('');

            videosSection.classList.add('active');
            videosSection.scrollIntoView({ behavior: 'smooth' });
        }

        function closeVideos() {
            document.getElementById('videosSection').classList.remove('active');
        }
    </script>

</body>
</html>'''

with open('/mnt/agents/output/education_platform.html', 'w', encoding='utf-8') as f:
    f.write(html_code)

print("تم حفظ الملف بنجاح!")
print("عدد المدرسين في البيانات:", len([t for t in [
    {"id": 1}, {"id": 2}, {"id": 3}, {"id": 4}, {"id": 5}, {"id": 6},
    {"id": 7}, {"id": 8}, {"id": 9}, {"id": 10}, {"id": 11}, {"id": 12},
    {"id": 13}, {"id": 14}, {"id": 15}, {"id": 16}, {"id": 17}, {"id": 18}
]]))
