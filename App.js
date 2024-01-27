/*
const heading = React.createElement('h1',{id:"heading", otherattribute:"abc"},'Hello world from React');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
*/

// now create nested tags is react

const parent = React.createElement('div',
                      {id: "paranet"}, 
                    React.createElement('div', {id:'child'},
                    React.createElement('h1',{id:'heading'},'I am h1 tag'
                    )));
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent);
