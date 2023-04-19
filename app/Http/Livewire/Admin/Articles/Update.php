<?php

namespace App\Http\Livewire\Admin\Articles;

use App\Models\Article;
use App\Models\Category;
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
    public $article_id;
    public $old_slug;
    public $size=0;
    public $width;
    public $heigh;
    public $seoTitle;
    public $seoDescription;
    public $seoCategory;
    public function mount()
    {
        $this->article_id=Request::segment(4);
        $article=Article::find($this->article_id);
        $seo=Seo::where('post_id',$this->article_id)->first();
        if ($seo){
            $this->seoTitle=$seo->title;
            $this->seoDescription=$seo->description;
            $this->seoCategory=$seo->category;
        }
        $this->name=$article->name;
        $this->slug=$article->slug;
        $this->old_slug=$article->slug;
        $this->image=$article->image;
        $this->old_image=$article->image;
        $this->description=$article->description;
        $this->order=$article->order;
        $this->old_order=$article->order;
        $this->category_id=$article->category_id;
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
        $max=Article::max('order');
        if ($this->order != $this->old_order){
            if ($this->old_order>$this->order){
                $articles=Article::where('order','>=',$this->order)->where('order','<',$this->old_order)->increment('order');
            }else{
                  if ($this->order>$max){
                      $this->order=$max+1;
                   }else{
                      Article::where('order','<=',$this->order)->where('order','>',$this->old_order)->decrement('order');
                  }
            }
        }
        if ($this->slug != $this->old_slug){
            $check=Article::where('slug',$this->slug)->count();
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

        $article=Article::where('id',$this->article_id)->update([
            'name'=>$this->name,
            'slug'=>$this->slug,
            'order'=>$this->order,
            'category_id'=>$this->category_id,
            'image'=>$this->image,
            'user'=>auth()->user()->name,
            'description'=>$this->description,
        ]);
        if ($this->seoTitle || $this->seoDescription || $this->seoCategory){
            $seo=Seo::where('type','articles')->where('post_id',$this->article_id)->first();
            if($seo){
                Seo::where('post_id',$this->article_id)->update([
                    'title'=>$this->seoTitle,
                    'description'=>$this->seoDescription,
                    'category'=>$this->seoCategory,
                    'type'=>'articles',
                    'post_id'=>$this->post_id
                ]);
            }else{
                Seo::create([
                    'title'=>$this->seoTitle,
                    'description'=>$this->seoDescription,
                    'category'=>$this->seoCategory,
                    'type'=>'articles',
                    'post_id'=>$this->post_id
                ]);
            }
        }
        return redirect()->route('articles.index');

    }
    public function UploadFile($image,$newsize){
        $fileName=$image->getClientOriginalName();
        $directory='uploads/articles'.'/'.now()->year.'/'.now()->month.'/'.now()->day.'/'.now()->second;
        $image->storeAs($directory,$fileName,'public_files');
        $manager=new ImageManager();
        if($newsize){
            $image = $manager->make("$directory".'/'."$fileName")->resize($this->width, $this->heigh)->save("$directory".'/'."$fileName");
        }
        return "$directory".'/'."$fileName";
    }
    public function render()
    {

        return view('livewire.admin.articles.update');
    }
}
