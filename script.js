//Seteado de imagen

// let img= document.querySelector('img').src;



// const getUrlImage=()=>{
//     let image=document.querySelector('#image-input').value;
//     img.appendChild(image)
//     console.log(image)
// }
function getUrlImage()
{
    let image= document.getElementById('image-input').value;
        img = document.querySelector('img');
        imageUrl= document.createElement(image);

        img.appendChild(imageUrl);

}
// image.addEventListener('change', getUrlImage)

