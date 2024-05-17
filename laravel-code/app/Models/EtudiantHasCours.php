<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEtudiantHasCoursTable extends Migration
{
    public function up()
    {
        Schema::create('etudiant_has_cours', function (Blueprint $table) {
            $table->string('id_cour', 25);
            $table->unsignedBigInteger('id_user');
            $table->boolean('validate');

            $table->primary(['id_cour', 'id_user']);

            $table->foreign('id_cour')->references('id_cour')->on('cours');
            $table->foreign('id_user')->references('id_user')->on('users');
        });
    }

    public function down()
    {
        Schema::dropIfExists('etudiant_has_cours');
    }
}
