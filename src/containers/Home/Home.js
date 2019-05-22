import React, { Component } from 'react';
import Layout from "../../components/Layout";
import { sayHello } from '../../actions/greeting';
import { connect } from 'react-redux';

class Home extends Component {
  componentWillMount(){
    const { dispatchHello } = this.props;
    dispatchHello("Hello React World !");
  }
  render() {
    const {children} = this.props;
    return (
      <div id="home_container"> 
        <Layout name={"User"} />
        {children}
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  "dispatchHello": sayHello
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
