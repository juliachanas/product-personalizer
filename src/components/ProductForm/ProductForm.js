import PropTypes from 'prop-types';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import styles from './ProductForm.module.scss';

const ProductForm = ({
  name,
  sizes,
  currentSize,
  setCurrentSize,
  colors,
  currentColor,
  setCurrentColor,
  handleAddToCart,
}) => {
  return (
    <form>
      <OptionSize
        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
      ></OptionSize>
      <OptionColor
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      ></OptionColor>
      <Button className={styles.button} onClick={handleAddToCart}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  name: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired, //zwraca tablicę okrelonego typu tu string
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      // Obiekt zawierający określone pola.
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
};

export default ProductForm;
