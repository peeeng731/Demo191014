import React, { Component } from 'react';
import axios from '../axios/index';
import { Card,Table,Button,Modal,message} from 'antd';
import Utils from './utils';

class BasicTable extends Component {
    state={}
    params = {
        page:1
    }
    componentDidMount(){
        /* const data = [
            {
                id:'0',
                userName:'宋少鹏',
                sex:'1',
                email:'15510909140@163.com',
                phone:'15510909140',
                state:'正常',
                createTime:'2019-10-18'
            },
            {
                id:'1',
                userName:'宋少鹏',
                sex:'1',
                email:'15510909140@163.com',
                phone:'15510909140',
                state:'正常',
                createTime:'2019-10-18'
            },
            {
                id:'2',
                userName:'宋少鹏',
                sex:'1',
                email:'15510909140@163.com',
                phone:'15510909140',
                state:'正常',
                createTime:'2019-10-18'
            }
        ]
        this.setState({
            dataSource:data
        }) */
        this.request();
    }
    //动态获取mock数据
    request = ()=>{
        let _this = this;
        axios.ajax({
            url:'/table/user',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then((res)=>{
            if(res.code == 0){
                res.result.list.map((item,index)=>{
                    item.key = index;
                })
                this.setState({
                    dataSource2:res.result.list,
                    //刷新清空选择状态
                    selectedRowKeys:[],
                    selectedRows:null,
                    pagination:Utils.pagination(res,(current)=>{
                        _this.params.page = current;
                        this.request();

                    })
                })
            }
        })
    }
    onRowClick = (recode,index)=>{
        let selectKey = [index];
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem:recode
        })
    }
    //多选执行删除动作
    handleDelete = () => {
        let rows = this.state.selectedRows;
        let ids = [];
        rows.map((item) => {
            ids.push(item.id)
        })   
        Modal.confirm({
            title: '删除提示',
            content: `您确定要删除这些数据吗？${ids.join(',')}`,
            onOk: () => {
               message.success('删除成功')
               this.request();  //重新刷新页面
            }
        })
    }
    render() { 
        const columns = [
            {
                title:'用户ID', 
                dataIndex:'id'
            },
            {
                title:'用户名',
                dataIndex:'userName'
            },
            
            {
                title:'所属部门',
                dataIndex:'sex'
            },
            {
                title:'邮箱',
                dataIndex:'email'
            },
            {
                title:'手机号',
                dataIndex:'phone'
            },
            {
                title:'状态',
                dataIndex:'state'
            },
            {
                title:'创建时间',
                dataIndex:'createTime'
            },
        ]
        const { selectedRowKeys} = this.state;
        //单选
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }
        //多选
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                let ids = []
                selectedRows.map((item) => {
                   ids.push(item.id)
                 })
                this.setState({
                    selectedRowKeys, //必需
                    selectedIds: ids,
                    selectedRows
                })
            }
        }
        return ( 
            <Card>
                <div style={{marginBottom: 10}}>
                    <Button onClick={this.handleDelete}>删除</Button>
                </div>
                <Table
                    //单选
                    /* onRow={(record,index) => {
                        return {
                          onClick: event => {
                              this.onRowClick(record,index)
                          }, // 点击行
                        };
                      }} */
                    bordered
                    rowSelection = {rowCheckSelection}
                    columns={columns}
                    dataSource={this.state.dataSource2}
                    pagination={this.state.pagination}
                />
            </Card>
         );
    }
}
 
export default BasicTable;