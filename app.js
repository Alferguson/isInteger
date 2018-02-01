function checksNumber(input) {
    if (input/1 === input && 1/input !== 0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
};

checksNumber(3);

checksNumber("bananas");

checksNumber(Infinity);

checksNumber(NaN);

checksNumber([1,2,3]);

checksNumber({number:3}, {a: "A"});

checksNumber(3.14);

checksNumber(true);

checksNumber(0);


