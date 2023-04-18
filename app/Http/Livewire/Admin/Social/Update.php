<?php

namespace App\Http\Livewire\Admin\Social;

use App\Models\Social;
use Illuminate\Support\Facades\Request;
use Livewire\Component;

class Update extends Component
{
    public $name;
    public $link;
    public $status;
    public $social_id;

    public function mount()
    {
      $this->social_id=Request::segment(4);
      $socialMedia=Social::find($this->social_id);
      $this->name=$socialMedia->name;
      $this->link=$socialMedia->link;
    }
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
    public function render()
    {
        return view('livewire.admin.social.update');
    }
}
