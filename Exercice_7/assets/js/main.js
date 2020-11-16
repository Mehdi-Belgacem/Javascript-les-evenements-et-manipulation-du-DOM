window.onscroll = function () {
    let y = window.scrollY;
        let p = document.getElementById('textScroll');
        p.style.fontSize = (1 + (y/4000)) + 'rem' ;
}
