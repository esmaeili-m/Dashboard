@section('title','لیست ثبت نام کننده ها')
<div>
    <section class="content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ul class="breadcrumb breadcrumb-style ">
                            <li class="breadcrumb-item">
                                <h4 class="page-title">خانه</h4>
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
                            <h2 class="mt-4 mr-4">لیست کاربران ثبت نام کننده</h2>
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
                                    <th>نام</th>
                                    <th>شماره موبایل</th>
                                    <th>دوره</th>
                                    <th>مدرک</th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php
                                $counter=1;
                                ?>
                                @foreach($singin as $i)
                                    <tr>

                                        <td scope="row">{{$counter}}</td>
                                        <td >{{$i->name}}</td>
                                        <td>{{$i->number}}</td>
                                        <td>{{$i->type}}</td>
                                        <td>{{$i->madrak}}</td>
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

