//------------DECLARADO DE VARIABLES------------------
const memeImg = document.querySelector('#img');
let imgInput= document.getElementById('image-input')
let colorPicked= document.querySelector('#colorPicked');

//--------------------ASIDE IMAGEN------------------
//----------SETEADO DE IMAGEN: la url de la imagen ingresada se agrega a la etiqueta img---------
function getUrlImage(){
    let srcMeme = imgInput.value;
    const memeImg = document.querySelector('#img');
    memeImg.style.backgroundImage = `url("${srcMeme}")`;
}

imgInput.addEventListener('change', getUrlImage);

//----------SETEADO DE COLOR DE IMAGEN: con un color picker se cambia el color de la imagen---------
const changeBackgroundImage=()=>{
    const meme2Img = document.querySelector('#img');
    meme2Img.style.backgroundColor = colorPicked.value;

    const hexadecimal= document.querySelector('#hexadecimal');
    hexadecimal.innerHTML=colorPicked.value.toUpperCase();

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

//----------BOTON REESTABLECER FILTROS--------------
const buttonReset= document.querySelector('#button-reset');

const cleanFilters=()=>{
    memeImg.style.filter=`none`; 
}
buttonReset.addEventListener('click', cleanFilters);

//--------------------ASIDE TEXTO----------------------------
//----------CHECKBOX TEXTO SUPERIOR E INFERIOR--------------
const checkTextTop= document.querySelector('#check-text-top');
const pTextTop= document.querySelector('#p-text-top');
const checkTextBottom= document.querySelector('#check-text-bottom');
const pTextBottom= document.querySelector('#p-text-bottom');

function hideTextTop() {
    if (checkTextTop.checked) {
        pTextTop.style.display='none';
        memeImg.style.backgroundSize="150%"
    }
    else {
        pTextTop.style.display='flex';
        memeImg.style.backgroundSize="100%"
    }
}
checkTextTop.addEventListener('click', hideTextTop);

function hideTextBottom() {
    if (checkTextBottom.checked) {
        pTextBottom.style.display='none';
        memeImg.style.backgroundSize="150%"
        
    }
    else {
        pTextBottom.style.display='flex';     
        memeImg.style.backgroundSize="100%"   
    }
}
checkTextBottom.addEventListener('click', hideTextBottom);

//-----------------FUNCIONAMIENTO DE AGREGADO DE TEXTOS----------

const inputTextTop= document.querySelector('#input-text-top');
const inputTextBottom= document.querySelector('#input-text-bottom');

const fillTextTop=()=>{
    const inputTextTopValue= inputTextTop.value;
    pTextTop.innerHTML=inputTextTopValue;
}
inputTextTop.addEventListener('keyup', fillTextTop);

const fillTextBottom=()=>{
    const inputTextBottomValue= inputTextBottom.value;
    pTextBottom.innerHTML=inputTextBottomValue;
}
inputTextBottom.addEventListener('keyup', fillTextBottom);

//----------------TAMAÑO DE FUENTE-----------------------
const inputFontSize= document.querySelector('#input-font-size');

const changeFontSize=()=>{
    const inputFontSizeValue=inputFontSize.value;
    pTextTop.style.fontSize=`${(inputFontSizeValue)}px`;
    pTextBottom.style.fontSize=`${(inputFontSizeValue)}px`;
}
inputFontSize.addEventListener('click', changeFontSize);

//--------------------ESPACIADO-----------------------
const inputSpacing= document.querySelector('#input-spacing');

const changeSpacing=()=>{
    const inputSpacingValue= inputSpacing.value;
    pTextTop.style.padding=`${(inputSpacingValue)}px`;
    pTextBottom.style.padding=`${(inputSpacingValue)}px`;
}
inputSpacing.addEventListener('click', changeSpacing);


//------------------CHECKBOX FONDO TRANSPARENTE --------------------------------
const checkboxTransparentBg= document.querySelector('#checkbox_transparent-bg')

function bgTextTransparent() {
    if (checkboxTransparentBg.checked) {
        pTextTop.style= "position: absolute; top: 0; background-color: transparent";
        pTextBottom.style= "position: absolute; bottom: 0; background-color: transparent";
    }
    else {
        pTextTop.style= "position: static; background-color: white";
        pTextBottom.style= "position: static; background-color: white";
    }
}
checkboxTransparentBg.addEventListener('click', bgTextTransparent);

//--------------------- INTERLENEADO --------------------
const selectLineHeight = document.getElementById("select_line-height");

const applyLineHeight = (event) => {
    event.preventDefault();
    const lineHeightValue = event.target.value;
    switch (lineHeightValue) {
        case "opt08":
            pTextTop.style.lineHeight = "0.8"
            pTextBottom.style.lineHeight= "0.8"
        break;
        case "opt1":
            pTextTop.style.lineHeight = "1"
            pTextBottom.style.lineHeight= "1"
        break;
        case "opt12":
            pTextTop.style.lineHeight = "1.2"
            pTextBottom.style.lineHeight= "1.2"
        break;
        case "opt15":
            pTextTop.style.lineHeight = "1.5"
            pTextBottom.style.lineHeight= "1.5"
        break;
        case "opt2":
            pTextTop.style.lineHeight = "2"
            pTextBottom.style.lineHeight= "2"
        break;
        case "opt25":
        pTextTop.style.lineHeight = "2.5"
        pTextBottom.style.lineHeight= "2.5"
        break;    
    }
};

selectLineHeight.addEventListener('change',applyLineHeight );

//------------------COLOR TEXTO MEME----------------
let colorPickedText= document.querySelector('#color-picked-text');

const changeColorText=()=>{
    
    pTextTop.style.color = colorPickedText.value;
    pTextBottom.style.color= colorPickedText.value;

    const hexadecimalColorText= document.querySelector('#hexadecimal-color-text');
    hexadecimalColorText.innerHTML=colorPickedText.value.toUpperCase();
}
colorPickedText.addEventListener('input', changeColorText);

//------------------BACKGROUND-COLOR TEXTO MEME----------------
let backgroundColorPickedText= document.querySelector('#background-color-picked-text');

const changeBackgroundColorText=()=>{
    pTextTop.style.backgroundColor = backgroundColorPickedText.value;
    pTextBottom.style.backgroundColor= backgroundColorPickedText.value;

    const hexadecimalBackgroundColorText= document.querySelector('#hexadecimal-background-color-text');
    hexadecimalBackgroundColorText.innerHTML=backgroundColorPickedText.value.toUpperCase();
}
backgroundColorPickedText.addEventListener('input', changeBackgroundColorText);

//------------------CAMBIO DE FUENTE----------------
const selectfont=document.querySelector('#select-font');
const changeFont=()=>{
    const selectFontValue=selectfont.value;
    pTextTop.style.fontFamily=`${(selectFontValue)}`;
    pTextBottom.style.fontFamily=`${(selectFontValue)}`;

}
selectfont.addEventListener('input', changeFont);

//------------------ALINEACION----------------
const textAlignLeft=document.querySelector('#text-align-left');
const textAlignCenter=document.querySelector('#text-align-center');
const textAlignRight=document.querySelector('#text-align-right');

const changeAlignTextLeft=()=>{
    pTextTop.style.justifyContent =`flex-start`;
    pTextBottom.style.justifyContent=`flex-start`;

}
textAlignLeft.addEventListener('click', changeAlignTextLeft);

const changeAlignTextCenter=()=>{
    pTextTop.style.justifyContent =`center`;
    pTextBottom.style.justifyContent=`center`;

}
textAlignCenter.addEventListener('click', changeAlignTextCenter);

const changeAlignTextRight=()=>{
    pTextTop.style.justifyContent =`flex-end`;
    pTextBottom.style.justifyContent=`flex-end`;

}
textAlignRight.addEventListener('click', changeAlignTextRight);

//------------------BOTONES DE CONTORNO----------------
const buttonshadowTextNone= document.querySelector('#shadow-text-none');
const buttonshadowTextWhite= document.querySelector('#shadow-text-white');
const buttonshadowTextBlack= document.querySelector('#shadow-text-black');

const noneShadowText=()=>{
    pTextTop.style.textShadow= "none";
    pTextBottom.style.textShadow= "none";
}
buttonshadowTextNone.addEventListener('click', noneShadowText);

const whiteShadowText=()=>{
    pTextTop.style.textShadow= "2px 2px 1px #FFFFFF ";
    pTextBottom.style.textShadow= "2px 2px 1px #FFFFFF ";
}
buttonshadowTextWhite.addEventListener('click', whiteShadowText);

const blackShadowText=()=>{
    pTextTop.style.textShadow= "2px 2px 1px #000000";
    pTextBottom.style.textShadow= "2px 2px 1px #000000";
}
buttonshadowTextBlack.addEventListener('click', blackShadowText);

//---------------------MODO OSCURO---------------------
const buttonMode= document.querySelector('#button-mode');
const modeText= document.querySelector('#mode-text');

const changeMode=()=>{
    if(document.body.className=="dark-mode"){
        document.body.className="light-mode";
        modeText.innerText = 'Modo claro';
    }
    else{
        document.body.className="dark-mode";
        modeText.innerText = 'Modo oscuro';
    }
};

buttonMode.addEventListener('click', changeMode);

//-----------------RESPONSIVE BREAKPOINT 1300PX------------

//--------------------BOTON CLOSE------------------
const buttonClose= document.querySelector('#button-close');
const aside= document.querySelector('#aside');

const showAside=()=>{
    aside.style=`display:inline`
}
buttonImageAside.addEventListener('click', showAside);
buttonTextAside.addEventListener('click', showAside);

const closeAside=()=>{
    aside.style=`display:none`;
};

buttonClose.addEventListener('click', closeAside)
