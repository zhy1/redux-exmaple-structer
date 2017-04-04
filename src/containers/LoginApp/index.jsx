/**
 * Created by zy on 16/12/28.
 */
import React, { Component } from 'react';
import { connect,dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as studentAction from '../../actions/student';

//import { UserList } from '../../components';

class LoginApp extends Component {

    constructor(props) {
        super(props);
    }
    componentWillMount() {
        //debugger;
/*        this.setState({
            items: store.getState()
        });*/
        const { actions,dispatch } = this.props;
        actions.getStudent();
        //const { getStudent } = this.props;
        //getStudent();
    }

    onClick() {
        console.info(123);
        //dispatch(this.props);

    }

    render() {
        return (
            <div>
                <input type="password" placeholder={this.props.username} />
                <input type="password" placeholder={this.props.password} />
                <button onClick={this.onClick}>click me</button>
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