
import { NavLink } from 'react-router-dom';
import Icons from './Icons';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="emplacement">
        <h2>Emplacement</h2>

        <ul>
          <div className="ok">

          <li>
            <NavLink to="">6423</NavLink>
          </li>
          <li>
            <NavLink style={{textAlign: 'center'}} to="">Schwyz</NavLink>
          </li>
          </div>
        </ul>
      </div>
      <div className="hours">
        <h2>Horaires d'ouverture</h2>
        
     <div className="horaires">

          <span className='un'>Du lundi au vendredi,</span> <br />
          <span className='un'>de 9h00 à 19h00</span>
        <br />
        <div className="troiss">

      <span className='deux'> jeudi, <br />
      9h00 - 20h00</span>
        </div>
         
        <span className='trois'>Samedi, <br /> 
        9h30 - 17h00</span>
     </div>
      
      </div>
      <div className="contact">
        <h2>Contact</h2>
       <div className="infos">
         <h4><a href='mailto:mfokamkemgne@icloud.com' target='_blank'>mfokamkemgne@icloud.com</a></h4>
        <h3>0000000000</h3>
       <Icons/>
       </div>
      </div>
    </div>
  );
};

export default Footer;