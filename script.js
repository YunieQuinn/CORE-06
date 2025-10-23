let isLoggedIn = false;
let pets = [
  {
    id: 1,
    name: 'Gato Atigrado',
    subtitle: 'sustantivo',
    plural: 'Gatos Atigrados',
    description: 'Un gato con un pelaje distintivo que presenta rayas, puntos o patrones en remolino, usualmente con una marca en forma de "M" en su frente',
    likes: 0,
  },
  {
    id: 2,
    name: 'Golden Retriever',
    subtitle: 'sustantivo',
    plural: 'Golden Retrievers',
    description: 'Una raza de perro amistosa, inteligente y devota, conocida por su pelaje dorado y su habilidad para recuperar objetos sin dañarlos',
    likes: 0,
  }
];

const loginBtn = document.getElementById('loginBtn');
const addDefinitionBtn = document.getElementById('addDefinitionBtn');
const petsContainer = document.getElementById('petsContainer');

function init() {
  renderPets();

  loginBtn.onclick = toggleLogin;
  addDefinitionBtn.onclick = handleAddDefinition;

  window.handleLike = handleLike;
}

function renderPets() {
  petsContainer.innerHTML = '';

  pets.forEach(pet => {
    const petCard = document.createElement('div');
    petCard.className = 'pet-card';

    petCard.innerHTML = `
      <h2>${pet.name}</h2>
      <div class="subtitle">${pet.subtitle}</div>
      <div class="info">Plural: ${pet.plural}</div>
      <div class="description">${pet.description}</div>
      <button
        onclick="handleLike(${pet.id})"
      >
        ${pet.likes} me gusta
      </button>
    `;

    petsContainer.appendChild(petCard);
  });
}

function toggleLogin() {
  isLoggedIn = !isLoggedIn;
  loginBtn.textContent = isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión';
}

function handleAddDefinition() {
  addDefinitionBtn.classList.add('hidden');
}

function handleLike(petId) {
  const pet = pets.find(p => p.id === petId);
  if (!pet) return;

  pet.likes++;     
  alert(`${pet.name} was liked`);

  renderPets();
}

document.addEventListener('DOMContentLoaded', init);
