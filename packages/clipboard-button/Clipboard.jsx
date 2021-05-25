import React, { PureComponent } from 'react';
import ClipboardJS from 'clipboard';
import PropTypes from 'prop-types';
import TextBtn from 'text-btn';
import { message } from 'antd';
import 'antd/dist/antd.css';

class ClipboardBtn extends PureComponent {
  componentDidMount() {
    const { onSuccess, onError } = this.props;
    const clipboard = new ClipboardJS('.clipboardBtn');

    clipboard.on('success', (e) => {
      onSuccess(clipboard);
    });

    clipboard.on('error', (e) => {
      onError(clipboard);
    });

    this.clipboard = clipboard;
  }

  componentWillUnmount() {
    this.clipboard && this.clipboard.destroy();
  }


  render() {
    const {
      target, text, children, ...restProps
    } = this.props;

    const clipProps = {
      ...restProps,
      'data-clipboard-text': text,
      'data-clipboard-target': target,
      className: 'clipboardBtn',
    };

    return <TextBtn {...clipProps}>{children || '复制'}</TextBtn>;
  }
}

ClipboardBtn.defaultProps = {
  onSuccess: () => {
    message.success('复制成功');
  },
  onError: () => {
    message.error('复制失败，请手动复制内容');
  },
};

ClipboardBtn.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  target: PropTypes.string,
  text: PropTypes.any,
};

export default ClipboardBtn;
