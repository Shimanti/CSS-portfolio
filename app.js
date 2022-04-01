const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')

function pageTransitions() {
    // change active-btn to selected btn
    sectBtn.forEach(btn => btn.addEventListener('click', ()=>{
        let currentBtn = document.querySelector('.active-btn')
        currentBtn.classList.remove('active-btn')
        btn.classList.add("active-btn")
        console.log(btn)
     })
    )
}
pageTransitions()