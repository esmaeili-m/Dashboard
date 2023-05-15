<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});
////////////////////////////////////////////////////////////////-->home
Route::get('/',\App\Http\Livewire\Home\Index::class)->name('home');
Route::get('/singin',\App\Http\Livewire\Home\Singin\Index::class)->name('singin');
Route::get('/aboutUs',\App\Http\Livewire\Home\Aboute\Index::class)->name('aboutUs');
Route::get('/contactUs',\App\Http\Livewire\Home\Contact\Index::class)->name('contactUs');
Route::get('/article',\App\Http\Livewire\Home\Article\Index::class)->name('article');
Route::get('/article/{name}',\App\Http\Livewire\Home\Article\Details::class)->name('article.detials');
Route::get('/categories/{name}',\App\Http\Livewire\Home\Categories\Index::class)->name('categories');
Route::post('/message/store',[\App\Http\Controllers\MessageController::class,'store'])->name('message');
////////////////////////////////////////////////////////////////-->Admin
Route::prefix('admin')->group(function (){
    Route::get('/dashboard',\App\Http\Livewire\Admin\Index::class)->name('dashboard');
    ///////////////////////////////////////////////////////////////////////////////////////////////////-->Users
    Route::get('/users',\App\Http\Livewire\Admin\Users\Index::class)->name('users.index');
    Route::get('/users/create',\App\Http\Livewire\Admin\Users\Create::class)->name('users.create');
    Route::get('/users/update/{user}',\App\Http\Livewire\Admin\Users\Update::class)->name('users.update');
    //////////////////////////////////////////////////////////////////////////////////////////////////-->Categories
    Route::get('/Categories',\App\Http\Livewire\Admin\Categories\Index::class)->name('categories.index');
    Route::get('/Categories/update/{category}',\App\Http\Livewire\Admin\Categories\Update::class)->name('categories.update');
    //////////////////////////////////////////////////////////////////////////////////////////////////-->Articles
    Route::get('/Articels',\App\Http\Livewire\Admin\Articles\Index::class)->name('articles.index');
    Route::get('/Articels/create',\App\Http\Livewire\Admin\Articles\Create::class)->name('articles.create');
    Route::get('/Articels/update/{article}',\App\Http\Livewire\Admin\Articles\Update::class)->name('articles.update');
    /////////////////////////////////////////////////////////////////////////////////////////////////->socialMedia
    Route::get('/SocialMedia',\App\Http\Livewire\Admin\Social\Index::class)->name('social.index');
    Route::get('/SocialMedia/update/{socialMedia}',\App\Http\Livewire\Admin\Social\Update::class)->name('social.update');
    ////////////////////////////////////////////////////////////////////////////////////////////////->Posts
    Route::get('/posts',\App\Http\Livewire\Admin\Post\Index::class)->name('posts.index');
    Route::get('/posts/create',\App\Http\Livewire\Admin\Post\Create::class)->name('posts.create');
    Route::get('/posts/update/{post}',\App\Http\Livewire\Admin\Post\Update::class)->name('posts.update');
    /////////////////////////////////////////////////////////////////////////////////////////////////->settings
    Route::get('/settings',\App\Http\Livewire\Admin\Settings\Index::class)->name('settings.index');
    ////////////////////////////////////////////////////////////////////////////////////////////////////>gallery
    Route::get('/gallery',\App\Http\Livewire\Admin\Gallery\Index::class)->name('gallery.index');
    Route::get('/singin',\App\Http\Livewire\Admin\Singin\Index::class)->name('singin.index');
//    Route::get('/Categories/update/{category}',\App\Http\Livewire\Admin\Categories\Update::class)->name('ar.update');
    ////////////////////////////////////////////////////////////////////////////////////////////////////>message
    Route::get('/message',\App\Http\Livewire\Admin\Message\Index::class)->name('message.index');
});
Route::post('/upload/post-image',  [\App\Http\Controllers\UploadImageController::class, 'uploadImage'])->name('upload.post.image');





//Route::get('/dashboard', function () {
//    return view('dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
