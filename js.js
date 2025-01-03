function toggleShare() {
    const redes = document.querySelector('.redes');
    const triangulo = document.querySelector('.triangulo');
    const circulomovil = document.querySelector('.circulomovil');
  
    // Alterna la clase 'hidden' en los elementos
    redes.classList.toggle('hidden');
    triangulo.classList.toggle('hidden');
    circulomovil.classList.toggle('hidden');
}

function toggleShareMovil(){
  const circulomovil = document.querySelector('.circulomovil');
  const triangulo = document.querySelector('.triangulo');
  const redes = document.querySelector('.redes');

  redes.classList.toggle('hidden');
  triangulo.classList.toggle('hidden');
  circulomovil.classList.toggle('hidden');
}


