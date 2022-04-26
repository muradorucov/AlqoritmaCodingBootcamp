const character1 = '{"agility": 15, "intelligence": 15, "strength": 150, "magicPower": 5500, "magicResist": 2000, "armor": true}';
const character2 = '{"agility": 20, "intelligence": 10, "strength": 150, "magicPower": 5000, "magicResist": 2500, "armor": true}';
const obj1 = JSON.parse(character1);
const obj2 = JSON.parse(character2);
obj1.agility = 35, obj1.intelligence = 35;
obj1.agility = 40, obj1.intelligence = 30;

const strObj1 = JSON.stringify(obj1);
const strObj2 = JSON.stringify(obj2);
console.log(strObj1, strObj2)