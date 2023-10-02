<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{

    // public function index()
    // {
    //     return Inertia::render('');
    // }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Products::select('id_stnk', 'country_id', 'brand', 'type', 'description', 'stock', 'location')->with("country")->get();

    } 
   /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'country_id' => 'required',
            'brand' => 'required',
            'type' => 'required',
            'description' => 'required',
            'stock' => 'required',
            'location' => 'required',

        ]);
        Products::create($request->post());
            return response()->json([
                'message'=>'It is successfully'
            ]);
    }

    public function nlProducts ()
    {
        return Products::select('id_stnk', 'country_id', 'brand', 'type', 'description', 'stock', 'location')->with("country")->where('country_id',3)->get();
          
    }

    /**
     * Display the specified resource.
     */
    public function show(Products $products)
    {
        return response()->json([
            'products' => $products
            
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Products $products)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Products $products)
    {
        $request->validate([
            'country_id' => 'required',
            'brand' => 'required',
            'type' => 'required',
            'description' => 'required',
            'stock' => 'nullable',
            'location' => 'required',

        ]);
        $products->fill($request->post())->update();


        Products::create($request->post())->save();
        return response()->json([
            'message'=>'It is successfully'
        ]);
    }
    public function showproducts( $country)
    {
        if($country == "nederland")
        {  
            return Products::select('id_stnk', 'country_id', 'brand', 'type', 'description', 'stock', 'location')->with("country")->where('country_id', 1)->get();
        }
        if($country == "duisland")
        {  
            return Products::select('id_stnk', 'country_id', 'brand', 'type', 'description', 'stock', 'location')->with("country")->where('country_id', 2)->get();
        }
        if($country == "engeland")
        {  
            return Products::select('id_stnk', 'country_id', 'brand', 'type', 'description', 'stock', 'location')->with("country")->where('country_id', 3)->get();
        }
        if($country == "unknown")
        {  
            return Products::select('id_stnk', 'country_id', 'brand', 'type', 'description', 'stock', 'location')->with("country")->where('country_id', 4)->get();
        }
// return $country;
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Products $products)
    {
        $products->delete();
        return response()->json([
            'message'=>'Item deleted successfully'
        ]);
    }
}
