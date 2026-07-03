const translations = { ... }

function setLang(lang){
document.querySelectorAll("[data-i18n]").forEach(el=>{
el.innerText = translations[lang][el.dataset.i18n];
});
}

setLang("en");
