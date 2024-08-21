//
const sentence = "This is very heart broken subject. ";
console.log(sentence.split("a"));
console.log(sentence.split(" "));

const friendStr = "Tani, Rani, Sani, Dali, Bali";
console.log(friendStr.split(","));

// [ 'This is very he', 'rt broken subject. ' ]
// [ 'This', 'is', 'very', 'heart', 'broken', 'subject.', '' ]
// [ 'Tani', ' Rani', ' Sani', ' Dali', ' Bali' ]

// join
const flower = ["lily", "water lily", "cosmos", "daisy", "sunflower", "rose"];
console.log(flower.join(" --> "));
//lily --> water lily --> cosmos --> daisy --> sunflower --> rose

// concat
const line1 = "Twinkle Twinkle";
const line2 = "Little Star";
console.log(line1.concat(' ').concat(line2));
