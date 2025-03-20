class Student {
    students = [];
    constructor(id, name, address, email) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
    }
    addStudent() {
    const id = prompt("Enter student id:")
    const name = prompt("Enter the student's name");
    const address = prompt("Enter student address");
    const email = prompt("Enter student email");
    
    const student = new Student(id, name, address, email);
    this.students.push(student); 
    }
    printStudentInfo() {
    document.write("<h3>Students</h3>");
    const list = document.createElement("ul"); 
    for (const student of this.students) { 
    list.innerHTML += `<li><strong>Id</strong>: ${student.id}</li>`;
    list.innerHTML += `<li><strong>Name</strong>: ${student.name}</li>`;
    list.innerHTML += `<li><strong>Address</strong>: ${student.address}</li>`;
    list.innerHTML += `<li><strong>Email</strong>: ${student.email}</li><br>`;
    }
    document.body.appendChild(list); 
    }
    }
    const stobj = new Student(1, "suyog", "kupondole", "sutman@gmail.com");
   
    stobj.addStudent();
    stobj.printStudentInfo();