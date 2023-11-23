## Lesson 2: Flow control & loop

>💡 Các câu lệnh liên quan đến flow của Javascript

Trong Javascript, code sẽ chạy theo flow chủ yếu là từ trên xuống dưới. Ta có những câu lệnh để có thể viết được các đoạn code chạy theo một logic nhất định.

# Khối lệnh

Khối lệnh (block of code) là một tập hợp các câu lệnh sẽ được thực thi cùng nhau. Trong Javascript, một khối lệnh được hiểu là các dòng code nằm trong cặp ngoặc nhọn `{}`

```jsx
console.log("Hello, world!")
{
	let x = 1;
	console.log(x)
}
```

Mục đích của khối lệnh là để chia nhỏ ứng dụng thành nhiều phần có **phạm vi (Scope)** nhỏ hơn. Các biến nằm trong phạm vi khác nhau sẽ có giá trị khác nhau. Từ đó ta có khái niệm “**phạm vi của biến”.** Phạm vi của biến nói về các vùng mà giá trị của biến khả dụng. Xét ví dụ sau:

```jsx
let x = 1
{
	let y = 2
	console.log(y) // 2
	console.log(x) // 1
}
console.log(y) // Error
console.log(x) // 1
```

Với ví dụ trên, do biến `y` được khởi tạo bên trong khối lệnh con, nên `y` chỉ được biết tới bên trong khối lệnh đó. Ta không thể truy cập vào biến `y` ở ngoài phạm vi của nó. Tuy nhiên, với biến `x`, nó được khởi tạo ở bên ngoài khối lệnh. `x` sẽ có phạm vi bên ngoài và bên trong tất cả những phạm vi con. Trong JS, người ta gọi đây là **block scope.**

>📌 Các biến được khai báo với từ khoá `let` và `const` sẽ có phạm vi trong khối lệnh (`block sope`). Với các biến được khai báo với từ khoá `var`, chúng sẽ có `function scope`. Chúng ta sẽ tìm hiểu ở các phần sau.

# Câu lệnh điều kiện

Câu lệnh điều kiện giúp chúng ta có thể chạy một khối lệnh tương ứng khi một điều kiện được thoả mãn hoặc không thoả mãn. Nó tương đương với mệnh đề “nếu … thì …, không thì …”

Trong Javascript, có một vài cách để viết câu điều kiến dưới đây:

## `if`

Đây là cách cơ bản nhất để tạo ra một câu điều kiện với JS. Cú pháp của `if` như sau:

```jsx
if (<condition>) {
	/* block of code */
}
```

`if` nhận vào một giá trị. Giá trị này sẽ được xác định tính đúng sai bởi JS. Nếu giá trị đó là đúng, khối lệnh bên trong if sẽ được thực thi.

Các câu lệnh bên dưới của `if` sẽ tiếp tục được thực thi ngay cả khi điều kiện của `if` không thoả mãn.

Ví dụ:

```jsx
let x = 2;

if (x % 2 === 0) {
	console.log("x is even");
}

if (true) {
	console.log("true")
}

if ("") {
	console.log("You will not see this line");
}
```

Các giá trị truyền vào trong câu điều kiện không nhất thiết phải có kiểu dữ liệu là boolean. Chúng có thể là các kiểu dữ liệu khác. Tính đúng sai (Truthy, Falsy) của chúng sẽ được Javascript xác định.

>📖 Các giá trị mang tính sai trong Javascript được liệt kê ở đây: https://developer.mozilla.org/en-US/docs/Glossary/Falsy

## `else`

`else` trong javascript giúp chúng ta khai báo khối lệnh sẽ được thực thi khi điều kiện của `if` nhận giá trị sai.

```jsx
if (<condition>) {
	console.log("condition is true")
} else {
	console.log("condition is false")
}
```

`else` buộc phải dùng với `if`. Nó không thể tự đứng một mình

## `else if`

Chúng ta có thể sử dụng tiếp một mệnh đề `if` sau mệnh đề `else` trước đó. Giúp chúng ta có thể tạo ra một lệnh điều kiện tiếp theo nếu điều kiện trước đó bị sai.

