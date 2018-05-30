(() => {
  const [current, images] = [
    document.querySelector('#current'),
    document.querySelectorAll('.images img')
  ];
  const opacity = 0.6;

  // set first image opacity
  images[0].style.opacity = opacity;

  const handleImgClick = e => {
    // Reset the opacity
    images.forEach(img => (img.style.opacity = 1));

    // Change big image
    current.src = e.target.src;

    // Add fade in class
    current.classList.add('fade-in');

    // Remove fade in class
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // Change the opacity
    e.target.style.opacity = opacity;
  };

  images.forEach(img => img.addEventListener('click', handleImgClick));
})();
