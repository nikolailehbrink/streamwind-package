# Streamwind Color Utility

A utility to generate and map color shades from a given theme configuration, designed for the Streamwind boilerplate Wordpress theme and suitable for integration with frameworks like Tailwind CSS. It provides functions to access nested theme properties, generate shades for a given color, and map colors with their shades from a theme configuration file.

## Features

- Helper function to access nested properties in a theme object
- Function to generate shades for a given color
- Function to map colors from `theme.json` to `tailwind.config.js`

## Installation

To install the package, run:

```sh
npm i streamwind-package
```

# Usage

To use the package, import it in your project:

```javascript
const streamwind = require("streamwind-package");
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
