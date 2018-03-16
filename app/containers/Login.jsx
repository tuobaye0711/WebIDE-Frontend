import React, { Component } from 'react'
import VideoCover from 'react-video-cover'
import i18n from 'utils/createI18n'
import api from '../backendAPI'
import Header from './Header'
import cx from 'classnames'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      password: '',
      email: '',
      captcha: '',
      remember_me: false,
      code: '',
      mode: 'login',
      pwdError: false,
    }
  }
  componentDidMount () {
    this.checkCaptcha()
  }
  checkCaptcha = () => {
    api.hasCaptcha().then((res) => {
      console.log('res', res)
    })
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  handlePwdChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  handleRemembarChange = (e) => {
    this.setState({
      remember_me: e.target.checked
    })
  }
  handleLogin = (e) => {
    e.preventDefault()
    e.stopPropagation()
    api.login({
      password: this.state.password,
      email: this.state.email,
      captcha: this.state.captcha,
      remember_me: this.state.remember_me
    }).then((res) => {
      if (res.code === 3205) {
        this.setState({
          mode: 'code'
        })
      } else if (res.code === 0) {
        console.log('Login Succeed.')
      } else {
        this.setState({
          errHint: res.msg,
          pwdError: true,
        })
        this.checkCaptcha()
      }
    })
  }
  handleCodeChange = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({
      code: e.target.value
    })
  }
  handleCode = (e) => {
    e.preventDefault()
    e.stopPropagation()
    api.loginCode({ code: this.state.code }).then((res) => {
      console.log('code', res)
    })
  }
  render () {
    let loginForm = null
    if (this.state.mode === 'login') {
      loginForm = (
        <div className='login-panel'>
          <div className='login-panel-input'>
            <div className='title'>用户登录</div>
            <input type='text' className='form-control' onChange={this.handleEmailChange} placeholder='用户名／手机／邮箱' value={this.state.email} />
            <input type='password' className={cx('form-control', { error: this.state.pwdError })} onChange={this.handlePwdChange} placeholder='密码' />
            <div className='checkbox'>
              <label>
                <input type='checkbox'
                  onChange={this.handleRemembarChange}
                  checked={this.state.remember_me}
                />
                记住我
              </label>
            </div>
            <button className='btn btn-primary' onClick={this.handleLogin}>登录</button>
            <div className='links'>
              <a href='https://coding.net/password/forget'>找回密码</a>
              <div className='input-right'>还没有账号？<a href='https://coding.net/register'>马上注册</a></div>
            </div>
          </div>
          <div className='login-panel-tencent'>
            <a href='https://coding.net/api/oauth/qcloud/rebind?return_url=https://ide.coding.net'>
              <i className='logo-qcloud' />使用腾讯云账号登录
            </a>
          </div>
        </div>
      )
    } else if (this.state.mode === 'code') {
      loginForm = (
        <div className='login-panel'>
          <div className='login-panel-input'>
            <div className='title'>两步验证</div>
            <input type='text' className='form-control' onChange={this.handleCodeChange} placeholder='两步验证码' value={this.state.code} />
            
            <button className='btn btn-primary' onClick={this.handleCode}>登录</button>
            <div className='links'>
              <a href='https://coding.net/twofa/close'>关闭两步验证</a>
              <div className='input-right'><a href='https://coding.net/help/doc/account/2fa.html'>两步验证遇到问题？</a></div>
            </div>
          </div>
          <div className='login-panel-tencent'>
            <a href='https://coding.net/api/oauth/qcloud/rebind?return_url=https://ide.coding.net'>
              <i className='logo-qcloud' />使用腾讯云账号登录
            </a>
          </div>
        </div>
      )
    }
    return (
      <div className='login-page'>
        <div className='login-bg'>
          <VideoCover videoOptions={{
            src: '//webide-1255989204.cos.ap-chengdu.myqcloud.com/DemoVideo/ide-login.mp4',
            autoPlay: true,
            loop: true,
            // ref: (videoRef) => {
            //   this.videoRef = videoRef
            //   this.videoRef.play()
            // }
          }}
          />
          <div className='login-bg-cover'></div>
        </div>
        <div className='login-container'>
          {loginForm}
        </div>
        <Header />
      </div>
    )
  }
}

export default Login
