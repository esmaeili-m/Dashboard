<?php

namespace App\Http\Livewire\Admin\Categories;

use App\Models\Category;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Request;
use Livewire\Component;
use Livewire\WithFileUploads;

class Update extends Component
{
    use WithFileUploads;

    public $name;
    public $description;
    public $father_id;
    public $slug;
    public $old_slug;
    public $category_id;
    public $old_image;
    public $image;

    public function mount()
    {
       $this->category_id=Request::segment(4);
       $category=Category::find($this->category_id);
       $this->name=$category->name;
       $this->slug=$category->slug;
       $this->description=$category->description;
       $this->father_id=$category->father_id;
       $this->old_slug=$category->slug;
       $this->old_image=$category->image;
    }
    protected $rules =[
        'name'=>'required',
        'slug'=>'required',
    ];
    public function update()
    {
        $this->validate();
        if ($this->father_id == ""){
            $this->father_id=null;
        }
        if ($this->image != $this->old_image){
            if (File::exists($this->old_image)){
                unlink($this->old_image);

                $this->image=$this->UploadFile($this->image);
            }else{
                return $this->dispatchBrowserEvent('swal:model',[
                    'type'=>'error',
                    'title'=>'فایل یافت نشد',
                    'text'=>''
                ]);
            }
        }
        if($this->old_slug == $this->slug){
            $category=Category::where('id',$this->category_id);
            $category->update([
               'name'=>$this->name,
               'father_id'=>$this->father_id,
               'image'=>$this->image,
               'slug'=>$this->slug,
               'description'=>$this->description,
            ]);
            $this->dispatchBrowserEvent('swal:model',[
                'type'=>'success',
                'title'=>'دسته بندی با موفقیت ویرایش شد',
                'text'=>''
            ]);

            return redirect()->route('categories.index');
        }else{
            $validateSlug=Category::where('slug',$this->slug)->count();
            if ($validateSlug>0){
                $this->dispatchBrowserEvent('swal:model',[
                    'type'=>'error',
                    'title'=>'این آدرس از قبل انتخاب شده است لطفا ادرس دیگری را وارد کنید',
                    'text'=>''
                ]);
            }else{
                $category=Category::where('id',$this->category_id);
                $category->update([
                    'name'=>$this->name,
                    'father_id'=>$this->father_id,
                    'image'=>$this->image,
                    'slug'=>$this->slug,
                    'description'=>$this->description,
                ]);
                $this->dispatchBrowserEvent('swal:model',[
                    'type'=>'success',
                    'title'=>'دسته بندی با موفقیت ویرایش شد',
                    'text'=>''
                ]);
                return redirect()->route('categories.index');

            }
        }
//       $slug=Notwhere('slug',$this->old_slug)->where()
    }
    public function UploadFile($image){
        $fileName=$image->getClientOriginalName();
        $directory='uploads/categories'.'/'.now()->year.'/'.now()->month.'/'.now()->day.'/'.now()->second;
        $image->storeAs($directory,$fileName,'public_files');
        return "$directory".'/'."$fileName";
    }
    public function render()
    {
        return view('livewire.admin.categories.update');
    }
}
