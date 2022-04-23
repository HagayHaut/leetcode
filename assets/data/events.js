const keys = document.querySelectorAll('.btn');

keys[0].onclick = () => console.log('Ctrl');
keys[1].onclick = () => console.log('Shift');
keys[2].onclick = () => console.log('J');
keys[3].onclick = () => console.log('command');
keys[4].onclick = () => console.log('option');
keys[5].onclick = () => console.log('J');


const title = document.querySelector('#title')

title.onclick = (e) => toggleButton(e);

function toggleButton(e) {
    if(e.target.textContent == 'Local IDE REPLit') {
        e.target.textContent = 'Still A REPLit..';
    } else {
        e.target.textContent = 'Local IDE REPLit';
    }
}
