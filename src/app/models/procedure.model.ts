import { ProcedureStatusEnum } from './enums/procedure-status.enum';

export interface Procedure {
    id: string;
    appointmentId?: string;
    status: ProcedureStatusEnum;
    statusReason: string;
}
