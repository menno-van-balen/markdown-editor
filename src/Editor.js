import React, { Component } from "react";
import Marked from "marked";

class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { text: placeholder };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  rawMarkup() {
    let markup = Marked(this.state.text, { breaks: true, gfm: true });
    return { __html: markup };
  }

  render() {
    return (
      <div className="editor-wrapper">
        <div className="editor-container">
          <div className="editor-header">
            <h3>Editor</h3>
            <button
              className="button"
              onClick={() => this.setState({ text: "" })}
            >
              Clear content
            </button>
          </div>
          <textarea
            id="editor"
            value={this.state.text}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className="preview-container">
          <div className="preview-header">
            <h3>Preview</h3>
          </div>
          <div
            className="content"
            id="preview"
            dangerouslySetInnerHTML={this.rawMarkup()}
          />
        </div>
      </div>
    );
  }
}

const placeholder = `
> ### Markdown Syntacs Cheatsheet:
<!-- Headings -->
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

<!-- Italics -->
*This text* is italic

_This text_ is italic
<!-- Strong -->
**This text** is bold

__This text__ is bold

<!-- Strikethrough -->
~~This text~~ is strikethrough

<!-- Horizontal Rule -->
---
___

<!-- Blockquote -->
> This is a quote

<!-- Links -->
[FreeCodeCamp](http://www.freecodecamp.org)

[FreeCodeCamp](http://www.freecodecamp.org "FreeCodeCamp")

<!-- UL -->
* Item 1
* Item 2
* Item 3
  * Nested Item 1
  * Nested Item 2

<!-- OL -->
1. Item 1
1. Item 2
1. Item 3

<!-- Inline Code Block -->
\`<p>This is a paragraph</p>\`

<!-- Images -->
![Markdown Logo](https://markdown-here.com/img/icon256.png)

<!-- Github Markdown -->

<!-- Tables -->
| Name     | Email          |
| -------- | -------------- |
| John Doe | john@gmail.com |
| Jane Doe | jane@gmail.com |

<!-- Task List -->
* [x] Task 1
* [x] Task 2
* [ ] Task 3<!-- Github Markdown -->

<!-- Code Blocks -->
\`\`\`bash
  npm install

  npm start
\`\`\`

\`\`\`javascript
  function add(num1, num2) {
    return num1 + num2;
  }
\`\`\`

\`\`\`python
  def add(num1, num2):
    return num1 + num2
\`\`\`
`;

export default MarkdownEditor;
