@section('title','ارتباط با ما')
<section id="contacts-2" class="bg-snow wide-50 inner-page-hero contacts-section division">
    <div class="container">


        <!-- SECTION TITLE -->
        <div class="row justify-content-center">
            <div class="col-md-10 col-lg-8">
                <div class="section-title title-02 mb-80">

                    <!-- Title -->
                    <h2 class="h2-xs">سوالی دارید؟ کمک خواستن؟ دریغ نکنید ، یک خط برای ما بگذارید</h2>

                    <!-- Text -->


                </div>
            </div>
        </div>


        <!-- CONTACT FORM -->
        <div class="row justify-content-center">
            <div class="col-lg-10 col-xl-8">
                <div class="form-holder">
                    <form method="post" action="{{route('message')}}"  class="row contact-form">
                    @csrf
                        <!-- Form Select -->
                        @if(session('alert'))
                            <div class="col-md-12 mb-5">
                                <div class="alert alert-success">
                                    {{session('alert')}}

                                </div>
                            </div>
                        @endif
                        <!-- Contact Form Input -->
                        <div class="col-md-12">
                            <p class="p-lg">نام شما: </p>
                            <span>لطفا نام واقعی خود را وارد کنید: </span>
                            <input type="text" name="name" class="form-control name" placeholder="نام شما*">
                        </div>

                        <div  class="col-md-12">
                            <p class="p-lg">آدرس ایمیل شما: </p>
                            <span>لطفاً آدرس ایمیل خود را برای وارد کنید</span>
                            <input type="text" name="email" class="form-control email" placeholder="آدرس ایمیل*">
                        </div>

                        <div class="col-md-12">
                            <p class="p-lg">سوال خود را با جزئیات توضیح دهید: </p>
                            <span>سوال خود را برای شرح دهید!</span>
                            <textarea class="form-control message" name="message" rows="6" placeholder="سوال من ..."></textarea>
                        </div>

                        <!-- Contact Form Button -->
                        <div class="col-md-12 mt-15 form-btn text-right">
                            <button type="submit" class="btn btn-skyblue tra-grey-hover submit">ارسال درخواست</button>
                        </div>

                        <!-- Contact Form Message -->
                        <div class="col-lg-12 contact-form-msg">
                            <span class="loading"></span>
                        </div>

                    </form>
                </div>
            </div>
        </div>	   <!-- END CONTACT FORM -->


    </div>	   <!-- End container -->
</section>	<!-- END CONTACTS-2 -->
