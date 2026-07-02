let lang = "en";

function toggleLang() {
  lang = (lang === "en") ? "cn" : "en";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerText = el.getAttribute("data-" + lang);
  });
}
