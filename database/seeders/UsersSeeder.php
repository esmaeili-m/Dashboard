<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        User::truncate();
        if (User::count() == 0){
            $this->createUser();
        }

    }
    private function createUser(){
        for ($i=0;$i<10;$i++){
            User::create([
                'name' => 'مهدی اسماعیلی',
                'email' => 'mahdiesmaeili@gmail.com'.$i,
                'password' => bcrypt('mahdicfc')
            ]);
        }

    }
}
