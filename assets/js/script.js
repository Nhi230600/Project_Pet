

addEventListener("load", (event) => {
  const tags = document.getElementsByClassName('service-sub');
  for (let index = 0; index < tags.length; index++) {
    const element = tags[index].children;
    for (let i = 0; i < element.length; i++) {
      const child = element[index];
      child.addEventListener('click', () => {
        console.log(child.attributes, child.getAttribute('data-url'));
        // get real element with data-url
        const el = document.getElementById(child.getAttribute('data-url'));
        console.log('el: ', el)
        // scroll with animation
        el && el.scrollIntoView({
          behavior: 'smooth', // smooth scroll
          block: 'start' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
        })
        
      })
    }
  }
});