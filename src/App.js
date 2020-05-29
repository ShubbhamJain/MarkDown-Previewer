import React from 'react';
import './App.css';
import marked from 'marked';

const mark = require('marked');

mark.setOptions({
  breaks: true
});

const initialMarkdown = `
# Welcome to my React Markdown Previewer!

<!-- Headings -->
# Heading 1
## Heading 2
### Heading 3

<!-- Italics -->
*This Text* is italic
_This Text_ is italic

<!-- Strong -->
**This Text** is Strong
__This Text__ is Strong

<!-- StrikeThrough -->
~~This Text~~ is StrikeThrough

<!-- Horizontal lines -->
---
___

<!-- Blockquote -->
> This is a quote

<!-- Links -->
[Google](https://www.google.com "Google")

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
\`<p>This is a paragragh</p>\`

<!-- Code Blocks-->
\`\`\`javascript

  function add(num1, num2) {
    return num1 + num2;
  }
\`\`\`

<!-- Images -->
![Markdown Logo](https://markdown-here.com/img/icon48.png)

<!-- Tables -->
| Wild Header | Crazy Header | Another Header? |
|:------------ |:-------------|:-------------|
| Your content can | be here, and it | can be here.... |
| And here. | Okay. | I think we get it. |

<!-- Task Lists -->
* [x] Task 1
* [x] Task 2
* [ ] Task 3
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markDown: initialMarkdown
    }

    this.editorText = this.editorText.bind(this);
  }

  editorText(e) {
    this.setState({
      markDown: e.target.value
    });
  }
  
  render() {
    return (
      <div className='App'>
        <h1 id='heading'>MarkDown Previewer</h1>

        <div id='editorDiv'>
          <textarea id='editor' rows='24' cols='80' value={this.state.markDown} onChange={this.editorText}></textarea>
        </div>

        <div id='previewDiv'>
          <label htmlFor='preview' id='previewLabel'>Preview</label>
          <div id='preview' dangerouslySetInnerHTML={{__html: marked(this.state.markDown)}} />
        </div>
      </div>
    )
  }
}

export default App;
