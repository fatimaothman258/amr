
const userIcon = document.getElementById('userIcon');
const loginAlert = document.getElementById('loginAlert');
const closeAlert = document.getElementById('closeAlert');


userIcon.addEventListener('click', () => {
    loginAlert.style.display = 'block';
});


closeAlert.addEventListener('click', () => {
    loginAlert.style.display = 'none';
});

// تابع التمرير
window.addEventListener('scroll', function() {
    // جلب جميع السكشنات
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        
        // إذا كان السكشن في مجال الرؤية (أي أنه مرئي أثناء التمرير)
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});




