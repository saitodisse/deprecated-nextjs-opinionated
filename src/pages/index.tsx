import Head from 'next/head'
import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Layout } from '../components/Layout/Layout'
import { LinksList } from '../model/site/LinksList'
import { ChangeThemeDropDown } from '../components/ChangeThemeDropDown/ChangeThemeDropDown'
import Link from 'next/link'

export default function Page() {
  const pageTitle = process.env.NEXT_PUBLIC_SITE_NAME
  const pageUrl = process.env.NEXT_PUBLIC_SITE_URL
  const imageUrl = process.env.NEXT_PUBLIC_SITE_IMAGE
  const description = process.env.NEXT_PUBLIC_SITE_DESCRIPTION
  const keywords = process.env.KEYWORDS

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/favicon.ico' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />

        {/* Open Graph */}
        <meta name='og:title' content={pageTitle} key='ogtitle' />
        <meta name='og:type' content='website' />
        <meta name='og:url' content={pageUrl} />
        <meta name='og:description' content={description} />
        <meta name='og:image' content={imageUrl} />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' key='twcard' />
        <meta property='twitter:image' content={imageUrl} />
        <meta name='twitter:creator' content='' key='twhandle' />
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>HOME</div>
            <div className='text-sm'>Next.js Opinionated</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        {/* avatar */}
        <div className='avatar'>
          <div className='w-24 h-24 my-8 rounded-box ring ring-primary ring-offset-base-100 ring-offset-2'>
            <img src='http://daisyui.com/tailwind-css-component-profile-1@94w.png' />
          </div>
        </div>

        {/* text */}
        <div className='pb-3'>
          <h1 className='py-2 text-3xl font-bold'>Next.js Opinionated</h1>

          <p className='max-w-md my-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius odit soluta
            porro libero amet quidem, iste nihil ipsam, aspernatur distinctio iure aperiam fugiat
            quaerat sit architecto nemo tempora ratione.
          </p>

          {/* buttons */}
          <div className='flex flex-wrap items-center my-16 space-x-2'>
            <button
              className='btn btn-primary'
              onClick={async () => {
                const res = await fetch('/api/get_server_time')
                const resultJSON = await res.json()
                const myAlert = withReactContent(Swal)
                await myAlert.fire({
                  title: 'from server',
                  html: (
                    <div>
                      <img src='https://unsplash.it/600/300' />
                      {resultJSON.message}
                    </div>
                  ),
                  confirmButtonText: 'close',
                })
              }}
            >
              Call API
            </button>

            <Link href='/form-example'>
              <a className='btn btn-primary'>Form Example</a>
            </Link>

            <ChangeThemeDropDown />
          </div>

          <p className='max-w-md mt-10 text-sm italic'>
            <a className='underline' target='_blank' rel='noreferrer' href='https://nextjs.org/'>
              next.js
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://www.typescriptlang.org/'
            >
              typescript
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://tailwindcss.com/'
            >
              tailwindcss
            </a>
            ,{' '}
            <a className='underline' target='_blank' rel='noreferrer' href='https://daisyui.com/'>
              daisyUI
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://storybook.js.org/'
            >
              storybook
            </a>
            ,{' '}
            <a className='underline' target='_blank' rel='noreferrer' href='https://jestjs.io/'>
              jest
            </a>
            ,{' '}
            <a className='underline' target='_blank' rel='noreferrer' href='https://eslint.org/'>
              eslint
            </a>
            ,{' '}
            <a className='underline' target='_blank' rel='noreferrer' href='https://prettier.io/'>
              prettier
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://sweetalert2.github.io/'
            >
              sweetalert2
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://react-icons.github.io/react-icons/'
            >
              react-icons
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://react-hook-form.com/'
            >
              react-hook-form
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/tailwindlabs/tailwindcss-forms'
            >
              @tailwindcss/forms
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/colinhacks/zod'
            >
              zod (validations)
            </a>
          </p>
        </div>
      </Layout>
    </>
  )
}
