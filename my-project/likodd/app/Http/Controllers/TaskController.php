<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Http\Controllers\Controller;

class TaskController extends Controller
{

    public function index()
    {
        return response()->json(Task::all());
    }
}
