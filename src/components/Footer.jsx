import  react from 'react'
import '../styles/Footer.css'
import AGLogo from './FooterIcons/AgLogo'
import FooterCard from './FooterCard'
import ScrollUpIcon from './FooterIcons/ScrollUpIcon'
const Footer = () => {
  return (
    <div className='Footer-div'>
      <footer className="Footer">
      <div className="AGLogo">
        <AGLogo />
      </div>
        <p className="Name">Designed and Developed by <span>Abdullah Gulzaib</span></p>
  <hr style={{ 
  width: "2px", 
  height: "45px", 
  backgroundColor: "rgba(183, 107, 255, 0.3)", /* Semi-transparent cyber purple */
  border: "none", 
  margin: "0 25px" 
}} />
        <FooterCard />
        <ScrollUpIcon />
      </footer>
      <p className="Footer-text" style={{ color: "#2b0124" , fontSize: "1rem",fontWeight: "bold" }}>© 2024 Abdullah Gulzaib. All rights reserved.</p>
    </div>
  )
}
export default Footer