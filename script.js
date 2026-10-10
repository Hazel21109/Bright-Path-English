// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }
  initMobileMenu();
});

// Level Drawer Data (Pre-A1 to C1)
const levelData = {
  prea1: {
    title: 'Pre-A1 Starter Foundation',
    badge: 'Beginner Level',
    xp: '+500 XP',
    duration: '1.5 Months',
    desc: 'Designed for total beginners. Learn the alphabet, phonics sounds, simple numbers, and everyday greetings.',
    modules: ['Phonics & Pronunciation Rules', 'Essential Greetings & Introductions', 'Numbers, Days & Time Expression', 'Basic Classroom Objects & Vocabulary']
  },
  a1: {
    title: 'A1 Elementary Communicator',
    badge: 'Elementary Level',
    xp: '+800 XP',
    duration: '2 Months',
    desc: 'Build basic sentence structures, ask and answer personal questions, and talk about everyday activities.',
    modules: ['Present Simple & Daily Routines', 'Shopping & Ordering Food', 'Family & Personal Descriptions', 'Basic Listening Comprehension']
  },
  a2: {
    title: 'A2 Pre-Intermediate Quest',
    badge: 'Pre-Intermediate',
    xp: '+1,200 XP',
    duration: '2.5 Months',
    desc: 'Express opinions, describe past experiences, discuss future plans, and communicate comfortably in routines.',
    modules: ['Past Simple & Past Continuous', 'Expressing Preferences & Likes', 'Travel, Directions & Transportation', 'Basic Email & Short Writing']
  },
  b1: {
    title: 'B1 Intermediate Standard',
    badge: 'Intermediate Level',
    xp: '+1,800 XP',
    duration: '3 Months',
    desc: 'Understand main points of clear texts on familiar topics. Handle most situations while traveling or working.',
    modules: ['Complex Tenses & Conditionals', 'Workplace & Professional Vocabulary', 'Discussion & Debate Strategies', 'Intermediate Essay Writing']
  },
  b2: {
    title: 'B2 Upper-Intermediate Vanguard',
    badge: 'Upper-Intermediate',
    xp: '+2,500 XP',
    duration: '3 Months',
    desc: 'Interact with a degree of fluency and spontaneity with native speakers without strain for either party.',
    modules: ['Advanced Academic Reading', 'Public Speaking & Presentations', 'Nuanced Grammar & Idioms', 'Critical Thinking in English']
  },
  c1: {
    title: 'C1 Advanced Master Class',
    badge: 'Advanced Level',
    xp: '+4,000 XP',
    duration: '3.5 Months',
    desc: 'Express ideas fluently and spontaneously. Use language flexibly for social, academic, and professional goals.',
    modules: ['IELTS Academic Preparation', 'Executive Business Communication', 'Complex Text Analysis', 'Native-Level Conversational Polish']
  }
};

