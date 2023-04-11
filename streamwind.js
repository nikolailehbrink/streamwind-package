// Import the required packages
const Color = require("color");

// Helper function to access nested properties in a theme object
const theme = (path, theme) => {
  return path.split(".").reduce(function (previous, current) {
    return previous ? previous[current] : null;
  }, theme || self);
};

// Function to generate shades for a color
const generateShades = (color, shades, baseShade = 500) => {
  const baseColor = Color(color);
  let result = {};

  // Iterate through the shades and generate the corresponding color
  shades.forEach((shade) => {
    let adjustedColor;

    // Set the base color for the specified baseShade
    if (shade === baseShade) {
      adjustedColor = baseColor;
    } else if (shade < baseShade) {
      // Mix the base color with white for lighter shades
      const weight = 1 - shade / baseShade;
      adjustedColor = baseColor.mix(Color("white"), weight);
    } else {
      // Mix the base color with black for darker shades
      const weight = (shade - baseShade) / (1000 - baseShade);
      adjustedColor = baseColor.mix(Color("black"), weight);
    }

    // Add the shade to the result object
    result[shade] = adjustedColor.hex();
  });

  // Set the DEFAULT key to the base color
  result["DEFAULT"] = baseColor.hex();

  return result;
};

// Function to map colors from theme.json to tailwind.config.js
const colorMapper = (colors, colorOptions) => {
  let result = {};

  // Iterate through the colors and process each color
  colors.forEach(function (color) {
    // Check if generateShades is true for the current color
    const shouldGenerateShades =
      colorOptions[color.slug] && colorOptions[color.slug].generateShades;
    const baseShade =
      colorOptions[color.slug] && colorOptions[color.slug].baseShade;

    if (shouldGenerateShades) {
      // Generate shades with the specified baseShade or the default value (500)
      const shades = generateShades(
        color.color,
        [100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
        baseShade || 500
      );
      result["" + color.slug + ""] = shades;
    } else {
      // Set the color value directly if shouldGenerateShades is false
      result["" + color.slug + ""] = color.color;
    }
  });

  return result;
};

// Export the required functions
export default { theme, colorMapper };
