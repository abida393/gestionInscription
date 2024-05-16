<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoursTable extends Migration
{
    public function up()
    {
        Schema::create('cours', function (Blueprint $table) {
            $table->string('id_cour', 25)->primary();
            $table->string('intitule_cour', 45);
            $table->string('But_cour', 45);
            $table->integer('mass_horaire');
            $table->string('pre_requis', 105);
            $table->unsignedBigInteger('id_catalogue');
            $table->foreign('id_catalogue')->references('id_catalogue')->on('catalogues');
            $table->unsignedBigInteger('semestre_id');
            $table->foreign('semestre_id')->references('idsem')->on('semestres');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('cours');
    }
}
