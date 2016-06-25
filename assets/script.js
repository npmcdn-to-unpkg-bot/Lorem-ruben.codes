/* jQuery Parallax */
!function(n){var t=n(window),o=t.height();t.resize(function(){o=t.height()}),n.fn.parallax=function(e,i,u){function r(){var u=t.scrollTop();h.each(function(){var t=n(this),r=t.offset().top,a=c(t);u>r+a||r>u+o||h.css("backgroundPosition",e+" "+Math.round((f-u)*i)+"px")})}var c,f,h=n(this);h.each(function(){f=h.offset().top}),c=u?function(n){return n.outerHeight(!0)}:function(n){return n.height()},(arguments.length<1||null===e)&&(e="50%"),(arguments.length<2||null===i)&&(i=.1),(arguments.length<3||null===u)&&(u=!0),t.bind("scroll",r).resize(function(){h.each(function(){f=h.offset().top}),r()}),r()}}(jQuery);

/* jQuery Viewport Checker */
!function(t){t.fn.viewportChecker=function(e){var o={classToAdd:"visible",classToRemove:"invisible",offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(t,e){},scrollHorizontal:!1};t.extend(o,e);var a=this,s={height:t(window).height(),width:t(window).width()},l=-1!=navigator.userAgent.toLowerCase().indexOf("webkit")?"body":"html";return this.checkElements=function(){var e,i;o.scrollHorizontal?(e=t(l).scrollLeft(),i=e+s.width):(e=t(l).scrollTop(),i=e+s.height),a.each(function(){var a=t(this),l={},n={};if(a.data("vp-add-class")&&(n.classToAdd=a.data("vp-add-class")),a.data("vp-remove-class")&&(n.classToRemove=a.data("vp-remove-class")),a.data("vp-offset")&&(n.offset=a.data("vp-offset")),a.data("vp-repeat")&&(n.repeat=a.data("vp-repeat")),a.data("vp-scrollHorizontal")&&(n.scrollHorizontal=a.data("vp-scrollHorizontal")),a.data("vp-invertBottomOffset")&&(n.scrollHorizontal=a.data("vp-invertBottomOffset")),t.extend(l,o),t.extend(l,n),!a.hasClass(l.classToAdd)||l.repeat){String(l.offset).indexOf("%")>0&&(l.offset=parseInt(l.offset)/100*s.height);var d=l.scrollHorizontal?Math.round(a.offset().left)+l.offset:Math.round(a.offset().top)+l.offset,r=l.scrollHorizontal?d+a.width():d+a.height();l.invertBottomOffset&&(r-=2*l.offset),i>d&&r>e?(a.removeClass(l.classToRemove),a.addClass(l.classToAdd),l.callbackFunction(a,"add")):a.hasClass(l.classToAdd)&&l.repeat&&(a.removeClass(l.classToAdd),l.callbackFunction(a,"remove"))}})},t(window).bind("load scroll touchmove MSPointerMove",this.checkElements),t(window).resize(function(e){s={height:t(window).height(),width:t(window).width()},a.checkElements()}),this.checkElements(),this}}(jQuery);

