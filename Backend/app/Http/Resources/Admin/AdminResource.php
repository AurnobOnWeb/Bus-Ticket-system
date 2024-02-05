<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class AdminResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'success' =>true,
            'admin_id' =>$this->id,
            'name' =>$this->name,
            'adminEmail' =>$this->email,
            'token' =>$this->createToken("Token")->plainTextToken,
            'roles' =>$this->roles->pluck('name') ?? [],
            'rolesPermissions' =>$this->getPermissionsViaRoles()->pluck('name') ?? [],
        ];
    }
}
