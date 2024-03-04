let images = [];
function carregarImage(){
    const galeria = document .getElementById("galeria")
    galeria.innerHTML
}

images.forEach(imgURL=>{
    const img = document.createElement("img")
    img.src = imgURL
    galeria.appenchild(img)
})


document.getElementById('arquivos').addEventListener('change', function(event){
    console.log("alterei o botão") 
})

    document.getElementById('arquivos').addEventListener('change', function(event){
        const arquivos = event.target.files[0];
        const ler = new FileReader();

    ler.onload = function (e){
        const imgURL = e.target.result;
        images.push(imgURL)
    }
});