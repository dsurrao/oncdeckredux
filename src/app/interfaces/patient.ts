import { Biopsy } from './biopsy';
import { PatientDemog } from './patient-demog';

export interface Patient {
    id: string;
    demog: PatientDemog;
    biopsies?: Biopsy[];
    dateCreatedMs: number;
}