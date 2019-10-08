import React, { Component } from 'react';
import './index.less'
//Antd 'menu'组件导入
import MenuConfig from './../../config/menuCongfig'
import {Menu} from 'antd';
const SubMenu = Menu.SubMenu;

//


class NavLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    //读取菜单
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);

        this.setState({
            menuTreeNode
        })
        
    }
    //菜单渲染
    renderMenu = (data)=>{
        return data.map((item)=>{
            if(item.children){
                return(
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title = {item.title} key={item.key}>
                {item.title}
            </Menu.Item>
        })
    }
    render() { 
        return ( 
            <div>
                <div className='logo'>
                    <img src="" alt=""></img>
                    <h1>LiDi Group</h1>
                    <Menu theme='dark'>
                        {this.state.menuTreeNode}
                    </Menu>
                </div>
            </div>
         );
    }
}
 
export default NavLeft;