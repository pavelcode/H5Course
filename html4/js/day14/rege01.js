//创建正则表达式
//var reg1 = new RegExp("name");  //单个参数的正则表达式，参数是我们需要验证的数据，这个表达式我们可以在后面验证是否包含name字符
//document.write(reg1+"<br/>")///name/

//添加可选参数
//var reg2 = new RegExp("name","gim"); //两个参数的正则表达式，后一个参数匹配的模式 globle全局模式 ignoreCase忽略大小写模式 multiline多行匹配模式
//document.write(reg2+"<br/>");///name/gim

//字面量创建正则
//var reg1 = /name/;
//var reg2 = /name/gim;

//正则表达式的test方法
//var reg1= /name/;
//var str = "my name is lili";
//document.write(reg1.test(str)+"<br/>");//true

//var reg1= /name/;
//var str = "my is lili";
//document.write(reg1.test(str)+"<br/>");//false

//var reg1 = /Name/;
//var str = "my name is lili";
//document.write(reg1.test(str)+"<br/>");//false

//var reg1 = /Name/i;
//var str = "my name is lili";
//document.write(reg1.test(str)+"<br/>");//true




//正则表达式的exec方法
//不区分大小写
//var reg1 = /Name/;
//var str1 = "my name name is name is lili.";
//document.write(reg1.exec(str1)+"<br/>");  //null

//var str1 = "my name name is name is lili.";
//var reg1 = /Name/i;
//document.write(reg1.exec(str1)+"<br/>");//name

//var str1 ="my Name is lilei,her name is hanmeimei";  
//var reg1 =/name/ig;
//document.write(reg1.exec(str1)+"<br/>");//Name 只能找到第一个，默认只会找到第一个


//字符串的正则表达式方法
//var str1 = "my eName is lili,his ename is doudou";
//var reg1 = /Name/i;
//document.write(str1.match(reg1)+"<br/>"); //Name 只匹配第一个，返回结果是数组
//document.write(str1.match(reg1).length+"<br/>");//1

//全局匹配
//var str1 = "my Name is lili,his name is doudou";
//var reg1 =/Name/gi;
//document.write(str1.match(reg1)+"<br/>");//Name,name
//document.write(str1.match(reg1).length+"<br/>")//2

//search 查找到字符串出现的位置
//var str1 = "my Name is lili,his name is doudou";
//var reg1 =/Name/gi;
//document.write(str1.search(reg1)+"<br/>"); //4  从第四个字符开始，空格也包含，如果没有返回-1

//replace 替换数据
//var str1 = "my Name is lili,his name is doudou";
//var reg1 =/name/;
//document.write(str1.replace(reg1,"ay")+"<br/>");//my Name is lili,his ay is doudou
//忽略大小写
//var str1 = "my Name is lili,his name is doudou";
//var reg1 =/Name/i;
//document.write(str1.replace(reg1,"ay")+"<br/>");//my ay is lili,his name is doudou
//全局
//var str1 = "my Name is lili,his name is doudou";
//var reg1 =/Name/gi;
//document.write(str1.replace(reg1,"cy")+"<br/>");//my cy is lili,his cy is doudou

//split分隔
//var str1 = "my Name is lili,his name is doudou";
//var reg1 = /,/gi;
//document.write(str1.split(reg1).length+"<br/>");
//document.write(str1.split(reg1)[1]+"<br/>");
//document.write("<hr/>")



//RegExp类的静态属性
//var reg1 = /(na)me/gim;
//var str1 ="my Name is lili,his BName is lilei";
//reg1.test(str1); //必须执行
//document.write(RegExp.input+"<br/>");//返回匹配的字符串 my Name is lili,his BName is lilei
//document.write(RegExp.leftContext+"<br/>");//左边内容 my 
//document.write(RegExp.rightContext+"<br/>");//右边内容is lili,his BName is lilei
//document.write(RegExp.lastMatch+"<br/>");//最后一个匹配的内容 Name
//document.write(RegExp.lastParen+"<br/>");//不讲  圆括号中分组内容的匹配 Na

