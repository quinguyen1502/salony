# Thiết bị và đồng bộ

Mỗi máy có identity riêng. Thêm máy **không** phải “đăng nhập cùng tài khoản”.

## Tổng quan

Đồng bộ là các **thiết bị đã tin cậy** gửi [event](../reference/terminology.md#event) cho
nhau, không đưa tiệm lên cloud rồi tải xuống.

<div class="shot-row" markdown>

<figure class="shot-phone" markdown>
![Thêm thiết bị trong Cài đặt](../images/vi/light/settings-identity.png){ loading=lazy }
<figcaption>Cài đặt → Thêm thiết bị khác / Danh tính thiết bị</figcaption>
</figure>

</div>

## Cách làm

### Thêm thiết bị khác

Hai máy, cùng Wi-Fi tiệm, cùng lúc. Trên máy đã là Chủ tiệm:

1. Máy mới: **Cài đặt → Danh tính thiết bị**. Giữ màn này mở.
2. Máy Chủ: **Cài đặt → Thêm thiết bị khác**.
3. Trong **Thiết bị gần đây**, bấm tên máy kia. Hai màn hiện mã 6 số.
   Trùng thì bấm **Trùng mã** trên cả hai máy.
4. Đặt tên, rồi **Gửi lời mời**. Mặc định **Quản lý**.
5. Máy mới bấm **Nhận lời mời**. Trùng mã chưa vào tiệm; nhận lời mời mới
   vào.

Nếu **Thiết bị gần đây** trống: máy kia chưa mở Danh tính thiết bị, khác
Wi-Fi, hoặc mạng chặn multicast. Điện thoại vẫn **Quét thiết bị kia**.
Máy tính bàn không có nút quét. Mạng chặn multicast thì quét QR từ điện
thoại.

Không sao chép khoá. Nâng lên Chủ sau trong **Nhân viên** nếu cần.

### Thiết bị đã tin cậy

- **Ngoại tuyến** — máy kia chưa mở app, hoặc chưa liên lạc được
- **Đang kết nối · Gần đây** — hai máy cùng mạng nội bộ (LAN)

**Ngắt kết nối** chỉ dừng đồng bộ. Nó **không** xoá người đó khỏi danh sách
Nhân viên.

### Đồng bộ khi app mở

**Cài đặt → Đồng bộ**: tự đồng bộ khi app đang mở trên cùng Wi-Fi (hoặc QR
nếu mạng chặn multicast). Điện thoại đang khoá thì không nhận được gì, vì không có hộp thư nào trên
cloud để lấy về.

### Bản 1.1.0 không đồng bộ qua internet

Không có mục **Cài đặt → Đồng bộ qua internet**. Máy phải cùng Wi-Fi. Ghép
từ **Thiết bị gần đây**, hoặc quét QR khi danh sách trống. Tính năng đó
sẽ có lại khi [Relay](../reference/terminology.md#relay)
được host — xem [Sync](../tech/sync.md).

### Thông báo

**Cài đặt → Thông báo đồng bộ**: banner *loại* việc, không kèm số tiền. Chỉ hiện
khi **app đang mở**.

## Trang liên quan

- [Sync (kiến trúc)](../tech/sync.md)
- [Sao lưu và khôi phục](backup.md)
- [Máy tính bàn](desktop.md)
