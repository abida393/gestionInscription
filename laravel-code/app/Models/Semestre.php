<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Semestre extends Model
{
    protected $primaryKey = 'idsem'; // Specify the primary key
    protected $fillable = ['nom_semestre', 'date_debut', 'date_fin']; // Specify the fillable fields
    public $timestamps = false; // If you don't have timestamps in your table
}
