import React, {Component} from 'react'
import './NoteEntry.css'
import ContentEditable from 'react-contenteditable'


class NoteEntry extends Component{
    constructor(props) {
        super(props)
        this.contentEditable = React.createRef();        
      };

    state = {
        id: this.props.id,
        html: "",
        checked: '', 
        height:25,
        decoration:'none',
        color: 'black'
    }

    componentDidMount(){
        this.contentEditable.current.focus(); 
     }

    render(){        
        return(
            <div className = 'NoteEntry' >
                <button className = 'checkbox' onClick={this.checkBoxClicked}>{this.state.checked}</button>
                <ContentEditable
                    style={{textDecorationLine:this.state.decoration, color:this.state.color}}
                    innerRef={this.contentEditable}
                    html={this.state.html} 
                    disabled={false}       
                    onChange={this.handleChange} 
                    className='noteInput'
                    onKeyDown={this.handleKeyDown}  
                />
                <button className = 'xbox' onClick={this.xBoxClicked}>x</button>
            </div>
        );
    }
    
    checkBoxClicked = () =>{
        if(this.state.checked === ''){
            this.setState({checked:'✓'})
            this.setState({decoration:'line-through'})
            this.setState({color: '#6e6e6e'})
        }
        else if(this.state.checked === '✓'){
            this.setState({checked:''})
            this.setState({decoration:'none'})
            this.setState({color: 'black'})
        }
    }

    xBoxClicked = () => {
        this.props.deleteEntryHandler(this.state.id)
    }

    handleChange = evt => {
        this.setState({ html: evt.target.value });
        console.log(this.state.height, this.contentEditable.current.clientHeight)
        if(this.contentEditable.current.clientHeight !== this.state.height){
            this.setState({height:this.contentEditable.current.clientHeight})
            this.props.changeHeightHandler(this.state.id, this.contentEditable.current.clientHeight)
        }                
    }
    
    handleKeyDown = e => {
        if (e.key === 'Enter') {
            console.log('enter pressed');
            this.props.addEntryHandler()
            e.preventDefault();
        }
    }   

}
export default NoteEntry;