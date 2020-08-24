let numSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll(".square");

let colorDisplay = document.querySelector("#colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const btnReset = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        //Adicionar cores iniciais dos quadrados
        squares[i].style.backgroundColor = colors[i];
        //Adicionar evento de clique
        squares[i].addEventListener("click", function() {
            //pegar a cor do quadrado escolhido
            var clickedColor = this.style.backgroundColor;
            //comparar a cor com a variavel pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correto!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                btnReset.textContent = "Novo Jogo?";
            } else {
                this.style.backgroundColor = "rgba(0, 0, 0, 0)";
                messageDisplay.textContent = "Tente novamente";
            }
        });
        reset();
    }
}

function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Fácil" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}





function reset() {
    //gerar novas cores
    colors = generateRandomColors(numSquares);
    //escolher uma nova cor aleatória do array
    pickedColor = pickColor();
    //mudar a cor do colorDisplay para ficar com a mesma pickedColor
    colorDisplay.textContent = pickedColor;
    //mudar a cor dos quadrados
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }


    }
    this.textContent = "Novas Cores"
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
}


btnReset.addEventListener("click", reset);

colorDisplay.textContent = pickedColor;



function changeColors(color) {
    //fazer um loop nos quadrados
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;

    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //fazer um array 
    let arr = [];
    //repetir num vezes
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    //retornar o array
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}