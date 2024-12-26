---
title: 视频模板配置
createTime: 2024/12/26 08:41:39
permalink: /article/15tl5y3s/
---
# 视频配置
## 控制方式
::: info
趣浪吧视频制作，核心能力为云端渲染制作视频。

通过Api访问，可以轻松控制自有账号，批量进行短视频的制作。

[API请求方式说明](api.html#视频制作api)
:::

## 内容
### 标题（title）
::: important
**短视频标题**

参数名称：**title**

参数类型：**String / Object**
:::

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

### 视频资源（videoList）
::: important 
**视频元素资源**

参数名称：**videoList**

参数类型：**String[]**
:::

::: details 配置详情
| 参数名称 | 参数类型 | 默认值 |        说明 |
| :------- | :------- | :----- | ----------: |
| String[] | String   |        | 视频资源URL |
:::

### 图片资源（imgList）
::: important
**图片资源**

参数名称：**imgList**

参数类型：**String[]**
:::

::: details 配置详情
| 参数名称 | 参数类型 | 默认值 |        说明 |
| :------- | :------- | :----- | ----------: |
| String[] | String   |        | 图片资源URL |
:::

### 内容关键词（keywordList）
::: tip
**内容关键词**

参数名称：**keywordList**

参数类型：**String[]**
:::

::: details 配置详情
| 参数名称 | 参数类型 | 默认值 |       说明 |
| :------- | :------- | :----- | ---------: |
| String[] | String   |        | 内容关键词 |
:::

## 视频元素特效
### 背景视频控制（bgVideo）
::: tip
**背景视频控制**

参数名称：**bgVideo**

参数类型：**Object**
:::

::: details 配置详情
| 参数名称 | 参数类型 | 默认值 |         说明 |
| :------- | :------- | :----- | -----------: |
| padding  | String   | 0      | 上下左右边距 |
:::

## 图片元素特效
### 图片（alertImg）
::: tip
**图片弹出控制**

参数名称：**alertImg**

参数类型：**Object**
:::

::: details 配置详情
| 参数名称 | 参数类型 | 默认值 |             说明 |
| :------- | :------- | :----- | ---------------: |
| gapTS    | Number   | 5000   | 单张图片停留时长 |
:::

### 动画相册（animatedMiniGallery）
::: tip
**图片动画相册控制**

参数名称：**animatedMiniGallery**

参数类型：**Object**
:::

::: details 配置详情
| 参数名称 | 参数类型 | 默认值 |     说明 |
| :------- | :------- | :----- | -------: |
| width    | String   | 80%    | 相册宽度 |
| height   | String   | 80%    | 相册高度 |
:::

## 内容特效
### 词云（wordCloud）
::: tip
**词云特效**

参数名称：**wordCloud**

参数类型：**Object**
:::

::: details 配置详情
| 参数名称  | 参数类型 | 默认值      |            说明 |
| :-------- | :------- | :---------- | --------------: |
| textColor | String   | text<br/>#fff | 随机颜色<br/>白色 |
:::

### 数字翻滚（rollingText）
::: tip
**数字翻滚**

参数名称：**rollingText**

参数类型：**Object**
:::

::: details 配置详情
| 参数名称    | 参数类型 | 默认值  |             说明 |
| :---------- | :------- | :------ | ---------------: |
| title       | String   | 提示    |         标题内容 |
| content     | Number   | 0       |         数字内容 |
| padding     | String   | 75% 15% |             边距 |
| duration    | Number   | 0       |  s，滚动动画时长 |
| delay       | Number   | 0       |     ms，延迟出现 |
| sustainTime | Number   | 0       | ms，内容保持时间 |
:::

<!-- ### 数据图表（g2Chart）
::: tip
**数据图表**

参数名称：**g2Chart**

参数类型：**Object**
:::

::: details 配置详情
| 参数名称    | 参数类型 | 默认值  |             说明 |
| :---------- | :------- | :------ | ---------------: |
| padding     | String   | 20% 10% |             边距 |
| delay       | Number   | 0       |     ms，延迟出现 |
| sustainTime | Number   | 0       | ms，内容保持时间 |
| chartOpts   | Object   |         |       [g2参数Data](https://g2.antv.antgroup.com/examples) |
::: -->