// Bilingual Translations (EN / MM)
const translations = {
  en: {
    nav_home: 'Home',
    nav_quest: 'CEFR Quest',
    nav_about: 'About Us',
    nav_courses: 'Courses',
    nav_pricing: 'Pricing',
    nav_gallery: 'Gallery',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    btn_test: 'Free Level Test',
    btn_login: 'Login',
    btn_register: 'Enroll Now',
    hero_badge: 'Gamified CEFR English Mastery in Bago',
    hero_title1: 'Level Up Your English From',
    hero_title2: 'Starter to C1 Fluency',
    hero_desc: 'Experience Myanmar’s premier game-based English curriculum. Clear interactive levels, earn XP rewards, measure real progress, and unlock international opportunities in Bago.',
    hero_cta_primary: 'Explore Learning Map',
    hero_cta_secondary: 'Take Level Test',
    hero_stat1: 'Active Students',
    hero_stat2: 'Pass Rate',
    hero_stat3: 'Pre-A1 to C1 Advanced',
    quest_badge: 'Game-Based Progression',
    quest_title: 'The CEFR English Journey Map',
    quest_subtitle: 'Click on any level node below to inspect lesson modules, requirements, and unlockable achievements from Beginner to Advanced C1.',
    about_badge: 'About Bright Path Center',
    about_title: 'Empowering Students in Bago to Speak English with Confidence',
    about_p1: 'Located at No 1677 San Daw Twin Road in Bago, Bright Path English Learning Center is dedicated to transforming standard language education through game-inspired active learning, small class sizes, and certified native & local instructors.',
    about_mission_title: 'Our Mission',
    about_mission_desc: 'To provide engaging, standard CEFR-aligned training that unlocks job and study opportunities.',
    about_vision_title: 'Our Vision',
    about_vision_desc: 'To be Bago’s leading modern center for practical English and communicative mastery.',
    courses_badge: 'Course Offerings',
    courses_title: 'Featured English Programs',
    pricing_badge: 'Clear Tuition Plans',
    pricing_title: 'Affordable Learning Plans',
    pricing_desc: 'No hidden fees. Includes coursebooks, mobile app quest access, and weekly practice sessions.'
  },
  mm: {
    nav_home: 'ပင်မစာမျက်နှာ',
    nav_quest: 'CEFR သင်ခန်းစာ အဆင့်များ',
    nav_about: 'ကျွန်ုပ်တို့အကြောင်း',
    nav_courses: 'သင်တန်းများ',
    nav_pricing: 'သင်တန်းကြေး',
    nav_gallery: 'ဓာတ်ပုံများ',
    nav_faq: 'မေးလေ့ရှိသောမေးခွန်းများ',
    nav_contact: 'ဆက်သွယ်ရန်',
    btn_test: 'အဆင့်စစ်ဆေးရန်',
    btn_login: 'ဝင်ရောက်ရန်',
    btn_register: 'အပ်နှံရန်',
    hero_badge: 'ပဲခူးမြို့၏ အကောင်းဆုံး အင်္ဂလိပ်စာ သင်တန်းကျောင်း',
    hero_title1: 'သင့်အင်္ဂလိပ်စာစွမ်းရည်ကို',
    hero_title2: 'Starter မှ C1 အဆင့်ထိ မြှင့်တင်ပါ',
    hero_desc: 'ဂိမ်းကစားသကဲ့သို့ ပျော်ရွှင်စွာ လေ့လာနိုင်သော CEFR အင်္ဂလိပ်စာ သင်ရိုးညွှန်းတမ်း။ Level တစ်ခုချင်းစီအောင်မြင်ပြီး XP မှတ်များ စုဆောင်းပါ။',
    hero_cta_primary: 'သင်ခန်းစာ အဆင့်များကိုကြည့်မည်',
    hero_cta_secondary: 'အဆင့် စစ်ဆေးမည်',
    hero_stat1: 'တက်ရောက်နေသော ကျောင်းသားများ',
    hero_stat2: 'အောင်မြင်မှု ရာခိုင်နှုန်း',
    hero_stat3: 'Pre-A1 မှ C1 အဆင့်ထိ',
    quest_badge: 'ဂိမ်းပုံစံ လေ့လာမှုစနစ်',
    quest_title: 'CEFR အင်္ဂလိပ်စာ သင်ယူမှု လမ်းကြောင်း',
    quest_subtitle: 'အဆင့်တစ်ခုချင်းစီတွင် သင်ယူရမည့် သင်ခန်းစာများကို ကြည့်ရှုရန် အောက်ပါ Node များကို နှိပ်ပါ။',
    about_badge: 'Bright Path အကြောင်း',
    about_title: 'ပဲခူးမြို့ရှိ ကျောင်းသား/သူများ၏ အင်္ဂလိပ်စာ စွမ်းရည်ကို ယုံကြည်မှုအပြည့်ဖြင့် မြှင့်တင်ပေးခြင်း',
    about_p1: 'ပဲခူးမြို့၊ စန်းတော်တွင်းလမ်း၊ အမှတ် ၁၆၇၇ တွင် တည်ရှိသော Bright Path English Learning Center သည် ခေတ်မီသင်နည်းစနစ်များ၊ သီးသန့် အသေးစိတ် သင်ကြားမှုများဖြင့် အင်္ဂလိပ်စာ စွမ်းရည်ကို တိုးတက်စေပါသည်။',
    about_mission_title: 'ကျွန်ုပ်တို့၏ ရည်မှန်းချက်',
    about_mission_desc: 'ကျောင်းသားများအတွက် အခွင့်အလမ်းကောင်းများ ပွင့်လန်းစေမည့် CEFR စံချိန်မီ သင်ကြားမှုပေးရန်။',
    about_vision_title: 'မျှော်မှန်းချက်',
    about_vision_desc: 'ပဲခူးမြို့တွင် အကောင်းဆုံးနှင့် အထိရောက်ဆုံး အင်္ဂလိပ်စာ သင်တန်းကျောင်း ဖြစ်လာရန်။',
    courses_badge: 'ဖွင့်လှစ်ထားသော သင်တန်းများ',
    courses_title: 'အင်္ဂလိပ်စာ သင်တန်းများ',
    pricing_badge: 'သင်တန်းကြေးများ',
    pricing_title: 'သင့်တော်သော သင်တန်းကြေး နှုန်းထားများ',
    pricing_desc: 'အပိုကြေးမရှိပါ။ သင်ရိုးစာအုပ်များနှင့် Mobile App လေ့လာခွင့် အပါအဝင် ဖြစ်ပါသည်။'
  }
};

