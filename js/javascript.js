function carousel() {
    const carousel = document.querySelector('.carousel');
    carousel.classList.add('animate');
  
    setTimeout(() => {
      carousel.appendChild(carousel.firstElementChild);
      carousel.classList.remove('animate');
    },300); 
  
  }
  
  setInterval(carousel, 8000); // Tempo de duração de cada imagem em segundos (3 segundos)
  
  