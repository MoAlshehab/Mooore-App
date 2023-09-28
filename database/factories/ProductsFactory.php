<?php

namespace Database\Factories;
use App\Models\Product;


use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Products>
 */
class ProductsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'country_id' =>$this->faker->biasedNumberBetween(1,4),
            "brand" => $this->faker->title,
            "type" =>  $this->faker->title,
            "description" =>$this->faker->sentence,
            "stock" => $this->faker->biasedNumberBetween(1,11),
            "location" => $this->faker->city,
        ];
    }
}

