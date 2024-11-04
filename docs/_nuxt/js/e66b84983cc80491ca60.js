(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{422:function(n,e,l){"use strict";l.r(e),e.default="# 圆环图\n\n圆环图同样可以用来表示数据占总体的比例，相比于饼图，它中间空余的部分可以用来显示一些额外的文字等信息，因而也是一种常用的图表类型。\n\n## 基础圆环图\n\n在 ECharts 中，饼图的半径除了上一小节提到的，可以是一个数值或者字符串之外，还可以是一个包含两个元素的数组，每个元素可以为数值或字符串。当它是一个数组时，它的前一项表示内半径，后一项表示外半径，这样就形成了一个圆环图。\n\n从这个角度上来说，可以认为饼图是一个内半径为 0 的圆环图，也就是说，饼图是圆环图的特例。\n\n```js live\noption = {\n  title: {\n    text: '圆环图的例子',\n    left: 'center',\n    top: 'center'\n  },\n  series: [\n    {\n      type: 'pie',\n      data: [\n        {\n          value: 335,\n          name: 'A'\n        },\n        {\n          value: 234,\n          name: 'B'\n        },\n        {\n          value: 1548,\n          name: 'C'\n        }\n      ],\n      radius: ['40%', '70%']\n    }\n  ]\n};\n```\n\n如果半径是数组，其中的两项也可以一项是数值，另一项是百分比形式的字符串。但是这样可能导致在某些分辨率下，内半径小于外半径。ECharts 会自动使用小的一项作为内半径，但是仍应小心这样可能会导致的非预期效果。\n\n## 在圆环图中间显示高亮扇形对应的文字\n\n上面的例子展现了在圆环图中间显示固定文字的例子，下面我们要介绍，如何在圆环图中间显示鼠标高亮的扇形对应的文字。实现这一效果的思路是，利用系列的 `label`（默认用扇形颜色显示数据的 `name`），显示在圆环图中间。在默认情况下不显示系列的 `label`，在高亮时显示。具体的代码如下：\n\n```js live\noption = {\n  legend: {\n    orient: 'vertical',\n    x: 'left',\n    data: ['A', 'B', 'C', 'D', 'E']\n  },\n  series: [\n    {\n      type: 'pie',\n      radius: ['50%', '70%'],\n      avoidLabelOverlap: false,\n      label: {\n        show: false,\n        position: 'center'\n      },\n      labelLine: {\n        show: false\n      },\n      emphasis: {\n        label: {\n          show: true,\n          fontSize: '30',\n          fontWeight: 'bold'\n        }\n      },\n      data: [\n        { value: 335, name: 'A' },\n        { value: 310, name: 'B' },\n        { value: 234, name: 'C' },\n        { value: 135, name: 'D' },\n        { value: 1548, name: 'E' }\n      ]\n    }\n  ]\n};\n```\n\n其中，`avoidLabelOverlap` 是用来控制是否由 ECharts 调整标签位置以实现防止标签重叠。它的默认值是 `true`，而在这里，我们不希望标签位置调整到不是中间的位置，因此我们需要将其设为 `false`。\n\n这样，圆环图中间会显示高亮数据的 `name` 值。\n"}}]);