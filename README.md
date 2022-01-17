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

#### 连级运算符 ? ?? || && 处理
* 0 undefined null NaN "" 
    * 布尔值均为false: Boolean(0 undefined null NaN '') -> false
* Js 和 ReactNode{}
    *  取决于布尔值
        * ***|| 和 ?(三元符)*** : 布尔值是false -> 取符号后的数值. 和&&完全对立
        * ***&&*** : 布尔值是true -> 取符号后的数值. 和 || ? 完全对立
    * ***??*** :不取决于boolean，取决于是否存在。?? 只有null和undefined会取后的值