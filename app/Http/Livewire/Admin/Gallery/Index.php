<?php

namespace App\Http\Livewire\Admin\Gallery;

use App\Models\Gallery;
use Illuminate\Support\Facades\File;
use Intervention\Image\ImageManager;
use Livewire\Component;
use Livewire\WithFileUploads;

class Index extends Component
{
    use WithFileUploads;
    public $image;
    public function create()
    {
        if ($this->image){
            $this->image=$this->UploadFile($this->image);
            $newArticle=Gallery::create([
                'image'=>$this->image,
            ]);
            $this->image="";
        }
    }
    public function status($id){
        $category=Gallery::find($id);
        if ($category->status == 1){
            $category->update([
                'status'=>0
            ]);
            $this->dispatchBrowserEvent('swal:model',[
                'type'=>'success',
                'title'=>'تصویر با موفقیت غیر فعال گردید',
                'text'=>''
            ]);
        }else{
            $category->update([
                'status'=>1
            ]);
            $this->dispatchBrowserEvent('swal:model',[
                'type'=>'success',
                'title'=>'تصویر با موفقیت فعال گردید',
                'text'=>''
            ]);

        }

    }
    public function delete($id)
    {
        $article=Gallery::find($id);

        if (File::exists($article->image)){
            unlink($article->image);
        }else{
            return $this->dispatchBrowserEvent('swal:model',[
                'type'=>'error',
                'title'=>'تصویر حذف نشد',
                'text'=>''
            ]);
        }
        $article->delete();
        $this->dispatchBrowserEvent('swal:model',[
            'type'=>'success',
            'title'=>'تصویر با موفقیت حذف گردید',
            'text'=>''
        ]);
    }
    public function UploadFile($image){
        $fileName=$image->getClientOriginalName();
        $directory='uploads/gallery/'.now()->year.'/'.now()->month.'/'.now()->day.'/'.now()->second;
        $image->storeAs($directory,$fileName,'public_files');
        return "$directory".'/'."$fileName";
    }
    public function render()
    {
        return view('livewire.admin.gallery.index');
    }
}
