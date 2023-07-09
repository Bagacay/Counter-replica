let counter = 0;


const count = document.querySelector('.count');
const btn = document.querySelectorAll('.btn');

btn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {

        const counts = e.currentTarget.classList;

        if (counts.contains('decrease')) {
            counter--;
        } else if (counts.contains('increase')) {
            counter++;
        } else {
            counter = 0;
        }

        if (counter < 0) {
            count.style.color = 'red';
        } else if (counter > 0) {
            count.style.color = 'green'
        } else {
            count.style.color = 'black'
        }
        count.textContent = counter;
    })
})
