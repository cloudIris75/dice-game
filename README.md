# Dice Game
|<img src="src/assets/click-roll.png" alt="click roll" />|<img src="src/assets/click-reset.png" alt="click reset" />|
|:-:|:-:|
|'던지기' 버튼 클릭 시|'처음부터' 버튼 클릭 시|

## About
React로 구현한 주사위 게임.

## Stack
HTML, CSS, JavaScript, React.js

## Period
2021.11.18. ~ 2021.11.26.

## Roadmap
- [X] Add a 'Dice' component
- [X] Add a 'Button' component
- [X] Add a 'Board' component
- [X] Apply CSS style

## Error
|Problem|Solution|
|:-|:-|
|'던지기' 버튼을 클릭할 때마다 주사위 결과가 더 높은 쪽 보드에 불이 들어오는 효과가 제대로 적용되지 않는 현상.|비교 대상이 다음에 올 주사위의 결과 값이어야 했는데, 결과 기록들이 저장되는 State 배열을 두고 비교 중이었다. State를 제대로 이해하지 못한 채 사용하다 일어난 문제. 각 배열과 변수들이 무엇을 담고 있고, 지금 비교해야 할 대상이 무엇인지 다시 이해한 뒤 코드를 수정해서 해결.|
