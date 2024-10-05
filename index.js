import{S as m,i as n}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const f="46354087-8e1a6a8f4ead0e3d6b452e4d6",d="https://pixabay.com/api/";async function g(s){const t=`${d}?key=${f}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const e=await fetch(t);if(!e.ok)throw new Error("Network response error");return(await e.json()).hits}catch(e){throw console.error("Error fetching images:",e),e}}const u=document.querySelector(".gallery"),p=new m(".gallery a");function y(){u.innerHTML="",p.refresh()}function h(s){const t=s.map(e=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <div class="large-img">
                    <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
                    <ul class="img-details">
                        <li><p>Likes</p><p>${e.likes}</p></li>
                        <li><p>Views</p><p>${e.views}</p></li>
                        <li><p>Comments</p><p>${e.comments}</p></li>
                        <li><p>Downloads</p><p>${e.downloads}</p></li>
                    </ul>
                </div>
            </a>
        </li>
    `).join("");u.innerHTML=t,p.refresh()}const F=document.querySelector(".search-form"),c=document.querySelector(".search-form-input"),a=document.querySelector(".loader");F.addEventListener("submit",async function(s){s.preventDefault();const t=c.value.trim();if(t===""){n.error({title:"Error",message:"Please enter a search term.",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFF",titleColor:"#FFF",iconColor:"#FFF",timeout:5e3});return}c.value="",a.style.display="block",y();try{const e=await g(t);e.length===0?n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFF",titleColor:"#FFF",iconColor:"#FFF",timeout:6e3}):h(e)}catch(e){a.style.display="none",n.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFF",titleColor:"#FFF",iconColor:"#FFF",timeout:6e3}),console.error("Error fetching images:",e)}a.style.display="none"});
//# sourceMappingURL=index.js.map
