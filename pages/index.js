/*
 * @Author: mengxuhui214175@sogou-inc.com 
 * @Date: 2019-03-08 11:02:41 
 * @Last Modified by: mengxuhui
 * @Last Modified time: 2019-03-08 12:28:47
 */

import Header from '../components/Header'
class Index extends React.Component {
    // 后端渲染
    static async getInitialProps({ req, query }) {
        const note = req && req.note ? req.note : ""

        return {
            note
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <h1>{this.props.note}</h1>
            </React.Fragment>

        )
    }
}

export default Index;