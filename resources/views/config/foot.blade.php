<script src="{{asset('admin/sweetalert2/jquery-3.6.4.min.js')}}"></script>

<script src="{{asset('admin/js/app.min.js')}}"></script>
<script src="{{asset('admin/js/admin.js')}}"></script>
<script src="{{asset('admin/js/form.min.js')}}"></script>
<script src="{{asset('admin/js/pages/index.js')}}"></script>
<script src="{{asset('admin/sweetalert2/sweetalert.min.js')}}"></script>
@stack('script')
<script>
    window.addEventListener('swal:model',event =>{
        swal({
            title:event.detail.title,
            text:event.detail.text,
            icon:event.detail.type,
        });
    });
</script>
