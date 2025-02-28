document.addEventListener('DOMContentLoaded', function () {
    // ... باقي أكواد JavaScript الأخرى (مثل تأثير تساقط الثلج إذا كان موجودًا) ...

    const contactForm = document.querySelector('.contact-form'); // تحديد نموذج الاتصال
    if (contactForm) { // التأكد من وجود نموذج الاتصال في الصفحة

        contactForm.addEventListener('submit', function (event) {
            let isValid = true; // متغير لتتبع ما إذا كان النموذج صالحًا

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // التحقق من حقل الاسم
            if (!nameInput.value.trim()) {
                alert('الرجاء إدخال اسمك.');
                nameInput.focus(); // تركيز المؤشر على حقل الاسم
                isValid = false;
            }

            // التحقق من حقل البريد الإلكتروني
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // تعبير نمطي للتحقق من البريد الإلكتروني
            if (!emailInput.value.trim()) {
                alert('الرجاء إدخال بريدك الإلكتروني.');
                emailInput.focus(); // تركيز المؤشر على حقل البريد الإلكتروني
                isValid = false;
            } else if (!emailRegex.test(emailInput.value)) {
                alert('الرجاء إدخال بريد إلكتروني صالح.');
                emailInput.focus(); // تركيز المؤشر على حقل البريد الإلكتروني
                isValid = false;
            }

            // التحقق من حقل الرسالة
            if (!messageInput.value.trim()) {
                alert('الرجاء إدخال رسالتك.');
                messageInput.focus(); // تركيز المؤشر على حقل الرسالة
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault(); // منع إرسال النموذج إذا كان غير صالح
            } else {
                alert('تم إرسال رسالتك بنجاح! (في الوضع التجريبي - لن يتم الإرسال الفعلي)'); // رسالة تأكيد في الوضع التجريبي
                event.preventDefault(); // منع الإرسال الفعلي في الوضع التجريبي - قم بإزالة هذا السطر عند الربط بالخادم الحقيقي
                // في التطبيق الحقيقي، هنا سيتم إرسال النموذج إلى الخادم
            }
        });
    }

    // ... باقي أكواد JavaScript الأخرى (مثل تأثير تساقط الثلج إذا كان موجودًا) ...
    // document.addEventListener('DOMContentLoaded', function () {
        // ... باقي أكواد JavaScript الأخرى ...
    
        // تأثير تساقط الثلج
        const snowContainer = document.createElement('div'); // إنشاء حاوية للثلج ديناميكيًا
        snowContainer.id = 'snow-container'; // تعيين الـ ID للحاوية
        document.body.appendChild(snowContainer); // إضافة الحاوية كعنصر ابن لـ <body>
    
        function createSnowflake() {
            const snowflake = document.createElement('span'); // إنشاء رقاقة ثلج كعنصر <span>
            snowflake.classList.add('snowflake'); // إضافة الكلاس 'snowflake' لرقاقة الثلج
            snowContainer.appendChild(snowflake); // إضافة رقاقة الثلج إلى حاوية الثلج
    
            const startPosition = Math.random() * window.innerWidth; // تحديد موضع أفقي عشوائي لبداية الرقاقة
            const animationDuration = Math.random() * 3 + 2; // تحديد مدة حركة عشوائية (بين 2 و 5 ثواني)
            const snowflakeSize = Math.random() * 3 + 3; // تحديد حجم عشوائي لرقاقة الثلج (بين 3 و 6 بكسل)
            const opacity = Math.random() * 0.5 + 0.3; // تحديد شفافية عشوائية (بين 0.3 و 0.8)
    
            snowflake.style.left = `${startPosition}px`; // تعيين الموضع الأفقي
            snowflake.style.animationDuration = `${animationDuration}s`; // تعيين مدة الحركة
            snowflake.style.width = `${snowflakeSize}px`; // تعيين العرض
            snowflake.style.height = `${snowflakeSize}px`; // تعيين الارتفاع
            snowflake.style.opacity = opacity; // تعيين الشفافية
    
            // إزالة رقاقة الثلج بعد انتهاء الحركة لمنع تراكم عدد كبير من العناصر
            setTimeout(() => {
                snowflake.remove();
            }, animationDuration * 1000); // إزالة بعد المدة المحددة للحركة
        }
    
        setInterval(createSnowflake, 100); // إنشاء رقاقة ثلج جديدة كل 100 مللي ثانية (يمكن تعديل هذه القيمة لزيادة أو تقليل كثافة الثلج)
    
        // ... باقي أكواد JavaScript الأخرى ...
    
});