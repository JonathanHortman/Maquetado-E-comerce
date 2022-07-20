
let total = 0;

function pay() {
    total = total + 1;
    document.getElementById("checkout").innerHTML = `${total}`
    Swal.fire({
        title:'Agregaste al carrito',
        icon: 'success',
        confirmButtonColor: '#B5190D',
        confirmButtonText: 'Listo'
    })
}

function changeImage(src, id){
    document.getElementById("mainImage").src= `./assets/spinner/Preloader.gif`
   
        document.getElementById('img2').style.border = id === 'img2' ? '1px solid var(--mainColor)' : 'none'
        document.getElementById('img3').style.border = id === 'img3' ? '1px solid var(--mainColor)' : 'none'
        document.getElementById('img4').style.border = id === 'img4' ? '1px solid var(--mainColor)' : 'none'
        document.getElementById('img5').style.border = id === 'img5' ? '1px solid var(--mainColor)' : 'none'
   
    setTimeout(() => {
        document.getElementById("mainImage").src= `./assets/productsImages/${src}.jpg`
    }, 1000);

}

function changeText(id){
    document.getElementById('desc').style.borderBottom = id === 'desc' ? '4px solid var(--mainColor)' : '#2D2D2D' 
    document.getElementById('desc').style.color = id === 'desc' ? 'var(--mainColor)' : 'black'
    document.getElementById('data').style.borderBottom = id === 'data' ? '4px solid var(--mainColor)' : '#2D2D2D'
    document.getElementById('data').style.color = id === 'data' ? 'var(--mainColor)' : 'black'
   
   
    id === 'desc'?
    document.getElementById('loremText').innerHTML = descriptionText:
    document.getElementById('loremText').innerHTML = dataText;
}

