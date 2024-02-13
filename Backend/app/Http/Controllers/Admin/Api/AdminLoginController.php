<?php


namespace App\Http\Controllers\Admin\Api;

use App\Http\Controllers\Controller;
use App\Http\Helper\Helper;
use App\Http\Requests\Admin\AdminLoginRequest;
use Auth;
use Illuminate\Support\Facades\Cookie;

class AdminLoginController extends Controller
{
    public function AdminLogin(AdminLoginRequest $request)
    {

        if (!Auth::guard('admin')->attempt($request->only('email', 'password'))) {
            Helper::sendError('Email or Password is Wrong!!');
        }
        $admin = Auth::guard('admin')->user();
        $token = $admin->createToken('token')->plainTextToken;
        $cookie = cookie('jwt', $token, 60 * 24);
        return response([
            'message' => 'success'
        ])->withCookie($cookie);
    }
    public function admin()
    {
        return Auth::user();
    }

    public function logout()
    {
        $cookie = Cookie::forget('jwt');
        return response([
            'message' => 'success'
        ])->withCookie($cookie);
    }
}