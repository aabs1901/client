<template>
  <div id="app">
    
    <NewStudentForm v-on:student-added="newStudentAdded"></NewStudentForm>
    <StudentTable
      v-bind:students="students" 
      v-on:student-present="studentArrivedOrLeft"
      v-on:delete-student="studentDeleted">
    </StudentTable>
    <StudentMessage v-bind:message="message" v-bind:name="name"></StudentMessage>

  </div>
</template>

<script>
import NewStudentForm from './components/NewStudentForm.vue'
import StudentTable from './components/StudentTable.vue'
import StudentMessage from './components/StudentMessage.vue'

export default {
  name: 'app',
  data() {
    return {
      students:  [],
      message: '',
      name: ''
    }
  },
  components: {
    NewStudentForm,
    StudentTable,
    StudentMessage
  },
  mounted() {
    this.updateStudents()

  },
  methods: {
    newStudentAdded(student) {
      this.$student_api.addStudent(student).then( student => {
        this.updateStudents()
      }) .catch( err => {
        let message = err.response.data.join(',')
        alert("error adding student", message)
      } )

      
    
    },
    studentArrivedOrLeft(student) {
      this.$student_api.updateStudent(student).then(()=>{
        this.name =student.name
        this.message = student.present ? 'Good Morning and Welcome,': 'Have a nice day goodbye,'
        this.updateStudents()
      })
    
    },
   updateStudents( ) {
     this.$student_api.getAllStudents().then( students => {
       this.students= students
     })

   },
   studentDeleted(student) {
     this.$student_api.deleteStudent(student.id).then(()=> {
       this.updateStudents()

     })
   },
   
  }
}

</script>

<style>


</style>
