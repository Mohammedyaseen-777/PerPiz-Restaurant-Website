const categories = ["All","Cheese Pizza","Veg Pizza","Non-Veg Pizza","Taco","French Fries","Burger","Garlic Bread","Pasta","Dips","Desserts","Slice","Crust","Addons"];

const menu = [
  // Pizza
  {cat:"Cheese Pizza",name:"Margherita Pizza",desc:"An all time classic, featuring perfect aerated crust & fresh mozzarella cheese.",prices:{S:129,M:285,L:399}},
  {cat:"Cheese Pizza",name:"Double Cheese Margherita Pizza",desc:"Crispy crust, tangy sauce, melty cheese, fresh capsicum.",prices:{S:229,M:339,L:475}},
  {cat:"Cheese Pizza",name:"Creamy Margherita Pizza",desc:"A Margherita with added creamy sauce.",prices:{S:229,M:339,L:475}},
  {cat:"Cheese Pizza",name:"Four Cheese Pizza",desc:"Treat your taste buds with a blend of four cheese.",prices:{S:275,M:405,L:525}},
  {cat:"Cheese Pizza",name:"Divine Margherita",desc:"Combination of 7 types of cheese: jalapeno cheese, mozzarella, cheddar, Monterey Jack, Colby & orange cheddar.",prices:{S:295,M:469,L:595},badge:"BEST SELLER"},
  {cat:"Veg Pizza",name:"Capsicum Carnival Pizza",desc:"Crispy crust, tangy sauce, melty cheese, fresh capsicum.",prices:{S:129,M:285,L:395}},
  {cat:"Veg Pizza",name:"Cheese & Corn Pizza",desc:"Golden corn & cheese.",prices:{S:229,M:339,L:475}},
  {cat:"Veg Pizza",name:"Pep & Spice Pizza",desc:"Trio of bell peppers for those who need some extra spice with red paprika.",prices:{S:275,M:405,L:525},badge:"BEST SELLER"},
  {cat:"Veg Pizza",name:"Tandoori Paneer Pizza",desc:"North Indian delicacy with tandoori paneer, crisp onion & spicy jalapeno.",prices:{S:275,M:405,L:525}},
  {cat:"Veg Pizza",name:"Makhni Paneer Pizza",desc:"Creamy sauce with paneer, red & yellow capsicum.",prices:{S:275,M:405,L:525}},
  {cat:"Veg Pizza",name:"Supreme Veg Pizza",desc:"A veggie party with trio of bell peppers, jalapeno, olives, corn & red paprika.",prices:{S:295,M:475,L:595}},
  {cat:"Veg Pizza",name:"Kadhai Paneer Pizza",desc:"Soft sautéed paneer in kadhai gravy, topped with onion & capsicum.",prices:{S:295,M:475,L:595},badge:"BEST SELLER"},
  {cat:"Veg Pizza",name:"Chilli Paneer Pizza",desc:"Chinese delicacy with paneer, red paprika & spicy sauce.",prices:{S:295,M:475,L:595}},
  {cat:"Non-Veg Pizza",name:"Tandoori Chicken Pizza",desc:"North Indian delicacy with tandoori chicken, crisp onion & spicy jalapeno.",prices:{S:275,M:405,L:529}},
  {cat:"Non-Veg Pizza",name:"Makhni Chicken Pizza",desc:"Creamy sauce with chicken, red & yellow capsicum.",prices:{S:275,M:405,L:529},badge:"BEST SELLER"},
  {cat:"Non-Veg Pizza",name:"Barbeque Chicken Pizza",desc:"Toasted chicken in barbeque sauce & olives.",prices:{S:275,M:405,L:529}},
  {cat:"Non-Veg Pizza",name:"Kadhai Chicken Pizza",desc:"Soft sautéed chicken in kadhai gravy, topped with onion & capsicum.",prices:{S:295,M:475,L:595},badge:"BEST SELLER"},
  {cat:"Non-Veg Pizza",name:"Chicken Chilly Pizza",desc:"Chinese delicacy with chicken, red paprika & spicy sauce.",prices:{S:295,M:475,L:595}},
  {cat:"Non-Veg Pizza",name:"PerPiz Special Pizza",desc:"Triple meat pizza with chicken, salami & seekh kebab on spicy base.",prices:{S:295,M:475,L:595},badge:"BEST SELLER"},
  {cat:"Non-Veg Pizza",name:"Korean Seekh Kabab Pizza",desc:"Homemade chicken seekh with Korean sauce & red paprika.",prices:{S:295,M:475,L:595}},
  // Taco
  {cat:"Taco",name:"Butter Masala Taco",desc:"",prices:{Veg:185,"Non-Veg":219},variants:["Veg","Non-Veg"]},
  {cat:"Taco",name:"PerPiz Special Taco",desc:"",prices:{Veg:185,"Non-Veg":219},variants:["Veg","Non-Veg"]},
  // Fries
  {cat:"French Fries",name:"Salted French Fries",desc:"",prices:{Regular:85}},
  {cat:"French Fries",name:"Peri Peri Fries",desc:"",prices:{Regular:119}},
  {cat:"French Fries",name:"Cheese Loaded Fries",desc:"",prices:{Regular:155}},
  {cat:"French Fries",name:"Chicken Loaded Fries",desc:"",prices:{Regular:209},badge:"BEST SELLER"},
  // Burger
  {cat:"Burger",name:"Dynamite Chicken Burger",desc:"",prices:{Regular:209},badge:"BEST SELLER"},
  {cat:"Burger",name:"Korean Chicken Burger",desc:"",prices:{Regular:219},badge:"FE"},
  {cat:"Burger",name:"Chicken Cheese Supreme Burger",desc:"",prices:{Regular:229}},
  {cat:"Burger",name:"Up & Down Chicken Burger",desc:"",prices:{Regular:359}},
  {cat:"Burger",name:"American Meat Burger",desc:"",prices:{Regular:229}},
  // Garlic
  {cat:"Garlic Bread",name:"Garlic Sticks with Dip",desc:"Fresh baked garlic sticks topped with inhouse seasoning with a creamy cheese dip.",prices:{Veg:129},variants:["Veg"]},
  {cat:"Garlic Bread",name:"Stuffed Garlic Bread Veg",desc:"Cheese garlic bread packed with corn and a hint of jalapeno heat.",prices:{Veg:165}},
  {cat:"Garlic Bread",name:"Stuffed Chicken Garlic Bread",desc:"Soft, cheesy garlic bread stuffed with juicy chicken & sweet corn.",prices:{"Non-Veg":185},variants:["Non-Veg"]},
  {cat:"Garlic Bread",name:"Punjabi Garlic Bread",desc:"Paneer/chicken tossed in makhni sauce with cheese.",prices:{Veg:165,"Non-Veg":185},variants:["Veg","Non-Veg"]},
  // Pasta
  {cat:"Pasta",name:"Jalapeno Cream Cheesy",desc:"Chef-made jalapeno cheese sauce tossed with pasta, corn & jalapenos.",prices:{Veg:165,"Non-Veg":185},variants:["Veg","Non-Veg"],badge:"BEST SELLER"},
  {cat:"Pasta",name:"Spicy Herb Pasta",desc:"Fiery herb sauce meets pasta, with sizzling onion & capsicum on top.",prices:{Veg:165,"Non-Veg":185},variants:["Veg","Non-Veg"]},
  {cat:"Pasta",name:"Cheesy Alfredo Pasta",desc:"Rich, creamy Alfredo sauce loaded with corn & capsicum goodness.",prices:{Veg:165,"Non-Veg":185},variants:["Veg","Non-Veg"]},
  // Dips
  {cat:"Dips",name:"Cheese Dip",desc:"",prices:{Regular:50}},
  {cat:"Dips",name:"Jalapeno Dip",desc:"",prices:{Regular:50}},
  {cat:"Dips",name:"Chipotle Dip",desc:"",prices:{Regular:50}},
  {cat:"Dips",name:"Tandoori Dip",desc:"",prices:{Regular:50}},
  // Desserts
  {cat:"Desserts",name:"Choco Lava Cake",desc:"",prices:{Regular:119}},
  {cat:"Desserts",name:"Nutella Cheese Cake",desc:"",prices:{Regular:195}},
  {cat:"Desserts",name:"Biscoff Cheese Cake",desc:"",prices:{Regular:219},badge:"BEST SELLER"},
  // Slice
  {cat:"Slice",name:"Margherita Slice Cheese Burst",desc:"",prices:{Veg:129},variants:["Veg"]},
  {cat:"Slice",name:"Veggie Slice Cheese Burst",desc:"",prices:{Veg:165},variants:["Veg"]},
  {cat:"Slice",name:"Tandoori Slice Cheese Burst",desc:"",prices:{Veg:165,"Non-Veg":185},variants:["Veg","Non-Veg"]},
  {cat:"Slice",name:"Chipotle Slice Cheese Burst",desc:"",prices:{Veg:165,"Non-Veg":185},variants:["Veg","Non-Veg"]},
  {cat:"Slice",name:"Kadhai Slice Cheese Burst",desc:"",prices:{Veg:165,"Non-Veg":185},variants:["Veg","Non-Veg"]},
  {cat:"Slice",name:"Divine Margherita Slice Cheese Burst",desc:"",prices:{Veg:219},variants:["Veg"]},
  {cat:"Slice",name:"PerPiz Special Slice Cheeseburst",desc:"",prices:{"Non-Veg":219},variants:["Non-Veg"]},
  // Crust
  {cat:"Crust",name:"Cheese Burst",desc:"",prices:{S:65,M:90,L:120},badge:"BEST SELLER"},
  {cat:"Crust",name:"Thin Crust",desc:"",prices:{S:25,M:35,L:35}},
  // Addons
  {cat:"Addons",name:"Extra Cheese",desc:"",prices:{Slice:15,S:45,M:65,L:99},variants:["Slice","S","M","L"]},
  {cat:"Addons",name:"Extra Paneer",desc:"",prices:{Slice:25,S:45,M:65,L:99},variants:["Slice","S","M","L"]},
  {cat:"Addons",name:"Extra Chicken",desc:"",prices:{Slice:25,S:45,M:65,L:99},variants:["Slice","S","M","L"]},
  {cat:"Addons",name:"Extra Topping",desc:"",prices:{Slice:25,S:25,M:35,L:44},variants:["Slice","S","M","L"]}
];

