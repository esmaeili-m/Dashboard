@section('title','لیست مقالات')
<div>
    <section class="content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ul class="breadcrumb breadcrumb-style ">
                            <li class="breadcrumb-item">
                                <h4 class="page-title">مقالات</h4>
                            </li>
                            <li class="breadcrumb-item bcrumb-1">
                                <a href="{{route('dashboard')}}">
                                    <i class="fas fa-home"></i></a>
                            </li>
                            <li class="breadcrumb-item active">لیست مقالات</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="header">
                            <h2 class="mt-4 mr-4">لیست مقالات</h2>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-2">
                                        <a href="{{route('articles.create')}}">
                                            <button class="mt-5 btn-hover color-8">ساخت مقاله</button>

                                        </a>

                                    </div>
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
                                    <th>نام</th>
                                    <th>نام دسته</th>
                                    <th>توضیحات</th>
                                    <th>تصویر</th>
                                    <th>وضعیت</th>
                                    <th>عملیات</th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php
                                $counter=1;
                                ?>
                                @foreach($articels as $i)
                                    <tr>

                                        <td scope="row">{{$counter}}</td>
                                        <td >{{$i->name}}</td>
                                        <td>{{$i->category->name}}</td>
                                        <td>
                                            {{substr(strip_tags($i->description),0,100)}}
{{--                                            {!! $i->description !!}--}}
                                        </td>
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
                                            <a href="{{route('articles.update',$i->id)}}">
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
                                                                <h5 class="modal-title" id="exampleModalLabel">حذف مقاله</h5>
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">
                                                                آیا می خواهید  مقاله {{$i->name}}  را حذف کنید ؟
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
            </div>

        </div>
    </section>
</div>

