## Lesson 7: Browser & Clean code


## HTML Web Storage là gì?

Với web storage, ứng dụng web có thể lưu trữ dữ liệu trên trình duyệt của người dùng.

Trước khi có sự xuất hiện của Web Storage, dữ liệu của ứng dụng cần phải lưu trữ bên trong cookies và được gửi kèm trong tất cả các request lên server. Web storage cung cấp giải pháp an toàn hơn và cho phép lưu trữ một lượng dữ liệu lớn hơn.

Dữ liệu bên trong web storage có thể có dung lượng lên tới 5MB. Và các dữ liệu trong web storage không được gửi lên server trong mỗi request.

Web storage hoạt động theo từng ứng dụng (tên miền và giao thức). Có nghĩa là các trang web trên cùng một tên miền có thể cùng truy cập và chia sẻ dữ liệu bên trong web storage.

Có 2 công nghệ web storage trong HTML5:

- LocalStorage cho phép lưu trữ dữ liệu mà không có thời gian hết hạn.
- SessionStorage: lưu trữ dữ liệu cho một session (dữ liệu sẽ biến mất khi đóng tab trình duyệt)

Dữ liệu bên trong web storage được lưu trữ dưới dạng key - value. Nghĩa là với một “key” sẽ chỉ có một “value” duy nhất. Tương tự như trong object. Tuy nhiên, “value” của web storage chỉ có kiểu dữ liệu là `string`. Chúng không phân biệt được `boolean` hay `number`.

Các phương thức với web storage:

- `setItem(key, value)`: được sử dụng để cập nhật dữ liệu vào trong web storage
- `getItem(key)`: được sử dụng để lấy dữ liệu từ bên trong web storage.

Một vài ví dụ:

```jsx
localStorage.setItem("foo", false)
localStorage.setItem("bar", 1);

console.log(localStorage.getItem("foo")) // "false"
console.log(localStorage.getItem("bar")) // "1"
```

>📌 Để xem dữ liệu bên trong web storage, ta có thể mở Developer tools > Application > Local Storage hoặc Session Storage

Dữ liệu lưu trữ bên trong web storage chỉ có thể lưu trữ dưới dạng string. Nếu muốn lưu trữ các dữ liệu có kiểu là `object`, ta có thể sử dụng `JSON.stringify()` và `JSON.parse()` để có thể chuyển đổi object thành string và ngược lại.

```jsx
const data = {name: "Alice"}

localStorage.setItem("data", JSON.stringify(data))
console.log(JSON.parse(localStorage.getItem("data")))
```

## Window, Location & History

Object `window.location` và `window.history` có thể được sử dụng để lấy địa chỉ hiện tại của trang web hoặc sử dụng để điều hướng ứng dụng web sang các trang khác nhau.

Một số thuộc tính và phương thức bên trong object `location:`

- `location.href`: Chứa địa chỉ URL đầy đủ của trang. Bạn có thể đọc hoặc gán giá trị mới để chuyển hướng trang.
```jsx
console.log(location.href); // Hiển thị địa chỉ URL hiện tại
location.href = 'https://www.example.com'; // Chuyển hướng đến một địa chỉ URL khác
```
- `location.protocol`: Chứa giao thức của URL (ví dụ: "http:", "https:").
```jsx
console.log(location.protocol); // Hiển thị giao thức của URL
```
- `location.host`: Chứa tên máy chủ và số cổng (nếu có) của URL.
```jsx
console.log(location.host); // Hiển thị tên máy chủ và số cổng của URL
```
- `location.hostname`: Chứa tên máy chủ của URL.
```jsx
console.log(location.hostname); // Hiển thị tên máy chủ của URL
```
- `location.pathname`: Chứa đường dẫn của URL.
```jsx
console.log(location.pathname); // Hiển thị đường dẫn của URL
```
- `location.search`: Chứa chuỗi truy vấn của URL (nếu có).
```jsx
console.log(location.search); // Hiển thị chuỗi truy vấn của URL
```
- `location.hash`: Chứa phần định danh (hash) của URL.
```jsx
console.log(location.hash); // Hiển thị phần định danh của URL
```
- `location.reload()`: Là một phương thức để làm tươi trang lại trang hiện tại.
```jsx
location.reload(); // Làm tươi trang lại trang hiện tại
```
- `location.replace(url)`: Thay đổi địa chỉ URL của trang mà không tạo ra một bản ghi trong lịch sử trình duyệt.
```jsx
location.replace('https://www.example.com'); // Thay đổi địa chỉ URL mà không tạo lịch sử
```
- `location.assign(<new_url>)`: Tải về một trang web khác, thay thế trang web hiện tại
```jsx
// Chuyển hướng đến trang "https://www.example.com"
location.assign("https://www.example.com");
```


Một số phương thức bên trong `history`:

