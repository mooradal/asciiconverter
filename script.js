var btn = document.getElementById('btn');
var upload = document.getElementById('upload');
var ctx = document.getElementById('canvas').getContext('2d');
var img = new Image();

btn.addEventListener('click', () => {
    upload.click();
});

upload.addEventListener('change', () => {
    img.src = upload.value;
    main();
});

function main() {
    ctx.drawImage(img,0,0,100,100);
}