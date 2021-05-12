import React, { useState, useMemo } from "react";

// 간단히 요약하자면 useCallback은 함수 자체를 캐싱하고, useMemo는 값을 캐싱합니다.

const getAverage = (num) => {
  console.log("평균값을 계산중입니다.....");
  if (num.length === 0) return 0;
  const sum = num.reduce((a, b) => a + b);
  return sum / num.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [num, setNum] = useState("");

  const onChange = (e) => {
    const { value } = e.target;
    if (!isNaN(Number(value))) {
      setNum(value);
    } else {
      alert("숫자만 입력 가능합니다.");
    }
  };
  const onInsert = () => {
    const nextList = [...list, parseInt(num)];
    setList(nextList);
    setNum("");
  };
  return (
    <div>
      <input value={num} onChange={onChange} type="text" />
      <button onClick={onInsert}>submit</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>avg</b>: {getAverage(list)}
      </div>
    </div>
  );
};

//위의 평균을 구하는 컴포넌트를 최적화 하려면 아래를 참고

const Average = () => {
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <React.Fragment>
      <b>avg</b>:{avg}
    </React.Fragment>
  );
};

// 첫번째 인자에 콜백함수를, 두번째 인자에 변하기를 원하는 state 값을 설정해 주면
// 해당 값이 변할 때에만 함수를 재실행해 렌더링을 효율적으로 조정할 수 있다.
// 이를 통해 list 배열이 바뀔 때에만 getAverage 함수를 호출할 수 있다.
