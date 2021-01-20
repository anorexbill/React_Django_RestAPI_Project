import React,{useState, useEffect} from 'react';
import {Grid} from '@material-ui/core'
import {useForm, Form} from "../../components/useForm";
import Controls from "../../components/controls/Controls"
import * as CourseService from "../../services/CourseService"


const typeItems =[
    {id: 'in-person', title: 'In-Person'},
    {id: 'online', title: 'Online'},
    {id: 'other', title: 'Other'}
]

const initialFvalues ={
    courseId: 0,
    courseCode:'',
    courseName: '',
    courseHour: '',
    type: '',
    location: '',
    reference: '',
    endDate: new Date(),
    isCompleted: false

}

export default function CourseForm(){

    const validate = (fieldValues = values ) => {
        let temp = {...errors}
        if ('courseCode' in fieldValues)
            temp.courseCode = fieldValues.courseCode.length !=0 ?"":"This field is required"
        if ('courseName' in fieldValues)
            temp.courseName = fieldValues.courseName?"":"This field is required"
        if ('location' in fieldValues)
            temp.location = fieldValues.location?"":"This field is required"
        if ('reference' in fieldValues)
            temp.reference = fieldValues.reference?"":"This field is required"
        if ('courseHour' in fieldValues)
            temp.courseHour = fieldValues.courseHour?"":"This field is required"
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const{
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }=useForm(initialFvalues,true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if(validate()) 
            CourseService.insertCourses(values)
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input name="courseCode" label="Course Code" value={values.courseCode}
                                    onChange={handleInputChange} error = {errors.courseCode}/>
                    <Controls.Input name="courseName" label="Course Name"  value={values.courseName}
                                    onChange={handleInputChange} error = {errors.courseName}/>
                    <Controls.Input name="location" label="Location"  value={values.location}
                                    onChange={handleInputChange} error = {errors.location}/>
                    <Controls.Input name="reference" label="Calender Reference"  value={values.reference}
                                    onChange={handleInputChange} error = {errors.reference}/>
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup name="type" label="Type of Delivery" value={values.type}
                                         onChange={handleInputChange} items={typeItems}/>
                    <Controls.Select name="courseHour" label="Credit Hour" value={values.courseHour}
                                     onChange={handleInputChange} options={CourseService.getCreditHour()}
                                     error = {errors.courseHour}/>
                    <Controls.DatePicker name="endDate" label="End Date" value={values.endDate}
                                         onChange={handleInputChange}/>
                    <Controls.CheckBox name="isCompleted" label="Lab" value={values.isCompleted}
                                       onChange={handleInputChange}/>
                    <div>
                        <Controls.Button type="submit" text="Submit" />
                        <Controls.Button color="default" text="Reset" onClick={resetForm}/>
                    </div>
                </Grid>

            </Grid>
        </Form>
    )
}