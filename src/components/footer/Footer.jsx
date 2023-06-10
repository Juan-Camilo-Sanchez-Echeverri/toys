import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

import styled from 'styled-components';
import style from './Footer.module.css';

import { Link } from 'react-router-dom';

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
      <h3>Toys</h3>
        <p className={style.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quis
          minus molestias eum, minima veritatis ad soluta quas consequuntur
          incidunt a. Reprehenderit, repellat deleniti? Ratione labore sequi
          asperiores doloribus sunt.
        </p>
        <div className={style.socialContainer}>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
        </div>
      </div>
      <div className={style.center}>
        <h3>Enlaces de Interes</h3>
        <Link to={'/toys/dashboard'} style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link>
      </div>
      <div className={style.right}>
        <h3>Contacto</h3>
        <div className={style.contactItem}>
          <RoomIcon style={{ marginRight: '10px' }} />
          <p>Medellin,Antioquia</p>
        </div>
        <div className={style.contactItem}>
          <LocalPhoneIcon style={{ marginRight: '10px' }} />
          <p>312 810 12 13</p>
        </div>
        <div className={style.contactItem}>
          <EmailIcon style={{ marginRight: '10px' }} />
          <p>toys@toysmedellin.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
