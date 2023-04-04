export function matchUsers(user, characters) {
    const scores = characters.map(character => {
      const sharedInterests = getSharedInterests(user, character);
      const score = sharedInterests.length;
      return { character, score };
    });
  
    scores.sort((a, b) => b.score - a.score);
  
    return scores.map(score => score.character);
  }
  
  function getSharedInterests(user, character) {
    return user.interests.filter(interest => character.interests.includes(interest));
  }
  
  export function getRandomCharacter(characters) {
    return characters[Math.floor(Math.random() * characters.length)];
  }