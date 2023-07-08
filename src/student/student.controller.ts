import { Controller, Get } from '@nestjs/common';
import { StudentService } from './student.service';
import { strict } from 'assert';
import { StudentDTO } from './student.model';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService:StudentService){}
        @Get()
            Get() :StudentDTO[]{
                return this.studentService.getStudentTitle();
            }
        
    
}
