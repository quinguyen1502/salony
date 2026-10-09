<!-- Generated from assets/legal/ by handbook/tool/sync_legal.py. Do not edit. -->
# Chính sách quyền riêng tư

**Bản nháp, đang chờ rà soát pháp lý. Chưa có hiệu lực.**

Cập nhật lần cuối: 05/10/2026

## Nói ngắn gọn

- Salony giữ dữ liệu tiệm ngay trên máy của bạn. Lịch hẹn, hóa đơn, khách
  hàng, nhân viên, giá, hoa hồng, chi trả — tất cả được ghi vào máy và nằm
  lại ở đó. Đó là sổ sách. Salony không giữ bản sao sổ sách nào trên đám
  mây; bản sao lưu đã mã hoá chỉ nằm ở chỗ bạn cất.
- Nhà phát triển không nhận sổ sách. Relay internet không đọc được chúng:
  nó chỉ chuyển tiếp gói đã niêm phong mà nó không mở được. Đăng nhập thì
  tạo một tài khoản; vận hành tiệm thì không cần. Cùng tài khoản đó mới cần
  khi bạn bật trang công khai.
- Trang công khai là tuỳ chọn, tắt cho tới khi chủ tiệm bật. Nếu bật, một
  **dịch vụ đặt lịch** — tách khỏi Relay — chỉ lưu brochure bạn chọn đăng
  và các *yêu cầu* đặt lịch từ người không dùng Salony. Tên, số điện thoại,
  email và ghi chú trên yêu cầu chỉ được giữ trong thời gian ngắn. Đó không
  phải bản sao sổ sách, và không phải Relay.
- Khi các máy của bạn đồng bộ với nhau, mọi thứ được mã hoá đầu cuối. Nếu
  bạn bật đồng bộ qua internet, Relay chỉ chuyển tiếp gói đã niêm phong mà
  nó không mở được. Relay vẫn không giữ sổ sách tiệm, snapshot hay yêu cầu
  đặt lịch.
- Báo cáo lỗi và sử dụng là ẩn danh, không gắn với tài khoản, và chỉ được
  gửi khi bạn đồng ý. Bạn có thể từ chối, hoặc đổi ý sau, và sẽ không có gì
  được gửi đi nữa.
- Bạn có thể xuất toàn bộ dữ liệu trên một máy, và xoá bản trên máy đó bằng
  cách gỡ ứng dụng. Xoá tài khoản là việc khác: xoá bản ghi tài khoản và
  dừng gia hạn licence; không thể xoá dữ liệu tiệm trên máy của bạn.

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

Nhà phát triển không phải bên xử lý sổ sách trên máy của bạn, vì những bản
ghi đó không đến được tay họ. Họ không thể tra cứu một khách trong tiệm,
không thể xuất báo cáo từ sổ sách, không thể khôi phục một hóa đơn đã mất.
Đó là hệ quả trực tiếp của thiết kế, và nó đúng theo cả hai chiều: không ai
khác chạm được vào sổ sách, và cũng không ai khác khôi phục hộ bạn được.

Nếu bạn bật trang công khai, bạn vẫn quyết định đăng gì và vẫn thu thập yêu
cầu đặt lịch từ người liên hệ tiệm. Bạn vẫn là bên kiểm soát dữ liệu được
lưu trên dịch vụ đó. Nhà phát triển vận hành dịch vụ đặt lịch giữ brochure
và các yêu cầu đang chờ, và chỉ là bên xử lý dữ liệu đã lưu đó, và chỉ khi
tính năng đang bật. Tắt trang thì ngừng nhận yêu cầu mới; không xoá sổ sách
trên máy của bạn.

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

Sổ sách trên máy không được gửi về nhà phát triển. Nếu bạn bật trang công
khai, máy chỉ gửi các trường brochure và ảnh bạn chọn đăng, rồi sau đó thu
các yêu cầu đặt lịch, như mô tả ở mục 6.

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

Relay không lưu trang công khai, snapshot, logo, danh mục dịch vụ, yêu cầu
đặt lịch, hay tên, số điện thoại, email từ form đặt lịch. Những thứ đó nằm
ở dịch vụ đặt lịch trong mục 6, nếu bạn bật, và không bao giờ nằm trên
Relay.

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

