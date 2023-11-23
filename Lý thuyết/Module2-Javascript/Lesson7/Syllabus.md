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

## Window Location & History

Object `window.location` và `window.history` có thể được sử dụng để lấy địa chỉ hiện tại của trang web hoặc sử dụng để điều hướng ứng dụng web sang các trang khác nhau.

Một số thuộc tính và phương thức bên trong object `location:`

- `location.href`: Lấy địa chỉ hiện tại của ứng dụng.
- `location.hostname`: Lấy tên miền của ứng dụng hiện tại.
- `location.pathname`: Lấy tên miền của ứng dụng (không bao gồm tên miền)
- `location.assign(<new_web_url>)`: Tải về một trang web khác, thay thế trang web hiện tại.

Một số phương thức bên trong `window.history`:

- `window.history.back()`: tương tự với việc người dùng sử dụng nút “back” của trình duyệt
- `window.history.forward()`: tương tự với việc người dùng sử dụng nút “forward” của trình duyệt.

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
