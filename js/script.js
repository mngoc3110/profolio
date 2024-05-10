//typing animation
var typed = new Typed(".typing", {
    strings:["","Student","Teacher","Content Creator", "Marketinger", "Tiktoker", "Youtuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
let items = document.querySelectorAll('.item');
document.addEventListener('scroll', (event) => {
    items.forEach(item => {
        if(item.offsetTop - window.scrollY < 350) {
            item.classList.add('active');
        }
    })
})