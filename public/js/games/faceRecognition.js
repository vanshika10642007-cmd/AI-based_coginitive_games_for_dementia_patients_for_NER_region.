window.GameFace={start(){
 const area=document.getElementById("gameArea"), people=[["👨🏽","Ramesh"],["👩🏽","Maya"],["👴🏽","Hari"],["👵🏽","Lina"]], target=people[Math.floor(Math.random()*people.length)];
 const opts=[target,...people.filter(p=>p[1]!==target[1]).sort(()=>Math.random()-.5).slice(0,3)].sort(()=>Math.random()-.5);
 area.innerHTML=`<p>Remember the target face and name, then choose the same person.</p><div class="card" style="text-align:center;font-size:75px">${target[0]}<div style="font-size:22px;font-weight:bold">${target[1]}</div></div><h3>Who is the same person?</h3><div class="face-grid">${opts.map((p,i)=>`<button class="face" onclick="GameFace.answer(${i})">${p[0]}<small>Person ${i+1}</small></button>`).join("")}</div>`;
 this.target=target;this.opts=opts;
},answer(i){const ok=this.opts[i][1]===this.target[1];result("face",ok?1:0,1,ok?100:0,{target:this.target[1]})}};