let currentLang = 'en';

// Mobile Menu Toggle
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  // Language Switcher Toggle
  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
  }
}

// Switch Language Engine
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'mm' : 'en';
  const langLabel = document.getElementById('langLabel');
  if (langLabel) {
    langLabel.innerText = currentLang === 'en' ? 'EN | မြန်မာ' : 'မြန်မာ | EN';
  }

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.innerText = translations[currentLang][key];
    }
  });
}

// Scroll Helper
function scrollToQuest() {
  const el = document.getElementById('quest');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Level Modal Drawer Display
function openLevelDrawer(levelKey) {
  const data = levelData[levelKey];
  if (!data) return;

  const modal = document.getElementById('levelModal');
  const content = document.getElementById('levelModalContent');

  content.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between border-b border-slate-100 pb-3">
        <span class="text-xs font-extrabold px-3 py-1 bg-sky-100 text-sky-800 rounded-full">${data.badge}</span>
        <span class="text-xs font-bold text-amber-500">${data.xp}</span>
      </div>
      <h3 class="text-2xl font-extrabold text-slate-900">${data.title}</h3>
      <p class="text-xs text-slate-600 leading-relaxed">${data.desc}</p>
      
      <div class="space-y-2 pt-2">
        <p class="text-xs font-bold text-slate-800 uppercase tracking-wider">Key Course Modules:</p>
        <ul class="space-y-1.5 text-xs text-slate-600">
          ${data.modules.map(m => `<li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span> ${m}</li>`).join('')}
        </ul>
      </div>

      <div class="pt-4 flex justify-between items-center text-xs text-slate-500 font-semibold border-t border-slate-100">
        <span>Duration: ${data.duration}</span>
        <button onclick="closeLevelModal(); openEnrollModal('${data.title}')" class="px-4 py-2 bg-sky-600 text-white font-bold rounded-lg hover:bg-sky-700 transition">
          Enroll This Level
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeLevelModal() {
  document.getElementById('levelModal').classList.add('hidden');
}

// Course Category Filter
function filterCourses(category) {
  const buttons = document.querySelectorAll('#courseFilters .filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  const cards = document.querySelectorAll('#courseCardsGrid .course-card');
  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Interactive Placement Quiz Modal
function openPlacementModal() {
  document.getElementById('placementModal').classList.remove('hidden');
  document.getElementById('quizContainer').classList.remove('hidden');
  document.getElementById('quizResult').classList.add('hidden');
}

function closePlacementModal() {
  document.getElementById('placementModal').classList.add('hidden');
}

function calculateQuizResult() {
  const q1 = document.querySelector('input[name="q1"]:checked')?.value || "0";
  const q2 = document.querySelector('input[name="q2"]:checked')?.value || "0";
  const score = parseInt(q1) + parseInt(q2);

  document.getElementById('quizContainer').classList.add('hidden');
  const resultBox = document.getElementById('quizResult');
  resultBox.classList.remove('hidden');

  if (score === 2) {
    document.getElementById('resultTitle').innerText = 'Estimated Level: B2 / C1 Advanced';
    document.getElementById('resultDesc').innerText = 'Impressive! You have strong language control. You qualify for our Upper-Intermediate & C1 IELTS Master classes.';
  } else if (score === 1) {
    document.getElementById('resultTitle').innerText = 'Estimated Level: A2 / B1 Intermediate';
    document.getElementById('resultDesc').innerText = 'Solid foundation! Our Intermediate Conversation & CEFR B1 program is perfect for boosting your speaking fluency.';
  } else {
    document.getElementById('resultTitle').innerText = 'Estimated Level: Pre-A1 / A1 Starter';
    document.getElementById('resultDesc').innerText = 'Great start! Our Starter Foundation program will help you gain confidence step-by-step with clear guidance.';
  }
}

// Gallery Lightbox
function openLightbox(imgSrc) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  img.src = imgSrc;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// FAQ Accordions
function toggleFaq(btn) {
  const content = btn.nextElementSibling;
  const icon = btn.querySelector('i');
  
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    if (icon) icon.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('hidden');
    if (icon) icon.style.transform = 'rotate(0deg)';
  }
}

// Contact & Enrollment Handlers
function handleContactSubmit(e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent to Bright Path English Learning Center in Bago. We will contact you soon.');
  e.target.reset();
}

function openEnrollModal(programName) {
  alert(`Thank you for choosing ${programName}! Please contact us directly at +95 976419198 or send a message to complete enrollment.`);
}

function openAuthModal(mode) {
  alert(`${mode === 'login' ? 'Student Login' : 'Registration'} panel: Please contact our administration office at No 1677 San Daw Twin Road, Bago for student credentials.`);
}