# Máy in nhiệt

Chọn, ghép và in thử máy in nhiệt cho quầy. Tờ in ra gồm những gì thì xem
[In biên lai](printing.md).

## Tổng quan

Salony gửi thẳng biên lai tới máy in nhiệt, không qua hộp thoại in của hệ điều
hành. Vào **Cài đặt → Máy in nhiệt**, bấm **Tìm máy in**. Máy in bạn chọn chỉ
nhớ **trên máy đó**: điện thoại ngoài quầy và máy tính bảng bên trong mỗi máy
có máy in riêng.

Có hai cách nối máy in nhiệt:

| Cách nối | Hợp với |
| --- | --- |
| **Bluetooth** | Máy in cầm tay để cạnh quầy. Chỉ ghép được từ điện thoại và máy tính bảng |
| **Mạng của tiệm** | Máy in để bàn cắm dây mạng hoặc nối Wi-Fi. Ghép được từ mọi máy, kể cả Mac và Windows |

Ghép xong rồi thì nút **In** sẽ hỏi bạn in bằng máy nào.

**In thử một biên lai** gửi một bản mẫu 5 dòng rồi báo mất bao nhiêu giây. Con
số đó đáng đọc: một biên lai là 20–60 KB điểm ảnh, mà Bluetooth Low Energy thì
không nhanh. Vài giây là dùng được ngoài quầy, hai chục giây thì không. Máy in
nối mạng thường nhanh hơn hẳn, nhưng vẫn nên in thử một lần để biết chắc.

## Máy in Bluetooth nào dùng được

Máy in phải chạy **Bluetooth Low Energy (BLE)**. Nhiều máy in nhiệt giá rẻ chỉ
chạy Bluetooth Classic (SPP) đời cũ, loại đó không dùng được, trên điện thoại
nào cũng vậy.

Cách nhận biết nhanh nhất trước khi mua: **nếu người bán ghi "không hỗ trợ
iPhone" thì máy đó cũng không chạy với Salony.** iPhone không nói chuyện được
với máy in SPP, nên ghi vậy tức là họ đang nói cho bạn biết máy thuộc loại nào.

| Máy in | Dùng được |
| --- | --- |
| GOOJPRT PT-210 | Được. 58 mm, bán nhiều, giá rẻ |
| MTP-3 / MPT-II | Được. 58 mm cầm tay |
| PeriPage | Được, nhưng đây là máy in nhãn chứ không phải in biên lai |
| Loại ghi "chỉ Android và Windows, không iOS" | Không |

!!! note "Bảng này suy ra từ tài liệu, chưa phải kết quả in thử"

    Cột "Dùng được" dựa trên kiểu kết nối BLE mà từng dòng máy công bố, chứ
    Salony chưa cắm thử từng máy. Mua máy nào cũng nên in thử một biên lai
    ngay hôm đầu.

Máy in của bạn không có trong bảng thì kiểm tra trong một phút bằng app quét
Bluetooth miễn phí: **nRF Connect** hoặc **LightBlue**. Bật máy in lên rồi
quét. Thấy máy in hiện ra kèm tên thì gần như chắc chắn Salony dùng được.
Không thấy gì thì đó là máy SPP, không dùng được.

## Máy in nối mạng tiệm

Máy in phải nhận lệnh in thô ở **cổng 9100**. Đa số máy in nhiệt để quầy có
cổng mạng đều vậy, và trong tờ thông số họ hay ghi là "raw", "JetDirect" hoặc
"Port 9100".

Bấm **Tìm máy in**, máy in nào tự báo tên trên mạng sẽ hiện ra kèm địa chỉ.
Nhiều máy in rẻ không tự báo gì cả. Lúc đó dùng **Thêm máy in bằng địa chỉ** và
gõ địa chỉ IP của máy in, ví dụ `192.168.1.50`. Không cần gõ cổng, Salony tự
hiểu là 9100; máy in dùng cổng khác thì gõ `192.168.1.50:9110`.

Địa chỉ IP xem ở đâu: đa số máy in có nút tự in ra một tờ cấu hình, hoặc xem
trong trang quản lý của router.

!!! tip "Đặt IP cố định cho máy in"

    Salony nhớ đúng địa chỉ bạn đã lưu. Router cấp IP động, hôm nào đổi số thì
    Salony sẽ báo máy in không trả lời, và bạn phải ghép lại. Đặt IP cố định
    cho máy in trong trang router là xong chuyện đó một lần.

Máy in và máy chạy Salony phải cùng một mạng. Wi-Fi khách của tiệm thường bị
tách riêng khỏi mạng trong, nên máy nối vào Wi-Fi khách sẽ không thấy máy in.

## Máy nào ghép được máy in

| Thiết bị | Máy in Bluetooth | Máy in nối mạng | Hộp thoại in của hệ điều hành |
| --- | --- | --- | --- |
| Android 12 trở lên | Được | Được | Được |
| Android 11 trở xuống | Không | Được | Được |
| iPhone, iPad | Được | Được | Được |
| Mac, Windows | Không | Được | Được |

Android 11 trở xuống không tìm được máy in Bluetooth, vì Android bắt phải có
quyền Vị trí mới quét được, mà Salony không xin quyền đó. Máy in nối mạng thì
không vướng chỗ này.

Mac và Windows không ghép được máy in Bluetooth ngay trong Salony, mà đó cũng
là loại máy in ít gặp nhất ở quầy lễ tân. Máy in nối mạng thì ghép bình thường,
và đó đúng là loại máy một tiệm dùng máy tính bàn đang có.

**Ngoài ra máy Mac hay máy Windows vẫn in được qua driver của chính máy in**,
không qua Salony. Cài driver như cài máy in bình thường, nó sẽ hiện trong hộp
thoại in cùng với các máy in khác. Salony gửi ra khổ cuộn 80mm chứ không phải
khổ trang, nên tờ in ra đúng dáng biên lai, không phải một cái biên lai nhỏ xíu
nằm giữa tờ A4. Đường này là đường duy nhất cho máy in cắm USB.

## Giới hạn

In nhiệt đi qua Bluetooth hoặc qua mạng của tiệm. Máy in cắm USB thì phải đi
qua hộp thoại in của hệ điều hành.

Máy in đã chọn chỉ nhớ trên máy đó. Tiệm có một máy in nối mạng dùng chung thì
mỗi máy vẫn phải tự ghép một lần.

## Trang liên quan

- [In biên lai](printing.md)
- [Máy tính bàn](../admin/desktop.md)
