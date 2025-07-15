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
  setUser(user);
});

async function setUser(formData) {
  try {
    const response = fetch("http://127.0.0.1:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      alert("✅ Заявка надіслана успішно!");
      form.reset();
    } else {
      alert("❌ Помилка: " + result.error);
    }
  } catch (error) {
    console.error("Помилка при надсиланні форми:", error);
    alert("❌ Сталася помилка. Спробуйте пізніше.");
  }
}
