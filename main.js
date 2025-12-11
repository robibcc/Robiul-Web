
                      // Type script
const words = ["Robiul","Developer","Designer"]; // tumi ja chai
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;

const typedElement = document.getElementById('typed');

function type() {
  const word = words[i];
  if(isDeleting){
    currentWord = word.substring(0, currentWord.length - 1);
  } else {
    currentWord = word.substring(0, currentWord.length + 1);
  }

  typedElement.textContent = currentWord;

  let typeSpeed = 200;
  if(isDeleting) typeSpeed /= 2;

  if(!isDeleting && currentWord === word){
    typeSpeed = 1000;
    isDeleting = true;
  } else if(isDeleting && currentWord === ''){
    isDeleting = false;
    i = (i + 1) % words.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}




                   // Score Loading

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.stat-number');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const counter = entry.target;
        const targetText = counter.getAttribute('data-target') || counter.innerText;
        const hasPlus = targetText.includes('+');
        const target = parseInt(targetText.replace('+',''), 10);

        let count = 0;
        const increment = Math.ceil(target / 100); // smooth increment

        const updateCount = () => {
          if(count < target){
            count += increment;
            if(count > target) count = target; // max limit
            counter.innerText = count + (hasPlus ? '+' : '');
            setTimeout(updateCount, 15);
          } else {
            counter.innerText = target + (hasPlus ? '+' : '');
          }
        };

        updateCount();
        observer.unobserve(counter); // ekbar run hoile observer stop
      }
    });
  }, { threshold: 0.5 }); // 50% dekha hole animation start

  counters.forEach(counter => observer.observe(counter));
});


                  // Progresbar
document.addEventListener('DOMContentLoaded', () => {
  type();
});
document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.progress-bar');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const value = bar.getAttribute('data-progress');

        bar.style.width = value + '%';   // animate
        observer.unobserve(bar);         // only once
      }
    });
  });

  bars.forEach(bar => {
    observer.observe(bar);  // start watching
  });
});


