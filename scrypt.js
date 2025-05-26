const mainForm = document.getElementById("main-form");
const user = {
  Name: "",
  Email: "",
  Phone: "",
  lenguage: "",
  id: "",
};
const inputs = document.getElementsByTagName("input");
const select = document.getElementById("leng_select");
mainForm.addEventListener("submit", (event) => {
  event.preventDefault();
  user.Name = inputs[0].value;
  user.Email = inputs[1].value;
  user.Phone = inputs[2].value;
  user.lenguage = select.value;
  user.id = +new Date();
  console.log(user);
});
