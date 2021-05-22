# text-button 文本按钮

[![npm](https://img.shields.io/npm/v/text-button.svg)](https://www.npmjs.com/package/text-button)
[![npm](https://img.shields.io/npm/dt/text-button.svg)](https://www.npmjs.com/package/text-button)

- 按钮样式和 a 标签相同，但只是点击操作而不是跳转
- 可以避免使用`<a href="javascript:void(0)">`

## 快速使用

### 安装

```shell
npm i text-button -S
```

### 使用示例

```jsx
import React from "react";
import TextBtn from "text-button";

function Dish() {
  return <TextBtn onClick={onClick}>文本按钮</TextBtn>;
}
```
