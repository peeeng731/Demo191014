import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Row, Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/Navleft'
import './style/common.less'
import Home from './pages/home'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Row className='container'>
                    <Col span={3} className='nav-left'>
                        <NavLeft></NavLeft>
                    </Col>
                    <Col span={21} className='main'>
                        <Header></Header>
                        <Row className='content'>
                            {/* <Home/> */}
                            {this.props.children}
                        </Row>
                        <Footer></Footer>
                    </Col>
                </Row>
            </div>
         );
    }
}
 
export default Main;