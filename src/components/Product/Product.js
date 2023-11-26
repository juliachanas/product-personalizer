import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import { useState } from 'react';
import ProductForm from '../ProductForm/ProductForm';

const Product = ({ name, id, title, colors, sizes, basePrice }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = () => {
    const chosenSize = sizes.find((size) => size.name === currentSize); //znajduję obiekt w tablicy sizes, którego właściwość name odpowiada wartości currentSize.
    return basePrice + (chosenSize ? chosenSize.additionalPrice : 0); //{ jeśli chosenSize istnieje (nie jest undefined), to użyj chosenSize.additionalPrice, w przeciwnym razie użyj 0.}
  };

  const handleAddToCart = (e) => {
    e.preventDefault();

    console.log('SUMMARY');
    console.log('=========');
    console.log(
      `Name: ${name[0].toUpperCase() + name.substr(1).toLowerCase()} shirt`
    );
    console.log(`Price: ${getPrice()}$`);
    console.log(`Size: ${currentSize}`);
    console.log(`Color: ${currentColor}`);
  };

  return (
    <article className={styles.product}>
      <ProductImage
        name={name}
        title={title}
        currentColor={currentColor}
      ></ProductImage>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          sizes={sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          colors={colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          handleAddToCart={handleAddToCart}
        ></ProductForm>
      </div>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired, //zwraca tablicę okrelonego typu tu string
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      //  // Obiekt zawierający określone pola.
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  basePrice: PropTypes.number.isRequired,
};
export default Product;
