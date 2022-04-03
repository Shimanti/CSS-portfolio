const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')

function pageTransitions() {
    // change active-btn 
    sectBtn.forEach(btn => btn.addEventListener('click', ()=>{
        let currentBtn = document.querySelector('.active-btn')
        currentBtn.classList.remove('active-btn')
        btn.classList.add("active-btn")
     })
    )

    // change mainscreen 
    allSections.addEventListener('click', e => {
        // pick id that is the same as the data-id
        const id = e.target.dataset.id
        if(id) {
            // hide other sections
            sections.forEach(section => section.classList.remove('active'))

            // show section with id 
            const element = document.getElementById(id)
            element.classList.add('active')
        }
    })
}
pageTransitions()