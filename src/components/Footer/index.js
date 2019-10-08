import React, { Component } from 'react';
import './index.less'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="foot">
                版权所有：ssp
            </div>
         );
    }
}
 
export default Footer;