<?php

namespace App\Http\Livewire\Home;

use App\Models\Setting;
use Livewire\Component;

class Index extends Component
{
    public $active;

    public function mount()
    {
        $this->active="";
    }
    public function change()
    {
       dd('mahdi');
    }
    public function render()
    {
        $settings=Setting::find(1);
        return view('livewire.home.index',compact('settings'))->layout('layouts.home');
    }
}
