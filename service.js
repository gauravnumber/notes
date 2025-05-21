const textarea = document.getElementById("textarea");

textarea.value = localStorage.getItem("notes") || "";

textarea.addEventListener("input", () => {
  localStorage.setItem("notes", textarea.value);
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then((reg) => console.log("Service worker registered.", reg))
      .catch((reg) => console.log("Service worker failed.", reg));
  });
}
