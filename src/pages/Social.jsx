import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { LinkedIn, Instagram, MailOutline } from '@mui/icons-material';

const CenteredIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5px; 
  margin-top: -50px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px; 
`;

function Social() {
  return (
    <CenteredIcons>
      <SocialIcons>
        <IconButton
          color="primary"
          href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFT5s-PwGMa7QAAAYqAh1dgiKKY2a4jB9so6mmvE7WULKALGRcisA-y9LXPIX4gC8CHec0zjzpYNZ8AUOYPzPeexctWV72wuz399u_D7m5pV4SkZeOyxg6RZUmoZyiyWX_7vns=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fieeesbmuj%2F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          color="primary"
          href="https://www.instagram.com/ieeemuj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </IconButton>
        <IconButton
          color="primary"
          href="mailto: ieee@muj.manipal.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MailOutline />
        </IconButton>
      </SocialIcons>
    </CenteredIcons>
  );
}

export default Social;
