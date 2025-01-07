---
title: 视频制品案例
createTime: 2025/01/07 09:50:11
permalink: /article/1zu7s4c2/
---
# 视频制品案例
::: important 
**所有生成视频，分辨率均为1080x1920超清格式**
:::

## 影视金典剪辑
::: important 
**视频组件编排：**

[**bgImg**](/notes/guide/video-component-setting.html#背景图片控制-bgimg)
、[**imgMask**](/notes/guide/video-component-setting.html#背景遮罩控制-imgmask)
、[**baseTitle**](/notes/guide/video-component-setting.html#标题-basetitle)
、[**captions**](/notes/guide/video-component-setting.html#配音字幕-captions)
、[**slogn**](/notes/guide/video-component-setting.html#结尾致辞-slogn)
、[**bgAudio**](/notes/guide/video-component-setting.html#标题-basetitle)
、[**bgVideo**](/notes/guide/video-component-setting.html#背景视频控制-bgvideo)
、[**videoList**](/notes/guide/video-content-setting.html#视频资源-videolist)
:::

::: details 配置详情
<video width="50%" controls src="https://img.qulang8.cn/ql/enterprise/video-template/202501/6-1.mp4"></video>

```javascript
{
  "token":"服务访问Token，【趣浪吧】微信公众号获取",
  "baseTitle": {
    "wordList": [
      "得一知心人，那就够了！",
      "《后会无期》"
    ],
    "displayDate": true
  },
  "captions": {
    "display": false
  },
  "imgMask": {
    "imgList": [
      "前景遮罩图片地址"
    ]
  },
  "bgAudio": {
    "useVideo": true
  },
  "bgVideo": {
    "complete": true,
    "randomPlay": false,
    "padding": "50% 0",
  },
  "title": "得一知心人，那就够了！",
  "videoList": [
    "视频地址"
  ]
  "slogn": {
    "wordList": [
      "感谢关注支持",
      "欢迎大家点赞、分享"
    ]
  },
  "bgImg": {
    "imgList": [
      "背景图片地址"
    ]
  }
}
```
:::

## 财经快讯
::: important 
**视频组件编排：**

[**imgList**](/notes/guide/video-content-setting.html#图片资源-imglist)
、[**alertImg**](/notes/guide/video-component-setting.html#图片-alertimg)
、[**keywordList**](/notes/guide/video-content-setting.html#内容关键词-keywordlist)
、[**wordcloud**](/notes/guide/video-component-setting.html#词云-wordcloud)
、[**baseTitle**](/notes/guide/video-component-setting.html#标题-basetitle)
、[**captions**](/notes/guide/video-component-setting.html#配音字幕-captions)
、[**slogn**](/notes/guide/video-component-setting.html#结尾致辞-slogn)
、[**bgAudio**](/notes/guide/video-component-setting.html#标题-basetitle)
、[**bgVideo**](/notes/guide/video-component-setting.html#背景视频控制-bgvideo)
、[**videoList**](/notes/guide/video-content-setting.html#视频资源-videolist)
:::

::: details 配置详情
<video width="50%" controls src="https://img.qulang8.cn/ql/enterprise/video-template/202501/07-1.mp4"></video>

```javascript
{
  "token":"服务访问Token，【趣浪吧】微信公众号获取",
  "imgList": [
    "图片访问地址",
    "图片访问地址"
  ],
  "alertImg": {},
  "baseTitle": {
    "wordList": [
      "房贷利率下调！",
      "存量房贷与公积金均受益"
    ],
    "displayDate": true
  },
  "keywordList": [
    "内容关键词",
    "内容关键词",
    "内容关键词",
    "内容关键词",
    "内容关键词",
    "内容关键词",
    "内容关键词",
    "内容关键词",
    "内容关键词",
    "内容关键词",
    "内容关键词"
  ],
  "wordCloud": {},
  "audioType": "配音角色",
  "bgAudio": {
    "audioList": [
      "背景音效访问地址(.mp3)"
    ]
  },
  "content": "昨日，“房贷族”迎来好消息，存量房贷利率大幅下调60个基点，公积金贷款利率也下调25个基点，已发放贷款自动执行新利率，首套二套都有调整，无需自行申请。",
  "videoList": [
    "背景视频访问地址(.mp4)"
  ],
  "slogn": {
    "wordList": [
      "最新资讯、天天播报",
      "欢迎点赞、关注"
    ]
  }
}
```
:::
