/*eslint-disable */
/*布局尺寸以设计稿为基准等比例设置:基于--[rem]*/
(function (doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        if(!clientWidth) return;
        if(clientWidth>=768){
            docEl.style.fontSize = '100px';
        }else{
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        }
    };
    if(!doc.addEventListener){
    	return false;	
    }
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);