<?php


namespace App\Http\Controllers\Admin\Api;

use App\Http\Controllers\Controller;
use App\Http\Helper\Helper;
use App\Http\Requests\Admin\AdminRegisterRequest;
use App\Http\Resources\Admin\AdminResource;
use App\Models\Admin;
use Auth;
use Hash;
use Spatie\Permission\Models\Role;

class AdminRegisterController extends Controller
{
    public function AdminRegister(AdminRegisterRequest $request){
        $admin =Admin::create([
            'name' => $request->name,
            'email' => $request->email,
            'password'=> Hash::make($request->password)
        ]);
        // assign role
        $admin_role = Role::where(['name' => 'vendor'])->first();
        if($admin_role){
            $admin->assignRole($admin_role);
        }
       
       return new AdminResource($admin);
    }
}
