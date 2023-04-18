<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div class="card">
        <div class="header">
            <h2 class="mt-4 mr-4">افزودن شبکه اجتماعی - آدرس - شماره همراه</h2>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="body">
                    <form wire:submit.prevent="create" class="form-horizontal">
                        <div class="row clearfix">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 form-control-label">
                                <label for="email_address_2">شبکه اجتماعی و..</label>
                            </div>
                            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <div class="form-group">
                                    <div wire:ignore class="form-line">
                                        <select wire:model.lazy="name">
                                            <option value="" selected>گزینه خود را انتخاب کنید</option>
                                            <option value="instageram">اینستاگرام</option>
                                            <option value="telegram">تلگرام</option>
                                            <option value="github">گیت هاب</option>
                                            <option value="pintrest">پینترست</option>
                                            <option value="whatsapp">واتساپ</option>
                                            <option value="tiktok">تیک تاک</option>
                                            <option value="facebook">قیسبوک</option>
                                            <option value="linkedin">لینکدین</option>
                                            <option value="linkedin">شماره همراه</option>
                                            <option value="linkedin">آدرس</option>
                                        </select>
                                    </div>
                                </div>
                                @error('social')
                                <div class="alert alert-danger">
                                    {{ $message }}
                                </div>
                                @enderror
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 form-control-label">
                                <label for="email_address_2">آدرس</label>
                            </div>
                            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <div class="form-group">
                                    <div class="form-line">
                                        <input wire:model.lazy="link"
                                               type="text"
                                               class="form-control"
                                               placeholder="آدرس  را وارد کنید">
                                    </div>
                                </div>
                                @error('link')
                                <div class="alert alert-danger">
                                    {{ $message }}
                                </div>
                                @enderror
                            </div>
                        </div>
                        <div class="row clearfix">
                            <div class="col-lg-2 col-md-2 col-sm-4 col-xs-5">
                            </div>
                            <div class="col-lg-10 col-md-10 col-sm-8 col-xs-7">
                                <button type="submit" class="btn btn-primary m-t-15 waves-effect">ثبت</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</div>
@push('script')
    <script src="{{asset('admin/js/bundles/multiselect/js/jquery.multi-select.js')}}"></script>
    <script src="{{asset('admin/js/bundles/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js')}}"></script>
    <script src="{{asset('admin/js/pages/forms/advanced-form-elements.js')}}"></script>
@endpush
