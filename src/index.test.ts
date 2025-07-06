// src/index.test.ts
import { textToHtml } from "./index"; // Adjust the import path if your file is not in src/index.ts

describe("textToHtml", () => {
  // Test Case 1: Basic conversion with htmlTag and styles
  test("should convert text to H1 with black text and red background", () => {
    const message = "Hello World";
    const stylesFormat = {
      color: "black",
      backgroundColor: "red",
      htmlTag: "h1",
    };
    const expected =
      '<h1><span style="color: #000000; background-color: #ff0000;">Hello World</span></h1>';
    expect(textToHtml(message, stylesFormat)).toBe(expected);
  });

  // Test Case 2: Conversion with no stylesFormat (should default to <p>)
  test("should default to a P tag when no stylesFormat is provided", () => {
    const message = "Default paragraph";
    const expected = '<p><span style="">Default paragraph</span></p>';
    expect(textToHtml(message)).toBe(expected);
  });

  // Test Case 3: Conversion with stylesFormat but no htmlTag (should default to <p> with styles)
  test("should default to a P tag and apply styles when htmlTag is omitted", () => {
    const message = "Styled paragraph";
    const stylesFormat = {
      color: "blue",
      fontSize: "16px",
    };
    const expected =
      '<p><span style="color: #0000ff; font-size: 16px;">Styled paragraph</span></p>';
    expect(textToHtml(message, stylesFormat)).toBe(expected);
  });

  // Test Case 4: Conversion with various CSS properties (camelCase to kebab-case)
  test("should correctly convert camelCase CSS properties to kebab-case", () => {
    const message = "Complex Styles";
    const stylesFormat = {
      htmlTag: "div",
      fontSize: "20px",
      lineHeight: "1.5",
      textDecoration: "underline",
      borderBottom: "1px solid green",
    };
    // CORRECTED EXPECTED STRING: The style attribute is on the <span>, not the <div>.
    const expected =
      '<div><span style="font-size: 20px; line-height: 1.5; text-decoration: underline; border-bottom: 1px solid green;">Complex Styles</span></div>';
    expect(textToHtml(message, stylesFormat)).toBe(expected);
  });

  // Test Case 5: Conversion with color name mapping
  test("should convert common color names to hex codes", () => {
    const message = "Colorful Text";
    const stylesFormat = {
      color: "purple",
      backgroundColor: "yellow",
    };
    const expected =
      '<p><span style="color: #800080; background-color: #ffff00;">Colorful Text</span></p>';
    expect(textToHtml(message, stylesFormat)).toBe(expected);
  });

  // Test Case 6: Conversion with hex color codes directly
  test("should use provided hex color codes directly", () => {
    const message = "Direct Hex Colors";
    const stylesFormat = {
      color: "#ABCDEF",
      backgroundColor: "#123456",
    };
    const expected =
      '<p><span style="color: #ABCDEF; background-color: #123456;">Direct Hex Colors</span></p>';
    expect(textToHtml(message, stylesFormat)).toBe(expected);
  });

  // Test Case 7: Empty string input for text
  test("should handle empty text string gracefully", () => {
    const message = "";
    const stylesFormat = {
      htmlTag: "h4",
      color: "red",
    };
    const expected = '<h4><span style="color: #ff0000;"></span></h4>';
    expect(textToHtml(message, stylesFormat)).toBe(expected);
  });

  // Test Case 8: No styles provided, just a custom tag
  test("should apply custom tag with no inline styles if only htmlTag is provided", () => {
    const message = "Only custom tag";
    const stylesFormat = {
      htmlTag: "span",
    };
    const expected = '<span><span style="">Only custom tag</span></span>';
    expect(textToHtml(message, stylesFormat)).toBe(expected);
  });

  // Test Case 9: Styles with values that are not strings (should be ignored or handled gracefully)
  test("should ignore non-string style values", () => {
    const message = "Ignoring invalid styles";
    const stylesFormat = {
      color: "blue",
      invalidProp: 123 as any, // Cast to any to simulate invalid input
      anotherInvalid: null as any,
    };
    const expected =
      '<p><span style="color: #0000ff;">Ignoring invalid styles</span></p>';
    expect(textToHtml(message, stylesFormat)).toBe(expected);
  });
});
