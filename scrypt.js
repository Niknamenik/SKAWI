const mainForm = document.getElementById("main-form");
const user = {
  name: "",
  email: "",
  phone: "",
  lenguage: "",
  id: "",
};
const inputs = document.getElementsByTagName("input");
const select = document.getElementById("leng_select");
mainForm.addEventListener("submit", (event) => {
  event.preventDefault();
  user.name = inputs[0].value;
  user.email = inputs[1].value;
  user.phone = inputs[2].value;
  user.lenguage = select.value;
  user.id = +new Date();
  console.log(user);
});
