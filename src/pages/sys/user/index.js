import React, { Component } from 'react';
import { Card,Button, Table } from 'antd';
class Buttons extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Card>
                    <input></input>
                    <Button shape="circle" icon="search" />
                    <Button icon='plus'>增加</Button>
                    <Button icon='edit'>修改</Button>
                    <Button icon='delete'>删除</Button>
                </Card>
                <Card title='基础表格'>
                    <Table
                    
                    />
                </Card>
            </div>
         );
    }
}
 
export default Buttons;