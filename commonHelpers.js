(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const r=document.querySelector(".header_navigation_window"),f=document.querySelector(".burger_icon_close"),m=document.querySelector(".button_burger");r.classList.contains("to_close")||r.classList.add("to_close");f.addEventListener("click",function(){r.classList.add("to_close")});m.addEventListener("click",function(){r.classList.remove("to_close")});const n=document.querySelectorAll(".tabs__nav button"),l=document.querySelectorAll(".tabs__item");function a(){l.forEach(o=>o.classList.add("hide")),n.forEach(o=>o.classList.remove("active"))}function u(o){l[o].classList.remove("hide"),n[o].classList.add("active")}a();u(0);n.forEach((o,s)=>o.addEventListener("click",()=>{a(),u(s)}));
//# sourceMappingURL=commonHelpers.js.map
