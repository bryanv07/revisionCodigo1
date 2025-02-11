const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

const $n = document.querySelector('#name'); // 🔹 Agregué el "#" porque "name" solo no es un selector válido.
const $b = document.querySelector('#blog'); 
const $l = document.querySelector('.location');

async function displayUser(username) { // 🔹 La función debe ser async para poder usar await dentro.
  try {
    $n.textContent = 'Cargando...';

    const response = await fetch(`${usersEndpoint}/${username}`);
    
    if (!response.ok) throw new Error('No se pudo obtener el usuario'); // 🔹 Se valida que la respuesta sea exitosa antes de convertirla a JSON.

    const data = await response.json(); // 🔹 Se debe convertir la respuesta a JSON antes de acceder a sus propiedades.
    console.log(data);

    $n.textContent = data.name || 'No disponible'; // 🔹 Si el dato es null o undefined, mostrar un valor por defecto.
    $b.textContent = data.blog || 'No disponible';
    $l.textContent = data.location || 'No disponible';
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err.message}`; // 🔹 Se usó "$n" en lugar de "n" porque "n" no estaba definido.
}

displayUser('stolinski');
