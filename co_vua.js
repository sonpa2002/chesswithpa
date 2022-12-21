/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var a=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
var b=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
var x=-1,y=-1,x1=-1,y1=-1,tg_xe_den_trai=0,tg_xe_trang_trai=0,tg_xe_den_phai=0,tg_xe_trang_phai=0;
var denluot=1;
xepco( a);

function thebodyonload(){
    xuathienquanco();
    
    document.getElementById("setting").onclick=function (){
        var doituong=document.getElementById("div5");
        if(doituong.style.opacity=="0")
            opensetting();
        else
            closesetting();
    }
    document.getElementById("micro").onclick=function (){
        listening();
    }
    document.getElementById("div5_10").onclick=function (){
        quaylai();
    }
    var thelabel=document.getElementsByTagName("label");
    thelabel[0].onclick=thelabel00onclick;
    thelabel[1].onclick=thelabel01onclick;
    thelabel[2].onclick=thelabel02onclick;
    thelabel[3].onclick=thelabel03onclick;
    thelabel[4].onclick=thelabel04onclick;
    thelabel[5].onclick=thelabel05onclick;
    thelabel[6].onclick=thelabel06onclick;
    thelabel[7].onclick=thelabel07onclick;
    thelabel[8].onclick=thelabel10onclick;
    thelabel[9].onclick=thelabel11onclick;
    thelabel[10].onclick=thelabel12onclick;
    thelabel[11].onclick=thelabel13onclick;
    thelabel[12].onclick=thelabel14onclick;
    thelabel[13].onclick=thelabel15onclick;
    thelabel[14].onclick=thelabel16onclick;
    thelabel[15].onclick=thelabel17onclick;
    thelabel[16].onclick=thelabel20onclick;
    thelabel[17].onclick=thelabel21onclick;
    thelabel[18].onclick=thelabel22onclick;
    thelabel[19].onclick=thelabel23onclick;
    thelabel[20].onclick=thelabel24onclick;
    thelabel[21].onclick=thelabel25onclick;
    thelabel[22].onclick=thelabel26onclick;
    thelabel[23].onclick=thelabel27onclick;
    thelabel[24].onclick=thelabel30onclick;
    thelabel[25].onclick=thelabel31onclick;
    thelabel[26].onclick=thelabel32onclick;
    thelabel[27].onclick=thelabel33onclick;
    thelabel[28].onclick=thelabel34onclick;
    thelabel[29].onclick=thelabel35onclick;
    thelabel[30].onclick=thelabel36onclick;
    thelabel[31].onclick=thelabel37onclick;
    thelabel[32].onclick=thelabel40onclick;
    thelabel[33].onclick=thelabel41onclick;
    thelabel[34].onclick=thelabel42onclick;
    thelabel[35].onclick=thelabel43onclick;
    thelabel[36].onclick=thelabel44onclick;
    thelabel[37].onclick=thelabel45onclick;
    thelabel[38].onclick=thelabel46onclick;
    thelabel[39].onclick=thelabel47onclick;
    thelabel[40].onclick=thelabel50onclick;
    thelabel[41].onclick=thelabel51onclick;
    thelabel[42].onclick=thelabel52onclick;
    thelabel[43].onclick=thelabel53onclick;
    thelabel[44].onclick=thelabel54onclick;
    thelabel[45].onclick=thelabel55onclick;
    thelabel[46].onclick=thelabel56onclick;
    thelabel[47].onclick=thelabel57onclick;
    thelabel[48].onclick=thelabel60onclick;
    thelabel[49].onclick=thelabel61onclick;
    thelabel[50].onclick=thelabel62onclick;
    thelabel[51].onclick=thelabel63onclick;
    thelabel[52].onclick=thelabel64onclick;
    thelabel[53].onclick=thelabel65onclick;
    thelabel[54].onclick=thelabel66onclick;
    thelabel[55].onclick=thelabel67onclick;
    thelabel[56].onclick=thelabel70onclick;
    thelabel[57].onclick=thelabel71onclick;
    thelabel[58].onclick=thelabel72onclick;
    thelabel[59].onclick=thelabel73onclick;
    thelabel[60].onclick=thelabel74onclick;
    thelabel[61].onclick=thelabel75onclick;
    thelabel[62].onclick=thelabel76onclick;
    thelabel[63].onclick=thelabel77onclick;
    
    thelabel[64].onclick=phongcap01;
    thelabel[65].onclick=phongcap02;
    thelabel[66].onclick=phongcap03;
    thelabel[67].onclick=phongcap04;
    
    
    document.getElementById("checkbox1Input").onchange=function (){
        controlmusic();
    }
    document.getElementById("checkbox3Input").onchange=function (){
        subnumber();
    }
    document.getElementById("music").onended=function (){
        var obj1_1=document.getElementById("musicsrc");
        var kq = parseInt(obj1_1.getAttribute("src").charAt(7))+1;
        if(kq>9)
            kq="./music1.mp3";
        else
            kq="./music"+kq+".mp3";
        obj1_1.setAttribute("src",kq);
        obj1_1=document.getElementById("music");
        obj1_1.load();controlmusic();
    }
}
//1
function thelabel00onclick(){
    luuvitri(0,0);
}
function thelabel01onclick(){
    luuvitri(0,1);
}
function thelabel02onclick(){
    luuvitri(0,2);
}
function thelabel03onclick(){
    luuvitri(0,3);
}
function thelabel04onclick(){
    luuvitri(0,4);
}
function thelabel05onclick(){
    luuvitri(0,5);
}
function thelabel06onclick(){
    luuvitri(0,6);
}
function thelabel07onclick(){
    luuvitri(0,7);
}
//2
function thelabel10onclick(){
    luuvitri(1,0);
}
function thelabel11onclick(){
    luuvitri(1,1);
}
function thelabel12onclick(){
    luuvitri(1,2);
}
function thelabel13onclick(){
    luuvitri(1,3);
}
function thelabel14onclick(){
    luuvitri(1,4);
}
function thelabel15onclick(){
    luuvitri(1,5);
}
function thelabel16onclick(){
    luuvitri(1,6);
}
function thelabel17onclick(){
    luuvitri(1,7);
}
//3
function thelabel20onclick(){
    luuvitri(2,0);
}
function thelabel21onclick(){
    luuvitri(2,1);
}
function thelabel22onclick(){
    luuvitri(2,2);
}
function thelabel23onclick(){
    luuvitri(2,3);
}
function thelabel24onclick(){
    luuvitri(2,4);
}
function thelabel25onclick(){
    luuvitri(2,5);
}
function thelabel26onclick(){
    luuvitri(2,6);
}
function thelabel27onclick(){
    luuvitri(2,7);
}
//4
function thelabel30onclick(){
    luuvitri(3,0);
}
function thelabel31onclick(){
    luuvitri(3,1);
}
function thelabel32onclick(){
    luuvitri(3,2);
}
function thelabel33onclick(){
    luuvitri(3,3);
}
function thelabel34onclick(){
    luuvitri(3,4);
}
function thelabel35onclick(){
    luuvitri(3,5);
}
function thelabel36onclick(){
    luuvitri(3,6);
}
function thelabel37onclick(){
    luuvitri(3,7);
}
//5
function thelabel40onclick(){
    luuvitri(4,0);
}
function thelabel41onclick(){
    luuvitri(4,1);
}
function thelabel42onclick(){
    luuvitri(4,2);
}
function thelabel43onclick(){
    luuvitri(4,3);
}
function thelabel44onclick(){
    luuvitri(4,4);
}
function thelabel45onclick(){
    luuvitri(4,5);
}
function thelabel46onclick(){
    luuvitri(4,6);
}
function thelabel47onclick(){
    luuvitri(4,7);
}
//6
function thelabel50onclick(){
    luuvitri(5,0);
}
function thelabel51onclick(){
    luuvitri(5,1);
}
function thelabel52onclick(){
    luuvitri(5,2);
}
function thelabel53onclick(){
    luuvitri(5,3);
}
function thelabel54onclick(){
    luuvitri(5,4);
}
function thelabel55onclick(){
    luuvitri(5,5);
}
function thelabel56onclick(){
    luuvitri(5,6);
}
function thelabel57onclick(){
    luuvitri(5,7);
}
//7
function thelabel60onclick(){
    luuvitri(6,0);
}
function thelabel61onclick(){
    luuvitri(6,1);
}
function thelabel62onclick(){
    luuvitri(6,2);
}
function thelabel63onclick(){
    luuvitri(6,3);
}
function thelabel64onclick(){
    luuvitri(6,4);
}
function thelabel65onclick(){
    luuvitri(6,5);
}
function thelabel66onclick(){
    luuvitri(6,6);
}
function thelabel67onclick(){
    luuvitri(6,7);
}
//8
function thelabel70onclick(){
    luuvitri(7,0);
}
function thelabel71onclick(){
    luuvitri(7,1);
}
function thelabel72onclick(){
    luuvitri(7,2);
}
function thelabel73onclick(){
    luuvitri(7,3);
}
function thelabel74onclick(){
    luuvitri(7,4);
}
function thelabel75onclick(){
    luuvitri(7,5);
}
function thelabel76onclick(){
    luuvitri(7,6);
}
function thelabel77onclick(){
    luuvitri(7,7);
}
/// co-vua-PA-1.0
function totamdichuyen(x,y,x1,y1)
{
	if(y==y1&&x-x1==1&&a[x1][y1]==0)
	return true;
	if(y==y1&&x-x1==2&&x==6&&a[x1][y1]==0)
	return true;
	if(x-x1==1&&y-y1==1&&a[x1][y1]>0||x-x1==1&&y1-y==1&&a[x1][y1]>0)
	return true;
	return false;
}
function xedichuyen(x,y,x1,y1)
{
	if(x==x1)
	{
		if(y1>y)
		{
			for(var n=y+1;n<y1;n++)
			{
				if(a[x][n]!=0)
					return false;
			}
		}
		if(y1<y)
		{
			for(var n=y-1;n>y1;n--)
			{
				if(a[x][n]!=0)
					return false;
			}
		}
	}
	if(y==y1)
	{
		if(x1>x)
		{
			for(var n=x+1;n<x1;n++)
			{
				if(a[n][y]!=0)
					return false;
			}
		}
		if(x1<x)
		{
			for(var n=x-1;n>x1;n--)
			{
				if(a[n][y]!=0)
					return false;
			}
		}
	}
	if(x==x1&&a[x1][y1]>=0&&a[x][y]==-5||x==x1&&a[x1][y1]>=0&&a[x][y]==-2)
		return true;
	if(x==x1&&a[x1][y1]<=0&&a[x][y]==5||x==x1&&a[x1][y1]<=0&&a[x][y]==2)
		return true;
	if(y==y1&&a[x1][y1]>=0&&a[x][y]==-5||y==y1&&a[x1][y1]>=0&&a[x][y]==-2)
		return true;
	if(y==y1&&a[x1][y1]<=0&&a[x][y]==5||y==y1&&a[x1][y1]<=0&&a[x][y]==2)
		return true;
	return false;
}
function madichuyen(x,y,x1,y1)
{
	if(x-x1==2&&y-y1==1&&a[x1][y1]>=0&&a[x][y]==-4)
		return true;
	if(x-x1==2&&y1-y==1&&a[x1][y1]>=0&&a[x][y]==-4)
		return true;
	if(x1-x==2&&y-y1==1&&a[x1][y1]>=0&&a[x][y]==-4)
		return true;
	if(x1-x==2&&y1-y==1&&a[x1][y1]>=0&&a[x][y]==-4)
		return true;
	if(x1-x==1&&y-y1==2&&a[x1][y1]>=0&&a[x][y]==-4)
		return true;
	if(x1-x==1&&y1-y==2&&a[x1][y1]>=0&&a[x][y]==-4)
		return true;
	if(x-x1==1&&y-y1==2&&a[x1][y1]>=0&&a[x][y]==-4)
		return true;
	if(x-x1==1&&y1-y==2&&a[x1][y1]>=0&&a[x][y]==-4)
		return true;
	if(x-x1==2&&y-y1==1&&a[x1][y1]<=0&&a[x][y]==4)
		return true;
	if(x-x1==2&&y1-y==1&&a[x1][y1]<=0&&a[x][y]==4)
		return true;
	if(x1-x==2&&y-y1==1&&a[x1][y1]<=0&&a[x][y]==4)
		return true;
	if(x1-x==2&&y1-y==1&&a[x1][y1]<=0&&a[x][y]==4)
		return true;
	if(x1-x==1&&y-y1==2&&a[x1][y1]<=0&&a[x][y]==4)
		return true;
	if(x1-x==1&&y1-y==2&&a[x1][y1]<=0&&a[x][y]==4)
		return true;
	if(x-x1==1&&y-y1==2&&a[x1][y1]<=0&&a[x][y]==4)
		return true;
	if(x-x1==1&&y1-y==2&&a[x1][y1]<=0&&a[x][y]==4)
		return true;
	return false;
}
function  tuongdichuyen(x,y,x1,y1)
{
	if(x1-x==1&&y1-y==1&&a[x1][y1]<=0&&a[x][y]==1||x1-x==1&&y-y1==1&&a[x1][y1]<=0&&a[x][y]==1)
	return true;
	if(x-x1==1&&y-y1==1&&a[x1][y1]<=0&&a[x][y]==1||x-x1==1&&y1-y==1&&a[x1][y1]<=0&&a[x][y]==1)
	return true;
	if(x1-x==1&&y1-y==1&&a[x1][y1]>=0&&a[x][y]==-1||x1-x==1&&y-y1==1&&a[x1][y1]>=0&&a[x][y]==-1)
	return true;
	if(x-x1==1&&y-y1==1&&a[x1][y1]>=0&&a[x][y]==-1||x-x1==1&&y1-y==1&&a[x1][y1]>=0&&a[x][y]==-1)
	return true;
	if(y==y1&&x1-x==1&&a[x1][y1]<=0&&a[x][y]==1)
	return true;
	if(y==y1&&x-x1==1&&a[x1][y1]<=0&&a[x][y]==1)
	return true;
	if(x==x1&&y1-y==1&&a[x1][y1]<=0&&a[x][y]==1)
	return true;
	if(x==x1&&y-y1==1&&a[x1][y1]<=0&&a[x][y]==1)
	return true;
	if(y==y1&&x1-x==1&&a[x1][y1]>=0&&a[x][y]==-1)
	return true;
	if(y==y1&&x-x1==1&&a[x1][y1]>=0&&a[x][y]==-1)
	return true;
	if(x==x1&&y1-y==1&&a[x1][y1]>=0&&a[x][y]==-1)
	return true;
	if(x==x1&&y-y1==1&&a[x1][y1]>=0&&a[x][y]==-1)
	return true;
        if((tg_xe_trang_trai==0||tg_xe_trang_phai==0)&&(y1-y==2||y-y1==2)&&x==x1)
        {
            if(a[x][y]==1&&a[x1][y1]==0)
            {
                a[x][y]=5;
                if(x1==0&&y1==5)
                {
                    y1++;
                    if(tg_xe_trang_phai==0&&xedichuyen(x,y,x1,y1)==true)
                    {
                        a[x][y]=1;y1--;
                        return true;
                    }
                    else
                    {
                        y1--;a[x][y]=1;
                    }
                }
                else
                {
                    if(tg_xe_trang_trai==0&&xedichuyen(x,y,x1,y1)==true)
                    {
                        a[x][y]=1;
                        return true;
                    }
                    else
                        a[x][y]=1;
                }
            }
        }
        if((tg_xe_den_trai==0||tg_xe_den_phai==0)&&(y1-y==2||y-y1==2)&&x==x1)
        {
            if(a[x][y]==-1&&a[x1][y1]==0)
            {
                a[x][y]=-5;
                if(x1==7&&y1==5)
                {
                    y1++;
                    if(tg_xe_den_phai==0&&xedichuyen(x,y,x1,y1)==true)
                    {
                        a[x][y]=-1;y1--;
                        return true;
                    }
                    else
                    {
                        y1--;a[x][y]=-1;
                    }
                }
                else
                {
                    if(tg_xe_den_trai==0&&xedichuyen(x,y,x1,y1)==true)
                    {
                        a[x][y]=-1;
                        return true;
                    }
                    else
                        a[x][y]=-1;
                }
            }
        }
    
	return false;
}
function  totduongdichuyen(x,y,x1,y1)
{
	if(y==y1&&x1-x==1&&a[x1][y1]==0)
	return true;
	if(y==y1&&x1-x==2&&x==1&&a[x1][y1]==0)
	return true;
	if(x1-x==1&&y1-y==1&&a[x1][y1]<0||x1-x==1&&y-y1==1&&a[x1][y1]<0)
	return true;
	return false;
}
function tinhdichuyen(x,y,x1,y1)
{
	if(x1>x&&y1>y)
	{
		if(x1-x==y1-y)
		{
			for(var n=x+1,m=y+1;n<x1&&m<y1;n++,m++)
			{
				if(a[n][m]!=0)
					return false;
			}
		}
	}
	if(x1<x&&y1<y)
	{
		if(x-x1==y-y1)
		{
			for(var n=x-1,m=y-1;n>x1&&m>y1;n--,m--)
			{
				if(a[n][m]!=0)
					return false;
			}
		}
	}
	if(x1>x&&y1<y)
	{
		if(x1-x==y-y1)
		{
			for(var n=x+1,m=y-1;n<x1&&m>y1;n++,m--)
			{
				if(a[n][m]!=0)
					return false;
			}
		}
	}
	if(x1<x&&y1>y)
	{
		if(x-x1==y1-y)
		{
			for(var n=x-1,m=y+1;n>x1&&m<y1;n--,m++)
			{
				if(a[n][m]!=0)
					return false;
			}
		}
	}
	if(x1-x==y1-y&&a[x1][y1]>=0&&a[x][y]==-3||x1-x==y1-y&&a[x1][y1]>=0&&a[x][y]==-2)
		return true;
	if(x1-x==y-y1&&a[x1][y1]>=0&&a[x][y]==-3||x1-x==y-y1&&a[x1][y1]>=0&&a[x][y]==-2)
		return true;
	if(x1-x==y1-y&&a[x1][y1]<=0&&a[x][y]==3||x1-x==y1-y&&a[x1][y1]<=0&&a[x][y]==2)
		return true;
	if(x1-x==y-y1&&a[x1][y1]<=0&&a[x][y]==3||x1-x==y-y1&&a[x1][y1]<=0&&a[x][y]==2)
		return true;
	return false;
}
function  xepco( a)
{
	for(var i=0;i<2;i++)
	{
		for(var j=0;j<8;j++)
		{
			if(i==0&&j==0||i==0&&j==7)
				a[i][j]=5;
			if(i==0&&j==1||i==0&&j==6)
				a[i][j]=4;
			if(i==0&&j==2||i==0&&j==5)
				a[i][j]=3;
			if(i==0&&j==3)
				a[i][j]=1;
			if(i==0&&j==4)
				a[i][j]=2;
			if(i==1)
				a[i][j]=6;
		}
	}
	for(var i=6;i<8;i++)
	{
		for(var j=0;j<8;j++)
		{
			if(i==7&&j==0||i==7&&j==7)
				a[i][j]=-5;
			if(i==7&&j==1||i==7&&j==6)
				a[i][j]=-4;
			if(i==7&&j==2||i==7&&j==5)
				a[i][j]=-3;
			if(i==7&&j==3)
				a[i][j]=-1;
			if(i==7&&j==4)
				a[i][j]=-2;
			if(i==6)
				a[i][j]=-6;
		}
	}
}
function  travelinkquanco(i,j)
{
    var duonglink="";
    if(a[i][j]==1)
        duonglink="quantuongtrang";
    if(a[i][j]==-1)
        duonglink="quantuongden";
    if(a[i][j]==2)
        duonglink="quanhautrang";
    if(a[i][j]==-2)
        duonglink="quanhauden";
    if(a[i][j]==3)
        duonglink="quantinhtrang";
    if(a[i][j]==-3)
        duonglink="quantinhden";
    if(a[i][j]==4)
        duonglink="quanmatrang";
    if(a[i][j]==-4)
        duonglink="quanmaden";
    if(a[i][j]==5)
        duonglink="quanxetrang";
    if(a[i][j]==-5)
        duonglink="quanxeden";
    if(a[i][j]==6)
        duonglink="quantottrang";
    if(a[i][j]==-6)
        duonglink="quantotden";
    return duonglink;
}
function xuathienquanco(){
    var link,obj,chuoi;
    for(var i=0;i<8;i++)
    {
        for(var j=0;j<8;j++)
        {
            link=travelinkquanco(i,j);chuoi="lb"+i+j;
            obj=document.getElementById(chuoi);
            if(link!="")
                obj.innerHTML="<img class='"+link+"' src="+'"./'+link+'.png" />';
            else
                obj.innerHTML=link;
        }
    }
}
function xuathienquancoplus(){
    var link,obj,chuoi;
    chuoi="lb"+x+y;
    obj=document.getElementById(chuoi);
    obj.innerHTML="";
    
    link=travelinkquanco(x1,y1);chuoi="lb"+x1+y1;
    obj=document.getElementById(chuoi);
    obj.innerHTML="<img class='"+link+"' src="+'"./'+link+'.png" />';
}
function dichuyen(){
    if(x!=-1&&y!=-1&&x1!=-1&&y1!=-1)
    {
        var idthe,doituong;
        idthe="lb"+x+y;
        doituong=document.getElementById(idthe);
        doituong.style.backgroundColor="";
        //cac hàm điều kiện
        if(a[x][y]==6)
        {
            if(totduongdichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
            {denluot=-denluot;ganbbanga();
                if(x1==7)
                {
                    doituong=document.getElementById("div1");
                    doituong.style.opacity="0.2";
                    doituong=document.getElementById("div3");
                    doituong.style.opacity="0";
                    doituong=document.getElementById("div2");
                    doituong.style.zIndex="9";
                    doituong=document.getElementById("lb80");
                    doituong.innerHTML="<img class='quanmatrang' src='./quanmatrang.png' />";
                    doituong=document.getElementById("lb81");
                    doituong.innerHTML="<img class='quantinhtrang' src='./quantinhtrang.png' />";
                    doituong=document.getElementById("lb82");
                    doituong.innerHTML="<img class='quanxetrang' src='./quanxetrang.png' />";
                    doituong=document.getElementById("lb83");
                    doituong.innerHTML="<img class='quanhautrang' src='./quanhautrang.png' />";
                }
                a[x1][y1]=a[x][y];a[x][y]=0;
                xuathienquancoplus();
            }
        }
        if(a[x][y]==-6)
        {
            if(totamdichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
            {denluot=-denluot;ganbbanga();
                if(x1==0)
                {
                    doituong=document.getElementById("div1");
                    doituong.style.opacity="0.2";
                    doituong=document.getElementById("div3");
                    doituong.style.opacity="0";
                    doituong=document.getElementById("div2");
                    doituong.style.zIndex="9";
                    doituong=document.getElementById("lb80");
                    doituong.innerHTML="<img class='quanmaden' src='./quanmaden.png' />";
                    doituong=document.getElementById("lb81");
                    doituong.innerHTML="<img class='quantinhden' src='./quantinhden.png' />";
                    doituong=document.getElementById("lb82");
                    doituong.innerHTML="<img class='quanxeden' src='./quanxeden.png' />";
                    doituong=document.getElementById("lb83");
                    doituong.innerHTML="<img class='quanhauden' src='./quanhauden.png' />";
                }
                a[x1][y1]=a[x][y];a[x][y]=0;
                xuathienquancoplus();
            }
        }
        if(a[x][y]==5||a[x][y]==-5)
        {
            if(xedichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
            {denluot=-denluot;ganbbanga();
                a[x1][y1]=a[x][y];a[x][y]=0;
                xuathienquancoplus();
            }
        }
        
        if(a[x][y]==4||a[x][y]==-4)
        {
            if(madichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
            {denluot=-denluot;ganbbanga();
                a[x1][y1]=a[x][y];a[x][y]=0;
                xuathienquancoplus();
            }
        }
        if(a[x][y]==3||a[x][y]==-3)
        {
            if(tinhdichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
            {denluot=-denluot;ganbbanga();
                a[x1][y1]=a[x][y];a[x][y]=0;
                xuathienquancoplus();
            }
        }
        if(a[x][y]==1||a[x][y]==-1)
        {
            if(tuongdichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
            {denluot=-denluot;ganbbanga();
                if((y1-y==2||y-y1==2)&&x==x1)
                {
                    if(a[x][y]==1&&x1==0&&y1==1)
                    {
                        a[0][2]=5;a[0][0]=0;
                    }
                    if(a[x][y]==1&&x1==0&&y1==5)
                    {
                        a[0][4]=5;a[0][7]=0;
                    }
                    if(a[x][y]==-1&&x1==7&&y1==1)
                    {
                        a[7][2]=-5;a[7][0]=0;
                    }
                    if(a[x][y]==-1&&x1==7&&y1==5)
                    {
                        a[7][4]=-5;a[7][7]=0;
                    }
                    a[x1][y1]=a[x][y];a[x][y]=0;
                    xuathienquanco();
                }
                else
                {
                    a[x1][y1]=a[x][y];a[x][y]=0;
                    xuathienquancoplus();
                }
            }
        }
        if(a[x][y]==2||a[x][y]==-2)
        {
            if((xedichuyen(x,y,x1,y1)==true||tinhdichuyen(x,y,x1,y1)==true)&&dichuyengiadinh()==true)
            {denluot=-denluot;ganbbanga();
                a[x1][y1]=a[x][y];a[x][y]=0;
                xuathienquancoplus();
            }
        }
        //cau lenh chung:
        if((denluot==-1&&tuongamantoan()==false)||(denluot==1&&tuongduongantoan()==false)){
            if(a[x1][y1]!=0&&a[x][y]==0){
                if(timvitriquanco_cothedichuyen()==0){
                    var obj1_1=document.getElementById("audiosrc");
                    obj1_1.src="./trochoidaketthuc.mp3";obj1_1=document.getElementById("audio");
                    obj1_1.load();obj1_1.play();
                    ketthucvanco();
                }
                else{
                    chieutuong();
                    if(document.getElementById("checkbox2Input").checked)
                        speechSynthesis.speak(new SpeechSynthesisUtterance(longtieng(1)));
                }
            }
        }
        if(a[x1][y1]!=0&&a[x][y]==0&&document.getElementById("checkbox2Input").checked){
            if((b[x][y]==6||b[x][y]==-6)&&b[x1][y1]==0)
                speechSynthesis.speak(new SpeechSynthesisUtterance(longtieng(6)));
            if((b[x][y]==6||b[x][y]==-6)&&b[x1][y1]!=0)
                speechSynthesis.speak(new SpeechSynthesisUtterance(longtieng(7)));
            if(b[x1][y1]==2||b[x1][y1]==-2)
                speechSynthesis.speak(new SpeechSynthesisUtterance(longtieng(2)));
            if(b[x1][y1]==3||b[x1][y1]==-3)
                speechSynthesis.speak(new SpeechSynthesisUtterance(longtieng(3)));
            if(b[x1][y1]==4||b[x1][y1]==-4)
                speechSynthesis.speak(new SpeechSynthesisUtterance(longtieng(4)));
            if(b[x1][y1]==5||b[x1][y1]==-5)
                speechSynthesis.speak(new SpeechSynthesisUtterance(longtieng(5)));
        }
        
        
        
        x1=-1;y1=-1;x=-1;y=-1;
        if(tg_xe_trang_trai==0||tg_xe_trang_phai==0||tg_xe_den_trai==0||tg_xe_den_phai==0)
        {
            if((tg_xe_trang_trai==0||tg_xe_trang_phai==0)&&a[0][3]!=1)
            {
                tg_xe_trang_trai++;tg_xe_trang_phai++;
            }
            if((tg_xe_den_trai==0||tg_xe_den_phai==0)&&a[7][3]!=-1)
            {
                tg_xe_den_trai++;tg_xe_den_phai++;
            }
            
            if(tg_xe_trang_trai==0&&a[0][0]!=5)
                tg_xe_trang_trai++;
            if(tg_xe_trang_phai==0&&a[0][7]!=5)
                tg_xe_trang_phai++;
            if(tg_xe_den_trai==0&&a[7][0]!=-5)
                tg_xe_den_trai++;
            if(tg_xe_den_phai==0&&a[7][7]!=-5)
                tg_xe_den_phai++;
        }
    }
}
function luuvitri(i,j){
    if(x==-1&&y==-1)
    {
        if(a[i][j]!=0&&(a[i][j]*denluot)>0)
        {
            x=i;y=j;
            var idthe,doituong;
            idthe="lb"+i+j;
            doituong=document.getElementById(idthe);
            doituong.style.backgroundColor="#ff00cc";
            goiynuocdi();
        }
    }
    else
    {
        if(x1==-1&&y1==-1)
        {
            cleargoiynuocdi();
            x1=i;y1=j;
            dichuyen();
        }
        else
            alert("LỖI!---Phát sinh lỖi không mong muốn!---");
    }
}
function phongcap01()
{
    var obj;
    obj=document.getElementById("div1");
    obj.style.opacity="1";
    obj=document.getElementById("div3");
    obj.style.opacity="1";
    obj=document.getElementById("div2");
    obj.style.zIndex="4";
    for(var i=0;i<8;i+=7)
    {
        for(var j=0;j<8;j++)
        {
            if(a[i][j]==6||a[i][j]==-6)
                a[i][j]=a[i][j]/6*4;
        }
    }
    if((denluot==-1&&tuongamantoan()==false)||(denluot==1&&tuongduongantoan()==false)){
        if(timvitriquanco_cothedichuyen()==0){
                    ketthucvanco();
                }
                else
                    chieutuong();
    }
    xuathienquanco();
}
function phongcap02()
{
    var obj;
    obj=document.getElementById("div1");
    obj.style.opacity="1";
    obj=document.getElementById("div3");
    obj.style.opacity="1";
    obj=document.getElementById("div2");
    obj.style.zIndex="4";
    for(var i=0;i<8;i+=7)
    {
        for(var j=0;j<8;j++)
        {
            if(a[i][j]==6||a[i][j]==-6)
                a[i][j]=a[i][j]/2;
        }
    }
    if((denluot==-1&&tuongamantoan()==false)||(denluot==1&&tuongduongantoan()==false)){
        if(timvitriquanco_cothedichuyen()==0){
                    ketthucvanco();
                }
                else
                    chieutuong();
    }
    xuathienquanco();
}
function phongcap03()
{
    var obj;
    obj=document.getElementById("div1");
    obj.style.opacity="1";
    obj=document.getElementById("div3");
    obj.style.opacity="1";
    obj=document.getElementById("div2");
    obj.style.zIndex="4";
    for(var i=0;i<8;i+=7)
    {
        for(var j=0;j<8;j++)
        {
            if(a[i][j]==6||a[i][j]==-6)
                a[i][j]=a[i][j]/6*5;
        }
    }
    if((denluot==-1&&tuongamantoan()==false)||(denluot==1&&tuongduongantoan()==false)){
        if(timvitriquanco_cothedichuyen()==0){
                    ketthucvanco();
                }
                else
                    chieutuong();
    }
    xuathienquanco();
}
function phongcap04()
{
    var obj;
    obj=document.getElementById("div1");
    obj.style.opacity="1";
    obj=document.getElementById("div3");
    obj.style.opacity="1";
    obj=document.getElementById("div2");
    obj.style.zIndex="4";
    for(var i=0;i<8;i+=7)
    {
        for(var j=0;j<8;j++)
        {
            if(a[i][j]==6||a[i][j]==-6)
                a[i][j]=a[i][j]/3;
        }
    }
    if((denluot==-1&&tuongamantoan()==false)||(denluot==1&&tuongduongantoan()==false)){
        if(timvitriquanco_cothedichuyen()==0){
                    ketthucvanco();
                }
                else
                    chieutuong();
    }
    xuathienquanco();
}
function tuongduongantoan(){
    var btx,bty,btx1,bty1;
    btx=x;bty=y;btx1=x1;bty1=y1;x=-1;y=-1;x1=-1;y1=-1;
    for(var i=0;i<8;i++)
    {
        for(var j=0;j<8;j++)
        {
            if(a[i][j]==1)
            {
                x1=i;y1=j;break;
            }
        }
        if(x1!=-1&&y1!=-1)
            break;
    }
    for(var i=0;i<8;i++)
    {
        for(var j=0;j<8;j++)
        {
            if(a[i][j]<0)
            {
                x=i;y=j;
                if(a[i][j]==-6&&totamdichuyen(x,y,x1,y1)==true)
                {
                    x=btx;y=bty;x1=btx1;y1=bty1;
                    return false;
                }
                if(a[i][j]==-5&&xedichuyen(x,y,x1,y1)==true)
                {
                    x=btx;y=bty;x1=btx1;y1=bty1;
                    return false;
                }
                if(a[i][j]==-4&&madichuyen(x,y,x1,y1)==true)
                {
                    x=btx;y=bty;x1=btx1;y1=bty1;
                    return false;
                }
                if(a[i][j]==-3&&tinhdichuyen(x,y,x1,y1)==true)
                {
                    x=btx;y=bty;x1=btx1;y1=bty1;
                    return false;
                }
                if(a[i][j]==-2&&(xedichuyen(x,y,x1,y1)==true||tinhdichuyen(x,y,x1,y1)==true))
                {
                    x=btx;y=bty;x1=btx1;y1=bty1;
                    return false;
                }
                if(a[i][j]==-1&&tuongdichuyen(x,y,x1,y1)==true)
                {
                    x=btx;y=bty;x1=btx1;y1=bty1;
                    return false;
                }
            }
        }
    }
    x=btx;y=bty;x1=btx1;y1=bty1;
    return true;
}

function tuongamantoan(){
    var btx,bty,btx1,bty1;
    btx=x;bty=y;btx1=x1;bty1=y1;x=-1;y=-1;x1=-1;y1=-1;
    for(var i=0;i<8;i++)
    {
        for(var j=0;j<8;j++)
        {
            if(a[i][j]==-1)
            {
                x1=i;y1=j;break;
            }
        }
        if(x1!=-1&&y1!=-1)
            break;
    }
    for(var i=0;i<8;i++)
    {
        for(var j=0;j<8;j++)
        {
            if(a[i][j]>0)
            {
                x=i;y=j;
                if(a[i][j]==6&&totduongdichuyen(x,y,x1,y1)==true)
                {
                    x=btx;y=bty;x1=btx1;y1=bty1;
                    return false;
                }
                if(a[i][j]==5&&xedichuyen(x,y,x1,y1)==true)
                {
                    x=btx;y=bty;x1=btx1;y1=bty1;
                    return false;
                }
                if(a[i][j]==4&&madichuyen(x,y,x1,y1)==true)
                {
                    x=btx;y=bty;x1=btx1;y1=bty1;
                    return false;
                }
                if(a[i][j]==3&&tinhdichuyen(x,y,x1,y1)==true)
                {
                    x=btx;y=bty;x1=btx1;y1=bty1;
                    return false;
                }
                if(a[i][j]==2&&(xedichuyen(x,y,x1,y1)==true||tinhdichuyen(x,y,x1,y1)==true))
                {
                    x=btx;y=bty;x1=btx1;y1=bty1;
                    return false;
                }
                if(a[i][j]==1&&tuongdichuyen(x,y,x1,y1)==true)
                {
                    x=btx;y=bty;x1=btx1;y1=bty1;
                    return false;
                }
            }
        }
    }
    x=btx;y=bty;x1=btx1;y1=bty1;
    return true;
}
function dichuyengiadinh()
{
    var gtax1y1=a[x1][y1];
    if((a[x][y]==1||a[x][y]==-1)&&x==x1&&(x==0||x==7)&&(y1-y==2||y-y1==2))
    {
        if(denluot==1&&tuongduongantoan()==false||denluot==-1&&tuongamantoan()==false)
        {
            return false;
        }
        if(y1-y==2)
        {
            a[x][y1-1]=a[x][y];a[x][y]=0;
            if(denluot==1&&tuongduongantoan()==false||denluot==-1&&tuongamantoan()==false)
            {
                a[x][y]=a[x][y1-1];a[x][y1-1]=0;
                return false;
            }
            a[x][y]=a[x][y1-1];a[x][y1-1]=0;
        }
        if(y-y1==2)
        {
            a[x][y-1]=a[x][y];a[x][y]=0;
            if(denluot==1&&tuongduongantoan()==false||denluot==-1&&tuongamantoan()==false)
            {
                a[x][y]=a[x][y-1];a[x][y-1]=0;
                return false;
            }
            a[x][y]=a[x][y-1];a[x][y-1]=0;
        }
    }
    a[x1][y1]=a[x][y];a[x][y]=0;
    if(denluot==1&&tuongduongantoan()==false)
    {
        a[x][y]=a[x1][y1];a[x1][y1]=gtax1y1;
        return false;
    }
    if(denluot==-1&&tuongamantoan()==false)
    {
        a[x][y]=a[x1][y1];a[x1][y1]=gtax1y1;
        return false;
    }
    if((a[x1][y1]==1||a[x1][y1]==-1)&&x==x1&&(x==0||x==7)&&(y1-y==2||y-y1==2))
    {
        if(y1-y==2)
        {
            a[x][y1-1]=a[x1][y1]*5;a[x][y1+2]=0;
        }
        if(y-y1==2)
        {
            a[x][y-1]=a[x1][y1]*5;a[x][y1-1]=0;
        }
    }
    
    if((a[x1][y1]==1||a[x1][y1]==-1)&&x==x1&&(x==0||x==7)&&(y1-y==2||y-y1==2))
    {
        if(y1-y==2)
        {
            a[x][y1-1]=0;a[x][y1+2]=a[x1][y1]*5;
        }
        if(y-y1==2)
        {
            a[x][y-1]=0;a[x][y1-1]=a[x1][y1]*5;
        }
    }
    a[x][y]=a[x1][y1];a[x1][y1]=gtax1y1;
    return true;
}
function chieutuong()
{
    var obj;
    obj=document.getElementById("div1");
    obj.style.opacity="0.3";
    obj=document.getElementById("div2");
    obj.style.opacity="0";
    obj=document.getElementById("div3");
    obj.style.zIndex="9";
    setTimeout(clearchieutuong,2000);
}
function clearchieutuong()
{
    var obj;
    obj=document.getElementById("div1");
    obj.style.opacity="1";
    obj=document.getElementById("div2");
    obj.style.opacity="1";
    obj=document.getElementById("div3");
    obj.style.zIndex="3";
}
function quaylai()
{
    var chophepquaylai=0;
    
    for(var i=0;i<8;i++)
    {
        for(var j=0;j<8;j++)
        {
            if(a[i][j]!=b[i][j])
            {
                chophepquaylai++;
            }
        }
    }
    if(chophepquaylai>0&&x==-1&&y==-1)
    {
        for(var i=0;i<8;i++)
        {
            for(var j=0;j<8;j++)
            {
                if(a[i][j]!=b[i][j])
                {
                    a[i][j]=b[i][j];
                }
            }
        }
        denluot=-denluot;
        xuathienquanco();
        var obj1_1=document.getElementById("audiosrc");
        obj1_1.src="./chophepluilai.mp3";obj1_1=document.getElementById("audio");
        obj1_1.load();obj1_1.play();
    }
    else
    {
        var obj1_1=document.getElementById("audiosrc");
        obj1_1.src="./khongtheluilai.mp3";obj1_1=document.getElementById("audio");
        obj1_1.load();obj1_1.play();
        //alert("Không thể quay lại!");
    }
}
function ganbbanga()
{
    for(var i=0;i<8;i++)
    {
        for(var j=0;j<8;j++)
        {
            b[i][j]=a[i][j];
        }
    }
}
function opensetting(){
    var obj1=document.getElementById("div5");
    obj1.style.opacity="1";obj1.style.left="1180px";obj1.style.zIndex="9";
    if(document.getElementById("checkbox1Input").checked)
    {
        var obj1_1=document.getElementById("music");
        obj1_1.style.opacity="1";obj1_1.style.left="1170px";obj1_1.style.zIndex="9";
    }
}
function closesetting(){
    var obj1=document.getElementById("div5");
    obj1.style.opacity="0";obj1.style.left="800px";obj1.style.zIndex="0";
    if(document.getElementById("checkbox1Input").checked)
    {
        var obj1_1=document.getElementById("music");
        obj1_1.style.opacity="0";obj1_1.style.left="700px";obj1_1.style.zIndex="0";
    }
}
function controlmusic(){
    var obj1_1=document.getElementById("checkbox1Input");
    if (obj1_1.checked){
        var obj1_2=document.getElementById("music");
        obj1_2.play();
        if(document.getElementById("div5").style.opacity!="0")
        {obj1_2.style.opacity="1";obj1_2.style.left="1170px";obj1_2.style.zIndex="9";}
    }
    else{
        var obj1_2=document.getElementById("music");
        obj1_2.pause();
        obj1_2.style.opacity="0";obj1_2.style.left="700px";obj1_2.style.zIndex="0";
    }
}

function timvitriquanco_cothedichuyen(){
    var tongsoquanco_cothedichuyen=0;
    for(var i=0;i<8;i++)
    {
        for(var j=0;j<8;j++)
        {
            if(a[i][j]*denluot>0){
                if(timtatcanuocdicothe(i,j)>0)
                    tongsoquanco_cothedichuyen++;
            }
        }
    }
    return tongsoquanco_cothedichuyen;
}
function timtatcanuocdicothe(xtam,ytam)
{
    var tongsonuocdicothe=0;
    for(var i=0;i<8;i++)
    {
        for(var j=0;j<8;j++)
        {
            if(a[xtam][ytam]*a[i][j]<=0)
            {
                x=xtam;y=ytam;x1=i;y1=j;
                if(a[x][y]==6&&totduongdichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
                    tongsonuocdicothe++;
                if(a[x][y]==-6&&totamdichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
                    tongsonuocdicothe++;
                if((a[x][y]==5||a[x][y]==-5)&&xedichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
                    tongsonuocdicothe++;
                if((a[x][y]==4||a[x][y]==-4)&&madichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
                    tongsonuocdicothe++;
                if((a[x][y]==3||a[x][y]==-3)&&tinhdichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
                    tongsonuocdicothe++;
                if((a[x][y]==1||a[x][y]==-1)&&tuongdichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
                    tongsonuocdicothe++;
                if((a[x][y]==2||a[x][y]==-2)&&(xedichuyen(x,y,x1,y1)==true||tinhdichuyen(x,y,x1,y1)==true)&&dichuyengiadinh()==true)
                    tongsonuocdicothe++;
            }
        }
    }
    x1=-1;y1=-1;x=-1;y=-1;
    return tongsonuocdicothe;
}
function ketthucvanco()
{
    var obj;
    if(denluot==1)
        document.getElementById("div3").innerHTML="Yellow Win";
    if(denluot==-1)
        document.getElementById("div3").innerHTML="White Win";
    obj=document.getElementById("div1");
    obj.style.opacity="0.3";
    obj=document.getElementById("div2");
    obj.style.opacity="0";
    obj=document.getElementById("div3");
    obj.style.zIndex="9";
    
    setTimeout(function (){
        document.getElementById("div3").innerHTML="--Chiếu--";
        clearchieutuong();
    },5000);
}
function goiynuocdi()
{var btx=x,bty=y,btx1=x1,bty1=y1;var mau="#ffcc99";
    for(var i=0;i<8;i++)
    {
        for(var j=0;j<8;j++)
        {
            if(a[x][y]*a[i][j]<=0)
            {x1=i;y1=j;
                if(a[x][y]==6&&totduongdichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
                    document.getElementById("lb"+i+j).style.backgroundColor=mau;
                if(a[x][y]==-6&&totamdichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
                    document.getElementById("lb"+i+j).style.backgroundColor=mau;
                if((a[x][y]==5||a[x][y]==-5)&&xedichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
                    document.getElementById("lb"+i+j).style.backgroundColor=mau;
                if((a[x][y]==4||a[x][y]==-4)&&madichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
                    document.getElementById("lb"+i+j).style.backgroundColor=mau;
                if((a[x][y]==3||a[x][y]==-3)&&tinhdichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
                    document.getElementById("lb"+i+j).style.backgroundColor=mau;
                if((a[x][y]==1||a[x][y]==-1)&&tuongdichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
                    document.getElementById("lb"+i+j).style.backgroundColor=mau;
                if((a[x][y]==2||a[x][y]==-2)&&(xedichuyen(x,y,x1,y1)==true||tinhdichuyen(x,y,x1,y1)==true)&&dichuyengiadinh()==true)
                    document.getElementById("lb"+i+j).style.backgroundColor=mau;
            }
        }
    }
    x=btx;y=bty;x1=btx1;y1=bty1;
}
function cleargoiynuocdi()
{var btx=x,bty=y,btx1=x1,bty1=y1;
    for(var i=0;i<8;i++)
    {
        for(var j=0;j<8;j++)
        {
            if(a[x][y]*a[i][j]<=0)
            {x1=i;y1=j;
                if(a[x][y]==6&&totduongdichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
                    document.getElementById("lb"+i+j).style.backgroundColor="";
                if(a[x][y]==-6&&totamdichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
                    document.getElementById("lb"+i+j).style.backgroundColor="";
                if((a[x][y]==5||a[x][y]==-5)&&xedichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
                    document.getElementById("lb"+i+j).style.backgroundColor="";
                if((a[x][y]==4||a[x][y]==-4)&&madichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
                    document.getElementById("lb"+i+j).style.backgroundColor="";
                if((a[x][y]==3||a[x][y]==-3)&&tinhdichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
                    document.getElementById("lb"+i+j).style.backgroundColor="";
                if((a[x][y]==1||a[x][y]==-1)&&tuongdichuyen(x,y,x1,y1)==true&&dichuyengiadinh()==true)
                    document.getElementById("lb"+i+j).style.backgroundColor="";
                if((a[x][y]==2||a[x][y]==-2)&&(xedichuyen(x,y,x1,y1)==true||tinhdichuyen(x,y,x1,y1)==true)&&dichuyengiadinh()==true)
                    document.getElementById("lb"+i+j).style.backgroundColor="";
            }
        }
    }
    x=btx;y=bty;x1=btx1;y1=bty1;
}
function longtieng(thamso){
    var obj1_1=document.getElementById("audiosrc");
    var thamso1=Math.floor(Math.random()*10);
    if(thamso==1)
    {
        if(thamso1<2)
            return "Chiếu tướng.";
        else if(thamso1>=2&&thamso1<7)
        {
            obj1_1.src="./chieutuong.mp3";obj1_1=document.getElementById("audio");obj1_1.load();obj1_1.play();return "";
        }
        else
        {
            obj1_1.src="./chieuneban.mp3";obj1_1=document.getElementById("audio");obj1_1.load();obj1_1.play();return "";
        }
    }
    else if(thamso==2)
    {
        if(thamso1<5)
        {
            obj1_1.src="./okiamathauroibanoi.mp3";obj1_1=document.getElementById("audio");obj1_1.load();obj1_1.play();return "";
        }
        else
        {
            obj1_1.src="./minhxinquanhaunha.mp3";obj1_1=document.getElementById("audio");obj1_1.load();obj1_1.play();return "";
        }
    }
    else if(thamso==3)
    {
        if(thamso1<3)
            return "Mình xin quân Tượng nhá.";
        else if(thamso1>6)
        {
            obj1_1.src="./minhxinquantuongnha.mp3";obj1_1=document.getElementById("audio");obj1_1.load();obj1_1.play();return "";
        }
        else
        {
            obj1_1.src="./battuongne.mp3";obj1_1=document.getElementById("audio");obj1_1.load();obj1_1.play();return "";
        }
    }
    else if(thamso==4)
    {
        if(thamso1<3)
            return "Thôi xong! Mất Mã rồi bạn ơi.";
        else if(thamso1>6)
        {
            obj1_1.src="./batmane.mp3";obj1_1=document.getElementById("audio");obj1_1.load();obj1_1.play();return "";
        }
        else
        {
            obj1_1.src="./thoixongmatmaroibanoi.mp3";obj1_1=document.getElementById("audio");obj1_1.load();obj1_1.play();return "";
        }
    }
    else if(thamso==5)
    {
        if(thamso1<3)
            return "Bắt xe Nè.";
        else if(thamso1>6)
        {
            obj1_1.src="./xenaylopcovehoinon.mp3";obj1_1=document.getElementById("audio");obj1_1.load();obj1_1.play();return "";
        }
        else
        {
            obj1_1.src="./batxene.mp3";obj1_1=document.getElementById("audio");obj1_1.load();obj1_1.play();return "";
        }
    }
    else
    {
        if(thamso==6&&thamso1>6)
            return "Lên tốt.";
        if(thamso==6&&thamso1<6)
        {
            obj1_1.src="./lentot.mp3";obj1_1=document.getElementById("audio");obj1_1.load();obj1_1.play();return "";
        }
        if(thamso==7&&thamso1>5)
        {
            obj1_1.src="./minhlaiphaianthoi.mp3";obj1_1=document.getElementById("audio");obj1_1.load();obj1_1.play();return "";
        }
        if(thamso==7&&thamso1<=5)
        {
            obj1_1.src="./dungcoduavoiquantotcuaminh.mp3";obj1_1=document.getElementById("audio");obj1_1.load();obj1_1.play();return "";
        }
    }
}
function subnumber()
{
    var obj1_1=document.getElementById("checkbox3Input");
    if (obj1_1.checked){
        var obj1_2=document.getElementById("div7_1");
        obj1_2.style.opacity="1";obj1_2.style.zIndex="9";
        obj1_2=document.getElementById("div7_2");
        obj1_2.style.opacity="1";obj1_2.style.zIndex="9";
    }
    else{
        var obj1_2=document.getElementById("div7_1");
        obj1_2.style.opacity="0";obj1_2.style.zIndex="0";
        obj1_2=document.getElementById("div7_2");
        obj1_2.style.opacity="0";obj1_2.style.zIndex="0";
    }
}