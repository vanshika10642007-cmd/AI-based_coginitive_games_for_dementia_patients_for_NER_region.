window.GameCards={start(){
 const area=document.getElementById("gameArea"), emojis=["🍎","🌻","🐘","☕","🏠","🌳","📚","🚲"], deck=[...emojis,...emojis].sort(()=>Math.random()-.5);
 let open=[],matched=0,moves=0,lock=false;
 area.innerHTML=`<p><b>Find all matching pairs.</b> No countdown.</p><div class="board cards" id="cards"></div>`;
 const board=document.getElementById("cards");
 deck.forEach((x,i)=>{const b=document.createElement("button");b.className="mem-card";b.textContent="❓";b.onclick=()=>flip(i,b);board.appendChild(b)});
 function flip(i,b){if(lock||open.includes(i)||b.dataset.done)return;b.textContent=deck[i];b.classList.add("revealed");open.push(i);if(open.length===2){moves++;lock=true;const [a,c]=open;if(deck[a]===deck[c]){board.children[a].dataset.done=board.children[c].dataset.done="1";matched++;open=[];lock=false;if(matched===emojis.length)result("cards",Math.max(0,20-moves),20,100*matched/emojis.length)}else setTimeout(()=>{board.children[a].textContent=board.children[c].textContent="❓";board.children[a].classList.remove("revealed");board.children[c].classList.remove("revealed");open=[];lock=false},700)}}}
};
