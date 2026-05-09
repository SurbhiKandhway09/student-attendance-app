<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AttendanceController;

Route::get('/students', [
    AttendanceController::class,
    'students'
]);

Route::post('/attendance', [
    AttendanceController::class,
    'markAttendance'
]);

Route::get('/history', [
    AttendanceController::class,
    'history'
]);