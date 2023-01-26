const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'You must put a name']
    },
    age: {
        type: Number,
        min: 3
    },
    breed: {
        type: String,
        enum: ['No breed', 'Persian', 'Jo mama', 'Angora', 'Debela']
    }
});

// Method
catSchema.methods.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and Meow moew!!`);
};

// Virtual property
catSchema.virtual('info').get(function() {
    return `Name ${this.name} - age ${this.age} - breed ${this.breed}`;
});

// Custom validations
catSchema.path('name').validate(function() {
    return this.name.startsWith('N');
}, 'Name must start with N')

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;

// module.exports = mongoose.model('Cat', catSchema);