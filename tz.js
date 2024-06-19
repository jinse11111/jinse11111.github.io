//远程_脚本. js

// 获取统一资源定位器参数
常数 查询字符串=窗口。位置.搜索;
常数 urlParams = 新的URLSearchParams(查询字符串);
常数 自定义参数= urlParams。得到(' url ');

// 生成随机数字和英文组合
常数 随机字符串=数学。随意().toString(36).子链(2); // 生成随机字符串,包括数字和小写字母

// 构建跳转链接
让 重定向URL = " https://OSS . homeee . com/OverseasChn/Formal/TH/rent/926 cf 308 ADF 3 . html ";
如果 (自定义参数) {
redirectURL +="?url= "+ customParam +"#"+randomString；// 将随机字符串添加到参数后面
}

// 执行跳转
窗户。位置.href= redirectURL