//document.write(RegExp['$_']+"<br/>");  //my Name is lili,his BName is lilei
//document.write("<hr/>");

//正则对象属性
//var reg1 = /name/gim;
//document.write(reg1.global+"<br/>"); //是否设定全局匹配 true
//document.write(reg1.ignoreCase+"<br/>");//是否忽略大小写 true
//document.write(reg1.multiline+"<br/>");//是否支持多行 true
//document.write(reg1.source+"<br/>");//返回正则表达式内容 name

//var reg1 = /name/gi;
//var str1 = "my name is";
//reg1.test(str1);
//document.write(reg1.lastIndex);//7 返回下次开始匹配的位置
//document.write("<hr/>")

//正则表达式匹配的原理
//var reg1 = /name/ig;
//var str ="my eName is lili,his name is lilei";
//document.write(reg1.exec(str)+"<br/>");//Name
//document.write(reg1.lastIndex+"<br/>");//8
//document.write(reg1.exec(str)+"<br/>");//name
//document.write(reg1.lastIndex+"<br/>");//25
//document.write(reg1.exec(str)+"<br/>");//null
//
//document.write(reg1.exec(str)+"<br/>");//Name
//document.write(reg1.exec(str)+"<br/>");//name

//总结：正则表达式的匹配原则：首先找到第一个匹配位置，下次匹配从这个位置开始，继续匹配，一直都字符串匹配结束。下次匹配，从头开始



//方括号
//var reg1 = /[a-z]ne/ig;  //任意小写字符
//var str1 = "ne 1ne ane";
//document.write(reg1.exec(str1)+"<br/>"); //ane


//var reg1 = /[A-Z]ne/;  //任意大写字符
//var str1= "ne ane Ane";
//document.write(reg1.exec(str1)+"<br/>"); //Ane

//var reg1 = /[0-9]ne/;//任意数字
//var str1 = "ne ane 1ne";
//document.write(reg1.exec(str1)+"<br/>"); //1ne

//var reg1 =/[a-zA-Z0-9]ne/; //任意的字符和数字，但是只有一个
//var str1 = "ne ane";
//document.write(reg1.exec(str1)+"<br/>"); //ane

//var reg1 = /[^0-9]ne/; //非数字开头
//var str1 = "1ne ane";
//document.write(reg1.exec(str1)+"<br/>"); //1ne

//元字符
//var reg1 = /n..e/ig; //代表任意单个字符，除去换行符
//var str1 = "my namae name";
//document.write(reg1.exec(str1)+"<br/>");//name

//var reg1=/[a-zA-Z0-9_]ne/; //任意数字，字母，下划线
//var reg1 = /\wne/;
//var str1="ne 1ne";
//document.write(reg1.exec(str1)+"<br/>");//1ne

//var reg1 = /\Wne/;  //非任意数字，字母，下划线
//var str1= "ne 1ne #ne";
//document.write(reg1.exec(str1)+"<br/>"); //#ne

//var reg1 = /\dne/;  //数字
//var str1 = "ne 1ne #ne";
//document.write(reg1.exec(str1)+"<br/>"); //1ne

//var reg1 = /\Dne/;  //非数字
//var str1 = "ne 1ne #ne";
//document.write(reg1.exec(str1)+"<br/>");//#ne

//var reg1 = /^name/;  //行首
//var str1 ="name1 1name";
//document.write(reg1.exec(str1)+"<br/>");//name

//var reg1 = /name$/;
//var str1 ="name1 1name";//行首
//document.write(reg1.exec(str1)+"<br/>");//name

//var reg1 = /\bname/;//单词的边界
//var str1 = "name2 2nname";
//document.write(reg1.exec(str1)+"<br/>");//name

//var reg1 = /name\b/;//单词的边界
//var str1 = "name2 2nname";
//document.write(reg1.exec(str1)+"<br/>");//name


