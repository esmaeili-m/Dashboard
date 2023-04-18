@section('title','سوشیال مدیا')
<div>
    <section class="content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ul class="breadcrumb breadcrumb-style ">
                            <li class="breadcrumb-item">
                                <h4 class="page-title">سوشیال مدیا</h4>
                            </li>
                            <li class="breadcrumb-item bcrumb-1">
                                <a href="{{route('dashboard')}}">
                                    <i class="fas fa-home"></i></a>
                            </li>
                            <li class="breadcrumb-item active">سوشیال مدیا</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row clearfix">
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="header">
                            <h2 class="mt-4 mr-4">سوشیال مدیا</h2>
                            <div class="col-12">
                                <div class="row">

                                    <div class="col-6 mt-5">
                                        <input wire:model.debounce.500ms="search" type="text" class="form-control" placeholder="جستجو:">
                                    </div>
                                </div>

                            </div>



                        </div>
                        <div class="body table-responsive">
                            <table class="table table-striped centerTable">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>نام</th>
                                    <th>لینک</th>
                                    <th>وضعیت</th>
                                    <th>عملیات</th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php
                                $counter=1;
                                ?>
                                @if($social)
                                    @foreach($social as $i)
                                    <tr>

                                        <td scope="row">{{$counter}}</td>
                                        <td >{{$i->name}}</td>
                                        <td>{{$i->link}}</td>
                                        <td>
                                            @if($i->status == 1)
                                                <button wire:click="status({{$i->id}})" type="button" class="btn btn-success btn-border-radius waves-effect">فعال</button>
                                            @else
                                                <button wire:click="status({{$i->id}})" type="button" class="btn btn-danger btn-border-radius waves-effect">غیر فعال</button>
                                            @endif
                                        </td>
                                        <td>
                                            <a href="{{route('social.update',$i->id)}}">
                                                <button class="btn tblActnBtn">
                                                    <i class="material-icons">mode_edit</i>
                                                </button>
                                            </a>

                                            <button data-toggle="modal" data-target="#basicModal{{$i->id}}"  class="btn tblActnBtn">
                                                <i class="material-icons">delete</i>
                                            </button>
                                            <div wire:ignore class="modal fade" id="basicModal{{$i->id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                                 aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">حذف دسته بندی</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            آیا می خواهید  شبکه اجتماعی {{$i->name}}  را حذف کنید ؟
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button data-dismiss="modal" wire:click="delete({{$i->id}})" type="button" class="btn btn-info waves-effect">حذف</button>

                                                            <button type="button" class="btn btn-danger waves-effect"
                                                                    data-dismiss="modal">لغو</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                            <?php
                                            $counter++;
                                            ?>
                                    </tr>
                                @endforeach
                                @endif
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
            </div>
        </div>
    </section>
</div>
@push('script')
    <script src="{{asset('admin/js/bundles/multiselect/js/jquery.multi-select.js')}}"></script>
    <script src="{{asset('admin/js/bundles/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js')}}"></script>
    <script src="{{asset('admin/js/pages/forms/advanced-form-elements.js')}}"></script>
@endpush
