```jsx
Câu 1: Để lắng nghe một event ta dùng?
A. io.addEvent(event)
B. io.emit(event)
C. io.listentEvent(event)
D. io.on(event)
The correct answer is: io.on(event)

Câu 2: Tại phía server, tạo event như sau:
io.emit('Hello', 'Hi')
Bên phía client lắng nghe sự kiện như thế nào?
A. io.on('Hi', data => {})
B. io.on('Hello', data => {})
C. io.emit('Hello', data => {})
D. io.connect('Hi', data => {})
The correct answer is: io.on('Hello', data => {})

Câu 3: Giao thức websocket chạy dựa trên giao thức nào?
A. TCP
B. FTP
C. HTTP
D. SMTP
The correct answer is: TCP

Câu 4: Kiểm tra trạng thái kết nối client trong socket ta sử dụng?
A. socket.status
B. socket.connected
C. socket.connect
D. socket.connection
The correct answer is: socket.connected

Câu 5: Để thiết lập custom namespaces ta sử dụng hàm nào?
A. io.newNamespace
B. io.of
C. Tất cả các đáp án trên đều đúng
D. io.custom
The correct answer is: io.of

Câu 6: Kết luận: "Một namespaces là 1 channel giao tiếp cho phép chúng ta phân tách logic ứng" đúng hay sai?
Hãy chọn một:
A. Đúng
B. Sai
=> A 

Câu 7: Khi muốn đăng ký vào 1 room có tên là "my room", ta sử dụng lệnh nào?
A. socket.join("my room");
B. socket.to("my room");
C. socket.login("my room");
D. socket.resigter("my room");
The correct answer is: socket.join("my room");

Câu 8: Để broadcasting hoặc emitting đến 1 room trong socket ta sử dụng lệnh nào?
A. io.join("some room").emit("some event");
B. io.from("some room").emit("some event");
C. io.send("some room").emit("some event");
D. io.to("some room").emit("some event");
The correct answer is: io.to("some room").emit("some event");

Câu 9: Kết luận sau đúng hay sai:
Trong Socket.io không thể broadcasting event đến nhiều room khác nhau. 
A. Đúng
B. Sai
=> B 

Câu 10: Để broadcast đến nhiều room ví dụ "room1", "room2", "room3" trong socket.io ta sử dụng cú pháp như thế nào
A. io.to("room1").to("room2").to("room3").emit("some event");
B. io.to("room1","room2","room3").emit("some event");
C. io.to("room1").and("room2","room3").emit("some event");
D. io.to("room1").and("room2").and("room3").emit("some event");
The correct answer is: io.to("room1").to("room2").to("room3").emit("some event");
```