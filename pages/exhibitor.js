

 import Head from 'next/head'
import Layout from '../layouts/main';
import Wrapper from '../components/Wrapper'

class Exhibitor extends React.Component {
//
// static async getInitialProps({req})
// {
//
//   const res = await fetch('https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/exhibitors')
//   const data = await res.json()
//
//   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
//   return { userAgent : userAgent, exhibitors : data.data  }
// }

render()
{


  return (<Layout>

    <Head>
      <title>ID = {this.props.url.query.id}</title>
    </Head>

    <Wrapper title="Wystawca">

    </Wrapper>

  </Layout>)
}

}
export default Exhibitor;