```jsx
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

## `switch - case`

`switch` là một cách để rút gọn câu lệnh `if - else if` trong một số trường hợp. `switch` cho ta truyền vào một giá trị đầu vào. Ta có thể định nghĩa ra các hành động khác nhau khi giá trị bằng với một giá trị được định sẵn

```jsx
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day) // Friday
```

Sau mỗi một case, chúng ta cần sử dụng `break` để kết thúc quá trình xử lý của case đó.

Ta có thể khai báo thêm trường hợp `default`. Nếu tất cả các `case` đều không đúng thì `default` sẽ được thực thi.

```jsx
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 6:
    day = "Saturday";
		break;
	default:
		day = "Not a weekend"
}
console.log(day) // Not a weekend
```

Ngoài ra, chúng ta cũng có thể nhóm các `case` có chung một logic xử lý với cách viết như sau:

```jsx
let day;
switch (new Date().getDay()) {
  case 0:
  case 6:
    day = "Weekend";
		break;
	case 1:
	case 2:
		day = "Start of week days";
		break;
	case 3:
	case 4:
	case 5:
		day = "End of week days";
		break;

}
console.log(day) // Not a weekend
```

---

# Vòng lặp

Vòng lặp cho phép chúng ta lặp lại các tác vụ giống nhau nhiều lần. Trong Javascript, chúng ta có thể sử dụng `for` hoặc `while` để tạo ra các vòng lặp

## `for`

Cú pháp của vòng lặp `for` như sau:

```jsx
for (<statement_1>; <statement_2>; <statement_3>) {
	/* block of code */
}
```

Trong đó:

- `statement_1`: Câu lệnh được thực hiện trước khi vòng lặp diễn ra
- `statement_2`: Điều kiện để vòng lặp kết thúc
- `statement_3`: Câu lệnh được chạy sau mỗi một vòng lặp

Ví dụ:

```jsx
let sum = 0
for (let i = 0; i < 100; i++) {
	sum += i
}
console.log(sum)
```

`statement_1` thường được sử dụng để khởi tạo các giá trị phục vụ cho vòng lặp. Ở ví dụ trên, ta khởi tạo giá trị biến `i = 0` trước khi vòng lặp được chạy.

`statement_2` được sử dụng để xác định khi nào vòng lặp kết thúc. Trong ví dụ trên, chúng ta sẽ kết thúc vòng lặp khi `i === 100`

`statement_3` được gọi sau mỗi lần vòng lặp được chạy. Trong ví dụ trên, ta tăng giá trị của biến `i` lên một đơn vị sau mỗi vòng lặp.

Cả 3 câu lệnh trên đều **không bắt buộc** phải tổn tại trong câu lệnh `for`. Chúng ta có thể bỏ qua chúng với chỉ dấu `;`

```jsx
let i = 0
for (; i < 99; i++) {
	console.log(i)
}

...

for (let i = 0; i < 99;) {
	console.log(i)
	i++;
}

...

for (;;) {
	console.log('infinite loop')
}
```

## `while`

Vòng lặp `while` gần tương tự với vòng lặp `for`. Điểm khác biệt là `while` chỉ cho phép một câu lệnh để xác định khi nào vòng lặp sẽ kết thúc. Nó tương đương với vòng lặp `for` khi chỉ có `statement_2`

```jsx
let sum = 0;
let i = 0;
while (i < 99) {
	sum += i;
	i++;
}
console.log(sum);
```

## `break` và `continue`

Vòng lặp thường sẽ chạy cho đến khi điều kiện của nó không được thoả mãn. Tuy nhiên, nếu muốn kết thúc sớm vòng lặp, chúng ta có thể sử dụng từ khoá `break`. Vòng lặp sẽ ngay lập tức dừng lại ở ví trí `break`. Các câu lệnh còn lại của vòng lặp hiện tại cũng sẽ không được thực thi.

```jsx
for (let i = 0; i < 10; i++) {
  if (i === 3) { 
		break; 
		console.log('this will not run')
	}
	console.log(i); // 0 1 2 
}
```

Khác với `break` , `continue` cho phép chúng ta nhảy qua một vòng lặp hiện tại và thực hiện tiếp vòng lặp tiếp theo. Các câu lệnh còn lại sau `continue` cũng sẽ không được thực thi.

```jsx
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) { 
		continue;
		console.log('this will not run')
	}
	console.log(i); // 0 2 4 6 8
}
```

>📖 Để luyện tập các logic điều khiển trong lập trình, chúng ta có thể truy cập và chơi thử game giải đố ở link sau: [https://blockly.games/maze](https://blockly.games/maze?lang=en)
