const PASSWORD = "1102008";

const passwordScreen = document.getElementById("passwordScreen");
const homeScreen = document.getElementById("homeScreen");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const passwordInput = document.getElementById("passwordInput");

// دعم زر Enter لفتح الموقع
passwordInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    checkPassword();
  }
});

function checkPassword() {
  if (passwordInput.value.trim() === PASSWORD) {
    passwordScreen.classList.remove("active");
    setTimeout(() => {
      homeScreen.classList.add("active");
    }, 800);
  } else {
    alert("كلمة السر يادوده🥰");
  }
}

function openPage(page) {
  homeScreen.classList.remove("active");
  page1.classList.remove("active");
  page2.classList.remove("active");

  if (page === "page1") page1.classList.add("active");
  if (page === "page2") page2.classList.add("active");
}

function goHome() {
  page1.classList.remove("active");
  page2.classList.remove("active"); 
  homeScreen.classList.add("active");
}