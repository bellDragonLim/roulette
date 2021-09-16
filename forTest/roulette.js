const rouletteCanvas = document.querySelector("#canvas");
const ctx = rouletteCanvas.getContext('2d');
const rouletteWidth = rouletteCanvas.getAttribute('width').slice(0, -2);
const rouletteHeight = rouletteCanvas.getAttribute('height').slice(0, -2);

let arr = [
    'hello',
    'world',
    'computer',
    'science',
    'science',
    'science',
]
const color = ['crimson', 'Blue', 'gold', 'forestGreen', 'darkOrange', 'blueViolet', 'DeepPink', 'midnightBlue', 'gold', 'blueViolet', 'DeepPink', 'midnightBlue', 'crimson', 'Blue', 'forestGreen', 'darkOrange',];

$(document).ready(drawRoulette(ctx));

// 룰렛 그리는 함수
function drawRoulette(ctx){
    ctx.beginPath();
    ctx.arc((rouletteWidth/2), (rouletteHeight/2), (rouletteHeight/2), 0, 2*Math.PI, false);  // arc()는 호를 긋는다. ( x좌표(px단위), y좌표, 반지름, 시작점, 끝점, 방향(false는 시계방향) )
    ctx.fillStyle = "orange";
    ctx.fill();

    ctx.translate((rouletteWidth/2), (rouletteHeight/2));   // 기준 위치 이동

    arr.forEach((el,i) => {
        ctx.beginPath();
        ctx.arc(0, 0, (rouletteHeight/2), 0, (360/arr.length)*(Math.PI/180), false);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fillStyle = color[i%16];
        ctx.fill();

        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "30px sanserif";
        ctx.save();
        ctx.rotate((360/arr.length/2)*(Math.PI/180));
        ctx.fillText((i+1)+'. '+el, (rouletteWidth/4), 0);
        ctx.restore();

        ctx.rotate((360/arr.length)*(Math.PI/180));
    });
}

// 룰렛 돌리기
let rdNum = 0;
$("#spin-btn").click(function(){
    let randomNum = Math.random()*360 + 360*7;
    $("#canvas").css({
        'transition-timing-function' : 'ease-in-out',
        'transition' : '5s',
        'transform' : 'rotate('+randomNum+'deg)'
    });
    $(this).attr('disabled', true);
    rdNum = (randomNum % 360)-360;
})
$("#canvas").on('transitionend', function(){
    alert('당첨!');
    $(this).css({
        'transition' : '0s',
        'transform' : 'rotate('+rdNum+'deg)'
    });
    $("#spin-btn").attr('disabled', false);

});
