import React from 'react'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { handleNext, handlePrev } from '../redux/slices/stepper'
import DropDown from './DropDown'
import JobDescription from './JobDescription'

const jobRoles = ['ReactJs','Api Testing']
const defaultValue = 'Select Role'
const name = 'jobRole'
const selectJob = {
    type:'select',
    id:'jobRole',
    name:'jobRole',
    defaultVal:'Choose Job',
    options:['ReactJs','Api Testing']
}

const JobForm = () => {
    const dispatch = useDispatch()
    const {activeForm} = useSelector(state => state.stepper)

    const handleChange = (e) => {

    }

  return (
    <div>
        <div>
            <DropDown {...{...selectJob,handleChange}}/>
        </div>
        <div>
            {activeForm === 1 && <JobDescription />}
        </div>
        <div>
            <Button text={'Previous'} onClick={() => {dispatch(handlePrev(activeForm-1))}} disabled={activeForm === 1}/>
            <Button text={'next'} onClick={() => {dispatch(handleNext(activeForm+1))}} disabled={activeForm === 5}/>
        </div>
    </div>
  )
}

export default JobForm