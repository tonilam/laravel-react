<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;
use App\Models\User;
use Laravel\Sanctum\Sanctum;

class UserControllerTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->seed();
        $user = User::first();
        Sanctum::actingAs($user, ['*']);
    }

    /**
     * Test user can get their profile data
     */
    public function test_get_user_without_password(): void
    {
        $response = $this->get('/api/user');
 
        $response->assertStatus(200);
        $response->assertJson(fn (AssertableJson $json) =>
            $json->where('id', 1)
                 ->where('email', 'test@test.com')
                 ->missing('password')
                 ->etc()
        );
    }
    
    /**
     * Test user can download a list of users
     */
    public function test_get_users(): void
    {
        $response = $this->get('/api/users');

        $response->assertStatus(200);
        $response->assertJsonPath('per_page', 15);
        $response->assertJsonPath('data.0.name', 'Test User');
    }
}

