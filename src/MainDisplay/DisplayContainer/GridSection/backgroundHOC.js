import React,{Component} from 'react'

const HOC = WrappedCompnent =>{
    return class PutBackground extends Component{
        render(){
            return (
                <div style={{backgroundColor:'white', width: '100%',height:'390px'}}>
                <WrappedCompnent />
                </div>
            )
        }
    }
}
export default HOC;