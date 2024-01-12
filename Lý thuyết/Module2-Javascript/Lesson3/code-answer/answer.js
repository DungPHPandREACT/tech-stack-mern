// Quizzes
// 1. Hãy khai báo 2 mảng. Mỗi mảng đều có 3 phần tử lần lượt là ‘a’, ‘b’, ‘c’.
// Cho biết kiểu dữ liệu của 2 mảng đó?
// -Sử dụng toán tử ‘+’ để ‘cộng’ 2 mảng đó và cho biết kết quả?
// -Sử dụng toán tử ‘==’ để so sánh 2 mảng đó và cho biết kết quả?
// 2. Khai báo 1 mảng gồm 4 số bất kỳ khác nhau.
// -In ra phần tử có chỉ số 0 và 3 trong mảng.
// -Thực hiện phép cộng giữa phần tử có chỉ số 1 và 2.
// -Thực hiện hoán đổi giá trị của phần tử có chỉ số 1 và 3.
// 3. Khai báo 1 mảng gồm các số bất kỳ.
// -Hãy in ra các số chẵn trong mảng đó.
// -Hãy tính tổng các phần tử trong mảng.
// -Hãy tìm phần tử nhỏ nhất trong mảng.
// 4. Khai báo 1 mảng rỗng. Nhập vào số n (n > 0). Hãy điền n số có giá trị ngẫu nhiên vào trong mảng đó.
// 5. Khai báo 1 mảng gồm 2 phần tử. Nhập vào số n (n > 2). Hãy thêm vào đầu mảng phần tử có giá trị ‘0’ cho đấu khi độ dài của mảng bằng n.
// 6. Khai báo 1 mảng bất kỳ nhiều hơn 1 phần tử. Hãy thực hiện xóa
// phần tử cuối cùng trong mảng đến khi độ dài mảng bằng 1.
// 7. Nhập vào 1 dãy số s và 1 số n Mỗi số cách nhau bởi dấu ‘,’.
// -In ra dãy số mới gồm các phần tử có giá trị là bình phương của các số trong dãy s.
// -Tìm tất cả số trong dãy s có giá trị lớn hơn hoặc bằng n.
// -Tìm 1 số đầu tiên trong dãy s có giá trị bằng n.

// ```jsx
// Thực hành
// 1. Khai báo 1 mảng gồm các số bất kỳ.
// const numbers = [4, 1, 7, -10, 13, 20, -3, 19, 21];

// -Tính tích của các phần tử trong mảng đó.
// const result = 1;
// for (let number of numbers) {
//   result *= number * result;
// }

// -Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// let numbersDivisibleBy2 = [];
// for (let number of numbers) {
//   if (number % 2 === 0) {
//     numbersDivisibleBy2.push(number);
//   }
// }
// let min = numbersDivisibleBy2[0];
// for(let number of numbersDivisibleBy2){
//     if(number < min){
//         min = number;
//     }
// }
// console.log(min);

// -Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// let numbersDivisibleBy3 = [];
// for (let number of numbers) {
//   if (number % 3 === 0) {
//     numbersDivisibleBy3.push(number);
//   }
// }
// let max = numbersDivisibleBy3[0];
// for(let number of numbersDivisibleBy3){
//     if(number > max){
//         max = number;
//     }
// }
// console.log(max);

// -Tính giá trị trung bình của mảng.
// let sum = 0;
// for (let number of numbers) {
//   sum += number;
// }
// const avg = sum / numbers.length;
// console.log(avg);

// -Lọc ra các số nguyên tố trong mảng.
// for (let number of numbers) {
//   let count = 0;
//   for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       count++;
//     }
//   }
//   if (count === 2) {
//     console.log(number, "là số nguyên tố");
//   }
// }

// -Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// let isNumberLessThan10 = false;
// for (let number of numbers) {
//   if (number < 10) {
//     isNumberLessThan10 = true;
//     break;
//   }
// }
// if (isNumberLessThan10) {
//   console.log("Trong mảng có số nhỏ hơn 10");
// } else {
//   console.log("Trong mảng không có số nhỏ hơn 10");
// }

