Cho một ứng dụng như sau:

- Hệ thống gồm các user như sau:
    
    ```jsx
    [
      {username: 'alice', apiKey: 'alice@123'},
      {username: 'bob', apiKey: 'bob@123'},
      {username: 'charlie', apiKey: 'charlie@123'}
    ]
    ```
    
- Hệ thống có các resource gồm: Student, Teacher và Subject. Các API được viết theo chuẩn REST.

---

Tasks:

- Viết một middleware log lại các request đến hệ thống.
- Để truy cập vào các resource, mỗi request cần phải được đính kèm API key trên đường dẫn. API key phải nằm trong danh sách user phía trên.
- Tạo một API mới là `/system/statistic` . Thực hiện việc đếm số lần truy cập vào các resource của các users. Ví dụ với kết quả trả về như sau:
    
    ```jsx
    [
      {user: 'alice', student: 5, teacher: 1, subject: 0},
      {user: 'bob', student: 10, teacher: 1, subject: 8},
    ]
    ```