window.addEventListener('scroll', () => {
  const header_top = document.getElementById('header-top');
  const header_middle = document.getElementById('header-middle');
  if (this.scrollY > 90) {
      header_top.classList.add('hidden');
      header_middle.classList.add('fixed-top');
      document.querySelector('.body').style.marginTop = '90px';
  } else {
      header_top.classList.replace('hidden', 'showing');
      header_middle.classList.remove('fixed-top');
      document.querySelector('.body').style.marginTop = '0px';
  }
  
  var current = "";
  var sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset + 1 >= sectionTop)
      current = section.getAttribute("id");
    if (current === 'about')
      aboutAnimation();
    else if (current === 'skill')
      skillAnimation();
    else if (current === 'project')
      projectAnimation();
      else if (current === 'contact')
        contactAnimation();
  });

  var navLi = document.querySelectorAll('a[href^="#"]');
  navLi.forEach((li) => {
    li.classList.remove("active-menu-item");
    if (li.getAttribute('href') === `#${current}`) {
      li.classList.add("active-menu-item");
    }
  });
});

const aboutAnimation = () => {
  let title = document.querySelector('.profile-section > h4.section-title');
  title.style.animationName = 'come-from-left';
  title.style.animationDelay = '0s';
  // image
  let img = document.querySelector('.my-pic > img');
  img.style.animationName = 'turn-verticaly';
  // info
  let info = document.querySelector('.my-info-content');
  info.style.animationName = 'bottom-to-top';
}

const skillAnimation = () => {
  let title = document.querySelector('.skill-section > h4.section-title');
  title.style.animationName = 'come-from-right';
  title.style.animationDelay = '0s';
  // skill title
  let skill_title = document.querySelector('.skill-title');
  skill_title.style.animationName = 'fadeIn';
  // skill pl logo
  let img_item = document.querySelectorAll('.prog-lang-item');
  let delay = 0.5;
  for (let item of img_item) {
    item.style.animationDelay = `${delay}s`;
    item.style.animationName = 'fadeIn';
    delay += 0.2;
  }
}

const projectAnimation = () => {
  let title = document.querySelector('.project-section > h4.section-title');
  title.style.animationName = 'come-from-left';
  title.style.animationDelay = '0s';
  // project item
  let project_item = document.querySelectorAll('.project-item');
  for (let item of project_item) {
    item.style.animationName = 'fadeIn';
  }
  // let description
  let desc = document.querySelectorAll('.project-desc');
  for (let item of desc) {
    item.style.animationName = 'go-to-top';
  }
  console.log(desc.length)
  // img
  let img_item = document.querySelectorAll('.project-view > img');
  for (let item of img_item) {
    item.style.animationName = 'grow-from-center';
  }
  // link
  let links = document.querySelectorAll('.project-link');
  for (let item of links) {
    item.style.animationName = 'go-to-bottom';
  }
}

const contactAnimation = () => {
  let title = document.querySelector('.contact-section > h4.section-title');
  title.style.animationName = 'come-from-right';
  title.style.animationDelay = '0s';
  let form_title = document.querySelector('.my-form > .form-title');
  form_title.style.animationName = 'fadeIn';
  // project item
  let inputs = document.querySelectorAll('.form-group');
  inputs.forEach((item, idx) => {
    item.style.animationName = idx % 2 === 0 ? 'come-from-left' : 'come-from-right';
  });
}
