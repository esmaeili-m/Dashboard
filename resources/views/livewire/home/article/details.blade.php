<section id="single-post" class="wide-100 inner-page-hero single-post-section division">
    <div class="container">


        <!-- SINGLE POST CONTENT -->
        <div class="row">
            <div class="col-lg-10 offset-lg-1">
                <div class="single-post-wrapper">


                    <!-- SINGLE POST TITLE -->
                    <div class="single-post-title">

                        <!-- CATEGORY -->
                        <p class="p-sm post-tag txt-500 txt-upcase">اخبار آفتاب شرق </p>

                        <!-- TITLE -->
                        <h2 class="h2-md">{{$article->name}}</h2>

                        <!-- POST DATA -->
                        <div class="post-data clearfix">

                            <!-- Author Avatar -->


                            <!-- Author Data -->
                            <div class="post-author">
                                <h6 class="h6-xl">آفتاب شرق</h6>
                                <p class="p-md">نوشته شده در {{verta($article->created_at->format('Y-m-d'))->format('d / m / Y')}}</p>
                            </div>

                        </div>	<!-- END POST DATA -->


                    </div>	<!-- END SINGLE POST TITLE -->


                    <!-- BLOG POST TEXT -->
                    <div class="single-post-txt">

                        <!-- Text -->
                        <p class="p-lg">
                            {!! $article->description!!}
                        </p>
                    </div>	<!-- END BLOG POST TEXT -->

                </div>
            </div>
        </div>	<!-- END SINGLE POST CONTENT -->


    </div>     <!-- End container -->
</section>	<!-- END SINGLE POST -->
