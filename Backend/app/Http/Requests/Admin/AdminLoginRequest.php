<?php

namespace App\Http\Requests\Admin;

use App\Http\Helper\Helper;
use Illuminate\Foundation\Http\FormRequest;

class AdminLoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'email'=> 'required|email|exists:admins,email',
            'password' =>'required'
        ];
    }
    public function failedValidation(\Illuminate\Contracts\Validation\Validator $validator){
        Helper::sendError('validation error',$validator->errors());
    }
}
