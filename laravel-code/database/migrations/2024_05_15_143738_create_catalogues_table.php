<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCataloguesTable extends Migration
{
    public function up()
    {
        Schema::create('catalogues', function (Blueprint $table) {
            $table->id('id_catalogue');
            $table->string('intitule_catalogue', 25);
            $table->unsignedBigInteger('semestre_id');
            $table->foreign('semestre_id')->references('idsem')->on('semestres');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('catalogues');
    }
}
