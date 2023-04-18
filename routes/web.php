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

Route::get('/', function () {
    return view('welcome');
});
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


//    Route::get('/Categories/update/{category}',\App\Http\Livewire\Admin\Categories\Update::class)->name('ar.update');

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
