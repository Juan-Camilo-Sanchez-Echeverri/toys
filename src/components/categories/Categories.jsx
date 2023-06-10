import { categories } from '../../assets/data/categories';
import Category from '../category/Category';

import style from './Categories.module.css';

const Categories = () => {
  return (
    <div className={style.box}>
      <h2>Categorias</h2>
      <div className={style.container}>
        {categories.map((item)=>(
          <Category item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
}

export default Categories;
