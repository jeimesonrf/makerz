import {React} from 'react';
import logo from '../../Assets/images/pdf-41-128.png';
import { Figure } from 'react-bootstrap';

export default function File(props) {
    return (
      <div style={{display: 'flex', justifyContent: 'left', padding:30}}>
        <Figure>
            <Figure.Image
                width={30}
                height={40}
                src={logo}
            />
        </Figure>
        <a href={require('../../Assets/files/1.pdf')} target="_blank" rel="noreferrer">Arquivo</a>
      </div>
    );
};