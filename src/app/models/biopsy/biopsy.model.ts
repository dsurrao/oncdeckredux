import { BiopsySite } from './biopsy-site.model';
import { Histology } from '../common/histology.model';
import { Receptors } from '../common/receptors.model';
import { Features } from '../common/features.model';
import { ProcedureStatusEnum } from '../enums/procedure-status.enum';

export interface Biopsy {
  id: string;
  appointmentId: string;
  status: ProcedureStatusEnum;
  statusReason?: string;
  pathologyReportDate?: string;
  site?: BiopsySite;
  histology?: Histology;
  receptors?: Receptors;
  features?: Features;
}
