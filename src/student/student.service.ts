import { Injectable } from '@nestjs/common';
import { StudentDTO } from './student.model';

@Injectable()
export class StudentService {
    getStudentTitle(): StudentDTO[] {
        const lst: StudentDTO[] = [];
        lst.push({
            firstName: 'Mike',
            studentId: 22,
            lastName: 'addf',
            age: 45
        })
        lst.push({
            firstName: 'Bob',
            studentId: 34,
            lastName: 'addf',
            age: 24
        })
        return lst;
    }
}
