    
    // منوی موبایل
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // اسکرول نرم برای لینک‌های منو
    document.querySelectorAll('.nav-links a, .footer-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if(targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // بستن منوی موبایل در صورت فعال بودن
                if(navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });
    
    // تغییر استایل نویگیشن هنگام اسکرول
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.main-nav');
        if(window.scrollY > 100) {
            nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            nav.style.background = 'rgba(13, 58, 92, 0.95)';
        } else {
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            nav.style.background = 'var(--dark-color)';
        }
        
        // نمایش/عدم نمایش دکمه بازگشت به بالا
        const backToTop = document.getElementById('backToTop');
        if(window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    // دکمه بازگشت به بالا
    document.getElementById('backToTop').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ارسال فرم تماس
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // در اینجا می‌توانید کد ارسال فرم به سرور را اضافه کنید
        // برای نمونه یک پیام موفقیت نشان می‌دهیم
        alert('پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.');
        this.reset();
    });
    
    // انیمیشن‌های اسکرول
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in-up');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if(elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // فعال کردن انیمیشن‌ها هنگام لود صفحه و اسکرول
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // تغییر فعال بودن لینک‌های منو هنگام اسکرول
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if(pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // شبیه‌سازی لودر هنگام لود صفحه
    window.addEventListener('load', () => {
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            const loader = document.createElement('div');
            loader.style.position = 'fixed';
            loader.style.top = '0';
            loader.style.left = '0';
            loader.style.width = '100%';
            loader.style.height = '100%';
            loader.style.backgroundColor = 'var(--primary-color)';
            loader.style.display = 'flex';
            loader.style.justifyContent = 'center';
            loader.style.alignItems = 'center';
            loader.style.zIndex = '9999';
            loader.style.transition = 'opacity 0.5s';
            
            const logo = document.createElement('div');
            logo.innerHTML = `
                <div style="text-align: center; color: white;">
                    <div style="font-size: 2rem; margin-bottom: 20px; font-weight: bold;">نمایندگی بیمه پاسارگاد</div>
                    <div style="width: 50px; height: 50px; border: 3px solid rgba(255,255,255,0.3); border-radius: 50%; border-top-color: white; margin: 0 auto; animation: spin 1s linear infinite;"></div>
                </div>
            `;
            
            loader.appendChild(logo);
            document.body.appendChild(loader);
            
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.remove();
                    document.body.style.overflow = 'auto';
                }, 500);
            }, 1500);
        }, 100);
    });
    document.addEventListener('DOMContentLoaded', function() {
        // اطلاعات شبکه‌های اجتماعی
        const socialLinks = {
            instagram: 'https://instagram.com/your_insurance_page',
            telegram: 'https://t.me/your_insurance_channel',
            whatsapp: 'https://wa.me/'
        };
        
        // عناصر DOM
        const instagramBtn = document.getElementById('instagram-btn');
        const telegramBtn = document.getElementById('telegram-btn');
        const whatsappBtn = document.getElementById('whatsapp-btn');
        const whatsappForm = document.getElementById('whatsapp-form');
        const phoneInput = document.getElementById('phone-input');
        const sendWhatsappBtn = document.getElementById('send-whatsapp');
        const formMessage = document.getElementById('form-message');
        
        // رویداد کلیک برای اینستاگرام
        instagramBtn.addEventListener('click', function() {
            // انیمیشن کلیک
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // باز کردن اینستاگرام در تب جدید
            setTimeout(() => {
                window.open(socialLinks.instagram, '_blank');
                
                // رصد رویداد با Google Analytics (در صورت نیاز)
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'social_click', {
                        'social_network': 'instagram',
                        'event_category': 'social'
                    });
                }
            }, 300);
        });
        
        // رویداد کلیک برای تلگرام
        telegramBtn.addEventListener('click', function() {
            // انیمیشن کلیک
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 200);
            
            // باز کردن تلگرام در تب جدید
            setTimeout(() => {
                window.open(socialLinks.telegram, '_blank');
                
                // رصد رویداد
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'social_click', {
                        'social_network': 'telegram',
                        'event_category': 'social'
                    });
                }
            }, 300);
        });
        
        // رویداد کلیک برای واتساپ
        whatsappBtn.addEventListener('click', function() {
            // نمایش فرم شماره تلفن
            whatsappForm.classList.remove('hidden');
            
            // اسکرول به فرم
            setTimeout(() => {
                whatsappForm.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        });
        
        // ارسال به واتساپ
        sendWhatsappBtn.addEventListener('click', function() {
            const phoneNumber = phoneInput.value.trim();
            
            // اعتبارسنجی شماره تلفن
            if (!isValidPhoneNumber(phoneNumber)) {
                showFormMessage('لطفا شماره تلفن معتبر وارد کنید (مثال: 09123456789)', 'error');
                phoneInput.focus();
                return;
            }
            
            // ساخت لینک واتساپ
            const whatsappLink = `${socialLinks.whatsapp}${phoneNumber}`;
            
            // نمایش پیام موفقیت
            showFormMessage('در حال انتقال به واتساپ...', 'success');
            
            // باز کردن واتساپ پس از تاخیر
            setTimeout(() => {
                window.open(whatsappLink, '_blank');
                
                // رصد رویداد
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'whatsapp_click', {
                        'phone_number': phoneNumber,
                        'event_category': 'social'
                    });
                }
                
                // ریست فرم
                setTimeout(() => {
                    phoneInput.value = '';
                    whatsappForm.classList.add('hidden');
                    formMessage.textContent = '';
                }, 2000);
            }, 1000);
        });
        
        // اعتبارسنجی شماره تلفن
        function isValidPhoneNumber(phone) {
            const regex = /^09[0-9]{9}$/;
            return regex.test(phone);
        }
        
        // نمایش پیام در فرم
        function showFormMessage(message, type) {
            formMessage.textContent = message;
            formMessage.style.color = type === 'error' ? '#ff4444' : '#25D366';
            
            // پنهان کردن پیام پس از 3 ثانیه
            if (type !== 'error') {
                setTimeout(() => {
                    formMessage.textContent = '';
                }, 3000);
            }
        }
        
        // انیمیشن هنگام بارگذاری صفحه
        const socialBtns = document.querySelectorAll('.social-btn');
        socialBtns.forEach((btn, index) => {
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                btn.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    });
    document.getElementById('scrollButton').addEventListener('click', function() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });