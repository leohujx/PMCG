var wId = "w";
 var index = 0;
 var startX = 0, startY = 0;
 var flag = false;
 var retcLeft = "0px", retcTop = "0px", retcHeight = "0px", retcWidth = "0px";
 var offsetX1 = 0, offsetX2 = 0, offsetY1 = 0, offsetY2 = 0; 
function getjsondata(){
/********** 以下获取json数据******************/
$.ajaxSetup({ async: false});
	$.getJSON(dataroot1,function(data){
	$.each(data.nodes, function(i,item){
	nodes[i]=item;
	nodes[i].dx = parseFloat(nodes[i].dx)+800;
	nodes[i].dy = parseFloat(nodes[i].dy)+800;

	});

	$.each(data.links, function(i,item){
	links[i]=item;
	links[i].source = parseInt(links[i].source);
	links[i].target = parseInt(links[i].target);
	});

	});


var a = function(id){
  return document.getElementById(id);
 };
	// console.log(nodes);
	// console.log(links);
	/*
if(figtype==1){
	$.ajaxSetup({ async: false});
	$.getJSON(dataroot1,function(data){
	$.each(data.nodes, function(i,item){
	nodes[i]=item;
	console.log(item);
	//node[i].dx = parseFloat(node[i].dx)+800;
	//node[i].dy = parseFloat(node[i].dy)+800;
	});

	$.each(data.links, function(i,item){
	links[i]=item;
	links[i].source = parseInt(links[i].source);
	links[i].target = parseInt(links[i].target);
	});

	});
}

else if(figtype==2){
	$.ajaxSetup({ async: false});
	$.getJSON(dataroot2,function(data){
	$.each(data.nodes, function(i,item){
	//nodes[i]=item;
	if(typeof(item.label) != 'undefined'){
	var obj = new Object();
	obj.dx=item.x+800;
	obj.dy=item.y+800;
	obj.name=item.id;
    obj.classnamemethod="class:"+item.attributes.class_name +" method:"+item.attributes.method_name;
	if(item.attributes.related == 10){
	obj.conv = "1";
	}else{
	obj.conv = "0";
	}
	obj.rela = item.attributes.unique;
	obj.type = item.attributes.type_class;
	obj.code = item.attributes.code;
	nodes[parseInt(item.id)] =obj;
	}
	});

	$.each(data.edges, function(i,item){
	//$.each(data.links, function(i,item){
	//links[i]=item;
	var obj = new Object();
	obj.type = "0";
	obj.source = parseInt(item.source);
	obj.target = parseInt(item.target);
	links[i]=obj;
	links[i].source = parseInt(links[i].source);
	links[i].target = parseInt(links[i].target);
	});

	});
}
else{
	console.log("Error reading data");
} */

/***************over*****************/

};

