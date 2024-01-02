// nested class
/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm  h1 tag</h1>
 *          <h2>I'm  h1 tag</h2>
 *      </div>
 * </div>
 * <div id="child2">
 *      
 *          <h1>I'm  h1 tag</h1>
 *          <h2>I'm  h1 tag</h2>
 *      
 * </div>
 * 
 * 
 * ReactElement(object) => HTML(Browser Understands)
 * 
 *  */ 

const parent = React.createElement("div",{id:"parent"}, [
    React.createElement("div", {id:"child"},[
        React.createElement("h1", {}, "i'm an h1 tag"),
        React.createElement("h2",{}, "i'm an h2"),
    ]),
    React.createElement("div", {id:"child2"},[
        React.createElement("h1", {}, "i'm an h1 tag"),
        React.createElement("h2",{}, "i'm an h2"),
    ]),
]);


// const heading = React.createElement(
// "h1", 
// {id: "heading", xyz: "abc"}, 
// "Hello World from React"
// );

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);