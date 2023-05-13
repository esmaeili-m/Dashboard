<?php

namespace App\Http\Livewire\Admin\Singin;

use App\Models\SingIn;
use Livewire\Component;

class Index extends Component
{
    public $search;
    protected $queryString = ['search'];
    public function render()
    {
        $singin=SingIn::where('name', 'like', '%'.$this->search.'%')->orderBy('id','desc')->get();

        return view('livewire.admin.singin.index',compact('singin'));
    }
}
