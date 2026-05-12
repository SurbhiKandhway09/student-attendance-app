<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Attendance;

class AttendanceController extends Controller
{
    // Get all students
    public function students()
    {
        return response()->json(
            Student::all()
        );
    }

    // Mark attendance
    public function markAttendance(Request $request)
    {
        $attendance = Attendance::create([
            'student_id' => $request->student_id,
            'date' => now()->toDateString(),
            'status' => $request->status
        ]);

        return response()->json([
            'message' => 'Attendance Saved',
            'data' => $attendance
        ]);
    }

    // Attendance history
    public function history()
    {
        $history = Attendance::with('student')
            ->latest()
            ->get();

        return response()->json($history);
    }
}