(()=>{'use strict';
const services=[
{name:'网站管理、更新与备份',price:'RM500 每月',description:'持续更新网站内容、修复问题、优化功能并进行定期备份与安全监控，确保网站稳定、安全运行。',icon:'manage'},
{name:'网站托管设置',price:'RM500 每月',description:'协助选择与配置网站托管、域名、SSL、CDN及基础安全设置，并提供运行监控与技术支援。',icon:'hosting'},
{name:'公司电邮服务设置',price:'RM500 每月',description:'设置专业公司域名电邮，兼容电脑与手机使用，并加强账号安全、稳定性及日常技术支援。',icon:'email'},
{name:'公司培训课程',price:'RM500 日',description:'提供网站管理、内容更新、SEO、数据分析与数码营销培训，可按企业需要安排线上或线下课程。',icon:'training'},
{name:'Google Business 服务',price:'RM500 每月',description:'建立与优化 Google Business Profile，协助评价管理、内容发布及提升 Google 搜索与地图曝光。',icon:'google'},
{name:'AI 个人品牌网站配套',price:'RM5,000 一次性',description:'建立专属个人品牌网站，整合个人域名、Google Business、SEO、WhatsApp联系、后台管理及实用培训。',icon:'ai'}
];
const icons={
manage:'<path d="M4 7h16v11H4z"/><path d="M8 4h8v3M8 21h8M12 18v3"/><path d="m8 12 2 2 5-5"/>',
hosting:'<rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01M16 7h2M16 17h2"/>',
email:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4.5 7 7.5 6 7.5-6"/><path d="M8 16h8"/>',
training:'<path d="M4 5h16v11H4z"/><path d="M8 20h8M12 16v4"/><circle cx="9" cy="10" r="2"/><path d="M13 13c-.8-1.3-2.1-2-4-2s-3.2.7-4 2M15 9h3M15 12h3"/>',
google:'<path d="M20 12h-7"/><path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 12c0 4.6-3.1 8-8 8"/>',
ai:'<rect x="5" y="6" width="14" height="13" rx="4"/><path d="M9 2v4M15 2v4M2 11h3M19 11h3M9 12h.01M15 12h.01M9 16c1.7 1 4.3 1 6 0"/>'
};
const svg=key=>'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+icons[key]+'</svg>';
const section=document.createElement('section');
section.className='section extra-services';
section.setAttribute('aria-labelledby','extraServicesTitle');
section.innerHTML='<div class="section-head"><div><h2 id="extraServicesTitle">额外服务</h2><p class="extra-services__intro">为网站营运、企业数码化与个人品牌提供持续而灵活的专业支援。</p></div><p>Additional services</p></div><div class="extra-services__controls"><button class="extra-services__arrow" id="extraServicesPrev" type="button" aria-label="上一项服务">←</button><button class="extra-services__arrow" id="extraServicesNext" type="button" aria-label="下一项服务">→</button></div><div class="extra-services__slider" id="extraServicesSlider">'+services.map((service,index)=>{const message='您好，我想了解RyanKey Designs的额外服务。\n\n服务：'+service.name+'\n价格：'+service.price+'\n来源页面：'+window.location.href;return '<article class="extra-service-card"><div class="extra-service-card__visual">'+svg(service.icon)+'<span class="extra-service-card__index">'+String(index+1).padStart(2,'0')+'</span></div><div class="extra-service-card__body"><h3>'+service.name+'</h3><p class="extra-service-card__price">'+service.price+'</p><p class="extra-service-card__description">'+service.description+'</p><a class="extra-service-card__button" href="https://wa.me/60127740280?text='+encodeURIComponent(message)+'" target="_blank" rel="noopener"><span>通过WhatsApp咨询</span><b aria-hidden="true">↗</b></a></div></article>'}).join('')+'</div>';
const footer=document.querySelector('footer');
if(!footer)return;
footer.parentNode.insertBefore(section,footer);
const slider=section.querySelector('#extraServicesSlider');
const prev=section.querySelector('#extraServicesPrev');
const next=section.querySelector('#extraServicesNext');
const update=()=>{const max=slider.scrollWidth-slider.clientWidth;prev.disabled=slider.scrollLeft<4;next.disabled=slider.scrollLeft>max-4};
const move=direction=>slider.scrollBy({left:direction*slider.clientWidth*.9,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
prev.addEventListener('click',()=>move(-1));
next.addEventListener('click',()=>move(1));
slider.addEventListener('scroll',update,{passive:true});
window.addEventListener('resize',update,{passive:true});
update();
})();