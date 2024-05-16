<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $primaryKey = 'id_user'; // Specify the primary key
    protected $fillable = ['Nom_user', 'Prenom_user', 'date_naiss', 'sexe', 'tel', 'role', 'semestre_id']; // Specify the fillable fields

    public function semestre()
    {
        return $this->belongsTo('App\Semestre', 'semestre_id');
    }
}
