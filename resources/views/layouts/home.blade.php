<!DOCTYPE html>
<html  lang="fa">
<head>
    <title>
        استارت وب وان |
        @yield('title')
    </title>
    @include('configHome.head')
    @livewireStyles

</head>
<style>

</style>
<body class="backgroundcOne">
@include('configHome.header')
{{$slot}}
</body>
@include('configHome.footer')
@include('configHome.foot')
@livewireScripts
</html>
