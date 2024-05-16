<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cour extends Model
{
    protected $primaryKey = 'id_cour'; // Définir la clé primaire

    protected $fillable = [
        'intitule_cour',
        'But_cour',
        'mass_horaire',
        'pre_requis',
        'id_catalogue',
        'semestre_id',
    ];

    // Si votre table a des timestamps (created_at, updated_at)
    public $timestamps = true;

    // Définir les relations
    public function catalogue()
    {
        return $this->belongsTo(Catalogue::class, 'id_catalogue');
    }

    public function semestre()
    {
        return $this->belongsTo(Semestre::class, 'semestre_id');
    }
}
