<?php

namespace App\Http\Livewire\Admin\Articles;

use App\Models\Article;
use App\Models\User;
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
    public $category_id;


    protected $rules =[
        'name'=>'required',
        'description'=>'required',
        'slug'=>'required|unique:articles,slug',
        'image'=>'required',
        'category_id'=>'required',
    ];
    public function create()
    {

        $this->validate();
        $maxOrder=Article::max('order');
        if($this->order){
            if ($maxOrder<$this->order){
                $this->order=$maxOrder+1;
            }else{
                Article::where('order','>=',$this->order)->increment('order');
            }
        }else{
            if ($maxOrder){
                $this->order=$maxOrder+1;
            }else{
                $this->order=1;
            }
        }
        $this->image=$this->UploadFile($this->image);
        Article::create([
            'name'=>$this->name,
            'description'=>$this->description,
            'image'=>$this->image,
            'slug'=>$this->slug,
            'order'=>$this->order,
            'user'=>auth()->user()->name,
            'category_id'=>$this->category_id,

        ]);
        return redirect()->route('articles.index');
    }
    public function UploadFile($image){
        $fileName=$image->getClientOriginalName();
        $directory='uploads/articles'.'/'.now()->year.'/'.now()->month.'/'.now()->day.'/'.now()->second;
        $image->storeAs($directory,$fileName,'public_files');
        return "$directory".'/'."$fileName";
    }
    public function render()
    {
        return view('livewire.admin.articles.create');
    }
}
