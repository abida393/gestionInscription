<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('id_user');
            $table->string('Nom_user', 45);
            $table->string('Prenom_user', 45);
            $table->date('date_naiss')->nullable();
            $table->enum('sexe', ['homme', 'femme']);
            $table->string('tel', 15)->nullable();
            $table->enum('role', ['DirecteurPDG', 'Enseignant', 'Etudiant']);
            $table->unsignedBigInteger('semestre_id')->nullable();
            $table->foreign('semestre_id')->references('idsem')->on('semestres');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
}
