// script to auto update copyright year

document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.getElementById('copyright-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});
