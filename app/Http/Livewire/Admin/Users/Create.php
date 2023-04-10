<?php

namespace App\Http\Livewire\Admin\Users;

use App\Models\User;
use Livewire\Component;

class Create extends Component
{
    public $name;
    public $email;
    public $pass;

    protected $rules =[
      'name'=>'required',
      'email'=>'required',
      'pass'=>'required',
    ];
    public function create()
    {
        $this->validate();
        User::create([
           'name'=>$this->name,
           'email'=>$this->email,
           'password'=>bcrypt($this->pass),
        ]);
        return redirect()->route('users.index');
    }
    public function render()
    {
        return view('livewire.admin.users.create');
    }
}
