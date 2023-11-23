## Lesson 4: Object và function

# Object

Tương tự với array, object là một dạng dữ liệu chứa những kiểu dữ liệu khác bên trong nó. Tuy nhiên, thay vì sử dụng số thứ tự như array, object sử dụng “key” để truy cập tới các giá trị bên trong của nó.

Trong thực tế, một chiếc xe ô tô là một object. Chiếc xe sẽ có nhiều “thuộc tính” khác nhau: màu sắc, xuất xứ, thương hiệu, … và sẽ có nhiều “hành động” khác nhau: nổ máy, di chuyển, phanh, bấm còi, …

Object có thể được sử dụng để lưu trữ thông tin về chiếc ô tô. Cú pháp để khởi tạo object như sau:

```jsx
const car = {
	brand: "Toyota",
	year: 2022,
	color: "red"
}
```

Trong object, mỗi cặp giá trị `brand: "Toyota"` hoặc `year: 2022` được gọi là `key - value`. Key và value được phân tách bởi dấu hai chấm `:` . Một object có thể có nhiều cặp `key - value`. Tuy nhiên, chúng lại không thể có 2 key trùng nhau. Hay nói cách khác, `key` phải là duy nhất. Các cặp `key - value` được phân tách nhau bởi dấu phẩy `,`. Tương tự như array, value bên trong object không nhất thiết phải cùng kiểu dữ liệu với nhau.

Để truy cập vào trong một một key của object. Ta sử dụng dấu chấm

```jsx
const car = {
	brand: "Toyota",
	year: 2022,
	color: "red"
}

console.log(car.brand) // "Toyota"

car.year = 2020
console.log(car) // {brand: "Toyota", year: 2020, color: "red"}
```

### Object lồng nhau

Một value bên trong object có thể chứa một object khác. Tạo ra object lồng nhau như sau:

```jsx
const student = {
	name: "Alice",
	address: {
		street: "Nguyen Chi Thanh",
		streetNo: 70
	}
}

console.log(student.address.streetNo) // 70
```

Tương tự bên trên, chúng ta cũng có thể thay đổi giá trị bên trong object lồng nhau thông qua phép gán.

### Thao tác với object

1. `delete` để xoá một cặp `key - value` bên trong object

```jsx
const student = {
	name: "Alice",
	age: 20
}
delete student.age
console.log(student) // {name: "Alice"}
```

2. Object.assign() để gộp nhiều object thành một

```jsx
const x = {name: "Alice"}
const y = {age: 20}
const z = Object.assign(x, y)
console.log(z) // {name: "Alice", age: 20}
```

---

# Function

Function là một cách để giúp chúng chúng ta đóng gói một đoạn code để có thể tái sử dụng nhiều lần. Code bên trong một function sẽ không được chạy ngay lập tức, mà chúng sẽ được chạy khi chúng ta “gọi” tới.

Để định nghĩa một function trong javascript, chúng ta làm có cú pháp sau:

```jsx
function sayHello() {
	// Block of code
	console.log("Hello")
	console.log("World")
}
```

Với việc khai báo một function như vậy, chúng ta có thể “gọi”(invoking) function đó để chạy những câu lệnh bên trong.

```jsx
sayHello()
```

Chúng ta có thể gọi một function nhiều lần để chạy lại nhiều lần đoạn code bên trong nó.

Các function được khai báo như trên có tính chất **hoisting.** Tức là chúng có thể được sử dụng trước khi khai báo.

```jsx
sayHello()
function sayHello() {
	// Code goes here ...
}
```

### Tham số và đối số

Một function có thể được chạy với các tham số đầu vào khác nhau. Các tham số này cho phép chúng nhận vào một giá trị ở thời điểm bắt đầu khởi chạy. Từ đó chúng có thể xử lý khác đi. Tham số truyền vào được nằm trong cặp ngoặc `()` của function.

Khi “gọi” function đó, chúng ta có thể truyền thêm các “đối số”. Đây là các giá trị chúng ta truyền vào ở thời điểm function được thực thi. Bên trong function, các giá trị đối số sẽ nhận được lần lượt theo thứ tự được khai báo và truyền vào. Các tham số được sử dụng như những biến cục bộ bên trong function đó.

```jsx
function sayHello(name) {
	console.log("Hello " + name + "! Nice to meet you";
}

sayHello("Alice") // "Hello Alice! Nice to meet you"
sayHello("Bob") // "Hello Bob! Nice to meet you"

function sum(x, y) {
	console.log(x, y)
}

sum(1, 2) // 3
sum(3, 4) // 7
```

### Giá trị trả về

Một function khi được gọi có thể trả về một giá trị thông qua từ khoá `return`. Giá trị trả về đó sẽ được sử dụng cho các mục đích xử lý tiếp theo.

```jsx
function sum(a, b) {
	return a + b
}

const x = sum(1, 2)
console.log(x) // 3

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

const celsius = toCelsius(77) 
console.log(celsius) // 25
```

Khi gặp câu lệnh `return`, function sẽ dừng ngay lập tức, các câu lệnh bên dưới sẽ không được thực thi. Chúng ta có thể sử dụng đặc điểm này để viết code ngắn gọn hơn trong nhiều trường hợp. Đặc biệt là trong những trường hợp có nhiều điều kiện phức tạp. Ví dụ:

```bash
function checkNumber(num) {
  if (num < 0) {
    return "Negative number";
  }
  if (num === 0) {
    return "Zero";
  }
  return "Positive number";
}
```

Trong ví dụ trên, ta thấy khi code có thể chạy được tới điều kiện `num === 0`, chúng ta có thể chắc chắn rằng `num` tại thời điểm đó không thể là số âm.

Function chỉ có thể trả về một giá trị duy nhất, JS không hỗ trợ việc trả về nhiều hơn 2 giá trị. Tuy nhiên, chúng ta có thể trả về một array hoặc một object chứa nhiều giá trị bên trong.

### Tại sao sử dụng function

Có 2 lợi ích nổi bật của việc sử dụng function bên trong JS:

1. Tái sử dụng: Chúng ta chỉ cần định nghĩa các thao tác tính toán một lần, và sau đó có thể sử dụng lại nhiều lần.
2. Sử dụng lại đoạn mã đó cho nhiều tham số khác nhau để tạo ra các kết quả khác nhau. 

```bash
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

toCelcius(68);
toCelcius(100);
toCelcius(212);
```

### Local variables - Biến cục bộ

Các giá trị biến khai báo bên trong function chỉ khả dụng bên trong function đó. Khi thoát khỏi function, các bgias trị biến đó không còn khả dụng nữa.

```jsx
// code ở đây không thể sử dụng biến carName

function myFunction() {
  let carName = "Volvo";
  // code ở đây có thể sử dụng biến carName
}

// code ở đây không thể sử dụng biến carName
```

### Anonymous function

Ngoài cách khai báo function truyền thống như trên, function còn có thể được định nghĩa bằng cách ẩn danh, nghĩa là không cần phần tên function, và sau đó có thể được gán cho một giá trị biến. Như ví dụ sau:

```jsx
let multiplyNumbers = function(num1, num2) {
  return num1 * num2;
};
console.log(multiplyNumbers(2, 3));
```

Ở đây, biến `multiplyNumbers` được khai báo với giá trị là một function. Function hoàn toàn không có tên. Tuy nhiên, chúng ta có thể truy cập và sử dụng function đó thông qua biến `multiplyNumbers`.

Có vài điểm khác biệt của phương pháp này so với cách thức khai báo function truyền thống. Chúng ta sẽ nói về nó ở những phần sau.