<!-- Generated from assets/legal/ by handbook/tool/sync_legal.py. Do not edit. -->
# Chính sách quyền riêng tư

**Bản nháp, đang chờ rà soát pháp lý. Chưa có hiệu lực.**

Cập nhật lần cuối: 28/08/2026

## Nói ngắn gọn

- Salony giữ dữ liệu tiệm ngay trên máy của bạn. Lịch hẹn, hóa đơn, khách
  hàng, nhân viên, giá, hoa hồng, chi trả — tất cả được ghi vào máy và nằm
  lại ở đó.
- Nhà phát triển không nhận dữ liệu đó. Không có máy chủ nào giữ tiệm của
  bạn, và không ai giữ bản sao sổ sách của bạn. Đăng nhập để dùng Relay
  internet của nhà phát triển thì tạo một tài khoản; vận hành tiệm thì không
  cần.
- Khi các máy của bạn đồng bộ với nhau, mọi thứ được mã hoá đầu cuối. Nếu bạn
  bật đồng bộ qua internet, máy chủ trung chuyển chỉ chuyển tiếp gói đã niêm
  phong mà nó không mở được.
- Báo cáo lỗi và sử dụng là ẩn danh, không gắn với tài khoản, và chỉ được gửi
  khi bạn đồng ý. Bạn có thể từ chối, hoặc đổi ý sau, và sẽ không có gì được
  gửi đi nữa.
- Bạn có thể xuất toàn bộ dữ liệu trên một máy, và xoá bản trên máy đó bằng
  cách gỡ ứng dụng. Xoá tài khoản là việc khác: xoá bản ghi tài khoản và dừng
  gia hạn licence; không thể xoá dữ liệu tiệm trên máy của bạn.

Phần còn lại nói kỹ hơn, và nêu đúng những trường hợp dữ liệu rời khỏi máy.

## Ai đưa ra chính sách này

Salony do một cá nhân làm và phát hành, không phải một công ty. Tài liệu này
gọi người đó là **nhà phát triển**. Thắc mắc về chính sách này gửi tới
ntqui1502@gmail.com.

## Ai chịu trách nhiệm với dữ liệu của tiệm

Dữ liệu của tiệm — tên và số điện thoại khách, khách đặt gì, trả bao nhiêu —
do bạn thu thập, nằm trên máy của bạn và do bạn quyết định. Theo luật bảo vệ
dữ liệu, bạn là bên kiểm soát dữ liệu đó: bạn quyết định thu thập gì và giữ
bao lâu.

Nhà phát triển cũng không phải bên xử lý dữ liệu đó, vì dữ liệu chưa bao giờ
đến được tay họ. Họ không thể tra cứu một khách hàng, không thể xuất báo cáo
giúp bạn, không thể khôi phục một hóa đơn đã mất. Đó là hệ quả trực tiếp của
thiết kế, và nó đúng theo cả hai chiều: không ai khác chạm được vào dữ liệu
của bạn, và cũng không ai khác khôi phục hộ bạn được.

## Salony lưu gì trên máy của bạn

- **Event log.** Mỗi thay đổi bạn làm được ghi thêm dưới dạng một bản ghi có
  chữ ký: tiệm, nhân viên, dịch vụ và giá, quy tắc hoa hồng, lịch làm việc,
  khách hàng, lịch hẹn, hóa đơn, điều chỉnh, chi trả. Không có gì bị ghi đè;
  điều chỉnh là một bản ghi mới.
- **Các bảng đã biên dịch** từ event log để màn hình mở nhanh.
- **Ảnh bạn chọn** — logo tiệm, ảnh nhân viên và khách — được sao vào vùng
  lưu trữ riêng của ứng dụng.
- **Identity của máy.** Một cặp khoá Ed25519. Nửa khoá riêng nằm trong kho
  bảo mật của hệ điều hành (Keychain trên máy Apple, Keystore trên Android,
  DPAPI trên Windows) và không rời khỏi đó.
