import { SurgeryType } from './surgery-type.model';
import { Histology } from '../common/histology.model';
import { Receptors } from '../common/receptors.model';
import { Features } from '../common/features.model';
import { SurgicalMarginsEnum } from '../enums/surgical-margins.enum';

export interface SurgicalPathology {
    id: string;
    procedureId: string;
    reportDate: string;
    surgeryType: SurgeryType
    lymphNodeDissectionType: string;
    histology: Histology;
    receptors: Receptors;
    features: Features;
    surgicalMargins: SurgicalMarginsEnum
}