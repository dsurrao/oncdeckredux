export interface PatientSearchCriteria {
    appointment?: {
        /*
            true: get patients with scheduled appts
            false: get all patients
        */
        isScheduled: boolean 
    }    
}