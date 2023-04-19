<?php

namespace App\Http\Livewire\Admin\Post;

use App\Models\Post;
use App\Models\Seo;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Request;
use Intervention\Image\ImageManager;
use Livewire\Component;
use Livewire\WithFileUploads;

class Update extends Component
{
    use WithFileUploads;
    public $name;
    public $slug;
    public $old_image;
    public $image;
    public $description;
    public $order;
    public $old_order;
    public $category_id;
    public $post_id;
    public $old_slug;
    public $size=0;
    public $width;
    public $heigh;
    public $seoTitle;
    public $seoDescription;
    public $seoCategory;
    public function mount()
    {
        $this->post_id=Request::segment(4);
        $post=Post::find($this->post_id);
        $seo=Seo::where('type','posts')->where('post_id',$this->post_id)->first();
        if ($seo){
            $this->seoTitle=$seo->title;
            $this->seoDescription=$seo->description;
            $this->seoCategory=$seo->category;
        }
        $this->name=$post->name;
        $this->slug=$post->slug;
        $this->old_slug=$post->slug;
        $this->image=$post->image;
        $this->old_image=$post->image;
        $this->description=$post->description;
        $this->order=$post->order;
        $this->old_order=$post->order;
        $this->category_id=$post->category_id;

    }

    protected $rules =[
        'name'=>'required',
        'description'=>'required',
        'slug'=>'required',
        'image'=>'required',
        'category_id'=>'required',
    ];
    public function update()
    {
        $this->validate();
        $max=Post::max('order');
        if ($this->order != $this->old_order){
            if ($this->old_order>$this->order){
                $articles=Post::where('order','>=',$this->order)->where('order','<',$this->old_order)->increment('order');
            }else{
                if ($this->order>$max){
                    $this->order=$max+1;
                }else{
                    Post::where('order','<=',$this->order)->where('order','>',$this->old_order)->decrement('order');
                }
            }
        }
        if ($this->slug != $this->old_slug){
            $check=Post::where('slug',$this->slug)->count();
            if ($check>0){
                return $this->dispatchBrowserEvent('swal:model',[
                    'type'=>'error',
                    'title'=>'لطفا آدرس دیگری را انتخاب کنید این آدرس از قبل انتخاب شده است',
                    'text'=>''
                ]);
            }
        }
//        dd($this->image , $this->old_image);

        if ($this->image != $this->old_image){
            if (File::exists($this->old_image)){
                unlink($this->old_image);
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
            }else{
                return $this->dispatchBrowserEvent('swal:model',[
                    'type'=>'error',
                    'title'=>'فایل یافت نشد',
                    'text'=>''
                ]);
            }
        }

        $post=Post::where('id',$this->post_id)->update([
            'name'=>$this->name,
            'slug'=>$this->slug,
            'order'=>$this->order,
            'category_id'=>$this->category_id,
            'image'=>$this->image,
            'user'=>auth()->user()->name,
            'description'=>$this->description,
        ]);
        if ($this->seoTitle || $this->seoDescription || $this->seoCategory){
            $seo=Seo::where('type','posts')->where('post_id',$this->post_id)->first();
            if($seo){
                Seo::where('post_id',$this->post_id)->update([
                    'title'=>$this->seoTitle,
                    'description'=>$this->seoDescription,
                    'category'=>$this->seoCategory,
                    'type'=>'posts',
                    'post_id'=>$this->post_id
                ]);
            }else{
                Seo::create([
                    'title'=>$this->seoTitle,
                    'description'=>$this->seoDescription,
                    'category'=>$this->seoCategory,
                    'type'=>'posts',
                    'post_id'=>$this->post_id
                ]);
            }
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
        return view('livewire.admin.post.update');
    }
}
