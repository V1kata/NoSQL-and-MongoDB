const mongoose = require('mongoose');
const Cat = require('./models/Cat')

async function main() {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://127.0.0.1:27017/catShelter');

    console.log('Database conected');
    // await saveCat('alaleaoasdas', 4, 'Jo mama');
    // const cats = await readCats();
    // cats.forEach(cat => {
    //     cat.greet();
    //     console.log(cat.info);
    // })

    // let oneCat = await readCat('Mishi');
    // console.log(oneCat)

    // await updateCat('Nav', 'Nabuchadnezzar');

    await deleteCat('Mishi');
}   

async function readCats() {
    const cats = await Cat.find();
    // console.log(cats);

    return cats;
}

async function saveCat(name, age, breed) {
    await Cat.create({
        name,
        age,
        breed
    })
    // const cat = new Cat({
    //     name,
    //     age,
    //     breed
    // });

    // await cat.save();
}

async function readCat(name) {
    const cat = await Cat.findById("63d245be7f7de4b665e6068d");

    return cat;
}

async function updateCat(name, newName) {
    await Cat.updateOne({ name }, { name: newName });
}

async function deleteCat(name) {
    await Cat.deleteOne({ name });
}

async function filterAge() {
    //They do the same thing, diff syntax
    
    Cat
        .find()
        .where('age')
        .gt(7)
        .lt(14);

    Cat.find({ age: { $gt: 7, $lt: 14 }});

}

main();