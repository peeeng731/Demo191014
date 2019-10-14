import React, { Component } from 'react';
import axios from 'axios'
import './index.less'
import { NavLink } from 'react-router-dom'
//Antd 'menu'组件导入
import MenuConfig from './../../config/menuCongfig'
import {Menu} from 'antd';
const SubMenu = Menu.SubMenu;

class NavLeft extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            menuList:[]
        }
        this.init();
    }
    //读取菜单
   /*  componentWillMount(){
        const menuTreeNode = this.renderMenu(this.state.menuList);
        this.setState({
            menuTreeNode
        })
        
    } */
    
    init(){
        axios.get('/management/sys/menu/nav')
            .then((res)=>{
                console.log('axios 获取数据成功'+JSON.stringify(res));
                if(res != null){
                    let {menuList} = res.data;
                    console.log("【menuList】"+JSON.stringify(menuList));
                    if(menuList != null && menuList.length>0){
                        let list = menuList[0].list;
                        /* this.setState({
                            menuList:_menuList
                        }); */
                        let _menuList = [];
                        if(list.length>0){
                            list.map((menu,index)=>{
                                _menuList.push({
                                    title:menu.name,
                                    // key:menu.url
                                    key:'/admin/'+menu.url
                                });
                                return index;
                            });
                            

                            console.log(JSON.stringify(_menuList));
                        }                
                        
                        
                        const menuTreeNode = this.renderMenu(_menuList);
                        this.setState({
                            menuTreeNode,
                            menuList:_menuList,
                        });
                    }            
                }    
            })
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