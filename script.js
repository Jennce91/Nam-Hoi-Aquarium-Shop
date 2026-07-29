// ==========================
// translations
// ==========================

const translations = {

zh:{

nav_about:"關於我們",
nav_products:"產品",
nav_contact:"聯絡",


hero_title:"NAM HOI AQUARIUM 南海魚店",

hero_sub:"專業水族用品｜觀賞魚｜水草｜魚缸設備｜魚缸與魚池服務",


about_title:"關於我們",

about_text:"我們專注於提供優質觀賞魚、水草、魚缸及專業水族用品，致力於打造健康、美觀且穩定的水族環境。除了水族產品，我們也提供專業魚缸與魚池服務，包括清潔保養、設備維修、景觀改造、設計建造及安裝。無論是家庭水景、商業空間或戶外魚池，我們都以專業經驗與用心服務，為您打造理想的水族空間。",


product_title:"產品",


p1:"🐠 魚類",

p2:"🐟 特別觀賞魚",

p3:"🌿 水草",

p4:"🌱 水草缸",

p5:"🏝 魚缸",

p6:"🧪 水族用品",

p7:"🦐 觀賞蝦",

p8:"🦀 螃蟹",


contact_title:"聯絡我們",

address:"7G Jalan Perdana 5 Kuala Lumpur",

hours:"營業時間：Mon-Sat 12:30pm - 10:00pm | Sun 12:30pm - 8:00pm",


footer:"© 2010 Nam Hoi Aquarium Shop 南海水族店"

},



en:{


nav_about:"About",

nav_products:"Products",

nav_contact:"Contact",



hero_title:"NAM HOI AQUARIUM 南海魚店",


hero_sub:"Aquarium Supplies | Ornamental Fish | Aquatic Plants | Aquarium Equipment | Aquarium & Pond Services",



about_title:"About Us",


about_text:"We specialize in providing quality ornamental fish, aquatic plants, aquariums, and professional aquarium supplies. Our mission is to create healthy, beautiful, and balanced aquatic environments for our customers. Beyond aquarium products, we provide professional aquarium and pond services, including cleaning and maintenance, equipment repair, aquascape renovation, design, construction, and installation. Whether for home aquariums, commercial spaces, or outdoor ponds, we are committed to creating your ideal aquatic environment with expertise and dedicated service.",



product_title:"Products",


p1:"🐠 Fish",

p2:"🐟 Exotic Fish",

p3:"🌿 Aquatic Plants",

p4:"🌱 Planted Tank",

p5:"🏝 Aquarium Tank",

p6:"🧪 Accessories",

p7:"🦐 Shrimp",

p8:"🦀 Crab",



contact_title:"Contact Us",


address:"7G Jalan Perdana 5 Kuala Lumpur",


hours:"Business Hours: Mon-Sat 12:30pm - 10:00pm | Sun 12:30pm - 8:00pm",



footer:"© 2010 Nam Hoi Aquarium Shop 南海水族店"

},




bm:{


nav_about:"Tentang",

nav_products:"Produk",

nav_contact:"Hubungi",



hero_title:"NAM HOI AQUARIUM 南海魚店",


hero_sub:"Bekalan Akuarium | Ikan Hiasan | Tumbuhan Akuatik | Peralatan Akuarium | Servis Akuarium & Kolam",



about_title:"Tentang Kami",


about_text:"Kami pakar dalam menyediakan ikan hiasan berkualiti, tumbuhan akuatik, akuarium serta kelengkapan akuarium profesional. Matlamat kami adalah untuk mewujudkan persekitaran akuatik yang sihat, cantik dan seimbang untuk setiap pelanggan. Selain produk akuarium, kami turut menyediakan perkhidmatan profesional untuk akuarium dan kolam seperti pembersihan dan penyelenggaraan, pembaikan peralatan, pengubahsuaian landskap akuatik, reka bentuk, pembinaan serta pemasangan.",



product_title:"Produk",


p1:"🐠 Ikan",

p2:"🐟 Ikan Eksotik",

p3:"🌿 Tumbuhan Akuatik",

p4:"🌱 Akuarium Tumbuhan",

p5:"🏝 Akuarium",

p6:"🧪 Aksesori",

p7:"🦐 Udang",

p8:"🦀 Ketam",



contact_title:"Hubungi Kami",


address:"7G Jalan Perdana 5 Kuala Lumpur",


hours:"Waktu Operasi: Isnin-Sabtu 12:30pm - 10:00pm | Ahad 12:30pm - 8:00pm",



footer:"© 2010 Nam Hoi Aquarium Shop 南海水族店"

}

};



// ==========================
// language function
// ==========================


function setLang(lang){


document.querySelectorAll("[data-i18n]").forEach(el=>{


const key = el.dataset.i18n;



if(translations[lang] && translations[lang][key]){


el.innerText = translations[lang][key];


}


});


}


// 掛到 window，讓 HTML onclick 可以使用

window.setLang = setLang;



// ==========================
// default language
// ==========================


document.addEventListener("DOMContentLoaded",()=>{


setLang("en");


});
