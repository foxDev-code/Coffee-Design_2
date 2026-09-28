export const products=[
 {id:'beans',name:'Single-Origin Beans',category:'Whole Beans',price:24,image:'beans',badge:'Bestseller',rating:'4.9',notes:'Chocolate · Hazelnut · Sweet citrus',detail:'A beautifully balanced whole-bean coffee for your everyday ritual. 250 g.'},
 {id:'espresso',name:'Blue Tokai Espresso',category:'Ground Coffee',price:21,image:'espresso',badge:'Signature',rating:'4.8',notes:'Dark chocolate · Caramel · Full body',detail:'Finely ground for a rich, expressive espresso. 250 g.'},
 {id:'velvet',name:'Velvet Latte Blend',category:'Ground Coffee',price:22,image:'cafe',rating:'4.7',notes:'Milk chocolate · Toffee · Smooth',detail:'A mellow blend that comes alive with your favourite milk. 250 g.'},
 {id:'midnight',name:'Midnight Cold Brew',category:'Ground Coffee',price:19,image:'bloom',badge:'New',rating:'4.8',notes:'Cocoa · Brown sugar · Low acidity',detail:'A coarse grind made for slow, overnight cold brewing. 250 g.'},
 {id:'capsules',name:'Gold Capsules ×30',category:'Capsules',price:29,image:'cafe',rating:'4.8',notes:'Balanced · Aromatic · Golden crema',detail:'Thirty coffee capsules for an effortless daily ritual. Check your machine compatibility before purchasing.'},
 {id:'instant',name:'Instant Reserve',category:'Instant Coffee',price:16,image:'espresso',rating:'4.7',notes:'Roasted nuts · Caramel · Rounded',detail:'Your coffee moment, wherever the day takes you. 100 g.'},
 {id:'set',name:'Ceramic Pour-Over Set',category:'Accessories',price:48,image:'cafe',badge:'Essential',rating:'4.8',notes:'For a slower morning',detail:'A considered collection for your daily coffee ritual. Product imagery is illustrative.'},
 {id:'reserve',name:'Dark Roast Reserve',category:'Whole Beans',price:26,image:'beans',rating:'4.9',notes:'Dark cocoa · Toasted nuts · Bold',detail:'A deep, full-bodied whole-bean roast. 250 g.'},
 {id:'subscription',name:'Roaster’s Subscription',category:'Subscription',price:23,image:'beans',badge:'Monthly ritual',rating:'4.9',notes:'Fresh discoveries · Every month',detail:'Explore a different roast each month. This preview demonstrates the selection only; no subscription is charged.'}
];
export const categories=['All','Whole Beans','Ground Coffee','Capsules','Instant Coffee','Accessories','Subscription'];
export const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2}).format(n);
export function cleanCart(value){return Object.fromEntries(products.filter(p=>Number.isInteger(value?.[p.id])&&value[p.id]>0).map(p=>[p.id,Math.min(99,value[p.id])]))}
export function changeCart(cart,id,delta){if(!products.some(p=>p.id===id))return cart;const next={...cart},quantity=Math.max(0,Math.min(99,(next[id]||0)+delta));if(quantity)next[id]=quantity;else delete next[id];return next}
export const total=cart=>products.reduce((sum,p)=>sum+p.price*(cart[p.id]||0),0);
