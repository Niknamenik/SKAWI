document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("main-form");
  const subBtn = document.getElementById("submit_btn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    subBtn.disabled = true;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      language: form.language.value,
    };

    console.log(formData);

    try {
      const response = await fetch(
        "https://skawi-backend-1.onrender.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("✅ Заявка надіслана успішно!");
        form.reset();
      } else {
        alert("❌ Помилка: " + result.error);
      }

      subBtn.disabled = false;
    } catch (error) {
      console.error("Помилка при надсиланні форми:", error);
      alert("❌ Сталася помилка. Спробуйте пізніше.");
    }
  });
});
