/*
 * @Author: mengxuhui214175@sogou-inc.com 
 * @Date: 2019-03-08 11:02:41 
 * @Last Modified by: mengxuhui
 * @Last Modified time: 2019-03-08 11:05:47
 */


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
            <h1>{this.props.note}</h1>
        )
    }
}

export default Index;