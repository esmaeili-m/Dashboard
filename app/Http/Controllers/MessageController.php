<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessageRequest;
use App\Models\Message;
use Illuminate\Http\Request;
use Stevebauman\Location\Facades\Location;

class MessageController extends Controller
{
    public function store(MessageRequest $request)
    {
        $ip=\Illuminate\Support\Facades\Request::ip();
        $location=Location::get('162.159.24.227');
        $location=collect($location)->only(['ip','countryName','cityName'])->toArray();
        Message::create([
           'name'=>$request->name,
           'message'=>$request->message,
           'email'=>$request->email,
           'info'=>$location,
        ]);
        return redirect()->back()->with('alert','پیام شما با موفقیت ثبت شد');

    }
}
