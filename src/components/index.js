import Contents from "./Contents/Contents";
import {Header, DarkHeader} from "./Header/Header";
import {Footer, DarkFooter} from "./Footer/Footer";
import Register from "./RegisterLogin/Register";
import Login from "./RegisterLogin/Login";

import DarkContents from "./DarkContents/DarkContents";
import DarkConHeader from "./DarkConHeader/DarkConHeader";
//import MyOrder from './MyOrder/MyOrder';
//import MyLikes from './MyLikes/MyLikes';
//import MyAuth from './MyAuth/MyAuth';
import MyOrder from './MyPage/MyOrder';
import MyLikes from './MyPage/MyLikes';
import MyAuth from './MyPage/MyAuth';


import Sidebar from './Sidebar/Sidebar';
import Search from './Search/Search';
import {
    PasswordCheck, ChangePassword, CheckWithdrawal,
    ChangePasswordFeedback, WithdrawalFeedback
} from './Wrapper/personalInfo';

import ServiceDetail from './ServiceDetail/ServiceDetail';

import Step1 from './Purchase/Step1';
import Step2 from './Purchase/Step2';
import Step3 from './Purchase/Step3';
import Step4 from './Purchase/Step4';

import Report from './Report/Report';


/* OverMind */
import OMMain from './OverMind/OMMain/OMMain'
import OMHeader from './OverMind/OMHeader/OMHeader';
import OMLogin from './OverMind/OMLogin/OMLogin';
import OMRegister from './OverMind/OMRegister/OMRegister';

import Portfolios from './OverMind/Portfolios/Portfolios';
import OMReport from './OverMind/OMReport/OMReport';

export {
    Contents, Header, Footer, Register, Login, DarkHeader, DarkFooter, DarkContents,
    Sidebar, Search, DarkConHeader, MyOrder, MyLikes, MyAuth,
    PasswordCheck, ChangePassword, CheckWithdrawal, ChangePasswordFeedback, WithdrawalFeedback,
    ServiceDetail, Step1, Step2, Step3, Step4, Report,

    /* OverMind */
    OMMain, OMHeader, OMLogin, OMRegister, Portfolios, OMReport
};
