```
Câu 1: Cho đoạn mã sau: 
try {
    try {
        throw new Error('oops');
    } catch (ex) {
        console.error('inner', ex.message);
    } finally {
        console.log('finally');
    }
} catch (ex) {
    console.error('outer', ex.message);
}
Kết quả của đoạn mã trên như thế nào?
A. inner oops
B. 'finally'
    'inner oops'
C. 'inner oops'
    'finally'
D. inner
The correct answer is: inner oops, finally

Câu 2: Cho đoạn mã sau
async function demo(isCondition){
    if (isCondition) return 2;
    return new Error("Error")
}
Kết luận: Đối tượng Error("Error") không được wapper trong reject, nó được wapprer trong resolve của funtion() đúng hay sai?
A. Đúng 
B. Sai 
=> A 

Câu 3: Cho đoạn mã sau:
try {
    try {
        throw new Error('oops');
    } catch (ex) {
        console.error('inner', ex.message);
    } finally {
        console.log('finally');
    }
} catch (ex) {
    console.error('outer', ex.message);
}
Kết quả của đoạn mã trên là gì?
A. "finally", "outer", "oops"
B. "inner", "oops", "finally"
C. "inner", "oops", "outer", "oops"
D. "inner", "oops", "finally", "outer", "oops"
The correct answer is: "inner" "oops" "finally" "outer" "oops"

Câu 4: Kết luận nào sau đây đúng về async function
Select one or more:

A. Khi khai báo bắt buộc phải có từ khóa async
B. async function giống function bình thường.
C. await chỉ được sử dụng trong async function
D. Giá trị trả về của async function là một promise
The correct answers are: Khi khai báo bắt buộc phải có từ khóa async, Giá trị trả về của async function là một promise, await chỉ được sử dụng trong async function

Câu 5: Kết luận nào sau đây đúng về Axios
A. Axios là ngôn ngữ lập trình frontend
B. Axios không hỗ trợ xác thực
C. Axios là một HTTP Client được viết dựa trên nền tảng Promise, dùng để hỗ trợ xây dựng các ứng dụng API.
D. Axios là một HTTP Client được viết dựa trên nền tảng Promise, dùng để hỗ trợ xây dựng các ứng dụng web server side rende
The correct answer is: Axios là một HTTP Client được viết dựa trên nền tảng Promise, dùng để hỗ trợ xây dựng các ứng dụng API.

Câu 6: 2 hàm để chạy mã bất đồng bộ trong JavaScript là gì?
Select one or more:
A. setInterval
B. delay
C. setTimeout
D. timeout
The correct answers are: setTimeout, setInterval

Câu 7: Có những cách xử ký bất đồng bộ nào?
Select one or more:
A. Dùng setTimeout
B. Dùng Async/Await
C. Dùng Promise
D. Dùng callback function
The correct answers are: Dùng callback function, Dùng Promise, Dùng Async/Await

Câu 8: Kết quả của chương trình sau:
```function message() {
      let result = 'first!';
      return new Promise((resolve, reject) => {
      setTimeout(() => resolve('done!'), 1000);
    });
}

message().then(result => {
     console.log(result)
})```
A. first
B. Không in ra gì
C. Error
D. done!
The correct answer is: done!

Câu 9: Kết quả chương trình sau:
```function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

function callMe() {
    console.log('I am callback function');
}

greet('Peter', callMe);```
A. I am callback function
B. Error
C. Hi Peter
D. Hi Peter
   I am callback function
The correct answer is:
   Hi Peter
   I am callback function

Câu 10: Kết quả chương trình sau:
```const p = new Promise((resolve, reject) => {
   reject(Error('The Fails!'))
});
p.catch(error => console.log(error.message))
p.catch(error => console.log(error.message))```
A. In ra message một lần
B. Không in ra gì
C. In ra message hai lần
D. Error
```