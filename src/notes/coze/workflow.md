---
title: Coze工作流开发
createTime: 2024/12/28 10:54:17
permalink: /article/lvdjflxg/
---
# Coze工作流开发
## 趣浪吧官方插件
::: important
[趣浪吧-通用视频制作插件](https://www.coze.cn/store/plugin/7449205253448171561)

[趣浪吧-财经频制作插件](https://www.coze.cn/store/plugin/7449196430981562431)

[趣浪吧-NBA视频制作插件](https://www.coze.cn/store/plugin/7449196907144052776)
:::

## workflow开发示例
### 集成效果
![集成对话效果](/imgs/coze/workflow-1.png)

![集成对话效果](/imgs/coze/workflow-1-1.png)

### 基础链路配置
![整体配置链路](/imgs/coze/workflow-2.png)

### 参数说明
![入参配置](/imgs/coze/workflow-3.png)

![入参配置](/imgs/coze/workflow-4.png)

![入参配置](/imgs/coze/workflow-5.png)

![代码串联](/imgs/coze/workflow-6.png)
::: important 代码

::: code-tabs
@tab code.ts

```ts
async function main({ params }: any): Promise<any> {
    const {err=0 ,data={}} = params,
        {status , videoUrl} = data as any,
        output= { err, status,videoUrl};
    return { output };
}
```
:::
