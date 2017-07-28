import React, {Component} from 'react';
import OMAccountTips from "./OMAccountTips"
import OMAccountGeneral from "./OMAccountGeneral"


class OMAccountManage extends Component {
    render() {
        return (
            <div>
                <OMAccountGeneral />
                <OMAccountTips />
            </div>
        )
    }
}

export default OMAccountManage;