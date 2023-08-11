import Link from 'next/link'

export default function BtnPrimary ({ children, href }) {
  return (
    <button className='bg-skin-button-accent text-skin-btn-text py-2 px-6 rounded md:ml-8 hover:bg-opacity-75 duration-500'>
      <Link href={href}>{children}</Link>
    </button>
  )
}
