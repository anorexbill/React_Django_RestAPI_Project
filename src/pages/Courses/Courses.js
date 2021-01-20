import React, {useState} from 'react';
import CourseForm from "./CourseForm";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PageHeader from "../../components/PageHeader";
import {
    Divider,
    Grid, List,
    ListItem, ListItemIcon, ListItemText,
    makeStyles,
    Paper,
    TableBody,
    TableCell,
    TableRow,
    TextField,
    Typography
} from '@material-ui/core';
import useTable from "../../components/useTable";
import * as CourseService from "../../services/CourseService"
import Controls from "../../components/controls/Controls";
import {Form} from "../../components/useForm";

const useStyles = makeStyles(theme => ({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3)
    }
}))

export default function Courses(){

    const classes = useStyles();
    const {records, setRecords} = useState(CourseService.getAllCourses())

    const {
        TblContainer
    } = useTable();

    return(
        <>
            <PageHeader
                title="Courses" subTitle = "List of Courses" icon ={<MenuBookIcon fontSize='large'/>}/>
            <Paper className={classes.pageContent}>
                {/*<CourseForm/>*/}
                <Form>
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField variant="outlined" inputProps={{ readOnly: true }} label="Course Code"
                            defaultValue=""/>
                            <TextField variant="outlined" inputProps={{ readOnly: true }} label="Course Name"
                                       defaultValue=""/>
                            <TextField variant="outlined" inputProps={{ readOnly: true }} label="Location"
                                       defaultValue=""/>
                            <TextField variant="outlined" inputProps={{ readOnly: true }} label="Calender Reference"
                                       defaultValue=""/>

                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5">Course Info</Typography>
                            <TextField variant="outlined" inputProps={{ readOnly: true, multiline:true }} label="Course Name"
                                       defaultValue=""/>

                            <div>
                                <Controls.Button type="submit" text="Submit" />
                                <Controls.Button color="secondary" text="Reset" />
                            </div>
                        </Grid>
                    </Grid>
                </Form>
            </Paper>

            <Paper className={classes.pageContent}>
                <Grid item xs={6}>
                    <Typography variant="h5">Learning Outcomes</Typography>
                </Grid>

                <Grid item xs={12}>

                    <List component="nav" className={classes.root} aria-label="mailbox folders">
                        <ListItem button>
                            <ListItemText primary="Have a deep understanding, and practical knowledge of object
                                oriented analysis, design, and development." />
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                            <ListItemText primary="Design and develop software programs in Java." />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Define the concepts of object-oriented design, such as inheritance and polymorphism." />
                        </ListItem>
                        <Divider light />
                        <ListItem button>
                            <ListItemText primary="Apply miscellaneous programming concepts in Java, such as cloning, generic types, multi-threading, event-based programming, etc." />
                        </ListItem>
                    </List>
                    <Grid item xs={6}>
                        <Controls.Button type="submit" color="default" text="Add Outcome" />
                    </Grid>
                </Grid>
            </Paper>

            <Paper className={classes.pageContent}>
                <Grid item xs={12}>
                    <Typography variant="h5">Final Grade Determination</Typography>
                </Grid>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                        <Typography variant="h5">Final Grade Determination</Typography>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Typography variant="h5">Final Grade Determination</Typography>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Typography variant="h5">Final Grade Determination</Typography>
                    </Grid>
                </Grid>
            </Paper>

        </>

    )
}