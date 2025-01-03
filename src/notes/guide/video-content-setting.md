---
title: 视频内容配置
createTime: 2025/01/02 11:17:43
permalink: /article/oqw5km4q/
---
# 视频配置
::: tip
趣浪吧视频制作，核心能力为云端渲染制作视频。

通过Api访问，可以轻松控制自有账号，批量进行短视频的制作。

[> API请求方式说明](api.html#视频制作api)

<a href="https://v.douyin.com/iUDH2AXN" target="_blank">> 抖音视频案例</a>
:::

## 内容
### 标题（title）
::: important
**短视频标题**

参数名称：**title**

参数类型：**String / Object**
:::

![标题](/imgs/content/title.png)

::: details 配置详情
| 参数名称 | 参数类型 | 默认值 |       说明 |
| :------- | :------- | :----- | ---------: |
| title    | String   |        | 短视频标题 |
:::

### 解说文案（content）
::: important
**解说文案**

参数名称：**content**

参数类型：**String / Object**
:::

::: details 配置详情
| 参数名称 | 参数类型 | 默认值 |           说明 |
| :------- | :------- | :----- | -------------: |
| content  | String   |        | 短视频解说文案 |
:::

### 内容关键词（keywordList）
::: tip
**内容关键词，主要用于配音、字幕设置**

参数名称：**keywordList**

参数类型：**[]String**
:::

![配音文案](/imgs/content/content.png)

::: details 配置详情
| 参数名称 | 参数类型 | 默认值 |       说明 |
| :------- | :------- | :----- | ---------: |
| []String | String   |        | 内容关键词 |
:::

### 图片资源（imgList）
::: important
**图片资源，如果视频组件未配置定制图片资源，会从这里加载默认图片**

参数名称：**imgList**

参数类型：**[]String**
:::

![图片资源](/imgs/components/alert-img.png)

::: details 配置详情
| 参数名称 | 参数类型 | 默认值 |        说明 |
| :------- | :------- | :----- | ----------: |
| []String | String   |        | 图片资源URL |
:::

### 视频资源（videoList）
::: important 
**视频元素资源，如果视频组件未配置定制视频资源，会从这里加载默认视频**

参数名称：**videoList**

参数类型：**[]String**
:::

![视频资源](/imgs/components/bg-video.png)

::: details 配置详情
| 参数名称 | 参数类型 | 默认值 |        说明 |
| :------- | :------- | :----- | ----------: |
| []String | String   |        | 视频资源URL |
:::
