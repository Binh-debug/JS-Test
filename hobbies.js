function findAllHobbyists(hobby, hobbies) {
  let keys = Object.keys(hobbies);
  let result = [];
  for (let key of keys) {
    hobbies[key].forEach((element) => {
      if (element === hobby) {
        result.push(key);
      }
    });
  }
  console.log(result);
  return result;
}

var hobbies = {
  Steve: ["Fashion", "Piano", "Reading"],
  Patty: ["Drama", "Magic", "Pets", "Yoga"],
  Chad: ["Puzzles", "Pets", "Yoga"],
};
findAllHobbyists("Yoga", hobbies);
