require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);

const phil = new Person({
  name: "Phil",
  age: 25,
  favoriteFoods: ["Curry", "Yogurt", "Chocolate"],
});

const createAndSavePerson = (done) => {
  phil.save(function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

const arrayOfPeople = [
  {
    name: "Evil Phil",
    age: 250,
    favoriteFoods: ["Devil Fruit", "Mandrake Root", "Dark Potion"],
  },
  {
    name: "Good Phil",
    age: 90,
    favoriteFoods: ["Holy Water", "Apple of Eternal Life", "Light Potion"],
  },
  {
    name: "New Phil",
    age: 1,
    favoriteFoods: ["Milk", "More Milk", "Milk Again"],
  },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.error(err);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, people) => {
    if (err) return console.error(err);
    done(null, people);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, person) => {
    if (err) return console.error(err);
    done(null, person);
  });
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);
    done(null, person);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.update(personId, (err, person) => {
    if (err) console.error(err);
    person.favoriteFoods.push(foodToAdd);
    done(null, person.save());
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
