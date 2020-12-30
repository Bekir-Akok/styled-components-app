import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {Button} from '../../globalStyles';
import {
    FooterContainer,
    FooterSubcription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLink,
    SocialLogo,
    WebsiteRight
  } from './Footer.element'
 
const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubcription>
                <FooterSubHeading>
                    Join our exclusive membership to 
                    receive the latest news and trends.
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your E-mail" />
                    <Button fontBig>Subscripe</Button>
                </Form>
            </FooterSubcription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sing-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testemonials</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/sing-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testemonials</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/sing-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testemonials</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/sing-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testemonials</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        BeULTRA
                    </SocialLogo>
                    <WebsiteRight>BeULTRA © 2021</WebsiteRight>
                    <SocialIcons>
                        <SocialIconLink href='https://github.com/Bekir-Akok?tab=repositories' target='_blank' aria-label="Facebook"><FaFacebook/></SocialIconLink>
                        <SocialIconLink href='https://github.com/Bekir-Akok?tab=repositories' target='_blank' aria-label="Instagram"><FaInstagram/></SocialIconLink>
                        <SocialIconLink href='https://github.com/Bekir-Akok?tab=repositories' target='_blank' aria-label="Twitter"><FaTwitter/></SocialIconLink>
                        <SocialIconLink href='https://github.com/Bekir-Akok?tab=repositories' target='_blank' aria-label="Youtube"><FaYoutube/></SocialIconLink>
                        <SocialIconLink href='https://github.com/Bekir-Akok?tab=repositories' target='_blank' aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
