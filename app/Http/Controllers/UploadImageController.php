<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class UploadImageController extends Controller
{
    public function uploadImage(Request $request){
        $fileName=$request->file('file')->getClientOriginalName();
        $base=
        $directory="/uploads/editor/articles";
//        $directory=public_path()."/uploads/editor/articles";
        $a=$directory.'/'."$fileName";
        $path=$request->file('file')->storeAs('/uploads/editor/articles', $fileName, 'public_files');

        return response()->json(['location'=> "$a"]);
    }
}
