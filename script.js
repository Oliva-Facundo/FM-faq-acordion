const acc = document.getElementsByClassName('question');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        
        for (let j = 0; j < acc.length; j++) {
            if (j !== i) {
                acc[j].classList.remove('active');
                const text = acc[j].nextElementSibling;
                text.style.display = 'none';
            }
        }

        this.classList.toggle('active');
        const text = this.nextElementSibling;
        if (text.style.display === 'block') {
            text.style.display = 'none';
        } else {
            text.style.display = 'block';
        }
    } )
}