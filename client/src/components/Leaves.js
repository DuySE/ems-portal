import { PureComponent } from 'react';
import { Table, Layout, Menu, Breadcrumb, Tag, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;
const Content = Layout.Content;
const Sider = Layout.Sider;

export default class Leaves extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Joined date',
          dataIndex: 'created',
          key: 'created',
        },
        {
          title: 'Action',
          key: 'action',
          render: () => (
            <Space size='middle'>
              <Tag color='green'>Approve</Tag>
              <Tag color='red'>Decline</Tag>
            </Space>
          ),
        },
      ],
      dataSource: []
    }
  }
  render() {
    return (
      <Layout>
        <Layout>
          <Sider width={200} className='site-layout-background'>
            <Menu
              mode='inline'
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key='sub1' icon={<UserOutlined />} title='Management'>
                <Menu.Item key='1'>Leaves</Menu.Item>
                <Menu.Item key='2'>Reports</Menu.Item>
              </SubMenu>
              <Menu.Item key='3' onClick=''>My leaves</Menu.Item>
              <Menu.Item key='4'>My reports</Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className='site-layout-background'
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Table dataSource={this.state.dataSource} columns={this.state.columns} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
