<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FormateurHasCours extends Model
{
    protected $table = 'formateur_has_cours';
    protected $primaryKey = ['id_cour', 'id_user'];
    public $incrementing = false;
    protected $fillable = ['id_cour', 'id_user', 'status'];
    public $timestamps = false;
    
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function cour()
    {
        return $this->belongsTo(Cour::class, 'id_cour');
    }
}
