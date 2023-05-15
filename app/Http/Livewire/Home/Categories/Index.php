<?php

namespace App\Http\Livewire\Home\Categories;

use App\Models\Category;
use App\Models\Seo;
use App\Models\Setting;
use Artesaos\SEOTools\Facades\OpenGraph;
use Artesaos\SEOTools\Facades\SEOMeta;
use Livewire\Component;

class Index extends Component
{
    public function render()
    {
        $slug=request()->segment(2);
        $categories=Category::where('slug',$slug)->first();
        ///////////////////////////////////////////////>seo
        $seo=Seo::where('type','category')->where('post_id',$categories->id)->first();
        if($seo){
            SEOMeta::setDescription($seo->description);
        }
        OpenGraph::addProperty('type', 'دوره ها');
        return view('livewire.home.categories.index',compact('categories'))->layout('layouts.home');
    }
}
