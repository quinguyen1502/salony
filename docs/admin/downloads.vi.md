# Tải về

Bản **1.3.0** cho Android. Chưa phải bản trên cửa hàng ứng dụng.
Hiện chưa có bản Windows trên trang này.

## Tổng quan

File cài nằm trên GitHub Releases, không nằm trên trang handbook này.
Ô trống là chưa đăng file, không phải link hỏng.

Bản 1.3.0 đồng bộ trên Wi-Fi tiệm (hoặc QR). **Chưa** đồng bộ qua internet.

Bản 1.3.0 là giao diện mới. Trên điện thoại, thanh dưới có năm nút, nút
Tạo ở giữa, và Thêm là một trong năm nút đó. Màn Hôm nay cho biết ai đang
được phục vụ, ai tiếp theo, việc gì cần duyệt và nhân viên nào đang rảnh.
Màn Hóa đơn cho thấy tiền thu trong ngày và duyệt hóa đơn bằng một chạm, có
vài giây để hoàn tác. Hóa đơn mới nằm gọn trong một màn. Trên máy tính bảng
hoặc máy tính, thanh trên cùng mở mọi trang bằng một lần bấm, và danh sách
mở chi tiết ngay bên cạnh. Tiệm mới lấy múi giờ của điện thoại.

Chủ hoặc Quản lý chọn được màu của tiệm trong Hồ sơ tiệm; mọi máy của tiệm
đổi theo. App cũng gợi ý ai nên làm khách tiếp theo theo lượt trong ngày,
có bảng lượt để chỉnh tay và Quy tắc lượt trong Cài đặt. Xem
[Lượt nhân viên](../guide/turns.md). Máy còn bản 1.2.2 trở về trước bỏ qua
màu và lượt cho tới khi cập nhật.

Bản 1.2.2 sửa bốn lỗi nhỏ khi chuyển và khôi phục tiệm. Máy vừa khôi
phục hoặc vừa nhận tiệm mở thẳng danh sách tiệm, không chạy lại bước
thiết lập ban đầu. Chuyển sang máy mới nói đúng khi máy có nhiều tiệm.
Nếu chuyển chưa xong, máy cũ báo máy này chưa thay đổi gì. Khi ghép lại
một máy, app hiện tên máy thay vì một dãy mã.

Bản 1.2.1 sửa một lỗi bảo mật có từ 1.2.0 trở về trước. Trên Android,
xem mã khôi phục, lưu tệp mã khôi phục, chuyển sang máy mới và dùng máy
này như máy mới giờ đều hỏi khóa máy (vân tay, khuôn mặt hoặc mã PIN).
Trước đây các việc này chạy luôn mà không hỏi.

Bản 1.2.0 thêm sao lưu tiệm tự động, lưu trữ một tiệm, và bắt đầu lại
trong khi giữ các danh sách. Có thể bật đặt lịch online. Bảo vệ tiệm
bao gồm mọi tiệm trên máy này. Chuyển sang máy mới nêu tên các tiệm sẽ
chuyển, và máy mới mở ra trên các tiệm đó. Quét một máy đã ở trong tiệm
thì ghép lại. Ghép từ thiết bị gần đây giữ như 1.1.1.

## Cách làm

| Nền tảng | File | Trạng thái |
| --- | --- | --- |
| Android | [salony-1.3.0-android-arm64.apk](https://github.com/quinguyen1502/salony/releases/download/v1.3.0/salony-1.3.0-android-arm64.apk) | 1.3.0 |

SHA-256:

```
1abb4aa71ffeed21b2ac25fbc417cf3b6b877cf883a2930817e3addfdedf1609  salony-1.3.0-android-arm64.apk
```

Hiện chưa có bản Windows trên trang này.
Hiện chưa có bản macOS trên trang này.
Hiện chưa có bản iOS trên trang này.

## Nên làm

- **Android.** Máy có thể hỏi cho phép cài từ nguồn ngoài Play Store.
- **Windows.** SmartScreen có thể cảnh báo. Chỉ cài khi bạn tin nguồn tải.

Nên [bảo vệ tiệm](backup.md) trước khi thử trên máy đang chạy tiệm thật.

## Trang liên quan

- [Lần đầu mở app](../start/first-launch.md)
- [Máy tính bàn](desktop.md)
- [Thiết bị và đồng bộ](devices.md)
