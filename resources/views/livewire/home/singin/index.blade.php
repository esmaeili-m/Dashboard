<section style="padding-top: 100px" id="hero-18" class="rel bg-snow hero-section division">
    <div class="container">
        <div class="row d-flex align-items-center">


            <!-- HERO REQUEST FORM -->
            <div class="col-md-7 col-lg-6">
                <div id="hero-18-form">

                    <!-- Title -->
                    <h4 class="h2-sm">هدف ما ارتقا سطح آموزشی و حرکت به سوی پیشرفت صنعت گردشگری می باشد</h4>
                    @if (session()->has('message'))
                        <div class="alert alert-success">
                            پیام شما با موفقیت ثبت گردید

                        </div>
                    @endif
                    <!-- Form -->
                    <form wire:submit.prevent="singin" class="row request-form">

                        <!-- Form Input -->
                        <div class="col-md-12">
                            <input type="text" wire:model.lazy="name" class="form-control" placeholder="نام خود را وارد کنید*" >
                        </div>
                        @error('name')
                        <div class="alert alert-danger">
                            {{ $message }}
                        </div>
                        @enderror
                        <div class="col-md-12">
                            <input type="number" wire:model.lazy="number" class="form-control" placeholder="شماره همراه خود را وارد کنید*"  >
                        </div>
                        @error('number')
                        <div class="alert alert-danger">
                            {{ $message }}
                        </div>
                        @enderror
                        <!-- Form Input -->
                        <div class="col-md-12">
{{--                                <p class="p-lg">متقاضی دوره کوتاه مدت: </p>--}}
                                <select wire:model.lazy="type" class="form-select subject" aria-label="Default select example">
                                    <option selected>متقاضی دوره کوتاه مدت</option>
                                    <option>ابرانگردی و جهانگردی</option>
                                    <option>طبیعت گردی</option>
                                    <option>مدیر فنی بند ب</option>
                                </select>
                        </div>
                        @error('type')
                        <div class="mt-2 alert alert-danger">
                            {{ $message }}
                        </div>
                        @enderror
                        <div class="mt-4 col-md-12">
                            {{--                                <p class="p-lg">متقاضی دوره کوتاه مدت: </p>--}}
                            <select wire:model.lazy="madrak" class="form-select subject" aria-label="Default select example ">
                                <option selected>جهت ثبت نام در دوره داشتن مدرک لیسانس و یا معادل آن الزامی می باشد . *</option>
                                <option>دارای مدرک لیسانس یا بالاتر هستم </option>
                                <option>دارای مدرک معادل لیسانس هستم </option>
                                <option>تسلط به زبان خارجی دارم</option>
                            </select>
                        </div>
                        @error('madrak')
                        <div class="mt-2 alert alert-danger">
                            {{ $message }}
                        </div>
                        @enderror
                        <!-- Form Button -->
                        <div class="col-md-12 form-btn mt-15">
                            <button type="submit" class="btn btn-md btn-skyblue tra-grey-hover ">اکنون شروع کنید</button>
                        </div>

                        <!-- Form Message -->


                    </form>

                    <!-- Advantages List -->


                </div>	<!-- END FORM -->
            </div>	<!-- END HERO REQUEST FORM -->


            <!-- HERO IMAGE -->
            <div class="col-md-5 col-lg-6">
                <div class="hero-18-img wow fadeInLeft">
                    <img class="img-fluid" src="{{asset('home/images/hero-18-img.png')}}" alt="hero-image">
                </div>
            </div>


        </div>    <!-- End row -->
    </div>	   <!-- End container -->
</section>	<!-- END HERO-18 -->
