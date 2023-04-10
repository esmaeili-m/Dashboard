<?php

namespace App\Http\Livewire\Admin\Users;

use App\Models\User;
use Illuminate\Support\Facades\Request;
use Livewire\Component;

class Update extends Component
{
    public $name;
    public $email;
    public $pass;
    public $user_id;

    public function mount()
    {
       $id=Request::segment(4);
       $user=User::find($id);
       $this->name=$user->name;
       $this->email=$user->email;
       $this->user_id=$user->id;
    }
    protected $rules =[
        'name'=>'required',
        'email'=>'required',
    ];
    public function update()
    {
        $this->validate();
        $user=User::where('id',$this->user_id);
        if ($this->pass){
            $user->update([
                'name'=>$this->name,
                'email'=>$this->email,
                'password'=>bcrypt($this->pass),
            ]);
        }else{
            $user->update([
                'name'=>$this->name,
                'email'=>$this->email,
            ]);
        }

        return redirect()->route('users.index');
    }
    public function render()
    {
        return view('livewire.admin.users.update');
    }
}
