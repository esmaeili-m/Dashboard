<?php

namespace App\Http\Livewire\Home\Article;

use Artesaos\SEOTools\Facades\OpenGraph;
use Artesaos\SEOTools\Facades\SEOMeta;
use Livewire\Component;

class Index extends Component
{
    public function render()
    {
        SEOMeta::setDescription('مقالات آفتاب شرق');
        OpenGraph::addProperty('type', 'مقالات');
        return view('livewire.home.article.index')->layout('layouts.home');
    }
}
