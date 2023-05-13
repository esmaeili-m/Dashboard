<?php

namespace App\Http\Livewire\Admin\Message;

use App\Models\Message;
use Livewire\Component;

class Index extends Component
{
    public $search;
    protected $queryString = ['search'];

    public function delete($id)
    {
        Message::find($id)->delete();
        $this->dispatchBrowserEvent('swal:model',[
            'type'=>'success',
            'title'=>' پیام با موفقیت حذف گردید',
            'text'=>''
        ]);
    }
    public function render()
    {
        $messages=Message::where('name', 'like', '%'.$this->search.'%')->get();
        return view('livewire.admin.message.index',compact('messages'));
    }
}
