<?php

namespace App\Http\Livewire\Admin\Post;

use App\Models\Post;
use App\Models\Seo;
use Intervention\Image\ImageManager;
use Livewire\Component;
use Livewire\WithFileUploads;

class Create extends Component
{
    use WithFileUploads;
    public $name;
    public $image;
    public $description;
    public $slug;
    public $order;
    public $width;
    public $heigh;
    public $category_id;
    public $size=0;
    public $seoTitle;
    public $seoDescription;
    public $seoCategory;

    public function mount()
    {
        $max=Post::max('order');
        if ($max){
            $this->order=$max+1;

        }else{
            $this->order=1;
        }
    }
    protected $rules =[
        'name'=>'required',
        'description'=>'required',
        'slug'=>'required|unique:posts,slug',
        'image'=>'required',
        'category_id'=>'required',
    ];
    public function create()
    {
        $this->validate();
        $maxOrder=Post::max('order');
        if($this->order){
            if ($maxOrder<$this->order){
                $this->order=$maxOrder+1;
            }else{
                Post::where('order','>=',$this->order)->increment('order');
            }
        }else{
            if ($maxOrder){
                $this->order=$maxOrder+1;
            }else{
                $this->order=1;
            }
        }
        if ($this->size){
            if(!$this->width || !$this->heigh){
                return $this->dispatchBrowserEvent('swal:model',[
                    'type'=>'error',
                    'title'=>'ابعاد تصویر را انتخاب کنید',
                    'text'=>''
                ]);
            }
        }
        $this->image=$this->UploadFile($this->image,$this->size);
        $newPost=Post::create([
            'name'=>$this->name,
            'description'=>$this->description,
            'image'=>$this->image,
            'slug'=>$this->slug,
            'order'=>$this->order,
            'user'=>auth()->user()->name,
            'category_id'=>$this->category_id,

        ]);
        if ($this->seoTitle || $this->seoDescription || $this->seoCategory){
            Seo::create([
                'title'=>$this->seoTitle,
                'description'=>$this->seoDescription,
                'category'=>$this->seoCategory,
                'type'=>'posts',
                'post_id'=>$newPost->id
            ]);
        }
        return redirect()->route('posts.index');
    }
    public function UploadFile($image,$newsize){
        $fileName=$image->getClientOriginalName();
        $directory='uploads/posts'.'/'.now()->year.'/'.now()->month.'/'.now()->day.'/'.now()->second;
        $image->storeAs($directory,$fileName,'public_files');
        $manager=new ImageManager();
        if($newsize){
            $image = $manager->make("$directory".'/'."$fileName")->resize($this->width, $this->heigh)->save("$directory".'/'."$fileName");
        }
        return "$directory".'/'."$fileName";
    }


    public function render()
    {
        return view('livewire.admin.post.create');
    }
}
