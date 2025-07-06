"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textToHtml = textToHtml;
/**
 * Converts a plain text string into an HTML string with specified styles and an HTML tag.
 *
 * @param {string} text The plain text to convert.
 * @param {StylesFormat} [stylesFormat] An optional object containing style properties and the desired HTML tag.
 * If not provided, the text defaults to being wrapped in a <p> tag.
 * @returns {string} The HTML string.
 */
function textToHtml(text, stylesFormat) {
    // Ensure stylesFormat is an object, default to an empty object if not provided
    const effectiveStylesFormat = stylesFormat || {};
    // Determine the HTML tag:
    // 1. Use effectiveStylesFormat.htmlTag if explicitly provided.
    // 2. Otherwise, default to 'p'.
    const htmlTag = effectiveStylesFormat.htmlTag || 'p';
    // Define a mapping for common color names to hex codes for consistency.
    // This is a small subset; for a full solution, consider a more comprehensive library
    // or relying on the browser's ability to interpret color names directly (which is generally fine).
    const colorMap = {
        'black': '#000000',
        'red': '#ff0000',
        'blue': '#0000ff',
        'green': '#008000',
        'white': '#ffffff',
        'yellow': '#ffff00',
        'purple': '#800080',
        'orange': '#ffa500',
        'gray': '#808080'
    };
    // Build the inline style string
    let styleString = '';
    // Helper function to convert camelCase to kebab-case for CSS properties
    const camelToKebabCase = (str) => {
        return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    };
    // Iterate over effectiveStylesFormat to extract CSS properties
    for (const key in effectiveStylesFormat) {
        // Ensure the property belongs to the object itself, not its prototype chain
        if (Object.prototype.hasOwnProperty.call(effectiveStylesFormat, key)) {
            // Exclude 'htmlTag' from style properties as it's used for the wrapper tag
            if (key !== 'htmlTag') {
                const cssProperty = camelToKebabCase(key);
                let value = effectiveStylesFormat[key];
                // Ensure value is a string before attempting to convert color names
                if (typeof value === 'string') {
                    // Convert common color names to hex codes if applicable for 'color' and 'backgroundColor'
                    if (['color', 'backgroundColor'].includes(key) && colorMap[value.toLowerCase()]) {
                        value = colorMap[value.toLowerCase()];
                    }
                    // Append the CSS property and value to the style string
                    styleString += `${cssProperty}: ${value}; `;
                }
            }
        }
    }
    // Remove any trailing space from the style string
    styleString = styleString.trim();
    // Construct the HTML string
    // The text is wrapped in a <span> tag to apply inline styles,
    // and then the <span> is wrapped in the specified htmlTag.
    return `<${htmlTag}><span style="${styleString}">${text}</span></${htmlTag}>`;
}
