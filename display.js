export function displayCharacters(characters, container) {
    characters.forEach(character => {
      const characterCard = createCharacterCard(character);
      container.appendChild(characterCard);
    });
  }
  
  export function clearCharacters(container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
  
  function createCharacterCard(character) {
    const characterCard = document.createElement('div');
    characterCard.classList.add('character-card');
  
    const nameElement = document.createElement('h2');
    nameElement.textContent = character.name;
    characterCard.appendChild(nameElement);
  
    const ageElement = document.createElement('p');
    ageElement.textContent = `Age: ${character.age}`;
    characterCard.appendChild(ageElement);
  
    const interestsElement = document.createElement('p');
    interestsElement.textContent = `Interests: ${character.interests.join(', ')}`;
    characterCard.appendChild(interestsElement);
  
    const personalityElement = document.createElement('p');
    personalityElement.textContent = `Personality: ${character.personality}`;
    characterCard.appendChild(personalityElement);
  
    const bioElement = document.createElement('p');
    bioElement.textContent = character.bio;
    characterCard.appendChild(bioElement);
  
    return characterCard;
  }