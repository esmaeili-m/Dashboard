<?php

namespace App\Http\Livewire\Admin\Categories;

use App\Models\Category;
use Livewire\Component;

class Index extends Component
{
    public $search;
    protected $queryString = ['search'];
    public $name;
    public $slug;
    public $father;
    public $description;

    protected $rules =[
        'name'=>'required',
        'slug'=>'required|unique:categories,slug',
    ];
    public function create()
    {
        $this->validate();
        Category::create([
           'name'=>$this->name,
           'slug'=>$this->slug,
           'father_id'=>$this->father,
           'description'=>$this->description,
        ]);
        $this->dispatchBrowserEvent('swal:model',[
            'type'=>'success',
            'title'=>'دسته بندی با موفقیت ایجاد گردید',
            'text'=>''
        ]);
        $this->father="";
        return redirect()->route('categories.index');
    }
    public function status($id){
        $category=Category::find($id);
        if ($category->status == 1){
            $category->update([
                'status'=>0
            ]);
            $this->dispatchBrowserEvent('swal:model',[
                'type'=>'success',
                'title'=>'دسته بندی با موفقیت غیر فعال گردید',
                'text'=>''
            ]);
        }else{
            $category->update([
                'status'=>1
            ]);
            $this->dispatchBrowserEvent('swal:model',[
                'type'=>'success',
                'title'=>'دسته بندی با موفقیت فعال گردید',
                'text'=>''
            ]);

        }

    }
    public function delete($id)
    {
        Category::find($id)->delete();
        $this->dispatchBrowserEvent('swal:model',[
            'type'=>'success',
            'title'=>'دسته بندی با موفقیت حذف گردید',
            'text'=>''
        ]);
        $this->father_id="";
        return redirect()->route('categories.index');

    }
    public function render()
    {
        $categories=Category::where('name', 'like', '%'.$this->search.'%')->get();
        return view('livewire.admin.categories.index',compact('categories'));
    }
}
