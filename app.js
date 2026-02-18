const weapons = [
  {name:"Glock 19", category:"Tier 1", image:"images/glock19.png"},
  {name:"Glock 17", category:"Tier 1", image:"images/glock17.png"},
  {name:"Glock 45", category:"Tier 2", image:"images/glock45.png"},
  {name:"SIG P320", category:"Tier 2", image:"images/p320.png"},
  {name:"1911", category:"Tier 3", image:"images/1911.png"},
  {name:"FN 57", category:"Tier 3", image:"images/fn57.png"},
  {name:"Cocaine", category:"Drugs", image:"images/cocaine.png"},
  {name:"Weed", category:"Drugs", image:"images/weed.png"}
];

const grid = document.getElementById("grid");
const filters = document.querySelectorAll(".filter");

let active = "All";

function render(){
  grid.innerHTML="";
  weapons
    .filter(w => active==="All" || w.category===active)
    .forEach(w=>{
      const card=document.createElement("div");
      card.className="card";
      card.innerHTML=`
        <img src="${w.image}">
        <div class="name">${w.name}</div>
        <div class="cat">${w.category}</div>
      `;
      grid.appendChild(card);
    });
}

filters.forEach(btn=>{
  btn.onclick=()=>{
    filters.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    active=btn.dataset.cat;
    render();
  };
});

render();
