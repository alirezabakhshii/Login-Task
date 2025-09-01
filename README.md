# 🌐 Next.js Multilingual Auth Project

پروژه‌ای بر پایه **Next.js 14 + App Router + TypeScript**  
به همراه:  

- 🎨 **Tailwind CSS + shadcn/ui**  
- 🌗 **Dark Theme (Gradient Background)**  
- 🌍 **Multi-language (next-intl) - فارسی/انگلیسی**  
- 🔑 **Login با شماره موبایل (fake API)**  
- 🗂 **Storage Helper (localStorage)**  
- 📱 **Fully Responsive Design (Mobile-First)**  
- 🚀 **Smart Redirect System**  

---

## ✨ ویژگی‌های جدید

### 📱 **Responsive Design**
- **Mobile-First Approach** - بهینه‌سازی شده برای موبایل
- **Breakpoint System** - `sm:`, `md:`, `lg:` برای تمام اندازه‌ها
- **Adaptive Components** - آواتار، دکمه‌ها، متن‌ها و فاصله‌ها responsive
- **Touch-Friendly** - اندازه‌های مناسب برای لمس در موبایل

### 🚀 **Smart Redirect System**
- **Root Path Detection** - `localhost:3000` → redirect خودکار
- **Locale Fallback** - اگر locale موجود نباشد → `fa` (فارسی)
- **User State Management** - redirect هوشمند بر اساس وضعیت login
- **Middleware Integration** - مدیریت locale در سطح سرور

### 🎨 **Enhanced UI/UX**
- **Gradient Backgrounds** - پس‌زمینه‌های زیبا با blur effects
- **Loading States** - spinner های زیبا هنگام redirect
- **Smooth Transitions** - انیمیشن‌های نرم و جذاب
- **Modern Card Design** - کارت‌های شیشه‌ای با transparency

---

## 📦 نصب و راه‌اندازی

```bash
# کلون کردن پروژه
git clone https://github.com/your-username/next-intl-auth.git

cd next-intl-auth

# نصب پکیج‌ها
npm install
# یا
yarn install

# اجرای پروژه
npm run dev
# یا
yarn dev
```

سپس در مرورگر باز کنید:  
👉 http://localhost:3000

---

## 🔄 نحوه کارکرد سیستم

### **1. Root Path (`/`)**
```
localhost:3000 → بررسی user data → redirect به /fa/dashboard یا /fa/login
```

### **2. Locale Paths**
```
/fa → بررسی user data → redirect به /fa/dashboard یا /fa/login
/en → بررسی user data → redirect به /en/dashboard یا /en/login
```

### **3. Smart Navigation**
- **User Logged In** → redirect به dashboard
- **User Not Logged In** → redirect به login
- **Locale Missing** → fallback به `fa` (فارسی)

---

## 📁 ساختار پروژه

```
src/
 ├── app/
 │   ├── page.tsx              # Root page (redirect logic)
 │   ├── [locale]/
 │   │   ├── login/page.tsx     # صفحه ورود (Responsive)
 │   │   ├── dashboard/page.tsx # صفحه داشبورد (Responsive)
 │   │   ├── test-colors/page.tsx # تست رنگ‌ها
 │   │   └── layout.tsx         # Layout با IntlProvider
 │   └── layout.tsx             # Root Layout
 │
 ├── components/
 │   ├── Language/
 │   │   └── LanguageChanger.tsx # تغییر زبان (Responsive)
 │   ├── ui/                    # اجزای shadcn/ui (Responsive)
 │   │   ├── button.tsx
 │   │   ├── card.tsx
 │   │   ├── input.tsx
 │   │   └── label.tsx
 │
 ├── lib/
 │   ├── storageHelper.ts       # مدیریت localStorage
 │   ├── phoneNumberValidator.ts # اعتبارسنجی شماره موبایل
 │   └── utils.ts               # ابزارهای عمومی
 │
 ├── types/
 │   └── user.ts                # تعریف نوع User
 │
 ├── messages/                   # فایل‌های ترجمه
 │   ├── en.json                # انگلیسی
 │   └── fa.json                # فارسی
 │
 ├── i18n/                      # تنظیمات چندزبانه
 │   ├── i18next.ts             # تنظیمات locale
 │   └── request.ts             # تنظیمات request
 │
 └── middleware.ts              # مدیریت locale و redirect
```

---

## 📱 Responsive Breakpoints

