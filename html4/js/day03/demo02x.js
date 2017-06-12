/*
switch语句

switch(表达式){
	case 值1：
	  语句1;
	  break;
	  
	case 值2：
	   语句2
	   break;
	   
	   
	  ....
	  
	default:
     语句;
	 break;
}

*/

//根据值判断季度
/*
var jd =3;
if(jd==1){
	document.write("第一季度");
}else if(jd==2){
	document.write("第二季度");
}else if(jd==3){
	document.write("第三季度"); //
}else if(jd==4){
	document.write("第四季度");
}else{
	document.write("输入有误");
}*/

/*
var jd = 3;
switch(jd){
  case 1:
   document.write("第一季度");
   break;
   
   case 2:
   document.write("第二季度");
   break;
   
   case 3:
   document.write("第三季度");
   break;
  
   case 4:
   document.write("第四季度");
   break;
    
   default:
   document.write("输入有误");
   break;
   
}
*/

//switch语句与if语句在某种情况下，是可以互换的
//if语句的表达式是关系表达值，所以，如果表示关系的情况，只能有if


//如果是表示范围，使用if，如果能够穷举，可以用switch

//一个值大于1000的情况，你输出ok
/*
var x;
if(x>1000){
	document.write("ok");
}*/

/*
var x =3;
var y =1;
if(x-y){
	
}
*/
//如果分支的情况是Number类型，或者String类型，只能用switch
//判读星期
/*
var day=10 ;
switch(day){
 case 1:
   document.write("星期天");
   break;
 case 2:
    document.write("星期一");
   break;
   case 3:
    document.write("星期二");
   break;
  case 4:
    document.write("星期三");
   break;
   case 5:
    document.write("星期四");
   break;
  case 6:
    document.write("星期五");
   break;
    case 7:
    document.write("星期六");
   break;
   default:
    document.write("输入有误");
	break;
}
*/
/*
var day = "2";
switch(day){
  case "1":
      document.write("星期天");
   break;
   case "2":
    document.write("星期一");
   break;
   case "3":
    document.write("星期二");
   break;
  case "4":
    document.write("星期三");
   break;
   case "5":
    document.write("星期四");
   break;
  case "6":
    document.write("星期五");
   break;
    case "7":
    document.write("星期六");
   break;
   default:
    document.write("输入有误");
	break;
	
}
*/
//使用switch语句，根据月份，输出天数
/*
var month = 2;
switch(month){
	//1 3 5 7 8 10 12
	case 1:
     document.write("31");
	break;
	case 3:
     document.write("31");
	break;
	case 5:
     document.write("31");
	break;
	case 7:
     document.write("31");
	break;
	case 8:
     document.write("31");
	break;
	case 10:
     document.write("31");
	break;
	case 12:
     document.write("31");
	break;
	case 2:
     document.write("28");
	break;
	case 4:
     document.write("30");
	break;
	case 6:
     document.write("30");
	break;
	case 9:
     document.write("30");
	break;
	case 11:
     document.write("30");
	break;
	default:
	 document.write("error");
	break;
}
*/
//switch中的default位置
/*
var x = 5;
var y = 3;
switch(x){
	
	default:
	 y++;
	 document.write("default语句");
	 break;
	 
	 case 2:
	 y++;
	 document.write("case 2语句");
	 break;
	 
	 case 3:
	 y++;
	 document.write("case 3语句");
	 break;
}
document.write(y);//4
*/

//default的语句无论放在前面或后面，都是最后执行

//break穿透现象
/*
var a = 2;
var b = 3;
switch(a){
	case 2:
	 b++;
	  document.write("case 2<br/>");
	case 3:
	 b++;
	  document.write("case 3<br/>");
	  
	default:
	 b++;
	  document.write("default语句<br/>");
}
document.write(b);
*/
//要求大家重视break
//利用穿透现象

/*
var month = 2;
switch(month){
	//1 3 5 7 8 10 12
	case 1:
	case 3:
 	case 5:
 	case 7:
 	case 8:
 	case 10:
 	case 12:
     document.write("31");
	break;
	case 2:
     document.write("28");
	break;
	case 4:
 	case 6:
 	case 9:
 	case 11:
     document.write("30");
	break;
	default:
	 document.write("error");
	break;
}
*/