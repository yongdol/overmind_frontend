import React, {Component} from 'react';
import './App.css';


import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import {
    Login, Register, Sidebar, Search, PasswordCheck, ChangePassword, CheckWithdrawal,
    ChangePasswordFeedback, WithdrawalFeedback,
    /* OverMind */
    OMLogin, OMRegister
} from './components';


import {
    FrontPage, MyPage, MyOrderPage, MyLikesPage, MyAuthPage,
    ServiceDetailPage, Step1Page, Step2Page, Step3Page, Step4Page,
    ReportPage,
    /* OverMind */
    OMMainPage, OMVcPage, OMPcPage,
} from './pages';

// nested route 구조를 사용하기 위한 컴포넌트

class Div extends Component {
    render() {
        return <div className="app">{this.props.children}</div>;
    }
}

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Div}>
                    <IndexRedirect to="overmind"/>

                    <Route path="/main" component={FrontPage}>
                        <Route path="/main/sidebar" component={Sidebar}/>
                        <Route path="/main/search" component={Search}/>
                        <Route path="/main/login" component={Login}/>
                        <Route path="/main/register" component={Register}/>
                    </Route>

                    <Route path="/service/:sid" component={ServiceDetailPage}>
                        <Route path="/service/:sid/search" component={Search}/>
                        <Route path="/service/:sid/sidebar" component={Sidebar}/>
                        <Route path="/service/:sid/login" component={Login}/>
                        <Route path="/service/:sid/register" component={Register}/>
                    </Route>

                    <Route path="/service/:sid/purchase" component={ServiceDetailPage}>
                        <Route path="/service/:sid/purchase/search" component={Search}/>
                        <Route path="/service/:sid/purchase/sidebar" component={Sidebar}/>
                    </Route>

                    <Route path="/service/:sid/purchase/1" component={Step1Page}>
                        <Route path="/service/:sid/purchase/1/search" component={Search}/>
                        <Route path="/service/:sid/purchase/1/sidebar" component={Sidebar}/>
                    </Route>

                    <Route path="/service/:sid/purchase/2" component={Step2Page}>
                        <Route path="/service/:sid/purchase/2/search" component={Search}/>
                        <Route path="/service/:sid/purchase/2/sidebar" component={Sidebar}/>
                    </Route>

                    <Route path="/service/:sid/purchase/3" component={Step3Page}>
                        <Route path="/service/:sid/purchase/3/search" component={Search}/>
                        <Route path="/service/:sid/purchase/3/sidebar" component={Sidebar}/>
                    </Route>

                    <Route path="/service/:sid/purchase/4" component={Step4Page}>
                        <Route path="/service/:sid/purchase/4/search" component={Search}/>
                        <Route path="/service/:sid/purchase/4/sidebar" component={Sidebar}/>
                    </Route>

                    <Route path="/report/:oid" component={ReportPage}>
                        <Route path="/report/:oid/search" component={Search}/>
                        <Route path="/report/:oid/sidebar" component={Sidebar}/>
                    </Route>

                    <Route path="/mypage" component={MyPage}>
                        <IndexRedirect to="/mypage/myorder"/>
                        {/*/!*<Route path="/mypage/sidebar" component={Sidebar} />*/}
                         {/*// /!*<Route path="/mypage/search" component={Search} />*!/*!/*/}
                    </Route>

                    <Route path="/mypage/myauth" component={MyAuthPage}>
                        <Route path="/mypage/myauth/sidebar" component={Sidebar}/>
                        <Route path="/mypage/myauth/search" component={Search}/>
                        <Route path="/mypage/myauth/passwordcheck" component={PasswordCheck}/>
                        <Route path="/mypage/myauth/changepassword" component={ChangePassword}/>
                        <Route path="/mypage/myauth/checkwithdrawal" component={CheckWithdrawal}/>
                        <Route path="/mypage/myauth/f1" component={ChangePasswordFeedback}/>
                        <Route path="/mypage/myauth/f2" component={WithdrawalFeedback}/>
                    </Route>

                    <Route path="/mypage/mylikes" component={MyLikesPage}>
                        <Route path="/mypage/mylikes/sidebar" component={Sidebar}/>
                        <Route path="/mypage/mylikes/search" component={Search}/>
                        <Route path="/mypage/mylikes/passwordcheck" component={PasswordCheck}/>
                        <Route path="/mypage/mylikes/changepassword" component={ChangePassword}/>
                        <Route path="/mypage/mylikes/checkwithdrawal" component={CheckWithdrawal}/>
                        <Route path="/mypage/mylikes/f1" component={ChangePasswordFeedback}/>
                        <Route path="/mypage/mylikes/f2" component={WithdrawalFeedback}/>
                    </Route>

                    <Route path="/mypage/myorder" component={MyOrderPage}>
                        <Route path="/mypage/myorder/sidebar" component={Sidebar}/>
                        <Route path="/mypage/myorder/search" component={Search}/>
                        <Route path="/mypage/myorder/passwordcheck" component={PasswordCheck}/>
                        <Route path="/mypage/myorder/changepassword" component={ChangePassword}/>
                        <Route path="/mypage/myorder/checkwithdrawal" component={CheckWithdrawal}/>
                        <Route path="/mypage/myorder/f1" component={ChangePasswordFeedback}/>
                        <Route path="/mypage/myorder/f2" component={WithdrawalFeedback}/>
                    </Route>

                    <Route path="/overmind" component={OMMainPage}>
                        <Route exact path="/overmind/sidebar" component={Sidebar} />
                        <Route exact path="/overmind/search" component={Search} />
                        <Route exact path="/overmind/login" component={OMLogin} />
                        <Route exact path="/overmind/register" component={OMRegister} />
                    </Route>


                    <Route path="/overmind/vc/pflist" component={OMVcPage}>
                        <Route exact path="/overmind/sidebar" component={Sidebar} />
                        <Route exact path="/overmind/search" component={Search} />
                        <Route exact path="/overmind/login" component={OMLogin} />
                        <Route exact path="/overmind/register" component={OMRegister} />
                    </Route>

                    <Route path="/overmind/report/:fid" component={OMPcPage}>
                        <Route exact path="/overmind/sidebar" component={Sidebar} />
                        <Route exact path="/overmind/search" component={Search} />
                        <Route exact path="/overmind/login" component={OMLogin} />
                        <Route exact path="/overmind/register" component={OMRegister} />
                    </Route>





                </Route>
            </Router>
        );
    }
}


export default App;
