```
Câu 1. Express là framework?
A. Đúng 
B. Sai 
=> A 

Câu 2: Cấu trúc của dự án express thường có các thành phần chính nào?
Select one or more:
A. Thư mục test: Chứa source code dành cho việc testing
B. Thư mục views là nơi chứa các file html để hiển thị giao diện.
C. File index.js(hoặc app.js): Đây là file chúng ta sẽ thực thi dự án.
D. Thư mục src: Chứa toàn bộ source code của dự án
The correct answers are: File index.js(hoặc app.js): Đây là file chúng ta sẽ thực thi dự án., Thư mục test: Chứa source code dành cho việc testing, Thư mục src: Chứa toàn bộ source code của dự án

Câu 3: Mã status 200 trong HTTP Response có ý nghĩa gì?
A. Request đã được server tiếp nhận, hiểu và xử lý thành công.
B. Cú pháp không chính xác hoặc không được thực hiện.
C. Lỗi sai đường dẫn.
D. Client cần có thêm action để hoàn thành request.
The correct answer is: Request đã được server tiếp nhận, hiểu và xử lý thành công.

Câu 4: Chọn những phát biểu đúng vể ejs
Select one or more:
A. app.set('view engine', 'ejs');  dùng để set ejs cho ứng dụng
B. Chúng ta nhúng JS vào trong file ejs bằng cú pháp: <% <js_code> %>
C. EJS chỉ có thể dùng để view giao diện. không thể nhúng code javascript vào.
D. EJS viết tắt của Embedded JavaScript – nhúng javascript. Ejs sử dụng JS cơ bản để nhúng vào trong code HTML nhằm mục đích tạo mã đánh dấu (markup) – từ đó tạo ra file .HTML khi chạy
The correct answers are: Chúng ta nhúng JS vào trong file ejs bằng cú pháp: <% <js_code> %>, app.set('view engine', 'ejs');  dùng để set ejs cho ứng dụng, EJS viết tắt của Embedded JavaScript – nhúng javascript. Ejs sử dụng JS cơ bản để nhúng vào trong code HTML nhằm mục đích tạo mã đánh dấu (markup) – từ đó tạo ra file .HTML khi chạy

Câu 5: Những phát biểu đúng về Routing trong ExpressJS
Select one or more:
A. Nếu không có đường dẫn trùng khớp. Routing sẽ tìm đường dẫn gần trùng khớp nhất để xử lý.
B. Trong express, Route có cấu trúc như sau
```app.METHOD(PATH, HANDLER)```
C. Các phương thức phổ biển đó là GET, POST, PUT, PATCH, DELETE
D. Routing (định tuyến) là một khái niệm nói đến việc xác định cách mà ứng dụng phản hồi yêu cầu của khách hàng (client request) đến một điểm cuối cụ thể (endpoint), endpoint này thường là một URI hoặc một đường dẫn (Path) với một Request method (POST, PUT, GET, …) cụ thể.
The correct answers are: Routing (định tuyến) là một khái niệm nói đến việc xác định cách mà ứng dụng phản hồi yêu cầu của khách hàng (client request) đến một điểm cuối cụ thể (endpoint), endpoint này thường là một URI hoặc một đường dẫn (Path) với một Request method (POST, PUT, GET, …) cụ thể., Các phương thức phổ biển đó là GET, POST, PUT, PATCH, DELETE, Trong express, Route có cấu trúc như sau
```app.METHOD(PATH, HANDLER)```

Câu 6: Chọn phát biểu đúng về static file trong Express.
Select one or more:
A. Cú pháp: express.static(root, [options])
B. Ta có thể gọi nhiều lần middleware express.static để sử dụng cho nhiều thư mục chứa nội dung tĩnh khác nhau (gọi theo thứ tự).
C. Static file không thay đổi nội dung khi người dùng requests nên chỉ cần trả về file tĩnh
D. Có thể trả về file được cập nhập theo nội dung mà Requets cung cấp.
The correct answers are: Static file không thay đổi nội dung khi người dùng requests nên chỉ cần trả về file tĩnh, Cú pháp: express.static(root, [options]), Ta có thể gọi nhiều lần middleware express.static để sử dụng cho nhiều thư mục chứa nội dung tĩnh khác nhau (gọi theo thứ tự).

Câu 7: Chọn những phát biểu đúng về đối tượng Response trong ExpressJS.
Select one or more:
A. res.end([data] [, encoding])
Phương thức này được sử dụng để kết thúc tiến trình xử lý Response 
B. res.attachment([filename])
Phương thức này được sử dụng để gửi một File dưới dạng như là một Attachment trong HTTP Response
C. Đối tượng Response biểu diễn HTTP Response mà ứng dụng Express gửi phản hồi khi nhận một HTTP Request.
D. res.attachment([filename])
Phương thức này được sử dụng để gửi một File dưới dạng như là một Attachment trong HTTP Response
The correct answers are: res.end([data] [, encoding])
Phương thức này được sử dụng để kết thúc tiến trình xử lý Response, Đối tượng Response biểu diễn HTTP Response mà ứng dụng Express gửi phản hồi khi nhận một HTTP Request., res.attachment([filename])
Phương thức này được sử dụng để gửi một File dưới dạng như là một Attachment trong HTTP Response

Câu 8: Controller trong mô hình MVC có nhiệm vụ gì?
A. Hiển thị dữ liệu ra view
B. Tiếp nhận request và xử lý logic, là trung gian giữa View và Model
C. Điều hướng request
D. Làm việc với CSDL
The correct answer is: Tiếp nhận request và xử lý logic, là trung gian giữa View và Model

Câu 9: Luồng thực thi đúng trong mô hình Client - Server?
Select one or more:
A. Client ngắt kết nối khi server ngắt kết nối
B. Server tiếp nhận requests và xử lý logic, kết nối đến cơ sở dữ liệu (Database) để lấy dữ liệu và trả về 1 http response cho client.
C. Đầu tiên client sẽ gửi 1 http requests tới web server bằng cách thao tác trên trình duyệt (Truy cập tên miền trỏ tới server, login tài khoản ...).
D. Client nhận dữ liệu từ http response và hiển thị lên trình duyệt cho người dùng.
The correct answers are: Đầu tiên client sẽ gửi 1 http requests tới web server bằng cách thao tác trên trình duyệt (Truy cập tên miền trỏ tới server, login tài khoản ...)., Server tiếp nhận requests và xử lý logic, kết nối đến cơ sở dữ liệu (Database) để lấy dữ liệu và trả về 1 http response cho client., Client nhận dữ liệu từ http response và hiển thị lên trình duyệt cho người dùng.

Câu 10: Mã 500 có ý nghĩa là gì?
A. Lỗi phía Client
B. Lỗi phía Server
C. Lỗi router
D. Chuyển hướng thành công
The correct answer is: Lỗi phía Server

Câu 11: Mã status 200 trong HTTP Response có ý nghĩa gì?
A. Request đã được server tiếp nhận, hiểu và xử lý thành công.
B. Lỗi sai đường dẫn.
C. Client cần có thêm action để hoàn thành request.
D. Cú pháp không chính xác hoặc không được thực hiện.
The correct answer is: Request đã được server tiếp nhận, hiểu và xử lý thành công.

Câu 12: Luồng thực thi đúng trong mô hình Client - Server: 
+Đầu tiên client sẽ gửi 1 http requests tới web server bằng cách thao tác trên trình duyệt (Truy cập tên miền trỏ tới server, login tài khoản ...).
+Server tiếp nhận requests và xử lý logic, kết nối đến cơ sở dữ liệu (Database) để lấy dữ liệu và trả về 1 http response cho client.
+Client nhận dữ liệu từ http response và hiển thị lên trình duyệt cho người dùng.
A. Đúng 
B. Sai 
=> A 

Câu 13: Chọn những phát biểu đúng về requets trong ExpressJS
Select one or more:
A. Có 2 cách để lấy dữ liệu người dùng gửi đến là req.params, req.query
B. Có 3 cách để lấy dữ liệu người dùng gửi đến là req.params, req.query, req.body
C. req.is(type). Phương thức này trả về true nếu trường Content-Type của Request đang đến là kết nối với kiểu MIME Type đã được xác định bởi tham số type.
D. Đối tượng Request của Express đại diện cho HTTP Request, chứa toàn bộ các thông tin mà client gủi lên server, bao gồm rất nhiều thứ như url, method, form data, header, ... Khi client truy cập vào 1 route mà server đã tạo đồng nghĩa với việc client đã gửi cho server 1 request
The correct answers are: Đối tượng Request của Express đại diện cho HTTP Request, chứa toàn bộ các thông tin mà client gủi lên server, bao gồm rất nhiều thứ như url, method, form data, header, ... Khi client truy cập vào 1 route mà server đã tạo đồng nghĩa với việc client đã gửi cho server 1 request, Có 3 cách để lấy dữ liệu người dùng gửi đến là req.params, req.query, req.body, req.is(type)
Phương thức này trả về true nếu trường Content-Type của Request đang đến là kết nối với kiểu MIME Type đã được xác định bởi tham số type. 

Câu 14: Chọn những phát biểu đúng về đối tượng Response trong ExpressJS.
Select one or more:
A. Đối tượng Response biểu diễn HTTP Response mà ứng dụng Express gửi phản hồi khi nhận một HTTP Request.
B. res.attachment([filename])
Phương thức này được sử dụng để gửi một File dưới dạng như là một Attachment trong HTTP Response
C. res.download(path [, filename] [, fn])
Phương thức này được sử dụng để xóa các Cookie cụ thể được xác định bởi tham số name
D. res.end([data] [, encoding])
Phương thức này được sử dụng để kết thúc tiến trình xử lý Response. 
The correct answers are: Đối tượng Response biểu diễn HTTP Response mà ứng dụng Express gửi phản hồi khi nhận một HTTP Request., res.attachment([filename])
Phương thức này được sử dụng để gửi một File dưới dạng như là một Attachment trong HTTP Response, res.end([data] [, encoding])
Phương thức này được sử dụng để kết thúc tiến trình xử lý Response. 

Câu 15: Chọn câu đúng về Middleware trong ExpressJS
A. Chỉ truy cập được vào res.
B. Truy cập được cả req và res có thể chuyển đến middleware function tiếp bằng next().
C. Chỉ truy cập được req hoặc res có thể chuyển đến middleware function tiếp bằng next().
D. Chỉ truy cập được vào req.
The correct answer is: Truy cập được cả req và res có thể chuyển đến middleware function tiếp bằng next().

Câu 16: Cookie được lưu trữ ở đâu?
A. Lưu trữ ở trình duyệt
B. Lưu trữ trong database
C. Lưu trữ ở bộ nhớ tạm của server.
D. Không được lưu trữ.
The correct answer is: Lưu trữ ở trình duyệt

Câu 17: Đâu là những đặc điểm của session?
Select one or more:
A. Được lưu trữ ở server
B. Cùng với cookie là 1 cặp theo kiểu 1:1. nghĩa là 1 session map với 1 cookie
C. Được lưu trữ ở trình duyệt
D. Có thể lưu trữ nhiều data.
The correct answers are: Được lưu trữ ở server, Cùng với cookie là 1 cặp theo kiểu 1:1. nghĩa là 1 session map với 1 cookie, Có thể lưu trữ nhiều data.

Câu 18: Đọan code sau được dùng để làm gì?
const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

A. Đặt 1 Application-level middleware để log ra thời gian hiện tại và chuyển đến middleware tiếp theo.
B. Đặt 1 Application-level middleware để log ra thời gian hiện tại.
C. Đặt 1 Application-level middleware 
D. Đặt 1 Router-level middleware để log ra thời gian hiện tại.
The correct answer is: Đặt 1 Application-level middleware để log ra thời gian hiện tại và chuyển đến middleware tiếp theo.

Câu 19: serve-static là 1 built-in middleware?
A. Đúng 
B. Sai 
=> A 

Câu 20: Cú pháp để dùng body-parser là?
A. 
import body-parser from body-parser;
app.use(bodyParser.json())
B. 
import body-parser from 'body-parser';
app.use(bodyParser.json());
C. 
import body-parser from 'body-parser';
app.use(bodyParser.json)
D. 
import body-parser;
app.use(bodyParser.json())
The correct answer is:
import body-parser from 'body-parser';
app.use(bodyParser.json());
```