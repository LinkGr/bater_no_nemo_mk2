function changeImage() {
   
    if (aleatorio == 0) {
        document.getElementById('nemo').src= './imagens/nemo_mal1.jpg'
        var gemido = new Audio('./gemido/gemido_nemo_final1.mp3');
        var hit = new Audio('./hit/1.mp3');
    }

    if (aleatorio == 1) {
        document.getElementById('nemo').src= './imagens/nemo_mal2.jpg'
        var gemido = new Audio('./gemido/gemido_nemo_final2.mp3');
        var hit = new Audio('./hit/2.mp3');
    }

    if (aleatorio == 2) {
        document.getElementById('nemo').src= './imagens/nemo_mal3.jpg'
        var gemido = new Audio('./gemido/gemido_nemo_final3.mp3');
        var hit = new Audio('./hit/3.mp3');
    }

    if (aleatorio == 3) {
        document.getElementById('nemo').src='./imagens/nemo_mal4.jpg'
        var gemido = new Audio('./gemido/gemido_nemo_final4.mp3');
        var hit = new Audio('./hit/4.mp3');
        aleatorio-=4
    }

    hit.play();
    setTimeout(function() {
        gemido.play();
    }, 300);

    if (aleatorio != 3) {aleatorio++;}

    setTimeout(function() {
        document.getElementById('nemo').src="./imagens/nemo_bem.jpg";
    }, 1000);
}