// -Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// let isAllNumberGreaterThan20 = true;
// for (let number of numbers) {
//   if (number < 20) {
//     isAllNumberGreaterThan20 = false;
//     break;
//   }
// }
// if (isAllNumberGreaterThan20) {
//   console.log("Các số trong mảng đều lớn hơn 20");
// } else {
//   console.log("Trong mảng có số nhỏ hơn 20");
// }

// -Nhập vào số n cho đến khi n là 1 số trong mảng s.
// let n;
// do {
//   n = Number(prompt("Nhập n: "));
// } while (!numbers.includes(n));

// -Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần. (https://www.geeksforgeeks.org/bubble-sort/)
// const n = numbers.length;
// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - 1 - i; j++) {
//     // Compare adjacent elements
//     if (numbers[j] > numbers[j + 1]) {
//       // Swap if they are in the wrong order
//       const temp = numbers[j];
//       numbers[j] = numbers[j + 1];
//       numbers[j + 1] = temp;
//     }
//   }
// }
// console.log("Sorted: ", numbers);

// 2. Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.
// const s = [
//   "Javascript",
//   "HTML",
//   "CSS",
//   "ReactJS",
//   "NodeJS",
//   "MongoDB",
//   "ExpressJS",
//   "NestJS",
//   "PHP",
//   "Laravel",
// ];
// let text = prompt("Nhập text:");

// -Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
// let textLengthMin = s[0];
// for(let string of s){
//     if(textLengthMin.length > string.length){
//         textLengthMin = string;
//     }
// }
// console.log(textLengthMin)

// -Tìm những chuỗi trong mảng có chứa giá trị text.
// const result = [];
// for(let string of s){
//     if(string.includes(text)){
//         result.push(string);
//     }
// }
// console.log(result);

// -Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
// const newS = [];
// for(let string of s){
//     const newElement = string.slice(0, 3);
//     newS.push(newElement);
// }
// console.log(newS);

// -Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.
// const result = s.join('-');
// console.log(result);

// 3. Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ‘,’.
// let d1 = prompt("Nhập dãy d1: ");
// let d2 = prompt("Nhập dãy d2: ");
// convert string to array
// d1 = d1.split(",");
// d2 = d2.split(",");

// -Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
// let isAllNumberIncludesD2 = true;
// for (let number of d1) {
//   if (!d2.includes(number)) {
//     isAllNumberIncludesD2 = false;
//   }
// }
// if (isAllNumberIncludesD2) {
//   console.log("Các phần tử trong d1 đều nằm trong d2");
// }

// -Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
// let sumD1 = 0;
// for (let number of d1) {
//   sumD1 += number;
// }
// for (let number of d2) {
//   if (number % sumD1 === 0) {
//     console.log("Có phần tử trong d2 chia hết cho tổng d1");
//   }
// }

// -Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
// Cách 1
// const newArr = [];
// for(let number of d1){
//     if(number % 2 === 0){
//         newArr.push(number)
//     }
// }
// for(let number of d2){
//     if(number % 2 === 0){
//         newArr.push(number)
//     }
// }
// console.log(newArr);

// Cách 2
// const newArr = [...d1, ...d2].filter((number) => number % 2 === 0);
// console.log(newArr);

// -Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1 và d2 (Sử dụng core của thuật toán Merge Sort).(https://www.geeksforgeeks.org/merge-sort/?ref=lbp)