//var reg1 =/\Bname/;
//var str1 ="1name";
//document.write(reg1.exec(str1)+"<br/>");//name

//var reg1 =/\Bname/;
//var str1 ="name";
//document.write(reg1.exec(str1)+"<br/>");//null


//var reg1 = /name|zhang|san/;  //选择模式（或）
//var str1=" zhan nme san";
//document.write(reg1.exec(str1)+"<br/>");//san

//var reg1 =/\s/;
//var str1 ="   ";
//document.write(reg1.test(str1)+"<br/>");//true

//var reg1 =/\S/;
//var str1 ="  ";
//document.write(reg1.test(str1)+"<br/>");//false




//var reg1 = /n*e/ig;  //* 代表n出现任意次数，0次，1次，多次
//var str1 = "my namne";
//document.write(reg1.exec(str1)+"<br/>");//name

//var reg1 = /[0-9]*ne/;//任意多个数字
//var str1 = "222ne";
//document.write(reg1.exec(str1)+"<br/>");//222ne

//var reg1 = /n+e/ig; //+ 代表n出现一个或多个任意字符
//var str1 = "my  nae nnne";
//document.write(reg1.exec(str1)+"<br/>");//nnne

//var str1="2namedddd";
//var reg1 = /^\dname\w+/;  //以数字开头，中间包含name，然后以一个或多个字符结尾
//document.write(reg1.exec(str1)+"<br/>");//2namedddd

//var reg1 =/n?e/ig;// ？代表一个，0个任意字符
//var str1 = "my nnnm ne";
//document.write(reg1.exec(str1)+"<br/>");//ne

//var reg1 = /n{2,4}e/ig;//固定2到4个任意字符，包含2和4
//var str1 = "my ne nee nnne";
//document.write(reg1.exec(str1)+"<br/>");//nnne

//var reg1 =/n{4,}e/ig; //n是4个及4个以上
//var str1 = "ne nne nnne nnnne";
//document.write(reg1.exec(str1)+"<br/>");//nnnne


//var reg1 = /name{2,}/; //e中包含2和2个以上
//var str1="im name namee";
//document.write(reg1.exec(str1)+"<br/>");//namee

//var reg1 = /(name){2,}/; //分组，name可以看成是一个字符，整个正则匹配一次，分组再匹配一次 
//var str1="namename 11name";
//document.write(reg1.exec(str1)+"<br/>");//namename,name

//var reg1 = /n(.*)n/;  //返回分组的子匹配
//var str1 ="111n223n";
//reg1.test(str1);
//document.write(RegExp.$1+"<br/>");//223

//把匹配到的内容进行替换  n代表替换内容的开始和结束位置的标识
//var reg1 = /n(.*)n/;  
//var str1 ="111n223n";
//document.write(str1.replace(reg1,"<strong>$1</strong>")+"<br/>");//111<strong>223</strong>

//得到匹配的多个内容
//var reg1 =/(.*)\s(.*)/; //中间包含空格的任意字符
//var str1 ="lili lilei";
//document.write(str1.replace(reg1,"$2 $1")+"<br/>");//lilei lili

//使用贪婪模式替换内容  所有内容看成一个整体，替换成1
//var reg1 = /[a-z]+/;
//var str1 = "abc";
//document.write(str1.replace(reg1,"1")+"<br/>");//1

//使用惰性模式替换内容
//var reg1 =  /[a-z]+?/;
//var str1 = "abc";
//document.write(str1.replace(reg1,"1")+"<br/>");//1bc

//使用惰性把多个内容，添加标签
//var reg1 =/n(.*)n/; //使用贪婪 全局加粗
//var reg1 =/n(.*?)n/;  //使用惰性  第一加粗
//var reg1 = /n(.*?)n/g; //添加全局  数字加粗
//var str1 ="n2008n n2009n n2010n";
//document.write(str1.replace(reg1,"<strong>$1</strong>")+"<br/>");
//document.write("<hr/>");

