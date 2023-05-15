@section('title','ویرایش دسته بندی')
<div>
    <section class="content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ul class="breadcrumb breadcrumb-style ">
                            <li class="breadcrumb-item">
                                <h4 class="page-title">دسته بندی ها</h4>
                            </li>
                            <li class="breadcrumb-item bcrumb-1">
                                <a href="{{route('dashboard')}}">
                                    <i class="fas fa-home"></i></a>
                            </li>
                            <li class="breadcrumb-item active">دسته بندی ها</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="header">
                            <h2 class="mt-4 mr-4">ویرایش دسته  {{$this->name}}</h2>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="card">
                                <div class="body">
                                    <form wire:submit.prevent="update" class="form-horizontal">
                                        <div class="row clearfix">
                                            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 form-control-label">
                                                <label for="email_address_2">نام دسته</label>
                                            </div>
                                            <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                <div class="form-group">
                                                    <div class="form-line">
                                                        <input wire:model.lazy="name"
                                                               type="text"
                                                               class="form-control"
                                                               placeholder="نام خود را وارد کنید">
                                                    </div>
                                                </div>
                                                @error('name')
                                                <div class="alert alert-danger">
                                                    {{ $message }}
                                                </div>
                                                @enderror
                                            </div>
                                            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 form-control-label">
                                                <label for="email_address_2">آدرس</label>
                                            </div>
                                            <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                <div class="form-group">
                                                    <div class="form-line">
                                                        <input wire:model.lazy="slug"
                                                               type="text"
                                                               class="form-control"
                                                               placeholder="آدرس دسته را وارد کنید">
                                                    </div>
                                                </div>
                                                @error('slug')
                                                <div class="alert alert-danger">
                                                    {{ $message }}
                                                </div>
                                                @enderror
                                            </div>
                                            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 form-control-label">
                                                <label for="email_address_2">دسته والد</label>
                                            </div>
                                            <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                <div class="form-group">
                                                    <div wire:ignore class="form-line">
                                                        <select wire:model="father_id">
                                                            <option value="" selected>گزینه خود را انتخاب کنید</option>
                                                            @foreach(\App\Models\Category::where('father_id',null)->get() as $i)
                                                                <option value="{{$i->id}}">{{$i->name}}</option>
                                                            @endforeach
                                                        </select>
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
                                                    <div class="row">
                                                        @if($image && $image!=$old_image)

                                                            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                                <p>تصویر جدید</p>
                                                                <img src="{{ $image->temporaryUrl() }}">
                                                            </div>
                                                        @endif
                                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                            @if($image)
                                                                <p>تصویر قبلی</p>
                                                            @else
                                                                <p>تصویر</p>
                                                            @endif
                                                            <img src="{{asset($old_image)  }}">
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 form-control-label">
                                                <label for="email_address_2">توضیحات</label>
                                            </div>
                                            <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                <div class="form-group">
                                                    <div wire:ignore class="form-line">
                                                        <textarea id="myeditorinstance" wire:model.defer="description" rows="4" class="form-control no-resize" placeholder="توضیحات"></textarea>
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
