// arrayUtils.mjs - ES2015 module with named exports
export function removeDuplicates(arr) {
    return [...new Set(arr)];
}

export function shuffle(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export function chunk(arr, size) {
    if (size <= 0) return [];
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

export function flatten(arr) {
    return arr.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? flatten(val) : val);
    }, []);
}

// Named export with alias
export { removeDuplicates as unique };