# Thuật ngữ

Tên kỹ thuật thì giữ tiếng Anh, vì dịch ra mỗi người một kiểu. Việc của tiệm
thì viết tiếng Việt, đúng như trong app.

## Tổng quan

Giải thích đầy đủ: [Local-first](../tech/local-first.md).

## Khái niệm

| Thuật ngữ | Nghĩa | Đừng gọi là |
| --- | --- | --- |
| <a id="event"></a>**event** | Một bản ghi đã ký, [append-only](#append-only), về **một** việc đã xảy ra trong tiệm. Không sửa được tại chỗ. | “dòng trong database”, “hồ sơ chỉnh sửa” |
| <a id="envelope"></a>**envelope** | Lớp bọc thiết bị đặt quanh event khi [sync](#sync). [Relay](#relay) chuyển tiếp các byte này mà **không đọc** được nội dung. | phong bì, thư, “gói tin mở được” |
| <a id="relay"></a>**Relay** | Máy chủ trung chuyển (store-and-forward). Giữ [ciphertext](#ciphertext) vài giờ. **Không** phải nơi lưu tiệm. | cloud database, bản sao lưu |
| <a id="read-model"></a>**read model** | Bản tóm tắt đã biên dịch từ event đã chấp nhận. App đọc cái này trên màn hình. | “bảng SQL gốc”, “bản sao cloud” |
| <a id="append-only"></a>**append-only** | Chỉ thêm event mới. Sửa hóa đơn hay hủy lịch là event **bù**. | “update/delete record” |
| <a id="identity"></a>**identity** | Bạn là ai trên thiết bị này. Không phải tài khoản đăng nhập. | tài khoản, username |
| <a id="keypair"></a>**keypair** | Private key chỉ nằm trên máy; public key là danh tính người khác thấy. | mật khẩu, mã PIN app |
| <a id="ed25519"></a>**Ed25519** | Thuật toán ký event. Chữ ký chứng minh *máy nào* đã viết event. | “mã hoá hóa đơn” |
| <a id="noise"></a>**Noise** | Handshake bảo mật (pattern XX) trước khi hai máy trao event. | “mật khẩu Wi-Fi”, TLS tới Relay |
| <a id="handshake"></a>**handshake** | Bước Noise hai máy xác thực nhau **trước** khi event được giải phóng. | “gõ cửa” |
| <a id="ciphertext"></a>**ciphertext** | Byte đã mã hoá. Relay thấy ciphertext, không thấy khách / lịch / hóa đơn. | “file zip”, “mã PIN” |
| <a id="seq"></a>**seq** | Số thứ tự event của **một** identity trên **một** tiệm. | “số hóa đơn”, “ID khách” |
| <a id="local-first"></a>**local-first** | Tiệm chạy trên máy bạn. Event đã chấp nhận là [source of truth](#source-of-truth). | “app bọc một cloud database” |
| <a id="source-of-truth"></a>**source of truth** | Event log đã chấp nhận trên thiết bị. | “server Salony”, “tài khoản cloud” |
| <a id="wake"></a>**wake** | Tín hiệu đánh thức máy (nếu có) để app đồng bộ. **Không** mang nội dung lịch hẹn. | thông báo “khách A lúc 14:00” từ máy chủ |
| <a id="push"></a>**push** | Kênh đánh thức. Payload không chứa dữ liệu tiệm. | SMS, email hóa đơn |
| <a id="online-mode"></a>**online mode** | Công tắc **trên từng thiết bị**, theo từng tiệm. | “bật cloud cho cả tiệm” |
| <a id="licence-token"></a>**licence token** | Token đăng ký Relay của bản cài. | recovery phrase, mật khẩu sao lưu |
| <a id="backup"></a>**backup** | Lớp sao lưu: cụm từ / tệp **identity**, hoặc tệp **dữ liệu**. Xem [Sao lưu](../admin/backup.md). | “Salony giữ bản sao hộ bạn” |
| <a id="sync"></a>**sync** | Lớp đồng bộ event đã chấp nhận giữa thiết bị đã tin cậy. | “lưu lên Drive” |

## Từ salon — viết tiếng Việt

| Trong app | Việc gì |
| --- | --- |
| lịch hẹn | Đặt, check-in, hoàn tất, hủy, không đến |
| hóa đơn | Nháp, duyệt, hủy, hoàn tiền, in biên lai |
| biên lai | Tờ khách giữ. In lại thì đóng dấu **BẢN SAO** |
| phiếu tạm tính | In từ hóa đơn nháp: số phải trả, trước khi thanh toán |
| khách | Hồ sơ khách của **tiệm này** |
| nhân viên | Người có identity, hoặc **nhân viên ảo** |
| sao lưu | Bạn tự xuất tệp / ghi 24 từ |
| đồng bộ | Máy đã ghép trao event cho nhau |
| mất mạng / ngoại tuyến | Tiệm vẫn chạy, sync chờ có mạng |

## Trang liên quan

- [Local-first](../tech/local-first.md)
- [Vai trò](roles.md)
