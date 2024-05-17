<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormateurController; // Adjust the namespace if necessary

// Define apiResource route for users with the correct controller name
Route::apiResource('Enseignant',FormateurController::class);

