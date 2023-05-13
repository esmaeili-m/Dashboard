<section id="hero-14" style="background-image: url({{asset($settings['mainpic'])}})" class="bg-fixed hero-section division">
    <div class="container">
        <div class="row d-flex align-items-center">


            <!-- HERO TEXT -->
            <div class="col-sm-9 col-md-7 col-lg-5">
                <div class="hero-14-txt white-color wow fadeInRight">

                    <!-- Section ID -->


                    <!-- Title -->


                    <!-- Text -->
                    <p class="p-xl">
                        {!! $settings['description'] !!}
                    </p>

                    <!-- STORE BADGES -->
                    	<!-- END STORE BADGES -->

                </div>
            </div>	<!-- END HERO TEXT -->


        </div>    <!-- End row -->
    </div>	   <!-- End container -->
</section>
<section id="features-8" class="wide-60 features-section division">
    <div class="container">

        <div class="row justify-content-center">
            <div class="col-lg-10 col-xl-8">
                <div class="section-title title-02 mb-85">

                    <!-- Section ID -->
                    <span class="section-id rounded-id bg-tra-purple purple-color txt-upcase">
					 				باما دنیای اطراف را بهتر تجربه کنید
					 			</span>

                    <!-- Title -->
                    <h2 class="h2-xs">دوره های آموزشی</h2>

                </div>
            </div>
        </div>


        <!-- FEATURES-8 WRAPPER -->
        <div class="fbox-8-wrapper text-center">
            <div class="row row-cols-1 row-cols-md-3">


                <!-- FEATURE BOX #1 -->
                @foreach(\App\Models\Post::where('status',1)->orderBy('order','desc')->get() as $i)
                    <div class="col">
                        <div class="fbox-8 mb-40 wow fadeInUp">

                            <!-- Image -->
                            <div class="fbox-img bg-whitesmoke-gradient">
                                <img class="img-fluid" src="{{asset($i['image'])}}" alt="feature-icon" />
                            </div>

                            <!-- Title -->
                            <h5 class="h5-md">{{$i['name']}}</h5>

                            <!-- Text -->
                            <p class="p-lg">
                                {!! substr(strip_tags($i['description']),0,100) !!}
                            </p>

                        </div>
                    </div>
                @endforeach
            </div>  <!-- End row -->
        </div>	<!-- END FEATURES-8 WRAPPER -->


    </div>	   <!-- End container -->
</section>
<section id="cta-5" class="cta-section division">
    <div class="container">
        <div class="rel bg-04 cta-5-wrapper">
            <div class="row justify-content-center">


                <!-- CALL TO ACTION TEXT -->
                <div class="col-lg-8">
                    <div class="cta-5-txt white-color text-center">

                        <!-- Title -->
                        <h2 class="h2-xs">باما دنیای اطراف را بهتر تجربه کنید</h2>

                        <!-- Text -->
                        <p class="p-xl">با دوره های کوتاه مدت گردشگری، سفر را به گونه دیگر تجربه کنید و آموخته های خود را نظاره کنید
                        </p>

                        <!-- Button -->
                        <a href="{{route('singin')}}" class="btn btn-skyblue tra-white-hover">اکنون شروع کنید</a>

                    </div>
                </div>


            </div>
        </div>    <!-- End row -->
    </div>	   <!-- End container -->
</section>
<section id="team-1" class="wide-50 team-section division">
    <div class="container">


        <!-- SECTION TITLE -->
        <div class="row justify-content-center">
            <div class="col-lg-10 col-xl-8">
                <div class="section-title title-01 mb-80">

                    <!-- Title -->
                    <h2 class="h2-md">یک تیم استعدادهای فراوان</h2>

                    <!-- Text -->
                    <p class="p-xl">چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </p>

                </div>
            </div>
        </div>


        <!-- TEAM MEMBERS HOLDER -->
        <div class="team-members-wrapper text-center">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">


        @foreach(\App\Models\Gallery::where('status',1)->get() as $i)
                    <div class="col">
                        <div class="team-member wow fadeInUp">

                            <!-- Team Member Photo -->
                            <div class="team-member-photo">
                                <img class="img-fluid" src="{{asset($i->image)}}" alt="team-member-foto">
                            </div>

                            <!-- Team Member Data -->


                        </div>
                    </div>

        @endforeach

            </div>
        </div>


    </div>	    <!-- End container -->
</section>