/* Atv-img.js */
function atvImg(){function e(e,t,a,r,n,o){var i=l.scrollTop||s.scrollTop,d=l.scrollLeft,c=t?e.touches[0].pageX:e.pageX,m=t?e.touches[0].pageY:e.pageY,v=a.getBoundingClientRect(),f=a.clientWidth||a.offsetWidth||a.scrollWidth,g=a.clientHeight||a.offsetHeight||a.scrollHeight,h=320/f,u=.52-(c-v.left-d)/f,p=.52-(m-v.top-i)/g,y=m-v.top-i-g/2,E=c-v.left-d-f/2,C=(u-E)*(.07*h),I=(y-p)*(.1*h),N="rotateX("+I+"deg) rotateY("+C+"deg)",x=Math.atan2(y,E),b=180*x/Math.PI-90;0>b&&(b+=360),-1!=a.firstChild.className.indexOf(" over")&&(N+=" scale3d(1.07,1.07,1.07)"),a.firstChild.style.transform=N,o.style.background="linear-gradient("+b+"deg, rgba(255,255,255,"+(m-v.top-i)/g*.4+") 0%,rgba(255,255,255,0) 80%)",o.style.transform="translateX("+u*n-.1+"px) translateY("+p*n-.1+"px)";for(var L=n,S=0;n>S;S++)r[S].style.transform="translateX("+u*L*(2.5*S/h)+"px) translateY("+p*n*(2.5*S/h)+"px)",L--}function t(e,t){t.firstChild.className+=" over"}function a(e,t,a,r,n){var l=t.firstChild;l.className=l.className.replace(" over",""),l.style.transform="",n.style.cssText="";for(var s=0;r>s;s++)a[s].style.transform=""}var r=document,n=r.documentElement,l=r.getElementsByTagName("body")[0],s=r.getElementsByTagName("html")[0],o=window,i=r.querySelectorAll(".atvImg"),d=i.length,c="ontouchstart"in o||navigator.msMaxTouchPoints;if(!(0>=d))for(var m=0;d>m;m++){var v=i[m],f=v.querySelectorAll(".atvImg-layer"),g=f.length;if(!(0>=g)){for(;v.firstChild;)v.removeChild(v.firstChild);var h=r.createElement("div"),u=r.createElement("div"),p=r.createElement("div"),y=r.createElement("div"),E=[];v.id="atvImg__"+m,h.className="atvImg-container",u.className="atvImg-shine",p.className="atvImg-shadow",y.className="atvImg-layers";for(var C=0;g>C;C++){var I=r.createElement("div"),N=f[C].getAttribute("data-img");I.className="atvImg-rendered-layer",I.setAttribute("data-layer",C),I.style.backgroundImage="url("+N+")",y.appendChild(I),E.push(I)}h.appendChild(p),h.appendChild(y),h.appendChild(u),v.appendChild(h);var x=v.clientWidth||v.offsetWidth||v.scrollWidth;v.style.transform="perspective("+3*x+"px)",c?(o.preventScroll=!1,function(r,n,l,s){v.addEventListener("touchmove",function(t){o.preventScroll&&t.preventDefault(),e(t,!0,r,n,l,s)}),v.addEventListener("touchstart",function(e){o.preventScroll=!0,t(e,r)}),v.addEventListener("touchend",function(e){o.preventScroll=!1,a(e,r,n,l,s)})}(v,E,g,u)):!function(r,n,l,s){v.addEventListener("mousemove",function(t){e(t,!1,r,n,l,s)}),v.addEventListener("mouseenter",function(e){t(e,r)}),v.addEventListener("mouseleave",function(e){a(e,r,n,l,s)})}(v,E,g,u)}}}

/* Script JS */

