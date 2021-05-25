# clipboard-btn 复制

[![npm](https://img.shields.io/npm/v/clipboard-btn.svg)](https://www.npmjs.com/package/clipboard-btn)
[![npm](https://img.shields.io/npm/dt/clipboard-btn.svg)](https://www.npmjs.com/package/clipboard-btn)

- 简单的复制组件

## 快速使用

### 安装

```shell
npm i clipboard-btn -S
```

## 属性

| 参数      | 说明           | 类型                | 默认值 |
| :-------- | :------------- | :------------------ | :----- |
| text      | 要复制的内容   | string              |        |
| onSuccess | 复制成功的回调 | function(clipborad) |        |
| onError   | 复制失败的回调 | function(clipborad) |        |

### 使用示例

```jsx
import React from "react";
import { Button } from "antd";
import ClipboardBtn from "clipboard-btn";

function Clipboard() {
  return <ClipboardBtn text="我是要复制的内容" />;
}

// or

function Clipboard() {
  return (
    <ClipboardBtn text="我是要复制的内容">
      <Button>点我复制</Button>
    </ClipboardBtn>
  );
}
```
