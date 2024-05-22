import{a as n,M as u}from"./assets/vendor-9b5f6a01.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();n.defaults.baseURL="http://gateway.marvel.com";const l="bb59b27f1efca5bf3b3c536649aa56a1",d="6807fcecafaf9ad7d96911be2c5dcacb9d630a11",f=Date.now(),m=u(f+d+l).toString();async function p(){const{data:c}=await n.get(`/v1/public/comics?ts=${f}&apikey=${l}&hash=${m}&dateDescriptor=lastWeek`);return c}const y={lastComicsList:document.querySelector(".last-comics-list")};async function h(){const{data:{results:c}}=await p(),s=c.map(({id:i,title:r,thumbnail:e,creators:t})=>{const o=t.items.filter(({role:a})=>a==="writer").map(({name:a})=>a).join(", ");return`<li class="last-comics-item" id=${i}>
        <img
          class="last-comics-item-photo"
          src=${e.path}.${e.extension}
          alt=${r}
        />
        <h3 class="last-comics-item-title">${r}</h3>
        <p class="last-comics-item-author">${o}</p>
      </li>`}).join("");y.lastComicsList.insertAdjacentHTML("beforeend",s)}h();
//# sourceMappingURL=commonHelpers.js.map
