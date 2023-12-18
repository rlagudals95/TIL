# [프로그래머스] 더맵게 - JavaScript 풀이

**본 게시물은 프로그래머스의 연습 문제 풀이입니다. 저작권은 (주) 그랩에게 있습니다**



## 자바스크립트 코드(나의 풀이)


 * 처음 오답풀이 (테스트 케이스에서 실패)
```JavaScript
function solution(scoville, K) {
    let answer = 0;
    
    // 가장 맵지 않은 스코빌 + 두번째 * 2
    // K 이상이 될때 까지 위의 식을 반복
    
    const sortedScoville = scoville.sort((a, b) => a - b);
    
    let currentScoville = 0;
    
    for (let i = 0; i < sortedScoville.length; i++){
        // 첫번째 요소 + 두번째 요소*2 가 K이상이면 return answer
        const firstS = currentScoville ?? sortedScoville[i];
        const secondSMulti = sortedScoville[i + 1];
        const scoville = firstS + secondSMulti;    
        
        if(scoville >= K){
            return answer;
        } else {
            let currentScoville = scoville;
            answer++
        }
    }
    
    
    return answer;
}
```



## Reference

https://school.programmers.co.kr/learn/courses/30/parts/12117

