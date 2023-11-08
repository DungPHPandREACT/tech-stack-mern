Ứng dụng tìm kiếm nhà hàng sử dụng MongoDB để lưu trữ dữ liệu. Dữ liệu về các nhà hàng được lưu trữ với cấu trúc như sau:

```jsx
{
  "address": {
     "building": "93",
     "coord": [ -62.856077, 30.848463 ],
     "street": "Blaker",
     "zipcode": "10400"
  },
  "borough": "Bronx",
  "cuisine": "Bakery",
  "rates": [
     { "date": { "$date": 1393804800000 }, "rate": "A", "score": 3 },
     { "date": { "$date": 1378857600000 }, "rate": "B", "score": 2 },
     { "date": { "$date": 1358985600000 }, "rate": "A", "score": 4.5 },
     { "date": { "$date": 1322006400000 }, "rate": "A", "score": 5 },
     { "date": { "$date": 1299715200000 }, "rate": "B", "score": 1 }
  ],
  "name": "HotFire Bake Shop",
  "restaurant_id": "30078342"
}
```
Dữ liệu mẫu. $date có nghĩ là kiểu dữ liệu ngày tháng.

---
Viết các query trong mongoDB để có thể lấy các nhà hàng thoả mãn các điều kiện sau:

1. Truy vấn tất cả những nhà hàng
2. Truy vấn tất cả các nhà hàng có zipcode là 11209
3. Truy vấn tất cả những nhà hàng chuyên về ẩm thực Mỹ
4. Truy vấn tất cả các nhà hàng nằm ở quận Brooklyn
5. Truy vấn tất cả các nhà hàng nằm ở quận Manhattan
6. Truy vấn tất cả nhà hàng về gà ở quận Manhattan
7. Truy vấn tất cả nhà hàng nằm ở trên phố Wall Street
8. Truy vấn tất cả những nhà hàng có trên 3 đánh giá
9. Truy vấn tất cả những nhà hàng có đánh giá với số điểm loại B
10. Truy vấn tất cả những nhà hàng có đánh giá với số điểm trên 10

---

Dữ liệu trong MongoDB nằm bên trong file JSON sau:

[restaurants-data.json](restaurants-data.json)

*Để thêm dữ liệu vào MongoDB, chọn Add data → chọn JSON → tìm file data json*