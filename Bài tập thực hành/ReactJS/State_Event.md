Bài tập thực hành. Hãy tạo ra ứng dụng đồi màu tín hiệu đèn giao thông với giao diện sau:

![Untitled](./bt-light-traffic.png)

- Có 3 loại đèn: đỏ, vàng, xanh
- Khi người dùng click “Next”, thực hiện chuyển màu theo thứ tự


Bài tập 1: Bộ đếm tương tác
- Mô tả: Tạo một ứng dụng hiển thị một bộ đếm và hai nút: một nút để tăng và một nút để giảm giá trị của bộ đếm.
- Yêu cầu:
	+ Sử dụng useState để quản lý giá trị của bộ đếm.
	+ Nút "Tăng" sẽ tăng giá trị lên 1 và nút "Giảm" sẽ giảm giá trị đi 1.
	+ Không cho phép giá trị của bộ đếm xuống dưới 0 (nghĩa là giá trị tối thiểu phải là 0).

Bài tập 2: Chuyển đổi giữa các tab
- Mô tả: Tạo một ứng dụng với 3 tab (Ví dụ: "Home", "About", "Contact"). Khi nhấn vào mỗi tab, nội dung tương ứng với tab đó sẽ được hiển thị.
- Yêu cầu:
	+ Sử dụng useState để quản lý trạng thái của tab đang được chọn.
	+ Khi nhấn vào một tab, chỉ hiển thị nội dung của tab đó và ẩn nội dung của các tab còn lại.
	+ Mặc định, tab "Home" sẽ được chọn và hiển thị đầu tiên.
	
Bài tập 3: Ẩn hiện mật khẩu
- Mô tả: Tạo một form đăng nhập với trường nhập mật khẩu, có nút "Hiển thị/Ẩn" mật khẩu. Khi người dùng nhấn nút, mật khẩu sẽ được hiển thị hoặc ẩn đi.
- Yêu cầu:
	+ Sử dụng useState để quản lý trạng thái hiển thị của mật khẩu.
	+ Cho phép người dùng nhấn vào nút để chuyển đổi giữa việc hiển thị hoặc ẩn mật khẩu.
	+ Mật khẩu sẽ được hiển thị dưới dạng ký tự thông thường hoặc dấu sao (*) tùy thuộc vào trạng thái.

Bài tập 4: Trình xem ảnh
- Mô tả: Tạo một ứng dụng xem ảnh. Người dùng có thể nhấn vào nút "Tiếp theo" hoặc "Quay lại" để chuyển sang ảnh kế tiếp hoặc quay lại ảnh trước đó trong danh sách ảnh.
- Yêu cầu:
	+ Sử dụng useState để quản lý trạng thái hiện tại của ảnh đang hiển thị.
	+ Cho phép người dùng nhấn "Tiếp theo" để chuyển sang ảnh kế tiếp và "Quay lại" để xem ảnh trước đó.
	+ Khi ở ảnh đầu tiên hoặc cuối cùng, vô hiệu hóa các nút tương ứng.
