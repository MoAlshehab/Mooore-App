<?php

namespace App\Http\Controllers;

use App\Models\Products;
use App\Models\Country;

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
    public function store(Request $request )
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

  

    public function showproducts($country)
    {
        $countryMapping = [
            'nederland' => 1,
            'duisland' => 2,
            'engeland' => 3,
            'unknown' => 4,
        ];
    
        $query = Products::select('id_stnk', 'country_id', 'brand', 'type', 'description', 'stock', 'location')
            ->with("country");
    
        if (isset($countryMapping[$country])) {
            $query->where('country_id', $countryMapping[$country]);
        }
    
        // Haal de producten op
        $products = $query->get();
    
        return $products;
    }
    
// return $country;
    
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

    
    public function updateStock(Request $request, $id)
    {
        $product = Products::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product niet gevonden'], 404);
        }

        $request->validate([
            'stock' => 'required|integer',
        ]);

        $product->stock = $request->input('stock');
        $product->save();

        return response()->json(['message' => 'Voorraad bijgewerkt']);
    }

}
