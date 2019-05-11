..)V-if V-show
..)V-model
..){{....}}
..)v-bind (Sử dụng để định nghĩa class)
<div v-bind:class="{ active: isActive }"></div>
data: {
  isActive: true,
  hasError: false
}
or <div v-bind:class="classObject"></div>
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
..)v-for (Render)
..)v-on (Click,....)
--)Vue Instance
- var vm = new Vue ({})  //Khởi tại Vue instance
- Gắn vue instance với 1 một thẻ html thông qua el
- thứ ba là các dữ liệu cần hiển thị trên view (giao diện) cần khai báo thông qua thành phần data
- thứ tư là các phương thức bạn có thể viết trong thành phần methods
computed: cho phép khai báo các phương thức trả về giá trị giống như methods nhưng chỉ tính toán lại khi có thay đổi, các phương thức trong methods thì luôn được tính toán lại mỗi lần gọi.
watch: khai báo các phương thức trả về giá trị phụ thuộc các biến khác và tự động cập nhật khi các biến đó thay đổi.
template, component: tạo các thành phần có thể sử dụng lại giúp xây dựng những hệ thống lớn.
các phương thức được kích hoạt (hook) trong các sự kiện xảy ra trong vòng đời của Vue instance.