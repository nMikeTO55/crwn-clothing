import './menus.main.styles.scss';
import ProductList  from "../data/data.products.jsx";
import CategoryItem from '../category-item/category-item.component.jsx'

const Menu = ()=> {
  return (
    <div className='categories-container'>
    {ProductList.map((category) => (
        <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
  )
}

export default Menu
