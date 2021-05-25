import React from 'react';
import ReactDOM from 'react-dom';
import HtmlDish from '../packages/html-dish/dist/html-dish.min';
import TextBtn from '../packages/text-button/dist/text-button.min';
import ClipboardBtn from '../packages/clipboard-button/dist/clipboard-button.min';
import './app.less';
import { Button } from 'antd';

export default function App() {
  const onClick = (e) => {
    // eslint-disable-next-line
    console.log(e);
  };

  return (
    <div>
      <h1>App</h1>
      <HtmlDish type="div" html="<p>weweew</p>" style={{ color: 'pink' }} />
      <TextBtn onClick={onClick} className="tttttt">按钮</TextBtn>
      <div />
      <ClipboardBtn text="34343">
      </ClipboardBtn>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('app'));
