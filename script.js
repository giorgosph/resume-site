/* ----------------------------- Home -----------------------------*/

const path = window.location.pathname;
console.log(path);
(path == "/resume-site/index.html" || path == "/resume-site/") ? homePage() : path == "/resume-site/portfolio.html" ? portfolio() : 0;

function homePage(){
  const navItem = document.querySelectorAll(".item");
  const navBtn = document.querySelector(".nav_btn"), nav = document.querySelector(".navigation");
  const navExtent = document.createElement("span"), navHead = document.createElement("h4");
  let node;
  
  navExtent.classList.add("nav_extent");
  
  navBtn.addEventListener("click", () => {
    if(nav.classList.contains("navigation_hide")){
      nav.classList.remove("navigation_hide");
      navBtn.innerHTML = "X";
    }else{
      nav.classList.add("navigation_hide");
      navBtn.innerHTML = "III";
    }
  })
  
  navItem.forEach(n => {
    n.addEventListener("mouseover", () => {
      node = document.createTextNode(n.title);
      navHead.appendChild(node);
      navExtent.appendChild(navHead);
      n.appendChild(navExtent);
    })   
    n.addEventListener("mouseout", () => {
      node.remove();
      navHead.remove();
      navExtent.remove();
    })
  })
}

/* ----------------------------- Work Experience -----------------------------*/

let status = 0;
let amdocs = document.getElementById('amdocs_desc'),
    covid = document.getElementById('covid_desc'),
    event = document.getElementById('event_desc'), 
    mil = document.getElementById('mil_desc');
let title = document.querySelectorAll(".job_titles");
let job_desc = document.querySelector(".job_description_container");
let screen;

if(window.screen.availWidth < 720) {
  screen = true;
  if(document.contains(job_desc)) job_desc.remove();
}

function open_desc(var_name) {
  switch((status == 0 ? var_name : (status == 1 && var_name == 'amdocs_desc') || 
  (status == 2 && var_name == 'covid_desc') || (status == 3 && var_name == 'event_desc') ||
  (status == 4 && var_name == 'mil_desc') ? 0 : var_name)){
    case 'amdocs_desc':
        if(screen){
          if(document.contains(job_desc)) job_desc.remove();
          title[0].appendChild(job_desc);
        }
        amdocs.style.visibility = "visible";
        covid.style.visibility = "hidden";
        event.style.visibility = "hidden";
        mil.style.visibility = "hidden";
        status = 1;
      break;
    case 'covid_desc':
        if(screen){
          if(document.contains(job_desc)) job_desc.remove();
          title[1].appendChild(job_desc);
        }
        amdocs.style.visibility = "hidden";
        covid.style.visibility = "visible";
        event.style.visibility = "hidden";
        mil.style.visibility = "hidden";
        status = 2;
      break;
    case 'event_desc':
        if(screen){
          if(document.contains(job_desc)) job_desc.remove();
          title[2].appendChild(job_desc);
        }
        amdocs.style.visibility = "hidden";
        covid.style.visibility = "hidden";
        event.style.visibility = "visible";
        mil.style.visibility = "hidden";
        status = 3;
      break;
    case 'mil_desc':
        if(screen){
          if(document.contains(job_desc)) job_desc.remove();
          title[3].appendChild(job_desc);
        }
        amdocs.style.visibility = "hidden";
        covid.style.visibility = "hidden";
        event.style.visibility = "hidden";
        mil.style.visibility = "visible";
        status = 4;
      break;
    default:
        amdocs.style.visibility = "hidden";
        covid.style.visibility = "hidden";
        event.style.visibility = "hidden";
        mil.style.visibility = "hidden";
        if(screen) job_desc.remove();
        status = 0;
      break;
  }
}


/* ----------------------------- Education -----------------------------*/

function openCert() {
  document.getElementById('certificates_container_id').style.visibility = "visible";
}
function closeCert() {
  document.getElementById('certificates_container_id').style.visibility = "hidden";
}

function fullScreen(id) {
  let img = document.getElementById(id);
  document.webkitFullscreenElement != null ? document.exitFullscreen() : img.webkitRequestFullscreen();   
}

/* ----------------------------- Portfolio -----------------------------*/

function portfolio() {
  let projects = document.querySelectorAll(".projects");

  projects.forEach(p => {
    let clip = p.querySelector(".videos");
    p.addEventListener("mouseover", () => {
      clip.play();
    })
    
    p.addEventListener("mouseout", () => {
      clip.pause();
    })
  });
}
