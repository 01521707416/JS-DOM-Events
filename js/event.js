console.log('This is a separate JS file');
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

const greenBtn = document.getElementById('make-green');
greenBtn.onclick = makeGreen;

const pinkBtn = document.getElementById('make-pink')
pinkBtn.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

const purpleBtn = document.getElementById('make-purple')
purpleBtn.addEventListener('click', function makePurple() {
    document.body.style.backgroundColor = 'purple';
});

document.getElementById('make_tomato').addEventListener('click', function () {
    document.body.style.backgroundColor = 'tomato';
})