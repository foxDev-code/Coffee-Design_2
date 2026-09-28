import React from 'react';
export const plans=[
 {name:'Taster',price:19,features:['1 bag (250g) monthly','Perfect for single brewers','Free shipping','Pause anytime']},
 {name:'Connoisseur',price:34,features:['2 bags (500g) monthly','Explore micro-lots','Priority delivery','Members-only releases','Free shipping'],popular:true},
 {name:'Reserve',price:59,features:['4 bags (1kg) monthly','Best for enthusiasts','Monthly exclusives','Concierge support','Free express shipping']}
];
export function Subscriptions({onChoose}){return <section className="section subscriptions" id="subscription"><div className="section-heading" data-reveal><div><span className="eyebrow">10 — YOUR MONTHLY RITUAL</span><h2>Coffee, <em>delivered.</em></h2><p>Freshly roasted beans at your door every month. Pause, swap or cancel anytime.</p></div></div><div className="plans">{plans.map(plan=><article key={plan.name} className={`plan ${plan.popular?'popular':''}`}>{plan.popular&&<span className="plan-badge">MOST POPULAR</span>}<h3>{plan.name}</h3><p className="plan-price">${plan.price}<small>/mo</small></p><ul>{plan.features.map(feature=><li key={feature}><span aria-hidden="true">✦</span>{feature}</li>)}</ul><button className={plan.popular?'gold':'plan-choose'} onClick={()=>onChoose(plan)}>Choose {plan.name}<span aria-hidden="true">↗</span></button></article>)}</div></section>}
const steps=[
 ['Farm','Grown with care.','M5 25V12l10-8 10 8v13H5M11 25v-9h8v9M2 13l13-11 13 11'],
 ['Harvest','Picked at the peak.','M15 27V13M15 19C5 19 3 13 4 7c7 0 11 4 11 12ZM15 15C15 7 21 3 27 4c0 7-4 11-12 11Z'],
 ['Roasting','Depth in every roast.','M17 2c2 9-9 10-5 17-5-1-6-4-6-4-4 8 0 14 9 14s14-8 8-16c1 6-2 7-4 7 2-7 1-13-2-18Z'],
 ['Grinding','Fresh, every time.','M6 3h18l-3 9H9L6 3ZM11 12v8h8v-8M7 20h16v8H7ZM24 5h5v6'],
 ['Brewing','Patience in the pour.','M5 10h19l-4 16H9L5 10ZM24 12h2a4 4 0 0 1-4 8M10 2v4M16 2v4M22 2v4M5 29h20'],
 ['Serving','Made for your moment.','M4 10h19v8a9 9 0 0 1-18 0v-8ZM23 11h2a4 4 0 0 1 0 8h-3M3 28h24M10 2v4M17 2v4']
];
export function Process(){return <section className="section process" id="story"><div className="section-heading" data-reveal><div><span className="eyebrow">12 — FROM OUR HANDS TO YOURS</span><h2>The <em>process.</em></h2></div></div><div className="process-steps">{steps.map(([name,copy,path],i)=><div className="process-step" key={name} data-reveal><span className="process-number">0{i+1}</span><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" aria-hidden="true"><path d={path}/></svg><h3>{name}</h3><p>{copy}</p></div>)}</div></section>}
const quotes=[
 ['The most consistent cup I’ve had outside of Melbourne. The bean story you can actually taste.','Amara N.'],
 ['Every delivery feels like a gift. The crema on the espresso blend is unreal. Never going back to supermarket beans.','Julien R.'],
 ['Packaging, roast dates, the ritual — Blue Tokai turned my mornings into something I look forward to.','Sofia D.']
];
export function Reviews(){return <section className="section testimonials" id="reviews"><div className="section-heading" data-reveal><div><span className="eyebrow">13 — WORD ON THE STREET</span><h2>People are <em>obsessed.</em></h2></div></div><div className="quote-grid">{quotes.map(([quote,name])=><figure key={name}><span className="quote-stars" aria-label="Five stars">★★★★★</span><blockquote>“{quote}”</blockquote><figcaption><span className="quote-avatar" aria-hidden="true">{name.charAt(0)}</span>{name}</figcaption></figure>)}</div></section>}
