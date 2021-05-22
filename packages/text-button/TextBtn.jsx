import React from 'react';
import './TextBtn.less';
import cx from 'classnames';

export default function TextBtn(props) {
  const { children, disabled, onClick, className, ...restProps } = props;

  return React.createElement('button', {
    ...restProps,
    disabled,
    onClick,
    className: cx('text-btn', className),
  }, children);
}