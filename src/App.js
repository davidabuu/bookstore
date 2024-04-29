import React from 'react';
import { Layout } from 'antd';
import BookList from './BookList';


const { Header, Content, Footer } = Layout;

const App = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ color: 'white' }}>Bookstore</Header>
            <Content style={{ padding: '24px' }}>
                <BookList />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Bookstore ©2024</Footer>
        </Layout>
    );
};

export default App;
