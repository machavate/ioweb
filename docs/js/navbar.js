const OPEN_CLASS_NAME = 'open'
const CLOSE_CLASS_NAME = 'close'
const NAVBAR_CLASS_NAME = 'navbar'
const TOGGLER_CLASS_NAME = 'toggler'
const DROPDOWN_CLASS_NAME = 'dropdown'


const DATA_TARGET_ATTRIBUTE = 'data-target'
const ARIA_HIDDEN_ATTRIBUTE = 'aria-hidden'


const navbars = document.getElementsByClassName(NAVBAR_CLASS_NAME)

for (const navbar of navbars) {
    const toggler = navbar.getElementsByClassName(TOGGLER_CLASS_NAME)[0]
    const close = navbar.getElementsByClassName(CLOSE_CLASS_NAME)[0]

    const toggle = (value)=> {
        const target = document.getElementById(toggler.getAttribute(DATA_TARGET_ATTRIBUTE))
        target.setAttribute(ARIA_HIDDEN_ATTRIBUTE, value)
    }

    toggler.onclick = () => toggle(true)
    close.onclick = () => toggle(false)
}

const dropdowns = document.getElementsByClassName(DROPDOWN_CLASS_NAME)

for (const dropdown of dropdowns) {
    const toggler = dropdown.getElementsByClassName(TOGGLER_CLASS_NAME)[0]
    const target = document.getElementById(toggler.getAttribute(DATA_TARGET_ATTRIBUTE))
    toggler.onclick = (e)=> {
        e.preventDefault()
        target.classList.toggle(OPEN_CLASS_NAME)
    }
}