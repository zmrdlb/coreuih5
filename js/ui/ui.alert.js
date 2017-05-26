/**
 * @fileoverview 公共alert弹层
 * @version 1.0 | 2016-11-14 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * @return
 * */
define(['$','liblayers/alertSingle','text!COREUI/ui.alert.html'],function($,AlertSingle,Tpl){
    AlertSingle.hidedestroy = false;

    AlertSingle.setconfig({
        layer: {
            classname: 'coreui-g-layer coreui-g-warnlayer coreui-g-layer-alert',
            custom: {
                hide: function(layer){
                    layer.removeClass('show-up').addClass('hide-up');
                    setTimeout(function(){
                        layer.hide();
                        AlertSingle.destroy();
                    },300);
                }
            }
        },
        mask: {
            classname: 'coreui-g-mask',
            custom: {
                hide: function(mask){
                    mask.removeClass('show');
                    setTimeout(function(){
                        mask.hide();
                    },300);
                },
                show: function(mask){
                    mask.show().addClass('show');
                }
            }
        },
        alert: {
            frametpl: Tpl
        }
    });

    AlertSingle.createcal.add(function(layerobj){
        layerobj.layer.addClass('hide-up');

        layerobj.pos.poscal.add(function(){
            layerobj.layer.removeClass('hide-up').addClass('show-up');
        });
    });

    return AlertSingle;
});
