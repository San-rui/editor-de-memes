//Declarado de variables
const memeImg = document.querySelector('img');
let imgInput= document.getElementById('image-input')
let colorPicked= document.querySelector('#colorPicked');
//Seteado de imagen: la url de la imagen ingresada se agrega a la etiqueta img


function getUrlImage()
{ 
    let srcMeme = imgInput.value   
    console.log(srcMeme)
    const memeImg = document.querySelector('img');
    console.log(memeImg)
    memeImg.style.backgroundImage = `url("${srcMeme}")`;
}

imgInput.addEventListener('keyup', getUrlImage);

//seteado de color de imagen: con un color picker se cambia el color de la imagen

const changeBackgroundImage=()=>{
    memeImg.style=`background-color:${colorPicked.value}`
}
colorPicked.addEventListener('input', changeBackgroundImage);

const selectBlend= document.querySelector('#select-blend');
const optionsBlend= document.getElementsByClassName('option-blend');


const changeBlendMode=(event)=>{
    const button=event.target;
    const optionBlend=button.getAttribute('data-option-blend');
    console.log(optionBlend);

    for(let i=0; i<optionsBlend.length; i++){
        if(optionsBlend[i].getAttribute('data-option-blend')==ninguno) {
            memeImg.style=`background-color:white`
            }
    }

}
selectBlend.addEventListener('input', changeBlendMode);


