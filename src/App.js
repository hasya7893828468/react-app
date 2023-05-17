// import React  from 'react'
// import  ReactDOM  from 'react-dom';
// export default class App extends Component {
//   // constructor(){
//   //   super();
//   //   this.state={
//   //     txt:'this is ok',
//   //     cat:5
//   //   }
//   // }
//   // update=(e)=>{
//   //   this.setState({txt: e.target.value})
//     // this.setState({cat: q.target.value})

//   // }
//   // update1(q){
//   //   // this.setState({txt: e.target.value})
//   //   this.setState({cat: q.target.value})

//   // }
//   // constructor(){
//   //   super()
//   //   this.state={currentEvent:'---' }
//   //   this.update=this.update.bind(this)
//   // }
//   // update(e){
//   //   this.setState({currentEvent:e.type})
//   // }
//   constructor(){
//     super();
//     this.state={a:""}
//   }
//   update(){
//     this.setState({
//       a:this.a.refs.input.value,
//       b:this.refs.b.value
//     })
//   }
//   render() {
//   //   // const txt=this.props.txt
//     return (
//       <div>    

//   {/*       {/* <h1>{this.state.txt}-{this.state.cat}</h1> */}
//   {/*         <Wetget update={this.update.bind(this)}/> */}
//   {/*  { {/* <Wetget update={this.update.bind(this)}/> } */}
//   {/*         <Wetget update={this.update.bind(this)}/>  */} 
//   {/*      <input type="text" onChange={this.update1.bind(this)}/> */}
//   {/*      <b>bold</b>   */}
//   {/*       <Button>i <Heart/> React</Button> */}
//   {/*       <Title text= '1234'/> */}
//   {/*       <textarea  */}
//   {/*       onKeyPress={this.update}
//   //       onCopy={this.update}
//   //       onPaste={this.update}
//   //     onCut={this.update}
//   //       cols="30"
//   //       onFocus={this.update}
//   //       onBlur={this.update}
//   //       onDoubleClick={this.update}
//   //       onTouchStart={this.update}
//   //       onTouchMove={this.update}
//   //       onTouchEnd={this.update}
//   {/* //       rows="10"/> */}
//   {/* //       <h1>{this.state.currentEvent}</h1> */} 
      
//       <Input
//       ref={component=>this.a=component}
//       update={this.update.bind(this)}/>
//       {this.state.a}
//       <hr/>
//       <input
//       ref="b"
//       type='text'
//       onChange={this.update.bind(this)}/>
//       {this.state.b}
      
//       </div>
//     )
//   }
// }

//  class Input extends Component {
//   render() {
//     return (
//       <div>
//         <input ref='input' type='text'onClick={this.props.update}/>
//       </div>
//     )
//   }
// }

// // const Title=(props)=><h1>Title:{props.text}</h1>

// // Title.propTypes={
// //   text(props,propName,component){
// //   if(!(propName in props   )){
// //     return new Error(`missing ${propName}`)
// //   }
// //   if(props[propName].length<5)
// //   return new Error(`${propName} was to short`)
    
// //   }
// // }
// // const Button=(props)=><button>{props.children}</button>

// // class Heart extends React.Component {
// //   render() {
// //     return <span>&hearts;</span>
// //   }
// // }

// // const Wetget=(props)=>
// //   <input type="text" onChange={props.update}/>


//   // App.propTpes={
// //   txt:React.PropTpes.string,
// //   cat:React.PropTpes.number.isRequired
// // // }
// // App.defaultProps={
// //   txt:'this is true'
// // }
// import React, { Component } from 'react'
// import ReactDOM   from 'react-dom'
//  class App extends Component {
//   constructor(){
//     super()
//     this.state={val:0}
//     this.update=this.update.bind(this)

//   }
//   update(){
//     this.setState({val:this.state.val+1})
//   }
//  componentWillMount(){
//   console.log('componentWillMount')
//   this.setState({m:2})
// }
//   render() {
//     console.log('render')
//     return <button onClick={this.update}>{this.state.val}
//     {this.state.val * this.state.m}
//     </button>
//   }
//   componentDidMount(){
//     console.log('componentDidMont')
//     this.inc=setInterval(this.update,500)
//   }
//  componentWillUnmount(){
//   console.log('componentWillUnmount')
//  }

// }

// export default class Wrapper extends Component {
 
//     mount() {
//       ReactDOM.render(<App/>,document.getElementById('a'))
//     }
//     unmount() {
//        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//     }
//      render() {
//     return (
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>unMount</button>
//       <div id="a"></div>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import  ReactDOM  from 'react-dom'
// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={increasing:false}
//   }
//   update(){
//     ReactDOM.render(
//       <App val={this.props.val+1}/>,
//       document.getElementById('root')
//     )
//   }
// componentWillReceiveProps(nextProps){
// this.setState({increasing:nextProps.val>this.props.val})
// }
//   render() {
//     console.log(this.state.increasing)
//     return (
//      <button onClick={this.update.bind(this)}>
//       {this.props.val}
//      </button>
//     )
//   }
// }
// App.defaultProps={val:0}

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={items:[]}
//   }
//   componentWillMount(){
//     fetch('http://swapi.co/api/people/?formate=json')
//     .then(response=>response.json())
//     .then({results:items}) =>this.setState({items})
//     }
//   }
//   render() {
//     let items =this.state.items
//     return (
//       <div>
//         {items.map(item=><h4>{item.name}</h4>)}
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react';

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = { items: [] };
//   }

//   componentDidMount() {
//     fetch('https://swapi.dev/api/people/')

