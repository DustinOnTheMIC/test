import Head from 'next/head';
import Script from 'next/script';
import Home from './home'

export default function index() {

  return (
    <div>
      <Head>
        <title>CloudFly - Dịch vụ điện toán đám mây chất lượng cao, thanh toán theo giờ và hỗ trợ chuyênnghiệp 24/7</title>
        <meta name="description" content="Generated by create next app" />

        <link 
          rel="stylesheet" 
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
        />
        <link href='/logo.png' rel='icon'/>
      </Head>

      <Home/>
      <Script src="https://kit.fontawesome.com/e20sdfsd9.js" crossOrigin="anonymous"/>

      <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" />
      <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" />
      

    </div>
  )
}
