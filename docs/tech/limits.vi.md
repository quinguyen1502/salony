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

Che IP, che thời điểm, che kích thước gói thì Salony **không** làm. Muốn giấu
cả những thứ đó thì đừng bật đồng bộ qua internet — cùng Wi-Fi tiệm là đủ.

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

### Báo cáo lỗi

Lần đầu app hỏi **Báo cáo lỗi & sử dụng**. Đồng ý thì crash ẩn danh có thể
tới Sentry. **Không** gồm khách, hóa đơn, event log.

## Trang liên quan

- [Local-first](local-first.md)
- [Identity](identity.md)
- [FAQ](../reference/faq.md)
