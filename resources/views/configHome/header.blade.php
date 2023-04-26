<header id="header" class="header tra-menu navbar-light">
    <div class="header-wrapper">


        <!-- MOBILE HEADER -->
        <div class="wsmobileheader clearfix">
            <span class="smllogo"><img src="{{asset('home/images/logo-01.png')}}" alt="mobile-logo"/></span>
            <a id="wsnavtoggle" class="wsanimated-arrow"><span></span></a>
        </div>


        <!-- NAVIGATION MENU -->
        <div class="wsmainfull menu clearfix">
            <div class="wsmainwp clearfix">


                <!-- HEADER LOGO -->
                <div class="desktoplogo"><a href="#hero-14" class="logo-black"><img src="{{asset(\App\Models\Setting::find(1)['logo1'])}}" alt="header-logo"></a></div>
                <div class="desktoplogo"><a href="#hero-14" class="logo-white"><img src="{{asset(\App\Models\Setting::find(1)['logo1'])}}" alt="header-logo"></a></div>


                <!-- MAIN MENU -->
                <nav class="wsmenu clearfix">
                    <ul class="wsmenu-list nav-violet-red-hover">

                        <li class="nl-simple" aria-haspopup="true"><a href="#features-4">صفحه اصلی </a></li>




                        <!-- DROPDOWN MENU -->
                        <li aria-haspopup="true"><a href="#">دسته بندی ها <span class="wsarrow"></span></a>
                            <ul class="sub-menu">
                                @foreach(\App\Models\Category::where('status',1)->where('father_id',null)->get() as $i)
                                    <li aria-haspopup="true"><a href="#features-8">{{$i->name}}</a></li>
                                @endforeach
                            </ul>
                        </li>
                        <li class="nl-simple" aria-haspopup="true"><a href="#features-4">محصولات </a></li>
                        <li class="nl-simple" aria-haspopup="true"><a href="#features-4">مقالات </a></li>
                        <li class="nl-simple" aria-haspopup="true"><a href="#features-4">درباره ما </a></li>
                        <li class="nl-simple" aria-haspopup="true"><a href="#features-4">تماس با ما </a></li>


                        <!-- DROPDOWN MENU -->

                        <!-- HEADER BUTTON -->
                        <li class="nl-simple" aria-haspopup="true">
                            <a href="#content-4" class="btn btn-violet-red tra-white-hover last-link">بیایید شروع کنیم </a>
                        </li>


                        <!-- HEADER SOCIAL LINKS
                        <li class="nl-simple white-color header-socials ico-20 clearfix" aria-haspopup="true">
                            <span><a href="#" class="ico-facebook"><span class="flaticon-facebook"></span></a></span>
                            <span><a href="#" class="ico-twitter"><span class="flaticon-twitter"></span></a></span>
                            <span><a href="#" class="ico-instagram"><span class="flaticon-instagram"></span></a></span>
                            <span><a href="#" class="ico-dribbble"><span class="flaticon-dribbble"></span></a></span>
                        </li> -->


                    </ul>
                </nav>	<!-- END MAIN MENU -->


            </div>
        </div>	<!-- END NAVIGATION MENU -->


    </div>     <!-- End header-wrapper -->
</header>

