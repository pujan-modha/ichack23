import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { LinkedIn, Instagram, MailOutline } from '@mui/icons-material';

const Footer = () => {
  const Wrapper = styled.section`
    display: flex;
    align-items: center;
    min-height: 100vh;
    // background: linear-gradient(to bottom, #ffffff, #0070c0); /* Linear gradient background */
    background-color: #e3ebfa;
  `;

  const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
  `;

  const IconWrapper = styled.div`
    margin: 0 10px;
  `;


  const ContactFormContainer = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const GoogleMapContainer = styled.div`
    flex: 1;
    padding: 20px;
  `;

  const ContactHeading = styled.h2`
    font-weight: bold;
    color: #000; /* Heading text color */
    font-size: 24px; /* Heading font size */
    margin-bottom: 20px;
  `;

  const ContactForm = styled.form`
    max-width: 400px;
    margin: 0 auto;

    input[type="text"],
    input[type="email"],
    textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      background-color: #fff; 
    }

    textarea {
      resize: vertical;
    }

    input[type="submit"] {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 15px 30px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s ease, transform 0.2s ease;

      &:hover {
        background-color: #0056b3;
        transform: scale(1.05); 
      }
    }
  `;

  const GoogleMap = styled.iframe`
    width: 100%;
    height: 450px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  `;

  return (
    <Wrapper>
      <ContactFormContainer>
        <ContactHeading className="common-heading">CONTACT US</ContactHeading>
        <ContactForm action="https://formspree.io/f/xrgwkwlwnpm" method="POST">
          <input
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <textarea
            name="message"
            cols="30"
            rows="6"
            autoComplete="off"
            placeholder="Your message"
            required
          ></textarea>
          <input type="submit" value="Submit" />
        </ContactForm>
      </ContactFormContainer>

      <GoogleMapContainer>
        <GoogleMap
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.877283914117!2d75.56265937558182!3d26.84385517668822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d67402d4eb863!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1694255447850!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></GoogleMap>
      </GoogleMapContainer>
    </Wrapper>


  );
};

export default Footer;
