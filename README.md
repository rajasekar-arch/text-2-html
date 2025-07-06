# **`text-2-html`**

A lightweight and versatile npm package for converting plain text strings into HTML with inline CSS styles and a specified HTML tag. Perfect for both frontend and backend web development.

## **🚀 Features**

* **Simple Conversion:** Easily transform plain text into styled HTML.  
* **Flexible Styling:** Apply any valid CSS property using camelCase syntax (e.g., `backgroundColor`, `fontSize`).  
* **Custom HTML Tags:** Wrap your styled text in any HTML tag (e.g., `h1`, `p`, `div`, `span`).  
* **Optional Parameters:** `stylesFormat` and `htmlTag` are optional, providing sensible defaults.  
* **TypeScript Support:** Built with TypeScript for type safety and better developer experience.

## **📦 Installation**

To install the package, use npm or yarn:

npm install text-2-html  
\# or  
yarn add text-2-html

## **💡 Usage**

### **Importing the function**

// For ES Modules (recommended for modern JavaScript/TypeScript projects)  
import { textToHtml } from 'text-2-html;

// For CommonJS (Node.js environments)  
// const { textToHtml } \= require('text-2-html);

### **Basic Conversion**

If no `stylesFormat` is provided, the text will be wrapped in a `<p>` tag by default.

import { textToHtml } from 'text-2-html’;

const message \= "Hello, world\!";  
const htmlOutput \= textToHtml(message);

console.log(htmlOutput);  
// Expected output: \<p\>\<span style=""\>Hello, world\!\</span\>\</p\>

### **With Custom Styles and Tag**

You can provide a `stylesFormat` object to specify the HTML tag and inline CSS properties. CSS properties should be provided in `camelCase`, and they will be automatically converted to `kebab-case` for the HTML `style` attribute.

import { textToHtml } from 'text-2-html;

const message \= "Welcome to the Styled Web\!";  
const customStyles \= {  
  htmlTag: "h2",  
  color: "blue",  
  backgroundColor: "\#e0e0e0",  
  fontSize: "24px",  
  fontWeight: "bold",  
  textAlign: "center",  
  padding: "15px",  
  border: "1px solid \#ccc"  
};

const htmlOutput \= textToHtml(message, customStyles);

console.log(htmlOutput);  
// Expected output: \<h2 style="color: \#0000ff; background-color: \#e0e0e0; font-size: 24px; font-weight: bold; text-align: center; padding: 15px; border: 1px solid \#ccc;"\>\<span\>Welcome to the Styled Web\!\</span\>\</h2\>

### **Only Styles (Default Tag)**

If you provide `stylesFormat` but omit `htmlTag`, it will default to a `<p>` tag.

import { textToHtml } from 'text-2-html;

const message \= "This text is green.";  
const greenStyles \= {  
  color: "green",  
  fontStyle: "italic"  
};

const htmlOutput \= textToHtml(message, greenStyles);

console.log(htmlOutput);  
// Expected output: \<p\>\<span style="color: \#008000; font-style: italic;"\>This text is green.\</span\>\</p\>

## **🎨 `StylesFormat` Interface**

The `StylesFormat` interface defines the available options for styling your text. All properties are optional.

interface StylesFormat {  
  /\*\*  
   \* The HTML tag to wrap the content (e.g., 'h1', 'p', 'div').  
   \* Defaults to 'p' if not specified.  
   \*/  
  htmlTag?: string;  
  /\*\*  
   \* The text color (e.g., 'black', '\#000000', 'rgb(0,0,0)').  
   \*/  
  color?: string;  
  /\*\*  
   \* The background color (e.g., 'red', '\#ff0000', 'rgba(255,0,0,0.5)').  
   \*/  
  backgroundColor?: string;  
  /\*\*  
   \* The font size (e.g., '16px', '1.2em').  
   \*/  
  fontSize?: string;  
  /\*\*  
   \* The font weight (e.g., 'bold', '700').  
   \*/  
  fontWeight?: string;  
  /\*\*  
   \* The text alignment (e.g., 'center', 'left').  
   \*/  
  textAlign?: string;  
  /\*\*  
   \* Any other valid CSS property in camelCase (e.g., 'textDecoration', 'paddingLeft').  
   \* Example: \`textDecoration: "underline"\`, \`lineHeight: "1.5"\`.  
   \*/  
  \[key: string\]: string | undefined;  
}

## **🤝 Contributing**

Contributions are welcome\! If you have suggestions for improvements or find any bugs, please open an issue or submit a pull request on the GitHub repository.

## **📄 License**

This project is licensed under the MIT License.

