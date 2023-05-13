<?php

namespace App\Http\Livewire\Home\Contact;

use Livewire\Component;

class Index extends Component
{
    public function render()
    {
        return view('livewire.home.contact.index')->layout('layouts.home');
    }
}
