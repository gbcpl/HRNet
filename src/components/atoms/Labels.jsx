import PropTypes from 'prop-types';

const Labels = ({htmlFor, title}) => {
  return <label htmlFor={htmlFor}>{title}</label>
}

Labels.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Labels