const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark');
});
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // بيمنع إعادة تحميل الصفحة
    const name = document.getElementById('name').value;
    
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    contactForm.reset(); // بيفرغ الخانات بعد الإرسال
});