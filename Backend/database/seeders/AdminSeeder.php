<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $adminList = Permission::create(['guard_name' => 'admin', 'name' => 'admin.list']);
        $adminView = Permission::create(['guard_name' => 'admin', 'name' => 'admin.view']);
        $adminCreate = Permission::create(['guard_name' => 'admin', 'name' => 'admin.create']);
        $adminUpdate = Permission::create(['guard_name' => 'admin', 'name' => 'admin.update']);
        $adminDelete = Permission::create(['guard_name' => 'admin', 'name' => 'admin.delete']);
        $admin_role = Role::create(['guard_name' => 'admin', 'name' => 'admin']);
        $vendor_role = Role::create(['guard_name' => 'admin', 'name' => 'vendor']);

        $admin_role->givePermissionTo([$adminList, $adminView, $adminCreate, $adminUpdate, $adminDelete]);
        $vendor_role->givePermissionTo([$adminList]);

        $admin = Admin::create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('password')
        ]);

        $vendor = Admin::create([
            'name' => 'Vendor',
            'email' => 'vendor@admin.com',
            'password' => Hash::make('password')
        ]);

        $admin->assignRole($admin_role);
        $vendor->assignRole($vendor_role);
    }
}
