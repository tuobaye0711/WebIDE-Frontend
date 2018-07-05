## 2018/06/29 更新 v2.5
域名绑定功能上线，现在用户可以在右侧栏中选择绑定域名栏来进行配置

现在打开模版项目和第一次进入default工作空间时，不会为用户新建对应的项目
菜单栏进行了一下调整

修复一些语言服务相关的 bug
修复协同编辑时，有时用户名显示为数字的问题
修改了 500 页面的错误提示
修复一些其他 UI 问题

## 2018/06/14 更新 v2.0
加入 Monaco 编辑器作为新版编辑器，用户可以在设置中开启试用 （21日之前，会将新版作为默认编辑器，设置中提供换回旧版）
在新版编辑器中启用了全新的 Java 代码提示，仍然需要指定代码路径，路径需要指定到有 pom 文件的目录
现在 js html 等文件类型加入了基本的代码提示

运行环境在切换时会做自动保存，用户所做的修改不会丢失

修复环境列表功能界面上的错误


## 2018/05/28 更新

现在在已经登录的时候访问登录页面，会自动跳转至工作空间
新增从 git 地址导入项目的功能
已经到期的用户，续费提示的链接改为建站主机详情页

修复部分文本类文件编辑时类型无法判断的错误
修复已删除工作空间列表过长的问题，现在只显示最近5个
修复从 coding 导入项目时，列表中会显示已删除项目的问题
修复文件以及文件夹下载的错误
修复 git 相关操作的不正确提示


## 2018/05/11 更新 v1.1

访问链接的面板进行了重新设计
环境列表进行了重新设计
现在会为 default 工作空间绑定一个项目
增加了专用主机的续费提示
新增了消息显示

Rabbit-MQ 现在启用了单机多实例来运行
与专用主机同网段的测试环境配置完成并开始启用

Hotfix 主站绑定接口变动，现在腾讯云绑定时现在会提示用户输入密码

## 2018/04/28

文件树增加了一键折叠，以及同步功能
现在双击 tab 可以使 tab 最大化
在 default 工作空间中，如果没有 git 初始化过，屏蔽 git 相关菜单操作
实名认证有延迟，加了用户提示
初次进入小主机会播放视频教程
新增了 GO 语言环境
环境列表界面进行了重新设计
打开 Demo 项目时，现在会为用户 fork 一个 demo 项目来使用
新建空项目时现在可以选择公开或私有
静态资源开启 CDN
为 studio 和 ide 添加了互相之间的用户引导

修复了编辑器中 jsp 等动态页面的着色问题
修复无法删除文件夹的 bug
修复终端删除文件，文件树不同步的问题
修复了新项目无法从菜单提交的问题
修复了 workpress 示例项目无法运行的问题
修复 studio 登录页面提示不正确的问题
修复邀请协同，但是无法进入的 bug
修复一系列 ide 相关的文字描述，都改为 studio

## 2018/04/21

现在在初始界面增加了更加明确的流程提示
1 用户信息查询，调用了主站的 current 接口查询用户信息
2 腾讯云账号查询 调用了 open 那边的用户绑定状态查询
3 小主机信息查询 调用了 crc 的接口
这三个接口可能会轮流卡住一段时间

## 2018/04/19

现在用户从欢迎使用页面打开 php 和 java demo 的时候，原先的流程是帮用户去主站创建一个项目，然后 clone demo 的代码。现在改为从 demo 项目 fork 然后直接 clone。解决之前打开 demo 项目，远端地址不正确的 bug

视频等静态资源现在放入了 cdn

修正了邀请协同的站内信文字

在 studio 中添加了回到 ide 的提示，同时在 ide 中加入了 studio 的推荐提示

禁用了 default 项目中 git 相关的菜单功能，包括项目网络等，用户执行 git init 命令之后会重新开启