- **Các thiết bị đã tin cậy** cùng khoá cần để nhận ra nhau.
- **Cài đặt của bạn**: ngôn ngữ, giao diện, tiền tệ, máy in, các lựa chọn
  đồng ý.
- **File model AI**, nếu bạn tải trợ lý AI chạy trên máy.

Không phần nào trong số này được gửi về nhà phát triển.

## Dữ liệu rời khỏi máy khi nào

### 1. Đồng bộ giữa các máy của chính bạn

Các máy đã ghép cặp trao đổi event log trực tiếp với nhau — trên cùng mạng
Wi-Fi, hoặc qua internet nếu bạn bật. Kết nối được mã hoá đầu cuối bằng giao
thức Noise và chỉ mở giữa những máy đã ghép cặp bằng mã QR. Máy chưa ghép cặp
không vào được, và cũng không đọc được gì trên đường truyền.

### 2. Máy chủ trung chuyển (tuỳ chọn, mặc định tắt)

Đồng bộ qua internet là một công tắc bạn bật trên từng máy. Khi bật, các máy
của bạn kết nối tới Relay do nhà phát triển vận hành để gặp được nhau dù khác
mạng.

Relay chỉ chuyển tiếp gói đã niêm phong. Nó không giữ khoá nào mở được gói
đó, nên không đọc được một lịch hẹn, một hóa đơn hay một tên khách nào. Nó
không lưu dữ liệu kinh doanh; gói chưa giao được giữ lại vài giờ để máy đang
tắt còn nhận, sau đó bị bỏ.

Để định tuyến, Relay buộc phải thấy một số thông tin kết nối: địa chỉ mạng
máy kết nối từ đó, thời điểm kết nối và ngắt, kích thước gói, và một mã định
tuyến vô nghĩa với người ngoài. Nếu có gói thuê bao, Relay còn thấy licence
token trình ra lúc kết nối. Token đó được thiết kế để không mang tên tiệm,
không mang mã tiệm và không mang tên người nào.

### 3. Báo cáo lỗi và sử dụng (tuỳ chọn, tắt cho tới khi bạn đồng ý)

