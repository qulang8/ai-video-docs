---
title: 视频模板配置
createTime: 2024/12/26 08:41:39
permalink: /article/15tl5y3s/
---
# 视频配置
::: tip
趣浪吧视频制作，核心能力为云端渲染制作视频。

通过Api访问，可以轻松控制自有账号，批量进行短视频的制作。

[> API请求方式说明](api.html#视频制作api)

<a href="https://v.douyin.com/iUDH2AXN" target="_blank">> 抖音视频案例</a>
:::

## 视频背景特效
### 背景图片控制（bgImg）
::: tip
**背景视频控制**

参数名称：**bgImg**

参数类型：**Object**
:::

![背景图片](/imgs/components/bg-img.png)

::: details 配置详情
| 参数名称 | 参数类型 | 默认值 |                                              说明 |
| :------- | :------- | :----- | ------------------------------------------------: |
| imgList  | []String | []     |              待渲染的图片列表<br/>尺寸：1080x1920 |
| padding  | String   | 0      |                                      上下左右边距 |
| delay    | Number   | 0      |                                   延迟渲染<br/>ms |
| gapTS    | Number   | 5000   |                           每张图片停留时长<br/>ms |
| move     | Boolean  | true   |                       启用镜头滤镜<br/>渐近或渐远 |
| loop     | Boolean  | true   | 图片循环<br/>所有图片展示后，自动从第一张继续展示 |
:::

### 背景遮罩控制（imgMask）
::: tip
**背景遮罩控制**

参数名称：**imgMask**

参数类型：**Object**
:::

![背景遮罩](/imgs/components/bg-mask.png)

::: details 配置详情
| 参数名称 | 参数类型 | 默认值 |                                                                  说明 |
| :------- | :------- | :----- | --------------------------------------------------------------------: |
| imgList  | []String | []     | 待渲染的图片列表<br/>尺寸：1080x1920<br/>所有图片会同时加载到视频上方 |
| delay    | Number   | 0      |                                                       延迟渲染<br/>ms |
:::

### 背景视频控制（bgVideo）
::: tip
**背景视频控制**

参数名称：**bgVideo**

参数类型：**Object**
:::

![背景视频](/imgs/components/bg-video.png)

::: details 配置详情
| 参数名称   | 参数类型 | 默认值 |                                                                                                   说明 |
| :--------- | :------- | :----- | -----------------------------------------------------------------------------------------------------: |
| videoList  | []String | []     | 待随机选择的视频列表<br/>不配置，则读取[根视频资源列表](video-content-setting.html#视频资源-videolist) |
| padding    | String   | 0      |                                                                      上下左右边距<br />垂直居中(50% 0) |
| randomPlay | Boolean  | true   |                                                                                   随机视频开始时间播放 |
| complete   | Boolean  | false  |                                                                                       是否完整播放视频 |
:::

## 图片元素特效
### 图片（alertImg）
::: tip
**图片弹出控制**

参数名称：**alertImg**

参数类型：**Object**
:::

![图片弹框](/imgs/components/alert-img.png)

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

![动画相册](/imgs/components/animated-mini-gallery.png)

::: details 配置详情
| 参数名称 | 参数类型 | 默认值 |     说明 |
| :------- | :------- | :----- | -------: |
| width    | String   | 80%    | 相册宽度 |
| height   | String   | 80%    | 相册高度 |
:::

## 内容特效
### 标题（baseTitle）
::: tip
**标题特效**

参数名称：**baseTitle**

参数类型：**Object**
:::

![标题特效](/imgs/components/base-title.png)

::: details 配置详情
| 参数名称    | 参数类型 | 默认值 |                 说明 |
| :---------- | :------- | :----- | -------------------: |
| wordList    | []String | []     | 每行一句话，居中显示 |
| displayDate | Boolean  | false  |     是否显示制作日期 |
:::

### 配音字幕（captions）
::: tip
**字幕特效**

参数名称：**captions**

参数类型：**Object**

[> 解说文案设置](video-content-setting.html#解说文案-content)
:::

![字幕特效](/imgs/components/captions.png)

::: details 配置详情
| 参数名称 | 参数类型 | 默认值 |         说明 |
| :------- | :------- | :----- | -----------: |
| display  | Boolean  | true   | 是否显示字幕 |
:::

### 结尾致辞（slogn）
::: tip
**结尾致辞**

参数名称：**slogn**

参数类型：**Object**
:::

![结尾致辞特效](/imgs/components/slogn.png)

::: details 配置详情
| 参数名称 | 参数类型 | 默认值 |                 说明 |
| :------- | :------- | :----- | -------------------: |
| wordList | []String | []     | 每行一句话，居中显示 |
:::

### 词云（wordCloud）
::: tip
**词云特效**

参数名称：**wordCloud**

参数类型：**Object**
:::

![词云特效](/imgs/components/wordcloud.png)

::: details 配置详情
| 参数名称  | 参数类型 | 默认值        |              说明 |
| :-------- | :------- | :------------ | ----------------: |
| textColor | String   | text<br/>#fff | 随机颜色<br/>白色 |
:::

### 数字翻滚（rollingText）
::: tip
**数字翻滚**

参数名称：**rollingText**

参数类型：**Object**
:::

![翻滚内容](/imgs/components/rolling-text.png)

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
| 参数名称    | 参数类型 | 默认值  |                                                说明 |
| :---------- | :------- | :------ | --------------------------------------------------: |
| padding     | String   | 20% 10% |                                                边距 |
| delay       | Number   | 0       |                                        ms，延迟出现 |
| sustainTime | Number   | 0       |                                    ms，内容保持时间 |
| chartOpts   | Object   |         | [g2参数Data](https://g2.antv.antgroup.com/examples) |
::: -->