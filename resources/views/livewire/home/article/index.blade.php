@section('title','مقالات')
<section id="blog-page" class="bg-snow wide-50 inner-page-hero blog-page-section division">
    <div class="container">


        <!-- SECTION TITLE -->
        <div class="row justify-content-center">
            <div class="col-md-10 col-lg-8">
                <div class="section-title title-02 mb-85">
                    <h2 class="h2-xs">اخبار مربوطه و بیشتر برای شما. به وبلاگ ما خوش آمدید</h2>
                </div>
            </div>
        </div>


        <!-- FEATURED POST -->
        @foreach(\App\Models\Article::where('status',1)->orderBy('order','desc')->get() as $i)
            <div class="rel blog-post-wide featured-post">
                <div class="row d-flex align-items-center">

                    <!-- Featured Badge -->
                    <div class="featured-badge ico-25 bg-whitesmoke yellow-color">
                        <span class="flaticon-star-1"></span>
                    </div>

                    <!-- BLOG POST IMAGE -->
                    <div class="col-lg-7 blog-post-img">
                        <div class="hover-overlay">
                            <img class="img-fluid" src="{{$i->image}}" alt="blog-post-image"/>
                            <div class="item-overlay"></div>
                        </div>
                    </div>

                    <!-- BLOG POST TEXT -->
                    <div class="col-lg-5 blog-post-txt">
                        <!-- Post Tag -->
                        <p class="p-md post-tag">اخبار آفتاب شرق
                            | {{verta($i->created_at->format('Y-m-d'))->format('d / m / Y')}}</p>

                        <!-- Post Link -->
                        <h5 class="h5-xl">
                            <a href="{{route('article.detials',$i->slug)}}">{{$i->name}}</a>
                        </h5>

                        <!-- Text -->
                        <p class="p-lg">
                            {{substr(strip_tags($i->description),0,150)}}
                        </p>

                        <!-- Post Meta -->
                        <div class="post-meta"><p class="p-md"></p></div>

                    </div>    <!-- END BLOG POST TEXT -->

                </div>   <!-- End row -->
            </div>    <!-- END FEATURED POST -->

        @endforeach


        <!-- POSTS WRAPPER -->
        <div class="posts-wrapper">


            <!-- BLOG POSTS CATEGORY -->
            <div class="row">
                <div class="col-md-12">
                    <h5 class="h5-lg posts-category">آرشیو های اخیر</h5>
                </div>
            </div>


            <!-- BLOG POSTS -->
            <div class="row">
                <div class="col gallery-items-list">
                    <div class="masonry-wrap grid-loaded">


                        <!-- BLOG POST #1 -->
                        @foreach(\App\Models\Article::where('status',1)->orderBy('order','desc')->take(3)->get() as $i)
                            <div class="blog-3-post masonry-image">

                                <!-- BLOG POST IMAGE -->
                                <div class="blog-post-img">
                                    <div class="hover-overlay">
                                        <img class="img-fluid" src="{{$i->image}}" alt="blog-post-image"/>
                                        <div class="item-overlay"></div>
                                    </div>
                                </div>

                                <!-- BLOG POST TEXT -->
                                <div class="blog-post-txt">

                                    <!-- Post Tag -->
                                    <p class="p-md post-tag">اخبار آفتاب شرق
                                        | {{verta($i->created_at->format('Y-m-d'))->format('d / m / Y')}}</p>

                                    <!-- Post Link -->
                                    <h5 class="h5-md">
                                        <a href="{{route('article.detials',$i->slug)}}">
                                            {{$i->name}}
                                        </a>
                                    </h5>

                                    <!-- Post Meta -->
                                    <div class="post-meta"><p class="p-md"></p></div>

                                </div>    <!-- END BLOG POST TEXT -->

                            </div>
                        @endforeach
                        <!-- END BLOG POST #1 -->


                    </div>
                </div>
            </div>    <!-- END BLOG POSTS -->


        </div>    <!-- END POSTS WRAPPER -->


    </div>     <!-- End container -->
</section>
