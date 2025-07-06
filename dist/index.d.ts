/**
 * Interface for defining the styles and HTML tag for the text conversion.
 * All properties are optional.
 */
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
/**
 * Converts a plain text string into an HTML string with specified styles and an HTML tag.
 *
 * @param {string} text The plain text to convert.
 * @param {StylesFormat} [stylesFormat] An optional object containing style properties and the desired HTML tag.
 * If not provided, the text defaults to being wrapped in a <p> tag.
 * @returns {string} The HTML string.
 */
export declare function textToHtml(text: string, stylesFormat?: StylesFormat): string;
export {};
