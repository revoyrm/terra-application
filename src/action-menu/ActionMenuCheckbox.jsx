import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';
import { enableFocusStyles, disableFocusStyles, generateOnKeyDown } from './_ActionUtils';
import styles from './ActionMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The string used as an identifier for keyboard navigation.
   */
  actionKey: PropTypes.string.isRequired,
  /**
   * Optional icon to place with the checkbox.
   */
  icon: PropTypes.element,
  /**
   * Whether or not the checkbox is disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Whether or not the checkbox is checked.
   */
  isChecked: PropTypes.bool,
  /**
   * The label text to display for the checkbox.
   */
  label: PropTypes.string.isRequired,
  /**
   * Callback function for action element selection.
   * Returns the event e.g. onAction(event).
   */
  onAction: PropTypes.func,
  /**
   * @private
   * Callback function for event.
   */
  onArrow: PropTypes.func,
  /**
   * @private
   * Callback function for event.
   */
  onChar: PropTypes.func,
};

const ActionMenuCheckbox = ({
  actionKey,
  icon,
  isDisabled,
  isChecked,
  label,
  onAction,
  onArrow,
  onChar,
}) => {
  const attrs = {};
  if (isDisabled) {
    attrs['aria-disabled'] = true;
  } else {
    attrs.tabIndex = '-1';
    attrs.onClick = onAction;
    attrs.onKeyDown = generateOnKeyDown(actionKey, onAction, onArrow, onChar);
    attrs.onBlur = enableFocusStyles;
    attrs.onMouseDown = disableFocusStyles;
    attrs['data-focus-styles-enabled'] = true;
  }

  const theme = React.useContext(ThemeContext);
  /* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
  return (
    <li
      {...attrs}
      className={cx('action-checkbox', { 'is-checked': isChecked }, { 'is-actionable': !isDisabled }, { 'is-disabled': isDisabled }, theme.className)}
      role="menuitemcheckbox"
      aria-checked={isChecked}
      data-action-menu-key={actionKey}
    >
      <div className={cx('checkbox')}>{isChecked ? <IconCheckmark /> : null}</div>
      <div className={cx('icon')}>{icon}</div>
      <div className={cx('content')}>
        {label}
      </div>
    </li>
  );
  /* eslint-enable jsx-a11y/no-noninteractive-element-to-interactive-role */
};

ActionMenuCheckbox.propTypes = propTypes;
ActionMenuCheckbox.interactiveType = true;

export default ActionMenuCheckbox;
