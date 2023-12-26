```
Câu 1. Định nghĩa nào sau đây là đúng với Reactjs?
A. Reactjs là một ngôn ngữ lập trình được phát triển bởi Facebook.
B. Reactjs là một thư viện Javascript được phát triển bởi Facebook.
C. Reactjs là một ngôn ngữ lập trình được phát triển bởi Google.
D. Reactjs là một thư viện Javascript được phát triển bởi Google.
=> B

Câu 2. Câu nào sau đây là đúng về Reactjs?
A. Reactjs tạo nên giao hiện hướng đến backend và chỉ tập trung cách load dữ liệu.
B. Reactjs tạo nên giao hiện hướng đến backend và chỉ tập trung cách xử lí dữ liệu.
C. Reactjs tạo nên giao hiện frontend và chỉ tập trung xử lí cách load dữ liệu.
D. Reactjs chỉ dùng tạo 
=> A

Câu 3. Chọn đáp án sai: Tính năng của Reactjs là:
A. Khả năng load dữ liệu nhanh.
B. Load lại toàn bộ dữ liệu.
C. Đóng gói và quản lí theo logic component.
D. Học một lần, viết mọi nơi.
=> B

Câu 4. Cần tải nodejs để lập trình với Reactjs
A. Đúng
B. Sai
=> A

Câu 5. Lệnh được sử dụng trong Reactjs code snippets dùng để định nghĩa nhanh 1 component là:
A. rcs
B. rrs
C. rcc
D. crc
=> C

Câu 6. Phím tắt để mở cửa sổ Terminal là
A. Ctrl + Alt + ~
B. Ctrl + ~
C. Alt + ~
D. Shift + ~
=> B

Câu 7. Cho ba lệnh sau:
1- npm start
2- npm install -g create-react-app
3- create-react-app my-app
Thứ tự các dòng lệnh dùng để tạo và chạy ứng dụng reacjs có tên my-app là.
A. 1, 2, 3
B. 1, 3, 2
C. 2, 3, 1
D. 2, 1, 3
=> C

Câu 8. Sau khi vừa khởi tạo một project, file App.js được chứa ở thư mục nào?
A. src
B. public
C. node-modules
D. scripts
=> A

Câu 9. Sau khi vừa khởi tạo một project, file index.html được chứa ở thư mục nào?
A. src
B. public
C. node-modules
D. scripts
=> B

Câu 10. Có bao nhiêu cách định nghĩa một component?
A. 1
B. 2
C. 3
D. 4
=> D

Câu 11. Cách khai báo function One() kiểu Functional Component
A. function One() = {}
B. const One = () => {}
C. class One extends React.Component {}
D. const One = function() {}
=> D

Câu 12: hàm Hello() được định nghĩa theo kiểu...
const Hello = () => {
    return (
        <div>
            <h1>Helllo</h1>
        </div>
    )
}
A. Functional Component
B. Class Component
C. Anonymous function
D. Arrow function ( ES6 )
=> D

Câu 13: 2 cách chèn thẻ component có tên MyComponent là
A. <MyComponent />
   <MyComponent><MyComponent />
B. <MyComponent />
   <MyComponent></ MyComponent>
C  </ MyComponent>
   <MyComponent></ MyComponent>
=> B

Câu 14: Cách trả về 2 thẻ
<h1>Noi dung 1</h1>
<h1>Noi dung 2</h1>

A. return {
    <h1>Noi dung 1</h1>
    <h1>Noi dung 2</h1>
}
B. return (
    <h1>Noi dung 1</h1>
    <h1>Noi dung 2</h1>
)
C. return (
    <div>
        <h1>Noi dung 1</h1>
        <h1>Noi dung 2</h1>
    </div>
)
D. return {
    <div>
        <h1>Noi dung 1</h1>
        <h1>Noi dung 2</h1>
    </div>
}
=> C 

Câu 15. Cú pháp của props?
A. this.props.name
B. this.prop.name
C. {this.props.name}
D. {this.prop.name}
=> C

Câu 16. Hàm có chức năng tương tự như array là...
A. state
B. map
C. props
D const
=> B 

Câu 17. Câu nào sau đây là đúng khi nói về props?
A. props chỉ cho phép truyền giá trị vào các components
B. props chỉ cho phép truyền tham số vào các components
C. props chỉ chứa thuộc tính của các components, không cho phép truyền bất cứ gì từ bên ngoài vào
D. props cho phép truyền các giá trị và tham số từ bên ngoài vào trong các components
=> D 

Câu 18. Cho các số từ 1 -> 10, yêu cầu xuất ra màn hình các số đó với hàm map. Chỗ trống là?
const mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const so = ........................;
function App() {
    return (
        <div className="App"> {so} </div>
    );
}
A. mang.map((x) => (<p>{x}</p>))
B. array.map((x) => (<p>{array[x]}</p>))
C. map.mang[x](() => (<p>{x}</p>))
D. map.array[x](() => (<p>{array[x]}</p>))
=> A 

Câu 19. Xuất ra màn hình tên của 3 môn học sử dụng props. Điền vào chỗ trống.
class Mon extends React.Component {
    render() { 
        return ({this.props.name})
    }
};
class App extends React.Component {
    render() {
        return ( <div className="App">..............</div>);
    }
}
A. <Mon "Toan" />
   <Mon "Van" />
   <Mon "Anh" />
B. <Mon props = "Toan" />
   <Mon props = "Van" />
   <Mon props = "Anh" />
C. <Mon name = "Toan" />
   <Mon name = "Van" />
   <Mon name = "Anh" />
D. <Mon = "Toan" />
   <Mon = "Van" />
   <Mon = "Anh" />
=> C 

Câu 20. Hàm có phương tức hoạt động tương tự array là:
A. state
B. props
C. map
D. bind
=> C

Câu 21. <button onclick="xinchao()">Ấn tui đi</button>
Button trên nếu được viết trong function Reactjs thì được viết là:
A. <button onclick="function xinchao()">Ấn tui đi</button>
B. <button onClick={xinchao()}>Ấn tui đi</button>
C. <button onClick=xinchao()">Ấn tui đi</button>
D. <button onClick={xinchao}>Ấn tui đi</button>
=> D 

Câu 22. Hãy chọn những câu đúng:
A. React tạo ra DOM ảo
B. React không sử dụng DOM ảo mà chỉ dùng DOM thật
C. React sử dụng DOM ảo để update nhanh hơn
D. DOM có cấu trúc dạng cây
=> C, D

Câu 23. Arrow function là cú pháp thuộc về
A. ES5
B. ES6
C. ES4
D. ES7
=> B 

Câu 24. Trong Reactjs, properties được viết tắt bằng prop
A. Đúng
B. Sai
=> A

Câu 25. Component là thẻ html ta tự định nghĩa
A. Đúng
B. Sai
=> A

Câu 26. Những câu sai là...
A. Có thể chèn một link ảnh bằng props
B. props không thể chèn một biến số
C. map() không dùng cho mảng chỉ chứa một phần tử
D. JSX được nhận biết bằng {}
=> B, C

Câu 27. Trong quá trình convert một web bất kì thành React web, khi thêm các đường link vào file index.html chính của mình thì chèn ở...
A. Đâu cũng được
B. Phía trên cùng thẻ <head>
C. Ngay sau <meta name="description" content="Web site created using create-react-app" />
D. Phía sau <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
=> D 

Câu 28. Câu lệnh dùng để chạy chương trình reactjs là:
A. npm start
B. npm run
C. npm run start
D. npm server
=> A 

Câu 29. Từ nào sau đây dùng để chỉ Vòng đời của component ?
A. Lifecycle
B. Lifecircle
C. Componentcycle
D. Component-life
=> A

Câu 30. Điểm khác nhau giữ props và state:
A. props không thể thay đổi, state thì có thể thay đổi
B. props có thể thay đổi, state thì không thể thay đổi
C. state chỉ dùng trong Comp tạo ra nó, trái lại với props
D. props chỉ dùng trong Comp tạo ra nó, trái lại với state

Câu 31. Câu lệnh dùng để cài đặt router dom là
A. npm install react-router-dom
B. npm install router-dom
C. npm install reactjs-router-dom
D. npm install dom-react-router
=> A 

Câu 32. DOM được sử dụng trong React là
A. DOM ảo
B. DOM thật
C. sử dụng hình thức khác thay DOM
D. không sử dụng DOM

Câu 33. Chèn style { margin-top: 10px } vào tag trong Reactjs có cú pháp:
A. <div style={{marginTop: '10px'}}>...</div>
B. <div style={{margin-top: '10px'}}>...</div>
C. <div style={{marginTop, '10px'}}>...</div>
D. <div style="marginTop: '1px' ">...</div>
=> A

Câu 34. Thẻ được dùng như thẻ <a> trong React Router để điều hướng là
A. <Link to="/"></Link>
B. <nav></nav>
C. <a href="/"></a>
D. <NavLink href="/">Home</NavLink>
=> A

Câu 35. 
(1)DOM HTML có cấu trúc dạng cây
(2)DOM ảo được React sử dụng free
(3)DOM là viết tắt của Document object model
Số câu đúng là:
A. 0
B. 1
C. 2
D. 3
=> D 

Câu 36. Truyền giá trị idExample cho tham số id và titleExample vào tham số title cho URL
A. URL/?id=idExample&title=titleExample
B. URL//id=idExample&title=titleExample
C. URL/?id=idExample?title=titleExample
D. URL/id=idExample&title=titleExample
=> A 

Câu 37. Local mặc định của một project reactjs được khởi tạo là localhost:____
A. 3000
B. 4000
C. 8080
D. 3030
=> A 

Câu 38. Một Functional Component buộc phải return về React element để trở thành một component hợp lệ.
A. Đúng 
B. Sai 
=> A 

Câu 39. Chọn các câu đúng?
A. Reactjs là một ngôn ngữ lập trình frontend
B. DOM ảo do React sáng lập và sử dụng
C. Hooks ra đời vào năm 2018
D. constructor không được sử dụng trong functional components
E. Trỏ vào một thư mục bao bên ngoài thư mục/tệp hiện tại, gõ move ../
=> C, D 

Câu 40. Đâu không phải là một hook có sẵn trong ReactJS?
A. useState
B. useEffect
C. useMemory
D. useCallback
=> C

Câu 41. Hooks được dùng trong
A. class components
B. functional components
C. cả 2
D. lúc dev muốn dùng :v

Câu 42. ... được dùng để thao tác với các states trong functional components
A. useState
B. this.state
C. setState
D. this.state.bind(this)
=> A

Câu 43. Khác nhau cơ bản giữa functional components và class components là:
A. constructor
B. hooks
C. return
D. render
E. nhận tham số
=> A, B, D 
```