const chessboard = document.querySelector(".chessboard");

let row = 1;
for(let i=1; i <= 64; i++){
    const box = document.createElement('div');
    
    row % 2 === 1 ? box.className = (i % 2 === 1) ? 'odd' : 'even' : box.className = (i % 2 === 0) ? 'odd' : 'even';

    i%8 === 0 ? row++ : row;
    chessboard.appendChild(box);
}