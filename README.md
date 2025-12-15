Modular Node.js Utility Library

A demonstration project showcasing both CommonJS and ES2015 (ES6) module systems in Node.js.

Project Structure


├── lib/                    CommonJS modules
│   ├── mathUtils.cjs       Mathematical utility functions
│   └── stringUtils.cjs     String manipulation utilities
├── src/                    ES2015 modules  
│   ├── arrayUtils.mjs      Array manipulation utilities
│   └── dateUtils.mjs       Date/time utilities
├── index.js                Main entry point demonstrating module interaction
 package.json               Project configuration
README.md                   This file


Module Examples

CommonJS Modules (`lib/`)

mathUtils.cjs- Demonstrates named exports:
javascript
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    factorial
};


stringUtils.cjs - Demonstrates default + named exports:
javascript
// Default export
module.exports = StringFormatter;

// Additional named exports
module.exports.isPalindrome = isPalindrome;
module.exports.countWords = countWords;


 ES2015 Modules (`src/`)

arrayUtils.mjs - Demonstrates named exports and aliases:
javascript
export function removeDuplicates(arr) { /* ... */ }
export function shuffle(arr) { /* ... */ }

// Named export with alias
export { removeDuplicates as unique };


dateUtils.mjs - Demonstrates default + named exports:
javascript
// Named exports
export const getCurrentTimestamp = () => Date.now();
export const isLeapYear = (year) => /* ... */;

// Default export
export default DateHelper;


 Import Examples in `index.js`

CommonJS imports:
javascript
const mathUtils = require('./lib/mathUtils.cjs');
const { isPalindrome, countWords } = require('./lib/stringUtils.cjs');


ES2015 imports:
javascript
import { removeDuplicates, shuffle, chunk } from './src/arrayUtils.mjs';
import DateHelper, { getCurrentTimestamp } from './src/dateUtils.mjs';

// Renamed imports
import { 
    removeDuplicates as removeDups,
    shuffle as randomize 
} from './src/arrayUtils.mjs';


 Why Node.js Supports Two Module Systems

Node.js supports both CommonJS and ES2015 modules for several important reasons:

Historical Context
- CommonJS was Node.js's original module system, designed specifically for server-side JavaScript
- ES2015 modules were later standardized by ECMAScript as the official JavaScript module syntax
- Node.js needed to maintain backward compatibility while adopting the new standard

### Technical Differences

| Feature | CommonJS | ES2015 Modules |
|---------|----------|----------------|
| **Syntax** | `require()` / `module.exports` | `import` / `export` |
 Loading  Synchronous  Asynchronous 
 Analysis Runtime  Static (compile-time) |
| **Tree Shaking** | Limited | Full support |
| **Conditional Loading** | Yes | Limited |
| **File Extension** | `.js` | `.mjs` or `.js` with `"type": "module"` |

### When to Use Each System

#### Use **CommonJS** when:
- ✅ Working with legacy Node.js codebases
- ✅ You need conditional/dynamic imports based on runtime conditions
- ✅ Working with libraries that only support CommonJS
- ✅ Building traditional Node.js applications or APIs
- ✅ You need synchronous module loading

**Example use cases:**
- Express.js server applications
- Command-line tools
- Legacy npm packages
- Configuration files that need dynamic loading

#### Use **ES2015 Modules** when:
- ✅ Building modern JavaScript applications
- ✅ You want better tree-shaking and bundle optimization
- ✅ Creating libraries meant for both browser and Node.js
- ✅ Working with modern frameworks (React, Vue, Angular)
- ✅ You want static analysis benefits (better IDE support, linting)
- ✅ Building applications with modern build tools (Webpack, Vite, etc.)

**Example use cases:**
- Frontend applications
- Modern full-stack applications
- npm packages for modern ecosystems
- TypeScript projects
- Applications requiring optimal bundling

## Running the Project

1. **Install dependencies** (if any):
   ```bash
   npm install
   ```

2. **Run the demonstration**:
   ```bash
   npm start
   ```
   or
   ```bash
   node index.js
   ```

## Key Learning Points

1. **Interoperability**: Modern Node.js can use both module systems in the same project
2. **File Extensions**: Use `.mjs` for ES modules or set `"type": "module"` in package.json
3. **Import Syntax**: ES modules support various import patterns including renamed imports
4. **Export Patterns**: Both systems support named and default exports, but with different syntax
5. **Static Analysis**: ES modules enable better tooling and optimization opportunities

## Future Considerations

- ES2015 modules are the future standard for JavaScript
- New projects should prefer ES modules when possible
- CommonJS will remain supported for backward compatibility
- Many modern tools and frameworks expect ES module syntax
- The ecosystem is gradually migrating toward ES modules

---

*This project demonstrates practical usage of both module systems and shows how they can coexist in modern Node.js applications.*