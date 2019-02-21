window.onload = function() {
  Particles.init({
    // normal options
    selector: '.background',
    maxParticles: 120,
    connectParticles: true,
    color: '#cc713d',

    // options for breakpoints
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 70,
          color: '#cc713d',
          connectParticles: true
        }
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 0
        }
      },
      {
        breakpoint: 375,
        options: {
          maxParticles: 0
        }
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 0

          // disables particles.js
        }
      }
    ]
  });
};
