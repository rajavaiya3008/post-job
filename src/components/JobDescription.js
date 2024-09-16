import React from 'react'
import Section from './Section'

const JobDescData = [
    {
        formName:'jobDescription',
        sectionTitle:'Write a headline for your job post',
        inputFields:[
            {
                type:'text',
                id:'jobTitle',
                name:'jobTitle',
                label:'JOB TITLE',
                placeholder:'Job Title'
            }
        ]
    }
]

const JobDescription = () => {
  return (
    <div>
        {
            JobDescData.map((section,i) => <Section key={i} {...section}/>)
        }
    </div>
  )
}

export default JobDescription