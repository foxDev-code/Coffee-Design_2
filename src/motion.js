import {gsap} from 'gsap';import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {chapters,backgrounds,journeyEnd} from './journey.js';
gsap.registerPlugin(ScrollTrigger);
export function mountMotion(root,onChapter){
 const media=gsap.matchMedia();let disposed=false;
 media.add('(prefers-reduced-motion: no-preference)',()=>{
  const scenes=[...root.querySelectorAll('.journey-scene')];
  const images=[...root.querySelectorAll('.journey-photo')];let active=-1;
  gsap.set(scenes.slice(1),{autoAlpha:0});gsap.set(images,{autoAlpha:0});
  const timeline=gsap.timeline({onUpdate(){const time=this.time();const index=chapters.reduce((result,c,i)=>time>=c.at+.2?i:result,0);if(index!==active){active=index;onChapter(index)}},scrollTrigger:{trigger:root.querySelector('.journey'),start:'top top',end:'bottom bottom',scrub:.3}});
  // Independent tracks preserve the headline while its photograph changes.
  chapters.forEach((chapter,i)=>{if(!i)return;timeline.to(scenes[i-1],{autoAlpha:0,duration:.38,ease:'none'},chapter.at);timeline.fromTo(scenes[i],{autoAlpha:0,y:8},{autoAlpha:1,y:0,duration:.48,ease:'power1.out'},chapter.at+.08)});
  backgrounds.forEach((background,i)=>{timeline.to(images[i],{autoAlpha:1,duration:.65,ease:'none'},background.at);if(i)timeline.to(images[i-1],{autoAlpha:0,duration:.65,ease:'none'},background.at+.1);timeline.fromTo(images[i].querySelector('img'),{scale:1.015},{scale:1.075,duration:background.end-background.at,ease:'none'},background.at)});
  timeline.to(root.querySelector('.intro-atmosphere'),{autoAlpha:0,duration:.65,ease:'none'},backgrounds[0].at);
  timeline.to({}, {duration:.1},journeyEnd-.1);
  gsap.utils.toArray('[data-reveal]',root).forEach(el=>gsap.fromTo(el,{opacity:0,y:18},{opacity:1,y:0,duration:.6,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 96%',once:true}}));
  return ()=>onChapter(0);
 },root);
 const refresh=()=>{if(!disposed)ScrollTrigger.refresh()};document.fonts.ready.then(refresh);window.addEventListener('load',refresh,{once:true});
 return ()=>{disposed=true;media.revert();window.removeEventListener('load',refresh)};
}