Bạn có thể rút lại đồng ý bất cứ lúc nào trong **Cài đặt → Nâng cao → Quyền riêng tư**.
Rút lại có hiệu lực ngay: những báo cáo còn chờ gửi bị bỏ đi chứ không được
gửi nốt.

### 4. Tải model AI về máy (tuỳ chọn)

Nếu bạn bật trợ lý AI, ứng dụng tải một file model từ máy chủ của nhà cung
cấp model. Đó là một lượt tải file bình thường — bên đó thấy địa chỉ mạng
của bạn như mọi lượt tải khác, và không có gì về tiệm của bạn được gửi đi.
Tải xong, trợ lý chạy hoàn toàn trên máy.

### 5. Tài khoản (tuỳ chọn)

Chạy Salony trên một máy, ghép cặp máy, đồng bộ trong cùng mạng, và dùng trợ
lý AI trên máy đều không cần tài khoản. Tài khoản chỉ cần khi bạn dùng Relay
do nhà phát triển vận hành, và khi bật trang công khai trên dịch vụ đặt lịch,
vì cả hai là hạ tầng của họ. Người mở trang công khai hoặc gửi yêu cầu đặt
lịch không được cấp tài khoản Salony.

Bạn tạo tài khoản bằng cách đăng nhập với Apple hoặc Google. Salony không
cấp mật khẩu. Đăng nhập chính là lúc bạn đồng ý cho việc xử lý này, với mục
đích vừa nêu. Đăng nhập không tự đăng trang; chủ tiệm vẫn phải bật.

Bản ghi tài khoản chỉ giữ:

- nhà cung cấp đăng nhập (`google` hoặc `apple`) và mã người dùng (`sub`)
  của nhà cung cấp đó, hai thứ này ghép lại là khoá của tài khoản
- địa chỉ e-mail nhà cung cấp đưa, được đánh dấu khi đó là địa chỉ Ẩn email
  của tôi (private relay) của Apple
- thời điểm tạo tài khoản và thời điểm thấy lần cuối
- trạng thái thuê bao, và các mã licence (`lic`) đã cấp cho tài khoản
- một mã tài khoản vô danh dùng để gắn trang công khai trên dịch vụ đặt
  lịch, nếu bạn bật. Đó không phải mã tiệm nội bộ.

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

### 6. Trang công khai và đặt lịch online (tuỳ chọn, tắt cho tới khi bạn bật)

Đây là dịch vụ tách khỏi Relay. Không dùng kho của Relay, và Relay vẫn không
nhận ra được tiệm nào.

Chủ tiệm đã đăng nhập có thể bật trang công khai cho một tiệm. Trước khi bật,
dịch vụ đặt lịch không giữ gì về tiệm đó. Quản lý có thể cập nhật phần đăng;
nhân viên không bật trang và không duyệt yêu cầu.

**Brochure.** Khi trang đang bật, dịch vụ đặt lịch lưu snapshot công khai mà
máy gửi: tên tiệm; mô tả công khai tuỳ chọn (không phải ghi chú nội bộ);
logo tuỳ chọn; địa chỉ và điện thoại tuỳ chọn; múi giờ và tiền tệ; giờ mở
cửa; và các dịch vụ bạn đánh dấu công khai (tên, mô tả tuỳ chọn, thời lượng,
giá, ảnh tuỳ chọn, nhóm tuỳ chọn). Nó cũng lưu một mã tiệm công khai, tên
link (slug), và số phiên bản để bản cũ không đè bản mới. Nó không nhận hồ sơ
nhân viên nội bộ, danh sách khách, lịch hẹn, hóa đơn, lịch làm việc, ghi chú
nội bộ, mã số thuế, hay event log.

Ai có link đều đọc được brochure đó. Đó chính là ý của trang công khai.

**Nhân viên trên trang.** Tiệm có thể đăng một tên hiển thị của nhân viên và
một ảnh tuỳ chọn lên trang công khai. Đó là tên công khai tiệm đã chọn, không
phải hồ sơ nhân viên nội bộ và không phải tài khoản đăng nhập. Ai có link đều
thấy. Tên và ảnh đó được gỡ khỏi trang công khai khi tiệm ngừng đăng.

