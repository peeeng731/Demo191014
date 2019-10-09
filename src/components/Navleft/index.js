import React, { Component } from 'react';
import axios from 'axios'
import './index.less'
import { NavLink } from 'react-router-dom'
//Antd 'menu'组件导入
import MenuConfig from './../../config/menuCongfig'
import NavList from './../../config/menuCongfig'
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
    debugger;
    componentDidMount(){
        axios.get('http://192.168.1.173:7005/management/sys/menu/nav',{
            params:{
                'token':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlzcyI6ImxpRGkiLCJleHAiOjE1NzA2MTg4OTgsImlhdCI6MTU3MDYxNTI5OCwicm9sIjoic3lzOnVzZXI6dXBkYXRlLHN5czpyb2xlOnNlbGVjdCJ9.yaIaTXi9ZBLZ1tIacxD9l4bfGvV_X4C92i3k701BqdKFNhpoYn00IWyvSCRuVp3YvjzeRBha6b31R-oe7sCdSw'
            }
        })
            .then((res)=>{console.log('axios 获取数据成功'+JSON.stringify(res))})
            .catch((error)=>{console.log('获取数据失败'+error)})
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
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    render() { 
        return ( 
            <div>
                <div className='logo'>
                    <img src="" alt=""></img>
                    <h1>力地集团</h1>
                    <Menu theme='dark'>
                        {this.state.menuTreeNode}
                    </Menu>
                </div>
            </div>
         );
    }
}
 
export default NavLeft;