### **Mobile First Approach**
```css
/* Base (Mobile) */
.w-20 h-20 text-lg p-3

/* Small (sm: 640px+) */
sm:w-24 sm:h-24 sm:text-xl sm:p-6

/* Medium (md: 768px+) */
md:w-28 md:h-28 md:text-2xl

/* Large (lg: 1024px+) */
lg:max-w-3xl
```

### **Component Sizing**
- **Header**: `p-3` → `sm:p-6`
- **Avatar**: `w-20 h-20` → `sm:w-24 sm:h-24` → `md:w-28 md:h-28`
- **Typography**: `text-lg` → `sm:text-xl` → `md:text-2xl` → `lg:text-3xl`
- **Spacing**: `space-y-4` → `sm:space-y-6`

---

## 🌍 چندزبانه (Internationalization)

### **Supported Locales**
- 🇮🇷 **فارسی (fa)** - پیش‌فرض
- 🇺🇸 **انگلیسی (en)**

### **Features**
- **Automatic Locale Detection** - تشخیص خودکار زبان
- **Locale Prefix Always** - همه مسیرها locale prefix دارند
- **RTL Support** - پشتیبانی از راست به چپ برای فارسی
- **Dynamic Messages** - ترجمه‌های پویا

---

## 🔑 احراز هویت (Auth)

### **Login Flow**
1. **Phone Validation** - اعتبارسنجی شماره موبایل
2. **Fake API Call** - دریافت اطلاعات کاربر از `randomuser.me`
3. **Local Storage** - ذخیره اطلاعات در localStorage
4. **Smart Redirect** - هدایت به dashboard

### **User Management**
- **Auto-login Check** - بررسی خودکار وضعیت login
- **Session Persistence** - حفظ session در localStorage
- **Secure Logout** - خروج امن با پاک کردن داده‌ها

---

## 🛠️ تکنولوژی‌ها

### **Frontend**
- **Next.js 14** - App Router + Server Components
- **TypeScript** - Type Safety + IntelliSense
- **Tailwind CSS** - Utility-First CSS Framework
- **shadcn/ui** - Beautiful UI Components

### **Internationalization**
- **next-intl** - Multi-language Support
- **Middleware** - Locale Management
- **Dynamic Routing** - `[locale]` Pattern

### **Development Tools**
- **ESLint** - Code Quality
- **PostCSS** - CSS Processing
- **Responsive Design** - Mobile-First Approach

---

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
# Build
npm run build

# Deploy
vercel --prod
```

### **Other Platforms**
- **Netlify** - Static Site Generation
- **Railway** - Full-Stack Deployment
- **Docker** - Containerized Deployment

---

## 📱 Mobile Optimization

### **Performance**
- **Optimized Images** - آواتارهای responsive
- **Efficient CSS** - Tailwind JIT compilation
- **Fast Loading** - Next.js optimization

### **User Experience**
- **Touch Targets** - اندازه‌های مناسب لمس
- **Readable Text** - فونت‌های قابل خواندن
- **Smooth Animations** - انیمیشن‌های نرم

---

## 🔮 آینده

### **Planned Features**
- [x] **Responsive Design** ✅
- [x] **Smart Redirect System** ✅
- [x] **Enhanced UI/UX** ✅
- [ ] **Real API Integration** - اتصال به API واقعی
- [ ] **Role-based Auth** - سیستم نقش‌محور
- [ ] **Push Notifications** - اعلان‌های push
- [ ] **Offline Support** - پشتیبانی آفلاین

### **Enhancements**
- [ ] **Dark/Light Theme Toggle** - تغییر تم
- [ ] **Advanced Animations** - انیمیشن‌های پیشرفته
- [ ] **Progressive Web App** - PWA features

---

## 🤝 مشارکت

1. **Fork** کنید
2. **Feature Branch** ایجاد کنید (`git checkout -b feature/AmazingFeature`)
3. **Commit** کنید (`git commit -m 'Add some AmazingFeature'`)
4. **Push** کنید (`git push origin feature/AmazingFeature`)
5. **Pull Request** ایجاد کنید

---

## 📄 لایسنس

این پروژه تحت لایسنس **MIT** منتشر شده است.

---

## 📞 تماس

- **GitHub**: [@your-username](https://github.com/your-username)
- **Email**: your-email@example.com

---

👉 **پروژه آماده‌ی توسعه و استقرار است!** 🚀

**Features**: 📱 Responsive | 🌍 Multi-language | 🔑 Auth | 🎨 Modern UI | 🚀 Smart Redirect
