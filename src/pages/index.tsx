import Head from 'next/head'

import siteConfig from '../../config/site.config'
import Navbar from '../components/Navbar'
import FileListing from '../components/FileListing'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import SwitchLayout from '../components/SwitchLayout'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
      <Head>
        <title>{siteConfig.title}</title>
      </Head>

      <main className="flex w-full flex-1 flex-col bg-gray-50 dark:bg-gray-800">
        <Navbar />
        <div className="mx-auto w-full max-w-5xl py-4 sm:p-4">
          <nav className="mb-4 flex items-center justify-between px-4 sm:px-0 sm:pl-1">
            <Breadcrumb />
            <SwitchLayout />

            <div class="dropdown">
    <button class="dropbtn">External Sites 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="https://www.example.com%22%3Esite/ 1</a>
      <a href="https://www.example2.com%22%3Esite/ 2</a>
      <a href="https://www.example3.com%22%3Esite/ 3</a>
      <a href="https://www.example4.com%22%3Esite/ 4</a>
      <a href="https://www.example5.com%22%3Esite/ 5</a>
    </div>
  </div>
            
          </nav>
          <FileListing />
        </div>
      </main>

      <Footer />
    </div>
  )
}
