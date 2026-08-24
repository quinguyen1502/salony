# Hai máy sửa cùng lúc

Câu hỏi đầu tiên mọi người hỏi về local-first: hai máy mất mạng, cùng sửa một
việc, nối mạng lại thì mất bên nào? **Không mất bên nào.**

## Tổng quan

Salony không chạy kiểu "ai ghi sau thì đè lên". Không có bản trên cloud để
quyết ai đúng. Hai [event](../reference/terminology.md#event) đã ký, mỗi cái
hợp lệ trên máy của nó, đều được ghi nhận.

Sau đó tuỳ việc. Chỗ nào máy tự dựng được một kết quả thì nó dựng. Chỗ nào hai
máy sửa cùng một lịch hẹn theo hai hướng khác nhau thì app giữ cả hai, hiện
**Xung đột phân công**, và hỏi bạn chọn kết quả cuối.

``` mermaid
graph TD
  A[Máy A ngoại tuyến: xếp Linh cho lịch 10h] --> N[Nối mạng lại]
  B[Máy B ngoại tuyến: xếp Hà cho chính lịch đó] --> N
  N --> C[Cả hai event đều được ghi nhận]
  C --> D[Mọi máy dựng ra cùng một trạng thái xung đột]
  D --> E[Lịch hẹn hiện Xung đột phân công]
  E --> F[Xử lý phân công: chọn kết quả cuối]
  F --> G[Event mới ghi lại quyết định]
```

Trong màn xử lý có **Đổi nhân viên**, **Chọn nhân viên khác**, hoặc **Để chưa
phân công**. App nói rõ vì sao phải hỏi: "Lịch hẹn này được phân công khác
nhau trên nhiều thiết bị. Hãy chọn kết quả cuối." Chọn xong thì lịch hẹn hiện
**Đã xử lý xung đột**.

Chỉ **Chủ tiệm** và **Quản lý** làm được việc này. **Nhân viên** không đặt và
không sửa lịch hẹn.

## Chi tiết kỹ thuật

- [seq](../reference/terminology.md#seq) chạy riêng theo *từng máy, từng
  tiệm*. Máy A không cần biết máy B đang đếm tới đâu, nên hai máy ngoại tuyến
  không bao giờ tranh nhau một số.
- Thiếu số ở giữa thì **giữ lại chờ**, không nhận nửa vời. Nhận `seq = 5`
  trong khi mới tới `seq = 3` thì 5 nằm chờ cho tới khi 4 về. Màn hình không
  hiện dữ liệu đang chờ.
- Cùng một máy, cùng một `seq`, mà nội dung khác nhau thì **từ chối**. Đó là
  dấu hiệu log bị tách hoặc bị sửa, không phải chuyện thường.
- Gửi lại y hệt một event đã ghi nhận là **vô hại**: ghi rồi thì thôi, không
  nhân đôi hóa đơn.
- Trạng thái xung đột được dựng từ chính chuỗi event, nên mọi máy ra cùng một
  kết quả. Không máy nào "đúng hơn" máy nào.
- Sửa sai luôn là **event bù**: hủy, hoàn, dời. Không có xoá lịch sử.

## Giới hạn

**Trùng giờ chỉ được chặn ngay lúc đặt.** Khi bạn đặt lịch, app kiểm tra trên
chính máy đang đặt: nhân viên đó đã có lịch phủ lên khung giờ này chưa. Có thì
từ chối, báo "Nhân viên này đã có lịch vào giờ đó."

Hai máy ngoại tuyến thì mỗi máy chỉ kiểm tra được phần nó nhìn thấy, và cả hai
cùng qua. Nối mạng lại, **cả hai lịch đều còn**. App không kiểm tra lại sau khi
đồng bộ, cũng không tự đánh dấu chỗ chồng giờ. Bạn sẽ thấy hai lịch cùng khung
giờ trên **Lịch hẹn**, rồi tự dời hoặc hủy một cái.

Giữ cả hai là có chủ ý: event đã ký và hợp lệ thì không bị vứt. Còn việc app
chưa tự chỉ ra chỗ chồng giờ sau khi đồng bộ thì đúng là chỗ bạn phải tự nhìn.

## Trang liên quan

- [Event và read model](events.md)
- [Sync](sync.md)
- [Lịch hẹn](../guide/appointments.md)
