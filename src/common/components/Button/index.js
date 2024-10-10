import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './button.style';
import Loader from '../Loader';

const Button = ({
  type = 'button',
  title,
  icon,
  disabled = false,
  iconPosition = 'right',
  onClick,
  loader,
  loaderColor,
  isMaterial = false,
  isLoading = false,
  className,
  ...props
}) => {
  // Add all classes to an array
  const addAllClasses = ['reusecore__button'];

  // isLoading prop checking
  if (isLoading) {
    addAllClasses.push('is-loading');
  }

  // isMaterial prop checking
  if (isMaterial) {
    addAllClasses.push('is-material');
  }

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // Checking button loading state
  const buttonIcon =
    isLoading !== false ? (
      <Fragment>
        {loader ? loader : <Loader loaderColor={loaderColor || '#30C56D'} />}
      </Fragment>
    ) : (
      icon && <span className="btn-icon">{icon}</span>
    );

  return (
    <ButtonStyle
      type={type}
      className={addAllClasses.join(' ')}
      icon={icon}
      disabled={disabled}
      icon-position={iconPosition}
      onClick={onClick}
      {...props}
    >
      {iconPosition === 'left' && buttonIcon}
      {title && <span className="btn-text">{title}</span>}
      {iconPosition === 'right' && buttonIcon}
    </ButtonStyle>
  );
};

Button.propTypes = {
  /** ClassName of the button */
  className: PropTypes.string,

  /** Add icon */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),

  /** Add icon */
  icon: PropTypes.object,

  /** Add loader */
  loader: PropTypes.object,

  /** Add Material effect */
  isMaterial: PropTypes.bool,

  /** Button Loading state */
  isLoading: PropTypes.bool,

  /** Button Loading state */
  loaderColor: PropTypes.string,

  /** If true button will be disabled */
  disabled: PropTypes.bool,

  /** Adjust your icon and loader position [if you use loader] */
  iconPosition: PropTypes.oneOf(['left', 'right']),

  /** Variant change button shape */
  variant: PropTypes.oneOf(['textButton', 'outlined', 'fab', 'extendedFab']),

  /** primary || secondary || warning || error change text and border color.
   *  And primaryWithBg || secondaryWithBg || warningWithBg || errorWithBg change text, border and background color */
  colors: PropTypes.oneOf([
    'primary',
    'secondary',
    'warning',
    'error',
    'primaryWithBg',
    'secondaryWithBg',
    'warningWithBg',
    'errorWithBg',
  ]),

  /**
   * Gets called when the user clicks on the button
   */
  onClick: PropTypes.func,
};

export default Button;
