# Sync

Các thiết bị đã tin cậy gửi event đã chấp nhận cho nhau. Trước đó hai máy làm
[handshake](../reference/terminology.md#handshake)
[Noise](../reference/terminology.md#noise); dữ liệu đi trong
[envelope](../reference/terminology.md#envelope).

## Tổng quan

Bản 1.0.0 chỉ đồng bộ **Gần / LAN**. [Relay](../reference/terminology.md#relay)
chưa mở vì chưa host. Sơ đồ dưới mô tả cơ chế sẽ trở lại, không phải nút bạn
bấm được hôm nay.

Relay chỉ chuyển [ciphertext](../reference/terminology.md#ciphertext). Nó
**không** đọc khách, lịch, hóa đơn.

``` mermaid
sequenceDiagram
  participant A as Máy A
  participant R as Relay
  participant B as Máy B
  A->>B: Nearby / LAN: Noise rồi event
  A->>R: Envelope opaque
  Note over R: Giữ ciphertext vài giờ<br/>không đọc được
  B->>R: Lấy envelope
  B->>B: Noise, rồi mới chấp nhận event
```

## Chi tiết kỹ thuật

1. **Gần / LAN** — cùng Wi-Fi (hoặc QR khi multicast bị chặn). App đang mở.
   Đây là đường 1.0.0 dùng.
2. **Relay** — không có trong 1.0.0. Khi được host, máy không cùng mạng bật
   **Đồng bộ qua internet** trên *từng* thiết bị
   ([online mode](../reference/terminology.md#online-mode)).
3. **Không có tầng “upload tiệm lên cloud rồi tải xuống”.**

Handshake Noise xảy ra **trước** khi event được giải phóng. TLS tới Relay
không đủ: Relay kết thúc TLS.

Ghép máy bằng QR. Khi internet sync trở lại, tắt online mode trên một máy
không tắt máy khác.

### Hai máy phải chứng minh mình là ai

Handshake xong chưa đủ. Nó mới nói "đầu kia giữ khoá X25519 này". Máy còn
phải chứng minh khoá đó gắn với đúng **identity Ed25519** đã được ghép. Chưa
chứng minh xong thì chưa event nào được thả ra.

### Nghe lén hôm nay không mở được gói hôm qua

Mỗi phiên dùng khoá ephemeral mới. Bắt được cả đống ciphertext hôm nay, mai
lấy được khoá máy, vẫn không mở được phiên đã đóng. Đây là **forward
secrecy**.

### Gói cũ không dùng lại được

- Mỗi chiều có bộ đếm riêng, không bao giờ lặp với cùng một khoá.
- Máy nhớ 4096 message ID gần nhất mỗi phiên. Gói lặp bị bỏ, không chạy hai
  lần.
- Gói quá **năm phút** là hết hạn.
- Phiên rảnh 15 phút, hoặc chạy đủ 60 phút, thì đóng.
- Sai chữ ký AEAD một lần là **đóng phiên**, không thử tiếp.
- Đủ 1 GiB hoặc 2^20 gói thì bắt tay lại từ đầu.

Nghĩa là: bắt được gói trên đường truyền cũng không gửi lại được để tạo hóa
đơn ma.

### Không có chế độ "thôi gửi thường cũng được"

Phiên bản lạ hoặc gói không mã hoá sau khi đã bật secure session đều bị từ
chối thẳng. Không có cách nào ép app hạ xuống mức bảo vệ thấp hơn.

## Giới hạn

Sync phục vụ khi **app đang mở**. Chi tiết nút bấm:
[Thiết bị và đồng bộ](../admin/devices.md).

## Trang liên quan

- [Thiết bị và đồng bộ](../admin/devices.md)
- [Local-first](local-first.md)
- [Giới hạn](limits.md)