**Yêu cầu đặt lịch.** Nếu bạn cũng nhận yêu cầu mới, khách có thể gửi một
hoặc nhiều dịch vụ tiệm đã đánh dấu công khai, tới mức trần tiệm đã đặt (từ
1 đến 12; nếu tiệm không đặt thì là 12). Khách cũng gửi ngày và giờ mong
muốn (là mong muốn, không phải chỗ đã giữ), tên và số điện thoại, và tuỳ
chọn email cùng ghi chú. Email trên yêu cầu là tuỳ chọn. Khách không được
cấp tài khoản Salony.

Dịch vụ đặt lịch không phải Relay và không phải sổ lịch hẹn của tiệm. Một
yêu cầu không phải một lịch hẹn. Yêu cầu chỉ thành lịch hẹn sau khi người có
quyền xác nhận trên máy tiệm. Dịch vụ đặt lịch không giữ cơ sở dữ liệu khách
hàng.

**Giữ yêu cầu bao lâu.** **7 ngày** sau khi một máy của tiệm đã lưu yêu cầu
và báo lại, dịch vụ đặt lịch xoá tên, số điện thoại, email và ghi chú của
khách. Nó giữ mã yêu cầu, tiệm, các dịch vụ (tên, thời lượng và giá tại lúc
gửi), ngày và giờ mong muốn, kết quả, các giá đã hiển thị, và đánh giá, để
trang trạng thái và trang đánh giá vẫn mở. Yêu cầu chưa được máy thu thì vẫn
được giữ ít nhất **30 ngày**.

**Trang trạng thái.** Trang trạng thái của một link yêu cầu hiện tên tiệm
cùng địa chỉ và số điện thoại tiệm đã đăng, các dịch vụ và giá đã hiện trên
form, ngày và giờ mong muốn, nhân viên mong muốn nếu khách có chọn, và yêu cầu
đã được tiếp nhận, đã được xác nhận, đã bị từ chối, hay lần đến đã hoàn tất.
Trang không hiện tên, số điện thoại, email hay ghi chú của khách. Tiếp nhận
nghĩa là tiệm sẽ xem xét yêu cầu. Điều đó không có nghĩa là đã đặt được giờ.

**Thư về yêu cầu.** Nếu khách để lại email, dịch vụ đặt lịch có thể gửi một
thư khi yêu cầu tới, một thư khi tiệm xác nhận hoặc từ chối, và sau khi lần
đến được đánh dấu hoàn tất, một thư nhắc kèm link đánh giá. Thư xác nhận đã
kèm sẵn link đánh giá đó. Thư dùng ngôn ngữ khách chọn trên form (tiếng Anh,
tiếng Việt hoặc tiếng Trung). Thư hiện tên và địa chỉ tiệm, các dịch vụ, ngày
và giờ mong muốn, kèm link tới trang trạng thái. Thư đi qua nhà cung cấp gửi
email do bên vận hành cấu hình; nhà cung cấp đó nhận địa chỉ email và nội dung
thư, không nhận tên, số điện thoại hay ghi chú của khách. Nếu email đã bị xoá thì không gửi thư
nhắc. Trang đánh giá vẫn mở được với người có link.

**Báo cho máy tiệm.** Máy tiệm đã đăng nhập có thể đăng ký một push token với
dịch vụ đặt lịch để được báo là có yêu cầu tới. Đây không phải Relay. Thông
báo được gửi qua Google Firebase Cloud Messaging. Tiêu đề
thông báo là Salony. Phần nội dung không chứa tên, số điện thoại, email của
khách, dịch vụ, giờ, ghi chú, hay nội dung đánh giá. Token bị xoá khi liên
kết công khai của tiệm bị xoá. Token không dùng để quảng cáo và không được
ghi vào nhật ký vận hành.

**Đánh giá.** Sau một lần đến đã hoàn tất, khách có thể để lại một đánh giá:
điểm từ 1 đến 5 và chữ tuỳ chọn dài tối đa 400 ký tự. Trang công khai hiện
điểm trung bình và các đánh giá tiệm chưa ẩn, không kèm tên khách. Ẩn một
đánh giá là gỡ đánh giá đó khỏi trang công khai và khỏi điểm trung bình công
khai. Dịch vụ đặt lịch vẫn giữ bản ghi đó. Lần gửi thứ hai không đổi đánh giá
đã lưu. Yêu cầu chưa hoàn tất thì không đánh giá được.

