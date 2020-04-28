import axios from 'axios'
import { response } from 'express'


const base_url = '/api/students'

export default {

    getAllStudents() {
        return axios.get(base_url, student).then( response => {
            return response.data
        })
    },
    addStudent(student) {
        return axios.post(base_url, student).then (response => {
             return response.data
        })
    },
    updateStudent(student) {
        // /api/student/3
        return axios.patch(`${base_url}/${studnet.id}`,studnet). then ( response => {
            return response.data
        })

    },
    deleteStudent(student) {
        return axios.delete(`${base_url}/${studnet.id}`,studnet). then( response => {
            return response.data
        })
    }
}
