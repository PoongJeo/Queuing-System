import Banner from "../image/Banner.png"
import logo from "../image/logo.png"



import { useEffect, useState } from 'react';

const Login = () => {
   
    return(<div>

                <div className="Banner">
                    <img src={Banner}/>
                </div>
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="px-3">
                            <div className='web-icon-1' >
                                 <img style={{width: '120px', height: '94px'}} src={logo}/>
                            </div>
                            <div className="form-group">
                                <ul className="username">
                                    <label>Tên đăng nhập</label>
                                    <input type="email" className="form-control" placeholder="Nhập tên đăng nhập" style={{width: '400px', height: '30px'}} />
                                </ul> 
                                <ul className="pass">
                                    <label>Mật khẩu</label>
                                    <input type="password" className="form-control" placeholder="Nhập mật khẩu" style={{width: '400px', height: '30px'}}/>
                                </ul>
                                <ul className="forgot-pass">
                                    <label><a style={{color: 'red', margin: '0 0 19px 0', display: 'block'}} href="#">Quên mật khẩu?</a></label>
                                </ul>
                            </div>
                                <button type="submit" className="button-login">Đăng nhập</button>
                        </div>
                    </div>

                </div>
           
    </div> );
}

export default Login

