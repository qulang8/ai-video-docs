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
<video width="50%" controls src="https://img.qulang8.cn/ql/enterprise/video-template/202501/6-1.mp4"></video>

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
<video width="50%" controls src="https://img.qulang8.cn/ql/enterprise/video-template/202501/07-1.mp4"></video>

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
  "captions":{},
  "bgVideo":{},
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

## 家装介绍
<video width="50%" controls src="https://img.qulang8.cn/ql/enterprise/video-template/202501/07-2.mp4"></video>

::: important 
**视频组件编排：**

[**bgImg**](/notes/guide/video-content-setting.html#背景图片控制-bgimg)
、[**imgList**](/notes/guide/video-component-setting.html#图片资源-imglist)
、[**baseTitle**](/notes/guide/video-component-setting.html#标题-basetitle)
、[**captions**](/notes/guide/video-component-setting.html#配音字幕-captions)
、[**slogn**](/notes/guide/video-component-setting.html#结尾致辞-slogn)
、[**bgAudio**](/notes/guide/video-component-setting.html#背景音频控制-bgaudio)
、[**alertWord**](/notes/guide/video-component-setting.html#内容提示-alertword)
:::

::: details 配置详情

```javascript
{
  "token":"服务访问Token，【趣浪吧】微信公众号获取",
  "imgList": [
    "图片访问地址",
    "图片访问地址"
  ],
  "bgImg": {},
  "baseTitle": {
    "wordList": [
      "幸福满满的家装之旅 ！",
      "《装修日记》"
    ],
    "displayDate": true
  },
  "alertWord": {
    "padding": "100% 10% 0",
    "wordList": [
      "玄关 - 美好生活",
      "客厅 - 美好生活",
      "卧室 - 美好生活",
      "厨房 - 美好生活",
      "卫生间 - 美好生活"
    ]
  },
  "audioType": "配音角色",
  "bgAudio": {
    "audioList": [
      "背景音效访问地址(.mp3)"
    ]
  },
  "content": "搬进新家已经有一段时间了，真的要夸一夸我们的装修团队。首先，交房后家里几乎没有异味，这点真的很难得。其次，全家人住进去后，感觉特别舒适，每次周末的家庭聚会都成了我们的一种习惯。大家总说，能在这么漂亮的房子里聚会，真是幸福满满。",
  "captions": {},
  "slogn": {
    "wordList": [
      "最新资讯、天天播报",
      "欢迎点赞、关注"
    ]
  }
}
```
:::
