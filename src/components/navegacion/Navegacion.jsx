import style from './Navegacion.module.css';
import { AiOutlineSearch} from 'react-icons/ai';

import { Link } from 'react-router-dom';
import Announcement from '../announcement/Announcement';

const Navegacion = () => {
  return (
    <>
    <Announcement/>
      <nav>
        <section className={style.search}>
          <span>ES</span>
          <div className={style.searchItems}>
            <input type="text" placeholder="Buscar" />
            <AiOutlineSearch />
          </div>
        </section>
        <section className={style.logo}>
          <Link to="/toys" style={{ textDecoration: 'none', color: 'black' }}>
            <h1>TOYS</h1>
          </Link>
        </section>
        <section className={style.login}>
          <Link to="/toys/dashboard" style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link>
        </section>
      </nav>
    </>
  );
};

export default Navegacion;
