<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use  HasFactory;
    protected $fillable = ['id','name','country_code'];

    public function products()
    {
        return $this->hasMany( Products::class ,'id', 'country_id');
       
    }

}


