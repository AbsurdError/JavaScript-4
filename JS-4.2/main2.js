// Урок 2
// 1.1

// let str = '1234567890'
// for (let i = 0; i < str.length; i++)
// {
//    if (str[i] == '0'){
//     console.log(i)
//     break;
//    }
// }

// 1.2

// for (let i = 0; i < 1000; i++){
//     if (i >= 10){
//         str = String(i)
//         if (Number(str[0]) + Number(str[1]) == 5){
//             console.log(i)
//         }
//     }
// }

// 1.3

// let x = 2
// let arr = [1, 2, 5, 1, 3, 5, 6, 2, 6]

// for (let i = 0; i < arr.length-1; i++){
//     if (arr[i] == x){
//         arr.splice(i, 1)
//     }
// }
// console.log(arr)

// 1.4

// let arr = [1,2,3,4,5,6]
// let sum = 0;
// for (let i = 0; i<arr.length/2; i++){
//     sum += arr[i]
// }
// console.log(sum)

// 2.1

// let arr = [-1,2,-3,4,5,-6]
// let sum = 0;
// for (let i = 0; i<arr.length; i++){
//     if(arr[i] < 0){
//     sum += 1
//     }
// }
// console.log(sum)

// 2.2

// let arr = [-1, 2, -3, 4, -5, 6, -7, 8, -9];
// let res = [];
// for (let i = 0; i<arr.length; i++){
//     if(arr[i] >= 0){
//         res.push(arr[i])
//     }
// }
// console.log(res)

// 2.3

// let str = 'qwerty-123';
// let str2 = str.slice(0, -2) +str.slice(-1);
// console.log(str2);

// 2.4

// let arr = [1, 2, 3, 4 ,5, 6];
// let sum1 = 0;
// let sum2 = 0;
// for (let i = 0; i < arr.length/2; i++){
//     sum1 += arr[i]
//     sum2 += arr[i+3]
// }
// console.log(sum1 / sum2)

// 3.1

// let str1 = 'qwerty';
// let str2 = 'ytrewq';
// let last = str1.slice(-1)
// let first = str2.slice(0, 1)

// if (last == first){
//     console.log('Буквы совпадают')
// } else {
//     console.log('Совпадений нет')
// }

// 3.2

// let str = ('120340560');
// let num = 0;
// let index;
// for (let i = 0; i < str.length; i++){
//     if (str[i] == '0'){
//         num += 1
//         if (num = 3){
//             index = i
//         }
//     }
// }
// console.log(index)

// 3.3

// let num = '12, 34, 56';
// let sum = 0;
// let arr = num.split(',');
// for (let i = 0; i<arr.length; i++){
//     sum += Number(arr[i])
// }
// console.log(sum)

// 3.4

// let str = '2025-12-31';
// let object = {}
// let arr = str.split('-')
// object['year'] = arr[0]
// object['month'] = arr[1]
// object['day'] = arr[2]
// console.log(object)

// 4.1

// let str = "Qwerty-1234";
// let pos = str.search(/\d/);
// console.log(pos);

// 4.2

// let obj = {name: 'Andrey', age: 17, email: 'basikx-lengit@gmail.com'};
// let keys = Object.keys(obj);
// let val = Object.values(obj);
// console.log(keys);
// console.log(val); 

// 4.3

// let num = 987654321;
// let sum = 0;
// let str = String(num);
// for (let i = 0; i < str.length; i++){
//     if (Number(str[i]) % 2 == 0){
//         sum += 1
//     }
// }
// console.log(sum)

// 4.4

// let str = 'abcde';
// let str2 = '';
// for (let i = 0; i < str.length; i++){
//     if (i % 2 == 0){
//         str2 += str[i].toUpperCase()
//     } else {
//         str2 += str[i]
//     }
// }
// console.log(str2)

// 4.5

// let str = 'aaa bbb ccc';
// let arr = str.split(' ');
// let str2 = '';
// for (let i = 0; i < arr.length; i++){
//     str2 += arr[i][0].toUpperCase() + arr[i].slice(1) + " ";
// }
// console.log(str2)

// 5.1

// let str = '023m0df0dfg0';
// let pos = [];
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === '0') {
//     pos.push(i);
//   }
// }
// console.log(pos);

// 5.2

// let str = 'abcdefg';
// let result = '';
// for (let i = 0; i < str.length; i++) {
//   if ((i + 1) % 3 !== 0) {
//     result += str[i];
//   }
// }
// console.log(result);

// 5.3

// let arr = [1, 2, 3, 4, 5, 6];
// let sum1 = 0;
// let sum2 = 0;
// for (let i = 0; i < arr.length; i++){
//   if (i % 2 === 0) {
//     sum1 += arr[i];
//   } else {
//     sum2 += arr[i];
//   }
// }
// console.log(sum1 / sum2);

// 6.1

// let str = 'q1w2e3r4t5y6';
// let arr = [];
// for (let i = 0; i < str.length; i++){
//   if (!isNaN(parseInt(str[i]))) {
//     arr.push(i);
//   }
// }
// console.log(arr);

// 6.2

// let arr = [123, 456, 789];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++){
//     let str = String(arr[i])
//     arr2.push(Number(str.split("").reverse().join("")))
// }
// console.log(arr2)

// 6.3

// let str = '1234567';
// let result = '';
// for (let i = str.length - 1; i >= 0; i -= 3) {
//   let str2 = str.slice(Math.max(i - 2, 0), i + 1);
//   result = str2 + ' ' + result;
// }
// console.log(result.trim());

// 6.4

// let str = 'AbCdE';
// let result = '';
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === str[i].toUpperCase()) {
//     result += str[i].toLowerCase();
//   } else {
//     result += str[i].toUpperCase();
//   }
// }
// console.log(result);

// 6.5

// let arr = [1, 2, 3, 4, 5, 6];
// let result = [];
// for (let i = 0; i < arr.length; i += 2) {
//   result.push(parseInt('' + arr[i] + arr[i + 1]));
// }
// console.log(result);

// 6.6

// let str = 'aaa bbb ccc eee fff';
// let str2 = str.split(" ");
// for (let i = 1; i < str2.length; i += 2) {
//     str2[i] = str2[i][0].toUpperCase() + str2[i].substring(1);
// }
// console.log(str2.join(" "));

// 7.1

// let str = 'a bc def ghij';
// let str2 = str.split(" ");
// for (let i = 0; i < str2.length; i++){
//   if (str2[i].length <= 3){
//     str2[i] = str2[i].toUpperCase();
//   }
// }
// console.log(str2.join(" "));

// 7.2

// function check_reg(string) {
//     if (string == string.toUpperCase()) {
//         return 'Символ в верхнем регистре'
//     } else {
//         return 'Символ в нижнем регистре'
//     }
// }
// let str1 = 'S';
// console.log(check_reg(str1))

// 7.3

// let num = 123789;
// let arr = String(num).split('');
// let str = '';
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 == 0){
//         str += arr[i]
//     }
// }
// console.log(Number(str))