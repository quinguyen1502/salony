# Câu hỏi thường gặp

Câu ngắn. Chi tiết nằm ở trang liên quan.

??? question "Có cần tài khoản đăng nhập không?"

    Không. Identity là keypair trên máy. Xem [Identity](../tech/identity.md).

??? question "Nhân viên đặt lịch được không?"

    Không. Chỉ Chủ tiệm và Quản lý. Nhân viên lập hóa đơn nháp, đăng ký giờ
    rảnh, xem thu nhập của mình. Xem [Vai trò](roles.md).

??? question "Mất mạng thì sao?"

    Đặt lịch, lập hóa đơn, xem báo cáo vẫn chạy. Máy đồng bộ khi app đang mở
    và có mạng. Xem [Local-first](../tech/local-first.md).

??? question "Salony có giữ bản sao tiệm hộ tôi không?"

    Không. Bạn tự [sao lưu](../admin/backup.md) 24 từ và tệp dữ liệu.

??? question "Thêm máy là đăng nhập cùng tài khoản à?"

    Không. Mỗi máy có identity riêng. Ghép bằng mã QR.
    Xem [Thiết bị và đồng bộ](../admin/devices.md).

??? question "Hai máy khác Wi-Fi đồng bộ được không?"

    Bản 1.0.0 thì không. Phải cùng Wi-Fi tiệm, hoặc QR. Đồng bộ qua internet
    sẽ có lại khi Relay được host.
    Xem [Thiết bị và đồng bộ](../admin/devices.md).

??? question "In nhiệt Bluetooth được chưa?"

    Được, với máy in chạy Bluetooth Low Energy. Máy nào bán kèm dòng "không
    hỗ trợ iPhone" là loại Bluetooth Classic đời cũ, không dùng được. Xem
    [In biên lai](../guide/printing.md) để biết máy nào chạy và cách thử
    trong một phút.

??? question "Trợ lý AI gửi dữ liệu đi đâu?"

    Không gửi tiệm lên cloud. Internet chỉ lúc tải mô hình.
    Xem [Trợ lý AI](../guide/ai-assistant.md).

## Trang liên quan

- [Bắt đầu](../start/index.md)
- [Thuật ngữ](terminology.md)
- [Giới hạn](../tech/limits.md)