//使用exec控制返回内容
//得到全部内容
//var str1 = "lilei 234";
//var reg1 = /^[a-z]+\s[0-9]{1,3}$/;
//document.write(reg1.exec(str1)+"<br/>");//lilei 234

//只得到匹配内容
//var str1 = "lilei 234";
//var reg1 = /[a-z]+/;
//document.write(reg1.exec(str1)+"<br/>");//lilei

//添加分组进行匹配   这个称为捕获性分组，所有分组都捕获返回
//var str1 = "lilei 234";
//var reg1 = /^([a-z]+)\s([0-9]{1,3})$/;  
//document.write(reg1.exec(str1)+"<br/>"); //返回 全部字符，第一个匹配的内容，第二个匹配的内容 lilei 234,lilei,234

//非捕获行分组：只捕获部分分组 (在分组前面加?:,就不捕获该分组)
//var str1 = "lilei 234";
//var reg1 = /^([a-z]+)\s(?:[0-9]{1,3})$/;
//document.write(reg1.exec(str1)+"<br/>"); //ilei 234,lilei

//嵌套分组
//var reg1 = /(a?(b?(c?)))/;
//var str1 = "abc";
//document.write(reg1.exec(str1)+"<br/>");  //由外向内 1 整个字符串 2 (a?(b?(c?))) abc 3 (b?(c?)） bc 4 (c?) c
//abc,abc,bc,c


document.write("<hr/>");

//前瞻性捕获 规定后面是固定的内容，返回前面的内容
//var  reg1 = /na(?=me)/;
//var  str1 = "name";
//document.write(reg1.exec(str1)+"<br/>");

//匹配特殊符号
//var reg1 = /\$/ ;
//var str1 = "$";
//document.write(reg1.exec(str1)+"<br/>");//$

//匹配换行  m支持多行 multiline
//var str1 ="1.zhangsan\n2.lisi\n3.wangwu";
//var reg1 =/^\d+/mg;
//document.write(str1.replace(reg1,"#")+"<br/>");//#.zhangsan #.lisi #.wangwu

document.write("<hr/>");

//常用正则
//检查邮政编码 6位数字，且第一位不为0
//var str1="451200";
//var reg1 = /[1-9][0-9]{5}/;
//document.write(reg1.test(str1)+"<br/>");//true

//检查压缩文件名
//var str1 = "xss12_.rar";
//var reg1 = /^[\w]+\.(zip|rar|gz)$/;
//document.write(reg1.test(str1)+"<br/>");//true

//删除空格
//var str1 = "111 222 333";
//var reg1 = /\s/g;
//document.write(str1.replace(reg1,"")+"<br/>");//111222333

//删除头尾空格
//var str1 = " na me  ";  //前面1个空格，后面是2个空格
//var reg1 = /^\s+/;
//document.write("|"+str1.replace(reg1,"")+"|"+"<br/>");//|na me |
//var reg2 = /\s+$/;
//document.write("|"+str1.replace(reg2,"")+"|"+"<br/>");//| na me|

//使用惰性模式删除头尾空格
//var str1 = " na me  ";  //前面1个空格，后面是2个空格
//var reg1 = /^\s(.+)\s+$/;
//var reg1 = /^\s(.+?)\s+$/; //变成贪婪模式才能去掉
//document.write("|"+reg1.exec(str1)[1]+"|"+"<br/>");//|na me|
//或
//document.write("|"+str1.replace(reg1,"$1")+"|"+"<br/>");|na me|

//电子邮件
//var str1 = "abc.123@163.com";
//var reg1 = /^()@()\.()/$; 进化过程
//var reg1 = /^([\w\.\-]+)@()\.()$/;
//var reg1 = /^([\w\.\-]+)@([\w\-]+)\.([a-zA-Z]{2,4})$/;
//document.write(reg1.test(str1));//true

//电话号码
//var str1 ="13716591422";
//var reg1 = /^1[34578]\d{9}$/;
//var reg1 =/^1(3|4|5|7|8)\d{9}$/;
//document.write(reg1.test(str1)+"<br/>");//true