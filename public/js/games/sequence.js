window.GameSequence={start(){
 const area=document.getElementById("gameArea"), items=[["Wake up","🌅"],["Brush teeth","🪥"],["Have breakfast","🍽️"],["Go for a walk","🚶"]];
 let selected=[];
 area.innerHTML=`<p>Tap the activities in the order they normally happen.</p><div class="sequence-list" id="seq">${[...items].sort(()=>Math.random()-.5).map((x,i)=>`<button class="sequence-item" data-id="${items.indexOf(x)}" onclick="GameSequence.pick(this)">${x[1]} &nbsp; ${x[0]}</button>`).join("")}</div><br><button class="btn" onclick="GameSequence.check()">Check sequence</button>`;
 this.selected=selected;
},pick(el){if(el.classList.contains("selected"))return;el.classList.add("selected");this.selected.push(Number(el.dataset.id))},
check(){const ok=this.selected.every((v,i)=>v===i)&&this.selected.length===4;result("sequence",ok?1:0,1,ok?100:25,{sequence:this.selected})}};