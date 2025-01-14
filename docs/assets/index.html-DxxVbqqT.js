import{_ as g,a as r,b as o}from"./wordcloud-Dvt3pESu.js";import{_ as p,c as y,b as t,d as n,e as a,a as s,f as l,r as x,o as h}from"./app-CpqfGEvl.js";const f="/ai-video-docs/imgs/components/bg-img.png",m="/ai-video-docs/imgs/components/bg-mask.png",d="/ai-video-docs/imgs/components/captions.png",c="/ai-video-docs/imgs/components/animated-mini-gallery.png",u="/ai-video-docs/imgs/components/base-title.png",b="/ai-video-docs/imgs/components/word-list.png",v="/ai-video-docs/imgs/components/alert-word.png",q="/ai-video-docs/imgs/components/slogn.png",S="/ai-video-docs/imgs/components/rolling-text.png",w={},N={class:"hint-container tip"},B={class:"hint-container details"},A={style:{"text-align":"right"}},j={class:"hint-container details"},k={style:{"text-align":"right"}},O={class:"hint-container tip"};function T(z,e){const i=x("RouteLink");return h(),y("div",null,[e[32]||(e[32]=t("h1",{id:"视频配置",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#视频配置"},[t("span",null,"视频配置")])],-1)),t("div",N,[e[1]||(e[1]=t("p",{class:"hint-container-title"},"提示",-1)),e[2]||(e[2]=t("p",null,"趣浪吧视频制作，核心能力为云端渲染制作视频。",-1)),e[3]||(e[3]=t("p",null,"通过Api访问，可以轻松控制自有账号，批量进行短视频的制作。",-1)),t("p",null,[n(i,{to:"/notes/guide/api.html#%E8%A7%86%E9%A2%91%E5%88%B6%E4%BD%9Capi"},{default:a(()=>e[0]||(e[0]=[l("> API请求方式说明")])),_:1})]),e[4]||(e[4]=t("p",null,[t("a",{href:"https://v.douyin.com/iUDH2AXN",target:"_blank"},"> 抖音视频案例")],-1))]),e[33]||(e[33]=s('<h2 id="视频背景特效" tabindex="-1"><a class="header-anchor" href="#视频背景特效"><span>视频背景特效</span></a></h2><h3 id="背景图片控制-bgimg" tabindex="-1"><a class="header-anchor" href="#背景图片控制-bgimg"><span>背景图片控制（bgImg）</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>背景视频控制</strong></p><p>参数名称：<strong>bgImg</strong></p><p>参数类型：<strong>Object</strong></p></div><figure><img src="'+f+'" alt="背景图片" tabindex="0" loading="lazy"><figcaption>背景图片</figcaption></figure><details class="hint-container details"><summary>配置详情</summary><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数类型</th><th style="text-align:left;">默认值</th><th style="text-align:right;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">imgList</td><td style="text-align:left;">[]String</td><td style="text-align:left;">[]</td><td style="text-align:right;">待渲染的图片列表<br>尺寸：1080x1920</td></tr><tr><td style="text-align:left;">padding</td><td style="text-align:left;">String</td><td style="text-align:left;">0</td><td style="text-align:right;">上下左右边距</td></tr><tr><td style="text-align:left;">delay</td><td style="text-align:left;">Number</td><td style="text-align:left;">0</td><td style="text-align:right;">延迟渲染<br>ms</td></tr><tr><td style="text-align:left;">gapTS</td><td style="text-align:left;">Number</td><td style="text-align:left;">5000</td><td style="text-align:right;">每张图片停留时长<br>ms</td></tr><tr><td style="text-align:left;">move</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">true</td><td style="text-align:right;">启用镜头滤镜<br>渐近或渐远</td></tr><tr><td style="text-align:left;">loop</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">true</td><td style="text-align:right;">图片循环<br>所有图片展示后，自动从第一张继续展示</td></tr></tbody></table></details><h3 id="背景遮罩控制-imgmask" tabindex="-1"><a class="header-anchor" href="#背景遮罩控制-imgmask"><span>背景遮罩控制（imgMask）</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>背景遮罩控制</strong></p><p>参数名称：<strong>imgMask</strong></p><p>参数类型：<strong>Object</strong></p></div><figure><img src="'+m+'" alt="背景遮罩" tabindex="0" loading="lazy"><figcaption>背景遮罩</figcaption></figure><details class="hint-container details"><summary>配置详情</summary><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数类型</th><th style="text-align:left;">默认值</th><th style="text-align:right;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">imgList</td><td style="text-align:left;">[]String</td><td style="text-align:left;">[]</td><td style="text-align:right;">待渲染的图片列表<br>尺寸：1080x1920<br>所有图片会同时加载到视频上方</td></tr><tr><td style="text-align:left;">delay</td><td style="text-align:left;">Number</td><td style="text-align:left;">0</td><td style="text-align:right;">延迟渲染<br>ms</td></tr></tbody></table></details><h3 id="背景音频控制-bgaudio" tabindex="-1"><a class="header-anchor" href="#背景音频控制-bgaudio"><span>背景音频控制（bgAudio）</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>背景音频控制</strong></p><p>参数名称：<strong>bgAudio</strong></p><p>参数类型：<strong>Object</strong></p></div><figure><img src="'+d+'" alt="背景视频" tabindex="0" loading="lazy"><figcaption>背景视频</figcaption></figure><details class="hint-container details"><summary>配置详情</summary><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数类型</th><th style="text-align:left;">默认值</th><th style="text-align:right;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">useVideo</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td><td style="text-align:right;">使用背景视频的音效</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td><td style="text-align:right;">是否完整播放音频</td></tr><tr><td style="text-align:left;">audioList</td><td style="text-align:left;">[]String</td><td style="text-align:left;">[]</td><td style="text-align:right;">待随机选择的音频列表</td></tr></tbody></table></details><h3 id="背景视频控制-bgvideo" tabindex="-1"><a class="header-anchor" href="#背景视频控制-bgvideo"><span>背景视频控制（bgVideo）</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>背景视频控制</strong></p><p>参数名称：<strong>bgVideo</strong></p><p>参数类型：<strong>Object</strong></p></div><figure><img src="'+g+'" alt="背景视频" tabindex="0" loading="lazy"><figcaption>背景视频</figcaption></figure>',16)),t("details",B,[e[16]||(e[16]=t("summary",null,"配置详情",-1)),t("table",null,[e[15]||(e[15]=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"参数名称"),t("th",{style:{"text-align":"left"}},"参数类型"),t("th",{style:{"text-align":"left"}},"默认值"),t("th",{style:{"text-align":"right"}},"说明")])],-1)),t("tbody",null,[t("tr",null,[e[9]||(e[9]=t("td",{style:{"text-align":"left"}},"videoList",-1)),e[10]||(e[10]=t("td",{style:{"text-align":"left"}},"[]String",-1)),e[11]||(e[11]=t("td",{style:{"text-align":"left"}},"[]",-1)),t("td",A,[e[6]||(e[6]=l("待随机选择的视频列表")),e[7]||(e[7]=t("br",null,null,-1)),e[8]||(e[8]=l("不配置，则读取")),n(i,{to:"/notes/guide/video-content-setting.html#%E8%A7%86%E9%A2%91%E8%B5%84%E6%BA%90-videolist"},{default:a(()=>e[5]||(e[5]=[l("根视频资源列表")])),_:1})])]),e[12]||(e[12]=t("tr",null,[t("td",{style:{"text-align":"left"}},"padding"),t("td",{style:{"text-align":"left"}},"String"),t("td",{style:{"text-align":"left"}},"0"),t("td",{style:{"text-align":"right"}},[l("上下左右边距"),t("br"),l("垂直居中(50% 0)")])],-1)),e[13]||(e[13]=t("tr",null,[t("td",{style:{"text-align":"left"}},"randomPlay"),t("td",{style:{"text-align":"left"}},"Boolean"),t("td",{style:{"text-align":"left"}},"true"),t("td",{style:{"text-align":"right"}},"随机视频开始时间播放")],-1)),e[14]||(e[14]=t("tr",null,[t("td",{style:{"text-align":"left"}},"complete"),t("td",{style:{"text-align":"left"}},"Boolean"),t("td",{style:{"text-align":"left"}},"false"),t("td",{style:{"text-align":"right"}},"是否完整播放视频")],-1))])])]),e[34]||(e[34]=s('<h2 id="图片元素特效" tabindex="-1"><a class="header-anchor" href="#图片元素特效"><span>图片元素特效</span></a></h2><h3 id="图片-alertimg" tabindex="-1"><a class="header-anchor" href="#图片-alertimg"><span>图片（alertImg）</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>图片弹出控制</strong></p><p>参数名称：<strong>alertImg</strong></p><p>参数类型：<strong>Object</strong></p></div><figure><img src="'+r+'" alt="图片弹框" tabindex="0" loading="lazy"><figcaption>图片弹框</figcaption></figure><details class="hint-container details"><summary>配置详情</summary><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数类型</th><th style="text-align:left;">默认值</th><th style="text-align:right;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">gapTS</td><td style="text-align:left;">Number</td><td style="text-align:left;">5000</td><td style="text-align:right;">单张图片停留时长</td></tr></tbody></table></details><h3 id="动画相册-animatedminigallery" tabindex="-1"><a class="header-anchor" href="#动画相册-animatedminigallery"><span>动画相册（animatedMiniGallery）</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>图片动画相册控制</strong></p><p>参数名称：<strong>animatedMiniGallery</strong></p><p>参数类型：<strong>Object</strong></p></div><figure><img src="'+c+'" alt="动画相册" tabindex="0" loading="lazy"><figcaption>动画相册</figcaption></figure><details class="hint-container details"><summary>配置详情</summary><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数类型</th><th style="text-align:left;">默认值</th><th style="text-align:right;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">width</td><td style="text-align:left;">String</td><td style="text-align:left;">80%</td><td style="text-align:right;">相册宽度</td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">String</td><td style="text-align:left;">80%</td><td style="text-align:right;">相册高度</td></tr></tbody></table></details><h2 id="内容特效" tabindex="-1"><a class="header-anchor" href="#内容特效"><span>内容特效</span></a></h2><h3 id="标题-basetitle" tabindex="-1"><a class="header-anchor" href="#标题-basetitle"><span>标题（baseTitle）</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>标题特效</strong></p><p>参数名称：<strong>baseTitle</strong></p><p>参数类型：<strong>Object</strong></p></div><figure><img src="'+u+'" alt="标题特效" tabindex="0" loading="lazy"><figcaption>标题特效</figcaption></figure>',13)),t("details",j,[e[26]||(e[26]=t("summary",null,"配置详情",-1)),t("table",null,[e[25]||(e[25]=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"参数名称"),t("th",{style:{"text-align":"left"}},"参数类型"),t("th",{style:{"text-align":"left"}},"默认值"),t("th",{style:{"text-align":"right"}},"说明")])],-1)),t("tbody",null,[t("tr",null,[e[21]||(e[21]=t("td",{style:{"text-align":"left"}},"wordList",-1)),e[22]||(e[22]=t("td",{style:{"text-align":"left"}},"[]String",-1)),e[23]||(e[23]=t("td",{style:{"text-align":"left"}},"[]",-1)),t("td",k,[e[18]||(e[18]=l("每行一句话，居中显示")),e[19]||(e[19]=t("br",null,null,-1)),e[20]||(e[20]=l("不配置，则选择")),n(i,{to:"/notes/guide/video-content-setting.html#%E6%A0%87%E9%A2%98-title"},{default:a(()=>e[17]||(e[17]=[l("根视频标题")])),_:1})])]),e[24]||(e[24]=t("tr",null,[t("td",{style:{"text-align":"left"}},"displayDate"),t("td",{style:{"text-align":"left"}},"Boolean"),t("td",{style:{"text-align":"left"}},"false"),t("td",{style:{"text-align":"right"}},"是否显示制作日期")],-1))])])]),e[35]||(e[35]=t("h3",{id:"配音字幕-captions",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#配音字幕-captions"},[t("span",null,"配音字幕（captions）")])],-1)),t("div",O,[e[28]||(e[28]=t("p",{class:"hint-container-title"},"提示",-1)),e[29]||(e[29]=t("p",null,[t("strong",null,"字幕特效")],-1)),e[30]||(e[30]=t("p",null,[l("参数名称："),t("strong",null,"captions")],-1)),e[31]||(e[31]=t("p",null,[l("参数类型："),t("strong",null,"Object")],-1)),t("p",null,[n(i,{to:"/notes/guide/video-content-setting.html#%E8%A7%A3%E8%AF%B4%E6%96%87%E6%A1%88-content"},{default:a(()=>e[27]||(e[27]=[l("> 解说文案设置")])),_:1})])]),e[36]||(e[36]=s('<figure><img src="'+d+'" alt="字幕特效" tabindex="0" loading="lazy"><figcaption>字幕特效</figcaption></figure><details class="hint-container details"><summary>配置详情</summary><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数类型</th><th style="text-align:left;">默认值</th><th style="text-align:right;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">display</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">true</td><td style="text-align:right;">是否显示字幕</td></tr><tr><td style="text-align:left;">styles</td><td style="text-align:left;">Object</td><td style="text-align:left;">{}<br>width:&quot;80%&quot;<br>top:&quot;75%&quot;<br>left:&quot;10%&quot;</td><td style="text-align:right;">字幕样式设置 eg：<br>color:&quot;#fff&quot;<br>background:&quot;rgba(0,0,0,.6)&quot;<br>textShadow:&quot;none&quot;</td></tr></tbody></table></details><h3 id="文案配置-wordlist" tabindex="-1"><a class="header-anchor" href="#文案配置-wordlist"><span>文案配置（wordList）</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>文案内容特效</strong></p><p>参数名称：<strong>wordList</strong></p><p>参数类型：<strong>Object</strong></p></div><figure><img src="'+b+'" alt="内容介绍提示" tabindex="0" loading="lazy"><figcaption>内容介绍提示</figcaption></figure><details class="hint-container details"><summary>配置详情</summary><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数类型</th><th style="text-align:left;">默认值</th><th style="text-align:right;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">styles</td><td style="text-align:left;">Object</td><td style="text-align:left;">{fontSize: &quot;48px&quot; , padding: &quot;10%&quot;, textAlign: &quot;center&quot;}<br></td><td style="text-align:right;">CSS样式，全局生效</td></tr><tr><td style="text-align:left;">delay</td><td style="text-align:left;">Number</td><td style="text-align:left;">0</td><td style="text-align:right;">延迟渲染<br>ms</td></tr><tr><td style="text-align:left;">keepTS</td><td style="text-align:left;">Number</td><td style="text-align:left;">600000</td><td style="text-align:right;">文案停留时长<br>ms</td></tr><tr><td style="text-align:left;">itemList</td><td style="text-align:left;">[]wordItem</td><td style="text-align:left;">[]</td><td style="text-align:right;">待渲染的文案内容</td></tr><tr><td style="text-align:left;">wordItem.word</td><td style="text-align:left;">String</td><td style="text-align:left;">&quot;&quot;</td><td style="text-align:right;">文案内容文字<br>ms</td></tr><tr><td style="text-align:left;">wordItem.delay</td><td style="text-align:left;">Number</td><td style="text-align:left;">0</td><td style="text-align:right;">延迟渲染<br>ms</td></tr><tr><td style="text-align:left;">wordItem.keepTS</td><td style="text-align:left;">Number</td><td style="text-align:left;">600000</td><td style="text-align:right;">文案停留时长<br>ms</td></tr><tr><td style="text-align:left;">wordItem.styles</td><td style="text-align:left;">Object</td><td style="text-align:left;">{}</td><td style="text-align:right;">CSS样式，当前行生效</td></tr></tbody></table></details><h3 id="内容提示-alertword" tabindex="-1"><a class="header-anchor" href="#内容提示-alertword"><span>内容提示（alertWord）</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>内容介绍特效</strong></p><p>参数名称：<strong>alertWord</strong></p><p>参数类型：<strong>Object</strong></p></div><figure><img src="'+v+'" alt="内容介绍提示" tabindex="0" loading="lazy"><figcaption>内容介绍提示</figcaption></figure><details class="hint-container details"><summary>配置详情</summary><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数类型</th><th style="text-align:left;">默认值</th><th style="text-align:right;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">wordList</td><td style="text-align:left;">[]String</td><td style="text-align:left;">[]</td><td style="text-align:right;">待渲染的介绍文案</td></tr><tr><td style="text-align:left;">iconName</td><td style="text-align:left;">String</td><td style="text-align:left;">location</td><td style="text-align:right;">icon<br>location、music、comment</td></tr><tr><td style="text-align:left;">padding</td><td style="text-align:left;">String</td><td style="text-align:left;">135% 10% 0</td><td style="text-align:right;">上下左右边距</td></tr><tr><td style="text-align:left;">delay</td><td style="text-align:left;">Number</td><td style="text-align:left;">0</td><td style="text-align:right;">延迟渲染<br>ms</td></tr><tr><td style="text-align:left;">gapTS</td><td style="text-align:left;">Number</td><td style="text-align:left;">5000</td><td style="text-align:right;">每组文案停留时长<br>ms</td></tr><tr><td style="text-align:left;">loop</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">true</td><td style="text-align:right;">内容循环<br>所有内容展示后，自动从第一组继续展示</td></tr></tbody></table></details><h3 id="结尾致辞-slogn" tabindex="-1"><a class="header-anchor" href="#结尾致辞-slogn"><span>结尾致辞（slogn）</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>结尾致辞</strong></p><p>参数名称：<strong>slogn</strong></p><p>参数类型：<strong>Object</strong></p></div><figure><img src="'+q+'" alt="结尾致辞特效" tabindex="0" loading="lazy"><figcaption>结尾致辞特效</figcaption></figure><details class="hint-container details"><summary>配置详情</summary><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数类型</th><th style="text-align:left;">默认值</th><th style="text-align:right;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">wordList</td><td style="text-align:left;">[]String</td><td style="text-align:left;">[]</td><td style="text-align:right;">每行一句话，居中显示</td></tr></tbody></table></details><h3 id="词云-wordcloud" tabindex="-1"><a class="header-anchor" href="#词云-wordcloud"><span>词云（wordCloud）</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>词云特效</strong></p><p>参数名称：<strong>wordCloud</strong></p><p>参数类型：<strong>Object</strong></p></div><figure><img src="'+o+'" alt="词云特效" tabindex="0" loading="lazy"><figcaption>词云特效</figcaption></figure><details class="hint-container details"><summary>配置详情</summary><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数类型</th><th style="text-align:left;">默认值</th><th style="text-align:right;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">textColor</td><td style="text-align:left;">String</td><td style="text-align:left;">text<br>#fff</td><td style="text-align:right;">随机颜色<br>白色</td></tr></tbody></table></details><h3 id="数字翻滚-rollingtext" tabindex="-1"><a class="header-anchor" href="#数字翻滚-rollingtext"><span>数字翻滚（rollingText）</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>数字翻滚</strong></p><p>参数名称：<strong>rollingText</strong></p><p>参数类型：<strong>Object</strong></p></div><figure><img src="'+S+'" alt="翻滚内容" tabindex="0" loading="lazy"><figcaption>翻滚内容</figcaption></figure><details class="hint-container details"><summary>配置详情</summary><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数类型</th><th style="text-align:left;">默认值</th><th style="text-align:right;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">title</td><td style="text-align:left;">String</td><td style="text-align:left;">提示</td><td style="text-align:right;">标题内容</td></tr><tr><td style="text-align:left;">content</td><td style="text-align:left;">Number</td><td style="text-align:left;">0</td><td style="text-align:right;">数字内容</td></tr><tr><td style="text-align:left;">padding</td><td style="text-align:left;">String</td><td style="text-align:left;">75% 15%</td><td style="text-align:right;">边距</td></tr><tr><td style="text-align:left;">duration</td><td style="text-align:left;">Number</td><td style="text-align:left;">0</td><td style="text-align:right;">s，滚动动画时长</td></tr><tr><td style="text-align:left;">delay</td><td style="text-align:left;">Number</td><td style="text-align:left;">0</td><td style="text-align:right;">ms，延迟出现</td></tr><tr><td style="text-align:left;">sustainTime</td><td style="text-align:left;">Number</td><td style="text-align:left;">0</td><td style="text-align:right;">ms，内容保持时间</td></tr></tbody></table></details>',22))])}const L=p(w,[["render",T],["__file","index.html.vue"]]),C=JSON.parse('{"path":"/article/15tl5y3s/","title":"视频模板配置","lang":"zh-CN","frontmatter":{"title":"视频模板配置","createTime":"2024/12/26 08:41:39","permalink":"/article/15tl5y3s/","description":"视频配置 提示 趣浪吧视频制作，核心能力为云端渲染制作视频。 通过Api访问，可以轻松控制自有账号，批量进行短视频的制作。 > 抖音视频案例 视频背景特效 背景图片控制（bgImg） 提示 背景视频控制 参数名称：bgImg 参数类型：Object 背景图片背景图片 配置详情 背景遮罩控制（imgMask） 提示 背景遮罩控制 参数名称：imgMask...","head":[["meta",{"property":"og:url","content":"https://qulang8.cn/ai-video-docs/article/15tl5y3s/"}],["meta",{"property":"og:site_name","content":"趣浪吧"}],["meta",{"property":"og:title","content":"视频模板配置"}],["meta",{"property":"og:description","content":"视频配置 提示 趣浪吧视频制作，核心能力为云端渲染制作视频。 通过Api访问，可以轻松控制自有账号，批量进行短视频的制作。 > 抖音视频案例 视频背景特效 背景图片控制（bgImg） 提示 背景视频控制 参数名称：bgImg 参数类型：Object 背景图片背景图片 配置详情 背景遮罩控制（imgMask） 提示 背景遮罩控制 参数名称：imgMask..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://qulang8.cn/ai-video-docs/imgs/components/bg-img.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-13T05:37:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-13T05:37:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"视频模板配置\\",\\"image\\":[\\"https://qulang8.cn/ai-video-docs/imgs/components/bg-img.png\\",\\"https://qulang8.cn/ai-video-docs/imgs/components/bg-mask.png\\",\\"https://qulang8.cn/ai-video-docs/imgs/components/captions.png\\",\\"https://qulang8.cn/ai-video-docs/imgs/components/bg-video.png\\",\\"https://qulang8.cn/ai-video-docs/imgs/components/alert-img.png\\",\\"https://qulang8.cn/ai-video-docs/imgs/components/animated-mini-gallery.png\\",\\"https://qulang8.cn/ai-video-docs/imgs/components/base-title.png\\",\\"https://qulang8.cn/ai-video-docs/imgs/components/captions.png\\",\\"https://qulang8.cn/ai-video-docs/imgs/components/word-list.png\\",\\"https://qulang8.cn/ai-video-docs/imgs/components/alert-word.png\\",\\"https://qulang8.cn/ai-video-docs/imgs/components/slogn.png\\",\\"https://qulang8.cn/ai-video-docs/imgs/components/wordcloud.png\\",\\"https://qulang8.cn/ai-video-docs/imgs/components/rolling-text.png\\"],\\"dateModified\\":\\"2025-01-13T05:37:54.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":4.53,"words":1359},"git":{"updatedTime":1736746674000,"contributors":[{"name":"Bo","username":"Bo","email":"249181764@qq.com","commits":10,"avatar":"https://avatars.githubusercontent.com/Bo?v=4","url":"https://github.com/Bo"}]},"autoDesc":true,"filePathRelative":"notes/guide/video-component-setting.md","categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"c6d211","sort":10002,"name":"guide"}],"bulletin":false}');export{L as comp,C as data};
