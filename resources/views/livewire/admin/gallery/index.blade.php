@section('title','گالری تصاویر')
<div>
    <section class="content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ul class="breadcrumb breadcrumb-style ">
                            <li class="breadcrumb-item">
                                <h4 class="page-title">گالری تصاویر</h4>
                            </li>
                            <li class="breadcrumb-item bcrumb-1">
                                <a href="{{route('dashboard')}}">
                                    <i class="fas fa-home"></i></a>
                            </li>
                            <li class="breadcrumb-item active">گالری تصاویر</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row clearfix">
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="header">
                            <h2 class="mt-4 mr-4">گالری تصاویر</h2>
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
                                    <th >#</th>
                                    <th>تصویر</th>
                                    <th>وضعیت</th>
                                    <th>عملیات</th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php
                                $counter=1;
                                ?>
                                @foreach(\App\Models\Gallery::all() as $i)
                                    <tr>

                                        <td scope="row">{{$counter}}</td>
                                        <td >{{$i->name}}</td>
                                        <td>
                                            <img class="style-image"  width="100px" height="100px" src="{{asset($i->image)}}" alt="{{$i->name}}">
                                        </td>
                                        <td>
                                            @if($i->status == 1)
                                                <button wire:click="status({{$i->id}})" type="button" class="btn btn-success btn-border-radius waves-effect">فعال</button>
                                            @else
                                                <button wire:click="status({{$i->id}})" type="button" class="btn btn-danger btn-border-radius waves-effect">غیر فعال</button>
                                            @endif
                                        </td>
                                        <td>
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
                                                            آیا می خواهید  تصویر {{$i->name}}  را حذف کنید ؟
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

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="header">
                            <h2 class="mt-4 mr-4">افزودن تصویر</h2>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="card">
                                <div class="body">
                                    <form wire:submit.prevent="create" class="form-horizontal">
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
                                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <img src="{{ $image->temporaryUrl() }}">
                                                        </div>
                                                    </div>
                                                @endif
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
