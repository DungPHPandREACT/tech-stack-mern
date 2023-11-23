## Lesson 3: Array

>💡 Các kiểu dữ liệu dạng container trong javascript

# Array

Array (mảng) là một cấu trúc dữ liệu trong javascript. Array có thể chứa được nhiều kiểu dữ liệu khác bên trong nó.

Giả sử chúng ta có 3 biến như sau:

```jsx
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
```

Chúng ta cần phải làm thế nào để có thể duyệt qua 3 biến này? Hoặc sẽ như thế nào nếu chúng ta có tới 300 biến thay vì 3 biến như trên?

Giải pháp là sử dụng array. Array có thể chứa nhiều hơn một giá trị. Và chúng ta có thể truy cập vào giá trị của chúng thông qua số thứ tự (index)

Để khởi tạo một array, chúng ta sử dụng cú pháp sau:

```jsx
const cars = ["Saab", "Volvo", "BMW"]
```

Các phần tử bên trong một array được phân cách nhau bởi dấu phẩy (,)

Sau khi đã khởi tạo array, chúng ta có thể truy cập vào các phần tử trong array dựa vào số thứ tự của chúng, được bắt đầu đếm từ 0. 

```jsx
console.log(cars[1]) // "Volvo"
```

Hoặc thay đổi giá trị của một phần tử bên trong array với phép gán:

```jsx
cars[0] = "Vinfast"
console.log(cars) // ["Vinfast", "Volvo", "BMW"]
```

Trong Javascript, các phần tử trong một array không nhất thiết phải cùng một kiểu dữ liệu. Chúng có thể có đa dạng kiểu dữ liệu.

```jsx
const arr = [1, false, "hello", null, []]
```

>🧑‍💻 Giả sử có một dãy số gồm 5 số khác nhau. Hãy tính trung bình cộng của 5 số đó. Mở rộng bài toán với nhiều nhiều số hơn: 10, 20, 30 số.

### Mảng đa chiều

Như đã biết ở trên, bên trong một mảng có thể chứa đa dạng các loại dữ liệu khác nhau.  Khi phần tử bên trong một array là một array khác, ta sẽ có khái niệm mảng đa chiều. Một ví dụ như sau:

```jsx
const boards = [
	[" ", "X", " "],
	["X", "O", "O"],
	[" ", "X", "O"]
]
```

Lúc này, mỗi phần tử của `board` là một mảng nhỏ hơn. Ta có thể truy cập vào một ô trên bàn cờ như sau:

```jsx
console.log(boards[1][1]) // O
```

### Lặp qua mảng

Để lấy được chiều dài của mảng, chúng ta sử dụng thuộc tính `length` của chúng. Phần tử đầu tiên trong mảng sẽ ở vị trí 0, phần tử cuối cùng trong mảng sẽ ở vị trí `length - 1`

Để lặp qua các phần tử trong mảng, chúng ta có thể sử dụng vòng lặp `for` hoặc `while` như đã biết

```jsx
const arr = [1, 2, 3, 4, 5, 6, 7, 8]
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i])
}

let j = 0;
while (j < arr.length) {
	console.log(arr[j])
  j++;
}
```

### Các phương thức thông dụng của mảng:

1. `push()` thêm một phần từ vào phía sau của mảng

```jsx
const arr = [1, 2, 3, 4]
arr.push(5)
console.log(arr) // [1, 2, 3, 4, 5]
```

1. `pop()` xoá phần tử cuối cùng của mảng

```jsx
const arr = [1, 2, 3, 4]
arr.pop()
console.log(arr) // [1, 2, 3]
```

1. `shift()` xoá phần tử ở đầu của mảng

```jsx
const arr = [1, 2, 3, 4]
arr.shift()
console.log(arr) // [2, 3, 4]
```

1. `unshift()` thêm phần tử vào đầu của mảng.

```jsx
const arr = [1, 2, 3, 4]
arr.unshift(0)
console.log(arr) // [0, 1, 2, 3, 4]
```

1. `concat()` nối nhiều mảng với nhau:

```jsx
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const newArr = arr1.concat(arr2)
console.log(newArr) // [1, 2, 3, 4, 5, 6]
```

1. `sort()`: sắp xếp các phần tử trong mảng

```jsx
const arr = [2, 3, 1]
arr.sort()
console.log(arr) // [1, 2, 3]
```

1. `splice()` xoá một phần tử ở vị trí bất kỳ trong mảng, đồng thời có thể thêm vào các phần tử khác ở vị trí đó

```jsx
const arr = [1, 2, 3, 4, 5, 6]
arr.splice(1, 2, 7)
console.log(arr) // [1, 7, 4, 5, 6]
```

1. `slice()` lấy mảng con trong mảng, dựa vào vị trí bắt đầu và vị trí kết thúc:

```jsx
const arr = [1, 2, 3, 4, 5, 6]
console.log(arr.slice(2, 4)) // [3, 4]
```
