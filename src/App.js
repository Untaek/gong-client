import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.png';
import gongmo from './gongmo.jpg';
import './App.css';

const Login = () => (
  <div>
    <h2>Login</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-nav-container">
            <div className="App-logo">LOGO</div>
            <div className="App-header-nav">
              <ul>
                <li className="App-menu1">공모전</li>
                <li className="App-menu2">게시판</li>
                <li className="App-menu3">스터디</li>
              </ul>
              <ul>
                <li className="App-menu-signin login">로그인</li>
                <li className="App-menu-signin signin">회원가입</li>
              </ul>
            </div>
          </div>
          
        </header>
        <div className="App-header-desc">
          <div className="App-header-desc-img">
            <img src={logo} width='80%'/>
          </div>
          <div>
            <h2 className="App-title">여러분 <span style={{color: 'red'}}>공모전</span> 해야되는거 <span style={{color: 'red'}}>인저엉?~</span></h2>
            <h2 className="App-title">근데 <span style={{color: 'red'}}>공모전</span> 팀원 구하기 X도 힘든거 <span style={{color: 'red'}}>알지용?~</span></h2>
            <h2 className="App-title">근데 <span style={{color: 'red'}}>님</span> 아직도 <span style={{color: 'red'}}>스터디</span> 안 구하고 머함?~</h2>
            <h2 className="App-title"><span style={{color: 'red'}}>공.인.용</span>이 알려줄게<span style={{color: 'red'}}></span> 드루와 드루와</h2>
            <div className="App-signin">
            <Link className="App-signin-button login" to='/login'>공모전 둘러보기</Link>
            <Link className="App-signin-button sign" to='/login'>스터디 그룹 찾기</Link>
            </div>
          </div>
        </div>
        <div className="App-notice">
          <span style={{border: '1px solid green', borderRadius: 12, fontSize: 14, padding: 4, marginRight: 14, color: 'green'}}>공지</span>앞으로 엄청난 사이트가 되어버릴 안내
        </div>
        <div className="App-content">
          <div className="App-content-tab1 tab1">
            <div className="Content-tab-name">떠오르는 공모전 & 서포터즈</div>
            <div className="Content-tab1-row">
              <div className="Content-tab1-item-container">
                <div className="Content-tab1-item-row Content-tab1-item-img"><img src={gongmo} width='300px'/></div>
                <div className="Content-tab1-item-row">수도권, 지방거주 가능</div>
                <div className="Content-tab1-item-row">주최: 삼성전자</div>
                <div className="Content-tab1-item-row">혜택: 서류전형통과</div>
                <div className="Content-tab1-item-row">전기, 전자, 컴퓨터</div>
              </div>
              <div className="Content-tab1-item-container">
                <div className="Content-tab1-item-row Content-tab1-item-img"><img src={gongmo} width='300px'/></div>
                <div className="Content-tab1-item-row">수도권, 지방거주 가능</div>
                <div className="Content-tab1-item-row">주최: 삼성전자</div>
                <div className="Content-tab1-item-row">혜택: 서류전형통과</div>
                <div className="Content-tab1-item-row">전기, 전자, 컴퓨터</div>
              </div>
            </div>
            <div className="Content-tab1-row">
              <div className="Content-tab1-item-container">
                <div className="Content-tab1-item-row Content-tab1-item-img"><img src={gongmo} width='300px'/></div>
                <div className="Content-tab1-item-row">수도권, 지방거주 가능</div>
                <div className="Content-tab1-item-row">주최: 삼성전자</div>
                <div className="Content-tab1-item-row">혜택: 서류전형통과</div>
                <div className="Content-tab1-item-row">전기, 전자, 컴퓨터</div>
              </div>
              <div className="Content-tab1-item-container">
                <div className="Content-tab1-item-row Content-tab1-item-img"><img src={gongmo} width='300px'/></div>
                <div className="Content-tab1-item-row">수도권, 지방거주 가능</div>
                <div className="Content-tab1-item-row">주최: 삼성전자</div>
                <div className="Content-tab1-item-row">혜택: 서류전형통과</div>
                <div className="Content-tab1-item-row">전기, 전자, 컴퓨터</div>
              </div>
            </div>
            <div className="Content-tab1-row">
              <div className="Content-tab1-item-container">
                <div className="Content-tab1-item-row Content-tab1-item-img"><img src={gongmo} width='300px'/></div>
                <div className="Content-tab1-item-row">수도권, 지방거주 가능</div>
                <div className="Content-tab1-item-row">주최: 삼성전자</div>
                <div className="Content-tab1-item-row">혜택: 서류전형통과</div>
                <div className="Content-tab1-item-row">전기, 전자, 컴퓨터</div>
              </div>
              <div className="Content-tab1-item-container">
                <div className="Content-tab1-item-row Content-tab1-item-img"><img src={gongmo} width='300px'/></div>
                <div className="Content-tab1-item-row">수도권, 지방거주 가능</div>
                <div className="Content-tab1-item-row">주최: 삼성전자</div>
                <div className="Content-tab1-item-row">혜택: 서류전형통과</div>
                <div className="Content-tab1-item-row">전기, 전자, 컴퓨터</div>
              </div>
            </div>
          </div>
          <div className="App-content-divider"></div>
          <div className="App-content-tab2 tab2">최신 공모전 & 서포터즈</div>
          <div className="App-content-divider"></div>
          <div className="App-content-tab3 tab3">스터디 그룹 구합니다</div>
        </div>
        <div className="App-footer">
          <h1 className="App-title">공인용~</h1>
        </div>
      </div>
    );
  }
}

export default App;
