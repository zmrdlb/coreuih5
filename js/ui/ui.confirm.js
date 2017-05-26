/**
 * @fileoverview 公共confirm弹层
 * @version 1.0 | 2017-01-06 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * @return
 * */
define(['$','liblayers/confirmSingle','text!COREUI/ui.confirm.html'],function($,ConfirmSingle,Tpl){
    ConfirmSingle.hidedestroy = false;

    ConfirmSingle.setconfig({
        layer: {
            classname: 'coreui-g-layer coreui-g-warnlayer coreui-g-layer-confirm',
            custom: {
                hide: function(layer){
                    layer.removeClass('show-up').addClass('hide-up');
                    setTimeout(function(){
                        layer.hide();
                        ConfirmSingle.destroy();
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
        confirm: {
            frametpl: Tpl
        }
    });

    ConfirmSingle.createcal.add(function(layerobj){
        layerobj.layer.addClass('hide-up');

        layerobj.pos.poscal.add(function(){
            layerobj.layer.removeClass('hide-up').addClass('show-up');
        });
    });

    return ConfirmSingle;
});
