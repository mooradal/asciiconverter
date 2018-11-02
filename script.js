var btn = document.getElementById('btn');
var upload = document.getElementById('upload');
var ctx = document.getElementById('canvas').getContext('2d');
var img = new Image();

btn.addEventListener('click', () => {
    upload.click();
});

upload.addEventListener('change', () => {
    console.log(upload.value)
    img.src = upload.value;
    main();
});

function main() {
    console.log(img.src)
}