(function($){

    $.extend($.easing, {
        easeInOutCubic : function(x, t, b, c, d){
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        }
    });

    $.fn.outerFind = function(selector){
        return this.find(selector).addBack(selector);
    };

    (function(){
        
        var scrollbarWidth = 0, originalMargin, touchHandler = function(event){
            event.preventDefault();
        };

        function getScrollbarWidth(){
            if (scrollbarWidth) return scrollbarWidth;
            var scrollDiv = document.createElement('div');
            $.each({
                top : '-9999px',
                width  : '50px',
                height : '50px',
                overflow : 'scroll', 
                position : 'absolute'
            }, function(property, value){
                scrollDiv.style[property] = value;
            });
            $('body').append(scrollDiv);
            scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            $('body')[0].removeChild(scrollDiv);
            return scrollbarWidth;
        }

        $.fn.fullscreen = function(yes){
            if (yes){
                originalMargin = document.body.parentNode.style.marginRight || '';
                var fullWindowWidth = window.innerWidth;
                if (!fullWindowWidth){
                    var documentElementRect = document.documentElement.getBoundingClientRect();
                    fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
                }
                if (fullWindowWidth > document.body.clientWidth){
                    $('html').css({
                        'margin-right' : parseInt(($('html').css('margin-right') || 0), 10) + getScrollbarWidth(),
                        'overflow' : 'hidden'
                    }).addClass('mbr-hidden-scrollbar');
                }
                this.addClass('mbr-fullscreen');
                $(window).bind('touchmove', touchHandler).resize();
            } else {
                this.removeClass('mbr-fullscreen').css('height', '');
                $('html').css({
                    'margin-right' : originalMargin,
                    'overflow' : ''
                }).removeClass('mbr-hidden-scrollbar');
                $(window).unbind('touchmove', touchHandler);
            }
            return this;
        };

    })();

    $.isMobile = function(type){
        var reg = [];
        var any = {
            blackberry : 'BlackBerry',
            android : 'Android',
            windows : 'IEMobile',
            opera : 'Opera Mini',
            ios : 'iPhone|iPad|iPod'
        };
        type = 'undefined' == $.type(type) ? '*' : type.toLowerCase();
        if ('*' == type) reg = $.map(any, function(v){ return v; });
        else if (type in any) reg.push(any[type]);
        return !!(reg.length && navigator.userAgent.match(new RegExp(reg.join('|'), 'i')));
    };

    $(function(){

        $('html').addClass($.isMobile() ? 'mobile' : 'desktop');

        // .mbr-fullscreen
        (function(width, height){
            var deviceSize = [width, width];
            deviceSize[height > width ? 0 : 1] = height;
            $(window).resize(function(){
                var windowHeight = $(window).height();
                // simple fix for Chrome's scrolling
                if ($.isMobile() && navigator.userAgent.match(/Chrome/i) && $.inArray(windowHeight, deviceSize) < 0)
                    windowHeight = deviceSize[ $(window).width() > windowHeight ? 1 : 0 ];
                $('.mbr-fullscreen').each(function(){
                    var reserved = 0;
                    var prev = $(this).prev();
                    if (prev.hasClass('static') && prev.outerHeight() < windowHeight / 3)
                        reserved += prev.outerHeight();
                    $(this).css('height', (windowHeight - reserved) + 'px');
                });
            });
        })($(window).width(), $(window).height());
        $(document).on('add.cards', function(event){
            if ($('html').hasClass('mbr-site-loaded') && $(event.target).outerFind('.mbr-fullscreen').length)
                $(window).resize();
        });

        // .mbr-parallax-background
        $(document).on('add.cards', function(event){
            $(event.target).outerFind('.mbr-parallax-background:not(.mbr-added)').each(function(){
                $(this).addClass('mbr-added');
                if (!$.isMobile()) $(this).parallax('50%', 0.3, true);
            });
        });

        // .mbr-nav-collapse, .mbr-nav-toggle
        var autoCollapse = function(area){
            if ($(window).width() > 780){
                area.outerFind('.mbr-nav-collapse:not(.collapsed)').removeClass('nav-collapsed mbr-nav-visible')
                    .find('.mbr-nav-toggle.opened').click();
            } else {
                area.outerFind('.mbr-nav-collapse').addClass('nav-collapsed')
                    .find('.mbr-nav-toggle').show();
            }
        };
        $(window).resize(function(){
            autoCollapse($('body'));
        }).keydown(function(event){
            if (27 == event.which) // ESC
                $('.mbr-nav-toggle.opened').click();
        });
        $(document).on('add.cards', function(event){
            $('.mbr-nav-toggle:not(.mbr-added)', event.target).addClass('mbr-added').click(function(){
                var parent = $(this).parents('[class|="menu"]');
                var open = !$(this).hasClass('opened');
                $('nav', parent).fullscreen(open);
                $(this)[ (open ? 'add' : 'remove') + 'Class' ]('opened');
                parent[ (open ? 'add' : 'remove') + 'Class' ]('mbr-nav-visible')
                    .css('top', open ? $(window).scrollTop() : '');
            }).parents('[class|="menu"]').find('nav a').click(function(){
                $('.mbr-nav-toggle.opened').click();
            });
        });
        $(document).on('change.cards', function(event){
            if ($(event.target).outerFind('.mbr-nav-collapse').length)
                autoCollapse($(event.target));
        });

        // .mbr-fixed-top
        var fixedTopTimeout, scrollTimeout, prevScrollTop = 0, fixedTop = null, isDesktop = !$.isMobile();
        $(window).scroll(function(){
            if (scrollTimeout) clearTimeout(scrollTimeout);
            var scrollTop = $(window).scrollTop();
            var scrollUp  = scrollTop <= prevScrollTop || isDesktop;
            prevScrollTop = scrollTop;
            if (fixedTop){
                var fixed = scrollTop > fixedTop.breakPoint;
                if (scrollUp){
                    if (fixed != fixedTop.fixed){
                        if (isDesktop){
                            fixedTop.fixed = fixed;
                            $(fixedTop.elm).toggleClass('is-fixed');
                        } else {
                            scrollTimeout = setTimeout(function(){
                                fixedTop.fixed = fixed;
                                $(fixedTop.elm).toggleClass('is-fixed');
                            }, 40);
                        }
                    }
                } else {
                    fixedTop.fixed = false;
                    $(fixedTop.elm).removeClass('is-fixed');
                }
            }
        });
        $(document).on('add.cards delete.cards', function(event){
            if (fixedTopTimeout) clearTimeout(fixedTopTimeout);
            fixedTopTimeout = setTimeout(function(){
                if (fixedTop){
                    fixedTop.fixed = false;
                    $(fixedTop.elm).removeClass('is-fixed');
                }
                $('.mbr-fixed-top:first').each(function(){
                    fixedTop = {
                        breakPoint : $(this).offset().top + $(this).height() * 3,
                        fixed : false,
                        elm : this
                    };
                    $(window).scroll();
                });
            }, 650);
        });

        // embedded videos
        $(window).resize(function(){
            $('.row iframe[src*="youtube.com"], .row iframe[src*="player.vimeo.com"]').each(function(){
                $(this).height(
                    $(this).width() *
                    parseInt($(this).attr('height') || 315) /
                    parseInt($(this).attr('width') || 560)
                );
            });
        });
        $(document).on('add.cards', function(event){
            if ($('html').hasClass('mbr-site-loaded') && $(event.target).outerFind('iframe').length)
                $(window).resize();
        });

        // background video
        var updateBgImgPosition = function(img){
            var win = {
                width : img.parent().outerWidth(),
                height : img.parent().outerHeight()
            };
            var ratio = '16/9';
            var margin = 24;
            var overprint = 100;
            var css = {};
            css.width = win.width + ((win.width * margin) / 100);
            css.height = ratio == '16/9' ? Math.ceil((9 * win.width) / 16) : Math.ceil((3 * win.width) / 4);
            css.marginTop = -((css.height - win.height) / 2);
            css.marginLeft = -((win.width * (margin / 2)) / 100);
            if (css.height < win.height){
                css.height = win.height + ((win.height * margin) / 100);
                css.width = ratio == '16/9' ? Math.floor((16 * win.height) / 9) : Math.floor((4 * win.height) / 3);
                css.marginTop = -((win.height * (margin / 2)) / 100);
                css.marginLeft = -((css.width - win.width) / 2);
            }
            css.width += overprint;
            css.height += overprint;
            css.marginTop -= overprint / 2;
            css.marginLeft -= overprint / 2;
            img.css(css);
        };
        $(window).resize(function(){
            $('.mbr-background-video-preview img').each(function(){
                updateBgImgPosition($(this));
            });
        });
        $(document).on('add.cards', function(event){
            $(event.target).outerFind('[data-bg-video]').each(function(){
                var result, videoURL = $(this).data('bg-video'), patterns = [
                    /\?v=([^&]+)/,
                    /(?:embed|\.be)\/([-a-z0-9_]+)/i,
                    /^([-a-z0-9_]+)$/i
                ];
                for (var i = 0; i < patterns.length; i++){
                    if (result = patterns[i].exec(videoURL)){
                        var previewURL = 'http' + ('https:' == location.protocol ? 's' : '') + ':';
                        previewURL += '//img.youtube.com/vi/' + result[1] + '/maxresdefault.jpg';
                        $('.container:eq(0)', this).before(
                            $('<img>')
                                .hide()
                                .wrap('<div class="mbr-background-video-preview"></div>')
                                .on('load', function(){
                                    if (120 == (this.naturalWidth || this.width)){

                                        // selection of preview in the best quality
                                        var file = this.src.split('/').pop();
                                        switch (file){
                                            case 'maxresdefault.jpg':
                                                this.src = this.src.replace(file, 'sddefault.jpg');
                                                break;
                                            case 'sddefault.jpg':
                                                this.src = this.src.replace(file, 'hqdefault.jpg');
                                                break;
                                        }
                                        
                                    } else $(this).show();
                                })
                                .attr('src', previewURL)
                                .parent()
                        );
                        if (!$.isMobile()){
                            var params = eval('(' + ($(this).data('bg-video-params') || '{}') + ')');
                            $('.container:eq(0)', this).before('<div class="mbr-background-video"></div>').prev()
                                .YTPlayer($.extend({
                                    videoURL : result[1],
                                    containment : 'self',
                                    showControls : false,
                                    mute : true
                                }, params));
                        }
                        break;
                    }
                }
            });
        });

        // init
        $('body > *:not(style, script)').trigger('add.cards');
        $('html').addClass('mbr-site-loaded');
        $(window).resize().scroll();

        // scrolling effects
        $('[data-effect]').addClass('mbr-transparent').viewportChecker({
            offset: '10%',
            callbackFunction: function(elem, action){
                var data = ($(elem).data('effect') || 'fadeIn').split(/\s+/g);
                if (data.length < 2) data.push('0');
                setTimeout(function(){
                    elem.removeClass('mbr-transparent')
                        .addClass('animated ' + data[0]);
                }, parseInt(data[1]));
            }
        });

        // smooth scroll
        if (!$('html').hasClass('is-builder')){
            $(document).click(function(e){
                try {
                    var target = e.target;
                    do {
                        if (target.hash){
                            var useBody = /#bottom|#top/g.test(target.hash);
                            $(useBody ? 'body' : target.hash).each(function(){
                                e.preventDefault();
                                var goTo = target.hash == '#bottom' 
                                        ? ($(this).height() - $(window).height())
                                        : $(this).offset().top;
                                $('html, body').stop().animate({
                                    scrollTop: goTo
                                }, 800, 'easeInOutCubic');
                            });
                            break;
                        }
                    } while (target = target.parentNode);
                } catch (e) {
                   // throw e;
                }
            });
        }

    });

    atvImg();
})(jQuery);