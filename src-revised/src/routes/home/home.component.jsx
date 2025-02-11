import './home.styles.scss';
import ProductList  from "../../components/data/data.products.jsx";
import CategoryItem from '../../components/category-item/category-item.component.jsx'

const Home = ()=> {
  return (
    <div className='categories-container'>
    {ProductList.map((category) => (
        <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
  )
}

export default Home
