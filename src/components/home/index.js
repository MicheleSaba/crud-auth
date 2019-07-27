import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/homeActions';
class Home extends Component {
  state = {
    data :[]
  }

  componentDidMount = () => {
    this.props.fromServer();
  }

  handleSubmit = event => {
    // event.preventDefault()
    // this.props.userPostFetch(this.state)
  }

  render() {
    return (
      <>
       <p>Home Page</p>
       {/* {console.log('H-L23',this.props.initialServer)} */}
       <p>{this.props.initialServer.map(data=> 
       data.name
        
        )}</p>
     </>
    )    
  }
}
const mapStateToProps = (state) => ({
  initialServer: state.homePageReducer,

})

const mapDispatchToProps = dispatch => ({
  fromServer: () => dispatch(actions.getHomePage())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);