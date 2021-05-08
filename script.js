//Declarado de variables
const memeImg = document.querySelector('#img');
let imgInput= document.getElementById('image-input')
let colorPicked= document.querySelector('#colorPicked');

//Seteado de imagen: la url de la imagen ingresada se agrega a la etiqueta img

function getUrlImage(){
    let srcMeme = imgInput.value
    const memeImg = document.querySelector('#img');
    memeImg.style.backgroundImage = `url("${srcMeme}")`;
}

imgInput.addEventListener('change', getUrlImage);

//seteado de color de imagen: con un color picker se cambia el color de la imagen

const changeBackgroundImage=()=>{
    const meme2Img = document.querySelector('#img');
    meme2Img.style.backgroundColor = colorPicked.value;
}
colorPicked.addEventListener('input', changeBackgroundImage);

//----------SETEADO DEL SELECT DE  COLOR BLEND--------------

const selectBlend= document.querySelector('#select-blend');

const changeBlendMode=()=>{
    
    const meme2Img = document.querySelector('#img');
    meme2Img.style.backgroundBlendMode = selectBlend.value;
}
selectBlend.addEventListener('input', changeBlendMode);

//-------------BOTONES DE PANEL PRINCIPAL-------------------

const buttonImageAside= document.querySelector('#button-image-aside'); 
const buttonTextAside= document.querySelector('#button-text-aside');
const asideImg= document.querySelector('#aside-img');
const asideText= document.querySelector('#aside-text');

const asideCallImage=()=>{
    asideImg.classList.remove('hidden');
    asideText.classList.add('hidden');
}
buttonImageAside.addEventListener('click', asideCallImage);

const asideCallText=()=>{
    asideText.classList.remove('hidden');
    asideImg.classList.add('hidden');
}
buttonTextAside.addEventListener('click', asideCallText);

//-----------------------SLIDERS IMAGE---------------------------
const brightness= document.querySelector('#brightness-slider');
const opacity= document.querySelector('#opacity-slider');
const contrast= document.querySelector('#contrast-slider');
const blur= document.querySelector('#blur-slider');
const grayscale= document.querySelector('#grayscale-slider');
const sepia= document.querySelector('#sepia-slider');
const huerotation= document.querySelector('#hue-rotation-slider');
const saturation= document.querySelector('#saturation-slider');
const invert= document.querySelector('#invert-slider')

const applyFilter=()=>{
    memeImg.style.filter=`brightness(${brightness.value}) opacity(${opacity.value}) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%) sepia(${sepia.value}) hue-rotate(${huerotation.value}deg) saturate(${saturation.value}%) invert(${invert.value}%)` 
}

brightness.addEventListener('change', applyFilter);
opacity.addEventListener('change', applyFilter);
contrast.addEventListener('change', applyFilter);
blur.addEventListener('change', applyFilter);
grayscale.addEventListener('change', applyFilter);
sepia.addEventListener('change', applyFilter);
huerotation.addEventListener('change', applyFilter);
saturation.addEventListener('change', applyFilter);
invert.addEventListener('change', applyFilter);









