/**
 * Created by zy on 16/12/28.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as studentAction from '../../actions/student';

//import { UserList } from '../../components';

class LoginApp extends Component {

    componentWillMount() {
        //debugger;
        const { actions } = this.props;
        actions.getStudent();
        //const { getStudent } = this.props;
        //getStudent();
    }

    render() {
        return (
            <div>
                <input type="password" placeholder={this.props.username} />
                <input type="password" placeholder={this.props.password} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    //debugger;
    return {
        //...state.Classroom
        username: state.Classroom.username,
        password: state.Classroom.password
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(studentAction, dispatch),
    dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginApp);