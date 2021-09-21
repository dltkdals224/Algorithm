const animals = [{
    name: 'lion',
    size: 'big',
    weight: 200
}, {
    name: 'cat',
    size: 'small',
    weight: 10
}];

const animalsNames = animals.map(function (sex) {
    return sex.name;
});

console.log(animalsNames);