- `history.back()`:  Di chuyển người dùng đến trang trước đó trong lịch sử duyệt.
```jsx
history.back();
```
- `history.forward()`: Di chuyển người dùng đến trang tiếp theo trong lịch sử duyệt.
```jsx
history.forward();
```
- `history.go(number)`: Di chuyển người dùng đến một trang cụ thể trong lịch sử duyệt. number có thể là một số nguyên dương hoặc âm, ví dụ, history.go(-2) sẽ di chuyển người dùng đến trang 2 trước đó.
```jsx
history.go(-2);
```
- `history.pushState(state, title, url)`: Thêm một bản ghi mới vào lịch sử duyệt mà không làm tươi trang trang web. state là một đối tượng JavaScript, title là tiêu đề của trang (một chuỗi), và url là địa chỉ URL mới.
```jsx
history.pushState({ page: 1 }, "Title", "/page1");
```
- `history.replaceState(state, title, url)`: Thay đổi bản ghi hiện tại trong lịch sử duyệt mà không làm tươi trang trang web. Tham số giống như pushState.
```jsx
history.replaceState({ page: 2 }, "New Title", "/page2");
```
- `window.onpopstate`: Sự kiện được kích hoạt khi người dùng nhấn nút "Quay lại" hoặc "Tiến lên". Bạn có thể gán một hàm xử lý sự kiện cho onpopstate để xử lý các thay đổi trong lịch sử duyệt.
```jsx
window.onpopstate = function(event) {
  console.log("Location: " + document.location + ", State: " + JSON.stringify(event.state));
};
```

```
Các phương thức pushState và replaceState thường được sử dụng khi bạn muốn thay đổi URL mà không làm tươi trang toàn bộ trang web, giúp xây dựng các ứng dụng web đơn trang (Single Page Applications - SPAs) mà không tải lại trang.
```

Trong JavaScript, biến window là một biến toàn cục (global object) và là một phần của đối tượng Window. Đối tượng Window đại diện cho cửa sổ trình duyệt và cung cấp một số thuộc tính và phương thức để tương tác với cửa sổ trình duyệt đó.

Mọi biến toàn cục (global variable) và hàm mà bạn khai báo sẽ tự động trở thành thuộc tính và phương thức của đối tượng window. Điều này có nghĩa là bạn có thể truy cập chúng bằng cách sử dụng cú pháp window.variable hoặc window.function().

Ví dụ, nếu bạn khai báo một biến toàn cục như sau:
```jsx
var globalVariable = "Hello, World!";
```
Thì bạn có thể truy cập nó thông qua window như sau:

```jsx
console.log(window.globalVariable); // Hiển thị "Hello, World!"
Tương tự, nếu bạn khai báo một hàm toàn cục:

```jsx
function globalFunction() {
  console.log("This is a global function");
}
```
Thì bạn cũng có thể gọi nó bằng cách sử dụng window:

```jsx
window.globalFunction(); // Hiển thị "This is a global function"
```
Biến window rất hữu ích khi bạn muốn tương tác với cửa sổ trình duyệt, điều này bao gồm việc quản lý lịch sử duyệt, điều hướng, và các chức năng khác liên quan đến trình duyệt.

---

## Timer

Trong ứng dụng web, chúng ta có thể sử dụng sử dụng các function để thực thi những logic sau một khoảng thời gian, hoặc lặp đi lặp lại sau một khoảng thời gian.

### `setTimeout`

`setTimeout` được sử dụng để chạy một function sau một khoảng thời gian chờ đợi. Cú pháp của `setTimeout` như sau:

```jsx
setTimeout(function() {
	// logic here ...
}, 3000)
```

Tham số thứ 2 của `setTimeout` là thời gian chờ trước khi function được chạy. Thời gian được tính theo miliseconds: 1 second  = 1000 miliseconds

Để huỷ `setTimeout` trước khi function bên trong được chạy, ta có thê sử dụng function `clearTimeout` đối với giá trị trả về của `setTimeout`

```jsx
const timer = setTimeout(function() {
	console.log("Hello, World!");
}, 3000)

clearTimeout(timer)
```

### `setInterval`

Khá tương tự với `setTimeout`, điểm khác biệt của `setInterval` là thay vì thực hiện một logic sau khi thời gian kết thúc, `setInterval` sẽ thực hiện một logic lặp đi lặp lại sau mỗi khoảng thời gian.

```jsx
setInterval(function() {
	// logic here
}, 3000)
```

Tham số thứ 2 của `setInterval` cũng là thời gian tính theo đơn vị miliseconds.

Tương tự với `setTimeout`, để dừng lại vòng lặp interval, ta có thể sử dụng function `clearInterval` đối với giá trị trả về của `setInterval`

```jsx
const intervalTimer = setInterval(function() {
	console.log("Hello World");
}, 3000)

clearInterval(intervalTimer)
```
