<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
        'slug',
        'like',
        'user_id',
        'description',
        'image',
        'user',
        'status',
        'category_id',
        'order',

    ];

    public function category()
    {
        return $this->belongsTo(Category::class,'category_id','id');
    }
}
