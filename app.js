// app.js

// Simular datos de episodios
const episodios = [
    {
      titulo: 'Episodio 1',
      descripcion: 'En este primer episodio le pedimos al usuario que seleccione cualquier canal para poder observar o escuchar nuestro Podcast 🙃😊',
      fecha: '2024-04-13',
      youtubeUrl: 'https://youtu.be/jdaBQnW8pPY',
      spotifyUrl: 'https://podcasters.spotify.com/pod/show/voces-delmas-alla/episodes/Voces-del-Mas-all-e2j9ldl',
      tiktokUrl: 'https://www.tiktok.com/@voces_delmas_alla',
      instagramUrl: 'https://www.instagram.com/voces_del_mas_alla999'
    },
    // ... otros episodios
    {titulo: 'Episodio 2',
      descripcion: 'Esta seccion estaremos entrevistando al Profesor Luis Morataya ',
      fecha: '2024-04-14',
      youtubeUrl: 'https://drive.google.com/file/d/1cRJ6d4TEVAPc8ccJVvj2LBK7T-XkMip_/view?usp=sharing',
      spotifyUrl: 'https://podcasters.spotify.com/pod/show/voces-delmas-alla/episodes/voces-del-mas-all-e2j9mrk',
      tiktokUrl: 'https://www.tiktok.com/@voces_delmas_alla',
      instagramUrl: 'https://www.instagram.com/voces_del_mas_alla999'
}, 
{
    titulo: 'Episodio 3',
      descripcion: 'El profesor Rubben nos estara narrando lo que el piensa de este tema',
      fecha: '2024-04-15',
      youtubeUrl: 'https://youtu.be/MV_hws5NEvE',
      spotifyUrl: 'https://podcasters.spotify.com/pod/show/voces-delmas-alla/episodes/Voces-del-mas-Alla-e2j9n38',
      tiktokUrl: 'https://www.tiktok.com/@voces_delmas_alla',
      instagramUrl: 'https://www.instagram.com/voces_del_mas_alla999'
}, 
{
    titulo: 'Episodio 4',
      descripcion: 'En este ultima seccion nos encontramos con la Maestra Ninoshka, narrando sobre las experiencias en su vida conforme a nuestro tema (VOCES DEL MAS ALLA)',
      fecha: '2024-04-16',
      youtubeUrl: 'https://youtu.be/d2E8vlrFCjQ',
      spotifyUrl: 'https://podcasters.spotify.com/pod/show/voces-delmas-alla/episodes/Voces-del-mas-all-e2j9n1i',
      tiktokUrl: 'https://www.tiktok.com/@voces_delmas_alla',
      instagramUrl: 'https://www.instagram.com/voces_del_mas_alla999'
}
  ];
  // Función para renderizar los episodios
  function renderizarEpisodios() {
    const episodiosList = document.querySelector('.episode-list');
    episodios.forEach(episodio => {
      const episodioElement = document.createElement('div');
      episodioElement.classList.add('episode');
      episodioElement.innerHTML = `
        <h3>${episodio.titulo}</h3>
        <p>${episodio.descripcion}</p>
        <p>Fecha: ${episodio.fecha}</p>
        <div class="episode-links">
          <a href="${episodio.youtubeUrl}" target="_blank"><i class="fab fa-youtube"></i> YouTube</a>
          <a href="${episodio.spotifyUrl}" target="_blank"><i class="fab fa-spotify"></i> Spotify</a>
          <a href="${episodio.tiktokUrl}" target="_blank"><i class="fab fa-tiktok"></i> TikTok</a>
          <a href="${episodio.instagramUrl}" target="_blank"><i class="fab fa-instagram"></i> Instagram</a>
        </div>
      `;
      episodiosList.appendChild(episodioElement);
    });
  }
  
  // Llamar a la función para renderizar los episodios
  renderizarEpisodios();
  function manejarSuscripcion(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página
  
    const emailInput = document.querySelector('#suscripcion input[type="email"]');
    const email = emailInput.value;
  
    // Aquí puedes agregar la lógica para enviar el correo electrónico a tu sistema de suscripción
    // Por ejemplo, puedes usar una API de servicios de correo electrónico o enviar los datos a un servidor
  
    console.log('Nuevo suscriptor:', email);
  
    // Restablece el valor del input
    emailInput.value = '';
  } 
  const suscripcionForm = document.querySelector('#suscripcion form');
suscripcionForm.addEventListener('submit', manejarSuscripcion); 

// carrusel
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showNextImage() {
  carouselItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[currentIndex].classList.add('active');
}

setInterval(showNextImage, 5000); // Cambia la imagen cada 5 segundos
