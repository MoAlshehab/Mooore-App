<?php

namespace Database\Seeders;
use App\Models\Products;


use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    
    public function run(): void
    {
        Products::factory()->times(30)->create();

    }
}
