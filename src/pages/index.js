import React, {Component} from 'react';
import {
    Contents, Header, Footer, DarkHeader, DarkFooter, DarkContents,
    DarkConHeader, MyOrder, MyLikes, MyAuth, ServiceDetail,
    Step1, Step2, Step3, Step4, Report,

    /* OverMind */
    OMHeader, Portfolios, OMMain, OMReport
} from '../components';


class FrontPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Contents />
                <Footer />
                {this.props.children}
            </div>
        );
    }
}

class MyPage extends Component {
    render() {
        return (
            <div>
                <DarkHeader />
                <DarkContents />
                <DarkFooter />
                {this.props.children}
            </div>
        );
    }
}

class MyOrderPage extends Component {
    render() {
        return (
            <div>
                <DarkHeader />
                <div className="contents">
                    <DarkConHeader current="order"/>
                    <MyOrder />
                </div>
                <Footer />
                {this.props.children}
            </div>
        );
    }
}

class MyLikesPage extends Component {
    render() {
        return (
            <div>
                <DarkHeader />
                <div className="contents">
                    <DarkConHeader current="likes"/>
                    <MyLikes />
                </div>
                <Footer />
                {this.props.children}
            </div>
        );
    }
}

class MyAuthPage extends Component {
    render() {
        return (
            <div>
                <DarkHeader />
                <div className="contents">
                    <DarkConHeader current="auth"/>
                    <MyAuth />
                </div>
                <Footer />
                {this.props.children}
            </div>
        );
    }
}

class ServiceDetailPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <ServiceDetail serviceid={this.props.params.sid}/>
                <Footer />
                {this.props.children}
            </div>
        );
    }
}

class Step1Page extends Component {
    render() {
        return (
            <div>
                <Header />
                <Step1 sid={this.props.params.sid}/>
                <Footer />
                {this.props.children}
            </div>
        );
    }
}

class Step2Page extends Component {
    render() {
        return (
            <div>
                <Header />
                <Step2 sid={this.props.params.sid}/>
                <Footer />
                {this.props.children}
            </div>
        );
    }
}

class Step3Page extends Component {
    render() {
        return (
            <div>
                <Header />
                <Step3 sid={this.props.params.sid}/>
                <Footer />
                {this.props.children}
            </div>
        );
    }
}

class Step4Page extends Component {
    render() {
        return (
            <div>
                <Header />
                <Step4 sid={this.props.params.sid}/>
                <Footer />
                {this.props.children}
            </div>
        );
    }
}

class ReportPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Report oid={this.props.params.oid}/>
                <Footer />
                {this.props.children}
            </div>
        );
    }
}


/* OverMind */

class OMMainPage extends Component {
    render() {
        return (
            <div>
                <OMHeader />
                <OMMain />
                <Footer />
                {this.props.children}
            </div>
        );
    }
}




class OMVcPage extends Component {
    render() {
        return (
            <div>
                <OMHeader />
                <Portfolios />
                <Footer />
                {this.props.children}
            </div>
        );
    }
}

class OMPcPage extends Component {
    render() {
        return (
            <div>
                <OMHeader />
                <OMReport />
                <Footer />
                {this.props.children}
            </div>
        );
    }
}





export {
    FrontPage, MyPage, MyOrderPage, MyLikesPage, MyAuthPage, ServiceDetailPage,
    Step1Page, Step2Page, Step3Page, Step4Page, ReportPage,

    /* OverMind */
    OMMainPage, OMVcPage, OMPcPage
};
