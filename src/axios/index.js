import React, { Component } from 'react';
import { reject } from "q";
import { Modal } from 'antd';
import axios from 'axios';
class Axios extends Component {
    static ajax(options){
        let baseURL = 'http://rap2api.taobao.org/app/mock/234007'
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseURL,
                timeout:5000,
                params:(options.data.params&&options.data)|| ''
            }).then((response)=>{
                if(response.status == '200'){
                    let res = response.data;
                    if(res.code == '0'){
                        resolve(res)
                    }else{
                        Modal.info({
                            title: '提示',
                            content: res.msg
                        })
                    }
                }else{
                    reject(response.data);
                }
            })

        });
    }
}
 
export default Axios;