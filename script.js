// Dropdown Click Functionality
document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".dropdown");
    dropdown.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});
setInterval(function() {
  let slider = document.querySelector('.slider');
  slider.appendChild(slider.firstElementChild);
}, 3000);
<script>
document.addEventListener("DOMContentLoaded", function() {
    let currentPage = window.location.pathname.split("/").pop(); // Get current page name
    let menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Add active class
        }
    });
});
</script>
function showService(serviceId) {
    // Sabhi service-box ko hide karo
    document.querySelectorAll('.service-box').forEach(box => {
        box.style.display = "none";
    });

    // Jo click hua hai usko "flex" kar ke show karo
    document.getElementById(serviceId).style.display = "flex";
}
document.querySelectorAll('.service-box').forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });
});
  function showCategory(category) {
            let categories = document.querySelectorAll('.service-category');
            let buttons = document.querySelectorAll('.category-btn');

            categories.forEach(cat => {
                cat.classList.remove('active');
            });
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

            document.getElementById(category).classList.add('active');
            document.querySelector([onclick="showCategory('${category}')"]).classList.add('active');
        }