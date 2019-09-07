// 課題1: whileを使って100回ループを行う処理を実装する
let num = 0;
while(num < 100) {
    console.log(num);
    num++;
}

// 課題2: 正解が出るまで問題を出し続ける入力ダイアログを表示する
const question = 'パンはパンでも食べられないパンは？';
const answer = 'フライパン';
let input;

while (input !== answer) {
    input = prompt(question);
    if (input !== answer) {
        alert('不正解です！');
    } else {
        alert('正解です！');        
    }
}

