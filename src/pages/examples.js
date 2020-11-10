import React from 'react'
import Layout from './../components/Layout'
import Header from './../examples/Header'
import HeaderStatic from './../examples/HeaderStatic'


const examples = () => {
    return (
        <Layout>
            <h1>Hi From Examples</h1>
            <Header/>
            <HeaderStatic/>
        </Layout>
    )
}

export default examples
