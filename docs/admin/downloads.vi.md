# Tải về

Bản **1.2.2** cho Android. Chưa phải bản trên cửa hàng ứng dụng.
Hiện chưa có bản Windows trên trang này.

## Tổng quan

File cài nằm trên GitHub Releases, không nằm trên trang handbook này.
Ô trống là chưa đăng file, không phải link hỏng.

Bản 1.2.2 đồng bộ trên Wi-Fi tiệm (hoặc QR). **Chưa** đồng bộ qua internet.

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
| Android | [salony-1.2.2-android-arm64.apk](https://github.com/quinguyen1502/salony/releases/download/v1.2.2/salony-1.2.2-android-arm64.apk) | 1.2.2 |

SHA-256:

```
8d253943485a213b4bfb349994c4c901f1f542d3e441f71165f8fd4a7d5363d9  salony-1.2.2-android-arm64.apk
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
