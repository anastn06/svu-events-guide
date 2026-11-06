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
