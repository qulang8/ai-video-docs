---

---
# Api快速集成
## 控制方式
::: tip
趣浪吧视频制作，核心能力为云端渲染制作视频。

通过Api访问，可以轻松控制自有账号，批量进行短视频的制作。
:::

1. 前往【趣浪吧】公众号，注册访问账号
   
2. 获取【API-Token】
   
3. 调用视频制作API，等待视频制作完成
   
4. 调用视频状态API，返回视频地址URL

## API请求访问
::: tip
能够根据用户提供的标题和解说文案轻松制作出短视频（.mp4 格式），帮助用户快速生成具有吸引力的视频内容。
:::
### 视频制作API
::: important
**请求URL:**
```sh
https://enterprise.qulang8.cn/api/shortVideo/makeVideoByToken
```
请求方式：**POST**

数据交互：**application/json**

返回类型：**JSON**
:::

::: details 查看请求参数说明
| 参数    | 类型    |                                                                    说明 |
| :------ | :------ | ----------------------------------------------------------------------: |
| token   | String  |                                   API-Token，请前往公众号【趣浪吧】获取 |
| replace | Boolean | 替换方式<br/>true=全量替换、不保留原参数<br/>false=保留原参数、覆盖替换 |
| title   | String  |                                              内容标题，字数不要超过30字 |
| content | String  |                                             解说文案，字数不要超过200字 |
| ...     | Any     |                              [其它参数说明](template-setting.html#标题) |
:::

::: details 查看响应参数说明
| 参数 |                     说明 |
| :--- | -----------------------: |
| err  |                   错误码 |
|      | 0 ：请求成功，已安排制作 |
:::

### 视频状态查询API
::: important
**请求URL:**
```sh
https://enterprise.qulang8.cn/api/shortVideo/getDetailByToken
```

请求方式：**POST**

数据交互：**application/json**

返回类型：**JSON**
:::

::: details 查看请求参数说明
| 参数  |                                  说明 |
| :---- | ------------------------------------: |
| token | API-Token，请前往公众号【趣浪吧】获取 |
:::

::: details 查看响应参数说明
| 参数          |                                                              说明 |
| :------------ | ----------------------------------------------------------------: |
| err           |                                                            错误码 |
|               |                                                      0 ：请求成功 |
| data          |                                                            Object |
| data.status   |                                                  当前视频制作状态 |
| data.videoUrl | 已制作完成短视频的下载地址（仅当status=99时，才是正确的访问地址） |
:::

## Token获取
::: tip
欢迎关注【趣浪吧】公众号，免费获取Token
:::

![趣浪吧公众号](/imgs/wx-gzh.jpg =300x)

![免费获取Token](/imgs/get-token.jpg =300x)

