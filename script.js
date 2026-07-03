const translations = {

zh:{
nav_about:"關於我們",
nav_products:"產品",
nav_contact:"聯絡",

hero_title:"歡迎來到南海水族館",
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

footer:"© 2026 南海水族館"
},

en:{
nav_about:"About",
nav_products:"Products",
nav_contact:"Contact",

hero_title:"Welcome to Nam Hoi Aquarium",
hero_sub:"Fish • Plants • Aquarium Equipment",

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

footer:"© 2026 Nam Hoi Aquarium"
},

bm:{
nav_about:"Tentang",
nav_products:"Produk",
nav_contact:"Hubungi",

hero_title:"Selamat Datang ke Nam Hoi Aquarium",
hero_sub:"Ikan Hiasan • Tumbuhan • Peralatan Akuarium",

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

footer:"© 2026 Nam Hoi Aquarium"
}
};

function setLang(lang){
document.querySelectorAll("[data-i18n]").forEach(el=>{
el.innerText = translations[lang][el.dataset.i18n];
});
}

setLang("en");
