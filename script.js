// ==========================
// translations
// ==========================

const translations = {

zh:{
nav_about:"關於我們",
nav_products:"產品",
nav_contact:"聯絡",

hero_title:"NAM HOI AQUARIUM 南海魚店",
hero_sub:"專業水族用品｜觀賞魚｜水草｜魚缸設備",

about_title:"關於我們",
about_text:"我們提供健康觀賞魚、水草、魚缸及水族用品。",

product_title:"產品",

p1:"🐠 觀賞魚",
p2:"🐟 金魚",
p3:"🌿 水草",
p4:"🏝 魚缸",
p5:"🧪 水族用品",
p6:"🦐 觀賞蝦",

contact_title:"聯絡我們",
address:"7G Jalan Perdana 5 Kuala Lumpur",
hours:"營業時間：Mon-Sun",

call:"致電",

footer:"© 2010 Nam Hoi Aquarium Shop 南海水族館"
},

en:{
nav_about:"About",
nav_products:"Products",
nav_contact:"Contact",

hero_title:"NAM HOI AQUARIUM 南海魚店",
hero_sub:"Aquarium Supplies | Ornamental Fish | Aquatic Plants | Aquarium Equipment",

about_title:"About Us",
about_text:"We provide healthy fish and aquarium supplies.",

product_title:"Products",

p1:"🐠 Ornamental Fish",
p2:"🐟 Goldfish",
p3:"🌿 Aquatic Plants",
p4:"🏝 Aquarium Tank",
p5:"🧪 Accessories",
p6:"🦐 Shrimp",

contact_title:"Contact Us",
address:"7G Jalan Perdana 5 Kuala Lumpur",
hours:"Business Hours: Mon-Sun",

call:"Call",

footer:"© 2010 Nam Hoi Aquarium Shop 南海水族館"
},

bm:{
nav_about:"Tentang",
nav_products:"Produk",
nav_contact:"Hubungi",

hero_title:"NAM HOI AQUARIUM 南海魚店",
hero_sub:"Bekalan Akuarium | Ikan Hiasan | Tumbuhan Akuatik | Peralatan Akuarium",

about_title:"Tentang Kami",
about_text:"Kami menyediakan ikan sihat dan aksesori akuarium.",

product_title:"Produk",

p1:"🐠 Ikan Hiasan",
p2:"🐟 Ikan Emas",
p3:"🌿 Tumbuhan",
p4:"🏝 Akuarium",
p5:"🧪 Aksesori",
p6:"🦐 Udang",

contact_title:"Hubungi Kami",
address:"7G Jalan Perdana 5 Kuala Lumpur",
hours:"Waktu Operasi: Isnin-Ahad",

call:"Hubungi",

footer:"© 2010 Nam Hoi Aquarium Shop 南海水族館"
}

};

// ==========================
// FIX：保證 DOM 載入後才執行
// ==========================

function setLang(lang){

document.querySelectorAll("[data-i18n]").forEach(el=>{

const key = el.dataset.i18n;

if(translations[lang] && translations[lang][key]){

// hero_title 如果以後需要 HTML(<br>)可以直接支援
if(key==="hero_title"){
el.innerHTML = translations[lang][key];
}else{
el.innerText = translations[lang][key];
}

}

});

}

// ⭐⭐ 重點：掛到 window（解決你按鈕沒反應）
window.setLang = setLang;

// ==========================
// DOM ready + default language
// ==========================

document.addEventListener("DOMContentLoaded", () => {
setLang("en");
});
