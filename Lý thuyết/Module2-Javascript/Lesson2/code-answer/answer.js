// Quizz
// 0. Hãy viết chương trình nhập vào một chuỗi s. Nếu chuỗi s có độ dài >= 8, in ra màn hình console “Chuỗi này ok”.
// Ngược lại, in ra “Ngắn quá, dài thêm tí nữa”.

// const s = prompt("Nhập s: ");
// if (s.length >= 8) {
//   console.log("Chuỗi này ok");
// } else {
//   console.log("Ngắn quá, dài thêm tí nữa");
// }

// 1. Hãy viết chương trình nhập vào một số a.
// Nếu a >= 18, in ra màn hình console “Đủ 18 thì quẩy tiếp”.
// Nếu a >= 16, in ra “Đợi thêm ít năm nữa”.
// Ngược lại, in ra “Còn quá nà trẻ”.
// const a = Number(prompt("Nhập a"));

// if (a >= 18) {
//   console.log("Đủ 18 thì quẩy tiếp");
// } else if (a >= 16) {
//   console.log("Đợi thêm ít năm nữa");
// } else {
//   console.log("Còn quá nà trẻ");
// }

// Quizz
// 0. Hãy tính tổng các số từ 1 đến 50.

// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//   sum = sum + i; // gán lại giá trị mới cho biến sum = giá trị biến sum hiện tại + số đang được duyệt đến
// }

// 1. Hãy tính tổng các số chẵn từ -10 đến 50.

// let sum1 = 0;
// for (let i = -10; i <= 50; i++) {
//   //số chẵn là số chia 2 dư 0 (chia hết cho 2)
//   if (sum % 2 === 0) {
//     sum1 += i;
//   }
// }

// 2. Hãy in ra màn hình console các số chia hết cho 9 trong đoạn [-100; 100]

// for (let i = -100; i <= 100; i++) {
//   if (i % 9 === 0) {
//     console.log(i);
//   }
// }

// 3. Hãy dùng while để in ra dãy số từ 1 đến 200.

// let number = 1;
// while(number<=200){
//     console.log(number);
//     number ++;
// }

// 4. Hãy nhập vào 1 chuỗi s và 1 số l. Hãy thêm vào cuối chuỗi s ký tự ‘a’ cho đến khi độ dài chuỗi s >= l.

// let s = prompt('Nhập s: ');
// let l = prompt('Nhập l: ');
// while(s.length <= l){
//     s = s+'a';
// }
// console.log(s);

// 5. Nhập vào 2 số 0 <= x < y <= 100. Hãy tăng dần giá trị của x, giảm dần giá trị của y và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.

// let x,y;
// do {
//   x = Number(prompt("Nhập x: "));
//   y = Number(prompt("Nhập y: "));
// } while (x < 0 || y > 100 || x > y );
// while(x <= y){
//     y--;
//     x++
// }
// console.log("x: ", x);
// console.log("y: ", y);

// Thực hành
// 1. In ra dãy số từ 1 đến 500.

// for(let i = 1; i<=500; i++){
//     console.log(i)
// }

// 2. In ra các số chia hết cho 2 và 3 từ 1 đến 300.

// for (let i = 1; i <= 300; i++) {
//   if (i % 2 === 0 && i % 3 === 0) {
//     console.log(i);
//   }
// }

// 3. Tính tổng các số chẵn trong đoạn [-30, 50].

// let sum3 = 0;
// for(let i = -30; i<=50; i++){
//     if(i%2 === 0){
//         sum3 += i
//     }
// }
// console.log(sum3)

// 4. Nhập vào số n. Tính giai thừa của số n.

// let n = Number(prompt('Nhập n: '));
// let factorial = 1;
// for(let i = 1; i <=n ;i++){
//     factorial *= i;
// }
// console.log('factorial: ', factorial)

// 5. Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.

// let a, b, x;
// do {
//   a = Number(prompt("Nhập a: "));
//   b = Number(prompt("Nhập b: "));
//   x = Number(prompt("Nhập x: "));
// } while (a >= b);

// for (let i = a; i <= b; i++) {
//   if (i % x === 0) {
//     console.log(i);
//     break;
//   }
// }

// 6. Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau:
//     S = 1/(1.2) + 1/(2.3) + ... + 1/n(n+1)

// let n = Number(prompt("Nhập n: "));
// let S = 0;
// for (let i = 1; i <= n; i++) {
//   S += 1 / (n * (n + 1));
// }
// console.log(S);

// 7. Nhập vào số n. Hãy in ra số ước của n.

// let n = Number(prompt("Nhập n:"))
// for(let i = 1; i<=n;i++){
//     if(n%i===0){
//         console.log(i)
//     }
// }

// 8. Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.

