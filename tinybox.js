/**
 * tinybox 小小弹窗
 * 参数说明
 * title 标题
 * width 宽
 * height 高
 * message 弹窗内容
 * container 容器
 * @param {Object} $
 */
(function ($) {
	$.extend({
		//定义一个弹窗函数  tinybox
		tinybox:function(options){
			
			//默认参数
			var defaults = {
	            title: "弹出窗口", //窗口标题
	            width: 660,
	            height: 360,
	            message:'',
	            container: "body" //容器
	        };
	        
	        //弹窗dom模板
            var templates = {
			    dialog:
			      '<div><div class="theme-popover modal">' +
			            '<div class="theme-popbod dform modal-body"></div>' +
			      '</div>' +
			      '<div class="theme-popover-mask"></div></div>',
			    header:
			      '<div class="theme-poptit">' +
			        '<a href="javascript:;" title="关闭" class="close">×</a>' +
			        '<h3 class="modal-title">&nbsp;</h3>' +
			      '</div>',
			    footer:
			      '<div class="modal-footer"></div>',
			    closeButton:
			      '<button type="button" class="bootbox-close-button close" data-dismiss="modal" aria-hidden="true">&times;</button>',
			    form:
			      '<form class="bootbox-form"></form>'
			};
	
			//打开弹出层
	        var openDialog = function(options){
	        	var dialog = $(templates.dialog); 
	        	var modal = dialog.find(".modal");
	        	modal.width(options.width);
	        	modal.height(options.height);
	        	
	    		var body = dialog.find(".modal-body");
	    		body.html(options.message);
	    		
	    		body.before(templates.header);
			    if(options.title) {
			      dialog.find(".modal-title").html(options.title);
			    }
			    
			    $(options.container).append(dialog.html());
			    $('.theme-popover-mask').fadeIn(100);
				$('.theme-popover').slideDown(200);
	        }
	       
			//关闭弹出层
		    var closeDialog = function() {
		        $('.theme-popover-mask').fadeOut(100);
				$('.theme-popover').slideUp(200);
				$(".theme-popover").remove();
		        $(".theme-popover-mask").remove();
		    }
	    
			options = $.extend({}, defaults, options);//以传参覆盖
			if (!options.message) {
		      throw new Error("Please specify a message"); //内容是空则抛出异常
		    }
			openDialog(options);//调用打开弹出层函数
			
			 $(".theme-poptit .close").bind("click", function () { closeDialog(); }); //绑定关闭动作
		}
		
		
		
	})
})(jQuery);