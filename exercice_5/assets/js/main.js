let btnPink = document.getElementById('btnPink');
let paragraphe = document.getElementById('text');
btnPink.addEventListener('click', colorToPink);

function colorToPink() {
    paragraphe.style.color = 'pink';
}

let btnBlue = document.getElementById('btnBlue');
btnBlue.addEventListener('click', function () { paragraphe.style.color = 'blue'; });


let btnPurple = document.getElementById('btnPurple');
btnPurple.addEventListener('click', function () { paragraphe.style.color = 'purple'; });


let btnBold = document.getElementById('btnBold');
btnBold.addEventListener('click', function () { paragraphe.style.fontWeight = 'bold'; });

let btnItalic = document.getElementById('btnItalic');
btnItalic.addEventListener('click', function() { paragraphe.style.fontStyle = 'italic'})
