<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Country;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Country::create([
            'name' => 'Nederland',
            'country_code' => 'NL'
        ]);
        Country::create([
            'name' => 'Duitsland',
            'country_code' => 'DE'

        ]);
        Country::create([
            'name' => 'Engeland',
            'country_code' => 'EN'


        ]);
        Country::create([
            'name' => 'unknown',
            'country_code' => 'nulle'


        ]);

    }
}