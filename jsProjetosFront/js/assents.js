


function dadosDoHeroi(){
    let hero = document.getElementById("nickName").value;
    let xp = parseInt(document.getElementById("exp").value);
   
    switch (true) {
        case (xp < 1000):
            document.getElementById("resultado").innerHTML = "Herói de nome " + hero + " está no nível Bronze com " + xp + " pontos de experiência!";
            break;
        case (xp >= 1000 && xp <= 2000):
            document.getElementById("resultado").innerHTML = "Herói de nome " + hero + " está no nível Prata com " + xp + " pontos de experiência!";
            break;
        case (xp > 2000 && xp <= 5000):
            document.getElementById("resultado").innerHTML = "Herói de nome " + hero + " está no nível Ouro com " + xp + " pontos de experiência!";
            break;
        case (xp > 5000 && xp <= 7000):
            document.getElementById("resultado").innerHTML = "Herói de nome " + hero + " está no nível Platina com " + xp + " pontos de experiência!";
            break;
        case (xp > 7000 && xp <= 8000):
            document.getElementById("resultado").innerHTML = "Herói de nome " + hero + " está no nível Ascendente com " + xp + " pontos de experiência!";
            break;
        case (xp > 8000 && xp <= 9000):
            document.getElementById("resultado").innerHTML = "Herói de nome " + hero + " está no nível Imortal com " + xp + " pontos de experiência!";
            break;
        default:
            document.getElementById("resultado").innerHTML = "Digite novamente os dados!";
    }  
}