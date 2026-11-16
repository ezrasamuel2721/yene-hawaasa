(function(){
const TITLE='የአዋሳ ከተማ';
const HISTORY=[
'ሐዋሳ በሲዳማ ክልል የምትገኝ ከተማ ሲሆን በሐዋሳ ሐይቅ ዳርቻ የምትገኝ እና የሲዳማ ክልል መቀመጫ ናት።',
'የከተማዋ ታሪክ ከአዳሬ ቀደምት ስፍራ እስከ 1952 ዓ.ም. የዘመናዊ ከተማ መጀመር፣ የማዘጋጃ አስተዳደር፣ የክልል ማዕከልነት፣ የኢንዱስትሪና የትምህርት እድገት በመሻገር ወደ ዛሬዋ ሐዋሳ ደርሷል።',
'1952 ዓ.ም. — የዘመናዊ ሐዋሳ ከተማ መጀመሪያ እንደሆነ በተጠቀሱ የከተማዋ ምንጮች ይገለጻል።',
'በኋላ ሐዋሳ የአስተዳደር፣ የንግድ፣ የትምህርት፣ የጤና እና የቱሪዝም ማዕከል ሆና በቀጣይ እድገት መጥታለች።'
];
function esc(s){return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
function openCity(e){
 const cards=[...document.querySelectorAll('.card')];
 const card=e.target.closest&&e.target.closest('.card');
 if(!card||cards.indexOf(card)!==0)return;
 e.preventDefault();e.stopImmediatePropagation();
 const m=document.getElementById('yh085');if(!m)return;
 const h=m.querySelector('h2'),p=m.querySelector('p'),a=m.querySelector('a');
 if(h)h.textContent=TITLE;
 if(p){p.innerHTML=HISTORY.map(esc).join('<br><br>')+'<br><br><strong>ምንጮች</strong><br>Hawassa City Administration — History<br>Visit Hawassa — About Us / The Story of Hawassa<br>Jimma University — A History of Hawassa Town from its Foundation to 1991<br>Hawassa University — Background Detail';p.style.whiteSpace='normal';}
 if(a){a.href='https://visithawassa.et/about-us/';a.textContent='Visit Hawassa — የተጨማሪ ምንጭ';a.style.display='inline-block';}
 m.classList.add('on');
 document.body.classList.add('yh-lock');
}
document.addEventListener('click',openCity,true);
})();