const keys = document.querySelectorAll('.btn');

keys[0].onclick = () => console.log('Ctrl');
keys[1].onclick = () => console.log('Shift');
keys[2].onclick = () => console.log('J');
keys[3].onclick = () => console.log('command');
keys[4].onclick = () => console.log('option');
keys[5].onclick = () => console.log('J');

const topics = [ 'Array', 'Object', 'Math', 'Recursion', 'String' ]

const title = document.querySelector('#title')
const randomTopicBtn = document.querySelector('#random-topic')

title.onclick = (e) => toggleButton(e);
randomTopicBtn.onclick = () => randomTopic(topics);

function toggleButton(e) {
    if(e.target.textContent == 'Local IDE REPLit') {
        e.target.textContent = 'Still A REPLit..';
    } else {
        e.target.textContent = 'Local IDE REPLit';
    }
}

function randomTopic(topics) {
    if(randomTopicBtn.textContent = 'Random DSA Topic') {
        function randomFromRange(min,max) {
            return Math.floor(Math.random() * (max - min) + min)
        }
        randomTopicBtn.textContent = `${topics[randomFromRange(0,topics.length)]} Algorithms`;
    } else {
        randomTopicBtn.textContent = 'Random DSA Topic';
    }
}


