import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite';
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image';


export default defineUserConfig({
  lang: "zh-CN",
  title: "趣浪吧",
  description: "趣浪吧-轻松制作短视频",
  base: "/",
  public: "src/public",
  theme: defaultTheme({
    // logo :"/imgs/logo.png",
    navbar: [
      "/",
      {
        text: '指南',
        children: [{
          text: "快速集成",
          link: "/guide/api"
        }, {
          text: "视频配置",
          link: "/guide/template-setting"
        }],
      },
      {
        text: 'AI智能体',
        children: [{
          text: "财经短视频",
          link: "https://www.coze.cn/store/agent/7448898272279871503"
        }, {
          text: "NBA短视频",
          link: "https://www.coze.cn/store/agent/7449190192574971916"
        }],
      },
    ],
  }),

  bundler: viteBundler(),
  plugins: [
    markdownImagePlugin({
      figure: true,
      lazyload: true,
      mark: true,
      size: true,
    }),
  ]
})