if(document.getElementById("menuGrid")) {
let activeCategory="All";
let cart=[];
const menuGrid=document.getElementById("menuGrid");
const tabs=document.getElementById("categoryTabs");
const search=document.getElementById("menuSearch");

function money(n){return "₹"+Number(n).toLocaleString("en-IN")}
function optionsFor(item){
  if(item.variants) return item.variants;
  return Object.keys(item.prices);
}
function priceText(item){
  const vals=Object.entries(item.prices);
  if(vals.length===1) return money(vals[0][1]);
  return vals.map(([k,v])=>`${k}: ${money(v)}`).join(" • ");
}
function renderTabs(){
  tabs.innerHTML=categories.map(c=>`<button class="cat-btn ${c===activeCategory?"active":""}" data-cat="${c}">${c}</button>`).join("");
  tabs.querySelectorAll(".cat-btn").forEach(b=>b.onclick=()=>{activeCategory=b.dataset.cat;renderTabs();renderMenu()});
}
function renderMenu(){
  const q=search.value.trim().toLowerCase();
  const filtered=menu.filter(x=>(activeCategory==="All"||x.cat===activeCategory)&&(!q||(x.name+" "+x.desc+" "+x.cat).toLowerCase().includes(q)));
  if(!filtered.length){menuGrid.innerHTML='<div class="empty"><h3>No dishes found</h3><p>Try another search or category.</p></div>';return}
  menuGrid.innerHTML=filtered.map((item,i)=>{
    const opts=optionsFor(item), key=menu.indexOf(item), first=opts[0], firstPrice=item.prices[first];
    return `<article class="menu-card" data-key="${key}">
      <div class="menu-card-top"><div><span class="eyebrow">${item.cat}</span><h3>${item.name}</h3></div>${item.badge?`<span class="badge ${item.badge==="BEST SELLER"?"badge-red":""}">${item.badge}</span>`:""}</div>
      ${item.desc?`<p>${item.desc}</p>`:""}
      ${opts.length>1?`<div class="variant-row">${opts.map((o,j)=>`<button class="variant ${j===0?"selected":""}" data-option="${o}">${o} <b>${money(item.prices[o])}</b></button>`).join("")}</div>`:""}
      <div class="price-line">${priceText(item)}</div>
      <div class="card-actions"><button class="add-btn">Add to order</button></div>
    </article>`
  }).join("");
  menuGrid.querySelectorAll(".menu-card").forEach(card=>{
    const item=menu[Number(card.dataset.key)];
    card.querySelectorAll(".variant").forEach(btn=>btn.onclick=()=>{card.querySelectorAll(".variant").forEach(x=>x.classList.remove("selected"));btn.classList.add("selected")});
    card.querySelector(".add-btn").onclick=()=>{
      const selected=card.querySelector(".variant.selected")?.dataset.option || Object.keys(item.prices)[0];
      addToCart(item,selected,item.prices[selected]);
    };
  });
}
function addToCart(item,variant,price){
  cart.push({name:item.name,variant,price});
  updateCart();
}
function updateCart(){
  const count=cart.length,total=cart.reduce((s,x)=>s+x.price,0);
  document.getElementById("cartCount").textContent=count;
  document.getElementById("cartTotal").textContent=money(total);
  document.getElementById("summarySubtotal").textContent=money(total);
  document.getElementById("cartDock").classList.toggle("show",count>0);
  document.getElementById("cartItems").innerHTML=count?cart.map((x,i)=>`<div class="cart-item"><div><b>${x.name}</b><small>${x.variant} • ${money(x.price)}</small></div><button class="remove-item" data-i="${i}">Remove</button></div>`).join(""):'<p style="color:#756a62">Your order is empty. Add something delicious!</p>';
  document.querySelectorAll(".remove-item").forEach(b=>b.onclick=()=>{cart.splice(Number(b.dataset.i),1);updateCart()});
}
function openModal(id){document.getElementById(id).classList.add("open");document.getElementById(id).setAttribute("aria-hidden","false")}
function closeModal(id){document.getElementById(id).classList.remove("open");document.getElementById(id).setAttribute("aria-hidden","true")}
document.querySelectorAll("[data-close]").forEach(x=>x.onclick=()=>closeModal(x.dataset.close==="qr"?"qrModal":"cartModal"));
document.getElementById("openQr").onclick=()=>openQR();
document.getElementById("heroQr").onclick=()=>openQR();
document.getElementById("footerQr").onclick=()=>openQR();
function menuUrl(){
  const path=location.href.split("#")[0].replace(/index\.html?$/i,"");
  return path+"menu.html";
}
function openQR(){
  openModal("qrModal");
  const box=document.getElementById("qrcode");box.innerHTML="";
  if(window.QRCode){new QRCode(box,{text:menuUrl(),width:190,height:190,colorDark:"#201914",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.H})}
  else box.innerHTML="<p>QR library could not load. Open menu.html directly.</p>";
}
document.getElementById("copyMenuLink").onclick=async()=>{try{await navigator.clipboard.writeText(menuUrl());document.getElementById("copyMenuLink").textContent="Copied!";setTimeout(()=>document.getElementById("copyMenuLink").textContent="Copy Menu Link",1500)}catch(e){alert(menuUrl())}};
document.getElementById("cartButton").onclick=()=>openModal("cartModal");
document.getElementById("clearCart").onclick=()=>{cart=[];updateCart()};
document.getElementById("whatsappOrder").onclick=()=>{
  if(!cart.length)return;
  const lines=cart.map((x,i)=>`${i+1}. ${x.name} (${x.variant}) - ${money(x.price)}`).join("\n");
  const total=cart.reduce((s,x)=>s+x.price,0);
  const msg=`Hi PerPiz! I'd like to order:\n${lines}\n\nSubtotal: ${money(total)}\n5% GST applicable.\nPlease confirm availability and total.`;
  window.open("https://wa.me/917383186877?text="+encodeURIComponent(msg),"_blank");
};
document.getElementById("downloadMenu").onclick=()=>{
  const text=buildPlainMenu();
  const blob=new Blob([text],{type:"text/plain;charset=utf-8"}),a=document.createElement("a");
  a.href=URL.createObjectURL(blob);a.download="PerPiz-Full-Menu.txt";a.click();URL.revokeObjectURL(a.href);
};
function buildPlainMenu(){
  let out="PERPIZ — THE PERFECT PIZZA\nALWAYS FRESH ALWAYS CRISP\n\n";
  const grouped={};menu.forEach(x=>(grouped[x.cat]??=[]).push(x));
  Object.entries(grouped).forEach(([cat,items])=>{out+=`\n=== ${cat.toUpperCase()} ===\n`;items.forEach(x=>{out+=`${x.name} — ${Object.entries(x.prices).map(([k,v])=>`${k}: ₹${v}`).join(", ")}\n${x.desc?x.desc+"\n":""}`})});
  out+="\n5% GST applicable on all items.\nOrders placed cannot be cancelled.\nMaintain peace after your order is placed.\nThe variety that is present will be found.\nTell your suggestions at the counter.\n\nAL-BUROOJ STORE: 12 PM - 12 AM | Now Delivering Too! | +91 73831 86877\nSONAL STORE: 5 PM - 3 AM | For All You Late-Night Foodies! | +91 73836 86877 / +91 73835 26877\n";
  return out;
}
search.addEventListener("input",renderMenu);
const mobileToggle=document.querySelector(".mobile-toggle");mobileToggle.onclick=()=>document.querySelector(".nav-links").classList.toggle("open");
document.querySelectorAll(".nav-links a").forEach(a=>a.onclick=()=>document.querySelector(".nav-links").classList.remove("open"));
document.querySelectorAll("#ratingStars button").forEach(btn=>btn.onclick=()=>{
  const n=Number(btn.dataset.rating);
  document.querySelectorAll("#ratingStars button").forEach((b,i)=>b.classList.toggle("active",i<n));
  document.getElementById("ratingText").textContent=`${"★".repeat(n)}${"☆".repeat(5-n)} — Thanks for rating!`;
});
renderTabs();renderMenu();updateCart();

}
