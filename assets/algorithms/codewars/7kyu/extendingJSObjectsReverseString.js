// Unfortunately, there's no a .reverse() method for the JavaScript String object.

// Your task is to extend JavaScript String object, so you can reverse strings just like this:

// 'Hello, World!'.reverse();
// The method should return:

// '!dlroW ,olleH'




// my solution
Object.defineProperty(String.prototype, 'reverse', {
    value() {
        return this.split('').reverse().join('');
    }
});

// better solution
String.prototype.reverse = function() {
    return [...this].reverse().join("")
};