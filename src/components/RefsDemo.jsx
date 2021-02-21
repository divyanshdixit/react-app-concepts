import React, { Component } from 'react'

// import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        // 1
        this.headingRef = React.createRef();
        this.state = {
                color:'black'
            }

    }

    componentDidMount(){
        this.headingRef.current.innerHTML = 'good bye'
    }

    render() {
        return (
            <div>
                <h1 ref={this.headingRef} > Hello ref </h1>
                <h1 ref={this.headingRef}> asdasddsa</h1>
            </div>
        )
    }
}

export default RefsDemo



// class RefsDemo extends Component {
//     constructor(props) {
//         super(props)
//         // 1st step
//         this.inputRef = React.createRef();

//         // another way to create ref using callback;
//         this.dbRef = null; 
//         this.setcbRef = (elem) =>{
//             this.dbRef = elem;
//         }
//     }
    
//     componentDidMount(){
//         // 3rdd step how to use
//         this.inputRef.current.focus();
//         // use the callback ref {we'll not use current keyword}
//         // first check if ref value is null or not
//         if(this.dbRef){
//             this.dbRef.focus();
//         }
        
//     }

//     render() {
//         return (
//             <div>
//             {/* 2nd step */}
//                 <input type="text" ref={this.inputRef}/>

//                 {/* callback ref in input */}
//                 <input type="text" placeholder="Enter text here" ref={this.setcbRef} />
//             </div>
//         )
//     }
// }

// export default RefsDemo
