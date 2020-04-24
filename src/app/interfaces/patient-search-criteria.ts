export interface PatientSearchCriteria {
    demog?: {
        name?: string,
        ageLower?: number
        ageUpper?: number
    },
    biopsies?: {
        isScheduled?: boolean,
        completedInPastYear?: boolean
    }
}