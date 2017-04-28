import Layout from '../components/layout';
import React, { PureComponent } from 'react';
import AboutMe from '../components/Cards/AboutMe'
export default (props) => {
    return (
        <Layout>
            <AboutMe />
            <AboutMe /><AboutMe />
        </Layout >
    )
}