import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap,FooterLinksContainer,
FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink
 ,SocialMedia,SocialMediaWrap,
WebsiteRights,SocialIcons,SocialIconsLink,SocialLogo} from './FooterElement'

// import {FaFacebook, FaInstagram, FaLinkedin,FaYoutube, FaTwitter} from 'react-icons/fa'

const  Footer =() => {
    const toggleHome = ()=>{
    scroll.scrollToTop();
};
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                {/* <FooterLink to='/signin'>About us</FooterLink> */}
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Service</FooterLink>
                            

                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                {/* <FooterLink to='/signin'>About us</FooterLink> */}
                                <FooterLink to='/'>Submit Videos</FooterLink>
                                <FooterLink to='/'>Ambassadors</FooterLink>
                                <FooterLink to='/'>Influencer</FooterLink>
                                <FooterLink to='/'>Agency</FooterLink>
                        
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                {/* <FooterLink to='/signin'>About us</FooterLink> */}
                                <FooterLink to='/'>Contact</FooterLink>
                                <FooterLink to='/'>Supports </FooterLink>
                                <FooterLink to='/'>Destinations </FooterLink>
                                <FooterLink to='/'>Support Link</FooterLink>
                                <FooterLink to='/'>Sponsorships</FooterLink>
                            

                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                {/* <FooterLink to='/signin'>About us</FooterLink> */}
                                <FooterLink to='/'>Facebook</FooterLink>
                                <FooterLink to='/'>LinkedIn</FooterLink>
                                <FooterLink to='/'>Instagram</FooterLink>
                                <FooterLink to='/'>Youtube</FooterLink>
                                <FooterLink to='/'>Twitter</FooterLink>
                            

                        </FooterLinkItems>

                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            dolla </SocialLogo>
                            <WebsiteRights> @ {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                                
                       
                        <SocialIcons>
                            <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconsLink>

                               <SocialIconsLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconsLink>
                              <SocialIconsLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconsLink>
                                <SocialIconsLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconsLink>
                                <SocialIconsLink href="/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>

            
        </FooterContainer>
    )
}

export default Footer
