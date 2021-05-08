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




