const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate In - Overlay
        overlay.classList.add('overlay-slide-right'); 
        overlay.classList.remove('overlay-slide-left');
        // Animate In - NavItems
        navItems.forEach( item => {
            item.classList.remove(`slide-out-${navItems.indexOf(item) + 1}`);
            item.classList.add(`slide-in-${navItems.indexOf(item) + 1}`)
        });
    } else {
            // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate Out - NavItems
        navItems.forEach( item => {
            item.classList.remove(`slide-in-${navItems.indexOf(item) + 1}`);
            item.classList.add(`slide-out-${navItems.indexOf(item) + 1}`)
        });
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach( item => {item.addEventListener('click', toggleNav)});