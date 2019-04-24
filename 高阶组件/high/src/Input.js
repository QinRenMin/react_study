import React,{Component} from "react"
import WrapWithLoadData from './App'

class InputWithUserName extends Component {
    render () {
        return <input value={this.props.data} />
    }
}

InputWithUserName = WrapWithLoadData(InputWithUserName, 'username');
export default InputWithUserName;