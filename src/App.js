import "./categories.styles.scss";
import CategoryItem from './components/category-item/category-item.component.jsx';
import ProductList  from "./components/data/data.products.jsx";

const  App = ()=> {

  <ProductList />

  return (
    <div className='categories-container'>
      {ProductList.map((product) => (
        <CategoryItem key={product.id} category={product}/>
     ))}
   </div>
  );
}

export default App;