// Số nguyên tố là số chia hết cho 1 và chính nó
// Lời giải dưới đây dựa vào định nghĩa của số nguyên tố để xử lý
// VD: 4 % (1,2,4) => không phải số nguyên tố
// VD: 2 % (1,2) => số nguyên tố
// VD: 6 % (1,2,3,6) => không phải số nguyên tố
// VD: 7 % (1,7) => số nguyên tố
// Nhận xét: những số nguyên tố sẽ chia hết cho 2 số (là 1 và chính nó)
//           những số không phải số nguyên tố sẽ chia hết cho nhiều hơn 2 số (1, chính nó và những số khác)
// let n = Number(prompt("Nhập n:"));
// let count = 0;
// for(let i = 1; i<=n; i++){
//     if(n % i === 0){
//         count++;
//     }
// }
// if(count === 2){
//     console.log(n, ' là số nguyên tố');
// } else{
//     console.log(n, ' không phải là số nguyên tố');
// }

// 9. Nhập vào chuỗi s (chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.

// let s = prompt("Nhập s: ");
// let l = Number(prompt("Nhập l: "));
// while (s.length <= l) {
//   s = "0" + s;
// }
// console.log(s);

// 10. Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất, bội chung nhỏ nhất của m, n.

// let m, n;
// do {
//   m = prompt("Nhập m: ");
// } while (m <= 0);
// do {
//   n = prompt("Nhập n: ");
// } while (n <= 0);
// // Tìm ước chung lớn nhất
// let result = 1;
// for(let i = 0; i<=m && i <=n; i++){
//     if(m%i === 0 && n%i === 0){
//         result = i
//     }
// }
// console.log('result: ', result)
// // Tìm bội chung nhỏ nhất
// result = (m*n) / result;
// console.log('result: ', result)

// 11. Trò chơi đoán số:
// Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20.
// Người dùng nhập vào 1 số answer. Nếu answer bằng correct → in ra “Đoán đúng”.
// Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer.
// Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.

// const NUMBER_RANDOM = Math.floor(Math.random() * 10 * 2 + 1);
// let count = 5;
// let numberInput;
// for (let i = 1; i <= count; i++) {
//   numberInput = Number(prompt("Số bạn dự đoán là: "));
//   if (numberInput === NUMBER_RANDOM) {
//     alert("Đoán đúng");
//     break;
//   } else {
//     alert("Đoán sai");
//   }
// }

// 12. Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.

// let n;
// do {
//   n = Number(prompt("Nhập n: "));
// } while (n < 2 || n > 10);
// for (let i = 1; i <= 10; i++) {
//   console.log(n, "*", i, "=", i * n);
// }

// 13. Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n.
// VD: n = 3
// ```
// * * *
// * * *
// * * *
// ```

// let n;
// do {
//   n = Number(prompt("Nhập n: "));
// } while (n < 2);
// for (let i = 1; i <= n; i++) {
//   let horizontalEdge = "";
//   for (let j = 1; j <= n; j++) {
//     horizontalEdge += "* ";
//   }
//   console.log(horizontalEdge);
// }

// 14. Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n.
// VD: m = 4, n = 3
// ```
// * * * *
// * * * *
// * * * *
// ```

// let m, n;
// do {
//   m = prompt("Nhập m: ");
// } while (m < 2);
// do {
//   n = prompt("Nhập n: ");
// } while (n < 2);

// for (let i = 1; i <= n; i++) {
//   let horizontalEdge = "";
//   for (let j = 1; j <= m; j++) {
//     horizontalEdge += "* ";
//   }
//   console.log(horizontalEdge);
// }

// 15. Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n.
// VD: n = 3
// ```
// *
// * *
// * * *
// ```

// let n;
// do {
//   n = prompt("Nhập n: ");
// } while (n < 3);
// for (let i = 1; i <= n; i++) {
//   let horizontalEdge = "";
//   for (let j = 1; j <= i; j++) {
//     horizontalEdge += "* ";
//   }
//   console.log(horizontalEdge);
// }

// 16. Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. Hãy tính chỉ số BMI và đưa ra kết quả:
// Nếu BMI < 18.5 → in ra “Nhẹ cân”
// Nếu 18.5 <= BMI < 23 → in ra “Bình thường”
// Nếu 23 <= BMI < 25 → in ra “Thừa cân”
// Nếu BMI >= 25 → in ra “Béo phì”

// let w = Number(prompt("Nhập cân nặng (kg): ", 65));
// let h = Number(prompt("Nhập chiều cao (m): ", 1.68));
// const BMI = w / h;

// if (BMI < 18.5) {
//   console.log("Nhẹ cân");
// } else if (18.5 <= BMI && BMI < 23) {
//   console.log("Bình thường");
// } else if (23 <= BMI && BMI < 25) {
//   console.log("Thừa cân");
// } else {
//   console.log("Béo phì");
// }

// 17. Tạo 1 biến a có giá trị là 1 số tự nhiên ngẫu nhiên trong [5, 10]. Hãy nhập vào số n cho đến khi giá trị của n bằng a.

// Công thức random số trong đoạn:  Math.floor(Math.random() * (max - min)) + min;
const a = Math.floor(Math.random() * 5) + 5;
let n;
do {
  n = Number(prompt("Nhập n"));
} while (n !== a);
