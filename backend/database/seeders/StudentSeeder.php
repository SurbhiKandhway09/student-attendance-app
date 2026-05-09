<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Student::create([
        'name' => 'Rahul',
        'roll_number' => '101'
    ]);

    \App\Models\Student::create([
        'name' => 'Aman',
        'roll_number' => '102'
    ]);

    \App\Models\Student::create([
        'name' => 'Priya',
        'roll_number' => '103'
    ]);
    }
}
