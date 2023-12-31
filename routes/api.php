<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('/products', [App\Http\Controllers\ProductsController::class, 'index']);
Route::get('/country', [App\Http\Controllers\CountryController::class, 'index']);
Route::get('/products/{country}', [App\Http\Controllers\ProductsController::class, 'showproducts']);
Route::put('/products/{country}/update-stock', [App\Http\Controllers\ProductsController::class, 'updateStock']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
