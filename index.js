const x = document.querySelector('#close');
const bar = document.querySelector('#bar');
const lists = document.querySelector('.list');


bar.addEventListener('click', () => {
    openMenu();
} );
x.addEventListener('click', () => {
    closeMenu();
} );

function openMenu(){
    lists.style.display = 'flex';
    bar.style.display = 'none';
    x.style.display = 'flex';
}
function closeMenu(){
    lists.style.display = 'none';
    bar.style.display = 'flex';
    x.style.display = 'none';
}