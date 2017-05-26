/**
 * @fileoverview toast 提示层
 * @version 1.0 | 2016-01-06 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * @return
 * */
 define(['$','COREUI/ui.layer','libclassdesign/workerControl'],function($,Layer,WorkerControl){

     var workerControl = new WorkerControl();

     function createToast(worker){
         worker.toast = new Layer({
             layer: {
                 classname: 'coreui-g-layer coreui-g-layer-toast'
             },
             mask: {
                 bgcolor: 'rgba(255,255,255,0.6)' //背景色
             }
         });

         worker.toast.hideaftercal.add(function(){
             worker.toast.destroy();
             worker.toast = null;
         });

         return worker.toast;
     }


     return {
         show: function(content,hideaftercal){
             var toast = createToast(workerControl.get());
             toast.setContent(content);
             toast.hideaftercal.add(function(){
                 if(typeof hideaftercal == 'function'){
                     hideaftercal();
                 }
             });
             toast.show();
             setTimeout(function(){
                 toast.hide();
             },2000);
         }
     }
 });
