# Xây dựng API cho ứng dụng 4Films như sau:

4Films là một nền tảng về stream videos và films qua web ([https://4films.com](https://4films.com/)) và mobile app (4Films trên iOS và android). Người dùng khách (guest) có thể xem các bộ phim hoặc nội dung free tuy nhiên một số bộ phim độc quyền thì yêu cầu người dùng đăng ký tài khoản (member) với 4Films, admin của hệ thống (admin) có thể xem, thêm, sửa, xoá các bộ phim của nền tảng. Các luồng hoạt động cụ thể như sau:

### Người dùng khách (GUEST):

- Chỉ có thể truy cập các bộ phim được đánh dấu miễn phí.

### Người dùng với tài khoản thành viên (MEMBER):

- Để trở thành member bạn phải đăng ký với hệ thống thông qua API (username hoặc email đăng kí phải là duy nhất)
- Bạn phải đăng nhập với tài khoản đã đăng ký để truy cập các bộ phim trả phí

### Admin hệ thống (ADMIN):

- Được cấp sẵn tài khoản admin
- Có thể truy cập tất cả các bộ phim (cả miễn phí và trả phí)
- Có thể xem, thêm, sửa, xoá các bộ phim của nền tảng

### Nâng cao

- Khi người dùng đăng ký với hệ thống qua API, người dùng sẽ nhận được JWT token với thời gian expire ngắn (1 - 2m), người dùng sẽ gửi thêm 1 API kèm theo đoạn token để xác thực quá trình đăng ký

---

Dữ liệu mẫu được đính kèm bên dưới:
[data.json](data.json)
