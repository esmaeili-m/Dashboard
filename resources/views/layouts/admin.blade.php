<!DOCTYPE html>
<html lang="en">

    @include('config.head')
    @livewireStyles
<body class="light rtl">
<!-- Page Loader -->
<div class="page-loader-wrapper">
    <div class="loader">
{{--        <div class="m-t-30">--}}
{{--            <img class="loading-img-spin" src="{{asset('admin/images/loading.png')}}" alt="admin">--}}
{{--        </div>--}}
        <p>لطفا صبر کنید...</p>
    </div>
</div>
<!-- #END# Page Loader -->
<!-- Overlay For Sidebars -->
<div class="overlay"></div>
<!-- #END# Overlay For Sidebars -->
<!-- Top Bar -->
    @include('config.header')

<!-- #Top Bar -->
<div>
    <!-- Left Sidebar -->
    @include('config.rightsidebar')
    @include('config.leftsidebar')

    <!-- #END# Left Sidebar -->
    <!-- Right Sidebar -->
    <!-- #END# Right Sidebar -->
</div>
    {{$slot}}
<!-- Plugins Js -->
    @include('config.foot')
    @livewireScripts
</body>
