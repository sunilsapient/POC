'use strict';


(function () {
    $('.bandSection').foundation();

    //attachinbg event handler
    var config = {
        'rock':{
            'firstBand':10,
            'secondBand':8,
            'thirdBand':12,
            'fourthBand':9,
            'fifthBand':6
        },
        'pop':{
            'firstBand':11,
            'secondBand':7,
            'thirdBand':3,
            'fourthBand':12,
            'fifthBand':4
        },
        'classical':{
            'firstBand':0,
            'secondBand':0,
            'thirdBand':-12,
            'fourthBand':-10,
            'fifthBand':7
        },
        'jazz':{
            'firstBand':11,
            'secondBand':-8,
            'thirdBand':-2,
            'fourthBand':12,
            'fifthBand':6
        }
    }

    $('.dropdown .bandSelect').on('click', function (event) {
        event.preventDefault();
        $('.firstBand').find('.slider-handle').css('top',calcTop(config[$(event.target).attr('bandKey')].firstBand));
        $('.firstBand').css('background-color',calcRGB(config[$(event.target).attr('bandKey')].firstBand));
        $('.firstBand').find('.slider-fill').css('background-color',calcRGB(config[$(event.target).attr('bandKey')].firstBand)); 

        $('.secondBand').find('.slider-handle').css('top',calcTop(config[$(event.target).attr('bandKey')].secondBand));
        $('.secondBand').css('background-color',calcRGB(config[$(event.target).attr('bandKey')].secondBand));
        $('.secondBand').find('.slider-fill').css('background-color',calcRGB(config[$(event.target).attr('bandKey')].secondBand)); 

        $('.thirdBand').find('.slider-handle').css('top',calcTop(config[$(event.target).attr('bandKey')].thirdBand));
        $('.thirdBand').css('background-color',calcRGB(config[$(event.target).attr('bandKey')].thirdBand));
        $('.thirdBand').find('.slider-fill').css('background-color',calcRGB(config[$(event.target).attr('bandKey')].thirdBand)); 

        $('.fourthBand').find('.slider-handle').css('top',calcTop(config[$(event.target).attr('bandKey')].fourthBand));
        $('.fourthBand').css('background-color',calcRGB(config[$(event.target).attr('bandKey')].fourthBand));
        $('.fourthBand').find('.slider-fill').css('background-color',calcRGB(config[$(event.target).attr('bandKey')].fourthBand)); 

        $('.fifthBand').find('.slider-handle').css('top',calcTop(config[$(event.target).attr('bandKey')].fifthBand));
        $('.fifthBand').css('background-color',calcRGB(config[$(event.target).attr('bandKey')].fifthBand));
        $('.fifthBand').find('.slider-fill').css('background-color',calcRGB(config[$(event.target).attr('bandKey')].fifthBand)); 

        function calcTop(band) {
            return 44.44 + (band/12)*44.44 + '%';
        } 
        
    });

    $('.vertical').on('moved.zf.slider', function (event) {
        console.log($(this).find('input').val());
        $(this).css('background-color',calcRGB($(this).find('input').val()));
        $(this).find('.slider-fill').css('background-color',calcRGB($(this).find('input').val()));      
    });

    function calcRGB(value) {
        if(value == 6) {
            return 'rgb(255,255,0)';
        }
        if(value == 0) {
            return 'rgb(0,255,0)';
        }
        return 'rgb(' + (value/12)*255 + ',' + ((12-value)/12)*255 + ',' + ((12-value)/12)*255 + ')';
    } 
}());