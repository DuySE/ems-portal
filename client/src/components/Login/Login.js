import { PureComponent } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './Login.css';
import { withRouter } from 'react-router';
import { login } from '../../apis';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }
  render() {
    const auth = async (username, password) => {
      const res = await login(username, password);
      console.log(res);
      if (res.data.data) this.props.history.push('/leaves');
      else this.props.history.push('/');
    }
    return (
      <div className='login'>
        <Form
          name='basic'
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            label='Username'
            name='username'
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input onChange={e => this.setState({ username: e.target.value })} />
          </Form.Item>
          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password onChange={e => this.setState({ password: e.target.value })} />
          </Form.Item>
          <Form.Item name='remember' valuePropName=''>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type='primary' onClick={() => auth(this.state.username, this.state.password)}>Login</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default withRouter(Login);
