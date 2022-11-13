<?php

namespace App\Http\Requests;

// use Doctrine\Inflector\Rules\French\Rules;
use Illuminate\Validation\Rules\Password;
// use Doctrine\Inflector\Rules\English\Rules;
use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
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
            'email' => ['required', 'string', 'max:255', 'unique:users'],
            'password' => ['required', 'string', Password::defaults()],
            'name' => ['required', 'string', 'max:255'],
            'matric' => ['required', 'integer'],
            'speciality' => ['required', 'string', 'max:255'],
            'about' => ['required', 'string', 'max:255'],
            
        ];
    }
}
