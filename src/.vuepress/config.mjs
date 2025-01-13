import { defineUserConfig } from 'vuepress/cli'
import { plumeTheme } from 'vuepress-theme-plume'
import { viteBundler } from '@vuepress/bundler-vite';
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image';

const isProd = process.env.NODE_ENV === "production",
  isGithub = true;
  // isGithub = false;

export default defineUserConfig({
  lang: "zh-CN",
  title: "趣浪吧",
  description: "趣浪吧-轻松制作短视频，api制作生成视频，json制作生成视频，海量视频制作模板。视频生成、视频制作轻松搞定！",
  base: isProd ? (isGithub ? "/ai-video-docs/" : "") : "/",
  public: "src/public",
  theme: plumeTheme({
    hostname: "https://qulang8.cn",
    navbar: [
      {
        text: "首页",
        link: "/",
        icon: "mynaui:home"
      },
      {
        text: "场景案例",
        link: "/notes/examples/video",
        icon: "mynaui:video"
      },
      {
        text: '集成指南',
        icon: "mynaui:compass",
        items: [{
          text: "快速集成",
          link: "/notes/guide/api",
          icon: "mynaui:code",
        }, {
          text: "视频配置",
          // icon: "mynaui:config",
          items: [
            {
              text: "内容配置",
              icon: "mynaui:file-text",
              link: "/notes/guide/video-content-setting",
            },
            {
              text: "组件编排",
              icon: "mynaui:film",
              link: "/notes/guide/video-component-setting",
            }
          ]
        }],
      },
      {
        text: 'AI智能体',
        icon: "mynaui:annoyed-ghost",
        items: [
          {
            text: "Coze开发",
            // icon: "mynaui:box",
            items: [
              {
                text: "工作流",
                link: "/notes/coze/workflow",
                icon: "mynaui:desktop"
              }
            ]
          },
          {
            text: "Coze案例",
            items: [{
              text: "财经短视频",
              link: "https://img.qulang8.cn/ql/enterprise/apps/chat/chat-cj.html",
              icon: "mynaui:globe"
            }, {
              text: "NBA短视频",
              link: "https://img.qulang8.cn/ql/enterprise/apps/chat/chat-sport.html",
              icon: "mynaui:brand-dribbble"
            }]
          }],
      },
    ],
    plugins: {
      shiki: {
        theme: { light: "vitesse-dark", dark: "vitesse-dark" },
        languages: ["javascript", "typescript", "vue", "bash", "sh"],
      }
    }
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
