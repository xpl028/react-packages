# text-btn 文本按钮

[![npm](https://img.shields.io/npm/v/text-btn.svg)](https://www.npmjs.com/package/text-btn)
[![npm](https://img.shields.io/npm/dt/text-btn.svg)](https://www.npmjs.com/package/text-btn)

- 按钮样式和 a 标签相同，但只是点击操作而不是跳转
- 可以避免使用`<a href="javascript:void(0)">`

## 快速使用

### 安装

```shell
npm i text-btn -S
```

### 使用示例

```jsx
import React from "react";
import TextBtn from "text-btn";

function Dish() {
  return <TextBtn onClick={onClick}>文本按钮</TextBtn>;
}
```
