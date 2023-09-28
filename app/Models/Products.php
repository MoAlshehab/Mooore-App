<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    protected $fillable = ['brand','type','description','stock','location'];


    public function country()
    {
        return $this->belongsTo( Country::class,'country_id', 'id');
       
    }
  
}
