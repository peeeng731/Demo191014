import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Row, Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/Navleft'
import './style/common.less'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Row className='container'>
                    <Col span={2} className='nav-left'>
                        <NavLeft></NavLeft>
                    </Col>
                    <Col span={22} className='main'>
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