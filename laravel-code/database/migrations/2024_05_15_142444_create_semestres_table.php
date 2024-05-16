<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSemestresTable extends Migration
{
    public function up()
    {
        Schema::create('semestres', function (Blueprint $table) {
            $table->id('idsem');
            $table->string('nom_semestre', 45)->nullable();
            $table->date('date_debut')->nullable();
            $table->date('date_fin')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('semestres');
    }
}
