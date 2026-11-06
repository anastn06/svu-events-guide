// ==========================================
// 1. التحقق من نموذج اتصل بنا 
// ==========================================
const contactForm = document.getElementById('contactForm');
const alertPlaceholder = document.getElementById('alertPlaceholder');

// نتأكد أولاً أننا في صفحة "اتصل بنا" وأن الفورم موجود
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        // نمنع الصفحة من إعادة التحميل (Refresh) عند الضغط على إرسال
        event.preventDefault();

        // نجيب القيم اللي أدخلها المستخدم
        const name = document.getElementById('nameInput').value;
        const email = document.getElementById('emailInput').value;
        const message = document.getElementById('messageInput').value;

        // تفريغ مكان الرسائل القديمة
        alertPlaceholder.innerHTML = '';

        // -- التحقق البسيط --
        if (name === '' || email === '' || message === '') {
            // إذا في حقل فاضي: نطبع Alert خطأ من البوتستراب
            alertPlaceholder.innerHTML = '<div class="alert alert-danger">الرجاء تعبئة جميع الحقول المطلوبة!</div>';
        }
        else if (email.search(/^\w+@\w+\.\w+$/) === -1) {
            // تحقق من صيغة الإيميل 
            alertPlaceholder.innerHTML = '<div class="alert alert-danger">الرجاء إدخال بريد إلكتروني صحيح يحوي إشارة @!</div>';
        }
        else {
            // إذا كل شيء تمام: نطبع Alert نجاح
            alertPlaceholder.innerHTML = '<div class="alert alert-success">تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.</div>';

            // تفريغ الحقول بعد الإرسال الناجح
            contactForm.reset();
        }
    });
}

// ==========================================
// 2. فلترة الفعاليات (Events Filter)
// ==========================================
const filterBtn = document.getElementById('filterBtn');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');

// نجمع كل كروت الفعاليات اللي عطيناها كلاس event-item
const eventItems = document.querySelectorAll('.event-item');

// نتأكد أننا في صفحة "الفعاليات" وأن زر الفلترة موجود
if (filterBtn) {
    filterBtn.addEventListener('click', function () {

        const selectedCategory = categoryFilter.value;
        const searchText = searchInput.value.trim(); // trim عشان نشيل المسافات الفاضية

        // نمر على كل الفعاليات بحلقة for عادية
        for (let i = 0; i < eventItems.length; i++) {
            const currentItem = eventItems[i];

            // نجيب كلمة التصنيف من الـ badge الموجود جوا الكرت
            const badgeText = currentItem.querySelector('.badge').textContent;
            // نجيب عنوان الفعالية عشان البحث النصي
            const titleText = currentItem.querySelector('.card-title').textContent;

            // الشروط: 
            // 1. هل التصنيف المختار فارغ (يعني "الكل") أو يطابق شارة الكرت؟
            let categoryMatch = (selectedCategory === '' || badgeText === selectedCategory);

            // 2. هل حقل البحث فارغ أو العنوان بيحتوي على الكلمة المكتوبة؟
            let searchMatch = (searchText === '' || titleText.includes(searchText));

            // إذا تحقق الشرطين، بنعرض الكرت، وإلا بنخفيه
            if (categoryMatch && searchMatch) {
                currentItem.style.display = 'block';
            } else {
                currentItem.style.display = 'none'; // إخفاء العنصر
            }
        }
    });
}



// ==========================================
// التبديل للوضع الليلي وحفظه في كل الصفحات
// ==========================================
const themeToggle = document.getElementById('themeToggle');

// 1. فحص الثيم المحفوظ وتطبيقه فور فتح الصفحة
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeToggle) {
        themeToggle.textContent = '☀️';
    }
}

// 2. التبديل والحفظ عند الضغط على الزر
if (themeToggle) {
    themeToggle.addEventListener('click', function () {
        // إضافة أو إزالة كلاس dark-mode
        document.body.classList.toggle('dark-mode');

        // فحص الحالة بعد التبديل وتخزينها
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
        }
    });
}
