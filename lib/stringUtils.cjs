// stringUtils.js - CommonJS module with default and named exports
class StringFormatter {
    static capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    static titleCase(str) {
        if (!str) return '';
        return str.split(' ')
            .map(word => this.capitalize(word))
            .join(' ');
    }

    static reverse(str) {
        if (!str) return '';
        return str.split('').reverse().join('');
    }
}

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

function countWords(str) {
    if (!str) return 0;
    return str.trim().split(/\s+/).length;
}

// Default export
module.exports = StringFormatter;

// Additional named exports
module.exports.isPalindrome = isPalindrome;
module.exports.countWords = countWords;