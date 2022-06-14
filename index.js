document.querySelector("button").addEventListener("click",handleClick) ;

function handleClick(){
    var img1 = document.querySelectorAll("img")[0];
    var img2 = document.querySelectorAll("img")[1];
    var h = document.querySelector(".heading");

    // changing dice images
    var RandomNumber1 = Math.floor(Math.random() * 6) + 1;
    var DiceImageSrc1 = "/images/dice-icon-"+RandomNumber1+".png";
    var RandomNumber2 = Math.floor(Math.random() * 6) + 1;;
    var DiceImageSrc2 = "/images/dice-icon-"+RandomNumber2+".png";

    img1.setAttribute("src",DiceImageSrc1);
    img2.setAttribute("src",DiceImageSrc2);

    // declaring the winner
    if (RandomNumber1 > RandomNumber2){
        h.innerHTML = "Player 1 Wins !!";
    }
    else if (RandomNumber1 < RandomNumber2){
        h.innerHTML = "Player 2 Wins !!";
    }
    else{
        h.innerHTML = "It's a Draw !!";
    }
}
