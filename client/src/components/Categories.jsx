import  { Fragment, useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import './Products.css'
import Checkbox from './Checkbox';

function Products() {
   const [categories, setCategories] = useState([]); 
   const { data, loading } = useFetch("/categories?populate=*");

   useEffect(() => {
  
      data && setCategories(data);
   }, [data]);

   return (
      <div className="category">
        <div>
        {loading
            ? "loading..."
            : 
            categories.map((category) => (
             <Fragment key={category.id}>
                 <Checkbox  category={category} />
             </Fragment>
            ))
            }
        </div>
      </div>
   );
}

export default Products;
