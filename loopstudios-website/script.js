const btn = document.getElementById('menu-btn')

document.getElementById('menu-btn').addEventListener('click', navToggle)


function navToggle() {
    btn.classList.toggle('open')
    document.getElementById('menu').classList.toggle('flex')
    document.getElementById('menu').classList.toggle('hidden')
}