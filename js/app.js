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
    
    let about_position = document.getElementById('about');
    console.log(about_position)
    if (about_position.scrollHeight > parseInt(this.scrollY)) {
    
    }
});
    
    // Define selector for selecting
    // anchor links with the hash
    let anchorSelector = 'a[href^="#"]';
    
    // Collect all such anchor links
    let anchorList = document.querySelectorAll(anchorSelector);
    
    // Iterate through each of the links
    anchorList.forEach(link => {
        link.onclick = function (e) {
        // Prevent scrolling if the
        // hash value is blank
        e.preventDefault();
    
        // Get the destination to scroll to
        // using the hash property
        let destination = document.querySelector(this.hash);
    
        // Scroll to the destination using
        // scrollIntoView method
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    }
});
  