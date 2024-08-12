
import PropTypes from 'prop-types'; 
import './ProductComponent.css';

const ProductComponent = ({ products }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return <div>No Products Available</div>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-content">
            <div className="product-title">{product.title}</div>
            <div className="product-price">$ {product.price}</div>
            <div className="product-category">{product.category}</div>
          </div>
        </div>
      ))}
    </div>
  );
};


ProductComponent.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductComponent;
