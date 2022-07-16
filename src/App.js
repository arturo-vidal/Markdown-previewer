import React from 'react';
import './App.css';
import marked from 'react';

const initialState=`
Paragraph

**Bolded** text

> Block Quote!

# Head 1
## Head 2

- list item
- list item
- list item

[Visit my Github](https://github.com/arturo-vidal)


Inline code \`<div><p>Hi!</p></div>\`

\`\`\`
Block of code:
let e= 1;
let i= 2;
let x= e + i;
\`\`\`

![Github](https://cdn-icons-png.flaticon.com/512/25/25231.png)`

class App extends React.Component{
  state={
    text: initialState
  }

  handleChange=(e)=>{
    this.setState({
      text: e.target.value
    });
  }

  render(){
    const {text}= this.state;
    const markdown= marked(text, {brakes: true});
    return(
    <div className="text-center">
      <h1>Markdown Previewer</h1>
      <div className="row">
        <div className="col-md-6">
          <h3>Enter markdown</h3>
          <textarea id="editor" value={text} onChange={this.handleChange}></textarea>
        </div>
        <div id="previewdiv" className="col-md-6">
          <h3>Output</h3>
          <div id="preview" dangerouslySetInnerHTML={{__html: markdown}}></div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