**Dịch vụ đặt lịch còn thấy gì.** Để phục vụ trang và hạn chế lạm dụng, nó
thấy địa chỉ mạng khách kết nối tới, như mọi website. Nó không dùng địa chỉ
đó để quảng cáo. Nhật ký vận hành không ghi tên, số điện thoại, email, ghi
chú của khách, nội dung đánh giá, hay push token.

**Giới hạn để bảo vệ mọi người.** Để trang không bị dùng để dội yêu cầu vào
một tiệm, hoặc gửi email cho người không hề yêu cầu, dịch vụ đặt lịch đếm
trong một thời gian ngắn số yêu cầu một số điện thoại gửi tới một tiệm, và
số tin nhắn gửi tới một địa chỉ email. Nó không giữ số điện thoại hay địa
chỉ cho việc này. Nó giữ một mã một chiều tạo từ đó bằng khoá bí mật, không
thể đổi ngược lại thành số hay địa chỉ, và mã của một số điện thoại ở mỗi
tiệm đều khác nhau. Mỗi lượt đếm bị xoá chậm nhất một ngày sau khi khoảng
thời gian của nó (một ngày) kết thúc. Khi chạm giới hạn, yêu cầu mới không
được nhận, hoặc tin nhắn không được gửi. Yêu cầu dịch vụ đã nhận thì không
bao giờ bị xoá vì một giới hạn.

**Tắt đi.** Bạn có thể để brochure lên mà không nhận yêu cầu mới, hoặc ẩn
trang. Ẩn trang không xoá sổ sách trên máy. Gỡ ứng dụng trên một máy không
tự gỡ trang công khai; hãy tắt trang từ máy chủ tiệm đã đăng nhập.

### 7. Ngoài ra không còn gì

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
- **Thông báo** — để báo khi một máy khác vừa đồng bộ thay đổi, hoặc khi
  dịch vụ đặt lịch báo máy tiệm đã đăng nhập rằng có yêu cầu tới.

Mỗi quyền dùng đúng cho việc đó, không dùng cho việc khác.

## Sao lưu do điện thoại hoặc máy tính tự làm

Bản sao lưu của Salony là file đã mã hoá, chỉ được cất vào chỗ bạn chọn (xem
dưới). Ngoài ra, hệ điều hành của máy có thể đưa dữ liệu ứng dụng vào bản sao
lưu của chính nó — iCloud, Google, hoặc sao lưu qua máy tính — nếu bạn đang
bật. Những bản sao lưu đó theo điều khoản của Apple hoặc Google và theo cài
đặt của bạn, không theo chính sách này. Nếu bạn không muốn dữ liệu tiệm nằm
trên bản sao lưu đám mây, hãy tắt sao lưu cho Salony trong cài đặt hệ điều
hành.

## Giữ bao lâu, xuất ra và xoá đi

- **Trên máy**, dữ liệu được giữ cho tới khi bạn xoá. Event log chỉ ghi thêm:
  một điều chỉnh là bản ghi mới, nên lịch sử thay đổi vẫn đọc được.
- **Sao lưu**: Cài đặt → Bảo vệ tiệm lưu một bản sao lưu dữ liệu tiệm đã
  mã hoá, và Salony kiểm tra từng bản. Bản bạn tự lưu được cất vào chỗ bạn
  chọn, mở bằng mã khôi phục hoặc bằng mật khẩu sao lưu bạn tự đặt. Mật khẩu
  đó không được lưu trong ứng dụng và không thể khôi phục.
- **Sao lưu tự động**, nếu bạn bật, tạo một bản mới khoảng mỗi ngày một lần,
  khi bạn mở hoặc rời ứng dụng, chỉ vào thư mục bạn chọn. Bản đó chỉ mở được bằng mã khôi phục của bạn.
  Trong thư mục đó, Salony giữ các bản mà máy ấy tạo trong 7 ngày, 4 tuần và
  3 tháng gần nhất, và xoá các bản cũ hơn do chính nó tạo. Salony không bao
  giờ xoá file không do nó tạo. Để tìm lại thư mục, Salony giữ tên thư mục và
  quyền mở thư mục đó, chỉ trên máy ấy.
