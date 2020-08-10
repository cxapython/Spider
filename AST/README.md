[TOC]

# 拓展
[JavaScript 教程](https://wangdoc.com/javascript/index.html)
[ES6 入门教程](https://es6.ruanyifeng.com/)

[百度在线字体编辑器](http://fontstore.baidu.com/static/editor/index.html)
[奇Q在线字体编辑器](https://font.qqe2.com/)
[fonttools](https://github.com/fonttools/fonttools)

[AST在线解析网站](https://astexplorer.net/)
[babel库 GitHub](https://github.com/babel/babel)
[babel库 docs](https://babeljs.io/docs/en/babel-parser)
[Babel插件开发手册](https://blog.csdn.net/weixin_33826609/article/details/93164633#toc-visitors)
[AST入门网站](https://github.com/yacan8/blog/blob/master/posts/JavaScript%E6%8A%BD%E8%B1%A1%E8%AF%AD%E6%B3%95%E6%A0%91AST.md)

[查看JavaScript代码流程](https://bogdan-lyashenko.github.io/js-code-to-svg-flowchart/docs/live-editor/index.html)
[GitHub地址](https://github.com/Bogdan-Lyashenko/js-code-to-svg-flowchart)

[https://github.com/babel/babylon/blob/master/ast/spec.md](https://github.com/babel/babylon/blob/master/ast/spec.md)
[http://www.alloyteam.com/2017/04/analysis-of-babel-babel-overview/](http://www.alloyteam.com/2017/04/analysis-of-babel-babel-overview/)
[https://fed.taobao.org/blog/taofed/do71ct/babel-plugins/](https://fed.taobao.org/blog/taofed/do71ct/babel-plugins/)
[http://www.alloyteam.com/2016/05/babel-code-into-a-bird-like/](http://www.alloyteam.com/2016/05/babel-code-into-a-bird-like/)

[生成漂亮图片代码的网站](https://carbon.now.sh/)

![](https://img2020.cnblogs.com/blog/1403732/202007/1403732-20200705201640518-1683976617.png)


# 安装
node 

[https://nodejs.org/zh-cn/](https://nodejs.org/zh-cn/)

babel
```
npm install @babel/core
```


# 节点含义
![](https://img2020.cnblogs.com/blog/1403732/202007/1403732-20200713201324374-2129914519.png)

# 节点的一些方法
## 节点的插入
在当前节点前插入:
```js
path.insertBefore(nodes);
```

在当前节点后插入:
```js
path.insertAfter(nodes);
```

在所有同级节点前插入:
```js
path.container.unshift(nodes);
```

在所有同级节点后插入:
```js
path.container.push(nodes);
```

插入操作时，一定要注意 需要遍历的节点


# 节点属性及方法
![](https://img2020.cnblogs.com/blog/1403732/202008/1403732-20200805223123000-1473139457.png)
