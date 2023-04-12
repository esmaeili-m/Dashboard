<?php

namespace App\Http\Livewire\Admin\Articles;

use App\Models\Article;
use App\Models\Category;
use App\Models\User;
use Illuminate\Support\Facades\File;
use Livewire\Component;

class Index extends Component
{
    public $search;
    protected $queryString = ['search'];
    public function status($id){
        $article=Article::find($id);
        if ($article->status == 1){
            $article->update([
                'status'=>0
            ]);
            $this->dispatchBrowserEvent('swal:model',[
                'type'=>'success',
                'title'=>'مقاله با موفقیت غیر فعال گردید',
                'text'=>''
            ]);
        }else{
            $article->update([
                'status'=>1
            ]);
            $this->dispatchBrowserEvent('swal:model',[
                'type'=>'success',
                'title'=>'مقاله با موفقیت فعال گردید',
                'text'=>''
            ]);

        }

    }
    public function delete($id)
    {
        $article=Article::find($id);

        if (File::exists($article->image)){
            unlink($article->image);
        }else{
            return $this->dispatchBrowserEvent('swal:model',[
                'type'=>'error',
                'title'=>'مقاله حذف نشد',
                'text'=>''
            ]);
        }
        $article->delete();
        $this->dispatchBrowserEvent('swal:model',[
            'type'=>'success',
            'title'=>' مقاله با موفقیت حذف گردید',
            'text'=>''
        ]);
    }
    public function render()
    {
        $articels=Article::where('name', 'like', '%'.$this->search.'%')->with('category')->orderBy('order','asc')->get();
        return view('livewire.admin.articles.index',compact('articels'));
    }
}
