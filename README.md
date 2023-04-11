# Streamwind Color Utility

This package provides utility functions to generate color shades and map colors from a `theme.json` file to a `tailwind.config.js` file.

## Features

- Helper function to access nested properties in a theme object
- Function to generate shades for a given color
- Function to map colors from `theme.json` to `tailwind.config.js`

## Installation

To install the package, run:

```sh
npm install @nikolailehbrink/streamwind-package
```

# Usage

To use the package, import it in your project:

```javascript
const streamwind = require("@nikolailehbrink/streamwind-package");
```

## Accessing nested properties in a theme object

```javascript
const propertyValue = streamwind.theme("path.to.property", themeObject);
```

## Generating color shades

```javascript
const shades = streamwind.generateShades(
  color,
  [100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  baseShade
);
```

## Mapping colors from theme.json to tailwind.config.js

```javascript
const tailwindColors = streamwind.colorMapper(colors, colorOptions);
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
