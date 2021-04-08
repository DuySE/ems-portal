import { PureComponent } from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const SubMenu = Menu.SubMenu;

export default class SideBar extends PureComponent {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
      >
        <SubMenu key='sub1' icon={<UserOutlined />} title='subnav 1'>
          <Menu.Item key='1'>Leave</Menu.Item>
          <Menu.Item key='2'>Reports</Menu.Item>
          <Menu.Item key='3'>Update profile</Menu.Item>
        </SubMenu>
      </Menu >
    );
  }
}
