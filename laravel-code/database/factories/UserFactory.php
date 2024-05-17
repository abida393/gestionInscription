<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'Nom_user' => $this->faker->lastName,
            'Prenom_user' => $this->faker->firstName,
            'date_naiss' => $this->faker->date(),
            'sexe' => $this->faker->randomElement(['homme', 'femme']),
            'tel' => $this->faker->numerify(str_repeat('#', mt_rand(1, 10))),
            'role' => $this->faker->randomElement(['DirecteurPDG', 'Enseignant', 'Etudiant']),
            'semestre_id' => null,
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