function d3layout(labeltype){
/***************定义力引导布局图*****************/
if(figtype == 1){
	 force = d3.layout.force()//layout将json格式转化为力学图可用的格式
    .nodes(d3.values(nodes))//设定节点数组
    .links(links)//设定连线数组
    .size([width, height])//作用域的大小
    .linkDistance(90)//连接线长度
    .charge(-500)//顶点的电荷数。该参数决定是排斥还是吸引，数值越小越互相排斥
    .on("tick", tick)//指时间间隔，隔一段时间刷新一次画面
    .start();//开始转换
}else if(figtype == 2){
	force = d3.layout.force()//layout将json格式转化为力学图可用的格式
    .nodes(nodes)//设定节点数组
    .links(links)//设定连线数组
	//.on("tick", tick)//指时间间隔，隔一段时间刷新一次画面
	.start();//开始转换
}else{
	console.log("Definition force error");
}

var svg = d3.select("#d3layout").append("svg")
    .attr("id","svgID")
    .style("width", width)
    .style("height", height)
    .style("margin-left", "50px");

//箭头  lineColor="#FF0000" 1	    lineColor="#558ED5";  2
var marker=
    svg.append("marker")
    //.attr("id", function(d) { return d; })
    .attr("id", "resolved00")
    //.attr("markerUnits","strokeWidth")//设置为strokeWidth箭头会随着线的粗细发生变化
    .attr("markerUnits","userSpaceOnUse")
    .attr("viewBox", "0 -5 10 10")//坐标系的区域
    .attr("refX",13.5)//箭头坐标
    .attr("refY", -1)
    .attr("markerWidth", 12)//标识的大小
    .attr("markerHeight", 12)
    .attr("orient", "auto")//绘制方向，可设定为：auto（自动确认方向）和 角度值
    .attr("stroke-width",2)//箭头宽度
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")//箭头的路径
    .attr('fill','#000000');//箭头颜色
var marker=
    svg.append("marker")
    //.attr("id", function(d) { return d; })
    .attr("id", "resolved01")
    //.attr("markerUnits","strokeWidth")//设置为strokeWidth箭头会随着线的粗细发生变化
    .attr("markerUnits","userSpaceOnUse")
    .attr("viewBox", "0 -5 10 10")//坐标系的区域
    .attr("refX",20)//箭头坐标
    .attr("refY", -1)
    .attr("markerWidth", 12)//标识的大小
    .attr("markerHeight", 12)
    .attr("orient", "auto")//绘制方向，可设定为：auto（自动确认方向）和 角度值
    .attr("stroke-width",2)//箭头宽度
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")//箭头的路径
    .attr('fill','#000000');//箭头颜色
var marker=
    svg.append("marker")
    //.attr("id", function(d) { return d; })
    .attr("id", "resolved02")
    //.attr("markerUnits","strokeWidth")//设置为strokeWidth箭头会随着线的粗细发生变化
    .attr("markerUnits","userSpaceOnUse")
    .attr("viewBox", "0 -5 10 10")//坐标系的区域
    .attr("refX",30)//箭头坐标
    .attr("refY", -1)
    .attr("markerWidth", 12)//标识的大小
    .attr("markerHeight", 12)
    .attr("orient", "auto")//绘制方向，可设定为：auto（自动确认方向）和 角度值
    .attr("stroke-width",2)//箭头宽度
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")//箭头的路径
    .attr('fill','#000000');//箭头颜色
var marker=
    svg.append("marker")
    //.attr("id", function(d) { return d; })
    .attr("id", "resolved03")
    //.attr("markerUnits","strokeWidth")//设置为strokeWidth箭头会随着线的粗细发生变化
    .attr("markerUnits","userSpaceOnUse")
    .attr("viewBox", "0 -5 10 10")//坐标系的区域
    .attr("refX",34)//箭头坐标
    .attr("refY", -1)
    .attr("markerWidth", 12)//标识的大小
    .attr("markerHeight", 12)
    .attr("orient", "auto")//绘制方向，可设定为：auto（自动确认方向）和 角度值
    .attr("stroke-width",2)//箭头宽度
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")//箭头的路径
    .attr('fill','#000000');//箭头颜色
var marker=
    svg.append("marker")
    //.attr("id", function(d) { return d; })
    .attr("id", "resolved10")
    //.attr("markerUnits","strokeWidth")//设置为strokeWidth箭头会随着线的粗细发生变化
    .attr("markerUnits","userSpaceOnUse")
    .attr("viewBox", "0 -5 10 10")//坐标系的区域
    .attr("refX",13.5)//箭头坐标
    .attr("refY", -1)
    .attr("markerWidth", 12)//标识的大小
    .attr("markerHeight", 12)
    .attr("orient", "auto")//绘制方向，可设定为：auto（自动确认方向）和 角度值
    .attr("stroke-width",2)//箭头宽度
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")//箭头的路径
    .attr('fill','#FF0000');//箭头颜色
var marker=
    svg.append("marker")
    //.attr("id", function(d) { return d; })
    .attr("id", "resolved11")
    //.attr("markerUnits","strokeWidth")//设置为strokeWidth箭头会随着线的粗细发生变化
    .attr("markerUnits","userSpaceOnUse")
    .attr("viewBox", "0 -5 10 10")//坐标系的区域
    .attr("refX",20)//箭头坐标
    .attr("refY", -1)
    .attr("markerWidth", 12)//标识的大小
    .attr("markerHeight", 12)
    .attr("orient", "auto")//绘制方向，可设定为：auto（自动确认方向）和 角度值
    .attr("stroke-width",2)//箭头宽度
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")//箭头的路径
    .attr('fill','#FF0000');//箭头颜色
var marker=
    svg.append("marker")
    //.attr("id", function(d) { return d; })
    .attr("id", "resolved12")
    //.attr("markerUnits","strokeWidth")//设置为strokeWidth箭头会随着线的粗细发生变化
    .attr("markerUnits","userSpaceOnUse")
    .attr("viewBox", "0 -5 10 10")//坐标系的区域
    .attr("refX",24)//箭头坐标
    .attr("refY", -1)
    .attr("markerWidth", 12)//标识的大小
    .attr("markerHeight", 12)
    .attr("orient", "auto")//绘制方向，可设定为：auto（自动确认方向）和 角度值
    .attr("stroke-width",2)//箭头宽度
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")//箭头的路径
    .attr('fill','#FF0000');//箭头颜色
var marker=
    svg.append("marker")
    //.attr("id", function(d) { return d; })
    .attr("id", "resolved13")
    //.attr("markerUnits","strokeWidth")//设置为strokeWidth箭头会随着线的粗细发生变化
    .attr("markerUnits","userSpaceOnUse")
    .attr("viewBox", "0 -5 10 10")//坐标系的区域
    .attr("refX",30)//箭头坐标
    .attr("refY", -1)
    .attr("markerWidth", 12)//标识的大小
    .attr("markerHeight", 12)
    .attr("orient", "auto")//绘制方向，可设定为：auto（自动确认方向）和 角度值
    .attr("stroke-width",2)//箭头宽度
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")//箭头的路径
    .attr('fill','#FF0000');//箭头颜色
var marker=
    svg.append("marker")
    //.attr("id", function(d) { return d; })
    .attr("id", "resolved20")
    //.attr("markerUnits","strokeWidth")//设置为strokeWidth箭头会随着线的粗细发生变化
    .attr("markerUnits","userSpaceOnUse")
    .attr("viewBox", "0 -5 10 10")//坐标系的区域
    .attr("refX",13.5)//箭头坐标
    .attr("refY", -1)
    .attr("markerWidth", 12)//标识的大小
    .attr("markerHeight", 12)
    .attr("orient", "auto")//绘制方向，可设定为：auto（自动确认方向）和 角度值
    .attr("stroke-width",2)//箭头宽度
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")//箭头的路径
    .attr('fill','#558ED5');//箭头颜色
var marker=
    svg.append("marker")
    //.attr("id", function(d) { return d; })
    .attr("id", "resolved21")
    //.attr("markerUnits","strokeWidth")//设置为strokeWidth箭头会随着线的粗细发生变化
    .attr("markerUnits","userSpaceOnUse")
    .attr("viewBox", "0 -5 10 10")//坐标系的区域
    .attr("refX",20)//箭头坐标
    .attr("refY", -1)
    .attr("markerWidth", 12)//标识的大小
    .attr("markerHeight", 12)
    .attr("orient", "auto")//绘制方向，可设定为：auto（自动确认方向）和 角度值
    .attr("stroke-width",2)//箭头宽度
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")//箭头的路径
    .attr('fill','#558ED5');//箭头颜色
var marker=
    svg.append("marker")
    //.attr("id", function(d) { return d; })
    .attr("id", "resolved22")
    //.attr("markerUnits","strokeWidth")//设置为strokeWidth箭头会随着线的粗细发生变化
    .attr("markerUnits","userSpaceOnUse")
    .attr("viewBox", "0 -5 10 10")//坐标系的区域
    .attr("refX",26)//箭头坐标
    .attr("refY", -1)
    .attr("markerWidth", 12)//标识的大小
    .attr("markerHeight", 12)
    .attr("orient", "auto")//绘制方向，可设定为：auto（自动确认方向）和 角度值
    .attr("stroke-width",2)//箭头宽度
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")//箭头的路径
    .attr('fill','#558ED5');//箭头颜色
var marker=
    svg.append("marker")
    //.attr("id", function(d) { return d; })
    .attr("id", "resolved22")
    //.attr("markerUnits","strokeWidth")//设置为strokeWidth箭头会随着线的粗细发生变化
    .attr("markerUnits","userSpaceOnUse")
    .attr("viewBox", "0 -5 10 10")//坐标系的区域
    .attr("refX",30)//箭头坐标
    .attr("refY", -1)
    .attr("markerWidth", 12)//标识的大小
    .attr("markerHeight", 12)
    .attr("orient", "auto")//绘制方向，可设定为：auto（自动确认方向）和 角度值
    .attr("stroke-width",2)//箭头宽度
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")//箭头的路径
    .attr('fill','#558ED5');//箭头颜色



//设置连接线
    edges_line = svg.selectAll(".edgepath")
    .data(force.links())
    .enter()
    .append("path")
    .attr({
          'd': function(d) {
			  if(figtype == 1){
				  return 'M '+d.source.x+' '+d.source.y+' L '+ d.target.x +' '+d.target.y
			  }else if(figtype == 2){
				  return 'M '+d.source.dx+' '+d.source.dy+' L '+ d.target.dx +' '+d.target.dy
			  }else{
				  console.log("error setting edges_line")
			  }

			  },
          'class':'edgepath',
          //'fill-opacity':0,
          //'stroke-opacity':0,
          //'fill':'blue',
          //'stroke':'red',
          'id':function(d,i) {return 'edgepath'+i;}})
    .style("stroke",function(link){
	     //console.log(link);
         var lineColor;
         //根据关系的不同设置线条颜色
		 if(link.type == "1"){
		    lineColor="#FF0000";
		 }else if(link.type == "2"){
		    lineColor="#558ED5";
		 }else{
		    lineColor="#000000";
		 }

		 /*
         if(d.rela=="上位产品" || d.rela=="上游" || d.rela=="下位产品"){
             lineColor="#A254A2";
         }else if(d.rela=="主营产品"){
             lineColor="#B43232";
         }*/
         return lineColor;
     })
    .style("pointer-events", "none")
    .style("stroke-width",0.5)//线条粗细
    //.attr("marker-end", "url(#resolved)" );//根据箭头标记的id号标记箭头
	.attr("marker-end", function(link){
	//console.log(link);
	if(link.type=="0"){
	if(link.target.conv=="0"){
		    if(link.target.type=="0"){
			return "url(#resolved00)";
			}else if(link.target.type=="7"||link.target.type=="8"||link.target.type=="9"||link.target.type=="10"||link.target.type=="11"){
			return "url(#resolved02)";
			}else {
			return "url(#resolved01)";
			}
		    //console.log(link.target.name);

		 }else{
		   return "url(#resolved03)";
		 }
	}
	if(link.type=="1"){
	if(link.target.conv=="0"){
		    if(link.target.type=="0"){
			return "url(#resolved10)";
			}else if(link.target.type=="7"||link.target.type=="8"||link.target.type=="9"||link.target.type=="10"||link.target.type=="11"){
			return "url(#resolved12)";
			}else {
			return "url(#resolved11)";
			}
		    //console.log(link.target.name);

		 }else{
		   return "url(#resolved13)";
		 }
	}
	if(link.type=="2"){
	//console.log(link);
	if(link.target.conv=="0"){
		    if(link.target.type=="0"){
			return "url(#resolved20)";
			}else if(link.target.type=="7"||link.target.type=="8"||link.target.type=="9"||link.target.type=="10"||link.target.type=="11"){
			return "url(#resolved22)";
			}else {
			return "url(#resolved21)";
			}
		    //console.log(link.target.name);

		 }else{
		   return "url(#resolved23)";
		 }
	}
	     //console.log(link.target.type);
		 //console.log(link.type1);

	} );

    edges_text = svg.append("g").selectAll(".edgelabel")
.data(force.links())
.enter()
.append("text")
.style("pointer-events", "none")
//.attr("class","linetext")
.attr({  'class':'edgelabel',
               'id':function(d,i){return 'edgepath'+i;},
               'dx':80,
               'dy':0
               //'font-size':10,
               //'fill':'#aaa'
               });

//设置线条上的文字
edges_text.append('textPath')
.attr('xlink:href',function(d,i) {return '#edgepath'+i})
.style("pointer-events", "none")
.text(function(d){return d.rela;});

var e2 = $('#codes');
//console.log(e2);
var dia = $('#dialog-confirm');
//console.log(dia);
//圆圈
circle = svg.append("g").selectAll("circle")
    .data(force.nodes())//表示使用force.nodes数据
    .enter().append("circle")
    .style("fill",function(node){
        var color;//圆圈背景色
		//normal D9D9D9
		//caller A6A6A6
		//event 558ED5
		//get ff0000
		//send 953735
		//else FFFF00
		//Adware 00B050
		//JNI F03CB0
		if(node.type == "0" || node.type == "3"){
		    color = "#D9D9D9";
		}else if(node.type =="1"||node.type =="2"||node.type =="6"||node.type =="5"){
		    color = "#A6A6A6";
		}else if(node.type =="4"){
		    color = "#558ED5";
		}else if(node.type =="7"){
		    color = "#00B050";
		}else if(node.type =="8"){
		    color = "#F03CB0";
		}else if(node.type =="9"){
		    color = "#953735";
		}else if(node.type =="10"){
		    color = "#FF0000";
		}else if(node.type =="11"){
		    color = "#FFFF00";
		}
        return color;
    })
    .style('stroke',function(node){
        var color;//圆圈线条的颜色
		/*
        var link=links[node.index];
        if(node.name==link.source.name && link.rela=="主营产品"){
            color="#B43232";
        }else{
            color="#A254A2";
        }*/
		color="#000000";
        return color;
    })
	//设置圆圈半径
    .attr("r", function(node){
	    var size;
	    if(node.type == "0"){
		    size = "6";
		}else if(node.type == "7"||node.type == "8"||node.type == "9"||node.type == "10"||node.type == "11"){
		    size = "24";
		}else{
		    size = "12";
		}
		if(node.conv == "1"){
		   size = "36";
		}
		return size;
	})
	.attr("cx",function(node){
	    //console.log(node.dx);
		if(figtype == 2){
			return node.dx;
		}
	})
	.attr("cy",function(node){
	    if(figtype == 2){
			return node.dy;
		}
	})
	.on("dblclick",function(node){
	//alert(node.classnamemethod+node.code);
	// console.log(node.code);
	//TODO: remove the comment
	document.getElementById('codes').innerHTML = node.code;

    //var el = d3.select("body").select("#codes");
	//var el = $('#codes');
	//console.log(el);
	//console.log(e2);
        //TODO: remove the comment
    e2.html(e2.html().replace(/{/ig, '{&nbsp;'));
    e2.html(e2.html().replace(/;/ig, ';<br>&nbsp;&nbsp;&nbsp;&nbsp;'));

	//console.log(d3.select("body").select('#dialog-confirm'));
    //d3.select("body").select('#dialog-confirm').dialog(
        //TODO: remove the comment
     dia.modal('show');
    // dia.dialog(
    // { height : 300,
    //   width : 1000,
    //   resizable:false,
    // });
        //d3.select(this).style('stroke-width',2);
    })

    .on("click",function(node){
        //单击时让连接线加粗
        edges_line.style("stroke-width",function(line){
            //console.log(line);
            if(line.source.name==node.name || line.target.name==node.name){
                return 4;
            }else{
                return 0.5;
            }
        });
        //d3.select(this).style('stroke-width',2);
    })

    .call(force.drag);//将当前选中的元素传到drag函数中，使顶点可以被拖动


  //圆圈的提示文字

    circle.append("svg:title")
    //circle.append("text")
        .text(function(node) {
            var link=links[node.index];
			//console.log(node.rela);
			return node.rela;
         })
		 .style('stroke',"#000000")
		 ;

    text = svg.append("g").selectAll("text")
    .data(force.nodes())
    //返回缺失元素的占位对象（placeholder），指向绑定的数据中比选定元素集多出的一部分元素。
    .enter()
    .append("text")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")//在圆圈中加上数据
	.attr("x",function(node){
	    if(figtype ==2){
			return node.dx;
		}
	})
	.attr("y",function(node){
	    if(figtype ==2){
			return node.dy;
		}
	})
    .style('fill',function(node){
        var color;//文字颜色
        var link=links[node.index];
		color="#000000";
		/*
        if(node.name==link.source.name && link.rela=="主营产品"){
            color="#B43232";
        }else{
            color="#A254A2";
        }*/
        return color;
    })
        .style('font-size', function (node) {
                return "12px";
         })
        //直接显示文字
        .text(function(d) {
		if(labeltype==1){
		    return d.name
		}else if(labeltype==2){
		    return d.name;
		//return d.name+":"+d.rela;
		}else if(labeltype==3){
			return d.rela;
		}
    });
/***************over*****************/
};


function tick() {
  circle.attr("transform", transform1);//圆圈
  text.attr("transform", transform2);//顶点文字
  edges_line.attr('d', function(d) {
      if(figtype ==1){
		  var path='M '+d.source.x+' '+d.source.y+' L '+ d.target.x +' '+d.target.y;
	  }else if(figtype ==2){
		  var path='M '+d.source.dx+' '+d.source.dy+' L '+ d.target.dx +' '+d.target.dy;
	  }else{
		  console.log("error in tick() edges_line.attr")
	  }
      return path;
  });
  edges_text.attr('transform',function(d,i){
	    if(figtype == 1){
			if (d.target.x<d.source.x){
            bbox = this.getBBox();
            rx = bbox.x+bbox.width/2;
            ry = bbox.y+bbox.height/2;
            return 'rotate(180 '+rx+' '+ry+')';
            }
            else {
            return 'rotate(0)';
            }
		}else if(figtype == 2){
			if (d.target.dx<d.source.dx){
            bbox = this.getBBox();
            rx = bbox.x+bbox.width/2;
            ry = bbox.y+bbox.height/2;
            return 'rotate(180 '+rx+' '+ry+')';
            }
            else {
            return 'rotate(0)';
            }
		}else {
			console.log("error in tick() edges_text.attr")
		}

   });
}

//设置连接线的坐标,使用椭圆弧路径段双向编码
function linkArc(d) {
  return 'M '+d.source.x+' '+d.source.y+' L '+ d.target.x +' '+d.target.y
}
//设置圆圈和文字的坐标
function transform1(d) {
	if(figtype == 1){
		return "translate(" + d.x + "," + d.y + ")";
	}else if(figtype == 2){
		return "translate(" + d.dx + "," + d.dy + ")";
	}else{
		console.log("error in transform1")
	}

}
function transform2(d) {
	if(figtype == 1){
		return "translate(" + d.x + "," + d.y + ")";
	}else if(figtype == 2){
		return "translate(" + d.dx + "," + d.dy + ")";
	}else{
		console.log("error in transform2")
		return "translate(" + (d.x) + "," + d.y + ")";
	}
}

/*
function tick() {
  circle.attr("transform", transform1);//圆圈
  text.attr("transform", transform2);//顶点文字
  edges_line.attr('d', function(d) {
      var path='M '+d.source.dx+' '+d.source.dy+' L '+ d.target.dx +' '+d.target.dy;
      return path;
  });
  edges_text.attr('transform',function(d,i){
        if (d.target.x<d.source.x){
            bbox = this.getBBox();
            rx = bbox.x+bbox.width/2;
            ry = bbox.y+bbox.height/2;
            return 'rotate(180 '+rx+' '+ry+')';
        }
        else {
            return 'rotate(0)';
        }
   });
}

//设置连接线的坐标,使用椭圆弧路径段双向编码
function linkArc(d) {
  return 'M '+d.source.dx+' '+d.source.dy+' L '+ d.target.dx +' '+d.target.dy
}
//设置圆圈和文字的坐标
function transform1(d) {
  return "translate(" + d.dx + "," + d.dy + ")";
}
function transform2(d) {
  return "translate(" + (d.dx) + "," + d.dy + ")";
}
*/
function d3mousedown(e){
  if(!e)
  {
    var e = window.event;
  }
        //获取事件点击元素
  var targ = e.target;
        //获取元素名称
  var tname = targ.tagName; 
  if(tname=="svg")
  {
  flag = true;
  try{
   var evt = window.event || e;
   var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
   var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
   startX = evt.clientX + scrollLeft;
   startY = evt.clientY + scrollTop;
   offsetX1 = evt.offsetX;
   offsetY1 = evt.offsetY;
   index++;
   /************create the first div   id = Wn;**********************/
   var div = document.createElement("div");
   div.id = wId + index;
   div.className = "div";
   div.style.marginLeft = startX + "px";
   div.style.marginTop = startY + "px";
   document.body.appendChild(div);
  }catch(e1){
      console.log("error_onmousedown: " + e1);
  }
  }
  
  
 }
 function d3mouseup(e){
  try{
   var evt = window.event || e;
   var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
   var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
   /************create the 2nd div   id = Sn;**********************/
   var div = document.createElement("div");
   div.id = "retc";
   div.className = "div";

   div.style.marginLeft = retcLeft;
   div.style.marginTop = retcTop;
   
   div.style.width = retcWidth;
   div.style.height = retcHeight;
   //div.style.filter= "alpha(opacity:30)";   
   div.style.background = "#A254A2";
   div.style.color ="#ffffff";
   /************remove the first div   id = Wn;**********************/
   d3.select('body').select("#" + wId + index).remove();
   // document.body.removeChild($("#" + wId + index));
   console.log(wId + index);
   /************over**********************/
   //document.body.removeChild(a("retc"));document.body.appendChild(div);
   offsetX2 = evt.offsetX;
   offsetY2 = evt.offsetY;
   var x1 = Math.min(offsetX1,offsetX2);
   var x2 = Math.max(offsetX1,offsetX2);   
   var y1 = Math.min(offsetY1,offsetY2);
   var y2 = Math.max(offsetY1,offsetY2); 
   if(parseInt(div.style.width)>5)
   {
   var code = "";
   var name = "";
   nodes.forEach(function(e){
	   if(figtype ==1 ){
		   if((x1<=e.x)&&(e.x<=x2)&&(y1<=e.y)&&(e.y<=y2)){
			   name = name + e.name+ ";";
	           code = code +e.classnamemethod+";"+e.code;
	        }
	   }else if(figtype == 2){
		   if((x1<=e.dx)&&(e.dx<=x2)&&(y1<=e.dy)&&(e.dy<=y2)){
			   name = name + e.name+ ";";
	           code = code +e.classnamemethod+";"+e.code;
	        }
	   }
    
   });
   console.log(name);
   //document.body.removeChild(div);
   document.getElementById('codes').innerHTML = code;
   e2.html(e2.html().replace(/{/ig, '{&nbsp;'));
   e2.html(e2.html().replace(/;/ig, ';<br>&nbsp;&nbsp;&nbsp;&nbsp;'));
   dia.modal('show');
    // dia.dialog(
    // { height : 300,
    //   width : 1000,
    //   resizable:false,
    // });
    //
   }else{
   console.log("else click");
   //document.body.removeChild(a("retc"));
   }
   retcWidth = "0px";
   retcHeight = "0px";
  }catch(e1){
      console.log("error_onmouseup " + e1);
  }
  flag = false;
 }

 function d3mousemove(e){
  if(flag){
   try{
   var evt = window.event || e;
   var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
   var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
   retcLeft = (startX - evt.clientX - scrollLeft > 0 ? evt.clientX + scrollLeft : startX) + "px";
   retcTop = (startY - evt.clientY - scrollTop > 0 ? evt.clientY + scrollTop : startY) + "px";
   
   retcHeight = Math.abs(startY - evt.clientY - scrollTop) + "px";
   retcWidth = Math.abs(startX - evt.clientX - scrollLeft) + "px";

   // console.log(retcHeight);
   // console.log(retcWidth);
   /*
   retcLeft = (startX - evt.offsetX - scrollLeft > 0 ? evt.offsetX + scrollLeft : startX) + "px";
   retcTop = (startY - evt.offsetY - scrollTop > 0 ? evt.offsetY + scrollTop : startY) + "px";
   retcHeight = Math.abs(startY - evt.offsetY - scrollTop) + "px";
   retcWidth = Math.abs(startX - evt.offsetX - scrollLeft) + "px";
   */
   
   /************set the border of the first div   id = Wn;**********************/
   //a(wId + index).style.marginLeft = retcLeft;
   //a(wId + index).style.marginTop = retcTop;
   d3.select('body').select("#"+wId + index).style("width", retcWidth);
   d3.select('body').select("#"+wId + index).style("height", retcHeight);
   var div = $("#"+ wId + index);
   //console.log("first move:x="+div.style.marginLeft+" y="+div.style.marginTop+" width="+div.style.width+" height="+div.style.height+" id="+div.id);
   }catch(e1){
     console.log("error_onmousemove: " + e1);
   } 
  }
 }
