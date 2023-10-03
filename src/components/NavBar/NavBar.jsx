import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <Link to='/'>
          <h3 className='NavTittle'>NyxenPlay Store</h3>
      </Link>
      <div className='Categories'>
        <NavLink to={`/category/procesadores`}className={({isActive}) => isActive ? 'ActiveOption' : 'OptionNav'}>Procesadores</NavLink>
        <NavLink to={`/category/graficasrtx`} className={({isActive}) => isActive ? 'ActiveOption' : 'OptionNav'}>Graficas RTX</NavLink>
        <NavLink to={`/category/graficasgtx`} className={({isActive}) => isActive ? 'ActiveOption' : 'OptionNav'}>Graficas GTX</NavLink>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;