//2021.08.26
function solution(s) {
    let answer = '';

    let word = s.split(' ', s.length);
    let split_word = [];
    let combine_word = [];

    //단어별로 찢기
    for (let k = 0; k < word.length; k++)
        split_word[k] = word[k].split('', word[k].length);

    //분할된 단어별 문자별로 각각 strange화 하는 함수
    function toStrange(arr) {
        for (let k = 0; k < arr.length;) {
            arr[k] = arr[k].toUpperCase();
            k += 2;
        }
        for (let k = 1; k < arr.length;) {
            arr[k] = arr[k].toLowerCase();
            k += 2;
        }

        return arr;
    }

    //function호출 및 문자를 단어로 재합
    for (let i = 0; i < word.length; i++) {
        toStrange(split_word[i]);

        combine_word[i] = split_word[i].join('');
    }

    //합체된 단어들을 문장으로 재합
    answer = combine_word.join(' ');
    console.log(answer);

    return answer;
}


//New Information
//.toUpperCase()
//.toLowerCase()
//.join()
//.toString()


//다른 풀이 1
/*
function toWeirdCase(s){
  //함수를 완성해주세요
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})

}
*/


//다른 풀이 2
/*
function toWeirdCase(s){
  var result = "";
    var num = 0;

  console.log(s.length);

  for(var i = 0; i < s.length; i++){
   if(s.charAt(i) == " "){
    num = 0;
    result += " ";
    continue;
   }
    else if(num % 2 == 0){
      result += (s.charAt(i)).toUpperCase();
      num++;
    }
    else{
      result += (s.charAt(i)).toLowerCase();
      num++; 
    }
  }
*/