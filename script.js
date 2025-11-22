document.addEventListener("DOMContentLoaded", function () {

const services = [
  {
    id: 'service-plumbing',
    title: 'Plumbing Repairs & Installation',
    desc: 'Fast repairs, leaks, bathroom installs and drain clearing by certified plumbers.',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="#1E8449"/>
            <circle cx="100" cy="100" r="60" fill="#3498DB"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="18" fill="#fff">Plumbing</text>
          </svg>`,
    url: 'service-plumbing.html'
  },
  {
    id: 'service-heating',
    title: 'Heating & Boiler Services',
    desc: 'Boiler repairs, servicing and system optimisation to keep you warm and efficient.',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="#E67E22"/>
            <polygon points="100,20 160,180 40,180" fill="#F1C40F"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="#fff">Heating</text>
          </svg>`,
    url: 'service-heating.html'
  },
  {
    id: 'service-gas',
    title: 'Gas Safety & Installations',
    desc: 'Certified gas engineers for safe installations, inspections and repairs.',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="#3498DB"/>
            <circle cx="100" cy="100" r="70" fill="#1ABC9C"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="#fff">Gas</text>
          </svg>`,
    url: 'service-gas.html'
  },
  {
    id: 'service-maintenance',
    title: 'Preventative Maintenance',
    desc: 'Routine maintenance plans to preserve and extend the lifetime of home systems.',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="#9B59B6"/>
            <polygon points="100,20 180,180 20,180" fill="#8E44AD"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="14" fill="#fff">Maintenance</text>
          </svg>`,
    url: 'service-maintenance.html'
  }
];

// Inject slider slides
const slider = document.getElementById('slider');
let currentSlide = 0;

services.forEach((s, idx) => {
  const slide = document.createElement('div');
  slide.className = 'slide';
  slide.style.opacity = idx === 0 ? '1' : '0';
  slide.innerHTML = `
    <div class="svg-bg">${s.svg}</div>
    <div class="slide-copy">
      <h2>${s.title}</h2>
      <p>${s.desc}</p>
      <a class="btn" href="${s.url}">View Details</a>
    </div>
  `;
  slider.appendChild(slide);
});

const slides = Array.from(document.querySelectorAll('.slide'));

document.querySelector('.slide-next').addEventListener('click', () => showSlide(currentSlide+1));
document.querySelector('.slide-prev').addEventListener('click', () => showSlide(currentSlide-1));

function showSlide(n){
  currentSlide = (n + slides.length) % slides.length;
  slides.forEach((s, i) => {
    s.style.opacity = i === currentSlide ? '1' : '0';
    s.style.transform = i === currentSlide ? 'translateY(0)' : 'translateY(8px)';
  })
}

// autoplay
setInterval(()=> showSlide(currentSlide+1), 6000);

// Inject services preview
const servicesPreview = document.getElementById('services-preview');
services.forEach((s, idx) => {
  const block = document.createElement('section');
  block.className = 'service-block';
  block.innerHTML = `
    <div class="svg-preview">${s.svg}</div>
    <div class="copy">
      <h3>${s.title}</h3>
      <p class="lead dropcap">${s.desc} Learn more about how we deliver reliable solutions for every home.</p>
      <p><a class="btn" href="${s.url}">View Details</a></p>
    </div>
  `;
  servicesPreview.appendChild(block);
});

// News dynamic section
const sampleNews = [
  {title:'How to reduce winter heating bills',src:'Blog',url:'#'},
  {title:'Top 5 signs your boiler needs service',src:'Blog',url:'#'},
  {title:'Prevent small leaks from becoming expensive',src:'News',url:'#'},
  {title:'Smart thermostats: Are they worth it?',src:'Blog',url:'#'},
  {title:'When to call an emergency plumber',src:'News',url:'#'},
  {title:'Gas safety: What homeowners should know',src:'Blog',url:'#'}
];

function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a}

const newsList = document.getElementById('news-list');
const chosen = shuffle(sampleNews).slice(0,4);
chosen.forEach(n => {
  const item = document.createElement('article');
  item.className = 'news-item';
  item.innerHTML = `
    <h4>${n.title}</h4>
    <p class="muted">${n.src} • ${new Date().toLocaleDateString()}</p>
    <p>Brief excerpt: quick tip or summary appears here. <a href="${n.url}">Read</a></p>
  `;
  newsList.appendChild(item);
});

// mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', ()=>{
  const nav = document.querySelector('.main-nav');
  nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
  nav.style.flexDirection = 'row';
});

// year
document.getElementById('year').textContent = new Date().getFullYear();

});
