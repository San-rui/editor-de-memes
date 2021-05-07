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



const selectBlend= document.querySelector('#select-blend');

const changeBlendMode=()=>{
    
    let selectedValue = document.getElementById("select-blend").value;
    console.log(selectedValue);

    memeImg.style=`background-blend-mode:${selectedValue}`;
    console.log(memeImg.style);
    
}
selectBlend.addEventListener('input', changeBlendMode);