// 4. Cho mảng đa chiều biểu thị mức độ tăng trưởng của 1 công ty qua các
// quý và năm tương ứng.
// Dữ liệu của năm: theo hàng.
// Dữ liệu của quý: theo cột.
// let growth = [
// 	[5, 8, 9, 16],
// 	// 5 + 8 + 9 + 16 = 38 /4 = 9.5
// 	[2, 7, 1, 9],
// 	// 2 + 7 + 1 + 9 = 19 / 4 = 4.75
// 	[5, 6, 8, 12],
// 	// 5 + 6 + 8 + 12 = 31 / 4 = 7.75
// 	[10, 2, 1, 8],
// 	[20, 4, 9, 1],
// ];
// console.log(growth[1][2])
// -Tạo mảng mới gồm các phần tử có giá trị là trung bình tăng trưởng của từng năm
// (Tính trung bình theo hàng).
// const newArr = [];
// for (let i = 0; i < growth.length; i++) {
// 	let sum = 0;
// 	for (let j = 0; j < growth[i].length; j++) {
// 		sum = sum + growth[i][j];
// 	}
// 	const avg = sum / growth[i].length;
// 	newArr.push(avg);
// }
// console.log(newArr);

// -Tìm giá trị tăng trưởng trung bình theo năm lớn nhất.
// let max = newArr[0];
// let year = 0;
// for (let i = 0; i < newArr.length; i++) {
// 	if (newArr[i] > max) {
// 		max = newArr[i];
// 		year = i;
// 	}
// }
// console.log(
// 	'Năm ',
// 	year + 1,
// 	' có giá trị tăng trưởng trung bình cao nhất, với giá trị là ',
// 	max
// );

// -Tìm giá trị tăng trưởng theo quý lớn nhất.
// let max = growth[0][0];
// for (let i = 0; i < growth.length; i++) {
// 	for (let j = 0; j < growth[i].length; j++) {
// 		if (growth[i][j] > max) {
// 			max = growth[i][j];
// 		}
// 	}
// }
// console.log(max);
// -Tính giá trị tăng trưởng trung bình theo quý của các năm (Tính trung bình theo cột).
// const listAvg = [];
// for (let i = 0; i < growth[0].length; i++) {
// 	let sum = 0;
// 	for (let j = 0; j < growth.length; j++) {
// 		sum = sum + growth[j][i];
// 	}
// 	const avg = sum / growth.length;
// 	listAvg.push(avg);
// }
// console.log(listAvg);

// 5. Tạo ra 1 mảng gồm các số bất kỳ. Hãy tính tổng của các số lẻ có trong mảng.
// const numbers = [4, 1, 7, -10, 13, 20, -3, 19, 21];
// let sum = 0;
// for (let number of numbers) {
//   if (number % 2 == 1) {
//     sum += number;
//   }
// }
// console.log(sum);

// 6. Nhập vào 1 dãy số s. Mỗi số cách nhau bởi dấu “,”.
// 1,2,3,4,5,6,7,8 => [1,2,3,4,5,6,7,8]
// string.split(',')
// let s = prompt('Nhập dãy số');

// const convertS = s.split(',');

// for (let i = 0; i < convertS.length; i++) {
// 	convertS[i] = Number(convertS[i]);
// }
// -Tìm số đầu tiên trong dãy lớn hơn 5 và chia hết cho 2.
// let result = null;
// for (let i = 0; i < convertS.length; i++) {
// 	if (convertS[i] > 5 && convertS[i] % 2 == 0) {
// 		result = convertS[i];
// 		break;
// 	}
// }
// if(result == null) {
//     console.log("Trong mảng không có phần tử nào hợp lệ")
// } else{
//     console.log("result: ", result);
// }
// => 6

// -Tìm tất cả số lẻ trong dãy s .
// => 1,3,5,7
// for (let i = 0; i < convertS.length; i++) {
// 	if (convertS[i] % 2 === 1) {
// 		console.log(convertS[i]);
// 	}
// }

// -Biến đổi dãy s thành dãy x mà các phần tử của dãy x là bình phương
// các phần tử của dãy s.
// x = '1,4,9,16,25,36,49,64'

// for (let i = 0; i < convertS.length; i++) {
// 	convertS[i] = convertS[i] ** 2;
// }
// const x = convertS.join(',');
// console.log(x);
