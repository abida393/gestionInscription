<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class formateurController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $formateur = User::where("role", "Enseignant")->get();
        return response()->json([$formateur]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = new User();
        $user->id_user = $request->id_user;
        $user->Nom_user = $request->Nom_user;
        $user->Prenom_user = $request->Prenom_user;
        $user->date_naiss = $request->date_naiss;
        $user->sexe = $request->sexe;
        $user->tel = $request->tel;
        $user->role = "Enseignant";
        $user->semestre_id = $request->semestre_id;
        $user->save();
        return response()->json($user);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $formateur = User::findOrFail($id);
        return response()->json([$formateur]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $formateur = User::findOrFail($id);
        $formateur->Nom_user = $request->Nom_user;
        $formateur->Prenom_user = $request->Prenom_user;
        $formateur->date_naiss = $request->date_naiss;
        $formateur->sexe = $request->sexe;
        $formateur->tel = $request->tel;
        $formateur->role = "Enseignant";
        $formateur->semestre_id = $request->semestre_id;
        $formateur->save();
        return response()->json([$formateur]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $formateur = User::findOrFail($id);
        $formateur->delete();
        return response()->json([$formateur]);
    }
}
