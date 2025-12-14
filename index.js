// index.js - Entry file demonstrating both CommonJS and ES2015 modules
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// CommonJS imports using require()
const mathUtils = require('./lib/mathUtils.cjs');
const StringFormatter = require('./lib/stringUtils.cjs');
const { isPalindrome, countWords } = require('./lib/stringUtils.cjs');

// ES2015 imports with various syntax forms
import { removeDuplicates, shuffle, chunk, flatten } from './src/arrayUtils.mjs';
import { unique } from './src/arrayUtils.mjs'; // Renamed import
import DateHelper, { getCurrentTimestamp, isLeapYear } from './src/dateUtils.mjs';

// Renamed imports from ES modules
import { 
    removeDuplicates as removeDups,
    shuffle as randomize 
} from './src/arrayUtils.mjs';

console.log('=== Modular Node.js Utility Library Demo ===\n');

// Demonstrate CommonJS math utilities
console.log(' Math Utilities (CommonJS):');
console.log(`5 + 3 = ${mathUtils.add(5, 3)}`);
console.log(`10 - 4 = ${mathUtils.subtract(10, 4)}`);
console.log(`6 * 7 = ${mathUtils.multiply(6, 7)}`);
console.log(`15 / 3 = ${mathUtils.divide(15, 3)}`);
console.log(`Factorial of 5 = ${mathUtils.factorial(5)}\n`);

// Demonstrate CommonJS string utilities
console.log(' String Utilities (CommonJS):');
const testString = "hello world";
console.log(`Original: "${testString}"`);
console.log(`Capitalized: "${StringFormatter.capitalize(testString)}"`);
console.log(`Title Case: "${StringFormatter.titleCase(testString)}"`);
console.log(`Reversed: "${StringFormatter.reverse(testString)}"`);
console.log(`Is "racecar" a palindrome? ${isPalindrome("racecar")}`);
console.log(`Word count in "Hello beautiful world": ${countWords("Hello beautiful world")}\n`);

// Demonstrate ES2015 array utilities
console.log(' Array Utilities (ES2015):');
const testArray = [1, 2, 2, 3, 4, 4, 5];
const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log(`Original array: [${testArray}]`);
console.log(`Remove duplicates: [${removeDuplicates(testArray)}]`);
console.log(`Using alias 'unique': [${unique(testArray)}]`);
console.log(`Using renamed import 'removeDups': [${removeDups(testArray)}]`);
console.log(`Shuffled: [${shuffle(testArray)}]`);
console.log(`Using renamed 'randomize': [${randomize(testArray)}]`);
console.log(`Chunked by 2: ${JSON.stringify(chunk(testArray, 2))}`);
console.log(`Flattened nested array: [${flatten(nestedArray)}]\n`);

// Demonstrate ES2015 date utilities
console.log(' Date Utilities (ES2015):');
const today = new Date();
console.log(`Today: ${DateHelper.formatDate(today)}`);
console.log(`Today (DD/MM/YYYY): ${DateHelper.formatDate(today, 'DD/MM/YYYY')}`);
console.log(`Is today weekend? ${DateHelper.isWeekend(today)}`);
console.log(`Current timestamp: ${getCurrentTimestamp()}`);
console.log(`Is 2024 a leap year? ${isLeapYear(2024)}`);
console.log(`Is 2023 a leap year? ${isLeapYear(2023)}`);

const pastDate = new Date('2024-01-01');
console.log(`Days between ${DateHelper.formatDate(pastDate)} and today: ${DateHelper.daysBetween(pastDate, today)}\n`);

// Demonstrate interaction between modules
console.log(' Module Interaction:');
const words = ['apple', 'banana', 'apple', 'cherry', 'banana'];
const uniqueWords = unique(words);
const wordLengths = uniqueWords.map(word => word.length);
const totalLength = wordLengths.reduce((sum, length) => mathUtils.add(sum, length), 0);

console.log(`Original words: [${words.join(', ')}]`);
console.log(`Unique words: [${uniqueWords.join(', ')}]`);
console.log(`Word lengths: [${wordLengths}]`);
console.log(`Total character count: ${totalLength}`);
console.log(`Average word length: ${mathUtils.divide(totalLength, uniqueWords.length).toFixed(2)}`);

console.log('\n Demo completed! All modules working together successfully.');