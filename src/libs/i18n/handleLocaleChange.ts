export const handleLanguageChange = (lang: string) => {
  console.log("handle load !", lang);
  const html = document.querySelector("html");
  localStorage.setItem("language", lang);
  html?.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
};
