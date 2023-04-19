<?php

namespace App\Http\Livewire\Admin\Post;

use App\Models\Post;
use Illuminate\Support\Facades\File;
use Livewire\Component;

class Index extends Component
{
    public $search;
    protected $queryString = ['search'];
    public function status($id){
        $post=Post::find($id);
        if ($post->status == 1){
            $post->update([
                'status'=>0
            ]);
            $this->dispatchBrowserEvent('swal:model',[
                'type'=>'success',
                'title'=>'پست با موفقیت غیر فعال گردید',
                'text'=>''
            ]);
        }else{
            $post->update([
                'status'=>1
            ]);
            $this->dispatchBrowserEvent('swal:model',[
                'type'=>'success',
                'title'=>'پست با موفقیت فعال گردید',
                'text'=>''
            ]);

        }

    }
    public function delete($id)
    {
        $post=Post::find($id);

        if (File::exists($post->image)){
            unlink($post->image);
        }else{
            return $this->dispatchBrowserEvent('swal:model',[
                'type'=>'error',
                'title'=>'پست حذف نشد',
                'text'=>''
            ]);
        }
        $post->delete();
        $this->dispatchBrowserEvent('swal:model',[
            'type'=>'success',
            'title'=>' پست با موفقیت حذف گردید',
            'text'=>''
        ]);
    }
    public function render()
    {
        $posts=Post::where('name', 'like', '%'.$this->search.'%')->with('category')->orderBy('order','asc')->get();
        return view('livewire.admin.post.index',compact('posts'));
    }
}
