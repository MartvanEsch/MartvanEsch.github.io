console.log('linked');

let name = document.getElementById('name');
let articles = document.querySelectorAll('article');
console.log(articles);
let viewportHeight = window.innerHeight;
let hiddenHeight = viewportHeight * 0.2;

function checkArticles() {
    articles.forEach(article => {
        console.log(article.getBoundingClientRect().top);
        console.log(hiddenHeight);

        if (article.getBoundingClientRect().top < hiddenHeight) {
            article.classList.add('sizeDown');
            article.style.zIndex = -10;
        } else {
            article.classList.remove('sizeDown');
        }
    });
}

document.addEventListener('scroll', function() {
    requestAnimationFrame(checkArticles);
});