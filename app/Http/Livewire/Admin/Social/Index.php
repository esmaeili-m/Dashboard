<?php

namespace App\Http\Livewire\Admin\Social;

use App\Models\Social;
use Livewire\Component;

class Index extends Component
{
    public $search;
    protected $queryString = ['search'];
    public $name;
    public $link;
    public $status;

    protected $rules =[
        'name'=>'required',
        'link'=>'required',
    ];
    public function create()
    {
        $this->validate();

        Social::create([
            'name'=>$this->name,
            'link'=>$this->link,
        ]);
        $this->dispatchBrowserEvent('swal:model',[
            'type'=>'success',
            'title'=>'شبکه اجتماعی با موفقیت ایجاد گردید',
            'text'=>''
        ]);
        $this->name="";
    }
    public function status($id){
        $social=Social::find($id);
        if ($social->status == 1){
            $social->update([
                'status'=>0
            ]);
            $this->dispatchBrowserEvent('swal:model',[
                'type'=>'success',
                'title'=>'شبکه اجتماعی با موفقیت غیر فعال گردید',
                'text'=>''
            ]);
        }else{
            $social->update([
                'status'=>1
            ]);
            $this->dispatchBrowserEvent('swal:model',[
                'type'=>'success',
                'title'=>'شبکه اجتماعی با موفقیت فعال گردید',
                'text'=>''
            ]);

        }

    }
    public function delete($id)
    {
        Social::find($id)->delete();
        $this->dispatchBrowserEvent('swal:model',[
            'type'=>'success',
            'title'=>'شبکه اجتماعی با موفقیت حذف گردید',
            'text'=>''
        ]);


    }
    public function render()
    {
        $social=Social::where('name', 'like', '%'.$this->search.'%')->get();
        return view('livewire.admin.social.index',compact('social'));
    }
}
