<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
 
class LoginController extends Controller
{
    /**
     * Handle an authentication attempt.
     */
    public function authenticate(Request $request): object
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
 
        if (Auth::attempt([...$credentials, 'active' => 1])) {
            $request->session()->regenerate();
 
            return response()->json(Auth::user());
        }
 
        return response()->json(['error' => 'The provided credentials do not match our records.'], 403);
    }

    public function signout(Request $request): object
    {
        auth()->forgetGuards();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json(['result' => true]);
    }
}