Salony hỏi một lần, sau bước khởi tạo, rằng có được gửi thông tin chẩn đoán
ẩn danh hay không. Trước khi bạn trả lời thì không có gì được gửi, và nếu bạn
từ chối thì không bao giờ có gì được gửi. Nếu bạn đồng ý, những thứ sau đi
tới [Sentry](https://sentry.io/privacy/) — bên xử lý thay mặt nhà phát triển:

- **Báo cáo sự cố**: stack trace, phiên bản ứng dụng, model máy, phiên bản hệ
  điều hành và bộ nhớ trống tại thời điểm lỗi.
- **Dấu vết kèm theo sự cố**: chỉ có tên — màn hình nào đang mở, đồng bộ đang
  ở bước nào, và một thao tác như duyệt hóa đơn thành công hay thất bại. Bản
  thân hóa đơn không bao giờ được gửi kèm.
- **Tình trạng phiên bản**: một tín hiệu ẩn danh lúc mở và đóng ứng dụng, gồm
  phiên bản ứng dụng và phiên làm việc có gặp lỗi hay không, gắn với một mã
  ngẫu nhiên của lần cài đặt.

Dữ liệu kinh doanh của tiệm, event log, khoá identity, file sao lưu và thông
tin cá nhân không bao giờ nằm trong đó. Ứng dụng được viết để loại chúng ra:
những dấu vết hệ thống tự thu thập bị bỏ hẳn chứ không phải lọc bớt, ảnh màn
hình và cây giao diện bị tắt, và không có hồ sơ người dùng hay định danh theo
địa chỉ IP nào được gắn vào.

Bạn có thể rút lại đồng ý bất cứ lúc nào trong **Cài đặt → Quyền riêng tư**.
Rút lại có hiệu lực ngay: những báo cáo còn chờ gửi bị bỏ đi chứ không được
gửi nốt.

### 4. Tải model AI về máy (tuỳ chọn)

Nếu bạn bật trợ lý AI, ứng dụng tải một file model từ máy chủ của nhà cung
cấp model. Đó là một lượt tải file bình thường — bên đó thấy địa chỉ mạng
của bạn như mọi lượt tải khác, và không có gì về tiệm của bạn được gửi đi.
Tải xong, trợ lý chạy hoàn toàn trên máy.

### 5. Tài khoản để đồng bộ qua internet (tuỳ chọn)

Chạy Salony trên một máy, ghép cặp máy, đồng bộ trong cùng mạng, và dùng trợ
lý AI trên máy đều không cần tài khoản. Tài khoản chỉ cần khi bạn dùng máy
chủ trung chuyển do nhà phát triển vận hành, vì đó là hạ tầng của họ.

Bạn tạo tài khoản bằng cách đăng nhập với Apple hoặc Google. Salony không
cấp mật khẩu. Đăng nhập chính là lúc bạn đồng ý cho việc xử lý này, với mục
đích vừa nêu.

Bản ghi tài khoản chỉ giữ:

- nhà cung cấp đăng nhập (`google` hoặc `apple`) và mã người dùng (`sub`)
  của nhà cung cấp đó, hai thứ này ghép lại là khoá của tài khoản
- địa chỉ e-mail nhà cung cấp đưa, được đánh dấu khi đó là địa chỉ Ẩn email
  của tôi (private relay) của Apple
- thời điểm tạo tài khoản và thời điểm thấy lần cuối
- trạng thái thuê bao, và các mã licence (`lic`) đã cấp cho tài khoản

Nó không giữ mã tiệm, khoá máy hay khoá tác giả, bất kỳ dữ liệu kinh doanh
nào của tiệm, hay bất kỳ mã nào từ báo cáo lỗi và sử dụng ở mục 3. Những
báo cáo đó vẫn ẩn danh: không có mã tài khoản hay e-mail nào được gửi kèm,
và không có mã chẩn đoán nào được lưu cạnh tài khoản.

Bản ghi được giữ suốt thời gian tài khoản còn tồn tại. Để xoá, hãy gửi thư
tới ntqui1502@gmail.com. Xoá một tài khoản là xoá bản ghi tài khoản và dừng
gia hạn licence. Việc đó không, và không thể, xoá dữ liệu của một tiệm — dữ
liệu đó nằm trên máy của tiệm.

Đăng xuất trên một máy làm máy đó ngừng gia hạn licence. Việc đó không xoá
tài khoản.

### 6. Ngoài ra không còn gì

Salony không có quảng cáo, không có mã định danh quảng cáo, không có công cụ
phân tích nào khác ngoài phần chẩn đoán bạn đã đồng ý ở trên.

## Nhập bằng giọng nói

Tính năng đọc để lên hóa đơn chỉ nghe trong lúc bạn giữ nút. Giọng nói được
nhận dạng ngay trên máy bằng phần mềm đi kèm ứng dụng. Âm thanh không được
ghi lại, không được lưu, và không được gửi đi đâu.

## Quyền truy cập trên máy

- **Camera** — để quét mã QR ghép cặp. Không ảnh nào được lưu hay gửi đi.
- **Thư viện ảnh** — chỉ những ảnh bạn chọn làm logo hoặc ảnh đại diện.
- **Mạng nội bộ** — để tìm và kết nối các máy khác của bạn trên cùng Wi-Fi.
- **Bluetooth** — để gửi biên lai sang máy in nhiệt trong tiệm.
- **Micro** — nhập bằng giọng nói, như nói ở trên.
- **Thông báo** — để báo khi một máy khác vừa đồng bộ thay đổi.

Mỗi quyền dùng đúng cho việc đó, không dùng cho việc khác.

## Sao lưu do điện thoại hoặc máy tính tự làm

Bản xuất của Salony là một file đã mã hoá, bạn cất ở đâu là tuỳ bạn (xem
dưới). Ngoài ra, hệ điều hành của máy có thể đưa dữ liệu ứng dụng vào bản sao
lưu của chính nó — iCloud, Google, hoặc sao lưu qua máy tính — nếu bạn đang
bật. Những bản sao lưu đó theo điều khoản của Apple hoặc Google và theo cài
đặt của bạn, không theo chính sách này. Nếu bạn không muốn dữ liệu tiệm nằm
trên bản sao lưu đám mây, hãy tắt sao lưu cho Salony trong cài đặt hệ điều
hành.

## Giữ bao lâu, xuất ra và xoá đi

- **Trên máy**, dữ liệu được giữ cho tới khi bạn xoá. Event log chỉ ghi thêm:
  một điều chỉnh là bản ghi mới, nên lịch sử thay đổi vẫn đọc được.
- **Xuất dữ liệu**: Cài đặt → Sao lưu tạo file `salony.backup.v1` được mã hoá
  bằng mật khẩu bạn tự đặt. Mật khẩu đó không được lưu trong ứng dụng và
  không thể khôi phục. Báo cáo cũng có thể xuất ra CSV.
- **Xoá**: gỡ ứng dụng là xoá dữ liệu cục bộ của nó, gồm event log và các
  khoá giữ cho dữ liệu đó. Không có bản sao dữ liệu tiệm trên đám mây, nên
  việc này là dứt điểm đối với bản trên máy đó — hãy xuất dữ liệu trước nếu
  sau này bạn còn cần.
- **Tài khoản**: bản ghi tài khoản được giữ cho tới khi bạn yêu cầu xoá.
  Gửi thư tới ntqui1502@gmail.com. Xoá tài khoản là xoá bản ghi tài khoản và
  dừng gia hạn licence. Việc đó không, và không thể, xoá dữ liệu của tiệm —
  dữ liệu đó nằm trên máy của tiệm.
- **Dữ liệu chẩn đoán** ở Sentry được giữ 90 ngày rồi xoá. Trong đó không có
  dữ liệu tiệm.
- **Relay**: gói chưa giao được bỏ sau vài giờ; ngoài ra không giữ gì.

## Quyền của bạn

Vì dữ liệu tiệm không bao giờ đến chỗ nhà phát triển, các yêu cầu xem, sửa,
xuất hay xoá dữ liệu đó do ứng dụng đáp ứng chứ không phải họ: mọi thứ đã
nằm sẵn trên máy bạn, xuất được từ Cài đặt, và xoá được bằng cách gỡ ứng
dụng.

Với tài khoản, gửi thư tới ntqui1502@gmail.com để xem, sửa hoặc xoá những gì
đang được giữ. Xoá tài khoản là xoá bản ghi tài khoản và dừng gia hạn
licence; không xoá dữ liệu tiệm trên máy của bạn.

Với phần chẩn đoán bạn đã đồng ý, bạn có thể rút lại đồng ý bất cứ lúc nào
trong Cài đặt để dừng hẳn việc thu thập, và có thể gửi thư tới
ntqui1502@gmail.com để hỏi những gì đang được giữ theo mã cài đặt của bạn
và yêu cầu xoá.

## Trẻ em

Salony là công cụ để vận hành một cơ sở kinh doanh, không hướng tới trẻ em.

## Thay đổi chính sách

Nếu chính sách này thay đổi đáng kể, bản mới sẽ được đăng tại địa chỉ đang
phục vụ tài liệu này kèm ngày cập nhật mới, và bản trong ứng dụng sẽ được cập
nhật ở lần phát hành kế tiếp.

## Liên hệ

Salony — ntqui1502@gmail.com
