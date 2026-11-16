(function(){
const TITLE='የአዋሳ ከተማ';
const HISTORY=[
'ሐዋሳ በሲዳማ ክልል የምትገኝ ከተማ ሲሆን በሐዋሳ ሐይቅ ዳርቻ የምትገኝ እና የሲዳማ ክልል መቀመጫ ናት።',
'የከተማዋ ታሪክ ከአዳሬ ቀደምት ስፍራ እስከ 1952 ዓ.ም. የዘመናዊ ከተማ መጀመር፣ የማዘጋጃ አስተዳደር፣ የክልል ማዕከልነት፣ የኢንዱስትሪና የትምህርት እድገት በመሻገር ወደ ዛሬዋ ሐዋሳ ደርሷል።',
'1952 ዓ.ም. — የዘመናዊ ሐዋሳ ከተማ መጀመሪያ እንደሆነ በተጠቀሱ የከተማዋ ምንጮች ይገለጻል።',
'በኋላ ሐዋሳ የአስተዳደር፣ የንግድ፣ የትምህርት፣ የጤና እና የቱሪዝም ማዕከል ሆና በቀጣይ እድገት መጥታለች።'
];
function show(){
 const m=document.getElementById('yh085'); if(!m)return false;
 const h=m.querySelector('h2'),p=m.querySelector('p'),a=m.querySelector('a');
 if(h)h.textContent=TITLE;
 if(p)p.innerHTML=HISTORY.join('<br><br>')+'<br><br><strong>ምንጮች</strong><br>Hawassa City Administration — History<br>Visit Hawassa — About Us / The Story of Hawassa<br>Jimma University — A History of Hawassa Town from its Foundation to 1991<br>Hawassa University — Background Detail';
 if(a){a.href='https://hawassa.gov.et/en/city/history';a.textContent='የሐዋሳ ከተማ አስተዳደር ምንጭ';a.style.display='inline-block';}
 m.classList.add('on'); return true;
}
function hit(e){
 const el=e.target&&e.target.closest?e.target.closest('.card'):null;
 if(!el)return;
 const t=(el.textContent||'').replace(/\s+/g,' ').trim();
 if(!t.includes(TITLE))return;
 e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();show();
}
window.addEventListener('click',hit,true);
new MutationObserver(function(){
 document.querySelectorAll('.card').forEach(function(c){
  if(c.dataset.yhCityBound)return;
  if((c.textContent||'').includes(TITLE)){
   c.dataset.yhCityBound='1';
   c.addEventListener('click',function(e){e.preventDefault();e.stopImmediatePropagation();show();},false);
  }
 });
}).observe(document.documentElement,{subtree:true,childList:true});
document.addEventListener('click',function(e){
 if(e.target&&e.target.closest&&e.target.closest('#yh085 button'))document.getElementById('yh085').classList.remove('on');
},true);
})();