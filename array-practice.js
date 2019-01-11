/* 
   條件: 題目 2 ~ 7 的操作都不能修改到 題目 1 建立的陣列
*/

// 1. 建立一個長度 50，數值介於 40~100 的陣列 (亂數產生) (Array)
console.log("1. ---------------------------");
let randomSet = new Set();
while(randomSet.size < 50){
    randomSet.add(Math.floor(Math.random() * 61) + 40);
}
let randomArr = [...randomSet];
console.log(randomArr.length, randomArr);

// 2. 篩選出大於 60 的結果
console.log("2. ---------------------------");
console.log(randomArr.filter(element => element > 60));

// 3. 找出最大值
console.log("3. ---------------------------");
console.log(Math.max(...randomArr));

// 4. 計算全部數值的合計數
console.log("4. ---------------------------");
console.log(randomArr.reduce((accmulator = 0, currentVal) => accmulator + currentVal));

// 5. 找出最小值
console.log("5. ---------------------------");
console.log(Math.min(...randomArr));

// 6. 全部開根號並乘上 10
console.log("6. ---------------------------");
console.log(randomArr.map(element => Math.sqrt(element) * 10));


// 7. 請依數值大小排序，由大而小
console.log("7. ---------------------------");
console.log([...randomArr].sort((a, b) => a - b));
