@section('title','کاربران')
<div>
    <section class="content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ul class="breadcrumb breadcrumb-style ">
                            <li class="breadcrumb-item">
                                <h4 class="page-title">کاربران</h4>
                            </li>
                            <li class="breadcrumb-item bcrumb-1">
                                <a href="{{route('dashboard')}}">
                                    <i class="fas fa-home"></i></a>
                            </li>
                            <li class="breadcrumb-item active">لیست کاربران</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="header">
                                <h2 class="mt-4 mr-4">لیست کاربران</h2>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-2">
                                        <a href="{{route('users.create')}}">
                                            <button class="mt-5 btn-hover color-8">ساخت کاربر</button>

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
                                    <th>ایمیل</th>
                                    <th>عملیات</th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php
                                 $counter=1;
                                ?>
                                @foreach($users as $i)
                                <tr>

                                    <td scope="row">{{$counter}}</td>
                                    <td >{{$i->name}}</td>
                                    <td>{{$i->email}}</td>
                                    <td>
                                        <a href="{{route('users.update',$i->id)}}">
                                            <button class="btn tblActnBtn">
                                                <i class="material-icons">mode_edit</i>
                                            </button>
                                        </a>
                                        @if(auth()->user()->email != $i->email )
                                        <button data-toggle="modal" data-target="#basicModal{{$i->id}}"  class="btn tblActnBtn">
                                            <i class="material-icons">delete</i>
                                        </button>
                                            <div wire:ignore class="modal fade" id="basicModal{{$i->id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                                 aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">حذف کاربر</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            آیا می خواهید  کاربر {{$i->name}}  را حذف کنید ؟
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button data-dismiss="modal" wire:click="delete({{$i->id}})" type="button" class="btn btn-info waves-effect">حذف</button>

                                                            <button type="button" class="btn btn-danger waves-effect"
                                                                    data-dismiss="modal">لغو</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        @endif

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

