@section('title','ساخت پست')
<div>
    <section class="content">
        <div class="container-fluid">
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="body">
                            <form wire:submit.prevent="create" class="form-horizontal">

                                <div class="row clearfix">
                                    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label">
                                        <label for="email_address_2">نام پست</label>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-8 col-xs-7">
                                        <div class="form-group">
                                            <div class="form-line">
                                                <input wire:model.lazy="name"
                                                       type="text"
                                                       class="form-control"
                                                       placeholder="نام پست را وارد کنید">
                                            </div>
                                        </div>
                                        @error('name')
                                        <div class="alert alert-danger">
                                            {{ $message }}
                                        </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label">
                                        <label for="email_address_2">جایگاه</label>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-8 col-xs-7">
                                        <div class="form-group">
                                            <div class="form-line">
                                                <input wire:model.lazy="order"
                                                       type="number"
                                                       class="form-control"
                                                       placeholder="جایگاه پست را وارد کنید">
                                            </div>
                                        </div>
                                        @error('order')
                                        <div class="alert alert-danger">
                                            {{ $message }}
                                        </div>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row clearfix">
                                    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label">
                                        <label for="email_address_2">آدرس</label>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-8 col-xs-7">
                                        <div class="form-group">
                                            <div class="form-line">
                                                <input type="text"
                                                       wire:model.lazy="slug"
                                                       class="form-control"
                                                       placeholder="آدرس  پست را وارد کنید">
                                            </div>
                                        </div>
                                        @error('slug')
                                        <div class="alert alert-danger">
                                            {{ $message }}
                                        </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 form-control-label">
                                        <label for="email_address_2">دسته پست</label>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                        <div class="form-group">
                                            <div wire:ignore class="form-line">
                                                <select wire:model="category_id">
                                                    <option value="" selected>گزینه خود را انتخاب کنید</option>
                                                    @foreach(\App\Models\Category::all() as $i)
                                                        <option value="{{$i->id}}">{{$i->name}}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 form-control-label">
                                        <label for="email_address_2">آپلود تصویر</label>
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
                                        @if($image)
                                            <div>
                                                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                    <img src="{{ $image->temporaryUrl() }}">
                                                </div>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 form-control-label">
                                        <div class="form-check m-l-10">
                                            <label class="form-check-label">
                                                <input wire:model="size" class="form-check-input"
                                                       type="checkbox" value="">
                                                تغییر ابعاد تصویر
                                                <span class="form-check-sign">
                                                                    <span class="check"></span>
                                                            </span>
                                            </label>
                                        </div>
                                    </div>
                                    @if($size)
                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 form-control-label">
                                            <div class="form-group">
                                                <div class="form-line">
                                                    <input type="number"
                                                           wire:model.lazy="width"
                                                           class="form-control"
                                                           placeholder="عرض  پست را وارد کنید">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 form-control-label">

                                            <div class="form-group">
                                                <div class="form-line">
                                                    <input type="number"
                                                           wire:model.lazy="heigh"
                                                           class="form-control"
                                                           placeholder="طول  پست را وارد کنید">
                                                </div>
                                            </div>
                                        </div>
                                    @endif

                                </div>

                                <div class="row clearfix">
                                    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label">
                                        <label for="email_address_2">توضیحات پست</label>
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
                                        @error('description')
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
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="header">
                            <h2>تنظمیات سئو </h2><br>
                            <p>تنظیمات پیش فرض مناسب با پست شما برای سئو انجام میشود اگر نیاز به تنظیمات اختصاصی دارید از طریق فرم زیر میتوانید انجام دهید</p>
                        </div>
                        <div class="body">


                                <div class="row clearfix">
                                    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label">
                                        <label for="email_address_2">عنوان صفحه</label>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-8 col-xs-7">
                                        <div class="form-group">
                                            <div class="form-line">
                                                <input wire:model.lazy="seoTitle"
                                                       type="text"
                                                       class="form-control"
                                                       placeholder="عنوان صفحه">
                                            </div>
                                        </div>
                                        @error('name')
                                        <div class="alert alert-danger">
                                            {{ $message }}
                                        </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 form-control-label">
                                        <label for="email_address_2">دسته صفحه</label>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                        <div class="form-group">
                                            <div wire:ignore class="form-line">
                                                <select wire:model="seoCategory">
                                                    <option value="" selected>گزینه خود را انتخاب کنید</option>
                                                    @foreach(\App\Models\Category::all() as $i)
                                                        <option value="{{$i->id}}">{{$i->name}}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-5 form-control-label">
                                        <label for="email_address_2">توضیحات صفحه</label>
                                    </div>
                                    <div class="col-lg-10 col-md-10 col-sm-8 col-xs-7">
                                        <div class="form-group">
                                            <div class="form-line">
                                                <div wire:ignore>
                                  <textarea required wire:model.lazy="seoDescription"
                                            class="min-h-fit h-48 "
                                            style="height: 150px;border-color: #0D47A1"

                                            ></textarea>
                                                </div>

                                            </div>
                                        </div>
                                        @error('description')
                                        <div class="alert alert-danger">
                                            {{ $message }}
                                        </div>
                                        @enderror
                                    </div>
                                </div>
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
