# Event và read model

Mỗi việc trong tiệm được ghi bằng một [event](../reference/terminology.md#event)
đã ký, [append-only](../reference/terminology.md#append-only). Màn hình đọc
[read model](../reference/terminology.md#read-model), không đọc log thô.

## Tổng quan

Danh sách và chi tiết **không** quét từng dòng event. App đọc bản đã biên
dịch.

``` mermaid
graph TD
  A[Bạn bấm Duyệt hóa đơn] --> B[Event mới được ký]
  B --> C[Event log chấp nhận]
  C --> D[Read model cập nhật]
  D --> E[Danh sách hóa đơn]
  F[Sửa nhầm?] --> G[Event bù: hủy / hoàn]
  G --> C
```

## Chi tiết kỹ thuật

- Không có “sửa giá trên hóa đơn đã duyệt rồi ghi đè”.
- Hủy lịch, hủy hóa đơn, hoàn tiền là event mới — lịch sử còn đó.
- [seq](../reference/terminology.md#seq) đi theo từng identity trên từng
  tiệm.
- Read model hỏng thì rebuild từ event đã chấp nhận.

## Giới hạn

Event log lớn dần. Read model tồn tại đúng vì app không quét toàn bộ lịch sử
mỗi lần mở danh sách.

## Trang liên quan

- [Local-first](local-first.md)
- [Sync](sync.md)
- [Thuật ngữ](../reference/terminology.md)
