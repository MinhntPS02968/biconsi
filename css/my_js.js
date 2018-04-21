// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('dienthoai').value == "" || document.getElementById('msg').value == "") {
alert("Vui lòng nhập đầy đủ thông tin !");
} else {
document.getElementById('form').submit();
}
}
function check_empty_m() {
if (document.getElementById('name_m').value == "" || document.getElementById('email_m').value == "" || document.getElementById('dienthoai_m').value == "" || document.getElementById('msg_m').value == "") {
alert("Vui lòng nhập đầy đủ thông tin !");
} else {
document.getElementById('form_m').submit();
}
}
//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
document.getElementById('buttonshow').style.display = "none";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
document.getElementById('buttonshow').style.display = "block";
}