import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <ul>
        <li><Link href="/" >トップへ</Link></li>
        <li><Link href="about" >このリポジトリについて</Link></li>
      </ul>
    </footer>
  )
}

export default Footer
