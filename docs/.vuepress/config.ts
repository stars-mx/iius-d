import SideBarConfig from './configs/sidebar.json'
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'IIUS',
  description: 'IIUS 介绍使用文档',
  theme: defaultTheme({
      repo: 'iius-l/iius-s',
      logo: 'https://i.ibb.co/cLQHzdm/image.png',
      docsRepo: 'https://github.com/iius-l/iius-d',
      docsDir: 'docs',
      sidebarDepth: 0,
      sidebar: SideBarConfig.sidebar
  })
})