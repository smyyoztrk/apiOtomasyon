const chakram = require('chakram'),
expect = chakram.expect;

describe("CoursesCategories Module Tobeto", function(){
    it("POST - CreateCourseCategories", function(){
        const reqBody = {
            "name" : "java",
            "priority": 1,
            "visibility": true};
        const expectedData ={
            "name": "java",
            "priority": 1,
            "visibility": true};
        const response = chakram.post("http://localhost:60805/api/CourseCategories",reqBody);
        expect(response).to.have.status(201);
        expect(response).to.comprise.of.json(expectedData)
        return chakram.wait();
    });
    it("GET - CreateCourseCategorieid", function(){
        expData={
            "id": 8,
            "name": "yazılım",
            "priority": 1,
            "visibility": true
          }
        
        const response = chakram.get("http://localhost:60805/api/CourseCategories/8");
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(expData)
        return chakram.wait();

    });
});


describe("Courses Module Tobeto", function(){
    it("POST - CreateCourse", function(){
        const reqBody = {
            "courseCategoryId": 8,
            "name": "javascript",
            "totalDuration": 4,
            "priority": 1,
            "isActive": true
          };
        const expectedData={
            "courseCategoryId": 8,
            "name": "javascript",
            "totalDuration": 4,
            "priority": 1,
            "isActive": true
          }
        const response = chakram.post("http://localhost:60805/api/Courses",reqBody);
        expect(response).to.have.status(201);
        expect(response).to.comprise.of.json(expectedData)
        return chakram.wait();
    });
    it("GET - Courseid", function(){

        const expectedData={"id": 6,
        "courseCategoryId": 8,
        "name": "Python",
        "totalDuration": 5,
        "priority": 1,
        "isActive": true};
        
        const response = chakram.get("http://localhost:60805/api/Courses/6");
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(expectedData)
        return chakram.wait();

    });
    it("PUT - Course", function(){
        const reqBody = {
            "id": 6,
            "courseCategoryId": 8,
            "name": "javaa",
            "totalDuration": 5,
            "priority": 1,
            "isActive": true
          };

        const expectedData={
            "id": 6,
            "courseCategoryId": 8,
            "name": "javaa",
            "totalDuration": 5,
            "priority": 1,
            "isActive": true
          };
        
        const response = chakram.get("http://localhost:60805/api/Courses",reqBody);
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(expectedData)
        return chakram.wait();

    });
    it("DELETE - CourseID", function(){

        const expectedData={
            "id": 6};
        
        const response = chakram.delete("http://localhost:60805/api/Courses/6");
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(expectedData)
        return chakram.wait();
        });


});





















// describe("CourseCtegories Module Tobeto", function() {

   
 
//     it("POST - CreateCourseCategories", function ()  {
//        const body = {
//         "name": "java",
//         "priority": 1,
//         "visibility": true};
       
//        const response = chakram.post("http://localhost:60805/api/CourseCategories",body);
//        expect(response).to.have.status(201);
//        //expect(response).to.comprise.of.json(resBody); 
//        //expect(response).to.have.header('content-type', 'application/json'); 
//        return chakram.wait();
 
//     });
//     it("DELETE - DeleteUser", function ()  {
//        const body = {
 
//           "id": 9
//        };
    
//        const response = chakram.post("http://localhost:60805/api/Users",body);
//        expect(response).to.have.status(200);
//        //expect(response).to.comprise.of.json(resBody); 
//        //expect(response).to.have.header('content-type', 'application/json'); 
//        return chakram.wait();
//     });


// describe("Courses Module Tobeto", function() {

   
//     it("GET - GetCources", function () {
//         const resBody ={
//             "id": 3,
//             "courseCategoryId": 1,
//             "name": "python",
//             "totalDuration": 10,
//             "priority": 1,
//             "isActive": true
                
//       };
 
//        const response = chakram.get("http://localhost:60805/api/Courses/3");
//        expect(response).to.have.status(200);
//        expect(response).to.comprise.of.json(resBody); 
//        //expect(response).to.have.header('content-type', 'application/json'); 
//        return chakram.wait();
//     });
 
//     it("POST - CreateCourses", function ()  {
//        const body = {
//           "firstName": "candan",
//           "lastName": "öz",
//           "email": "candan@gmail.com",
//           "password": "12345"
//        };
       
//        const response = chakram.post("http://localhost:60805/api/Users",body);
//        expect(response).to.have.status(201);
//        //expect(response).to.comprise.of.json(resBody); 
//        //expect(response).to.have.header('content-type', 'application/json'); 
//        return chakram.wait();
 
//  });
//     it("DELETE - DeleteUser", function ()  {
//        const body = {
 
//           "id": 9
//        };
    
//        const response = chakram.post("http://localhost:60805/api/Users",body);
//        expect(response).to.have.status(200);
//        //expect(response).to.comprise.of.json(resBody); 
//        //expect(response).to.have.header('content-type', 'application/json'); 
//        return chakram.wait();
//     });
 

// });
