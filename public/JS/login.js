import { getUserData, Loginuser } from "../../components/api_user.js";

const loginForm = async (e) => {
  e.preventDefault();
  console.log("Login form submitted!");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = { email, password };
  console.log("User login attempt:", user);

  try {
    const response = await Loginuser(user);
    console.log("Login response:", response);

    if (response) {
      console.log("Login successful! Redirecting...");
      localStorage.setItem("token", response.token);
      window.location.href = "/view/index.html";
    } else {
      console.error("Login failed: Invalid credentials");
      alert("Invalid email or password!");
    }
  } catch (error) {
    console.error("Login error:", error);
  }
};

document.getElementById("loginForm").addEventListener("submit", loginForm);
