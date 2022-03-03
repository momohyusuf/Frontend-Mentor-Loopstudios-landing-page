const toggleBtn = document.getElementById('sidebar-toggle')
const closeBtn = document.getElementById('close-btn')
const sideBarLinks = document.querySelector('.sidebar')


toggleBtn.addEventListener("click", () => {
    sideBarLinks.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', () => {
    sideBarLinks.classList.toggle('show-sidebar')
})
