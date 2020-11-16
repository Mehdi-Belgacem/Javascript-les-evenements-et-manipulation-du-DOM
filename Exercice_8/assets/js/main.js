function clone() {
    let form = document.getElementById('form');
    let clone = form.cloneNode(true);
    document.getElementById('form').appendChild(clone);
}
