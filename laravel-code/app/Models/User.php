<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;
    protected $table = "users";
    protected $primaryKey = 'id_user'; // Specify the primary key
    protected $fillable = ['Nom_user', 'Prenom_user', 'date_naiss', 'sexe', 'tel', 'role', 'semestre_id']; // Specify the fillable fields

    public function semestre()
    {
        return $this->belongsTo('App\Semestre', 'semestre_id');
    }

}



// <?php

// namespace App;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model
// {

// }
