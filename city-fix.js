(function(){
const TITLE='የአዋሳ ከተማ';
const HTML='<h3>የአዋሳ ከተማ</h3>'+
'<p>ሐዋሳ በሲዳማ ክልል የምትገኝ ከተማ ሲሆን በሐዋሳ ሐይቅ ዳርቻ የምትገኝ እና የሲዳማ ክልል መቀመጫ ናት። የሐዋሳ ከተማ አስተዳደር ከተማዋ በ1952 ዓ.ም. እንደተመሰረተች ይገልጻል።</p>'+
'<p>የከተማ አስተዳደሩ አካባቢውን 157.2 ካሬ ኪ.ሜ. እንደሚሸፍን እና ከተማዋ በ8 ክፍለ ከተሞችና 32 ቀበሌዎች እንደተደራጀች ይገልጻል።</p>'+
'<p>8ቱ ክፍለ ከተሞች፦ ታቦር፣ አዲስ ከተማ፣ ሐይቅ ዳር፣ መሐል፣ ባሕል አደራሽ፣ ምሥራቅ፣ መናሐሪያ እና ቱላ ናቸው።</p>'+
'<p>የከተማዋ ዋና የተፈጥሮ ምልክት ሐዋሳ ሐይቅ ሲሆን፣ ከተማዋ የክልሉ የአስተዳደር፣ የንግድ፣ የትምህርት፣ የጤና እና የቱሪዝም እንቅስቃሴ ማዕከል ናት።</p>'+
'<p><strong>ምንጭ፦</strong> Hawassa City Administration — History / City Details</p>';
function openCity(e){
 const card=e.target.closest&&e.target.closest('.card'); if(!card) return;
 const t=(card.textContent||'').replace(/\\s+/g,' ').trim();
 if(!t.includes(TITLE)) return;
 e.preventDefault(); e.stopImmediatePropagation();
 const m=document.getElementById('yh085'); if(!m) return;
 const h=m.querySelector('h2'),p=m.querySelector('p'),a=m.querySelector('a');
 if(h) h.textContent=TITLE;
 if(p){p.innerHTML=HTML;p.style.whiteSpace='normal';}
 if(a){a.href='https://www.hawassa.gov.et/en/city/history';a.textContent='የሐዋሳ ከተማ አስተዳደር ምንጭ';a.style.display='inline-block';}
 m.classList.add('on');
}
document.addEventListener('click',openCity,true);
})();