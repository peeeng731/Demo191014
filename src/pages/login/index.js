import React, { Component } from 'react';
import {Input,Button} from 'antd';
import axios from 'axios';
class Login extends Component {
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            user:'',
            password:'',
        }
        this.userChange = this.userChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    userChange(e){
        this.setState({ user : e.target.value })
    }

    passwordChange(e){
        this.setState({ password : e.target.value })
    }

    submit(){
        this.getConnect();
    }

    getConnect(){  //api请求函数
        /* let text = {user:this.state.user,password:this.state.password} //获取数据 */
        /* let send = JSON.stringify(text);   //重要！将对象转换成json字符串 */
        let formData = new FormData();
        formData.append('username','admin');
        formData.append('password','admin');
        formData.append('remember-me','1');
        axios({
            method: 'post',
            url: '/management/login',
            responseType: 'json',
            data: formData
          }).then(res => {
            console.log(res);          });

          /*  then(
            data => {
                if(data.success) window.alert('验证成功，欢迎登录');
                else window.alert('验证失败，用户名或密码错误')
            }
        )  */
    }


    render() {
        return (
            <div>
                <div style={{margin:'10px'}}>
                    <div style={{textAlign:'center'}}>
                        <h2>请登录</h2>
                        <Input  id='user'
                    placeholder='用户名'
                    style={{marginBottom:'10px'}}
                    onChange={this.userChange}
                    /><br/>
                        <Input  id='password'
                    type='password'
                    placeholder='密码'
                    style={{marginBottom:'10px'}}
                    onChange={this.passwordChange}
                />
                        <br/>
                        <Button
                    content='登录'
                    style={{marginBottom:'10px'}}
                    onClick={this.submit}
                />
                        <Button content='重置'
                    style={{marginLeft:'20px'}}/>
                    </div>
                </div>
            </div>
         );
    }
}

export default Login;
