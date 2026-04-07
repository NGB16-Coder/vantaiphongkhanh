// ===== XỬ LÝ MENU MOBILE =====

// Lấy các phần tử cần dùng
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navLinks = mainNav ? mainNav.querySelectorAll("a") : [];

// Hàm mở menu
function openMenu() {
  mainNav.classList.add("active");
  menuToggle.textContent = "✕";
  menuToggle.setAttribute("aria-expanded", "true");
  document.body.classList.add("menu-open");
}

// Hàm đóng menu
function closeMenu() {
  mainNav.classList.remove("active");
  menuToggle.textContent = "☰";
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

// Hàm chuyển trạng thái menu
function toggleMenu() {
  if (mainNav.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
}

// Bấm nút để mở/đóng menu
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMenu();
  });

  // Click vào link trong menu thì tự đóng
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  // Click ra ngoài menu thì tự đóng
  document.addEventListener("click", function (event) {
    const clickedInsideMenu = mainNav.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle && mainNav.classList.contains("active")) {
      closeMenu();
    }
  });

  // Resize lên desktop thì đóng menu
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
}


// Kiểm tra file JS đã tải thành công
console.log("Website Vận Tải Phong Khánh đã tải JavaScript thành công");