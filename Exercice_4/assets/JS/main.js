let image = document.getElementById('zoom');
function zoomImage() {
    this.height = 300;
    this.width = 300;
}
function noZoom() {
    this.height = 226;
    this.width = 223;
}
image.addEventListener('mouseover', zoomImage);
image.addEventListener('mouseout', noZoom);

image.addEventListener('click', function () { image.setAttribute('src', 'assets/img/image2.jpg') });


// image.src --> pour modifier directement le src ! -- Autre solution --


//image.onclick (onclick raccourcis de AddEventListener)
