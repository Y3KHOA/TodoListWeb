# TodoListWeb
# Ứng dụng Todo List

Ứng dụng web này cho phép bạn quản lý các công việc hàng ngày của mình bằng cách sử dụng Local Storage để lưu trữ.

## Tính năng

- **Thêm Công Việc:** Thêm các công việc mới vào danh sách Todo của bạn.
- **Chỉnh Sửa Công Việc:** Chỉnh sửa các công việc hiện có trực tiếp từ danh sách.
- **Xóa Công Việc:** Xóa các công việc khỏi danh sách khi chúng không cần thiết nữa.
- **Đánh Dấu Là Đã Hoàn Thành:** Đánh dấu công việc đã hoàn thành khi bạn hoàn thành chúng.
- **Lưu Trữ Lâu Dài:** Sử dụng Local Storage để lưu trữ công việc, do đó dữ liệu của bạn sẽ không bị mất khi bạn đóng trình duyệt hoặc làm mới trang.

## Công Nghệ Sử Dụng

- **HTML:** Cấu trúc của trang web.
- **CSS:** Thiết kế giao diện để có giao diện sạch và phản hồi.
- **JavaScript:** Các chức năng thêm, chỉnh sửa, xóa và đánh dấu công việc đã hoàn thành.
- **Local Storage:** API được sử dụng để lưu trữ công việc một cách cục bộ trong trình duyệt.
- **FontAwesome:** Biểu tượng được sử dụng cho nút chỉnh sửa và xóa.

## Hướng Dẫn Sử Dụng

1. **Thêm Công Việc:**
   - Nhập công việc của bạn vào ô nhập và nhấn "Add".

2. **Chỉnh Sửa Công Việc:**
   - Nhấn vào nút chỉnh sửa (biểu tượng bút) bên cạnh công việc bạn muốn chỉnh sửa.
   - Cập nhật công việc trong ô nhập xuất hiện và nhấn "Add" để lưu.

3. **Xóa Công Việc:**
   - Nhấn vào nút xóa (biểu tượng thùng rác) bên cạnh công việc bạn muốn xóa.

4. **Đánh Dấu Công Việc Đã Hoàn Thành:**
   - Nhấn vào ô checkbox bên cạnh công việc để đánh dấu là đã hoàn thành.
   - Các công việc đã hoàn thành sẽ hiển thị với đường gạch ngang.

5. **Lưu Trữ Lâu Dài:**
   - Các công việc của bạn được lưu trữ cục bộ trong Local Storage của trình duyệt.
   - Chúng sẽ tồn tại ngay cả khi bạn đóng trình duyệt hoặc làm mới trang.

## Cài Đặt

Để chạy ứng dụng Todo List trên máy tính của bạn:

1. Sao chép repository này:
   ```bash
   git clone https://github.com/your-username/todo-list.git

# Local Storage
- localStorage.setItem('keyName', value)
- localStorage.getItem('keyName')
- localStorage.removeItem('keyName')