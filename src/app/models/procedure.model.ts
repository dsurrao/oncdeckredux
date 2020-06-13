import { BiopsyTypeEnum } from './enums/biopsy-type.enum';
import { SurgeryTypeEnum } from './enums/surgery-type.enum';
import { ProcedureStatusEnum } from './enums/procedure-status.enum';

export interface Procedure {
    id: string;
    appointmentId?: string;
    procedureType: BiopsyTypeEnum | SurgeryTypeEnum;
    status: ProcedureStatusEnum;
    statusReason: string;
}
