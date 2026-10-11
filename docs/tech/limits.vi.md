# Giới hạn

Local-first không phải “không đụng máy chủ lần nào”. Trang này nói rõ chỗ
còn lại.

## Tổng quan

``` mermaid
graph TD
  T[Tiệm: event trên máy] --> X1[Relay: ciphertext + token đường]
  T --> X2[Push: không mang nội dung tiệm]
  T --> X3[Sentry: crash ẩn danh nếu bạn đồng ý]
  T --> X4[Sao lưu: chỉ nơi bạn cất tệp / 24 từ]
```

## Chi tiết

### Relay thấy gì, không thấy gì

- **Không thấy:** khách, lịch hẹn, hóa đơn, giá, tên nhân viên. Cũng không
  thấy máy nào ký, tiệm nào, loại event gì.
- **Có thể thấy:** hai máy đã ghép *có* trao gói, lúc nào, gói to cỡ nào, IP
  nào nối vào.

**Token đường không chỉ ra tiệm nào.** Nó là chuỗi ngẫu nhiên, thu hồi được,
và **không** sinh ra từ tên tiệm hay identity máy. Nhìn vào lưu lượng Relay
không suy ra được đó là tiệm của ai.

Che IP, che thời điểm, che kích thước gói thì Salony **không** làm. Bản
1.2.1 không gửi gói qua Relay, nên những quan sát đó chưa xảy ra. Khi đồng
bộ qua internet trở lại, không bật thì tiệm chỉ đi trên Wi-Fi.

### Thông báo

Thông báo đồng bộ hiện **khi app đang mở**: biết *loại* thay đổi — **không**
có giá. Không có thông báo nền mang nội dung lịch hẹn từ máy chủ.

### Sao lưu là việc của bạn

Salony không giữ 24 từ, không giữ mật khẩu tệp, không giữ bản sao dữ liệu.
Không cần tài khoản đăng nhập. Xem [Sao lưu](../admin/backup.md).

### Dữ liệu trên máy không tự mã hoá

Mã hoá đầu cuối bảo vệ event **lúc đi trên đường**. Cơ sở dữ liệu nằm trên
máy thì **không** được mã hoá thêm một lớp nữa — khoá màn hình và tài khoản
máy là lớp bảo vệ. Tệp identity xuất ra *có* mã hoá bằng mật khẩu bạn đặt;
bản sao lưu dữ liệu thì theo cách bạn cất nó.

Nghĩa là: máy mở khoá đưa cho người khác thì họ đọc được tiệm. Đặt khoá màn
hình.

### Trang đặt lịch công khai (tự chọn)

**Cài đặt → Đặt lịch online**. Trang giữ brochure (tên, địa chỉ, điện
thoại, giờ, logo, mô tả công khai, dịch vụ đã chọn) và các yêu cầu đang
chờ. Lịch hẹn, khách, ghi chú và event log ở trên máy. Xem
[Đặt lịch online](../admin/online-booking.md).

Cloud còn giới hạn số yêu cầu, email, thông báo, số lần đăng trang, ảnh,
số tiệm và số nhóm: xem [Giới hạn an toàn](../admin/online-booking.md#gioi-han-an-toan).
Số điện thoại và địa chỉ email được đếm dưới dạng mã băm có khoá, không
lưu nguyên văn.

### Tự vận hành cloud

Nếu bạn tự chạy booking cloud và máy cấp giấy phép (bộ self-host trong
`deploy/self-host`), mỗi giới hạn ở trên là một dòng trong `.env`:

- `LIMIT_STORE_REQUESTS_PER_DAY`, `LIMIT_STORE_MAIL_PER_DAY` và các tên
  `LIMIT_*` khác, mỗi dòng ghi sẵn giá trị mặc định. Để trống thì giữ mặc
  định; `0` thì tắt hẳn việc mà giới hạn đó canh.
- `QUOTA_HASH_SECRET` là khoá cho số đếm theo số điện thoại và email. Bắt
  buộc khi có database. Đổi khoá chỉ làm số đếm của ngày hôm đó bắt đầu
  lại.

`node tool/quota-report.js` trong booking service in ra, với từng giới
hạn, những tiệm, tài khoản hoặc nhóm dùng nhiều nhất. Lệnh này chỉ đọc,
và chỉ hiện id với tên link, không bao giờ hiện tên, số điện thoại, email
hay ghi chú của khách. Số đếm theo số điện thoại và email chỉ hiện dưới
dạng tổng.

### Báo cáo lỗi

Lần đầu app hỏi **Báo cáo lỗi & sử dụng**. Đồng ý thì crash ẩn danh có thể
tới Sentry. **Không** gồm khách, hóa đơn, event log.

## Trang liên quan

- [Local-first](local-first.md)
- [Identity](identity.md)
- [Đặt lịch online](../admin/online-booking.md)
- [FAQ](../reference/faq.md)