- **Bản sao lưu nằm ở đâu**: nếu thư mục bạn chọn đồng bộ lên dịch vụ đám
  mây như iCloud Drive, OneDrive, Dropbox hay Google Drive, dịch vụ đó lưu
  các file theo điều khoản của họ và theo cài đặt của bạn. Salony và nhà
  phát triển không bao giờ nhận được bản sao lưu, mã khôi phục hay mật khẩu
  sao lưu của bạn, và không giữ bản nào.
- **Báo cáo** cũng có thể xuất ra CSV.
- **Xoá**: gỡ ứng dụng là xoá dữ liệu cục bộ của nó, gồm event log và các
  khoá giữ cho dữ liệu đó. Salony không giữ bản sao sổ sách nào trên đám
  mây, nên việc này là dứt điểm đối với bản trên máy đó — hãy sao lưu trước
  nếu sau này bạn còn cần. Trang công khai bạn để bật là việc khác (mục 6).
- **Tài khoản**: bản ghi tài khoản được giữ cho tới khi bạn yêu cầu xoá.
  Gửi thư tới ntqui1502@gmail.com. Xoá tài khoản là xoá bản ghi tài khoản và
  dừng gia hạn licence. Việc đó không, và không thể, xoá dữ liệu của tiệm —
  dữ liệu đó nằm trên máy của tiệm.
- **Dữ liệu chẩn đoán** ở Sentry được giữ 90 ngày rồi xoá. Trong đó không có
  dữ liệu tiệm.
- **Relay**: gói chưa giao được bỏ sau vài giờ; ngoài ra không giữ gì. Relay
  không giữ snapshot hay yêu cầu đặt lịch.
- **Dịch vụ đặt lịch**: brochure công khai được giữ khi bạn còn trang công
  khai. Yêu cầu chưa được máy thu thì vẫn được giữ ít nhất 30 ngày. 7 ngày
  sau khi một máy của tiệm đã lưu yêu cầu và báo lại, dịch vụ đặt lịch xoá
  tên, số điện thoại, email và ghi chú của khách. Nó giữ mã yêu cầu, tiệm,
  các dịch vụ, ngày và giờ mong muốn, kết quả, các giá đã hiển thị, và đánh
  giá, để trang trạng thái và trang đánh giá vẫn mở. Push token bị xoá khi
  liên kết công khai của tiệm bị xoá.

## Quyền của bạn

Vì sổ sách không bao giờ đến chỗ nhà phát triển, các yêu cầu xem, sửa, xuất
hay xoá dữ liệu đó do ứng dụng đáp ứng chứ không phải họ: mọi thứ đã nằm sẵn
trên máy bạn, xuất được từ Cài đặt, và xoá được bằng cách gỡ ứng dụng.

Nếu bạn đã bật trang công khai, bạn đổi hoặc gỡ brochure từ ứng dụng. Người
gửi yêu cầu đặt lịch là đang hỏi tiệm của bạn, không mở tài khoản Salony: họ
nên liên hệ bạn. Bạn xác nhận hoặc từ chối yêu cầu trên máy tiệm. Để hỏi dịch
vụ đặt lịch còn giữ gì với một yêu cầu chưa bị xoá, gửi thư tới
ntqui1502@gmail.com.

Với tài khoản, gửi thư tới ntqui1502@gmail.com để xem, sửa hoặc xoá những gì
đang được giữ. Xoá tài khoản là xoá bản ghi tài khoản và dừng gia hạn
licence; không xoá dữ liệu tiệm trên máy của bạn.

Với phần chẩn đoán bạn đã đồng ý, bạn có thể rút lại đồng ý bất cứ lúc nào
trong Cài đặt để dừng hẳn việc thu thập, và có thể gửi thư tới
ntqui1502@gmail.com để hỏi những gì đang được giữ theo mã cài đặt của bạn
và yêu cầu xoá.

## Trẻ em

Salony là công cụ để vận hành một cơ sở kinh doanh, không hướng tới trẻ em.
Trang công khai là brochure tiệm, không phải dịch vụ dành cho trẻ em.

## Thay đổi chính sách

Nếu chính sách này thay đổi đáng kể, bản mới sẽ được đăng tại địa chỉ đang
phục vụ tài liệu này kèm ngày cập nhật mới, và bản trong ứng dụng sẽ được cập
nhật ở lần phát hành kế tiếp.

## Liên hệ

Salony — ntqui1502@gmail.com
