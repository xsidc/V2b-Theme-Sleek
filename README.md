# V2b-Theme-Sleek
> 前后端分离主题 可搭建多个前端应用 <br>
> 提交的需求尽量满足 不定期维护更新 <br>
> 请注意同源策略 <br>
> [https://github.com/Jashi1chat/v2b-](https://github.com/Jashi1chat/v2b-) <br>
### TG反馈群: [反馈群](https://t.me/Bing_Code)

## 安装教程
- 后端：修改v2b后端支付回调文件 
  > 前后端分离重要步骤 
  - 进入目录 `app/Services/PaymentService.php`

  - 文件第50行 `'return_url' => config('v2board.app_url') . '/#/order/' . $order['trade_no'],`
  - 修改成：` 'return_url' => $_SERVER['HTTP_ORIGIN'] . "/#/dashboard",` 

  <br>
-  前端：正常解析一个网址到解析目录 下载前端文件放置解析根目录
    > 前端配置部分都在config.js 文件里
    - 修改config.js的hosturl 填写后端网址 `https://xxxx.xx/` 格式
    - 在线客服请到index.html里插入代码
    - 网页标题和svg都在index.html 自行更改 有能力的可自行混淆config.js 文件

### 注意事项
> - v2b后台的邀请限制不要为0 不然会报错 
> - 用https 不然某些功能用不了 
> - 注意cors策略!!

### 产品演示(部分)
![](/image/1.png)
![](/image/2.png)
![](/image/3.png)
![](/image/4.png)
![](/image/5.png)
