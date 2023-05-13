<?php

namespace App\Http\Livewire\Home\Singin;

use App\Jobs\EmailJob;
use App\Mail\SingInMail;
use App\Models\SingIn;
use Illuminate\Support\Facades\Mail;
use Livewire\Component;

class Index extends Component
{
    public $madrak;
    public $name;
    public $number;
    public $type;
    protected $rules=[
      'name'=>'required',
      'number'=>'required|min:11|max:11',
      'madrak'=>'required',
      'type'=>'required',
    ];
    protected $messages = [
        'name.required' => 'فیلد نام الزامیست',
        'madrak.required' => ' لطفا یکی از گزینه ها را انتخاب کنید.',
        'type.required' => ' لطفا یکی از گزینه ها را انتخاب کنید.',
        'number.required' => 'فیلد شماره تلفن الزامیست',
        'number.min' => 'لطفا یک شماره تلفن معتبر وارد کنید',
        'number.max' => 'لطفا یک شماره تلفن معتبر وارد کنید',
    ];
    public function singin()
    {
        $this->validate();
        SingIn::create([
           'name'=>$this->name,
           'number'=>$this->number,
           'type'=>$this->type,
           'madrak'=>$this->madrak,
        ]);

        $data=[
          'title'=>'ثبت نام',
          'body'=>'ثبت نام متقاضی دوره',
          'arash'=>'آرش عامل بگایی',
          'name'=>$this->name,
          'number'=>$this->number,
          'type'=>$this->type,
          'madrak'=>$this->madrak,
          'email'=>'mahdiesmaeili1011@gmail.com'
        ];
        dispatch(new EmailJob($data));
//        dispatch(new App\Jobs\EmailJobs($data));
        $this->name='';
        $this->number='';
        $this->type='';
        $this->madrak='';
//        Mail::to('mahdiesmaeili1011@gmail.com')->send(new SingInMail($data));
        session()->flash('message', 'پیام شما با موفقیت ثبت گردید.');
    }
    public function render()
    {
        return view('livewire.home.singin.index')->layout('layouts.home');
    }
}
