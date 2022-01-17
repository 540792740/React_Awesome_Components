#### 表格填充，form + antd table
* 路径： pathpages/tableList
* 表格在450px 高度内可以滑动 `scroll={{ y: "450px" }}`

#### nvm node版本管理器
* 安装nvm: 会自动把路径驾到 .bash_profile 文件中<br/>
 `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`    
* source ~/.bash_profile
* 安装特定版本 `nvm install 14.18.0`
* 查看可用版本 `nvm ls-remote --lts`
* 查看已安装版本 `nvm ls`
* 更换版本 `nvm use v10.6.3`

#### 事件实现路由跳转
history.back();