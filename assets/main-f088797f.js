import{a as n,M as d,f as m}from"./vendor-303cc648.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();n.defaults.baseURL="http://gateway.marvel.com";const l="bb59b27f1efca5bf3b3c536649aa56a1",p="6807fcecafaf9ad7d96911be2c5dcacb9d630a11",u=Date.now(),y=d(u+p+l).toString();async function h(){const{data:c}=await n.get(`/v1/public/comics?ts=${u}&apikey=${l}&hash=${y}&dateDescriptor=lastWeek`);return c}const f={lastComicsList:document.querySelector(".last-comics-list"),startYear:document.querySelector("#startYear")};async function g(){const{data:{results:c}}=await h(),s=c.map(({id:a,title:r,thumbnail:t,creators:e})=>{const o=e.items.filter(({role:i})=>i==="writer").map(({name:i})=>i).join(", ");return`<li class="last-comics-item" id=${a}>
        <img
          class="last-comics-item-photo"
          src=${t.path}.${t.extension}
          alt=${r}
        />
        <h3 class="last-comics-item-title">${r}</h3>
        <p class="last-comics-item-author">${o}</p>
      </li>`}).join("");f.lastComicsList.insertAdjacentHTML("beforeend",s)}g();const b={closeOnEscape:!0,dateFormat:"d/m/Y",maxDate:"today"};m(f.startYear,b);
//# sourceMappingURL=main-f088797f.js.map
