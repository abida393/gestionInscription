<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Catalogue extends Model
{
    protected $fillable = [
        'intitule_catalogue',
        'semestre_id',
    ];

    // If your table has timestamps (created_at, updated_at)
    public $timestamps = false;

    // Define the relationship with Semestre model
    public function semestre()
    {
        return $this->belongsTo(Semestre::class);
    }
}
