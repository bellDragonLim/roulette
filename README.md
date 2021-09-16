# 룰렛 돌리기

### 간단한 룰렛 예제.
#### 라이브러리로 Winwheel.min.js와 TweenMax.min.js를 사용했다.
___
* 룰렛 칸의 개수를 바꾸려면 myWinWheel.js의 numSegments를 변경하면 된다.
* 룰렛의 요소를 변경하려면 myWinWheel.js에서 segments 배열 안에 object를 변경하면 된다.
* 룰렛의 크기를 변경하려면 winWheel.html에서 canvas에 inline으로 들어가있는 width와 height를 바꾸고, myWinWheel.js에서 outerRadius의 크기를 바꿔주면 된다.
* 돌아가는 속도는 myWinWheel.js에서 animation의 spins를 변경하면 된다