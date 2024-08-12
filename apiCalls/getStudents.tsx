import axios from "axios"
import { BASE_URL } from "@/Constants"
// let data = {
//     name: 'Student',
//     fatherName: 'Father',
//     address: 'Address',
//     course: 'Course',
//     mobile: 'Mobile',
// }

export const getStudents = async (data: any, page: any)=> {
    let str = "/api/find?"
    if(data.name) {
        str += `name=${data.name}&`
    }
    if(data.fatherName) {
        str += `fatherName=${data.fatherName}&`
    }
    if(data.address) {
        str += `address=${data.address}&`
    }
    if(data.course) {
        str += `course=${data.course}&`
    }
    if(data.mobile) {
        str += `mobile=${data.mobile}&`
    }
    if(page) {
        str += `page=${page}`
    }

    try {
        const response = await axios.get(`${str}`);
        const responseData = response.data;
        return responseData;
      } catch (error) {
        console.error(error);
        return null;
      }
    }



    export const googlesignup = async(data: any)=> {
        try {
            const response = await axios.post(`/api/signup`, data);
            const responseData = response.data;
            return responseData;
          } catch (error) {
            console.error(error);
            return null;
          }
    }

    export const getuser = async()=> {
        try {
            const response = await axios.post(`/api/verifyuser`);
            const responseData = response.data;
            return responseData;
          } catch (error) {
            console.error(error);
            return null;
          }
    }
    
    export const click = async(data: any)=> {
      try {
          const response = await axios.post(`/api/postclick`, data);
          const responseData = response.data;
          return responseData;
        } catch (error) {
          console.error(error);
          return null;
        }
  }
