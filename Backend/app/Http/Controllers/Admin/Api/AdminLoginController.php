<?php


namespace App\Http\Controllers\Admin\Api;

use App\Http\Controllers\Controller;
use App\Http\Helper\Helper;
use App\Http\Requests\Admin\AdminLoginRequest;
use App\Http\Resources\Admin\AdminResource;
use Auth;

class AdminLoginController extends Controller
{
    public function AdminLogin(AdminLoginRequest $request){

        if(!Auth::guard('admin')->attempt($request->only('email','password'))){
            Helper::sendError('Email or Password is Wrong!!');
        }
       return new AdminResource(auth()->guard('admin')->user());
    }
}