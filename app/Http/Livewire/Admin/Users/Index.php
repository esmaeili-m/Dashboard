<?php

namespace App\Http\Livewire\Admin\Users;

use App\Models\User;
use Livewire\Component;

class Index extends Component
{
    public $search;

    protected $queryString = ['search'];

    public function delete($id)
    {
        User::find($id)->delete();
        $this->dispatchBrowserEvent('swal:model',[
            'type'=>'success',
            'title'=>'کاربر با موفقیت حذف گردید',
            'text'=>''
        ]);
    }
    public function render()
    {
        $users=User::where('name', 'like', '%'.$this->search.'%')->get();
        return view('livewire.admin.users.index',compact('users'));
    }
}
