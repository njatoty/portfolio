window.addEventListener('scroll', () => {
    const header_top = document.getElementById('header-top');
    const header_middle = document.getElementById('header-middle');
    if (this.scrollY > 90) {
        header_top.classList.add('hidden');
        header_middle.classList.add('fixed-top');
    } else {
        header_top.classList.replace('hidden', 'showing');
        header_middle.classList.remove('fixed-top');
    }
    
    var current = "";
    var sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset + 1 >= sectionTop)
        current = section.getAttribute("id");
    });
  
    var navLi = document.querySelectorAll('a[href^="#"]');
    navLi.forEach((li) => {
      li.classList.remove("active-menu-item");
      if (li.getAttribute('href') === `#${current}`) {
        li.classList.add("active-menu-item");
      }
    });
});
