```
Câu 1:Câu lệnh lặp For trong JavaScript có dạng nào sau đây?
A. for (biến = Giá trị đầu; Điều kiện; Giá trị tăng)
B. for (biến = Giá trị đầu; Giá trị tăng; điều kiện)
C. for (biến = Điều kiện; Giá trị tăng; Giá trị cuối)
D. Tất cả các dạng trên.
Chọn đáp án A

Câu 2:Thực hiện kiểm tra nếu biến i không bằng 5, Câu lệnh nào là đúng?
A. if (i != 5)
B. if i =! 5 then
C. if i <> 5
D. if (i <> 5)
Chọn đáp án A

Câu 3: Kết quả của đoạn code sau là:
    var a = [1, 2, 3];
    var b = [1, 2, 3];
    var c = '1,2,3';
    console.log(a == c);
    console.log(b == c);
    console.log(a == b);
A. true, true, false
B. true, true, true
C. true, false, false
D. false, false false

Chọn đáp án A

Câu 4: Kết quả đoạn code sau là:
    var a = [9];
    var b = [10];
    console.log(a == 9);
    console.log(b == 10);
    console.log(a < b);
A. true true true
B. false false false
C. true true false
D. false false true
Chọn đáp án C

Câu 5: Kết quả của đoạn code sau là:
    let i = 0;
    const arr = new Array(5);
    arr.forEach(() => i++);
    console.log(i);
A. 0
B. 1
C. 4
D. 5

Chọn đáp án A

Câu 6: Hàm greatestNumberInArray dưới đây có get được phần tử lớn nhất cho mọi array không?
function greatestNumberInArray(arr) {
            let greatest = 0;
            for (let i = 0; i < arr.length; i++) {
                if (greatest < arr[i]) {
                    greatest = arr[i];
                }
            }
            return greatest;
        }
A. Yes
B. No

Chọn đáp án B

Câu 7: Hai cách a và b dưới đây đều trả về một object có cùng thuộc tính và giá trị. Theo bạn thì cách nào tối ưu hơn?
    const arr = [1, 2, 3];
    const a = arr.reduce((acc, el, i) => ({ ...acc, [el]: i }),{});
    const b = {};
    for (let i = 0; i < arr.length; i++) {
        b[arr[i]] = i;
    }
A. a
B. b
Chọn đáp án B

Câu 8: Kết quả là:
const arr = [
    x => x * 1,
    x => x * 2,
    x => x * 3,
    x => x * 4
];
console.log(arr.reduce((agg, el) => agg + el(agg), 1));
A. 1
B. 60
C. 100
D. 120
Chọn đáp án D

Câu 9: Cho đoạn code sau. Kết quả là:
    const ar = [5, 1, 3, 7, 25];
    const ar1 = ar;
    console.log(ar1.sort());
    ([5, 25].indexOf(ar[1]) != -1 && console.log(ar.reverse())) || (ar[3] == 25 && console.log(ar));
    console.log(ar1);
A. [1, 3, 5, 7, 25] [7, 5, 3, 25, 1] [1, 25, 3, 5, 7] [1, 25, 3, 5, 7]
B. [1, 25, 3, 5, 7] [5,1,3,7,25]
C. [1, 25, 3, 5, 7] [7, 5, 3, 25, 1] [7, 5, 3, 25, 1] [7, 5, 3, 25, 1]
D. An error is thrown
Chọn đáp án C

Câu 10: Cho đoạn code sau. Kết quả là:
    const arr1 = ['a', 'b', 'c'];
    const arr2 = ['b', 'c', 'a'];
    console.log(
        arr1.sort() === arr1,
        arr2.sort() == arr2,
        arr1.sort() === arr2.sort()
    );
A. true true true
B. true true false
C. false false false
D. true false true
Chọn đáp án B

Câu 11: Cho đoạn code sau. Kết quả là:
    function ArrayBoolean() {
        if ([] == true && [1] == true) return [true, true];
        else if ([] == true && [1] == false) return [true, false];
        else if ([] == false && [1] == true) return [false, true];
        else return [false, false];
    }
    ArrayBoolean();
A. [true, true]
B. [true, false]
C. [false, true]
D. [false, false]
Chọn đáp án C

Câu 12: Cho đoạn code sau. Kết quả là:
    let dog = {
        breed: 'Border Collie',
        sound: 'Wooh',
        getBreed: () => {
        return this.breed;
    },
    getSound: function() {
        return this.sound;
        }
    };
    console.log(dog.getBreed(), dog.getSound());
A. Border Collie, Wooh
B. Border Collie, undefined
C. undefined, Wooh
D. undefined, undefined
Chọn đáp án C

Câu 13:
Đoạn code sau sẽ cho kết quả như thế nào?
    const person = { name: 'duthaho' };
    function sayHi(age) {
        return `this.name is ${age}`;
    }
    console.log(sayHi.call(person, 69));
    console.log(sayHi.bind(person, 69));
A. undefined is 69 duthaho is 69
B. function function
C. duthaho is 69 duthaho is 69
D. duthaho is 69 function
Chọn đáp án D

Câu 14: Kết quả đoạn code sau là:
function withVar() {
    const b = () => a;
    var a = 24;
    return b;
}
function withLet() {
    const b = () => a;
    let a = 24;
    return b;
}
function changingValue() {
    let a = 24;
    const b = () => a;
    a = 42;
    return b;
}
A. undefined Error 42
B. 24 Error 24
C. 24 24 42
D. undefined Error 24
Chọn đáp án C

Câu 15: Kết quả đoạn code sau là?
    let a = new Date('2019,1,1').toLocaleDateString();
    let b = new Date(2019, 1, 1).toLocaleDateString();
    console.log(a, b);
A. 1/1/2019 2/1/2019
B. 1/1/2019 1/1/2019
Chọn đáp án A 

Câu 16:Kết quả của câu lệnh sau:
    console.log(fetch);
A. The fetch function
B. A reference error
C. It depends
Chọn đáp án C

Câu 17: Cho đoạn code sau, kết quả là:
    const a = 0.1;
    const b = 0.2;
    const c = 0.3;
    console.log(a + b === c);
A. True
B. False
Chọn đáp án B

Câu 18: Đoạn code sau sẽ có kết quả là:
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    const ti = new Person('du', 'ti');
    const teo = Person('du', 'teo');
    console.log(ti);
    console.log(teo);
A. Person {firstName: "du", lastName: "ti"} undefined
B. Person {firstName: "du", lastName: "ti"} Person {firstName: "du", lastName:"teo"}'
C. Person {firstName: "du", lastName: "ti"} {}
D. Person {firstName: "du", lastName: "ti"} ReferenceError
Chọn đáp án A

Câu 19: Đoạn code sau sẽ cho kết quả:
    bar();
    var bar;
    function bar() {
        console.log('first');
    }
    bar = function () {
        console.log('second');
    };
    bar();
    foo();
    function foo() {
        console.log(1);
    }
    var foo = function () {
        console.log(2);
    };
    function foo() {
        console.log(3);
    }
    foo();
A. second first 1 3
B. first second 3 2
C. second first 3 3
D. first second 3 3
Chọn đáp án B

Câu 20: Cho đoạn code sau, kết quả là:
    function sayHi() {
        return (() => 0)();
    }
    console.log(typeof sayHi());
A. object
B. number
C. function
D. undefined
Chọn đáp án B

Câu 21: Đoạn code sau sẽ có kết quả:
    const a = {
        stringField: 'Joe',
        numberField: 123,
        dateField: new Date('1995-12-17T03:24:00'),
        nestedField: { field: 'Nested' }
    };
    const b = JSON.parse(JSON.stringify(a));
    console.log(
        a.stringField === b.stringField,
        a.numberField === b.numberField,
        a.dateField === b.dateField,
        a.nestedField.field === b.nestedField.field
    );
A. true true true true
B. true true true false
C. true true false true
D. false false false false
Chọn đáp án C

Câu 22: Đoạn code trên sẽ có kết quả là:
    const notifications = 1;
    console.log(
        `You have notifications {notifications !== 1 && 's'}`
    );
A. You have 1 notification
B. You have 1 notifications
C. You have 1 notification false
Chọn đáp án A

Câu 23:Cho đoạn code sau, kết quả sẽ là:
    const compare = a => a === a;
    console.log(compare(null));
    console.log(compare(undefined));
    console.log(compare(NaN));
    console.log(compare([NaN]));
A. true true true true
B. true false true true
C. true true false true
D. true true false false
Chọn đáp án C

Câu 24: Cho đoạn code sau, kết quả là:
    const n = 5;
    console.log(1..n); // ?
A. [1, 2, 3, 4, 5]
B. undefined
C. Syntax error
Chọn đáp án B

Câu 25: Cho đoạn code sau, kết quả là:
    const a = {
        stringField: 'Joe',
        nestedField: { field: 'Nested' },
        functionField: () => 'aReturn'
    };
    const b = Object.assign({}, a);
    b.stringField = 'Bob';
    b.nestedField.field = 'Changed';
    b.functionField = () => 'bReturn';
    console.log(
        a.stringField,
        a.nestedField.field,
        a.functionField()
    );
A. Joe Nested aReturn
B. Bob Changed bReturn
C. Joe Changed aReturn
D. Bob Nested bReturn
Chọn đáp án C

Câu 26: Cho đoạn code sau, kết quả là:
    const url = 'quiz.duthaho.com';
    const { length: ln, [ln - 1]: domain = 'quiz' } = url.split('.').filter(Boolean);
    console.log(domain);
A. "quiz"
B. "duthaho"
C. "com"
D. undefined
Chọn đáp án C

Câu 27: Cho đoạn code, kết quả là
    const obj = { a: 'one', b: 'two', a: 'three' };
    console.log(obj);
A. {a: "one", b: "two" }
B. {b: "two", a: "three" }
C. {a: "three", b: "two" }
C. {a: "three", b: "two" }
Chọn đáp án C

Câu 28: Kết quả của đoạn code là:
    const user = {
        name: 'lao Hac',
        age: 69,
        pet: {
            type: 'cho',
            name: 'vang'
        }
    };
    Object.freeze(user);
    user.pet.name = 'shiba';
    console.log(user.pet.name);
A. shiba
B. vang
C. An error is thrown
Chọn đáp án A

Câu 29: Đoạn code sau, kết quả sẽ là:
    const obj = {
        1: 1,
        2: 2,
        3: 3
    };
    console.log(Object.keys(obj), Object.values(obj));
A. [1, 2, 3] ["1", "2", "3"]
B. ["1", "2", "3"] [1, 2, 3]
C. ["1", "2", "3"] ["1", "2", "3"]
Chọn đáp án B

Câu 30: Cho đoạn code sau, kết quả sẽ là:
    const obj = { 1: 'a', 2: 'b', 3: 'c' };
    const set = new Set([1, 2, 3, 4, 5]);
    obj.hasOwnProperty('1');
    obj.hasOwnProperty(1);
    set.has('1');
    set.has(1);
A. false true false true
B. false true true true
C. true true false true
D. true true true true
Chọn đáp án C

Câu 31: Đoạn code sẽ cho kết quả
    const a = {};
    const b = { key: 'b' };
    const c = { key: 'c' };
    a[b] = 123;
    a[c] = 456;
    console.log(a[b]);
A. 123
B. 456
C. undefined
D. ReferenceError
Chọn đáp án B

Câu 32: Đoạn code sau sẽ cho kết quả là:
    const scrambled = {
        2: 'e',
        5: 'o',
        1: 'h',
        4: 'l',
        3: 'l'
    };
    const result = Object.values(scrambled).reduce((agg, el) => agg + el,'');
    console.log(result);
A. hello
B. eohll
C. Cả A, B đều đúng
D. Cả A, B đều sai
Chọn đáp án A

Câu 33: Đoạn code sau sẽ cho kết quả:
    let b = '4';
    console.log(b++ + 3, b);
A. 44 4
B. 8 5
C. 7 5
D. 43 5
Chọn đáp án C

Câu 34: Đoạn code sau sẽ cho kết quả gì?
    console.log(1 < 2 < 3);
    console.log(3 > 2 > 1);
A. true true
B. true false
C. false false
D. undefined undefined
Chọn đáp án B

Câu 35: Cấu trúc đơn giản của một trang HTML được khai báo theo thứ tự là:
A. HEAD, HTML, BODY
B. HEAD, TITLE, BODY
C. HEAD, BODY, HTML
D. HTML, HEAD, BODY
Chọn đáp án D

Câu 36: Để trình bày một đoạn văn bản trong tài liệu HTML ta dùng thẻ:
A. <HR>
B. <P>
C.<BR>
D.<PRE>
Chọn đáp án B

Câu 37: Để khai báo một phần bị đánh dấu trên trang web ta sử dụng thẻ với thuộc tính:
A. NAME
B. CLASS
C. HREF
D. ID
Chọn đáp án A

Câu 38: Để chèn hình ảnh vào trang web ta dùng thẻ
A. <PIC>
B. <IMG>
C. <IMAGE>
D. <PICTURE>
Chọn đáp án B

Câu 39: Để hiển thị các thông tin như tác giả, địa chỉ, chữ ký trong tài liệu HTML ta dùng thẻ:
A. <ADDRESS>
B. <PRE>
C. <BLOCKQUOTE>
D. <AUTHOR>
Chọn đáp án A

Câu 40: Để nhóm các thành phần có liên quan với nhau ta dùng thẻ:
A. <span>
B. <pre>
C. <blockquote>
D. <div>
Chọn đáp án A

Câu 41: Để khai báo một danh sách có thứ tự ta sử dụng thẻ:
A. <li>
B. <ul>
C. <lo>
D. <dl>
Chọn đáp án A

Câu 42: Để xác định kiểu chữ, kích thước, màu sắc... Ta dùng thẻ:
A. <color>
B. <font>
C. <fontstyle>
D. <fontsize>
Chọn đáp án C

Câu 43: Để khai báo một bảng trên trang web ta sử dụng thẻ:
A. <tr>
B. <td>
C. <table>
D. <th>
Chọn đáp án C

Câu 44: Để khai báo một hàng trong bảng trên trang web ta sử dụng thẻ:
A. <tr>
B. <td>
C. <table>
D. <th>
Chọn đáp án A

Câu 45: Để tạo ra những ô mà chúng có thể kéo rộng ra hơn một dòng trên bảng ta sử dụng thuộc tính:
A. Colspan
B. Align
C. Rowspan
D. Valign
Chọn đáp án C

Câu 46: Để canh lề dọc cho các ô trong bảng ta sử dụng thuộc tính:
A. Colspan
B. Align
C. Rowspan
D. Valign
Chọn đáp án D

Câu 47: Để định nghĩa một tập các frame đơn ta sử dụng thẻ:
A. <frame>
B. <noframe>
C. <ifframe>
D. <frameset>
Chọn đáp án C

Câu 48: Để khai báo một phần tử điều khiển nhập văn bản chỉ có một dòng ta sử dụng thẻ:
A. <input type="text">
B. <input type ="hidden"
C. <input type="password"
D. <textarea>
Chọn đáp án A

Câu 49: Để khai báo một phần tử điều khiển ẩn có chứa một value để phục vụ cho các mục đích khác trên trang web mà không muốn hiển thị ra ta
dùng thẻ:
A. <input type="text">
B. <input type =" hidden"
C. <input type="password"
D. <textarea>
Chọn đáp án B

Câu 50: Để khai báo một phần tử điều khiển cho phép người dùng có thể chọn một hay nhiều giá trị ta sử dụng thẻ:
A. <input type= "text">
B. <input type ="radio"
C. <input type="checkbox"
D. <textarea>
Chọn đáp án C
```