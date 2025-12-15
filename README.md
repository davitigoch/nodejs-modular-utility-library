# Node.js Module Systems Assignment

This project demonstrates CommonJS and ES2015 modules in Node.js.

## Project Structure

```
├── lib/                    # CommonJS modules
│   ├── mathUtils.cjs       # Math functions
│   └── stringUtils.cjs     # String utilities
├── src/                    # ES2015 modules  
│   ├── arrayUtils.mjs      # Array functions
│   └── dateUtils.mjs       # Date utilities
├── index.js                # Main file
└── package.json            
```

## How to Run

```bash
node index.js
```

## What I Learned

### CommonJS vs ES2015 Modules

**CommonJS** uses `require()` and `module.exports`:
```javascript
// Export
module.exports = { add, subtract };

// Import
const math = require('./mathUtils.cjs');
```

**ES2015** uses `import` and `export`:
```javascript
// Export
export function add(a, b) { return a + b; }
export default Calculator;

// Import
import { add } from './mathUtils.mjs';
import Calculator from './mathUtils.mjs';
```

### Why Node.js Has Both

- CommonJS came first and lots of existing code uses it
- ES2015 modules are the new standard
- Node.js supports both for compatibility

### When to Use Which

- **CommonJS**: Older Node.js projects, simple scripts
- **ES2015**: New projects, modern JavaScript, better for bundlers

The project shows both working together in the same application.
