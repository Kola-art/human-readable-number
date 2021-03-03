module.exports = function toReadable (number) {
    let hm = number;
    let num = number;
    num = num.toString().split('');
    let contr =[];
   
    let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
              'seven', 'eight', 'nine'];
    let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
                'ninety'];
    let res = '';
    let hundreds = ['zero', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred',
                    'seven hundred', 'eight hundred', 'nine hundred'];
    let asist = ['ten', "eleven", "twelve", "thirteen", 'fourteen', "fifteen", "sixteen", "seventeen",
                  "eighteen", "nineteen"];
    if (num.length == 1) {
        res = arr[number];
    }
    // console.log(num.length);
    else if (num.length > 1 && num.length < 3){
        if ( 10 <= number && number < 20){
          switch (hm){
            case 10: res = "ten" ;
                      break;
            case 11: res = "eleven" ;
                      break;
            case 12: res = "twelve";
                     break;
            case 13: res = "thirteen";
                      break;
            case 14: res = 'fourteen';
                      break;
            case 15: res = "fifteen";
                      break;
            case 16: res = "sixteen";
                      break;
            case 17: res = "seventeen";
                      break;
            case 18: res = "eighteen";
                      break;
            case 19: res = "nineteen";
                      break;        
          }
        }
        if ( 20 <= number && number < 30){
            if( number == 20) {
              res = 'twenty';
            }
            else( res = `twenty ${arr[num[1]]}`)
          
        }
        if ( 30 <= number && number < 40){
            if( number == 30) {
              res = 'thirty';
            }
            else( res = `thirty ${arr[num[1]]}`)
          
        }
        if ( 40 <= number && number < 50){
            if( number == 40) {
              res = 'forty';
            }
            else( res = `forty ${arr[num[1]]}`)
          
        }
        if ( 50 <= number && number < 60){
            if( number == 50) {
              res = 'fifty';
            }
            else( res = `fifty ${arr[num[1]]}`)
          
        }
        if ( 60 <= number && number < 70){
            if( number == 60) {
              res = 'sixty';
            }
            else( res = `sixty ${arr[num[1]]}`)
          
        }
        if ( 70 <= number && number < 80){
            if( number == 70) {
              res = 'seventy';
            }
            else( res = `seventy ${arr[num[1]]}`)
          
        }
        if ( 80 <= number && number < 90){
            if( number == 80) {
              res = 'eighty';
            }
            else( res = `eighty ${arr[num[1]]}`)
          
        }
        if ( 90 <= number && number < 100){
            if( number == 90) {
              res = 'ninety';
            }
            else( res = `ninety ${arr[num[1]]}`)
          
        }
    }
    else if (num.length >=3){
              contr.push(num[1]);
              contr.push(num[2]);
              contr.join(' ');
              let ww = contr[0] + contr[1];
              if (number % 100 ==0){
                  res = `${hundreds[num[0]]}`;
              }
              else if(num[2] == 0 ) {
                res = `${hundreds[num[0]]} ${tens[num[1]]}`;
              }
              else if (ww>=11 && ww<20){
                res = `${hundreds[num[0]]} ${asist[num[2]]}`;
              }
              else if (num[1] == 0 ){
                res = `${hundreds[num[0]]} ${arr[num[2]]}`;
              }

              else res = `${hundreds[num[0]]} ${tens[num[1]]} ${arr[num[2]]}`;

         
          
    }
    return res;
}
