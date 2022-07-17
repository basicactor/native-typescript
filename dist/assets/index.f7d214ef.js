const l = function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const i of t.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = n(e);
    fetch(e.href, t);
  }
};
l();
const d = (r) => {
    var n;
    const o = document.createElement("div");
    (o.textContent = "hi"),
      o.style.setProperty("padding", r.padding),
      o.style.setProperty("width", r.width),
      o.style.setProperty("height", r.height),
      o.style.setProperty("background-color", r.bgColor),
      (n = document.getElementById("app")) == null || n.appendChild(o);
  },
  c = { padding: "4px", height: "50px", width: "50px", bgColor: "red" };
d(c);
console.log("index.ts called");
