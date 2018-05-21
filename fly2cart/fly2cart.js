$(document).ready(function(){
  //初始化 两个控件的位置
  var shopCart,endY,endX,startY,startX
  endY=$("#shopCart").offset().top+$("#shopCart").innerHeight()/2
  endX=$("#shopCart").offset().left
  startY=$("#addBtn").offset().top-$("#addBtn").innerHeight()
  startX=$("#addBtn").offset().left+$("#addBtn").innerWidth()/2-10

  //当屏幕被拖动改变大小的时候，重置位置
  $(window).resize(function(){
    endY=$("#shopCart").offset().top+$("#shopCart").innerHeight()/2
    endX=$("#shopCart").offset().left
    startY=$("#addBtn").offset().top-$("#addBtn").innerHeight()
    startX=$("#addBtn").offset().left+$("#addBtn").innerWidth()/2-10
  })

  //当滚动条被拖动的时候，重置位置
  $(window).on('scroll',function(){
    endY=$("#shopCart").offset().top+$("#shopCart").innerHeight()/2
    endX=$("#shopCart").offset().left
    startY=$("#addBtn").offset().top-$("#addBtn").innerHeight()
    startX=$("#addBtn").offset().left+$("#addBtn").innerWidth()/2-10
  })
  
  //添加购物车按钮动作
  $("#addBtn").click(function(){
    //防止多次点击按钮
    $(this).attr("disabled","true")

    //初始化飞行小球
    var flagDiv=$('<div></div>')
    flagDiv.attr('id','flag')
    flagDiv.addClass('flag')
    flagDiv.appendTo('body')

    //飞行动画
    $("#flag").fly({
      start:{
        left:startX,
        top:startY
      },
      end:{
        left:endX,
        top:endY,
        width:20,
        height:20
      },
      speed:1,
      vertex_Rtop: 1,
      onEnd:function(){
        $('#flag').remove()
        $("#addBtn").removeAttr("disabled");
      }
    })
  })
})