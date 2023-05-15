<?php

namespace App\Http\Livewire\Home\Article;

use App\Models\Article;
use App\Models\Seo;

use Artesaos\SEOTools\Facades\OpenGraph;
use Artesaos\SEOTools\Facades\SEOMeta;
use Illuminate\Support\Facades\Request;
use Livewire\Component;

class Details extends Component
{

    public function render()
    {

        $slug=request()->segment(2);
        $article=Article::where('slug',$slug)->first();
        ///////////////////////////////////////////////>seo
        $seo=Seo::where('type','articles')->where('post_id',$article->id)->first();
        if($seo){
            SEOMeta::setDescription($seo->description);
        }
        OpenGraph::addProperty('type', 'مقالات');
        return view('livewire.home.article.details',compact('article'))->layout('layouts.home');
    }
}
