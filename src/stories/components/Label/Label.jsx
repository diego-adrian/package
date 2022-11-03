import PropTypes from 'prop-types';
import './label.css';

export const Label = ({ text }) => {
  return <>
    <label>
      { text }
    </label>
  </>
};

Label.propTypes = {
  /**
   * texto que se mostrara en el componente
  */
  text: PropTypes.string.isRequired,
}