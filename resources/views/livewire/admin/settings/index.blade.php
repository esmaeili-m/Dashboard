@section('title','ساخت پست')
<div>
    <section class="content">
        <div class="container-fluid">
            <div class="row clearfix">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="body">
                            <div class="header">
                                <h2>تنظمیات لوگو</h2><br>
                            </div>
                            <form wire:submit.prevent="updateLogo1" class="form-horizontal">

                                <div class="row clearfix">
                                    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 form-control-label">
                                        <label for="email_address_2">لوگو 1</label>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                        <div class="form-group">
                                            <div class="file-field input-field">
                                                <div class="btn">
                                                    <span>تصویر</span>
                                                    <input wire:model="image" type="file">
                                                </div>
                                                <div class="file-path-wrapper">
                                                    <input wire:model="image" class="file-path validate" type="text">
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    @if($image)

                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">

                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <p>تصویر</p>
                                            <img src="{{ $image->temporaryUrl() }}">
                                        </div>
                                    @endif
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
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="body">
                            <div class="header">
                                <h2>تنظمیات لوگو</h2><br>
                            </div>
                            <form wire:submit.prevent="updateLogo2" class="form-horizontal">

                                <div class="row clearfix">
                                    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 form-control-label">
                                        <label for="email_address_2">لوگو 2</label>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                        <div class="form-group">
                                            <div class="file-field input-field">
                                                <div class="btn">
                                                    <span>تصویر</span>
                                                    <input wire:model="image2" type="file">
                                                </div>
                                                <div class="file-path-wrapper">
                                                    <input wire:model="image2" class="file-path validate" type="text">
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    @if($image2)

                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">

                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <p>تصویر</p>
                                            <img src="{{ $image2->temporaryUrl() }}">
                                        </div>
                                    @endif
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
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="body">
                            <div class="header">
                                <h2>تنظمیات تصویر صفحه اصلی</h2><br>
                            </div>
                            <form wire:submit.prevent="updatemainImage" class="form-horizontal">

                                <div class="row clearfix">
                                    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label">
                                        <label for="email_address_2">توضیحات اسلایدر</label>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-8 col-xs-7">
                                        <div class="form-group">
                                            <div class="form-line">
                                                <div wire:ignore>
                                  <textarea required wire:model.lazy="description"
                                            class="min-h-fit h-48 "
                                            name="editor"
                                            id="myeditorinstance"></textarea>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 form-control-label">
                                        <label for="email_address_2">تصویر صفحه اصلی</label>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                        <div class="form-group">
                                            <div class="file-field input-field">
                                                <div class="btn">
                                                    <span>تصویر</span>
                                                    <input wire:model="imageMain" type="file">
                                                </div>
                                                <div class="file-path-wrapper">
                                                    <input wire:model="image2" class="file-path validate" type="text">
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    @if($imageMain)

                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">

                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <p>تصویر</p>
                                            <img src="{{ $imageMain->temporaryUrl() }}">
                                        </div>
                                    @endif
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

                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="header">
                            <h2>تنظمیات سئو </h2><br>
                            <p>تنظیمات پیش فرض مناسب با پست شما برای سئو انجام میشود اگر نیاز به تنظیمات اختصاصی دارید از طریق فرم زیر میتوانید انجام دهید</p>
                        </div>
                        <div class="body">

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</div>
@push('script')
    <script src="{{asset('admin/js/bundles/multiselect/js/jquery.multi-select.js')}}"></script>
    <script src="{{asset('admin/js/bundles/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js')}}"></script>
    <script src="{{asset('admin/js/pages/forms/advanced-form-elements.js')}}"></script>
    <script src="{{asset('admin/tiny/tiny.js')}}" referrerpolicy="origin"></script>
    <script>

        var editor = tinymce.init({
            // id :'textarea',
            selector: 'textarea#myeditorinstance',
            language: 'fa',
            image_title: true,
            automatic_uploads: true,
            images_upload_url: '/upload/post-image',
            file_picker_types: 'image',
            file_picker_callback: function (cv, value, meta) {
                var input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');
                input.onchange = function () {
                    var file = this.files[0];
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    render.onload = function () {
                        var id = 'blobid' + (new Date()).getTime();
                        var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                        var base64 = reader.result.split(',')[1];
                        var blobInfo = blobCache.create(id, file, base64);
                        blobCache.add(blobInfo);
                        cb(blobInfo.blobUri(), {title: file.name});
                    };
                };
                input.click();
            },
            content_style:
                "@import url('fonts/iranyekan/woff/iranyekanwebthin.woff');",
            /* ... */
            font_formats:
                "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde;" +
                " Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier;" +
                " Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol;" +
                " Tahoma=tahoma,arial,yekan,helvetica,sans-serif; Terminal=terminal,monaco;" +
                " Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",

            plugins: 'anchor code autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
            toolbar: 'undo redo | code | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
            setup: function (editor) {
                editor.on('init change', function () {
                    editor.save();
                });
                editor.on('change', function (e) {
                @this.set('description', editor.getContent());
                });
            }
        });
    </script>
@endpush
