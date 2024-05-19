import SocialMediaRow from './SocialMediaRow'
import FooterInfo from './FooterInfo'
import FooterCopyright from './FooterCopyright'

function Footer() {
  return (
    <div bg="light" data-bs-theme="light">
      <SocialMediaRow></SocialMediaRow>
      <footer className="page-footer font-small py-4 border-top">
        <FooterInfo></FooterInfo>
        <FooterCopyright></FooterCopyright>
      </footer>
    </div>
  )
}

export default Footer