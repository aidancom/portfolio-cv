import { useLocation } from 'react-router-dom';
import '../css/Cabecera.scss';

export default function Cabecera({ children }) {
  const location = useLocation();
  return (

    <>
      <div className="slide">
        {location.pathname != '/' ? (
          <>
          <div className='caja'>
            <a href='/'>Volver al Inicio</a>
          </div>
          <h1>{children}</h1>
          </>
        ) : (
          <h1>{children}</h1>
        )}
        
      </div>
    </>
  );
}
