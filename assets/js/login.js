function validateForm() {
    var text = document.getElementById("fullName").value.trim();
    var password = document.getElementById("password").value.trim(); 
    if (text === "" || password === "") {
        alert("Vui lòng điền đầy đủ thông tin!"); 
        return false; 
    }
    var textPattern = /^[a-zA-Z\s]{3,}$/;
    if (!text.match(textPattern)) {
        alert("Tên Không Hợp Lệ!"); 
        return false; 
    }
    window.location.href = "SieuPhamViet.html"; 
    return false;
}
