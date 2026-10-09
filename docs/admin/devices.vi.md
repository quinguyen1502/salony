# Thiết bị và đồng bộ

Mỗi máy tham gia tiệm riêng. Thêm máy **không** phải “đăng nhập cùng tài
khoản”.

## Tổng quan

Đồng bộ là các **thiết bị đã tin cậy** gửi thay đổi cho nhau qua Wi-Fi của
tiệm. Tiệm không được đưa lên cloud rồi tải xuống.

<div class="shot-row" markdown>

<figure class="shot-phone" markdown>
![Thêm thiết bị trong Cài đặt](../images/vi/light/settings-identity.png){ loading=lazy }
<figcaption>Cài đặt → Nâng cao → Thêm thiết bị khác</figcaption>
</figure>

</div>

## Cách làm

### Ghép hai máy { #pair }

Cùng một cách cho mọi trường hợp: mời nhân viên, thêm máy thứ hai của bạn,
hay đưa một máy mới vào tiệm có sẵn. Chỉ khác chỗ bắt đầu trên máy đang ở
trong tiệm:

| Việc | Trên máy đang ở trong tiệm | Vai trò của máy mới |
| --- | --- | --- |
| Mời nhân viên | **Nhân viên → Thêm nhân viên → Mời nhân viên** (Chủ tiệm, Quản lý) | Bạn chọn **Nhân viên** hoặc **Quản lý** |
| Thêm máy của bạn | **Cài đặt → Nâng cao → Thêm thiết bị khác** (Chủ tiệm) | Mặc định **Quản lý** |

Hai máy để gần nhau, cùng Wi-Fi tiệm, cùng lúc:

1. **Máy mới:** **Tham gia tiệm** (nút mã QR trên màn **Chọn tiệm**), hoặc màn chào nếu vừa cài
   app. Giữ màn này mở.
2. **Máy trong tiệm:** mở chỗ bắt đầu ở bảng trên.
3. Trong **Thiết bị gần đây**, bấm tên máy kia. Hai màn hiện mã 6 số. Trùng
   thì bấm **Trùng mã** trên cả hai máy.
4. Điền tên, chọn vai trò nếu có, rồi bấm **Mời** (mời nhân viên) hoặc
   **Gửi lời mời** (thêm máy của bạn).
5. **Máy mới:** bấm **Nhận lời mời**. Trùng mã chưa vào tiệm; nhận lời mời
   mới vào.

Ngoài lời mời, không có gì được chép từ máy này sang máy kia. Muốn máy mới
thành Chủ tiệm thì đổi vai trò sau, trong **Nhân viên**.

### Kết nối lại một máy đã ở trong tiệm { #reconnect }

Sau khi khôi phục hay đổi máy, các máy khác phải ghép lại một lần. Làm đúng
các bước ở trên. Nếu máy kia đã ở trong tiệm thì app không gửi lời mời mới:
cả hai máy báo *Đã kết nối lại* rồi đồng bộ như trước. Vai trò và lịch sử của
người đó giữ nguyên, nên không cần gỡ họ khỏi tiệm rồi mời lại.

### Không thấy máy kia { #not-found }

**Thiết bị gần đây** trống khi:

- máy kia chưa mở **Tham gia tiệm**,
- hai máy khác Wi-Fi,
- hoặc Wi-Fi không cho các máy thấy nhau (hay gặp ở Wi-Fi khách và Wi-Fi
  công cộng).

Khi đó quét mã QR trên máy mới bằng điện thoại: **Quét QR** khi mời nhân
viên, **Quét thiết bị kia** khi thêm máy của bạn. Mac và PC không có nút
quét, nên luôn quét bằng điện thoại. Chỉ dán ID thiết bị thì chưa gửi được
lời mời.

### Thiết bị đã tin cậy

- **Ngoại tuyến** — máy kia chưa mở app, hoặc chưa liên lạc được
- **Đang kết nối · Gần đây** — hai máy đang thấy nhau trên Wi-Fi tiệm

**Ngắt kết nối** chỉ dừng đồng bộ với máy đó. Nó **không** đưa người đó ra
khỏi tiệm. Muốn vậy thì dùng **Gỡ khỏi tiệm**: xem
[Ngừng dùng tiệm](stop-using.md).

### Đồng bộ khi app mở

**Cài đặt → Nâng cao → Đồng bộ**: các máy tự đồng bộ khi app đang mở và cùng Wi-Fi.
Điện thoại đang khoá thì không nhận được gì, vì không có hộp thư nào trên
cloud để lấy về.

Bản hiện tại không đồng bộ qua internet: máy phải cùng Wi-Fi. Xem
[Tải về](downloads.md).

### Thông báo

**Cài đặt → Thông báo đồng bộ**: banner báo *loại* việc vừa đồng bộ, không
kèm số tiền. Chỉ hiện khi **app đang mở**.

## Trang liên quan

- [Ngừng dùng tiệm](stop-using.md)
- [Bảo vệ và khôi phục tiệm](backup.md)
- [Máy tính bàn](desktop.md)
- [Sync (kiến trúc)](../tech/sync.md)
