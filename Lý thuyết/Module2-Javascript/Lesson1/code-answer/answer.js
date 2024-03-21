// 1. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây?  Giải thích vì sao có kết quả đó?
// x = true, y = true, z = false

// x && y && z → false
// (x && y) || z → true
// (x && y) || !z → true
// x && (y || z) → true
// x && !(y || z) → false
// x && (y || !z) → true
// x && (!y || z) → false

// 2. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây?  Giải thích vì sao có kết quả đó?
// name = 'AAA', age = 20, isGood = true

// age + 10 = 30
// age % 3 = 2
// name + ' BBB' = 'AAA BBB'
// !isGood = false
// name == 'aaa' && age >= 20 → false && true => false
// name != 'aaa' && isGood → true && true => true
// !(age < 10) && !isGood → true && false => false

// 3. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây?  Giải thích vì sao có kết quả đó?
// a = 10, b = 20, c = 30, d = '40'
// a + b + c = 10 + 20 + 30 = 60
// a - b / c = 10 - 20/30 = 9.333333334
// a - (b * c) = 10 - (20 * 30) = -590
// d - (a * b) - c = '40' - (10 * 20) - 30 = -190
// a + b + c + d = 10 + 20 + 30 + '40' = '6040'
// d + a + b + c = '40' + 10 + 20 + 30 = '40102030'
// d + a - b + c = '40' + 10 - 20 + 30 = 4020
// a - b + d - c = 10 - 20 + '40' - 30 = -1070
// d - c + a - b = '40' - 30 + 10 - 20 = 0
// a * b + d * c = 10 * 20 + '40' * 30 = 1400

// 4. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? Giải thích vì sao có kết quả đó?
// x = true, y = false, z = 10

// x && y → false
// x && !y → true
// x && z == 10 → true
// (x && z == 10) → true
// !(x && z == 10) → false
// !(x && z == 50) → true
// x && y && z == 10 → false
// x && !y && z == 10 → true
// x || y || z == 10 → true
// (x && y) || z != 10 → false
// !(x && z == 10) || y → false

// 5. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? Giải thích vì sao có kết quả đó?
// a = 1, b = '2', c = 3, d = '4'

// b + d = '2' + '4' = 
// a + b + c + d = 1 + '2' + 3 + '4' = '1234'
// a - b + c - d = 1 - '2' + 3 - '4' = -2
// a - b - c + d = 1 - '2' - 3 + '4' = '-44'
// (b + d) - (a + c) = ('2' + '4') - (1 + 3) = 20
// (a + b) - (c + d) = (1 + '2') - (3 + '4') = -22
// a * c + b * d = 1 * 3 + '2' * '4' = 11
// -b + d = -'2' + '4' '-24'
// -b - d = -'2' - '4' = -6
// -(b + d) = -('2' + '4') = -24

// 6. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? Giải thích vì sao có kết quả đó?
// age = 25, isMarried = false, isRich = true

// age > 25 && isMarried && isRich → false
// (age <= 25 || isMarried) && isRich → true
// (age > 10 || isRich) && isMarried → false
// !(age >= 15 && isMarried) && isRich → true
// !(age <= 20) || !(isMarried && isRich) → true
// (age > 8 && !isMarried) || isRich → true
// !(age < 8 && !isMarried) || isRich → true
// (age == 8 && isMarried) || !isRich → false

// 7 Hãy cho biết kết quả phép toán và biểu thức
// a = 11, b = '22', c = 33
// a + b = '1122'
// a - c = -22
// a + b + c = '112233'
// a + c + b = '4422'
// (a + b) % 3 = 0
// a * b > 50 → true
// a ** b > 100 → true
// a - (b++) == 5 → false
// a - (++b) == 5 → false

// 8. Cho các biến sau: 
// isTall = true, isMuscle = false, isHandsome = true
// Hãy cho biết kết quả của các biểu thức sau:
// isTall && isMuscle → false
// !isHandsome → false
// !isTall || !isMuscle → true
// isTall || !(isMuscle && isHandsome) → true
// isMuscle && !(isTall || isHandsome) → false
