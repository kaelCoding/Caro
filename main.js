const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.font = "50px Arial";

const widthCanvas = 300;
const numberSquare = 3;
const widthSquare = widthCanvas / numberSquare;

function drawChessBoard(){
    for(let i = 0; i <= numberSquare; i++){
        const xBegin = 0;
        const yBegin = i * widthSquare;

        const xEnd = widthCanvas;
        const yEnd = i * widthSquare;

        ctx.moveTo(xBegin, yBegin);
        ctx.lineTo(xEnd, yEnd);
        ctx.stroke();
    }

    for(let i = 0; i <= numberSquare; i++){
        const xBegin = i * widthSquare;
        const yBegin = 0;

        const xEnd = i * widthSquare;
        const yEnd = widthCanvas;

        ctx.moveTo(xBegin, yBegin);
        ctx.lineTo(xEnd, yEnd);
        ctx.stroke();
    }
}

let dataCheck = [];
let turn = true;
let point = 0;

function Check(e){
    const xPage = e.x;
    const yPage = e.y;

    const xCanvas = e.target.offsetLeft;
    const yCanvas = e.target.offsetTop;

    const x = xPage - xCanvas;
    const y = yPage - yCanvas;

    const col = parseInt(x / widthSquare);
    const row = parseInt(y / widthSquare);

    for (const itemCheck of dataCheck){
        if(itemCheck.col == col && itemCheck.row == row){
            return;
        }
    }
    dataCheck.push({
        col: col,
        row: row
    });

    let wordCheck = "x";

    if (!turn){
        wordCheck = "o";
    }

    ctx.fillText(
        wordCheck,
        col * widthSquare  + 35,
        row * widthSquare + 60
    );

    turn = !turn;
}

function reset(){
    turn = true;
    dataCheck = [];
    ctx.clearRect(0, 0, widthCanvas, widthCanvas);
    drawChessBoard();
}

drawChessBoard()