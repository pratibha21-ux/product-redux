import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productsAction';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products || []); // Ensure products is an array
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(response.data));
    } catch (err) {
      console.log('Error:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [dispatch]);

  console.log('Products:', products);

  return (
    <div className="ui grid container">
      <ProductComponent products={products} />
    </div>
  );
};

export default ProductListing;


// import { useEffect } from 'react';
// import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';  // Make sure to import useDispatch
// import { setProducts } from '../redux/actions/productsAction';
// import ProductComponent from './ProductComponent';

// const ProductListing = () => {
//   const products = useSelector((state) => state.allProducts.products); // Use specific selector
//   const dispatch = useDispatch();

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('https://fakestoreapi.com/products');
//       dispatch(setProducts(response.data));
//     } catch (err) {
//       console.log('Error:', err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [dispatch]);

//   console.log('Products:', products);

//   return (
//     <div className="ui grid container">
//       <ProductComponent products={products} />
//     </div>
//   );
// };

// export default ProductListing;
