import Figure from 'react-bootstrap/Figure';
import marca from '../../Assets/images/marca.png'

function FigureHeader() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Figure>
            <Figure.Image
                width={1200}
                height={300}
                src={marca}
            />
        </Figure>
      </div>
    );
}

export default FigureHeader;