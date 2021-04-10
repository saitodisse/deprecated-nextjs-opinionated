import React from 'react'
import { AppProps } from 'next/app'
import '../styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />
export default MyApp
