import { textToHtml } from '../src/index'

interface StylesFormat {
  /**
   * The HTML tag to wrap the content (e.g., 'h1', 'p', 'div').
   * Defaults to 'p' if not specified.
   */
  htmlTag?: string;
  /**
   * The text color (e.g., 'black', '#000000', 'rgb(0,0,0)').
   */
  color?: string;
  /**
   * The background color (e.g., 'red', '#ff0000', 'rgba(255,0,0,0.5)').
   */
  backgroundColor?: string;
  /**
   * The font size (e.g., '16px', '1.2em').
   */
  fontSize?: string;
  /**
   * The font weight (e.g., 'bold', '700').
   */
  fontWeight?: string;
  /**
   * The text alignment (e.g., 'center', 'left').
   */
  textAlign?: string;
  /**
   * Any other valid CSS property in camelCase (e.g., 'textDecoration', 'paddingLeft').
   */
  [key: string]: string | undefined;
}

// --- Example Usage (for testing purposes, typically not part of the published npm package) ---

// Example 1: Basic conversion with color and background (htmlTag still 'h1')
const message1: string = "Hello World";
const stylesFormat1: StylesFormat = {
  color: "black",
  backgroundColor: "red",
  htmlTag: "h1"
};
const convertedText1: string = textToHtml(message1, stylesFormat1);
console.log("Example 1 Output:");
console.log(convertedText1);
// Expected: <h1><span style="color: #000000; background-color: #ff0000;">Hello World</span></h1>

// Example 2: Different tag and more styles (demonstrating new CSS attributes)
const message2: string = "This is a paragraph with custom styles.";
const stylesFormat2: StylesFormat = {
  htmlTag: "p",
  color: "blue",
  fontSize: "18px",
  fontWeight: "bold",
  textAlign: "center",
  textDecoration: "underline" // New attribute
};
const convertedText2: string = textToHtml(message2, stylesFormat2);
console.log("\nExample 2 Output:");
console.log(convertedText2);
// Expected: <p><span style="color: #0000ff; font-size: 18px; font-weight: bold; text-align: center; text-decoration: underline;">This is a paragraph with custom styles.</span></p>

// Example 3: No stylesFormat provided (defaults to <p> tag)
const message3: string = "Just some text in a default paragraph.";
const convertedText3: string = textToHtml(message3); // No stylesFormat object
console.log("\nExample 3 Output:");
console.log(convertedText3);
// Expected: <p><span style="">Just some text in a default paragraph.</span></p>

// Example 4: stylesFormat provided, but no htmlTag (defaults to <p> tag with styles)
const message4: string = "Text with color, but default tag.";
const stylesFormat4: StylesFormat = {
  color: "green",
  padding: "10px" // New attribute
};
const convertedText4: string = textToHtml(message4, stylesFormat4);
console.log("\nExample 4 Output:");
console.log(convertedText4);
// Expected: <p><span style="color: #008000; padding: 10px;">Text with color, but default tag.</span></p>

// Example 5: Using hex codes directly (unchanged behavior)
const message5: string = "Custom colors!";
const stylesFormat5: StylesFormat = {
  htmlTag: "h3",
  color: "#FF5733",
  backgroundColor: "#33FF57"
};
const convertedText5: string = textToHtml(message5, stylesFormat5);
console.log("\nExample 5 Output:");
console.log(convertedText5);
// Expected: <h3><span style="color: #FF5733; background-color: #33FF57;">Custom colors!</span></h3>
