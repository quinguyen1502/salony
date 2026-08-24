# Salony chạy thế nào

Tiệm nằm trên máy bạn, không nằm trên cloud. Trang này giải thích cơ chế —
đủ để bạn tự kiểm chứng lời quảng cáo.

## Tổng quan

Đọc theo thứ tự dưới đây thì hết một mạch: dữ liệu ở đâu, máy nào được đọc,
đồng bộ đi thế nào, và chỗ nào Salony **không** làm được.

Việc hàng ngày nằm ở [Hướng dẫn](../guide/index.md). Nút bấm để bật đồng bộ
nằm ở [Thiết bị và đồng bộ](../admin/devices.md).

## Đọc theo thứ tự

<div class="grid cards" markdown>

-   :material-laptop:{ .lg .middle } **1. Local-first**

    ---

    Tiệm nằm trên máy bạn đang cầm. Mạng chỉ để chuyển thay đổi qua lại.

    [:octicons-arrow-right-24: Local-first](local-first.md)

-   :material-key-variant:{ .lg .middle } **2. Identity**

    ---

    Không tài khoản đăng nhập. Mỗi máy có keypair riêng.

    [:octicons-arrow-right-24: Identity](identity.md)

-   :material-format-list-numbered:{ .lg .middle } **3. Event và read model**

    ---

    Mỗi việc là một event đã ký, append-only. Màn hình đọc bản đã biên dịch.

    [:octicons-arrow-right-24: Event và read model](events.md)

-   :material-call-split:{ .lg .middle } **4. Hai máy sửa cùng lúc**

    ---

    Hai máy ngoại tuyến cùng đặt một giờ. Không bên nào bị đè.

    [:octicons-arrow-right-24: Hai máy sửa cùng lúc](concurrency.md)

-   :material-shield-lock:{ .lg .middle } **5. Sync**

    ---

    Handshake Noise trước, rồi mới tới event. Relay chỉ chuyển ciphertext.

    [:octicons-arrow-right-24: Sync](sync.md)

-   :material-creation:{ .lg .middle } **6. AI chạy trên máy**

    ---

    Tóm tắt và giọng nói chạy trên máy. Không gửi tiệm lên máy chủ AI.

    [:octicons-arrow-right-24: AI chạy trên máy](on-device-ai.md)

-   :material-alert:{ .lg .middle } **7. Giới hạn**

    ---

    Chỗ nào vẫn đụng máy chủ, và ai thấy được gì.

    [:octicons-arrow-right-24: Giới hạn](limits.md)

</div>

## Trang liên quan

- [Thuật ngữ](../reference/terminology.md)
- [Thiết bị và đồng bộ](../admin/devices.md)
- [Sao lưu và khôi phục](../admin/backup.md)
