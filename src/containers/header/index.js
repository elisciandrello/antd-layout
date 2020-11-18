import React from 'react';
import { Layout, Row, Col, Menu, Avatar, Tag } from 'antd';

const { Header } = Layout;


class PageHeader extends React.Component {

    render() {

        {/* beginning of render */}
        return(
          <Header className="header" style={{ padding: 0, position: 'fixed', zIndex: 1, width: '100%' }}>
            <Row>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Row>
          </Header>
        );
        {/* end of render */}

    }
}

export default PageHeader;