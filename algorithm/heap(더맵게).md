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
        const firstS = currentScoville || sortedScoville[i];
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

 * 힙 알고리즘 적용

```
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) {
        break;
      }
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
        smallest = leftChildIndex;
      }

      if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
        smallest = rightChildIndex;
      }

      if (smallest === index) {
        break;
      }

      this.swap(index, smallest);
      index = smallest;
    }
  }

  swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();

  // 힙에 초기 스코빌 지수를 모두 넣음
  for (const s of scoville) {
    heap.push(s);
  }

  let mixCount = 0;

  while (heap.size() > 1 && heap.heap[0] < K) {
    const first = heap.pop();
    const second = heap.pop();
    const mixedScoville = first + 2 * second;
    heap.push(mixedScoville);
    mixCount += 1;
  }

  if (heap.size() === 1 && heap.heap[0] < K) {
    return -1; // 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우
  }

  return mixCount;
}

```



## Reference

https://school.programmers.co.kr/learn/courses/30/parts/12117

