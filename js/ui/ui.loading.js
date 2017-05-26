/**
 * @fileoverview loading 提示层
 * @version 1.0 | 2016-01-06 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * @return
 * */
 define(['$','COREUI/ui.layer','libclassdesign/workerControl'],function($,Layer,WorkerControl){

     var workerControl = new WorkerControl();

     function createLoading(worker){
         worker.loading = new Layer({
             layer: {
                 classname: 'coreui-g-layer coreui-g-layer-loading'
             },
             mask: {
                 bgcolor: 'transparent' //背景色
             }
         });

         worker.loading.hideaftercal.add(function(){
             worker.loading.destroy();
             worker.loading = null;
         });

         return worker.loading;
     }


     return {
         show: function(){
             var loading = createLoading(workerControl.get());
             loading.show();
         },
         hide: function(){
             var worker = workerControl.end();
             if(worker){
                 worker.loading.hide();
             }
         }
     }
 });
