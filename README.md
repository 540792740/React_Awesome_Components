#### src/pages
* react-components:
    * useCallback & useMemo
    * 倒计时

#### Axios
* adapter: 发送http请求或者ajax请求
* cancel: 取消
* /core/axios: 构建axios的构造函数
* axios.js:入口文件
    * 
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

#### Reduce()
* 累加器
* 二维数组变成一维数组
* 计算出现次数
* 按属性对object分类
* 数组去重:set 会更快
* 按顺序运行Promise
* 使用 reduce实现map

#### Call()： fun.call(thisArg, arg1, arg2, ...)
* null、undefined 的this指向window（非严格模式）
* 原始值(string, number，boolean)会指向原始值的包装对象
* 使用场景
    * 