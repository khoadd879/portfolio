# Trần Khoa — Portfolio

Portfolio tiếng Việt bằng HTML/CSS/JavaScript thuần. Không cần cài thư viện hoặc build.

## Dự án & gallery

5 dự án: **BlindNav, IELTS Training App, Odoo Mechanic, ResortBooking và VietNamLaw**. Thẻ đầu nổi bật, bộ lọc theo lĩnh vực, mỗi thẻ mở dialog với 2 hình, mô tả, tính năng, công nghệ và link GitHub. Hỗ trợ phím trái/phải để chuyển ảnh, Escape để đóng, và trả focus về thẻ đã mở.

- `projects-data.js`: nội dung, repo, công nghệ và danh sách ảnh.
- `projects.css`: thẻ, bộ lọc và dialog responsive.
- `script.js`: render thẻ, lọc và điều khiển gallery.
- `assets/projects/`: hình được lưu trong repo, không phụ thuộc API GitHub khi xem trang.
- `index.html`, `styles.css`: cấu trúc và giao diện chung.

**Ảnh Odoo** lấy từ `khoadd879/odoo_mechanic`, nhánh `master`, thư mục `docs/sre_visual_evidence/after/` (`home-desktop.png`, `catalog-desktop.png`). Bốn dự án còn lại sử dụng **sơ đồ minh họa**, ghi rõ trong gallery; đây không phải ảnh giao diện hoặc bằng chứng tính năng đã chạy. Có thể thay bằng screenshot thật bằng cách cập nhật trường `images` của từng dự án.

Titan chưa được thêm vì chưa xác định được repository tương ứng.

## Xem trên máy

Mở `index.html`, hoặc chạy:

```sh
python3 -m http.server 8000
```

Truy cập http://localhost:8000. Font Google Fonts có font hệ thống dự phòng.

## Deploy GitHub Pages

Repository này đã có workflow trong `.github/workflows/`. Trong **Settings → Pages**, chọn **Source: GitHub Actions**. Push vào `main` để chạy workflow; theo dõi kết quả trong tab **Actions**.

Website: https://khoadd879.github.io/portfolio/

Cần đưa cả `projects-data.js`, `projects.css` và thư mục `assets` lên GitHub cùng các file HTML/CSS/JS khác. Đường dẫn tương đối hỗ trợ cả Pages của repository và site `khoadd879.github.io`.

## Nguồn mô tả

Nội dung được tóm tắt từ README và cấu trúc module công khai, không phải kết quả kiểm thử các ứng dụng:

- https://github.com/khoadd879/BlindNav
- https://github.com/khoadd879/ielts_training_app
- https://github.com/khoadd879/odoo_mechanic
- https://github.com/khoadd879/ResortBooking
- https://github.com/khoadd879/VietNamLaw

Không tự đồng bộ dữ liệu GitHub. Chỉnh `projects-data.js` khi dự án thay đổi.