//     .then(response => response.json())
//       .then(data => {
//         const { results: items } = data;
//         this.setState({ items });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
//   filter(e){
//     this.setState({filter: e.target.value.toLowerCase()})
//   }
//   render() {
//     const { items,filter } = this.state;
//     const filteredItems = items.filter(item =>
//       item.name.toLowerCase().includes(filter))

//     return (
//       <div>
//         <input type="text"
//         onClick={this.filter.bind(this)}/>
//         {filteredItems.map(item => 
//           <Person key={item.name}person={item}/>)}
//       </div>
//     );
//   }
// }
// const Person=(props)=><h4>{props.person.name}</h4>


// import React from 'react';

// const HOC = (InnerComponent) => class extends React.Component {
//   constructor(){
//     super();
//     this.state = {count: 0}
//   }
//   update(){
//     this.setState({count: this.state.count + 1})
//   }
//   componentWillMount(){
//     console.log('will mount')
//   }
//   render(){
//     return (
//       <InnerComponent
//         {...this.props}
//         {...this.state}
//         update={this.update.bind(this)}
//       />
//     )
//   }
// }

// import React, { Component } from 'react'

// const HOC=(InnerComponnent)=> class extends Component {
//   constructor(){
//     super()
//     this.state={count:0}
//   }
//   update=()=>{
//     this.setState((prevState)=>({const:prevState.count+1}))
//   }
//   componentDidMount(){
//     console.log("1")
//   }
//   render() {
//     return (
//     <InnerComponnent
//       {...this.props}
//       {...this.state}
//       update={this.update}
//     />
//     )
//   }
// }

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Button>button</Button>
//         <hr/>
//         <LabelHoc>label</LabelHoc>
//       </div>
//     )
//   }
// }

// const Button=HOC((props)=>(<button onClick={props.update}>{props.children}-{props.count}</button>))


// class Label extends Component {
 
//   componentDidMount(){
//     console.log("hiiii")
//   }
//   render() {
//     return (
//       <div>
//         <label>{this.props.children}-{this.props.count}</label>
//       </div>
//     )
//   }
// }
// const LabelHoc=HOC(Label)           (not working)


// (working)
// import React, { Component } from 'react';

// const HOC = (InnerComponent) => class extends Component {
//   state = {
//     count: 0
//   };

//   update = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1
//     }));
//   };

//   componentDidMount() {
//     console.log("1");
//   }

//   render() {
//     return (
//       <InnerComponent
//         {...this.props}
//         {...this.state}
//         update={this.update}
//       />
//     );
//   }
// };

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Button>button</Button>
//         <hr/>
//         <LabelHoc>label</LabelHoc> 
//       </div>
//     );
//   }
// }

// const Button = HOC((props) => (
//   <button onClick={props.update}>
//     {props.children}-{props.count}
//   </button>
// ));

// class Label extends Component {
//   componentDidMount() {
//     console.log("hiiii");
//   }

//   render() {
//     return (
//       <div>
//         <label onMouseMove={this.props.update }>
//           {this.props.children}-{this.props.count}
//         </label>
//       </div>
//     );
//   }
// }

// const LabelHoc = HOC(Label);

// import React, { Component } from 'react'
// import { transform } from '@babel/standalone'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       input:"Add your JSX hear",
//       output: '',
//       err:""
//     }
//   }
//   update(e){
//     let code=e.target.value;
//     try {
//       this.setState({
//         output:transform(code,{presets:['es2015','react']})
//         .code,
//         err:''
//       })
//     } catch (err) {
//       this.setState({err:err.message})
//     }
//   }
//   render() {
//     return (
//       <div>
//         <header>{this.state.err}</header>
//         <div className="container">
//           <textarea onClick={this.update.bind(this)}
//           value={this.state.input}/>
//           <pre>
//             {this.state.output}
//           </pre>
//         </div>
//       </div>
//     )
//   }
// }



// import React, { useState } from 'react';
// import { transform } from '@babel/standalone';
// import './App.css'
// export default function App() {
//   const [input, setInput] = useState('Add your JSX here');
//   const [output, setOutput] = useState('');
//   const [error, setError] = useState('');

//   const update = (e) => {
//     const code = e.target.value;
//     try {
//       const transformedCode = transform(code, {
//         presets: ['es2015', 'react'],
//       }).code;
//       setOutput(transformedCode);
//       setError('');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div>
//       <header>{error}</header>
//       <div className="container">
//         <textarea onClick={update} value={input} onChange={(e) => setInput(e.target.value)} />
//         <pre>{output}</pre>
//       </div>
//     </div>
//   );
// // }

// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <Parent> 
//         <div className="childA"></div>
//         <div className="childA"></div>

//       </Parent>
     
//     )
//   }
// }

//  class Parent extends Component {
//   render() {
    
//      let items=React.Children
//      .forEach(this.props.children,child=>
//       console.log(child.props.className)
//      )   
//       console.log(items)
//      return  null
    
//   }
// }
// import React, { Component } from 'react';

// export default class App extends Component {
//   render() {
//     return (
//       <Parent>
//         <div className="childA"></div>
//       </Parent>
//     );
//   }
// }

// class Parent extends Component {
//   render() {
//     const items = React.Children.map(this.props.children, (child, index) => {
//       return <div key={index}>{child}</div>;
//     });

//     console.log(items);

//     return items || null;
//   }
// }


import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <Button>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
      </Button>

    )
  }
}
 class Button extends Component {
  constructor(){
    super()
    this.state={selected:'none'}
  }
  selectItem(selected){
    this.setState({selected})
  }
  render() {
    let fn=child=>React.cloneElement(child,{
      onClick:this.selectItem.bind(this,child.props.value)
    })
    let items=React.Children.map(this.props.children,fn)
    return (
      <div>
        <h2>You have Selected:{this.state.selected}</h2>
        {items}
      </div>
    )
  }
}


