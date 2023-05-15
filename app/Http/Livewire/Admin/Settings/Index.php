<?php

namespace App\Http\Livewire\Admin\Settings;

use App\Models\Seo;
use App\Models\Setting;
use Livewire\Component;
use Livewire\WithFileUploads;

class Index extends Component
{
    use WithFileUploads;
    public $image;
    public $imageMain;
    public $image2;
    public $description;

    protected $rules=[
   'description'=>'required'
    ];
    public function updatemainImage()
    {
        $this->validate();
        $setting=Setting::find(1);
        if ($this->imageMain){
            $this->imageMain=$this->UploadFileMain($this->imageMain);
            if ($setting){
                Setting::find(1)->update([
                    'mainpic'=>$this->imageMain,
                    'description'=>$this->description
                ]);
                $this->imageMain="";
                return $this->dispatchBrowserEvent('swal:model',[
                    'type'=>'success',
                    'title'=>'تصویر با موفقیت ویرایش شد',
                    'text'=>''
                ]);
            }
        }else{
            return $this->dispatchBrowserEvent('swal:model',[
                'type'=>'error',
                'title'=>'تصویر را انتخاب کنید',
                'text'=>''
            ]);
        }
    }



    /////////////////////////////////////////////////////////////////////////////////////->logo
    public function updateLogo1()
    {

        $setting=Setting::find(1);
        if ($this->image){
            $this->image=$this->UploadFile($this->image);
            if ($setting){
                Setting::find(1)->update([
                    'logo1'=>$this->image
                ]);
                $this->image="";
                return $this->dispatchBrowserEvent('swal:model',[
                    'type'=>'success',
                    'title'=>'تصویر با موفقیت ویرایش شد',
                    'text'=>''
                ]);
            }
        }else{
            return $this->dispatchBrowserEvent('swal:model',[
                'type'=>'error',
                'title'=>'تصویر را انتخاب کنید',
                'text'=>''
            ]);
        }

    }

    public function updateLogo2()
    {
        $setting=Setting::find(1);
        if ($this->image2){
            $this->image2=$this->UploadFile2($this->image2);
            if ($setting){
                Setting::find(1)->update([
                    'logo2'=>$this->image2
                ]);
                $this->image2="";
                return $this->dispatchBrowserEvent('swal:model',[
                    'type'=>'success',
                    'title'=>'تصویر با موفقیت ویرایش شد',
                    'text'=>''
                ]);
            }
        }else{
            return $this->dispatchBrowserEvent('swal:model',[
                'type'=>'error',
                'title'=>'تصویر را انتخاب کنید',
                'text'=>''
            ]);
        }
    }
    public function UploadFile($image){
        $fileName=$image->getClientOriginalName();
        $directory='uploads/settings/logo';
        $image->storeAs($directory,$fileName,'public_files');
        return "$directory".'/'."$fileName";
    }
    public function UploadFile2($image){
        $fileName=$image->getClientOriginalName();
        $directory='uploads/settings/logo';
        $image->storeAs($directory,$fileName,'public_files');
        return "$directory".'/'."$fileName";
    }
    public function UploadFileMain($image){
        $fileName=$image->getClientOriginalName();
        $directory='uploads/settings/main';
        $image->storeAs($directory,$fileName,'public_files');
        return "$directory".'/'."$fileName";
    }
    public function render()
    {
        $settings=Setting::all();
        return view('livewire.admin.settings.index',compact('settings'));
    }
}
