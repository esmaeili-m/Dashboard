<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Article::truncate();
        $this->articleCreate();
    }

    public function articleCreate()
    {

        for($i=1;$i<15;$i++){
            Article::create([
               'name'=>fake()->name().' ('.$i,
               'slug'=>'url'.$i,
               'description'=>fake()->text(),
               'image'=>'uploads/articles/seeder/'.rand(1,92).'.jpg',
               'order'=>$i,
               'user'=>$i,
               'category_id'=>1
            ]);
        }
    }
}
