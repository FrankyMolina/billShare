import { Flex } from '@chakra-ui/react';
import './Footer.scss';

const Footer = () => {
  return (
    <Flex
      className="FooterContainer"
      justify="center"
      p="0.5rem 0"
      borderTop="1px solid green"
    >
      <a
        href="https://frankymolina.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/FMDev.png" alt='FMDev logo' className="fmdevImage" />
      </a>
    </Flex>
  );
};

export default Footer;
