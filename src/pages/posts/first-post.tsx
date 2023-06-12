import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/Layout/Layout';

// Note: Before Next.js 12.2, it was required that the Link component wrapped an <a> tag, but this is not required in versions 12.2 and above.
export default function FirstPost () {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        // Note: The Facebook SDK was only used as a contrived example to show how to add third-party scripts to your application in a performant way. Now that you understand the basics of including third-party functionality in Next.js, you can remove the Script component from FirstPost before proceeding.
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        // strategy controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
          // onLoad is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  )
}
