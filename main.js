const WA='966545613955';
const translations = {
  ar: {
    navHome: "الرئيسية", navAbout: "من نحن", navProducts: "الأقسام", navOffers: "العروض", navServices: "خدماتنا", navDelivery: "التوصيل", navContact: "تواصل معنا",
    txtLogoTitle: "مؤسسة نهاد عفنان الظفيري", txtLogoSub: "للمفروشات والأثاث",
    hero1Title: "أثاث يليق ببيتك", hero1Desc: "تشكيلة فاخرة من الكنب والمفروشات والأثاث المنزلي العصري بجودة عالية وأسعار منافسة", hero1Btn: "تصفح الأقسام",
    hero2Title: "كنب ومفروشات فاخرة", hero2Desc: "أطقم كنب مصممة بأحدث الطرز العالمية لمنح مجلسك أناقة تدوم", hero2Btn: "اطلب الآن",
    aboutTag: "من نحن", aboutHeader: "نهاد عفنان الظفيري للمفروشات والأثاث",
    aboutDesc: "مؤسسة سعودية متخصصة في بيع المفروشات والأثاث المنزلي الفاخر. نقدم تشكيلة واسعة من الكنب وغرف النوم.",
    stat1: "سنوات خبرة", stat2: "منتج متنوع", stat3: "عميل سعيد",
    prodSubTag: "تصفح أقسامنا", prodHeader: "أقسام المفروشات والأثاث",
    offerSubTag: "لا تفوتها", offerHeader: "العروض المميزة", offerBadge: "خصم حتى 30%", offerBtn: "اطلب العرض عبر واتساب",
    offTag1: "عرض خاص", offTitle1: "طقم كنب مجلس 7 مقاعد", offDesc1: "كنب فاخر بتصميم عصري، قماش مخمل عالي الجودة مقاوم للبقع.",
    srvSubTag: "لماذا نحن؟", srvHeader: "خدماتنا المميزة",
    srv1Title: "توصيل سريع", srv1Desc: "توصيل لجميع أحياء الرياض خلال 24 – 48 ساعة مع التركيب المجاني.",
    srv2Title: "تركيب احترافي", srv2Desc: "فريق متخصص في تركيب وتنسيق الأثاث.",
    footerDesc: "وجهتك الأولى للمفروشات والأثاث الفاخر في الرياض.",
    footerContactHeader: "تواصل معنا", footerTimeHeader: "مواعيد العمل",
    footerTimeVal: "السبت – الخميس: 9 صباحاً – 11 مساءً<br>الجمعة: 4 عصراً – 11 مساءً", footerWaBtn: "تواصل واتساب",
    copyright: "© 2026 مؤسسة نهاد عفنان الظفيري للمفروشات والأثاث – جميع الحقوق محفوظة",
    modalW: "العرض", modalL: "الطول", modalQ: "الجودة", modalC: "القسم", modalOrderBtn: "اطلب الآن عبر واتساب",
    detailsBtn: "التفاصيل", directOrder: "للطلب المباشر:",
    sections: ['الكل','كنب ومجالس','غرف نوم','طاولات سفرة','ستائر ومفروشات']
  },
  en: {
    navHome: "Home", navAbout: "About Us", navProducts: "Categories", navOffers: "Offers", navServices: "Services", navDelivery: "Delivery", navContact: "Contact Us",
    txtLogoTitle: "Nihad Afnan Al-Dhafiri Est.", txtLogoSub: "Furniture & Decor",
    hero1Title: "Furniture Worthy of Your Home", hero1Desc: "Luxurious collection of modern sofas and furnishings", hero1Btn: "Browse Categories",
    hero2Title: "Luxurious Sofas", hero2Desc: "Sofa sets designed with international styles", hero2Btn: "Order Now",
    aboutTag: "About Us", aboutHeader: "Nihad Afnan Al-Dhafiri Furniture Establishment",
    aboutDesc: "A Saudi establishment specialized in selling luxurious furniture and home decor.",
    stat1: "Years Experience", stat2: "Diverse Products", stat3: "Happy Clients",
    prodSubTag: "Browse Categories", prodHeader: "Furniture & Decor Categories",
    offerSubTag: "Don't Miss Out", offerHeader: "Special Offers", offerBadge: "Up to 30% Off", offerBtn: "Order via WhatsApp",
    offTag1: "Special Offer", offTitle1: "7-Seater Majlis Sofa Set", offDesc1: "Luxurious modern sofa.",
    srvSubTag: "Why Choose Us?", srvHeader: "Our Premium Services",
    srv1Title: "Fast Delivery", srv1Desc: "Delivery to all Riyadh districts.",
    srv2Title: "Professional Installation", srv2Desc: "Specialized team in furniture installation.",
    footerDesc: "Your prime destination for luxurious furniture in Riyadh.",
    footerContactHeader: "Contact Us", footerTimeHeader: "Working Hours",
    footerTimeVal: "Sat – Thu: 9 AM – 11 PM<br>Fri: 4 PM – 11 PM", footerWaBtn: "Contact WhatsApp",
    copyright: "© 2026 Nihad Afnan Al-Dhafiri Furniture Establishment – All Rights Reserved",
    modalW: "Width", modalL: "Length", modalQ: "Quality", modalC: "Category", modalOrderBtn: "Order Now via WhatsApp",
    detailsBtn: "Details", directOrder: "Direct Order:",
    sections: ['All','Sofas & Majlis','Bedrooms','Dining Tables','Curtains & Furnishings']
  }
};

