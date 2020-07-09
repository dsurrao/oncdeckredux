import { SurgeryType } from './surgery-type.model';
import { Histology } from '../common/histology.model';
import { Receptors } from '../common/receptors.model';
import { Features } from '../common/features.model';
import { SurgicalMarginsEnum } from '../enums/surgical-margins.enum';
import { ProcedureStatusEnum } from '../enums/procedure-status.enum';

export interface SurgicalPathology {
    id: string;
    appointmentId: string;
    status: ProcedureStatusEnum;
    statusReason?: string;
    reportDate?: string;
    lymphNodeDissectionType?: string;
    histology?: Histology;
    receptors?: Receptors;
    features?: Features;
    surgicalMargins?: SurgicalMarginsEnum
}
