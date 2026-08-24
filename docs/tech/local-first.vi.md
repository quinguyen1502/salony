# Local-first

Tiệm nằm trên **máy bạn đang cầm**. Mạng chỉ để chuyển thay đổi qua lại.

## Tổng quan

Các máy đã ghép gửi [event](../reference/terminology.md#event) cho nhau.
Hóa đơn không nằm trên mạng.

``` mermaid
graph TD
  subgraph may [Máy của bạn]
    E[Event đã chấp nhận]
    M[Read model]
    U[App]
    E --> M --> U
  end
  CloudX[Cloud database salon SaaS]
  E -.->|không phải nguồn| CloudX
```

## Chi tiết kỹ thuật

- Mất mạng: đặt lịch, lập hóa đơn, xem báo cáo **vẫn chạy**. Có mạng lại thì
  tự đồng bộ.
- Salony không giữ bản sao dữ liệu tiệm.
- Máy thứ hai có dữ liệu vì nó **đã nhận event**.
- Xoá app / mất máy mà chưa [sao lưu](../admin/backup.md) là mất dữ liệu trên máy đó.

## Giới hạn

Local-first không có nghĩa “không bao giờ đụng máy chủ”.
[Relay](../reference/terminology.md#relay) và báo cáo lỗi (nếu bạn đồng ý) là
máy chủ. Nhưng tiệm **không** nằm ở đó. Xem [Giới hạn](limits.md).

## Trang liên quan

- [Identity](identity.md)
- [Event và read model](events.md)
- [Thuật ngữ](../reference/terminology.md)