let currentLang = 'ar';
let currentTheme = 'light';

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.getElementById('htmlRoot').setAttribute('data-theme', currentTheme);
  document.getElementById('themeToggle ലേഖن').textContent = currentTheme === 'dark' ? (currentLang === 'ar' ? '☀️ الوضع الفاتح' : '☀️ Light Mode') : (currentLang === 'ar' ? '🌙 الوضع الغامق' : '🌙 Dark Mode');
}

function toggleLang() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  const root = document.getElementById('htmlRoot');
  root.setAttribute('lang', currentLang);
  root.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  document.getElementById('langToggle').textContent = currentLang === 'ar' ? 'English' : 'العربية';
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });
  renderTabs();
  render();
}

const products=[
 {n:{ar:'طقم كنب مجلس فاخر', en:'Luxurious Majlis Sofa Set'},c:{ar:'كنب ومجالس', en:'Sofas & Majlis'},p:3850,o:5500,w:'2.80 m',l:'90 cm',q:{ar:'مخمل فاخر مقاوم للبقع', en:'Stain-resistant luxury velvet'},img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'},
 {n:{ar:'كنب زاوية عصري', en:'Modern Corner Sofa'},c:{ar:'كنب ومجالس', en:'Sofas & Majlis'},p:2900,o:3900,w:'3.20 m',l:'85 cm',q:{ar:'قماش كتان عالي الجودة', en:'High quality linen fabric'},img:'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80'},
 {n:{ar:'غرفة نوم ملكية كلاسيك', en:'Classic Royal Bedroom'},c:{ar:'غرف نوم', en:'Bedrooms'},p:6900,o:9800,w:{ar:'سرير 1.80 م', en:'Bed 1.80 m'},l:'2.10 m',q:{ar:'خشب زان طبيعي منحوت', en:'Carved natural beech wood'},img:'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80'},
 {n:{ar:'غرفة نوم مودرن رمادية', en:'Modern Grey Bedroom'},c:{ar:'غرف نوم', en:'Bedrooms'},p:5400,o:7200,w:{ar:'سرير 1.60 م', en:'Bed 1.60 m'},l:'2.00 m',q:{ar:'خشب MDF مقاوم للرطوبة', en:'Moisture-resistant MDF wood'},img:'https://images.unsplash.com/photo-1540518614846-7ede433c5163?auto=format&fit=crop&w=800&q=80'},
 {n:{ar:'طاولة سفرة رخام 6 مقاعد', en:'6-Seater Marble Dining Table'},c:{ar:'طاولات سفرة', en:'Dining Tables'},p:2990,o:4200,w:'1.80 m',l:'95 cm',q:{ar:'رخام طبيعي وقاعدة معدنية', en:'Natural marble & metal base'},img:'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80'},
 {n:{ar:'ستائر مخمل بيج فاخرة', en:'Luxury Beige Velvet Curtains'},c:{ar:'ستائر ومفروشات', en:'Curtains & Furnishings'},p:850,o:1200,w:'3.00 m',l:{ar:'حسب الطلب', en:'Customized'},q:{ar:'مخمل ثقيل مع بطانة معتمة', en:'Heavy velvet with blackout lining'},img:'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'}
];

let hi=0;
const hs=document.getElementById('heroSlides');
if(hs){
  hs.querySelectorAll('.slide').forEach((_,i)=>{
    const s=document.createElement('span');
    if(i==0)s.classList.add('on');
    s.onclick=()=>go(i);
    const hd=document.getElementById('heroDots');
    if(hd) hd.appendChild(s);
  });
}
function go(i){hi=(i+hs.children.length)%hs.children.length;hs.style.transform=`translateX(${hi*100}%)`;const hd=document.getElementById('heroDots');if(hd)[...hd.children].forEach((d,j)=>d.classList.toggle('on',j==hi))}
function move(d){go(hi+d)}

let curIdx = 0;
function renderTabs(){
  const tabsEl=document.getElementById('tabs');
  if(!tabsEl) return;
  tabsEl.innerHTML='';
  const secList = translations[currentLang].sections;
  secList.forEach((s, idx)=>{
    const b=document.createElement('button');
    b.className='tab'+(idx === curIdx ? ' on':'');
    b.textContent=s;
    b.onclick=()=>{
      curIdx = idx;
      [...tabsEl.children].forEach(t=>t.classList.remove('on'));
      b.classList.add('on');
      render();
    };
    tabsEl.appendChild(b);
  });
}

function render(){
 const gridEl=document.getElementById('grid');
 if(!gridEl) return;
 gridEl.innerHTML='';
 const currentCatAr = translations['ar'].sections[curIdx];
 products.filter(p => curIdx === 0 || p.c['ar'] === currentCatAr).forEach(p => {
  const el=document.createElement('div');el.className='card';
  const nameTxt = p.n[currentLang] || p.n['ar'];
  const priceUnit = currentLang === 'ar' ? 'ر.س' : 'SAR';
  el.innerHTML=`<div class="im"><img src="${p.img}" alt="${nameTxt}"></div>
  <div class="bd"><h3>${nameTxt}</h3><div class="stars">★★★★★</div>
  <div class="price">${p.p.toLocaleString()} ${priceUnit} <small style="text-decoration:line-through;opacity:.5">${p.o.toLocaleString()} ${priceUnit}</small></div>
  <div class="acts"><button class="det">${translations[currentLang].detailsBtn}</button><a class="wa-btn" target="_blank" href="https://wa.me/${WA}?text=${encodeURIComponent('أرغب بطلب: '+nameTxt)}">WhatsApp</a></div>
  <div class="phone-no">${translations[currentLang].directOrder} 0545613955</div></div>`;
  el.querySelector('.det').onclick=()=>openModal(p);
  el.querySelector('.im').onclick=()=>openModal(p);
  gridEl.appendChild(el);
 });
}

renderTabs();
render();

function openModal(p){
 const nameTxt = p.n[currentLang] || p.n['ar'];
 const qTxt = typeof p.q === 'object' ? (p.q[currentLang] || p.q['ar']) : p.q;
 const wTxt = typeof p.w === 'object' ? (p.w[currentLang] || p.w['ar']) : p.w;
 const lTxt = typeof p.l === 'object' ? (p.l[currentLang] || p.l['ar']) : p.l;
 const cTxt = p.c[currentLang] || p.c['ar'];
 const priceUnit = currentLang === 'ar' ? 'ر.س' : 'SAR';

 document.getElementById('mImg').src=p.img;
 document.getElementById('mName').textContent=nameTxt;
 document.getElementById('mW').textContent=wTxt;
 document.getElementById('mL').textContent=lTxt;
 document.getElementById('mQ').textContent=qTxt;
 document.getElementById('mC').textContent=cTxt;
 document.getElementById('mPrice').textContent=p.p.toLocaleString()+' '+priceUnit;
 document.getElementById('modal').classList.add('open');
}
function closeModal(){document.getElementById('modal').classList.remove('open')}
